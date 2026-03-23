# Copilot Instructions for CRMP Frontend

Use this file as default operating context for all coding tasks in this repository.

## 1) Project Context (Always Assume)

- Project: ASTU Collaborative Research Management Platform (CRMP)
- Goal: Centralize UGR, PG, and Staff research lifecycle in one AI-enhanced workflow.
- Frontend architecture: Next.js App Router + Tailwind + Shadcn/Radix primitives.
- UX style: Enterprise, clean, minimal, consistent.

## 2) Target Stack and Ownership Rules

- Server state: TanStack React Query
- Local UI state: Zustand
- Forms + validation: React Hook Form + Zod
- Keep Context providers only for global app wrappers (theme/tooltips/auth provider shells), not duplicate domain state.

## 3) Router Strategy (Target)

- Public routes: `/`, `/login`, `/signup`, `/research-database`
- Role scopes:
  - `/student/*`
  - `/pg/*`
  - `/admin/*`

When implementing features, prioritize this target route model even if legacy folders still exist.

## 4) Non-Negotiable Engineering Rules

- Reuse existing components before creating new ones.
- Do not duplicate navigation or shared layout logic.
- Keep components focused; extract repeated blocks.
- Preserve strict TypeScript and avoid `any` unless explicitly justified.
- Validate external payloads with Zod.
- Keep mock data behind a thin data layer; avoid coupling UI directly to raw mock objects.

## 5) File/Layer Boundaries

- `app/**`: routes, layouts, route composition
- `components/ui/**`: primitives only
- `components/**` (outside ui): composed feature components
- `store/**`: Zustand slices/stores
- `lib/**`: utilities, schemas, adapters, typed contracts
- `contexts/**`: provider wiring only (avoid domain duplication)

## 6) Collaboration and Conflict Prevention

- Keep PRs single-purpose and small.
- Avoid broad refactors inside feature PRs unless required.
- If touching high-traffic files, minimize churn and preserve public interfaces.
- Prefer incremental migrations with clear handoff notes.

## 7) Coding Agent Execution Protocol

For each task:

1. Read relevant files first; do not guess architecture.
2. Propose the minimal change set that satisfies the request.
3. Implement directly (do not stop at suggestions unless asked).
4. Run lint/build checks relevant to changed scope when feasible.
5. Report: what changed, why, and any follow-up risks.

## 8) What to Avoid

- Introducing new design tokens/colors outside existing theme system.
- Mixing server-state concerns into Zustand.
- Re-implementing existing primitives from `components/ui`.
- Silent breaking changes to route structure or shared component APIs.
- Large stylistic rewrites unrelated to task scope.

## 9) Response Style for This Repo

- Be concise and implementation-first.
- Prefer action over long explanation.
- If ambiguous, make the safest assumption and state it briefly.
- If blocked, provide one concrete unblock option.

## 10) Priority Order (if tradeoffs appear)

1. Correctness and data integrity
2. Clear role/routing boundaries
3. Reusability and consistency
4. Minimal diff / low merge-conflict risk
5. Speed

## 11) Companion Team Guide

Also align with: `CONTRIBUTING.md` in repository root.
