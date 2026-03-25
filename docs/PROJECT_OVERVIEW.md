# CRMP Frontend - Project Overview

## Purpose

CRMP (Collaborative Research Management Platform) frontend is a **Next.js App Router** application that provides a unified interface for research lifecycle management across Researchers, Supervisors, Evaluators, and Admins.

**Backend separate:** This is frontend-only. Backend handles all business logic, validation, and data persistence.

## Architecture

### Tech Stack

- **Framework:** Next.js 16.1.6 (App Router, standalone output)
- **Language:** TypeScript 5 (strict mode)
- **UI Components:** shadcn/ui (built on Radix UI primitives)
- **Icons:** Phosphor React
- **State Management:**
  - Server state: TanStack React Query (data fetching)
  - Local UI state: Zustand (auth, UI toggles)
- **Form Handling:** React Hook Form + Zod (client-side validation)
- **HTTP Client:** Axios with interceptors
- **Styling:** Tailwind CSS 4.2.1

### Folder Structure

```
app/                    # Next.js routes (App Router)
├── (dashboard)/       # Protected dashboard routes
│   ├── layout.tsx     # Auth guard + sidebar + header
│   ├── student/
│   ├── admin/
│   └── ...
├── login/             # Public auth routes
├── signup/
└── layout.tsx         # Root layout (AuthInitializer)

components/
├── auth/              # Auth pages & forms
├── ui/                # shadcn primitive components
├── dashboard/         # Dashboard-specific components
│   ├── DashboardHeader.tsx
│   ├── DashboardSidebar.tsx
│   └── ...
└── landing/           # Landing page components

lib/
├── api/
│   ├── client.ts      # Axios instance with interceptors
│   ├── auth/          # Auth endpoints + mutations
│   └── errors.ts      # Centralized error handling
├── sidebar-config.ts  # Role-based navigation config
└── utils.ts           # Helper utilities

store/
├── auth/
│   └── authStore.ts   # Zustand auth store (persisted)
└── ...                # Feature stores

types/
└── auth.ts            # Shared type definitions

contexts/
├── QueryProvider.tsx  # React Query + DevTools setup
└── AuthInitializer.tsx # App startup auth check
```

### Core Concepts

**Route Protection:** Routes under `app/(dashboard)/` are wrapped in `AuthGuard` which:

- Redirects unauthenticated users to `/login`
- Checks role-based access
- Redirects unauthorized users to `/unauthorized`

**Role-Based Routing:** After login, users are redirected based on role:

- STUDENT → `/student`
- Others (SUPERVISOR, PI, EVALUATOR, ADMIN) → `/admin`

**Sidebar Navigation:** Configuration-driven via `lib/sidebar-config.ts`:

- Groups navigation items by role
- Filters items based on user.roles
- Collapses to icons-only view using shadcn Sidebar

**Deployment:** Built as Next.js standalone app, ready for containerization or direct deployment.

## Key Features

### ✅ Implemented

- Landing page with institutional branding
- Sign-Up page (with form validation, optional fields)
- Sign-In page (email/password)
- Dashboard layout (header + collapsible sidebar)
- Auth state persistence (Zustand + localStorage)
- Auto-login on app startup (GET /auth/me)
- Role-based navigation & route protection
- Password input component (show/hide toggle)
- Loading screen during auth check
- React Query + DevTools setup

### 🔄 In Progress / Future

- Permission system (granular per-feature access)
- Notification center
- User profile page
- Multi-role support (user has multiple roles simultaneously)
- Email verification on signup

## Development Workflow

1. **Branch:** Create feature branch from `main`
2. **Code:** Follow patterns in this codebase
3. **Validate:** Run `npm run lint` and `npm run build`
4. **Commit:** Pre-commit hooks run prettier + eslint
5. **Push:** Create PR, request review

## Running Locally

```bash
# Install dependencies
npm install

# Set environment variables
cp .env.example .env.local
# Edit .env.local with your backend URL

# Dev server
npm run dev

# Build
npm run build

# Lint & typecheck
npm run lint
npm run typecheck
```

## Important Links

- **Backend API:** http://localhost:8000 (configured in `.env.local`)
- **Local dev:** http://localhost:3000
- **Component library:** shadcn/ui (@/components/ui/\*)
- **Icons:** Phosphor React

## Questions?

- Check `docs/AUTHENTICATION.md` for auth implementation details
- Check `docs/API_INTEGRATION.md` for fetching data from backend
- Check `.github/copilot-instructions.md` for coding standards
