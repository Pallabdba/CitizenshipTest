import { supabase } from './supabase';
import { api as staticApi } from './clientStorage';
import type { TestSession, TestAnswer, DashboardStats, StudyActivity, TestResult } from '@shared/schema';

async function getUserId(): Promise<string> {
  const { data: { session } } = await supabase.auth.getSession();
  if (session?.user?.id) return session.user.id;
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

  async seedDummyData(): Promise<void> {
    const userId = await getUserId();

    // 5 dummy tests showing improvement over 2 weeks: 65% → 70% → 80% → 85% → 90%
    const dummyTests = [
      { daysAgo: 14, score: 65, correct: 13, isPassed: false, answers: [{"qid":41,"correct":true,"answer":"B","categoryId":1},{"qid":212,"correct":true,"answer":"B","categoryId":4},{"qid":150,"correct":true,"answer":"B","categoryId":3},{"qid":24,"correct":true,"answer":"A","categoryId":1},{"qid":11,"correct":true,"answer":"B","categoryId":1},{"qid":170,"correct":true,"answer":"B","categoryId":3},{"qid":149,"correct":false,"answer":"A","categoryId":3},{"qid":156,"correct":false,"answer":"A","categoryId":3},{"qid":202,"correct":true,"answer":"B","categoryId":4},{"qid":100,"correct":false,"answer":"A","categoryId":2},{"qid":49,"correct":false,"answer":"A","categoryId":1},{"qid":136,"correct":true,"answer":"B","categoryId":3},{"qid":37,"correct":true,"answer":"B","categoryId":1},{"qid":194,"correct":true,"answer":"B","categoryId":4},{"qid":25,"correct":true,"answer":"C","categoryId":1},{"qid":166,"correct":true,"answer":"B","categoryId":3},{"qid":48,"correct":false,"answer":"A","categoryId":1},{"qid":4,"correct":false,"answer":"A","categoryId":1},{"qid":208,"correct":true,"answer":"B","categoryId":4},{"qid":196,"correct":false,"answer":"A","categoryId":4}] },
      { daysAgo: 10, score: 70, correct: 14, isPassed: false, answers: [{"qid":46,"correct":false,"answer":"A","categoryId":1},{"qid":145,"correct":true,"answer":"B","categoryId":3},{"qid":91,"correct":true,"answer":"B","categoryId":2},{"qid":142,"correct":false,"answer":"A","categoryId":3},{"qid":104,"correct":true,"answer":"B","categoryId":2},{"qid":6,"correct":true,"answer":"C","categoryId":1},{"qid":123,"correct":true,"answer":"B","categoryId":3},{"qid":13,"correct":false,"answer":"A","categoryId":1},{"qid":21,"correct":true,"answer":"B","categoryId":1},{"qid":112,"correct":true,"answer":"B","categoryId":2},{"qid":31,"correct":true,"answer":"B","categoryId":1},{"qid":72,"correct":false,"answer":"A","categoryId":2},{"qid":194,"correct":true,"answer":"B","categoryId":4},{"qid":49,"correct":true,"answer":"B","categoryId":1},{"qid":60,"correct":false,"answer":"A","categoryId":1},{"qid":78,"correct":true,"answer":"A","categoryId":2},{"qid":116,"correct":true,"answer":"B","categoryId":2},{"qid":68,"correct":true,"answer":"B","categoryId":1},{"qid":215,"correct":false,"answer":"A","categoryId":4},{"qid":48,"correct":true,"answer":"B","categoryId":1}] },
      { daysAgo: 7,  score: 80, correct: 16, isPassed: true,  answers: [{"qid":170,"correct":true,"answer":"B","categoryId":3},{"qid":113,"correct":true,"answer":"B","categoryId":2},{"qid":104,"correct":true,"answer":"B","categoryId":2},{"qid":167,"correct":false,"answer":"A","categoryId":3},{"qid":217,"correct":true,"answer":"B","categoryId":4},{"qid":140,"correct":true,"answer":"B","categoryId":3},{"qid":88,"correct":true,"answer":"B","categoryId":2},{"qid":148,"correct":true,"answer":"B","categoryId":3},{"qid":100,"correct":true,"answer":"B","categoryId":2},{"qid":111,"correct":true,"answer":"B","categoryId":2},{"qid":172,"correct":true,"answer":"B","categoryId":4},{"qid":157,"correct":true,"answer":"C","categoryId":3},{"qid":210,"correct":true,"answer":"B","categoryId":4},{"qid":162,"correct":true,"answer":"B","categoryId":3},{"qid":99,"correct":false,"answer":"A","categoryId":2},{"qid":48,"correct":false,"answer":"A","categoryId":1},{"qid":158,"correct":true,"answer":"C","categoryId":3},{"qid":163,"correct":false,"answer":"A","categoryId":3},{"qid":19,"correct":true,"answer":"B","categoryId":1},{"qid":14,"correct":true,"answer":"B","categoryId":1}] },
      { daysAgo: 3,  score: 85, correct: 17, isPassed: true,  answers: [{"qid":19,"correct":true,"answer":"B","categoryId":1},{"qid":131,"correct":true,"answer":"C","categoryId":3},{"qid":95,"correct":false,"answer":"A","categoryId":2},{"qid":100,"correct":true,"answer":"B","categoryId":2},{"qid":58,"correct":true,"answer":"B","categoryId":1},{"qid":8,"correct":true,"answer":"B","categoryId":1},{"qid":138,"correct":true,"answer":"B","categoryId":3},{"qid":26,"correct":true,"answer":"B","categoryId":1},{"qid":189,"correct":true,"answer":"B","categoryId":4},{"qid":41,"correct":true,"answer":"B","categoryId":1},{"qid":166,"correct":true,"answer":"B","categoryId":3},{"qid":114,"correct":false,"answer":"A","categoryId":2},{"qid":102,"correct":false,"answer":"A","categoryId":2},{"qid":203,"correct":true,"answer":"B","categoryId":4},{"qid":126,"correct":true,"answer":"C","categoryId":3},{"qid":206,"correct":true,"answer":"B","categoryId":4},{"qid":86,"correct":true,"answer":"B","categoryId":2},{"qid":132,"correct":true,"answer":"B","categoryId":3},{"qid":30,"correct":true,"answer":"A","categoryId":1},{"qid":3,"correct":true,"answer":"C","categoryId":1}] },
      { daysAgo: 1,  score: 90, correct: 18, isPassed: true,  answers: [{"qid":166,"correct":true,"answer":"B","categoryId":3},{"qid":93,"correct":true,"answer":"B","categoryId":2},{"qid":82,"correct":true,"answer":"B","categoryId":2},{"qid":48,"correct":true,"answer":"B","categoryId":1},{"qid":11,"correct":true,"answer":"B","categoryId":1},{"qid":163,"correct":true,"answer":"B","categoryId":3},{"qid":155,"correct":false,"answer":"A","categoryId":3},{"qid":134,"correct":true,"answer":"C","categoryId":3},{"qid":138,"correct":true,"answer":"B","categoryId":3},{"qid":66,"correct":true,"answer":"B","categoryId":1},{"qid":133,"correct":true,"answer":"C","categoryId":3},{"qid":125,"correct":true,"answer":"C","categoryId":3},{"qid":144,"correct":true,"answer":"B","categoryId":3},{"qid":175,"correct":true,"answer":"B","categoryId":4},{"qid":100,"correct":false,"answer":"A","categoryId":2},{"qid":106,"correct":true,"answer":"B","categoryId":2},{"qid":23,"correct":true,"answer":"A","categoryId":1},{"qid":112,"correct":true,"answer":"B","categoryId":2},{"qid":60,"correct":true,"answer":"B","categoryId":1},{"qid":83,"correct":true,"answer":"B","categoryId":2}] },
    ];

    for (const t of dummyTests) {
      const startTime = new Date(Date.now() - t.daysAgo * 24 * 60 * 60 * 1000);
      const endTime = new Date(startTime.getTime() + 25 * 60 * 1000); // 25 min

      const { data: session, error: sessionErr } = await supabase
        .from('citizenship_test_sessions')
        .insert({
          user_id: userId,
          test_type: 'practice',
          status: 'completed',
          total_questions: 20,
          correct_answers: t.correct,
          score: t.score,
          is_passed: t.isPassed,
          start_time: startTime.toISOString(),
          end_time: endTime.toISOString(),
        })
        .select()
        .single();

      if (sessionErr || !session) continue;

      const answerRows = t.answers.map((a: any) => ({
        session_id: session.id,
        question_id: a.qid,
        selected_answer: a.answer,
        is_correct: a.correct,
        time_spent: Math.floor(Math.random() * 60) + 20,
        answered_at: endTime.toISOString(),
      }));

      await supabase.from('citizenship_test_answers').insert(answerRows);
    }

    // Build cumulative progress per category across all tests
    const catTotals: Record<number, { total: number; correct: number }> = {};
    for (const t of dummyTests) {
      for (const a of t.answers as any[]) {
        if (!catTotals[a.categoryId]) catTotals[a.categoryId] = { total: 0, correct: 0 };
        catTotals[a.categoryId].total += 1;
        if (a.correct) catTotals[a.categoryId].correct += 1;
      }
    }

    for (const [catId, totals] of Object.entries(catTotals)) {
      await supabase.from('citizenship_user_progress').upsert({
        user_id: userId,
        category_id: parseInt(catId),
        total_questions: totals.total,
        correct_answers: totals.correct,
        last_studied: new Date().toISOString(),
        streak_days: 3,
      }, { onConflict: 'user_id,category_id' });
    }
  },
};
