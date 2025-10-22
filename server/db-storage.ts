import { eq, and, desc, sql } from "drizzle-orm";
import { db } from "./db";
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
import type { IStorage } from "./storage";

export class DbStorage implements IStorage {
  // Test Categories
  async getTestCategories(): Promise<TestCategory[]> {
    return await db.select().from(testCategories);
  }

  async getTestCategory(id: number): Promise<TestCategory | undefined> {
    const result = await db.select().from(testCategories).where(eq(testCategories.id, id));
    return result[0];
  }

  async createTestCategory(category: InsertTestCategory): Promise<TestCategory> {
    const result = await db.insert(testCategories).values(category).returning();
    return result[0];
  }

  async updateTestCategory(id: number, category: Partial<InsertTestCategory>): Promise<TestCategory> {
    const result = await db.update(testCategories).set(category).where(eq(testCategories.id, id)).returning();
    return result[0];
  }

  async deleteTestCategory(id: number): Promise<void> {
    await db.delete(testCategories).where(eq(testCategories.id, id));
  }

  // Questions
  async getQuestions(categoryId?: number): Promise<QuestionWithCategory[]> {
    if (categoryId) {
      return await db
        .select()
        .from(questions)
        .leftJoin(testCategories, eq(questions.categoryId, testCategories.id))
        .where(and(eq(questions.categoryId, categoryId), eq(questions.isActive, true)))
        .then(rows => rows.map(row => ({
          ...row.questions,
          category: row.test_categories || undefined
        })));
    }
    
    return await db
      .select()
      .from(questions)
      .leftJoin(testCategories, eq(questions.categoryId, testCategories.id))
      .where(eq(questions.isActive, true))
      .then(rows => rows.map(row => ({
        ...row.questions,
        category: row.test_categories || undefined
      })));
  }

  async getQuestion(id: number): Promise<QuestionWithCategory | undefined> {
    const result = await db
      .select()
      .from(questions)
      .leftJoin(testCategories, eq(questions.categoryId, testCategories.id))
      .where(eq(questions.id, id));
    
    if (result.length === 0) return undefined;
    
    return {
      ...result[0].questions,
      category: result[0].test_categories || undefined
    };
  }

  async createQuestion(question: InsertQuestion): Promise<Question> {
    const result = await db.insert(questions).values(question).returning();
    return result[0];
  }

  async updateQuestion(id: number, question: Partial<InsertQuestion>): Promise<Question> {
    const result = await db.update(questions).set(question).where(eq(questions.id, id)).returning();
    return result[0];
  }

  async deleteQuestion(id: number): Promise<void> {
    await db.delete(questions).where(eq(questions.id, id));
  }

