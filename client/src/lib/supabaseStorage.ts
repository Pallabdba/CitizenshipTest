import { supabase } from './supabase';
import { api as staticApi } from './clientStorage';
import type { TestSession, TestAnswer, DashboardStats, StudyActivity, TestResult } from '@shared/schema';

async function getUserId(): Promise<string> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');
  return user.id;
}

function rowToSession(r: any): TestSession {
  return {
    id: r.id,
    userId: r.user_id,
    status: r.status,
    testType: r.test_type,
    totalQuestions: r.total_questions,
    correctAnswers: r.correct_answers,
    score: r.score,
    isPassed: r.is_passed,
    startTime: new Date(r.start_time),
    endTime: r.end_time ? new Date(r.end_time) : null,
  };
}

function rowToAnswer(r: any): TestAnswer {
  return {
    id: r.id,
    sessionId: r.session_id,
    questionId: r.question_id,
    selectedAnswer: r.selected_answer,
    isCorrect: r.is_correct,
    timeSpent: r.time_spent,
    answeredAt: new Date(r.answered_at),
  };
}

export const dbApi = {
  async getTestSessions(): Promise<TestSession[]> {
    const userId = await getUserId();
    const { data, error } = await supabase
      .from('citizenship_test_sessions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return (data || []).map(rowToSession);
  },

  async getTestSession(id: number): Promise<any> {
    const { data, error } = await supabase
      .from('citizenship_test_sessions')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    const answers = await dbApi.getTestAnswers(id);
    const questions = answers
      .map(a => staticApi.getQuestion(a.questionId || 0))
      .filter(Boolean);
    return { ...rowToSession(data), questions, answers, passingScore: 75, timeLimit: 45 * 60 };
  },

  async createTestSession(data: any): Promise<TestSession> {
    const userId = await getUserId();
    const { data: row, error } = await supabase
      .from('citizenship_test_sessions')
      .insert({
        user_id: userId,
        test_type: data.testType ?? 'practice',
        status: 'in_progress',
        total_questions: data.totalQuestions ?? 20,
        correct_answers: 0,
        score: 0,
        is_passed: false,
        start_time: new Date().toISOString(),
      })
      .select()
      .single();
    if (error) throw error;
    return rowToSession(row);
  },

  async completeTestSession(id: number): Promise<TestSession> {
    const answers = await dbApi.getTestAnswers(id);
    const correct = answers.filter(a => a.isCorrect).length;
    const total = answers.length;
    const score = total ? Math.round((correct / total) * 100) : 0;

    const allValuesPassed = answers
      .filter(a => staticApi.getQuestion(a.questionId || 0)?.isValuesQuestion)
      .every(a => a.isCorrect);
    const isPassed = score >= 75 && allValuesPassed;

    const { data: row, error } = await supabase
      .from('citizenship_test_sessions')
      .update({
        status: 'completed',
        correct_answers: correct,
        score,
        is_passed: isPassed,
        end_time: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return rowToSession(row);
  },

  async getTestAnswers(sessionId: number): Promise<TestAnswer[]> {
    const { data, error } = await supabase
      .from('citizenship_test_answers')
      .select('*')
      .eq('session_id', sessionId);
    if (error) throw error;
    return (data || []).map(rowToAnswer);
  },

  async createTestAnswer(data: any): Promise<TestAnswer> {
    const { data: row, error } = await supabase
      .from('citizenship_test_answers')
      .insert({
        session_id: data.sessionId,
        question_id: data.questionId,
        selected_answer: data.selectedAnswer,
        is_correct: data.isCorrect,
        time_spent: data.timeSpent ?? 0,
        answered_at: new Date().toISOString(),
      })
      .select()
      .single();
    if (error) throw error;

    // Update progress per category
    const q = staticApi.getQuestion(data.questionId);
    if (q?.categoryId) {
      await dbApi.upsertProgress(q.categoryId, data.isCorrect);
    }

    return rowToAnswer(row);
  },

  async upsertProgress(categoryId: number, isCorrect: boolean): Promise<void> {
    const userId = await getUserId();
    const { data: existing } = await supabase
      .from('citizenship_user_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('category_id', categoryId)
      .maybeSingle();

    const total = (existing?.total_questions ?? 0) + 1;
    const correct = (existing?.correct_answers ?? 0) + (isCorrect ? 1 : 0);

    if (existing) {
      await supabase
        .from('citizenship_user_progress')
        .update({ total_questions: total, correct_answers: correct, last_studied: new Date().toISOString() })
        .eq('user_id', userId)
        .eq('category_id', categoryId);
    } else {
      await supabase
        .from('citizenship_user_progress')
        .insert({ user_id: userId, category_id: categoryId, total_questions: total, correct_answers: correct, last_studied: new Date().toISOString(), streak_days: 1 });
    }
  },

  async getUserProgress(): Promise<any[]> {
    const userId = await getUserId();
    const { data, error } = await supabase
      .from('citizenship_user_progress')
      .select('*')
      .eq('user_id', userId);
    if (error) throw error;
    return (data || []).map(p => ({
      id: p.id,
      userId: p.user_id,
      categoryId: p.category_id,
      totalQuestions: p.total_questions,
      correctAnswers: p.correct_answers,
      accuracy: p.total_questions > 0 ? Math.round((p.correct_answers / p.total_questions) * 100) : 0,
      lastStudied: new Date(p.last_studied),
      streakDays: p.streak_days,
      category: staticApi.getCategory(p.category_id),
    }));
  },

  async getDashboardStats(): Promise<DashboardStats> {
    const [sessions, prog] = await Promise.all([dbApi.getTestSessions(), dbApi.getUserProgress()]);
    const completed = sessions.filter(s => s.status === 'completed');
    const passed = completed.filter(s => s.isPassed);
    const avg = completed.length
      ? Math.round(completed.reduce((s, x) => s + (x.score || 0), 0) / completed.length)
      : 0;
    const streak = prog.reduce((m, p) => Math.max(m, p.streakDays || 0), 0);
    const tq = prog.reduce((s, p) => s + (p.totalQuestions || 0), 0);
    const ca = prog.reduce((s, p) => s + (p.correctAnswers || 0), 0);
    return {
      totalTests: completed.length,
      passedTests: passed.length,
      averageScore: avg,
      currentStreak: streak,
      studyTime: completed.length * 30,
      totalQuestions: tq,
      correctAnswers: ca,
      accuracy: tq ? Math.round((ca / tq) * 100) : 0,
    };
  },

  async getStudyActivity(): Promise<StudyActivity[]> {
    const sessions = await dbApi.getTestSessions();
    return sessions.slice(0, 5).map(s => ({
      id: s.id.toString(),
      type: 'test_completed' as const,
      title: s.testType === 'practice' ? 'Practice Test Completed' : 'Official Test Completed',
      description: `Scored ${s.score || 0}% with ${s.correctAnswers || 0}/${s.totalQuestions || 0} correct`,
      timestamp: s.endTime || s.startTime || new Date(),
      icon: s.isPassed ? 'check-circle' : 'x-circle',
      iconColor: s.isPassed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600',
      score: s.score || 0,
    }));
  },

  async getSessionResults(sessionId: number): Promise<TestResult> {
    const session = await dbApi.getTestSession(sessionId);
    const answers: TestAnswer[] = session.answers;
    const opt = (q: any, l: string) =>
      ({ A: q.optionA, B: q.optionB, C: q.optionC, D: q.optionD || '' } as any)[l] || '';
    const incorrectQuestions = answers
      .filter(a => !a.isCorrect)
      .map(a => {
        const q = staticApi.getQuestion(a.questionId || 0);
        if (!q) return null;
        return {
          question: q.question,
          selectedAnswer: a.selectedAnswer,
          selectedAnswerText: opt(q, a.selectedAnswer),
          correctAnswer: q.correctAnswer,
          correctAnswerText: opt(q, q.correctAnswer),
          explanation: q.explanation || '',
        };
      })
      .filter(Boolean) as any[];
    return {
      id: sessionId.toString(),
      sessionId,
      score: session.score || 0,
      totalQuestions: session.totalQuestions || 0,
      correctAnswers: session.correctAnswers || 0,
      timeSpent: session.endTime && session.startTime
        ? Math.round((new Date(session.endTime).getTime() - new Date(session.startTime).getTime()) / 1000)
        : 0,
      category: 'Mixed',
      isPassed: session.isPassed || false,
      completedAt: session.endTime || new Date(),
      incorrectQuestions,
    };
  },

  async getTestResults(): Promise<TestResult[]> {
    const sessions = await dbApi.getTestSessions();
    const completed = sessions.filter(s => s.status === 'completed');
    const results = await Promise.all(completed.map(s => dbApi.getSessionResults(s.id)));
    return results.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());
  },
};
