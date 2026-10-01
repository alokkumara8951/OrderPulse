# PROMPTS.md - AI prompt log

This file lists, in order, the prompts used to scope and build OrderPulse.
Earlier prompts (planning/discussion) happened in a prior chat session; the
entries below cover the session that generated the actual repository
scaffold and code.

1. "React Developer Assessment - One-Day Assignment" (full assignment brief
   pasted by the user, defining OrderPulse's requirements, stack, evaluation
   weights, and deliverables).
2. "using above requirement create the React project using VITE"
3. "create repository with the name of OrderPulse"
4. "@Copilot Accepted Confirmation: Are you sure?" (repository creation
   confirmed)
5. "yes" (confirmed scaffolding the full project)
6. Task-runner prompt: "Scaffold and implement a React 18+ TypeScript
   (strict) Vite project in repository alokkumara8951/OrderPulse for the
   OrderPulse assessment... [full requirements list covering tooling,
   project structure, core v1 functionality, data safety, accessibility,
   tests, and documentation] ... Do not open a pull request; commit directly
   to main branch in this session."

## Notes on how prompts were used

- Prompt 6 (the detailed requirements list) was treated as the authoritative
  scope for this session and implemented directly: project scaffolding,
  feature-based architecture, mocks (10k+ seeded orders + live stream
  simulation), optimistic actions with rollback, URL-synced grid state, a
  permission layer, accessibility basics, and the test pyramid (unit,
  integration, e2e, axe).
- No additional mid-session clarifying prompts were required; ambiguous
  points (e.g., exact KPI chart styling, saved-view persistence) were
  resolved in favour of the higher-weighted requirements and recorded as
  explicit cuts in `NOTES.md`.
