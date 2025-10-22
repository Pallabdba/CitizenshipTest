import { sql } from "drizzle-orm";
import { db, pool } from "./db";
import { 
  testCategories, 
  questions, 
  testSessions, 
  testAnswers, 
  userProgress, 
  flashcards,
  studyMaterials 
} from "@shared/schema";

async function migrate() {
  console.log("🔧 Creating database tables...");

  try {
    // Create tables by executing the SQL schema
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS test_categories (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        description TEXT,
        icon_name TEXT DEFAULT 'book'
      );
    `);
    console.log("✅ Created test_categories table");

    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS questions (
        id SERIAL PRIMARY KEY,
        category_id INTEGER REFERENCES test_categories(id),
        question TEXT NOT NULL,
        option_a TEXT NOT NULL,
        option_b TEXT NOT NULL,
        option_c TEXT NOT NULL,
        option_d TEXT,
        correct_answer TEXT NOT NULL,
        explanation TEXT,
        difficulty TEXT DEFAULT 'medium',
        source TEXT DEFAULT 'official_guide',
        source_reference TEXT,
        is_values_question BOOLEAN DEFAULT false,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log("✅ Created questions table");

    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS test_sessions (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        test_type TEXT DEFAULT 'practice',
        status TEXT DEFAULT 'in_progress',
        total_questions INTEGER DEFAULT 20,
        correct_answers INTEGER DEFAULT 0,
        start_time TIMESTAMP DEFAULT NOW(),
        end_time TIMESTAMP,
        score INTEGER DEFAULT 0,
        is_passed BOOLEAN DEFAULT false
      );
    `);
    console.log("✅ Created test_sessions table");

    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS test_answers (
        id SERIAL PRIMARY KEY,
        session_id INTEGER REFERENCES test_sessions(id),
        question_id INTEGER REFERENCES questions(id),
        selected_answer TEXT NOT NULL,
        is_correct BOOLEAN NOT NULL,
        time_spent INTEGER DEFAULT 0,
        answered_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log("✅ Created test_answers table");

    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS user_progress (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        category_id INTEGER REFERENCES test_categories(id),
        total_questions INTEGER DEFAULT 0,
        correct_answers INTEGER DEFAULT 0,
        accuracy INTEGER DEFAULT 0,
        last_studied TIMESTAMP DEFAULT NOW(),
        streak_days INTEGER DEFAULT 0
      );
    `);
    console.log("✅ Created user_progress table");

    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS flashcards (
        id SERIAL PRIMARY KEY,
        category_id INTEGER REFERENCES test_categories(id),
        front TEXT NOT NULL,
        back TEXT NOT NULL,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log("✅ Created flashcards table");

    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS study_materials (
        id SERIAL PRIMARY KEY,
        category_id INTEGER REFERENCES test_categories(id),
        part_number INTEGER NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        section TEXT,
        order_index INTEGER DEFAULT 0,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log("✅ Created study_materials table");

    console.log("\n🎉 Database migration completed successfully!");
    
  } catch (error) {
    console.error("❌ Error during migration:", error);
    throw error;
  } finally {
    await pool.end();
  }
}

// Run the migration
migrate()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
