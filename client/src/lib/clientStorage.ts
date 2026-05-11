import { officialQuestions, officialFlashcards } from "@server/official-questions";
import type {
  TestCategory, Question, TestSession, TestAnswer, UserProgress, Flashcard,
  QuestionWithCategory, UserProgressWithCategory, DashboardStats, StudyActivity, TestResult,
} from "@shared/schema";

// ─── Static seed data ─────────────────────────────────────────────────────────

const CATEGORIES: TestCategory[] = [
  { id: 1, name: 'Australia and its people', description: 'Aboriginal and Torres Strait Islander peoples, early settlement, Federation', iconName: 'users' },
  { id: 2, name: "Australia's democratic beliefs, rights and liberties", description: 'Democratic values, freedoms, rights and responsibilities', iconName: 'flag' },
  { id: 3, name: 'Government and the law in Australia', description: 'Three levels of government, parliamentary system, voting', iconName: 'building' },
  { id: 4, name: 'Australian values', description: 'Core values including respect, freedom, equality, and rule of law', iconName: 'heart' },
];

const QUESTIONS: Question[] = officialQuestions.map((q, i) => ({
  id: i + 1,
  categoryId: q.categoryId ?? null,
  question: q.question,
  optionA: q.optionA,
  optionB: q.optionB,
  optionC: q.optionC,
  optionD: q.optionD ?? null,
  correctAnswer: q.correctAnswer,
  explanation: q.explanation ?? null,
  difficulty: q.difficulty ?? 'medium',
  source: q.source ?? 'official_guide',
  sourceReference: q.sourceReference ?? null,
  isValuesQuestion: q.isValuesQuestion ?? false,
  isActive: q.isActive ?? true,
  createdAt: new Date(),
}));

const FLASHCARDS: Flashcard[] = officialFlashcards.map((f, i) => ({
  id: i + 1,
  categoryId: f.categoryId ?? null,
  front: f.front,
  back: f.back,
  isActive: f.isActive ?? true,
  createdAt: new Date(),
}));

const categoriesMap = new Map<number, TestCategory>(CATEGORIES.map(c => [c.id, c]));
const questionsMap = new Map<number, Question>(QUESTIONS.map(q => [q.id, q]));
const flashcardsMap = new Map<number, Flashcard>(FLASHCARDS.map(f => [f.id, f]));

// ─── localStorage helpers ─────────────────────────────────────────────────────

function load<T>(key: string, def: T): T {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch { return def; }
}
function save<T>(key: string, v: T) {
  try { localStorage.setItem(key, JSON.stringify(v)); } catch {}
}

function getSessions(): Map<number, TestSession> {
  return new Map((load<[number, TestSession][]>('cts_sessions', [])).map(
    ([k, v]) => [k, { ...v, startTime: new Date(v.startTime), endTime: v.endTime ? new Date(v.endTime) : null }]
  ));
}
function saveSessions(m: Map<number, TestSession>) { save('cts_sessions', Array.from(m)); }

function getAnswers(): Map<number, TestAnswer> {
  return new Map((load<[number, TestAnswer][]>('cts_answers', [])).map(
    ([k, v]) => [k, { ...v, answeredAt: new Date(v.answeredAt) }]
  ));
}
function saveAnswers(m: Map<number, TestAnswer>) { save('cts_answers', Array.from(m)); }

function getProgressMap(): Map<string, UserProgress> {
  return new Map((load<[string, UserProgress][]>('cts_progress', [])).map(
    ([k, v]) => [k, { ...v, lastStudied: new Date(v.lastStudied) }]
  ));
}
function saveProgressMap(m: Map<string, UserProgress>) { save('cts_progress', Array.from(m)); }

let _idCounter = load<number>('cts_id', QUESTIONS.length + FLASHCARDS.length + 100);
function nextId() { const id = ++_idCounter; save('cts_id', _idCounter); return id; }

// ─── Shuffle with seed ────────────────────────────────────────────────────────