  async getRandomQuestions(categoryId?: number, limit: number = 20): Promise<QuestionWithCategory[]> {
    const allQuestions = await this.getQuestions(categoryId);
    
    // Shuffle and limit
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, limit);
  }

  // Test Sessions
  async getTestSessions(userId: string): Promise<TestSession[]> {
    return await db
      .select()
      .from(testSessions)
      .where(eq(testSessions.userId, userId))
      .orderBy(desc(testSessions.startTime));
  }

  async getTestSession(id: number): Promise<TestSessionWithDetails | undefined> {
    const session = await db.select().from(testSessions).where(eq(testSessions.id, id));
    
    if (session.length === 0) return undefined;

    const answers = await this.getTestAnswers(id);
    
    const questionIds = answers.map(a => a.questionId).filter(Boolean) as number[];
    const sessionQuestions = questionIds.length > 0
      ? await db
          .select()
          .from(questions)
          .leftJoin(testCategories, eq(questions.categoryId, testCategories.id))
          .where(sql`${questions.id} IN ${questionIds}`)
          .then(rows => rows.map(row => ({
            ...row.questions,
            category: row.test_categories || undefined
          })))
      : [];

    return {
      ...session[0],
      questions: sessionQuestions,
      answers,
      passingScore: 75,
      timeLimit: session[0].testType === 'timed' ? 45 * 60 : undefined, // 45 minutes for timed tests
    };
  }

  async createTestSession(session: InsertTestSession): Promise<TestSession> {
    const result = await db.insert(testSessions).values(session).returning();
    return result[0];
  }

  async updateTestSession(id: number, session: Partial<InsertTestSession>): Promise<TestSession> {
    const result = await db.update(testSessions).set(session).where(eq(testSessions.id, id)).returning();
    return result[0];
  }

  async completeTestSession(id: number): Promise<TestSession> {
    const session = await this.getTestSession(id);
    if (!session) throw new Error("Session not found");

    const answers = session.answers || [];
    const correctAnswers = answers.filter(a => a.isCorrect).length;
    const totalQuestions = answers.length;
    const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    const isPassed = score >= 75;

    const result = await db
      .update(testSessions)
      .set({
        status: 'completed',
        endTime: new Date(),
        correctAnswers,
        score,
        isPassed,
      })
      .where(eq(testSessions.id, id))
      .returning();

    return result[0];
  }

  // Test Answers
  async getTestAnswers(sessionId: number): Promise<TestAnswer[]> {
    return await db.select().from(testAnswers).where(eq(testAnswers.sessionId, sessionId));
  }

  async createTestAnswer(answer: InsertTestAnswer): Promise<TestAnswer> {
    const result = await db.insert(testAnswers).values(answer).returning();
    return result[0];
  }

  async getSessionResults(sessionId: number): Promise<TestResult> {
    const session = await this.getTestSession(sessionId);
    if (!session) throw new Error("Session not found");

    const answers = session.answers || [];
    const sessionQuestions = session.questions || [];

    const incorrectQuestions = answers
      .filter(a => !a.isCorrect)
      .map(a => {
        const q = sessionQuestions.find(q => q.id === a.questionId);
        if (!q) return null;
        
        const correctOption = q[`option${q.correctAnswer}` as keyof typeof q] as string;
        const selectedOption = q[`option${a.selectedAnswer}` as keyof typeof q] as string;

        return {
          question: q.question,
          selectedAnswer: selectedOption,
          correctAnswer: correctOption,
          explanation: q.explanation || '',
        };
      })
      .filter(Boolean) as TestResult['incorrectQuestions'];

    const timeSpent = session.endTime && session.startTime
      ? Math.floor((session.endTime.getTime() - session.startTime.getTime()) / 1000)
      : 0;

    return {
      id: `result-${sessionId}`,
      sessionId: session.id,
      score: session.score ?? 0,
      totalQuestions: session.totalQuestions ?? 0,
      correctAnswers: session.correctAnswers ?? 0,
      timeSpent,
      category: sessionQuestions[0]?.category?.name || 'Mixed',
      isPassed: session.isPassed ?? false,
      completedAt: session.endTime || new Date(),
      incorrectQuestions,
    };
  }

  // User Progress
  async getUserProgress(userId: string): Promise<UserProgressWithCategory[]> {
    const result = await db
      .select()
      .from(userProgress)
      .leftJoin(testCategories, eq(userProgress.categoryId, testCategories.id))
      .where(eq(userProgress.userId, userId));

    return result.map(row => ({
      ...row.user_progress,
      category: row.test_categories || undefined
    }));
  }

  async getUserProgressByCategory(userId: string, categoryId: number): Promise<UserProgress | undefined> {
    const result = await db
      .select()
      .from(userProgress)
      .where(and(eq(userProgress.userId, userId), eq(userProgress.categoryId, categoryId)));
    
    return result[0];
  }

  async updateUserProgress(
    userId: string,
    categoryId: number,
    progress: Partial<InsertUserProgress>
  ): Promise<UserProgress> {
    const existing = await this.getUserProgressByCategory(userId, categoryId);

    if (existing) {
      const result = await db
        .update(userProgress)
        .set({ ...progress, lastStudied: new Date() })
        .where(and(eq(userProgress.userId, userId), eq(userProgress.categoryId, categoryId)))
        .returning();
      return result[0];
    } else {
      const result = await db
        .insert(userProgress)
        .values({ userId, categoryId, ...progress })
        .returning();
      return result[0];
    }
  }

  // Flashcards
  async getFlashcards(categoryId?: number): Promise<Flashcard[]> {
    if (categoryId) {
      return await db
        .select()
        .from(flashcards)
        .where(and(eq(flashcards.categoryId, categoryId), eq(flashcards.isActive, true)));
    }
    
    return await db.select().from(flashcards).where(eq(flashcards.isActive, true));
  }

  async getFlashcard(id: number): Promise<Flashcard | undefined> {
    const result = await db.select().from(flashcards).where(eq(flashcards.id, id));
    return result[0];
  }

  async createFlashcard(flashcard: InsertFlashcard): Promise<Flashcard> {
    const result = await db.insert(flashcards).values(flashcard).returning();
    return result[0];
  }

  async updateFlashcard(id: number, flashcard: Partial<InsertFlashcard>): Promise<Flashcard> {
    const result = await db.update(flashcards).set(flashcard).where(eq(flashcards.id, id)).returning();
    return result[0];
  }

  async deleteFlashcard(id: number): Promise<void> {
    await db.delete(flashcards).where(eq(flashcards.id, id));
  }

  // Study Materials
  async getStudyMaterials(categoryId?: number): Promise<StudyMaterial[]> {
    if (categoryId) {
      return await db
        .select()
        .from(studyMaterials)
        .where(and(eq(studyMaterials.categoryId, categoryId), eq(studyMaterials.isActive, true)))
        .orderBy(studyMaterials.orderIndex);
    }
    
    return await db
      .select()
      .from(studyMaterials)
      .where(eq(studyMaterials.isActive, true))
      .orderBy(studyMaterials.orderIndex);
  }

  async createStudyMaterial(material: InsertStudyMaterial): Promise<StudyMaterial> {
    const result = await db.insert(studyMaterials).values(material).returning();
    return result[0];
  }

  // Dashboard Data
  async getDashboardStats(userId: string): Promise<DashboardStats> {
    const sessions = await this.getTestSessions(userId);
    const completedSessions = sessions.filter(s => s.status === 'completed');
    const passedSessions = completedSessions.filter(s => s.isPassed);

    const totalTests = completedSessions.length;
    const passedTests = passedSessions.length;
    const averageScore = completedSessions.length > 0
      ? Math.round(completedSessions.reduce((sum, s) => sum + (s.score ?? 0), 0) / completedSessions.length)
      : 0;

    const progress = await this.getUserProgress(userId);
    const currentStreak = Math.max(...progress.map(p => p.streakDays ?? 0), 0);

    const totalQuestions = completedSessions.reduce((sum, s) => sum + (s.totalQuestions ?? 0), 0);
    const correctAnswers = completedSessions.reduce((sum, s) => sum + (s.correctAnswers ?? 0), 0);
    const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    const studyTime = completedSessions.reduce((sum, s) => {
      if (s.endTime && s.startTime) {
        return sum + Math.floor((s.endTime.getTime() - s.startTime.getTime()) / 1000);
      }
      return sum;
    }, 0);

    return {
      totalTests,
      passedTests,
      averageScore,
      currentStreak,
      studyTime,
      totalQuestions,
      correctAnswers,
      accuracy,
    };
  }

  async getStudyActivity(userId: string): Promise<StudyActivity[]> {
    const sessions = await this.getTestSessions(userId);
    const recentSessions = sessions.slice(0, 10);

    return recentSessions.map((session): StudyActivity => {
      const isPassed = session.isPassed ?? false;
      const score = session.score ?? 0;
      return {
        id: `session-${session.id}`,
        type: 'test_completed',
        title: isPassed ? 'Test Passed!' : 'Test Completed',
        description: `Scored ${score}% on ${session.testType ?? 'practice'} test`,
        timestamp: session.endTime ?? session.startTime,
        icon: isPassed ? 'check-circle' : 'x-circle',
        iconColor: isPassed ? 'text-green-500' : 'text-orange-500',
        score: score,
      };
    });
  }

  async getTestResults(userId: string): Promise<TestResult[]> {
    const sessions = await this.getTestSessions(userId);
    const completedSessions = sessions.filter(s => s.status === 'completed');

    const results = await Promise.all(
      completedSessions.map(s => this.getSessionResults(s.id))
    );

    return results;
  }
}
