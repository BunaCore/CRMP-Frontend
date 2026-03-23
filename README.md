# ASTU Collaborative Research Management Platform (CRMP) - Frontend

Enterprise-grade frontend for ASTU's Collaborative Research Management Platform, built to centralize the full research lifecycle (UGR, PG, Staff) in one AI-enhanced workflow.

## Mission

CRMP streamlines proposal submission, review, approvals, tracking, and administration across different user roles in a single platform.

## Core Capabilities

- Role-aware research workflows for Student, PG, and Admin users
- Proposal submission and review lifecycle tracking
- Shared dashboard experience for authenticated users
- Reusable enterprise UI built with accessible primitives
- Strict metadata validation for research and form data

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- Shadcn UI + Radix primitives
- TanStack React Query (server state target)
- Zustand (local UI state)
- React Hook Form + Zod (forms + validation)
- TypeScript (strict mode)

## Routing Strategy (Target)

### Public

- `/`
- `/login`
- `/signup`
- `/research-database`

### Private Shared

- `/dashboard`

### Role Scoped

- `/student/*` - submission, collaborator matching, advisor requests
- `/pg/*` - budget oversight, certification flow
- `/admin/*` - user management, system logs, routing rules

> Note: If legacy routes exist, new work should still follow the target model above.

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Quality Checks

```bash
npm run lint
npm run build
```

## Project Structure (High-Level)

- `app/` - routes, layouts, route composition
- `components/ui/` - UI primitives only
- `components/` - composed feature components
- `store/` - Zustand stores
- `lib/` - utilities, schemas, adapters, typed contracts
- `contexts/` - provider wiring only

## Engineering Rules

- Reuse existing components before creating new ones
- Keep server state out of Zustand
- Validate external payloads with Zod
- Avoid duplicate navigation/layout logic
- Keep PRs small and single-purpose

See:

- [CONTRIBUTING.md](CONTRIBUTING.md)
- [.github/copilot-instructions.md](.github/copilot-instructions.md)

## Current Status

Active development. Architecture is being aligned to role-scoped routing and stricter state ownership boundaries.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR.
