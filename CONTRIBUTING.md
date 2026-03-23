# CRMP Frontend Team Guide

This document is the working agreement for contributors to keep implementation clean, reusable, and conflict-free.

## 0) Product Context (source of truth)

### Product

- **Project:** ASTU Collaborative Research Management Platform (CRMP)
- **Goal:** Centralize UGR, PG, and Staff research lifecycle in one AI-enhanced workflow.

### Target Frontend Stack

- **Framework:** Next.js App Router (project currently on Next 16; keep App Router architecture).
- **Styling:** Tailwind CSS with enterprise/clean visual language.
- **UI primitives:** Shadcn UI + Radix-based accessible components.
- **Server state:** TanStack React Query.
- **Local UI state:** Zustand (sidebar, local draft/form UI toggles, client-only UI preferences).
- **Forms:** React Hook Form + Zod with strict validation.

### Routing Strategy (target)

- **Public:** `/`, `/login`, `/signup`, `/research-database`
- **Private shared:** `/dashboard`
- **Role-scoped:**
  - `/student/*` proposal submission, collaborator matching, advisor requests
  - `/pg/*` PG budget oversight and final certifications
  - `/admin/*` user management, system logs, `routing_rules`

### Current vs Target Note

- Current app routes do not yet fully match target role-scoped paths.
- React Query is not yet present in dependencies, so server-state standardization is pending.
- Until migration completes, all new work should follow the **target** architecture above.

## 1) Team Workflow (2–3 devs)

### Branching

- Use short-lived feature branches from `main`.
- Branch format:
  - `feat/<scope>-<short-name>`
  - `fix/<scope>-<short-name>`
  - `chore/<scope>-<short-name>`
- Keep branch lifetime small (prefer < 3 days).

### Pull Requests

- Keep PRs focused to one concern.
- Target size: ideally < 300 changed lines.
- Open draft PR early for visibility.
- Require at least 1 review before merge.
- Use squash merge to keep history clean.

### Commit Messages

Use clear, scoped messages:

- `feat(dashboard): add reviewer count card`
- `fix(team): prevent duplicate member emails`
- `refactor(ui): extract reusable status badge`

## 2) Definition of Done

A task is done only if all are true:

- `npm run lint` passes.
- `npm run build` passes locally.
- No `any` added without strong reason.
- No duplicate component created when reusable option exists.
- UI uses existing design tokens/components.
- PR description includes what changed + why.

## 3) Project Structure Rules

### App Router

- Route pages stay under `app/**`.
- Route-specific UI goes under that route folder (or a nearby route-local `components` folder if created).
- Shared reusable UI lives in `components/**`.

### UI Layers

- `components/ui/**` = design-system primitives (Button, Input, Dialog, Sidebar primitives, etc.).
- `components/**` (outside `ui`) = composed feature components.
- Avoid creating alternative duplicates of the same navigation/widget.

### Utilities and Data

- Generic helpers in `lib/**`.
- Mock/static data should stay separate from UI components.
- Prefer typed domain models shared across state and UI.

## 4) State Management Rules

Current code uses both Context and Zustand. To avoid confusion:

- Server/API state must live in React Query hooks (`queries`, `mutations`, cache invalidation policy).
- Zustand should hold only local/client UI state and non-server ephemeral state.
- Keep Context for app-wide providers only (theme, tooltip, auth/session wrappers).
- Do not duplicate the same data in React Query, Context, and Zustand.
- If moving ownership of state, do it in one PR with clear migration notes.

## 5) TypeScript and Code Style

- Keep `strict` TypeScript standards.
- Prefer explicit interfaces/types for shared data.
- Avoid `any`; use union types and reusable interfaces.
- Keep components small and focused.
- Extract repeated JSX blocks into reusable components.
- Name files by responsibility, not by temporary screen names.

## 6) UI/UX Consistency

- Reuse existing components before creating new ones.
- Use tokens from `app/globals.css`; avoid hard-coded colors/shadows when tokenized option exists.
- Keep spacing and typography consistent with existing pages.
- Preserve accessibility basics:
  - Keyboard focus visible
  - Semantic buttons/links
  - Label form fields

## 7) Conflict Prevention Rules

- Before starting work, announce file ownership in team chat for high-traffic files (navigation, layout, shared store files).
- Pull latest `main` daily and before opening PR.
- If two people touch the same shared file, split by sequence:
  1. First PR: refactor/extract reusable base.
  2. Second PR: feature changes on top.

## 8) Review Checklist (copy into PR)

- [ ] Single concern PR
- [ ] Reused existing component(s)
- [ ] No duplicate logic introduced
- [ ] Lint passes
- [ ] Build passes
- [ ] Types are safe (no unnecessary `any`)
- [ ] Screenshots/video included for UI changes
- [ ] Notes on risk and rollback included

## 9) Suggested Ownership (optional)

For a 2–3 person team, split ownership by domain:

- Dev A: `app/**` route logic + page composition
- Dev B: `components/**` shared UI + design consistency
- Dev C (or rotating): `store/**`, `contexts/**`, and integration/data flow

## 10) Route Governance Rules

- New pages for role-specific features must be placed under the role segment (`/student`, `/pg`, `/admin`).
- Avoid adding role logic directly in shared pages when a role segment exists.
- Shared components remain role-agnostic and receive role permissions as props/config.
- Route guards and permission checks must be centralized (single source of truth), not scattered across pages.

## 11) Data/Validation Rules

- All external payloads must be validated with Zod schemas before use.
- Form schemas should be colocated with form modules and exported for server/client reuse.
- Introduce typed API layer contracts (request/response types) before wiring feature UI.
- Keep mock data behind a thin data-access layer so API migration does not rewrite UI.

---

If this guide changes, update it in the same PR as the process change so team behavior and code evolve together.
