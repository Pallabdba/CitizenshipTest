import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertQuestionSchema, 
  insertTestCategorySchema, 
  insertTestSessionSchema,
  insertTestAnswerSchema,
  insertFlashcardSchema,
  insertUserProgressSchema
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Test Categories routes
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getTestCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch test categories" });
    }
  });

  app.get("/api/categories/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const category = await storage.getTestCategory(id);
      
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch category" });
    }
  });

  app.get("/api/categories/:id/question-count", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const questions = await storage.getQuestions(id);
      res.json({ categoryId: id, count: questions.length });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch question count" });
    }
  });

  app.post("/api/categories", async (req, res) => {
    try {
      const validation = insertTestCategorySchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid category data", errors: validation.error.errors });
      }
      
      const category = await storage.createTestCategory(validation.data);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to create category" });
    }
  });

  // Questions routes
  app.get("/api/questions", async (req, res) => {
    try {
      const { categoryId } = req.query;
      const questions = await storage.getQuestions(categoryId ? parseInt(categoryId as string) : undefined);
      res.json(questions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch questions" });
    }
  });

  app.get("/api/questions/random", async (req, res) => {
    try {
      const { categoryId, limit } = req.query;
      const questions = await storage.getRandomQuestions(
        categoryId ? parseInt(categoryId as string) : undefined,
        limit ? parseInt(limit as string) : 20
      );
      res.json(questions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch random questions" });
    }
  });

  app.get("/api/questions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const question = await storage.getQuestion(id);
      
      if (!question) {
        return res.status(404).json({ message: "Question not found" });
      }
      
      res.json(question);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch question" });
    }
  });

  app.post("/api/questions", async (req, res) => {
    try {
      const validation = insertQuestionSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid question data", errors: validation.error.errors });
      }
      
      const question = await storage.createQuestion(validation.data);
      res.status(201).json(question);
    } catch (error) {
      res.status(500).json({ message: "Failed to create question" });
    }
  });

  // Test Sessions routes
  app.get("/api/test-sessions", async (req, res) => {
    try {
      const { userId } = req.query;
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
      
      const sessions = await storage.getTestSessions(userId as string);
      res.json(sessions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch test sessions" });
    }
  });

  app.get("/api/test-sessions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const session = await storage.getTestSession(id);
      
      if (!session) {
        return res.status(404).json({ message: "Test session not found" });
      }
      
      res.json(session);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch test session" });
    }
  });

  app.post("/api/test-sessions", async (req, res) => {
    try {
      const validation = insertTestSessionSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid test session data", errors: validation.error.errors });
      }
      
      const session = await storage.createTestSession(validation.data);
      res.status(201).json(session);
    } catch (error) {
      res.status(500).json({ message: "Failed to create test session" });
    }
  });

  app.put("/api/test-sessions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validation = insertTestSessionSchema.partial().safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid test session data", errors: validation.error.errors });
      }
      
      const session = await storage.updateTestSession(id, validation.data);
      res.json(session);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to update test session";
      res.status(500).json({ message });
    }
  });

  app.post("/api/test-sessions/:id/complete", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const session = await storage.completeTestSession(id);
      res.json(session);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to complete test session";
      res.status(500).json({ message });
    }
  });

  app.get("/api/test-sessions/:id/results", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const results = await storage.getSessionResults(id);
      res.json(results);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to fetch test results";
      res.status(500).json({ message });
    }
  });

  // Test Answers routes
  app.get("/api/test-answers", async (req, res) => {
    try {
      const { sessionId } = req.query;
      if (!sessionId) {
        return res.status(400).json({ message: "Session ID is required" });
      }
      
      const answers = await storage.getTestAnswers(parseInt(sessionId as string));
      res.json(answers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch test answers" });
    }
  });

  app.post("/api/test-answers", async (req, res) => {
    try {
      const validation = insertTestAnswerSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid test answer data", errors: validation.error.errors });
      }
      
      const answer = await storage.createTestAnswer(validation.data);
      res.status(201).json(answer);
    } catch (error) {
      res.status(500).json({ message: "Failed to create test answer" });
    }
  });

  // User Progress routes
  app.get("/api/user-progress", async (req, res) => {
    try {
      const { userId } = req.query;
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
      
      const progress = await storage.getUserProgress(userId as string);
      res.json(progress);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user progress" });
    }
  });

  app.get("/api/user-progress/:userId/:categoryId", async (req, res) => {
    try {
      const { userId, categoryId } = req.params;
      const progress = await storage.getUserProgressByCategory(userId, parseInt(categoryId));
      
      if (!progress) {
        return res.status(404).json({ message: "Progress not found" });
      }
      
      res.json(progress);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user progress" });
    }
  });

  app.put("/api/user-progress/:userId/:categoryId", async (req, res) => {
    try {
      const { userId, categoryId } = req.params;
      const validation = insertUserProgressSchema.partial().safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid progress data", errors: validation.error.errors });
      }
      
      const progress = await storage.updateUserProgress(userId, parseInt(categoryId), validation.data);
      res.json(progress);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to update user progress";
      res.status(500).json({ message });
    }
  });

  // Flashcards routes
  app.get("/api/flashcards", async (req, res) => {
    try {
      const { categoryId } = req.query;
      const flashcards = await storage.getFlashcards(categoryId ? parseInt(categoryId as string) : undefined);
      res.json(flashcards);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch flashcards" });
    }
  });

  app.get("/api/flashcards/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const flashcard = await storage.getFlashcard(id);
      
      if (!flashcard) {
        return res.status(404).json({ message: "Flashcard not found" });
      }
      
      res.json(flashcard);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch flashcard" });
    }
  });

  app.post("/api/flashcards", async (req, res) => {
    try {
      const validation = insertFlashcardSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid flashcard data", errors: validation.error.errors });
      }
      
      const flashcard = await storage.createFlashcard(validation.data);
      res.status(201).json(flashcard);
    } catch (error) {
      res.status(500).json({ message: "Failed to create flashcard" });
    }
  });

  app.put("/api/flashcards/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validation = insertFlashcardSchema.partial().safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid flashcard data", errors: validation.error.errors });
      }
      
      const flashcard = await storage.updateFlashcard(id, validation.data);
      res.json(flashcard);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to update flashcard";
      res.status(500).json({ message });
    }
  });

  app.delete("/api/flashcards/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteFlashcard(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete flashcard" });
    }
  });

  // Dashboard routes
  app.get("/api/dashboard/stats", async (req, res) => {
    try {
      const { userId } = req.query;
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
      
      const stats = await storage.getDashboardStats(userId as string);
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch dashboard stats" });
    }
  });

  app.get("/api/dashboard/activity", async (req, res) => {
    try {
      const { userId } = req.query;
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
      
      const activity = await storage.getStudyActivity(userId as string);
      res.json(activity);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch study activity" });
    }
  });

  app.get("/api/dashboard/results", async (req, res) => {
    try {
      const { userId } = req.query;
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
      
      const results = await storage.getTestResults(userId as string);
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch test results" });
    }
  });

  // Test Sets routes
  app.get("/api/test-sets", async (req, res) => {
    try {
      const sets = await storage.getTestSets();
      res.json(sets);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch test sets" });
    }
  });

  app.get("/api/test-sets/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const set = await storage.getTestSet(id);
      
      if (!set) {
        return res.status(404).json({ message: "Test set not found" });
      }
      
      res.json(set);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch test set" });
    }
  });

  // Flashcard Sets routes
  app.get("/api/flashcard-sets", async (req, res) => {
    try {
      const sets = await storage.getFlashcardSets();
      res.json(sets);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch flashcard sets" });
    }
  });

  app.get("/api/flashcard-sets/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const set = await storage.getFlashcardSet(id);
      
      if (!set) {
        return res.status(404).json({ message: "Flashcard set not found" });
      }
      
      res.json(set);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch flashcard set" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}