import {
  testCategories,
  questions,
  testSessions,
  testAnswers,
  userProgress,
  flashcards,
  type TestCategory,
  type Question,
  type TestSession,
  type TestAnswer,
  type UserProgress,
  type Flashcard,
  type InsertTestCategory,
  type InsertQuestion,
  type InsertTestSession,
  type InsertTestAnswer,
  type InsertUserProgress,
  type InsertFlashcard,
  type QuestionWithCategory,
  type TestSessionWithDetails,
  type UserProgressWithCategory,
  type DashboardStats,
  type StudyActivity,
  type TestResult,
} from "@shared/schema";

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
  private currentId = 1;

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    // Initialize test categories
    const defaultCategories: TestCategory[] = [
      { id: 1, name: 'Australian Values', description: 'Australian democracy, freedoms, and values', iconName: 'flag' },
      { id: 2, name: 'History', description: 'Key events in Australian history', iconName: 'clock' },
      { id: 3, name: 'Geography', description: 'Australian geography and states', iconName: 'map' },
      { id: 4, name: 'Government', description: 'Australian government and law', iconName: 'building' },
      { id: 5, name: 'Indigenous Australia', description: 'Aboriginal and Torres Strait Islander peoples', iconName: 'users' },
      { id: 6, name: 'Culture & Society', description: 'Australian culture and society', iconName: 'heart' },
    ];

    // Initialize sample questions
    const defaultQuestions: Question[] = [
      {
        id: 1,
        categoryId: 1,
        question: "What are the colours of the Australian flag?",
        optionA: "Red, white and blue",
        optionB: "Green, gold and blue",
        optionC: "Blue, red and white",
        optionD: "Blue, white and red",
        correctAnswer: "A",
        explanation: "The Australian flag has three colours: red, white, and blue.",
        difficulty: "easy",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: 2,
        categoryId: 1,
        question: "What is the official name of Australia?",
        optionA: "Australia",
        optionB: "The Commonwealth of Australia",
        optionC: "The Australian Federation",
        optionD: "The Australian Commonwealth",
        correctAnswer: "B",
        explanation: "The official name of Australia is the Commonwealth of Australia.",
        difficulty: "medium",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: 3,
        categoryId: 2,
        question: "When did the European settlement of Australia begin?",
        optionA: "1788",
        optionB: "1801",
        optionC: "1770",
        optionD: "1829",
        correctAnswer: "A",
        explanation: "European settlement began in 1788 with the arrival of the First Fleet.",
        difficulty: "medium",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: 4,
        categoryId: 3,
        question: "What is the capital city of Australia?",
        optionA: "Sydney",
        optionB: "Melbourne",
        optionC: "Canberra",
        optionD: "Perth",
        correctAnswer: "C",
        explanation: "Canberra is the capital city of Australia.",
        difficulty: "easy",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: 5,
        categoryId: 4,
        question: "What system of government does Australia have?",
        optionA: "Constitutional monarchy",
        optionB: "Republic",
        optionC: "Federal republic",
        optionD: "Parliamentary democracy",
        correctAnswer: "A",
        explanation: "Australia is a constitutional monarchy with a parliamentary system.",
        difficulty: "medium",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: 6,
        categoryId: 5,
        question: "Who are the traditional owners of Australia?",
        optionA: "British settlers",
        optionB: "Aboriginal and Torres Strait Islander peoples",
        optionC: "European colonists",
        optionD: "Asian immigrants",
        correctAnswer: "B",
        explanation: "Aboriginal and Torres Strait Islander peoples are the traditional owners of Australia.",
        difficulty: "easy",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: 7,
        categoryId: 1,
        question: "What do we remember on Anzac Day?",
        optionA: "The landing of the First Fleet",
        optionB: "The start of the gold rush",
        optionC: "The sacrifice of Australian and New Zealand soldiers",
        optionD: "Federation of Australia",
        correctAnswer: "C",
        explanation: "Anzac Day commemorates the sacrifice of Australian and New Zealand soldiers.",
        difficulty: "easy",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: 8,
        categoryId: 6,
        question: "What is Australia's national gemstone?",
        optionA: "Diamond",
        optionB: "Sapphire",
        optionC: "Emerald",
        optionD: "Opal",
        correctAnswer: "D",
        explanation: "The opal is Australia's national gemstone.",
        difficulty: "medium",
        isActive: true,
        createdAt: new Date(),
      },
    ];

    // Initialize flashcards
    const defaultFlashcards: Flashcard[] = [
      {
        id: 1,
        categoryId: 1,
        front: "What are the three levels of government in Australia?",
        back: "Federal (Commonwealth), State/Territory, and Local government",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: 2,
        categoryId: 2,
        front: "When did Australia become a Federation?",
        back: "1 January 1901",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: 3,
        categoryId: 3,
        front: "How many states and territories does Australia have?",
        back: "6 states and 2 territories",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: 4,
        categoryId: 4,
        front: "Who is the Head of State of Australia?",
        back: "The King/Queen of Australia (currently represented by the Governor-General)",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: 5,
        categoryId: 5,
        front: "What does 'Terra Nullius' mean?",
        back: "Land belonging to no one - the legal concept used by British settlers",
        isActive: true,
        createdAt: new Date(),
      },
    ];

    defaultCategories.forEach(cat => this.testCategories.set(cat.id, cat));
    defaultQuestions.forEach(q => this.questions.set(q.id, q));
    defaultFlashcards.forEach(f => this.flashcards.set(f.id, f));
    this.currentId = 9;
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