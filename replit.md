# Australian Citizenship Test Preparation App

## Overview

This is a mobile-first web application designed to help users prepare for the Australian citizenship test. The app features official questions from the "Australian Citizenship: Our Common Bond" guide (2020 edition), practice tests, flashcards, progress tracking, and study materials.

**Official Content Source**: All test questions and study materials are based on the official Australian Government citizenship test guide available at:
https://immi.homeaffairs.gov.au/citizenship-subsite/files/our-common-bond-testable.pdf

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Management**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling
- **Design**: Mobile-first responsive design

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage) with official content
- **Database**: PostgreSQL with Drizzle ORM (migration pending)
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **Development**: Hot reloading with Vite middleware integration

### Project Structure
```
├── client/             # Frontend React application
│   ├── src/pages/     # Page components (dashboard, test, study, etc.)
│   └── src/components/ # Reusable UI components
├── server/            # Backend Express application
│   ├── official-questions.ts  # 45+ official questions from PDF
│   ├── storage.ts     # In-memory storage implementation
│   ├── db-storage.ts  # PostgreSQL storage (ready for migration)
│   └── routes.ts      # API routes
├── shared/            # Shared TypeScript types and schemas
└── dist/              # Production build output
```

## Key Features

### Official Content Integration
- **200+ Official Questions**: All questions sourced from "Our Common Bond" (2020)
- **Values Questions**: Questions marked as "values questions" (must answer correctly as per Nov 2020 rules)
- **Source Tracking**: Each question includes reference to specific parts of the official guide
- **Study Materials**: 7 sections of content from Parts 1-4 of the official guide
- **Official Flashcards**: 20 flashcards covering key citizenship concepts
- **Test Sets**: 10 predefined practice test sets (20 questions each)
- **Flashcard Sets**: 5 curated flashcard sets for focused study
- **Color Themes**: 9 eye-soothing themes with two-color combinations

### Test Categories (Matching Official PDF Structure)
The app uses **4 official categories** exactly as defined in the "Our Common Bond" PDF:

1. **Part 1: Australia and its people** (52 questions)
   - Aboriginal and Torres Strait Islander peoples
   - Early European settlement and the First Fleet (1788)
   - The gold rush (1851)
   - Federation and the Commonwealth of Australia (1901)
   - Australian states, territories, and symbols

2. **Part 2: Australia's democratic beliefs, rights and liberties** (50 questions)
   - Democratic values and freedoms
   - Freedom of speech and religion
   - Rule of law and equality
   - Rights and responsibilities of citizenship

3. **Part 3: Government and the law in Australia** (50 questions)
   - Three levels of government (Federal, State, Local)
   - Parliamentary democracy
   - The High Court
   - Voting rights and compulsory voting

4. **Part 4: Australian values** (50 questions)
   - Respect for equal worth and dignity
   - Freedom and tolerance
   - Equality of men and women
   - Peacefulness and rule of law
   - Mutual respect and compassion

### Database Schema
- **test_categories**: 4 official categories matching the PDF structure
- **questions**: 45+ official questions with source tracking (source, sourceReference, isValuesQuestion)
- **test_sessions**: Practice and official test sessions
- **test_answers**: User answers with correctness tracking
- **user_progress**: Category-wise progress and accuracy
- **flashcards**: Study flashcards for quick review
- **study_materials**: Official guide content organized by parts and sections

### Frontend Pages
- **Dashboard**: Overview metrics, study activity, progress tracking
- **Study Categories**: Browse and select from the 4 official study topics
- **Test**: Interactive multiple-choice test interface
- **Flashcards**: Digital flashcards for quick review
- **Results**: Detailed test results with explanations
- **Progress**: Track learning progress by category

### Backend API Endpoints
- `/api/categories` - 4 official test categories
- `/api/categories/:id/question-count` - Get accurate question count for a category
- `/api/questions` - Question management (with source filtering)
- `/api/test-session` - Test session management
- `/api/test-answer` - Answer submission
- `/api/dashboard/*` - Dashboard stats and activity
- `/api/progress` - User progress tracking
- `/api/flashcards` - Flashcard management
- `/api/test-sets` - Get all predefined test sets
- `/api/test-sets/:id` - Get specific test set with questions
- `/api/flashcard-sets` - Get all flashcard sets
- `/api/flashcard-sets/:id` - Get specific flashcard set

## Official Guide Content Structure

### Part 1: Australia and Its People
- Aboriginal and Torres Strait Islander peoples
- Early European settlement and the First Fleet (1788)
- The gold rush (1851)
- Federation and the Commonwealth of Australia (1901)
- Australian states and territories
- National symbols (flag, anthem, national flower, etc.)

### Part 2: Australia's Democratic Beliefs, Rights and Liberties
- Democratic values and freedoms
- Freedom of speech and religion
- Rule of law and equality
- Rights and responsibilities of citizenship
- Parliamentary democracy

### Part 3: Government and the Law in Australia
- Three levels of government (Federal, State, Local)
- Parliamentary system and how laws are made
- The High Court
- Voting rights and compulsory voting
- Australian Constitution

### Part 4: Australian Values
- Respect for equal worth and dignity
- Freedom and tolerance
- Equality of men and women
- Peacefulness and rule of law
- Mutual respect and compassion
- English language and social participation

## Test Requirements (as per Nov 2020 rules)

- **Total Questions**: 20 randomly selected questions
- **Values Questions**: 5 questions specifically about Australian values
- **Passing Requirements**:
  - Must answer ALL 5 values questions correctly
  - Overall score of at least 75% (15/20 questions)
- **Test Format**: Multiple choice (A, B, C, D options)
- **Time Limit**: 45 minutes for official tests

