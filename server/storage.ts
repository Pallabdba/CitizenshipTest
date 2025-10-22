import {
  testCategories,
  questions,
  testSessions,
  testAnswers,
  userProgress,
  flashcards,
  studyMaterials,
  type TestCategory,
  type Question,
  type TestSession,
  type TestAnswer,
  type UserProgress,
  type Flashcard,
  type StudyMaterial,
  type InsertTestCategory,
  type InsertQuestion,
  type InsertTestSession,
  type InsertTestAnswer,
  type InsertUserProgress,
  type InsertFlashcard,
  type InsertStudyMaterial,
  type QuestionWithCategory,
  type TestSessionWithDetails,
  type UserProgressWithCategory,
  type DashboardStats,
  type StudyActivity,
  type TestResult,
} from "@shared/schema";
import { officialQuestions, studyMaterialsContent, officialFlashcards } from "./official-questions";

export interface IStorage {
  // Test Categories
  getTestCategories(): Promise<TestCategory[]>;
  getTestCategory(id: number): Promise<TestCategory | undefined>;
  createTestCategory(category: InsertTestCategory): Promise<TestCategory>;
  updateTestCategory(id: number, category: Partial<InsertTestCategory>): Promise<TestCategory>;
  deleteTestCategory(id: number): Promise<void>;

  // Questions
  getQuestions(categoryId?: number): Promise<QuestionWithCategory[]>;
  getQuestion(id: number): Promise<QuestionWithCategory | undefined>;
  createQuestion(question: InsertQuestion): Promise<Question>;
  updateQuestion(id: number, question: Partial<InsertQuestion>): Promise<Question>;
  deleteQuestion(id: number): Promise<void>;
  getRandomQuestions(categoryId?: number, limit?: number): Promise<QuestionWithCategory[]>;

  // Test Sessions
  getTestSessions(userId: string): Promise<TestSession[]>;
  getTestSession(id: number): Promise<TestSessionWithDetails | undefined>;
  createTestSession(session: InsertTestSession): Promise<TestSession>;
  updateTestSession(id: number, session: Partial<InsertTestSession>): Promise<TestSession>;
  completeTestSession(id: number): Promise<TestSession>;

  // Test Answers
  getTestAnswers(sessionId: number): Promise<TestAnswer[]>;
  createTestAnswer(answer: InsertTestAnswer): Promise<TestAnswer>;
  getSessionResults(sessionId: number): Promise<TestResult>;

  // User Progress
  getUserProgress(userId: string): Promise<UserProgressWithCategory[]>;
  getUserProgressByCategory(userId: string, categoryId: number): Promise<UserProgress | undefined>;
  updateUserProgress(userId: string, categoryId: number, progress: Partial<InsertUserProgress>): Promise<UserProgress>;

  // Flashcards
  getFlashcards(categoryId?: number): Promise<Flashcard[]>;
  getFlashcard(id: number): Promise<Flashcard | undefined>;
  createFlashcard(flashcard: InsertFlashcard): Promise<Flashcard>;
  updateFlashcard(id: number, flashcard: Partial<InsertFlashcard>): Promise<Flashcard>;
  deleteFlashcard(id: number): Promise<void>;

  // Study Materials
  getStudyMaterials(categoryId?: number): Promise<StudyMaterial[]>;

  // Dashboard Data
  getDashboardStats(userId: string): Promise<DashboardStats>;
  getStudyActivity(userId: string): Promise<StudyActivity[]>;
  getTestResults(userId: string): Promise<TestResult[]>;
}

export class MemStorage implements IStorage {
  private testCategories: Map<number, TestCategory> = new Map();
  private questions: Map<number, Question> = new Map();
  private testSessions: Map<number, TestSession> = new Map();
  private testAnswers: Map<number, TestAnswer> = new Map();
  private userProgress: Map<string, UserProgress> = new Map();
  private flashcards: Map<number, Flashcard> = new Map();
  private studyMaterialsMap: Map<number, StudyMaterial> = new Map();
  private studyMaterials: StudyMaterial[] = [];
  private currentId = 1;

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    // Initialize test categories - matching official PDF structure
    const defaultCategories: TestCategory[] = [
      { id: 1, name: 'Australia and its people', description: 'Aboriginal and Torres Strait Islander peoples, early settlement, Federation', iconName: 'users' },
      { id: 2, name: "Australia's democratic beliefs, rights and liberties", description: 'Democratic values, freedoms, rights and responsibilities', iconName: 'flag' },
      { id: 3, name: 'Government and the law in Australia', description: 'Three levels of government, parliamentary system, voting', iconName: 'building' },
      { id: 4, name: 'Australian values', description: 'Core values including respect, freedom, equality, and rule of law', iconName: 'heart' },
    ];

