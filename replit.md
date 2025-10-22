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
- **45+ Official Questions**: All questions sourced from "Our Common Bond" (2020)
- **Values Questions**: 15+ questions marked as "values questions" (must answer correctly as per Nov 2020 rules)
- **Source Tracking**: Each question includes reference to specific parts of the official guide
- **Study Materials**: 7 sections of content from Parts 1-4 of the official guide
- **Official Flashcards**: 10 flashcards covering key citizenship concepts

### Test Categories
1. **Australian Values** (Category 1) - Democracy, freedoms, and core values
2. **History** (Category 2) - Key events including First Fleet, Federation, gold rush
3. **Geography** (Category 3) - States, territories, capital cities
4. **Government** (Category 4) - Parliamentary system, three levels of government, voting
5. **Indigenous Australia** (Category 5) - Aboriginal and Torres Strait Islander peoples
6. **Culture & Society** (Category 6) - National symbols, Anzac Day, multiculturalism

### Database Schema
- **test_categories**: Six main study categories
- **questions**: 45+ official questions with source tracking (source, sourceReference, isValuesQuestion)
- **test_sessions**: Practice and official test sessions
- **test_answers**: User answers with correctness tracking
- **user_progress**: Category-wise progress and accuracy
- **flashcards**: Study flashcards for quick review
- **study_materials**: Official guide content organized by parts and sections

### Frontend Pages
- **Dashboard**: Overview metrics, study activity, progress tracking
- **Study Categories**: Browse and select study topics
- **Test**: Interactive multiple-choice test interface
- **Flashcards**: Digital flashcards for quick review
- **Results**: Detailed test results with explanations
- **Progress**: Track learning progress by category

### Backend API Endpoints
- `/api/categories` - Test categories
- `/api/questions` - Question management (with source filtering)
- `/api/test-session` - Test session management
- `/api/test-answer` - Answer submission
- `/api/dashboard/*` - Dashboard stats and activity
- `/api/progress` - User progress tracking
- `/api/flashcards` - Flashcard management

## Official Guide Content

### Part 1: Australia and Its People
- Aboriginal and Torres Strait Islander peoples
- Early European settlement and the First Fleet (1788)
- The gold rush (1851)
- Federation and the Commonwealth of Australia (1901)

### Part 2: Australia's Democratic Beliefs, Rights and Liberties
- Democratic values and freedoms
- Freedom of speech and religion
- Rule of law and equality
- Rights and responsibilities of citizenship

### Part 3: Government and the Law in Australia
- Three levels of government (Federal, State, Local)
- Parliamentary democracy
- The High Court
- Voting rights and compulsory voting

### Part 4: Australian Values
- Respect for equal worth and dignity
- Freedom and tolerance
- Equality of men and women
- Peacefulness and rule of law
- Mutual respect and compassion

## Test Requirements (as per Nov 2020 rules)

- **Total Questions**: 20 randomly selected questions
- **Values Questions**: 5 questions specifically about Australian values
- **Passing Requirements**:
  - Must answer ALL 5 values questions correctly
  - Overall score of at least 75% (15/20 questions)
- **Test Format**: Multiple choice (A, B, C, D options)
- **Time Limit**: 45 minutes for official tests

## Recent Changes

### October 22, 2025
- ✅ Integrated official "Our Common Bond" study guide (2020 edition)
- ✅ Added 45+ official questions from all 4 parts of the guide
- ✅ Implemented source tracking (source, sourceReference, isValuesQuestion fields)
- ✅ Created 7 study material sections from official PDF
- ✅ Updated 10 flashcards with official content
- ✅ All questions properly categorized across 6 test categories
- ✅ Values questions marked for special handling (must answer correctly)

### Pending Work
- Database migration from in-memory to PostgreSQL (infrastructure ready)
- Dark mode toggle UI (theme provider exists, needs UI control)
- Study materials viewer component
- Code download capability

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
- Accurately represents the 4 testable parts of the official guide
- No third-party or unofficial content is included

## Development & Testing

- **Development Mode**: `npm run dev` - Starts Express server with Vite
- **Official Questions**: Located in `server/official-questions.ts`
- **Storage Layer**: `server/storage.ts` (in-memory) or `server/db-storage.ts` (PostgreSQL)
- **Schema Definition**: `shared/schema.ts` with Drizzle ORM types

## Future Enhancements

1. Complete PostgreSQL database migration
2. Add dark mode UI toggle
3. Implement study materials viewer with official PDF content
4. Add practice test analytics
5. Create category-specific study modes
6. Export test results and progress reports
