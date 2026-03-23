# CRMP Frontend Team Guide

This document is the working agreement for contributors to keep implementation clean, reusable, and conflict-free.

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
- Use Zustand stores for feature/domain state.
- Keep Context for app-wide providers (theme/tooltips/session wrapper concerns).
- Do not duplicate the same state in both Context and Zustand.
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

---

If this guide changes, update it in the same PR as the process change so team behavior and code evolve together.