    // Initialize official questions from "Our Common Bond" guide
    const defaultQuestions: Question[] = officialQuestions.map((q, index) => ({
      id: index + 1,
      ...q,
      source: q.source ?? 'official_guide',
      sourceReference: q.sourceReference ?? null,
      isValuesQuestion: q.isValuesQuestion ?? false,
      difficulty: q.difficulty ?? 'medium',
      optionD: q.optionD ?? null,
      explanation: q.explanation ?? null,
      categoryId: q.categoryId ?? null,
      isActive: q.isActive ?? true,
      createdAt: new Date(),
    }));

    // Initialize official flashcards from "Our Common Bond" guide
    const defaultFlashcards: Flashcard[] = officialFlashcards.map((f, index) => ({
      id: index + 1,
      categoryId: f.categoryId ?? null,
      front: f.front,
      back: f.back,
      isActive: f.isActive ?? true,
      createdAt: new Date(),
    }));

    // Initialize study materials
    const defaultStudyMaterials: StudyMaterial[] = studyMaterialsContent.map((m, index) => ({
      id: index + 1,
      categoryId: m.categoryId ?? null,
      partNumber: m.partNumber,
      title: m.title,
      content: m.content,
      section: m.section ?? null,
      orderIndex: m.orderIndex ?? 0,
      isActive: m.isActive ?? true,
      createdAt: new Date(),
    }));