function shuffle(arr: number[], seed: number): number[] {
  const out = [...arr];
  let r = seed;
  for (let i = out.length - 1; i > 0; i--) {
    r = (r * 9301 + 49297) % 233280;
    const j = Math.floor((r / 233280) * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// ─── Enrichers ────────────────────────────────────────────────────────────────

function enrichQ(q: Question): QuestionWithCategory {
  return { ...q, category: q.categoryId ? categoriesMap.get(q.categoryId) : undefined };
}
function enrichP(p: UserProgress): UserProgressWithCategory {
  return { ...p, category: p.categoryId ? categoriesMap.get(p.categoryId) : undefined };
}

// ─── Public API ───────────────────────────────────────────────────────────────

export const api = {
  // Categories
  getCategories: (): TestCategory[] => CATEGORIES,
  getCategory: (id: number) => categoriesMap.get(id),
  getCategoryQuestionCount: (id: number) => QUESTIONS.filter(q => q.categoryId === id).length,

  // Questions
  getQuestions: (categoryId?: number): QuestionWithCategory[] =>
    (categoryId ? QUESTIONS.filter(q => q.categoryId === categoryId) : QUESTIONS).map(enrichQ),
  getQuestion: (id: number) => { const q = questionsMap.get(id); return q ? enrichQ(q) : undefined; },
  getRandomQuestions: (categoryId?: number, limit = 20): QuestionWithCategory[] =>
    api.getQuestions(categoryId).sort(() => 0.5 - Math.random()).slice(0, limit),

  // Test Sets
  getTestSets() {
    const p1 = QUESTIONS.filter(q => q.categoryId === 1).map(q => q.id);
    const p2 = QUESTIONS.filter(q => q.categoryId === 2).map(q => q.id);
    const p3 = QUESTIONS.filter(q => q.categoryId === 3).map(q => q.id);
    const p4 = QUESTIONS.filter(q => q.categoryId === 4).map(q => q.id);
    const mixed = (s: number) => shuffle([
      ...shuffle(p1, s).slice(0, 8),
      ...shuffle(p2, s + 1).slice(0, 4),
      ...shuffle(p3, s + 2).slice(0, 4),
      ...shuffle(p4, s + 3).slice(0, 4),
    ], s + 4).slice(0, 20);
    return [
      { id: 1, name: "Part 1 Focus Test", description: "20 questions focused on Australia and its people", categoryId: 1, questionIds: shuffle(p1, 6).slice(0, 20) },
      { id: 2, name: "Part 2 Focus Test", description: "20 questions focused on democratic beliefs and rights", categoryId: 2, questionIds: shuffle(p2, 7).slice(0, 20) },
      { id: 3, name: "Part 3 Focus Test", description: "20 questions focused on government and the law", categoryId: 3, questionIds: shuffle(p3, 8).slice(0, 20) },
      { id: 4, name: "Part 4 Focus Test", description: "20 questions focused on Australian values", categoryId: 4, questionIds: shuffle(p4, 9).slice(0, 20) },
      { id: 5, name: "Practice Test Set 1", description: "Mixed questions from all 4 parts", questionIds: mixed(1) },
      { id: 6, name: "Practice Test Set 2", description: "Mixed questions from all 4 parts", questionIds: mixed(2) },
      { id: 7, name: "Practice Test Set 3", description: "Mixed questions from all 4 parts", questionIds: mixed(3) },
      { id: 8, name: "Practice Test Set 4", description: "Mixed questions from all 4 parts", questionIds: mixed(4) },
      { id: 9, name: "Practice Test Set 5", description: "Mixed questions from all 4 parts", questionIds: mixed(5) },
      {
        id: 10, name: "Official Practice Test",
        description: "Simulates real test with 5 values questions and 15 other questions",
        questionIds: shuffle([
          ...QUESTIONS.filter(q => q.isValuesQuestion).map(q => q.id).slice(0, 5),
          ...QUESTIONS.filter(q => !q.isValuesQuestion).map(q => q.id).slice(0, 15),
        ], 10),
      },
    ];
  },

  getTestSet(id: number) {
    const set = this.getTestSets().find(s => s.id === id);
    if (!set) return undefined;
    return { ...set, questions: set.questionIds.map(qId => api.getQuestion(qId)).filter(Boolean) as QuestionWithCategory[] };
  },

  // Flashcard Sets
  getFlashcardSets() {
    const p1 = FLASHCARDS.filter(f => f.categoryId === 1).map(f => f.id);
    const p2 = FLASHCARDS.filter(f => f.categoryId === 2).map(f => f.id);
    const p3 = FLASHCARDS.filter(f => f.categoryId === 3).map(f => f.id);
    const p4 = FLASHCARDS.filter(f => f.categoryId === 4).map(f => f.id);
    const mixed = (s: number) => [...shuffle(p1, s).slice(0, 8), ...shuffle(p2, s+1).slice(0, 4), ...shuffle(p3, s+2).slice(0, 4), ...shuffle(p4, s+3).slice(0, 4)];
    return [
      { id: 1, name: "Part 1: Australia and its people", description: "Flashcards about Australian history and people", categoryId: 1, flashcardIds: p1.slice(0, 20) },
      { id: 2, name: "Part 2: Democratic beliefs", description: "Flashcards about democracy, rights and freedoms", categoryId: 2, flashcardIds: p2.slice(0, 20) },
      { id: 3, name: "Part 3: Government and law", description: "Flashcards about Australian government", categoryId: 3, flashcardIds: p3.slice(0, 20) },
      { id: 4, name: "Part 4: Australian values", description: "Flashcards about core Australian values", categoryId: 4, flashcardIds: p4.slice(0, 20) },
      { id: 5, name: "All Topics - Set 1", description: "20 flashcards covering all 4 parts", flashcardIds: mixed(1001) },
      { id: 6, name: "All Topics - Set 2", description: "20 flashcards covering all 4 parts", flashcardIds: mixed(2002) },
      { id: 7, name: "All Topics - Set 3", description: "20 flashcards covering all 4 parts", flashcardIds: mixed(3003) },
      { id: 8, name: "All Topics - Set 4", description: "20 flashcards covering all 4 parts", flashcardIds: mixed(4004) },
      { id: 9, name: "All Topics - Set 5", description: "20 flashcards covering all 4 parts", flashcardIds: mixed(5005) },
      { id: 10, name: "Comprehensive Review", description: "20 key flashcards from all parts for final review", flashcardIds: mixed(10010) },
    ];
  },

  getFlashcardSet(id: number) {
    const set = this.getFlashcardSets().find(s => s.id === id);
    if (!set) return undefined;
    const flashcards = set.flashcardIds
      .map(fId => {
        const f = flashcardsMap.get(fId);
        if (!f) return null;
        return { ...f, categoryName: f.categoryId ? (categoriesMap.get(f.categoryId)?.name ?? '') : '' };
      })
      .filter(Boolean);
    return { ...set, flashcards };
  },

  getFlashcards: (categoryId?: number) =>
    categoryId ? FLASHCARDS.filter(f => f.categoryId === categoryId) : FLASHCARDS,

  // Test Sessions (localStorage)
  getTestSessions: (userId: string): TestSession[] =>
    Array.from(getSessions().values()).filter(s => s.userId === userId),

  getTestSession(id: number) {
    const s = getSessions().get(id);
    if (!s) return undefined;
    const answers = Array.from(getAnswers().values()).filter(a => a.sessionId === id);
    const questions = answers.map(a => api.getQuestion(a.questionId || 0)).filter(Boolean) as QuestionWithCategory[];
    return { ...s, questions, answers, passingScore: 75, timeLimit: 45 * 60 };
  },

  createTestSession(data: any): TestSession {
    const id = nextId();
    const s: TestSession = {
      id, userId: data.userId,
      status: data.status ?? 'in_progress',
      testType: data.testType ?? 'practice',
      totalQuestions: data.totalQuestions ?? 20,
      correctAnswers: 0, startTime: new Date(), endTime: null, score: 0, isPassed: false,
    };
    const m = getSessions(); m.set(id, s); saveSessions(m);
    return s;
  },

  updateTestSession(id: number, data: any): TestSession {
    const m = getSessions();
    const ex = m.get(id); if (!ex) throw new Error(`Session ${id} not found`);
    const updated = { ...ex, ...data }; m.set(id, updated); saveSessions(m);
    return updated;
  },

  completeTestSession(id: number): TestSession {
    const m = getSessions();
    const s = m.get(id); if (!s) throw new Error(`Session ${id} not found`);
    const answers = Array.from(getAnswers().values()).filter(a => a.sessionId === id);
    const correct = answers.filter(a => a.isCorrect).length;
    const score = answers.length ? Math.round((correct / answers.length) * 100) : 0;
    const allValuesPassed = answers
      .filter(a => questionsMap.get(a.questionId || 0)?.isValuesQuestion)
      .every(a => a.isCorrect);
    const isPassed = score >= 75 && allValuesPassed;
    const updated = { ...s, status: 'completed' as const, endTime: new Date(), correctAnswers: correct, score, isPassed };
    m.set(id, updated); saveSessions(m);
    return updated;
  },

  // Test Answers (localStorage)
  getTestAnswers: (sessionId: number): TestAnswer[] =>
    Array.from(getAnswers().values()).filter(a => a.sessionId === sessionId),

  createTestAnswer(data: any): TestAnswer {
    const id = nextId();
    const ans: TestAnswer = {
      id, sessionId: data.sessionId ?? null, questionId: data.questionId ?? null,
      selectedAnswer: data.selectedAnswer, isCorrect: data.isCorrect,
      timeSpent: data.timeSpent ?? 0, answeredAt: new Date(),
    };
    const m = getAnswers(); m.set(id, ans); saveAnswers(m);

    // Update user progress per category
    const q = questionsMap.get(data.questionId);
    if (q?.categoryId) {
      const pm = getProgressMap();
      const key = `demo-user-123-${q.categoryId}`;
      const ex = pm.get(key);
      const total = (ex?.totalQuestions || 0) + 1;
      const corr = (ex?.correctAnswers || 0) + (data.isCorrect ? 1 : 0);
      const updated: UserProgress = {
        id: ex?.id || nextId(), userId: 'demo-user-123', categoryId: q.categoryId,
        totalQuestions: total, correctAnswers: corr,
        accuracy: Math.round((corr / total) * 100),
        lastStudied: new Date(), streakDays: ex?.streakDays || 1,
      };
      pm.set(key, updated); saveProgressMap(pm);
    }
    return ans;
  },

  getSessionResults(sessionId: number): TestResult {
    const s = getSessions().get(sessionId);
    if (!s) throw new Error(`Session ${sessionId} not found`);
    const answers = api.getTestAnswers(sessionId);
    const opt = (q: Question, l: string) =>
      ({ A: q.optionA, B: q.optionB, C: q.optionC, D: q.optionD || '' } as any)[l] || '';
    const incorrectQuestions = answers.filter(a => !a.isCorrect).map(a => {
      const q = questionsMap.get(a.questionId || 0); if (!q) return null;
      return {
        question: q.question,
        selectedAnswer: a.selectedAnswer, selectedAnswerText: opt(q, a.selectedAnswer),
        correctAnswer: q.correctAnswer, correctAnswerText: opt(q, q.correctAnswer),
        explanation: q.explanation || '',
      };
    }).filter(Boolean) as any[];
    return {
      id: sessionId.toString(), sessionId, score: s.score || 0,
      totalQuestions: s.totalQuestions || 0, correctAnswers: s.correctAnswers || 0,
      timeSpent: s.endTime && s.startTime
        ? Math.round((new Date(s.endTime).getTime() - new Date(s.startTime).getTime()) / 1000) : 0,
      category: 'Mixed', isPassed: s.isPassed || false,
      completedAt: s.endTime || new Date(), incorrectQuestions,
    };
  },

  // User Progress
  getUserProgress: (userId: string): UserProgressWithCategory[] =>
    Array.from(getProgressMap().values()).filter(p => p.userId === userId).map(enrichP),

  // Dashboard
  getDashboardStats(userId: string): DashboardStats {
    const sessions = api.getTestSessions(userId).filter(s => s.status === 'completed');
    const passed = sessions.filter(s => s.isPassed);
    const avg = sessions.length ? Math.round(sessions.reduce((s, x) => s + (x.score || 0), 0) / sessions.length) : 0;
    const prog = api.getUserProgress(userId);
    const streak = prog.reduce((m, p) => Math.max(m, p.streakDays || 0), 0);
    const tq = prog.reduce((s, p) => s + (p.totalQuestions || 0), 0);
    const ca = prog.reduce((s, p) => s + (p.correctAnswers || 0), 0);
    return {
      totalTests: sessions.length, passedTests: passed.length, averageScore: avg,
      currentStreak: streak, studyTime: sessions.length * 30,
      totalQuestions: tq, correctAnswers: ca, accuracy: tq ? Math.round((ca / tq) * 100) : 0,
    };
  },

  getStudyActivity(userId: string): StudyActivity[] {
    return api.getTestSessions(userId).slice(-5).map(s => ({
      id: s.id.toString(), type: 'test_completed' as const,
      title: s.testType === 'practice' ? 'Practice Test Completed' : 'Official Test Completed',
      description: `Scored ${s.score || 0}% with ${s.correctAnswers || 0}/${s.totalQuestions || 0} correct`,
      timestamp: s.endTime || s.startTime || new Date(),
      icon: s.isPassed ? 'check-circle' : 'x-circle',
      iconColor: s.isPassed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600',
      score: s.score || 0,
    }));
  },

  getTestResults(userId: string): TestResult[] {
    return api.getTestSessions(userId)
      .filter(s => s.status === 'completed')
      .map(s => api.getSessionResults(s.id))
      .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());
  },
};
