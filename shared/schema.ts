import { pgTable, text, serial, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const testCategories = pgTable("test_categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description"),
  iconName: text("icon_name").default("book"),
});

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id").references(() => testCategories.id),
  question: text("question").notNull(),
  optionA: text("option_a").notNull(),
  optionB: text("option_b").notNull(),
  optionC: text("option_c").notNull(),
  optionD: text("option_d"),
  correctAnswer: text("correct_answer").notNull(), // A, B, C, or D
  explanation: text("explanation"),
  difficulty: text("difficulty").default("medium"), // easy, medium, hard
  source: text("source").default("official_guide"), // official_guide, custom, practice
  sourceReference: text("source_reference"), // Page/Part reference from official guide
  isValuesQuestion: boolean("is_values_question").default(false), // Must answer correctly as per Nov 2020 rules
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const testSessions = pgTable("test_sessions", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  testType: text("test_type").default("practice"), // practice, official, timed
  status: text("status").default("in_progress"), // in_progress, completed, abandoned
  totalQuestions: integer("total_questions").default(20),
  correctAnswers: integer("correct_answers").default(0),
  startTime: timestamp("start_time").defaultNow(),
  endTime: timestamp("end_time"),
  score: integer("score").default(0), // percentage
  isPassed: boolean("is_passed").default(false),
});

export const testAnswers = pgTable("test_answers", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").references(() => testSessions.id),
  questionId: integer("question_id").references(() => questions.id),
  selectedAnswer: text("selected_answer").notNull(),
  isCorrect: boolean("is_correct").notNull(),
  timeSpent: integer("time_spent").default(0), // seconds
  answeredAt: timestamp("answered_at").defaultNow(),
});

export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  categoryId: integer("category_id").references(() => testCategories.id),
  totalQuestions: integer("total_questions").default(0),
  correctAnswers: integer("correct_answers").default(0),
  accuracy: integer("accuracy").default(0), // percentage
  lastStudied: timestamp("last_studied").defaultNow(),
  streakDays: integer("streak_days").default(0),
});

export const flashcards = pgTable("flashcards", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id").references(() => testCategories.id),
  front: text("front").notNull(),
  back: text("back").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const studyMaterials = pgTable("study_materials", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id").references(() => testCategories.id),
  partNumber: integer("part_number").notNull(), // Part 1, 2, 3, or 4
  title: text("title").notNull(),
  content: text("content").notNull(),
  section: text("section"), // Subsection name
  orderIndex: integer("order_index").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Insert schemas
export const insertTestCategorySchema = createInsertSchema(testCategories).omit({
  id: true,
});

export const insertQuestionSchema = createInsertSchema(questions).omit({
  id: true,
  createdAt: true,
});

export const insertTestSessionSchema = createInsertSchema(testSessions).omit({
  id: true,
  startTime: true,
});

export const insertTestAnswerSchema = createInsertSchema(testAnswers).omit({
  id: true,
  answeredAt: true,
});

export const insertUserProgressSchema = createInsertSchema(userProgress).omit({
  id: true,
  lastStudied: true,
});

export const insertFlashcardSchema = createInsertSchema(flashcards).omit({
  id: true,
  createdAt: true,
});

export const insertStudyMaterialSchema = createInsertSchema(studyMaterials).omit({
  id: true,
  createdAt: true,
});

// Types
export type TestCategory = typeof testCategories.$inferSelect;
export type InsertTestCategory = z.infer<typeof insertTestCategorySchema>;

export type Question = typeof questions.$inferSelect;
export type InsertQuestion = z.infer<typeof insertQuestionSchema>;

export type TestSession = typeof testSessions.$inferSelect;
export type InsertTestSession = z.infer<typeof insertTestSessionSchema>;

export type TestAnswer = typeof testAnswers.$inferSelect;
export type InsertTestAnswer = z.infer<typeof insertTestAnswerSchema>;

export type UserProgress = typeof userProgress.$inferSelect;
export type InsertUserProgress = z.infer<typeof insertUserProgressSchema>;

export type Flashcard = typeof flashcards.$inferSelect;
export type InsertFlashcard = z.infer<typeof insertFlashcardSchema>;

export type StudyMaterial = typeof studyMaterials.$inferSelect;
export type InsertStudyMaterial = z.infer<typeof insertStudyMaterialSchema>;

// Extended types for API responses
export type QuestionWithCategory = Question & {
  category?: TestCategory;
};

export type TestSessionWithDetails = TestSession & {
  questions?: QuestionWithCategory[];
  answers?: TestAnswer[];
  passingScore: number;
  timeLimit?: number;
};

export type UserProgressWithCategory = UserProgress & {
  category?: TestCategory;
};

export type DashboardStats = {
  totalTests: number;
  passedTests: number;
  averageScore: number;
  currentStreak: number;
  studyTime: number;
  totalQuestions: number;
  correctAnswers: number;
  accuracy: number;
};

export type StudyActivity = {
  id: string;
  type: 'test_completed' | 'practice_session' | 'flashcard_study' | 'milestone_reached';
  title: string;
  description: string;
  timestamp: Date;
  icon: string;
  iconColor: string;
  score?: number;
};

export type TestResult = {
  id: string;
  sessionId: number;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  category: string;
  isPassed: boolean;
  completedAt: Date;
  incorrectQuestions: {
    question: string;
    selectedAnswer: string;
    correctAnswer: string;
    explanation: string;
  }[];
};