    defaultCategories.forEach(cat => this.testCategories.set(cat.id, cat));
    defaultQuestions.forEach(q => this.questions.set(q.id, q));
    defaultFlashcards.forEach(f => this.flashcards.set(f.id, f));
    defaultStudyMaterials.forEach(m => this.studyMaterialsMap.set(m.id, m));
    this.currentId = defaultQuestions.length + 1;
  }

  // Test Categories
  async getTestCategories(): Promise<TestCategory[]> {
    return Array.from(this.testCategories.values());
  }

  async getTestCategory(id: number): Promise<TestCategory | undefined> {
    return this.testCategories.get(id);
  }

  async createTestCategory(category: InsertTestCategory): Promise<TestCategory> {
    const id = this.currentId++;
    const newCategory: TestCategory = { 
      id, 
      name: category.name,
      description: category.description ?? null,
      iconName: category.iconName ?? null
    };
    this.testCategories.set(id, newCategory);
    return newCategory;
  }

  async updateTestCategory(id: number, category: Partial<InsertTestCategory>): Promise<TestCategory> {
    const existing = this.testCategories.get(id);
    if (!existing) {
      throw new Error(`Test category with id ${id} not found`);
    }
    const updated = { ...existing, ...category };
    this.testCategories.set(id, updated);
    return updated;
  }

  async deleteTestCategory(id: number): Promise<void> {
    this.testCategories.delete(id);
  }

  // Questions
  async getQuestions(categoryId?: number): Promise<QuestionWithCategory[]> {
    const questions = Array.from(this.questions.values());
    const filtered = categoryId ? questions.filter(q => q.categoryId === categoryId) : questions;
    return filtered.map(q => this.enrichQuestion(q));
  }

  async getQuestion(id: number): Promise<QuestionWithCategory | undefined> {
    const question = this.questions.get(id);
    return question ? this.enrichQuestion(question) : undefined;
  }

  async createQuestion(question: InsertQuestion): Promise<Question> {
    const id = this.currentId++;
    const newQuestion: Question = {
      id,
      categoryId: question.categoryId ?? null,
      question: question.question,
      optionA: question.optionA,
      optionB: question.optionB,
      optionC: question.optionC,
      optionD: question.optionD ?? null,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation ?? null,
      difficulty: question.difficulty ?? null,
      source: question.source ?? null,
      sourceReference: question.sourceReference ?? null,
      isValuesQuestion: question.isValuesQuestion ?? null,
      isActive: question.isActive ?? null,
      createdAt: new Date(),
    };
    this.questions.set(id, newQuestion);
    return newQuestion;
  }

  async updateQuestion(id: number, question: Partial<InsertQuestion>): Promise<Question> {
    const existing = this.questions.get(id);
    if (!existing) {
      throw new Error(`Question with id ${id} not found`);
    }
    const updated = { ...existing, ...question };
    this.questions.set(id, updated);
    return updated;
  }

  async deleteQuestion(id: number): Promise<void> {
    this.questions.delete(id);
  }

  async getRandomQuestions(categoryId?: number, limit = 20): Promise<QuestionWithCategory[]> {
    const questions = await this.getQuestions(categoryId);
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
  }

  private enrichQuestion(question: Question): QuestionWithCategory {
    const category = question.categoryId ? this.testCategories.get(question.categoryId) : undefined;
    return { ...question, category };
  }

  // Test Sessions
  async getTestSessions(userId: string): Promise<TestSession[]> {
    return Array.from(this.testSessions.values()).filter(s => s.userId === userId);
  }

  async getTestSession(id: number): Promise<TestSessionWithDetails | undefined> {
    const session = this.testSessions.get(id);
    if (!session) return undefined;

    const answers = Array.from(this.testAnswers.values()).filter(a => a.sessionId === id);
    const questions = await Promise.all(
      answers.map(async (answer) => {
        const question = await this.getQuestion(answer.questionId || 0);
        return question;
      })
    );

    return {
      ...session,
      questions: questions.filter(Boolean) as QuestionWithCategory[],
      answers,
      passingScore: 75,
      timeLimit: 45 * 60, // 45 minutes
    };
  }

  async createTestSession(session: InsertTestSession): Promise<TestSession> {
    const id = this.currentId++;
    const newSession: TestSession = {
      id,
      userId: session.userId,
      status: session.status ?? null,
      testType: session.testType ?? null,
      totalQuestions: session.totalQuestions ?? null,
      correctAnswers: session.correctAnswers ?? null,
      startTime: new Date(),
      endTime: session.endTime ?? null,
      score: session.score ?? null,
      isPassed: session.isPassed ?? null,
    };
    this.testSessions.set(id, newSession);
    return newSession;
  }

  async updateTestSession(id: number, session: Partial<InsertTestSession>): Promise<TestSession> {
    const existing = this.testSessions.get(id);
    if (!existing) {
      throw new Error(`Test session with id ${id} not found`);
    }
    const updated = { ...existing, ...session };
    this.testSessions.set(id, updated);
    return updated;
  }

  async completeTestSession(id: number): Promise<TestSession> {
    const session = this.testSessions.get(id);
    if (!session) {
      throw new Error(`Test session with id ${id} not found`);
    }

    const answers = Array.from(this.testAnswers.values()).filter(a => a.sessionId === id);
    const correctAnswers = answers.filter(a => a.isCorrect).length;
    const score = Math.round((correctAnswers / answers.length) * 100);
    const isPassed = score >= 75;

    const updated = {
      ...session,
      status: 'completed' as const,
      endTime: new Date(),
      correctAnswers,
      score,
      isPassed,
    };

    this.testSessions.set(id, updated);
    return updated;
  }

  // Test Answers
  async getTestAnswers(sessionId: number): Promise<TestAnswer[]> {
    return Array.from(this.testAnswers.values()).filter(a => a.sessionId === sessionId);
  }

  async createTestAnswer(answer: InsertTestAnswer): Promise<TestAnswer> {
    const id = this.currentId++;
    const newAnswer: TestAnswer = {
      id,
      sessionId: answer.sessionId ?? null,
      questionId: answer.questionId ?? null,
      selectedAnswer: answer.selectedAnswer,
      isCorrect: answer.isCorrect,
      timeSpent: answer.timeSpent ?? null,
      answeredAt: new Date(),
    };
    this.testAnswers.set(id, newAnswer);
    return newAnswer;
  }

  async getSessionResults(sessionId: number): Promise<TestResult> {
    const session = this.testSessions.get(sessionId);
    if (!session) {
      throw new Error(`Test session with id ${sessionId} not found`);
    }

    const answers = await this.getTestAnswers(sessionId);
    const incorrectAnswers = [];

    for (const answer of answers.filter(a => !a.isCorrect)) {
      const question = await this.getQuestion(answer.questionId || 0);
      if (question) {
        incorrectAnswers.push({
          question: question.question,
          selectedAnswer: answer.selectedAnswer,
          correctAnswer: question.correctAnswer,
          explanation: question.explanation || '',
        });
      }
    }

    return {
      id: sessionId.toString(),
      sessionId,
      score: session.score || 0,
      totalQuestions: session.totalQuestions || 0,
      correctAnswers: session.correctAnswers || 0,
      timeSpent: session.endTime && session.startTime ? 
        Math.round((session.endTime.getTime() - session.startTime.getTime()) / 1000) : 0,
      category: 'Mixed',
      isPassed: session.isPassed || false,
      completedAt: session.endTime || new Date(),
      incorrectQuestions: incorrectAnswers,
    };
  }

  // User Progress
  async getUserProgress(userId: string): Promise<UserProgressWithCategory[]> {
    const progress = Array.from(this.userProgress.values()).filter(p => p.userId === userId);
    return progress.map(p => this.enrichUserProgress(p));
  }

  async getUserProgressByCategory(userId: string, categoryId: number): Promise<UserProgress | undefined> {
    return Array.from(this.userProgress.values()).find(p => p.userId === userId && p.categoryId === categoryId);
  }

  async updateUserProgress(userId: string, categoryId: number, progress: Partial<InsertUserProgress>): Promise<UserProgress> {
    const key = `${userId}-${categoryId}`;
    const existing = this.userProgress.get(key);
    
    const updated: UserProgress = {
      id: existing?.id || this.currentId++,
      userId,
      categoryId,
      totalQuestions: progress.totalQuestions ?? existing?.totalQuestions ?? null,
      correctAnswers: progress.correctAnswers ?? existing?.correctAnswers ?? null,
      accuracy: progress.accuracy ?? existing?.accuracy ?? null,
      lastStudied: new Date(),
      streakDays: progress.streakDays ?? existing?.streakDays ?? null,
    };

    this.userProgress.set(key, updated);
    return updated;
  }

  private enrichUserProgress(progress: UserProgress): UserProgressWithCategory {
    const category = progress.categoryId ? this.testCategories.get(progress.categoryId) : undefined;
    return { ...progress, category };
  }

  // Flashcards
  async getFlashcards(categoryId?: number): Promise<Flashcard[]> {
    const flashcards = Array.from(this.flashcards.values());
    return categoryId ? flashcards.filter(f => f.categoryId === categoryId) : flashcards;
  }

  async getFlashcard(id: number): Promise<Flashcard | undefined> {
    return this.flashcards.get(id);
  }

  async createFlashcard(flashcard: InsertFlashcard): Promise<Flashcard> {
    const id = this.currentId++;
    const newFlashcard: Flashcard = {
      id,
      categoryId: flashcard.categoryId ?? null,
      front: flashcard.front,
      back: flashcard.back,
      isActive: flashcard.isActive ?? null,
      createdAt: new Date(),
    };
    this.flashcards.set(id, newFlashcard);
    return newFlashcard;
  }

  async updateFlashcard(id: number, flashcard: Partial<InsertFlashcard>): Promise<Flashcard> {
    const existing = this.flashcards.get(id);
    if (!existing) {
      throw new Error(`Flashcard with id ${id} not found`);
    }
    const updated = { ...existing, ...flashcard };
    this.flashcards.set(id, updated);
    return updated;
  }

  async deleteFlashcard(id: number): Promise<void> {
    this.flashcards.delete(id);
  }

  // Study Materials
  async getStudyMaterials(categoryId?: number): Promise<StudyMaterial[]> {
    const materials = Array.from(this.studyMaterialsMap.values());
    const filtered = categoryId ? materials.filter(m => m.categoryId === categoryId) : materials;
    return filtered.filter(m => m.isActive).sort((a, b) => (a.orderIndex ?? 0) - (b.orderIndex ?? 0));
  }

  // Dashboard Data
  async getDashboardStats(userId: string): Promise<DashboardStats> {
    const sessions = await this.getTestSessions(userId);
    const completedSessions = sessions.filter(s => s.status === 'completed');
    const passedSessions = completedSessions.filter(s => s.isPassed);
    
    const totalScores = completedSessions.reduce((sum, s) => sum + (s.score || 0), 0);
    const averageScore = completedSessions.length > 0 ? Math.round(totalScores / completedSessions.length) : 0;
    
    const progress = await this.getUserProgress(userId);
    const currentStreak = progress.reduce((max, p) => Math.max(max, p.streakDays || 0), 0);
    
    const totalQuestions = progress.reduce((sum, p) => sum + (p.totalQuestions || 0), 0);
    const correctAnswers = progress.reduce((sum, p) => sum + (p.correctAnswers || 0), 0);
    const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    return {
      totalTests: completedSessions.length,
      passedTests: passedSessions.length,
      averageScore,
      currentStreak,
      studyTime: completedSessions.length * 30, // Approximate study time
      totalQuestions,
      correctAnswers,
      accuracy,
    };
  }

  async getStudyActivity(userId: string): Promise<StudyActivity[]> {
    const sessions = await this.getTestSessions(userId);
    const recentSessions = sessions.slice(-5);

    return recentSessions.map(session => ({
      id: session.id.toString(),
      type: 'test_completed' as const,
      title: session.testType === 'practice' ? 'Practice Test Completed' : 'Official Test Completed',
      description: `Scored ${session.score || 0}% with ${session.correctAnswers || 0}/${session.totalQuestions || 0} correct`,
      timestamp: session.endTime || session.startTime || new Date(),
      icon: session.isPassed ? 'check-circle' : 'x-circle',
      iconColor: session.isPassed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600',
      score: session.score || 0,
    }));
  }

  async getTestResults(userId: string): Promise<TestResult[]> {
    const sessions = await this.getTestSessions(userId);
    const completedSessions = sessions.filter(s => s.status === 'completed');
    
    const results = await Promise.all(
      completedSessions.map(async (session) => {
        return await this.getSessionResults(session.id);
      })
    );

    return results.sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime());
  }
}

export const storage = new MemStorage();