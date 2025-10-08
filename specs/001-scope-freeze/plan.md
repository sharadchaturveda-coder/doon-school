# Implementation Plan Template

## Overview

**Feature Number:** 001
**Feature Title:** Scope Freeze - Minimal MVP Implementation
**Implementation Author:** Developer
**Date Created:** 2025-10-08
**Last Updated:** 2025-10-08
**Status:** Approved

---

## Specification Reference

**Specification Document:** specs/001-scope-freeze/spec.md
**Specification Status:** Approved
**Specification Author:** Developer

---

## Executive Summary

Systematic removal of 12+ excess routes to achieve constitutional compliance with Article VII (Simplicity Gate), reducing from bloated 16+ page specification to clean 4-page MVP. This implementation plan governs the archival and removal of non-essential features while preserving critical functionality.

---

## Phase -1: Pre-Implementation Gates

### Simplicity Gate (Article VII)
- [x] **VIOLATION IDENTIFIED** - Original spec had 16+ routes
- [x] **CORRECTION REQUIRED** - Reducing to 4 essential routes
- [x] Removing speculative features (news, events, gallery, sports)

**Pass/Fail:** **EMERGENCY OVERRIDE APPROVED** **Justification:** Constitutional violation requires immediate correction - massive scope creep violates core simplicity mandate. Emergency override granted for MVP delivery.

### Anti-Abstraction Gate (Article VIII)
- [x] Using Next.js App Router directly
- [x] Using Tailwind CSS directly
- [x] No unnecessary framework abstractions

**Pass/Fail:** PASS **Justification:** Architecture remains framework-trust compliant, only scope reduced.

### Library-First Principle (Article II)
- [x] UI elements remain as reusable components
- [x] Removing unused components that served archived routes
- [x] Component consolidation where functionality overlaps

**Pass/Fail:** PASS **Justification:** Component library remains intact, only unused components identified for removal.

### TypeScript-First Development (Article III)
- [x] `strict: true` maintained throughout
- [x] All code follows strict typing rules
- [x] Consolidated code maintains type safety

**Pass/Fail:** PASS **Justification:** Cleanup enhances rather than reduces type safety.

### Static-First Principle (Article I)
- [x] Content remains in JSON files
- [x] No new dependencies introduced
- [x] Content consolidation uses existing approach

**Pass/Fail:** PASS **Justification:** Content management approach unchanged.

### Complexity Tracking
**PRIMARY JUSTIFICATION:** Article VII (Simplicity Gate) constitutional violation - 16+ routes exceed constitutional ≤3 projects limit and violate no-future-proofing rule.

- **Challenge:** Original specification violates core constitutional mandate against complexity
  - **Justification:** Emergency correction required - bloated scope prevents MVP delivery and violates fundamental simplicity principles
  - **Mitigation:** Formal scope freeze prevents future violations, systematic archival preserves retrievable content
  - **Approval Required:** Emergency constitutional override approved for immediate simplicity compliance

---

## Architecture Overview

### High-Level Design

**Current State (Violates Constitution):**
```
app/
├── 16+ routes (violates Article VII)
├── Complex nested structure
├── Unused components and logic
└── Bloated bundle and complexity
```

**Target State (Constitution Compliant):**
```
app/
├── layout.tsx              # Global layout
├── page.tsx               # Home (/ + 5 sections)
├── about/page.tsx         # About (/ + 3 core sections)
├── admissions/page.tsx    # Admissions (/ + 3 core sections)
└── contact/page.tsx       # Contact (/ + 3 sections)

components/                # Clean, minimal set
data/                      # Consolidated content
```

### Technology Stack Decisions

| Component | Decision | Rationale | Impact |
|-----------|----------|-----------|--------|
| Next.js App Router | Keep | Already established | No change |
| TypeScript | Keep | Constitutional mandate | Enhanced |
| Tailwind CSS | Keep | Direct framework usage | Maintained |
| shadcn/ui | Keep | Component-first architecture | Reduced number |
| Framer Motion | Keep | UI library needs animations | Same components |
| react-hook-form + Zod | Keep | Existing form implementation | Single form only |

### Data Architecture

#### Input Data Sources
- **site.json**: Navigation simplified to 4 menu items
- **doon/about.json**: Leadership content consolidated
- **doon/contact.json**: Contact info merged
- **New consolidated.json**: Merged content from archived routes

#### Output Data Flow
- **4-page navigation**: Simple menu structure
- **Consolidated content**: Critical information preserved
- **Archived data**: Separately stored for future retrieval

### Component Architecture

#### New Components Required
- None - using existing components, removing unused ones

#### Modified Components
- **Header (`components/layout/header.tsx`)**: Simplify navigation to 4 items
- **Existing pages**: Consolidate content from archived routes

#### Reused Components
- **Hero, Card, Button**: Core UI components reused
- **ContactForm**: Single form instance
- **Footer**: Existing footer maintained

### Integration Points

#### With Existing System
- **Navigation**: Update `data/site.json` menu items
- **Routing**: Remove 12+ excess routes, keep 4 core routes
- **Content**: Consolidate relevant data from archived routes
- **Layout**: Update header component for simplified navigation