## Recent Changes

### October 22, 2025 - Latest Update
- ✅ **Fixed Question Count Display**: Replaced mock random counts with real API endpoint (`/api/categories/:id/question-count`)
- ✅ **Expanded Question Pool**: Added 96 new questions from official PDF (now 202 total)
  - Part 1: 52 questions (maintained)
  - Part 2: 50 questions (added 40)
  - Part 3: 50 questions (added 22)
  - Part 4: 50 questions (added 34)
- ✅ **Implemented Test Sets**: Created 10 predefined test sets
  - Sets 1-5: Mixed questions from all parts (8 Part 1, 4 each from Parts 2-4)
  - Sets 6-9: Part-specific focused tests (20 questions each)
  - Set 10: Official practice test (5 values + 15 regular questions)
  - All sets use deterministic shuffle with seeds for consistency
- ✅ **Implemented Flashcard Sets**: Created 5 curated flashcard sets
  - Set 1: Mixed flashcards from all topics (20 cards)
  - Sets 2-5: Part-specific flashcards for focused study
- ✅ **Added Color Themes**: Implemented 9 eye-soothing themes
  - Themes: Ocean Blue, Forest Green, Sunset Orange, Lavender Purple, Sage & Mint, Coral & Peach, Slate & Sky, Rose & Blush, Default
  - Each theme has two-color combinations (primary + secondary)
  - Theme selector accessible via palette icon in header
  - Themes persist in localStorage and update CSS variables dynamically

### October 22, 2025 - Earlier Updates
- ✅ Restructured entire app to match the 4 official PDF parts
- ✅ Updated categories from 6 to 4 official parts (Part 1, Part 2, Part 3, Part 4)
- ✅ Re-categorized all questions based on sourceReference field
- ✅ Integrated official "Our Common Bond" study guide (2020 edition)
- ✅ Implemented source tracking (source, sourceReference, isValuesQuestion fields)
- ✅ Created 7 study material sections from official PDF
- ✅ Updated flashcards from 10 to 20 unique cards covering all categories
- ✅ All questions properly categorized across 4 official parts
- ✅ Values questions marked for special handling (must answer correctly)
- ✅ Updated practice tests to use 20 questions (matching official test format)
- ✅ Both practice and official tests now use consistent 20-question format

### Question Distribution
- Part 1 (Australia and its people): 52 questions
- Part 2 (Democratic beliefs): 50 questions  
- Part 3 (Government and law): 50 questions
- Part 4 (Australian values): 50 questions
- **Total**: 202 questions from official guide

### Color Themes
The app includes 9 eye-soothing color themes with two-color combinations:

1. **Ocean Blue** (primary: blue, secondary: teal) - Default theme
2. **Forest Green** (primary: green, secondary: olive)
3. **Sunset Orange** (primary: orange, secondary: amber)
4. **Lavender Purple** (primary: purple, secondary: violet)
5. **Sage & Mint** (primary: sage, secondary: mint)
6. **Coral & Peach** (primary: coral, secondary: peach)
7. **Slate & Sky** (primary: slate, secondary: sky)
8. **Rose & Blush** (primary: rose, secondary: blush)
9. **Default** (original color scheme)

**Theme Features:**
- Two-color combinations for visual harmony
- Accessible via palette icon in header
- Persists across sessions using localStorage
- Dynamically updates CSS variables without page reload
- Mobile and desktop responsive

### Pending Work
- Database migration from in-memory to PostgreSQL (infrastructure ready)
- Dark mode toggle UI (theme provider exists, needs UI control)
- Study materials viewer component

## Data Flow

1. **Client Requests**: Frontend makes API calls using React Query
2. **Server Processing**: Express routes handle requests and validate data
3. **Storage Operations**: In-memory storage currently active (database ready for migration)
4. **Response Handling**: JSON responses with proper error handling
5. **State Updates**: React Query automatically updates UI components

## External Dependencies

### Core Technologies
- **ORM**: Drizzle ORM for type-safe database operations (ready for migration)
- **UI Library**: Radix UI for accessible component primitives
- **Validation**: Zod for schema validation
- **Official Content**: Australian Government citizenship test materials

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **Vite**: Development server and build tool
- **PostCSS**: CSS processing with Tailwind
- **Hot Reload**: Automatic reloading on file changes

## Content Quality & Compliance

All questions and study materials in this application are sourced from the official Australian Government publication "Australian Citizenship: Our Common Bond" (2020 edition). The app:

- Uses ONLY official content from the government guide
- Includes proper source references for each question
- Follows the November 2020 test format (20 questions, 5 values questions)
- Accurately represents the 4 testable parts of the official guide exactly as structured in the PDF
- No third-party or unofficial content is included
- All questions mapped to their corresponding PDF parts via sourceReference field

## Development & Testing

- **Development Mode**: `npm run dev` - Starts Express server with Vite
- **Official Questions**: Located in `server/official-questions.ts`
- **Storage Layer**: `server/storage.ts` (in-memory) or `server/db-storage.ts` (PostgreSQL)
- **Schema Definition**: `shared/schema.ts` with Drizzle ORM types
- **Categories**: Defined in `server/storage.ts` matching official PDF structure

## Future Enhancements

1. Complete PostgreSQL database migration
2. Add dark mode UI toggle
3. Implement study materials viewer with official PDF content
4. Add practice test analytics with detailed performance insights
5. Export test results and progress reports as PDF
6. Add timed practice mode (45-minute countdown)
7. Implement answer explanations for incorrect responses
8. Create adaptive learning mode (focuses on weak areas)
9. Add bookmark/favorite questions feature
10. Implement spaced repetition for flashcards
