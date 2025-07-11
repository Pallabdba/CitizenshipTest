# Inventory Management System

## Overview

This is a full-stack inventory management system built with React, TypeScript, Express.js, and PostgreSQL. The application provides comprehensive inventory tracking, supply chain management, and analytics capabilities with a modern, responsive user interface.

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

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **Development**: Hot reloading with Vite middleware integration

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express application
├── shared/          # Shared TypeScript types and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Database Schema
- **suppliers**: Vendor information and contact details
- **categories**: Product categorization system
- **inventory_items**: Main inventory tracking with stock levels
- **stock_transactions**: Audit trail for inventory movements
- **purchase_orders**: Purchase order management
- **purchase_order_items**: Line items for purchase orders

### Frontend Pages
- **Dashboard**: Overview metrics, charts, and recent activity
- **Inventory**: Item management with search and filtering
- **Supply Chain**: Supplier and purchase order management
- **Reports**: Analytics and data visualization
- **Alerts**: Critical notifications and low stock warnings

### Backend API Endpoints
- `/api/dashboard/*` - Dashboard metrics and analytics
- `/api/inventory/*` - Inventory item CRUD operations
- `/api/suppliers/*` - Supplier management
- `/api/categories/*` - Category management
- `/api/purchase-orders/*` - Purchase order operations
- `/api/export/*` - Data export functionality

## Data Flow

1. **Client Requests**: Frontend makes API calls using React Query
2. **Server Processing**: Express routes handle requests and validate data
3. **Database Operations**: Drizzle ORM executes SQL queries against PostgreSQL
4. **Response Handling**: JSON responses with proper error handling
5. **State Updates**: React Query automatically updates UI components

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM for type-safe database operations
- **UI Library**: Radix UI for accessible component primitives
- **Charts**: Recharts for data visualization
- **Validation**: Zod for schema validation

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast production builds
- **Vite**: Development server and build tool
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Development
- Run frontend and backend concurrently
- Vite dev server with Express middleware integration
- Hot reloading for both client and server code
- Database migrations with `drizzle-kit`

### Production
- Frontend: Static build served from `dist/public`
- Backend: Compiled to `dist/index.js` with ESBuild
- Database: Neon Database with connection pooling
- Environment: Node.js runtime with PostgreSQL connection

### Build Process
1. `npm run build` - Builds both frontend and backend
2. Frontend compiled to static assets
3. Backend bundled with external dependencies
4. Database schema pushed with `drizzle-kit push`

### Key Features
- **Real-time Inventory Tracking**: Current stock levels with min/max thresholds
- **Supply Chain Management**: Supplier relationships and purchase orders
- **Analytics Dashboard**: Metrics, trends, and performance indicators
- **Alert System**: Critical notifications for low stock and issues
- **Data Export**: CSV export functionality for reports
- **Responsive Design**: Mobile-friendly interface with dark mode support
- **Type Safety**: End-to-end TypeScript implementation
- **Database Migrations**: Version-controlled schema changes