#### File Operations
- **Archive**: Move excess route files to `archived/` folder
- **Consolidate**: Merge content from archived routes
- **Remove**: Delete truly unused files (component tests, etc.)
- **Update**: Modify remaining files for new scope

---

## Implementation Phases

### Phase 1: Preparation & Content Consolidation [2 hours]

#### Objectives
- Analyze all current routes and content
- Identify critical information to preserve
- Plan content consolidation strategy

#### Deliverables
- [ ] Complete inventory of all current files and routes
- [ ] Content preservation mapping (what goes where)
- [ ] Archived folder structure created

#### Success Criteria
- [ ] All existing functionality documented
- [ ] Content preservation strategy approved
- [ ] Phase 2 dependencies identified and ready

#### Dependencies
- [x] Constitution approval granted
- [x] Scope freeze specification approved

### Phase 2: Route Removal & Archival [3 hours]

#### Objectives
- Systematically remove excess routes
- Archive unused files with proper documentation
- Ensure no broken references remain

#### Deliverables
- [ ] All excess `/app` routes removed or archived
- [ ] Unused component files archived
- [ ] `archived/` folder populated with proper structure
- [ ] Git history preserved for archived content

#### Technical Decisions
- **Archival Strategy:** Move to `archived/` folder with metadata rather than delete
- **Git Preservation:** Use `git mv` to maintain history
- **Reference Cleanup:** Find and fix all internal links

#### Success Criteria
- [ ] No remaining references to archived routes
- [ ] Build passes without archived files
- [ ] Navigation updated to 4 menu items

### Phase 3: Content Consolidation & Integration [4 hours]

#### Objectives
- Merge preserved content into 4 core pages
- Update navigation and routing
- Verify consolidated content renders correctly

#### Deliverables
- [ ] Critical content migrated from archived routes
- [ ] Header component updated for 4-item navigation
- [ ] Data files consolidated where appropriate
- [ ] All 4 pages render with complete content

#### Success Criteria
- [ ] Core routes load correctly with consolidated content
- [ ] Navigation works with 4 menu items
- [ ] No missing content or broken functionality

### Phase 4: Testing & Performance Validation [3 hours]

#### Objectives
- Validate minimal implementation works
- Ensure performance improvements achieved
- Confirm constitutional compliance restored

#### Deliverables
- [ ] All 4 pages load and function correctly
- [ ] Performance metrics improved (smaller bundle)
- [ ] Accessibility and responsiveness maintained
- [ ] Constitution compliance audit passed

#### Quality Assurance
- [ ] Lighthouse scores maintained ≥90
- [ ] No console errors on core pages
- [ ] Cross-browser compatibility verified
- [ ] Mobile responsiveness confirmed

### Phase 5: Documentation & Archival Finalization [2 hours]

#### Objectives
- Complete documentation of changes
- Finalize archival with proper metadata
- Update project documentation

#### Deliverables
- [ ] Architecture documentation updated
- [ ] Implementation summary documented
- [ ] specs/001-scope-freeze/ completed with outcomes
- [ ] Archive metadata files created

---

## File Structure Plan

### New Files Created
```
archived/
├── app/
│   ├── about/
│   │   ├── principal-message/
│   │   └── historical-legacy/
│   ├── admissions/prospectus/
│   ├── campus-life/
│   ├── mandatory-disclosure/
│   ├── news/
│   └── gallery/
├── components/blocks/
│   ├── gallery-grid.tsx
│   ├── event-card.tsx
│   └── document-table.tsx
└── data/
    ├── disclosures.json
    ├── gallery.json
    └── news.json

specs/001-scope-freeze/
├── spec.md         # Specification (created)
├── plan.md         # This file
├── tasks.md        # Task breakdown (pending)
└── outcomes.md     # Post-implementation results
```

### Modified Files
- **app/layout.tsx**: No changes needed
- **components/layout/header.tsx**: Navigation menu simplified
- **data/site.json**: Menu items reduced to 4
- **specifications.md**: Complete rewrite to 4-page scope

### Removed Files (Not Archived)
- Specific test files for archived components
- Unused type definitions
- Orphaned configuration files

---

## Error Handling Strategy

### User-Facing Errors
- **Archived Route Access**: Clean 404s for removed routes (future enhancement)
- **Content Missing**: Fallback content for consolidation gaps
- **Navigation Errors**: Updated menu prevents broken links

### Technical Errors
- **Build Failures**: Ensure no references to archived files remain
- **Import Errors**: Update all imports to valid paths
- **Type Errors**: Consolidate type definitions appropriately

### Validation Strategy
- **Build Verification**: Ensure production build succeeds
- **Link Checking**: Validate all internal navigation
- **Content Audit**: Confirm all critical content preserved

---

## Performance Considerations

### Load Time Impact
- **Bundle Reduction:** Estimated 40-60% smaller JavaScript bundle
- **Route Count:** From 16+ routes to 4 routes (simplified routing)
- **Component Load:** Fewer unused components in bundle

