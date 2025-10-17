---
version: 2025.10.16
origin: doon
branch: cognitive-transplant

# Doon International School - Project Structure Overview

## Directory Structure (Post-Transplant)

```
/specs/                    → Feature specifications (SDD Phase 1)
/specs/specifications.md   → Current MVP specs (4-page website)
/specs/001-scope-freeze/   → Existing scope freeze specification

/plan/                     → Implementation plans (SDD Phase 2)
/plan/plan.md             → Current implementation plan

/tasks/                    → Executable tasks (SDD Phase 3)
/tasks/tasks.md           → Current task breakdown

/qa/                       → Validation results & coverage
                           → (Empty - awaiting TDD implementation)

/docs/                     → Governance, meta, architecture
/docs/_index.md           → SDD governance & export commands
/docs/workflow-final-report.md → Complete SDD workflow explanation
/docs/constitution.md     → Project constitutional articles
/docs/sdd.md             → Specification-Driven Development methodology
/docs/README.md          → General documentation

/meta/                     → Charter & system purpose
                           → (Empty - awaiting charter document)

/decisions/                → Rationale log
/decisions/ledger.md      → Decision history with dates and rationale

/lessons/                  → Extracted debugging knowledge
/lessons/index.md         → Lessons learned from development experiences

context.json               → Runtime manifest (0.5K tokens)

app/                       → Next.js application
components/                → Reusable UI component library
data/                      → Static JSON content files
public/                    → Static assets
```

## Project State Summary

### SDD Implementation Status
- ✅ **Phase 1 (Specify):** Active specification in `/specs/specifications.md`
- 🚧 **Phase 2 (Plan):** Empty plan template in `/plan/plan.md`
- 🚧 **Phase 3 (Tasks):** Empty tasks template in `/tasks/tasks.md`
- ❌ **Phase 4 (Code):** Awaiting test-first TDD implementation
- ❌ **Phase 5 (QA):** Awaiting test suite setup

### Constitution Compliance Matrix
| Article | Status | Notes |
|---------|--------|-------|
| I. Static-First | ✅ | JSON data files in `/data/` |
| II. Component-First | ✅ | Components in `/components/` |
| III. TypeScript-First | ✅ | `strict: true` enabled |
| IV. Test-First | ❌ | Test suite not implemented |
| VII. Simplicity Gate | ✅ | 4-page MVP only |
| VIII. Framework-Trust | ✅ | Direct Next.js/Tailwind usage |
| IX. Integration-First | ⚠️ | Planned for TDD phase |
| X. Documentation-Driven | ✅ | Complete SDD documentation |

### Active Modules
- **school-website-nextjs:** Core Next.js application
- **static-content-management:** JSON-based content system
- **component-library:** Reusable UI components
- **responsive-design-system:** Tailwind CSS styling

### Tool Chain
- **Framework:** Next.js 14.2.3 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4.1
- **Forms:** React Hook Form + Zod
- **Animation:** Framer Motion 12.23.22
- **Linting:** ESLint (recommended strict config)
- **Deployment:** Manual (Vercel-ready)

## Architecture Principles

### Specifications Drive Implementation
- Intent defines truth; implementation merely fulfills it
- Code serves specifications, not vice versa
- All features begin with complete specifications

### Cognitive Branching
- Each bug/experiment isolated in branches (e.g., `branch/issue-slug`)
- Distilled knowledge merged into main
- `/lessons/index.md` captures debugging insights

### Context Compression
- Full project context loadable in ~4.5K tokens:
  - `docs/_index.md` (1K): Governance
  - `docs/workflow-final-report.md` (3K): Complete workflow
  - `context.json` (0.5K): Runtime manifest

### Exportable Memory
- All state as structured Markdown
- Version headers on all documents
- Constitutional rules immutable exports

## Entry Points
- **Main:** `app/page.tsx` (Home page)
- **API:** `app/api/` (Future API routes)
- **Components:** `components/` (UI library)
- **Data:** `data/*.json` (Content sources)

## Current Development State

### Ready for Next Steps
1. **Complete Plan Phase:** Populate `/plan/plan.md` with implementation details
2. **Task Breakdown:** Create `/tasks/tasks.md` for atomic work units
3. **TDD Setup:** Configure Jest + React Testing Library
4. **Quality Gates:** Achieve 90% test coverage

### Constitutional Violations Resolved
- TypeScript strict mode enabled
- ESLint configured with strict rules
- Project simplified to 4-page MVP
- Framework used directly (no unnecessary abstractions)

### Remaining Tasks for Full SDD Compliance
- Implement test-first development (Phase 4)
- Set up QA automation (Phase 5)
- Populate meta charter document
- Establish QA coverage reports

## Version & Branching Info
```
version: 2025.10.16
origin: doon
branch: cognitive-transplant
phase: Post-transplant structure established
```

This overview provides comprehensive understanding of the project state following the Specification-Driven Cognitive Architecture transplant.

# END OF EXPORTED KNOWLEDGE

No reasoning beyond this line.
