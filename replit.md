# Australian Citizenship Test Preparation App

## Overview

This mobile-first web application helps users prepare for the Australian citizenship test. It utilizes official questions from the "Australian Citizenship: Our Common Bond" guide (2020 edition), offering practice tests, flashcards, progress tracking, and study materials. The project aims to provide a comprehensive and accurate preparation tool, ensuring all content aligns with official government sources.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui and Radix UI primitives
- **State Management**: React Query (TanStack Query)
- **Routing**: Wouter
- **Form Management**: React Hook Form with Zod validation
- **Design**: Mobile-first responsive with 9 eye-soothing color themes, based on industry trends, using two-color combinations.

### Backend
- **Framework**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage) with official content; planned migration to PostgreSQL.
- **Database**: PostgreSQL with Drizzle ORM (migration pending).
- **Database Provider**: Neon Database (serverless PostgreSQL).
- **API Design**: RESTful API with JSON responses.

### Key Features
- **Official Content**: Over 200 questions, 20 flashcards, and 7 study sections directly from the "Our Common Bond" guide (2020). Includes specific "values questions" and source tracking for all content.
- **Test Categories**: Content is organized into 4 official categories mirroring the "Our Common Bond" PDF:
    1. Part 1: Australia and its people
    2. Part 2: Australia's democratic beliefs, rights and liberties
    3. Part 3: Government and the law in Australia
    4. Part 4: Australian values
- **Test Structure**: Supports 10 predefined practice test sets (20 questions each) and 5 curated flashcard sets. Tests adhere to official rules: 20 questions total, 5 values questions (must be answered correctly), and an overall passing score of 75%.
- **User Interface**: Dashboard for progress tracking, dedicated pages for study categories, interactive tests, flashcards, and detailed results.

### Project Structure
- `client/`: Frontend React application.
- `server/`: Backend Express application, including official questions, storage implementations, and API routes.
- `shared/`: Shared TypeScript types and schemas.

## External Dependencies

- **Official Content**: Australian Government "Australian Citizenship: Our Common Bond" (2020 edition).
- **ORM**: Drizzle ORM (for PostgreSQL integration).
- **UI Libraries**: Radix UI.
- **Validation**: Zod.
- **Database**: Neon Database (PostgreSQL).