

# Specifications — Doon International School (Minimal MVP - Scope Frozen)

**Status:** SCOPE FROZEN UNDER SDD ARTICLE VII (Simplicity Gate)
**Specification:** specs/001-scope-freeze/spec.md
**Effective Date:** 2025-10-08
**Rationale:** Constitutional compliance - reducing from 16+ routes to essential 4-page MVP

---

## Overview

This specification defines the **minimal viable product** for Doon International School website, consisting of only **4 core pages**. All excess features and routes have been archived/deferred under SDD governance to ensure simplicity and focus.

**Constitutional Basis:** This scope freeze directly addresses Article VII (Simplicity Gate) violation in the original bloated specification.

---

## 1. Core Pages (Final MVP)

### 1.1. Home (`/`)
**Hero Section:**
- Main Headline: "A LEGACY OF EXCELLENCE"
- Sub-headline: "NURTURING YOUNG MINDS FOR A BRIGHTER FUTURE"
- Welcome Message (intro about school's philosophy)
- Core Pillars (Holistic Development, Experienced Faculty, Infrastructure)
- Mission & Vision preview
- Principal's Message preview

### 1.2. About Us (`/about`)
- Page Header: "ABOUT US"
- Institutional Identity (Our Story, Vision, Mission)
- Leadership Message (Principal's message - Mr. Manjeet Singh)
- Full welcome message (personal, partnership-focused tone)

### 1.3. Admissions (`/admissions`)
- Page Header: "ADMISSIONS"
- Admission Procedure (ordered steps)
- Eligibility Criteria (3+ for Nursery as of April 1)
- Downloads (Brochure CTA: "Download Brochure")

### 1.4. Contact Us (`/contact`)
- Page Header: "CONTACT US"
- Inquiry Form (Name, Email, Phone, Message fields)
- Contact Details (address, phone, email)
- Map Location (embedded with integration enabled)

---

## 2. Global Elements (Shared Across All Pages)

### Header
- School name: "DOON INTERNATIONAL SCHOOL MOHALI"
- Navigation links: Home, About Us, Admissions, Contact Us

### Footer
- Contact info (address, phone, email)
- Social links (Facebook, Twitter)
- Copyright notice
- "Proudly created with Wix.com"

---

## 3. Technical Architecture

### Stack (Unchanged)
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animation:** Framer Motion
- **Forms:** react-hook-form + Zod
- **Deployment:** Vercel

### Folder Structure (Minimal)
```
app/
├── layout.tsx                    # Global layout
├── page.tsx                      # Home page
├── about/page.tsx                # About Us page
├── admissions/page.tsx           # Admissions page
└── contact/page.tsx              # Contact page

components/                       # Existing UI components
data/                             # Consolidated content
```

---

## 4. Content Management

### Static-Data Approach
- All content sourced from `/data/` JSON files
- No external CMS or APIs
- Content updates require JSON file edits

### Content Consolidation Required
- Merge relevant content from archived routes into 4 core pages
- Preserve critical information (mission, leadership, admissions)
- Archive non-essential content for future reference

---

## 5. Performance & Quality Targets

### Performance (Maintained)
- Lighthouse Performance ≥ 90
- Page load < 3 seconds
- Bundle < 120KB gzipped

### Accessibility (Maintained)
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support

### Compatibility (Maintained)
- Mobile-first responsive design
- Cross-browser support (Chrome, Firefox, Safari, Edge)

---

## 6. Scope Boundaries

### ✅ In Scope
- All sections defined in the 4 core pages above
- Existing component library and design system
- Static content management
- Form validation and submission
- Download functionality

### ❌ Out of Scope (Archived/Deferred)
- Campus Life (facilities, gallery, events)
- News system and dynamic content
- Mandatory disclosure document table
- Historical legacy separate page
- Prospectus separate page
- Sports, clubs, publications
- Any speculative features

---

## 7. Implementation Requirements

### Routes to Maintain
```
/                    → Home page with sections
/about               → About Us with leadership
/admissions          → Admission process and downloads
/contact             → Contact form and details
```

### Routes to Remove (Archived)
```
/about/principal-message      → Merged into /about
/about/historical-legacy      → Merged into /about
/admissions/prospectus        → Merged into /admissions
/campus-life/*               → All routes removed
/mandatory-disclosure        → Removed
/news/*                      → All routes removed
/gallery/*                   → All routes removed
```

### Navigation Update
- **Before:** 16+ menu items with dropdowns
- **After:** 4 top-level menu items only
- **Impact:** Simplified user experience, faster loading

---

## 8. Testing & Validation

### Acceptance Criteria
- [ ] All 4 pages load and function correctly
- [ ] No broken links or missing content
- [ ] Navigation shows only 4 menu items
- [ ] All essential information accessible
- [ ] Performance benchmarks maintained

### Regression Testing
- [ ] Existing functionality preserved
- [ ] Component compatibility verified
- [ ] Form submissions working
- [ ] Download links functional

---

## 9. Future Expansion Policy

### Constitutional Amendment Required
Any addition beyond these 4 pages requires:
1. **Constitutional amendment** to Article VII (Simplicity Gate)
2. **New SDD specification** following templates
3. **Implementation plan** with constitutional compliance
4. **Business justification** for scope expansion

### Deferred Features Storage
Archived content and specifications stored in:
```
archived/
├── campus-life/           # Campus facilities, events, gallery
├── news-system/          # News listings and articles
├── publications/         # Books, magazines, research
├── sports-clubs/         # Athletics and extracurriculars
└── legacy-features/      # Other removed functionality
```

---

## 10. Constitutional Compliance

**Article VII Compliance:** This specification directly addresses the constitutional violation of defining 16+ routes when constitution limits to ≤3 projects and prohibits future-proofing.

**Emergency Override:** Approved for MVP delivery while maintaining long-term architectural integrity.

**Governance:** All future scope changes must pass constitutional review before implementation.

---

## Scope Freeze Sign-off

**Date:** 2025-10-08
**Rationale:** Constitutional imperative (Article VII) - excessive complexity violates simplicity mandate
**Impact:** Reduced scope from 16+ routes to 4 essential pages
**Approval:** Emergency constitutional override granted for MVP delivery
**Review Date:** Next constitutional audit (quarterly)

**Constitutional Authority:** Article VII (Simplicity Gate) - Complexity violation correction

---

## Specification History

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 (Original) | 2025-XX-XX | Original | 16+ pages bloated specification |
| 2.0 (Frozen) | 2025-10-08 | Developer | Constitutional scope freeze to 4 pages |
| **Article VII Compliance:** Scope reduction mandated by constitution | | | |

---

**Status:** ✅ **SCOPE FROZEN** - This specification supersedes all previous versions and defines the official MVP scope under SDD governance.

End of specifications.md
