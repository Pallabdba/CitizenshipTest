import { db } from "./db";
import { testCategories, questions, flashcards, studyMaterials } from "@shared/schema";
import { officialQuestions, studyMaterialsContent, officialFlashcards } from "./official-questions";

async function seed() {
  console.log("🌱 Seeding database with official Australian citizenship test content...");

  try {
    // 1. Insert test categories
    console.log("📁 Creating test categories...");
    const categories = await db.insert(testCategories).values([
      { name: 'Australian Values', description: 'Australian democracy, freedoms, and values', iconName: 'flag' },
      { name: 'History', description: 'Key events in Australian history', iconName: 'clock' },
      { name: 'Geography', description: 'Australian geography and states', iconName: 'map' },
      { name: 'Government', description: 'Australian government and law', iconName: 'building' },
      { name: 'Indigenous Australia', description: 'Aboriginal and Torres Strait Islander peoples', iconName: 'users' },
      { name: 'Culture & Society', description: 'Australian culture and society', iconName: 'heart' },
    ]).returning();
    console.log(`✅ Created ${categories.length} categories`);

    // 2. Insert official questions
    console.log("❓ Inserting official questions from 'Our Common Bond'...");
    const insertedQuestions = await db.insert(questions).values(officialQuestions).returning();
    console.log(`✅ Inserted ${insertedQuestions.length} official questions`);

    // Count values questions
    const valuesQuestions = insertedQuestions.filter(q => q.isValuesQuestion);
    console.log(`   - ${valuesQuestions.length} values questions (must answer correctly)`);
    console.log(`   - ${insertedQuestions.length - valuesQuestions.length} general knowledge questions`);

    // 3. Insert study materials
    console.log("📚 Inserting study materials content...");
    const materials = await db.insert(studyMaterials).values(studyMaterialsContent).returning();
    console.log(`✅ Inserted ${materials.length} study material sections`);

    // 4. Insert flashcards
    console.log("🎴 Inserting flashcards...");
    const cards = await db.insert(flashcards).values(officialFlashcards).returning();
    console.log(`✅ Inserted ${cards.length} flashcards`);

    console.log("\n🎉 Database seeding completed successfully!");
    console.log("\nContent Summary:");
    console.log(`  📁 ${categories.length} categories`);
    console.log(`  ❓ ${insertedQuestions.length} questions (${valuesQuestions.length} values questions)`);
    console.log(`  📚 ${materials.length} study material sections`);
    console.log(`  🎴 ${cards.length} flashcards`);
    console.log("\n✨ All content is from the official 'Australian Citizenship: Our Common Bond' guide");
    
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

// Run the seed function
seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