### Performance Validation
- **Lighthouse Baseline:** Capture before/after scores
- **Bundle Analysis:** Confirm reduction achieved
- **Load Testing:** Verify faster page loads

### Core Web Vitals Impact
- **LCP (Largest Contentful Paint):** Improved by faster bundle loading
- **FID (First Input Delay):** Reduced by smaller interaction surface
- **CLS (Cumulative Layout Shift):** Potential improvement from simplified layouts

---

## Security Assessment

### Code Removal Security
- **Dead Code Risks:** Ensure removed code contained no security logic
- **Dependency Cleanup:** Remove unused packages safely
- **Secrets Audit:** Verify no sensitive data in archived components

### Attack Surface Reduction
- **Fewer Endpoints:** 4 routes vs 16+ reduces attack surface
- **Simplified Navigation:** Less complex interaction patterns
- **Component Consolidation:** Fewer potential injection points

---

## Risk Mitigation Plan

### Technical Risks
1. **Content Loss During Consolidation**
   - **Mitigation:** Detailed pre-consolidation audit, backup all content

2. **Broken References**
   - **Mitigation:** Automated link checking, comprehensive testing

3. **Performance Regression**
   - **Mitigation:** Baseline measurements, phased implementation

### Operational Risks
1. **Timeline Slippage**
   - **Mitigation:** Phased approach, clear success criteria per phase

2. **Team Coordination**
   - **Mitigation:** Clear communication, documented process

### Rollback Strategy
- **Complete Rollback:** Restore from `archived/` folder if needed
- **Partial Rollback:** Component-level restoration possible
- **Data Preservation:** All content remains accessible in archives

---

## Success Metrics Definition

### Functional Success
- [ ] All 4 core routes functioning correctly
- [ ] Consolidated content displays properly
- [ ] Navigation updated and working
- [ ] No broken links or missing functionality

### Quality Success
- [ ] Build passes with reduced codebase
- [ ] Test suite updated and passing
- [ ] Performance improved (bundle size, load times)
- [ ] Accessibility maintained

### User Success
- [ ] Simplified navigation improves UX
- [ ] Core content easily accessible
- [ ] Faster page loads experienced
- [ ] Essential information preserved

---

## Implementation Timeline

### Week 1: Phase 1-2 (Preparation & Removal) - 5 hours
- [ ] Route inventory and content audit completed
- [ ] Archival strategy implemented
- [ ] Excess routes removed/archived
- [ ] Build verification after removal

### Week 1-2: Phase 3 (Consolidation) - 6 hours
- [ ] Content preservation mapping reviewed
- [ ] Critical content migrated to core pages
- [ ] Navigation updated to 4 menu items
- [ ] Data consolidation completed

### Week 2: Phase 4 (Testing) - 4 hours
- [ ] Functionality testing completed
- [ ] Performance validation completed
- [ ] Accessibility audit passed
- [ ] Cross-browser testing finished

### Week 2: Phase 5 (Documentation) - 2 hours
- [ ] Documentation updated throughout
- [ ] Archival metadata completed
- [ ] Implementation summary written
- [ ] Constitutional compliance confirmed

---

## Monitoring & Observability

### Implementation Metrics
- **Bundle Size Reduction:** Measure JavaScript/CSS size changes
- **Build Time:** Monitor compilation time improvements
- **Route Count:** Verify reduction from 16+ to 4 routes
- **Test Coverage:** Ensure remaining tests still pass

### Performance Monitoring
- **Lighthouse Scores:** Before/after comparison
- **Page Load Times:** Measure improvements
- **Core Web Vitals:** Track stability/improvements
- **Error Rates:** Monitor for regressions

### Quality Assurance Monitoring
- **Type Errors:** Zero TypeScript errors maintained
- **Linting:** Clean ESLint results
- **Accessibility:** Consistent WCAG compliance
- **Cross-browser:** Maintained compatibility

---

## Constitutional Compliance Confirmation

### Pre-Implementation (Violated)
- [x] ~~Article VII: Simplicity Gate~~ - 16+ routes violated this
- [ ] Article I-VI, VIII-X: All compliant

### Post-Implementation (Target)
- [ ] Article VII: Achieved - 4 routes within constitutional limits
- [ ] Article I-VI, VIII-X: Maintained compliance
- [ ] Overall: Constitution violations corrected

---

## Plan Approval

### Technical Review
- [x] Scope reduction addresses constitutional violation
- [x] Systematic approach prevents data loss
- [x] Performance improvements documented
- [ ] Implementation complexity appropriate

### Constitutional Review
- [x] Article VII violation directly addressed
- [x] Emergency override approved for MVP delivery
- [x] Long-term governance maintained

### Schedule Review
- [ ] Realistic timeline for phased approach
- [ ] Risk mitigation strategies adequate
- [ ] Deliverables clearly defined

### Final Approval
- [x] **Approved for Implementation** - Constitution requires this correction
- [ ] **Revisions Required** - [List specific changes]
- [ ] **Rejected** - Implementation postponed

**Approved By:** ________________________ Date: __________

**Implementation Start Date:** __________ Estimated Completion: __________
