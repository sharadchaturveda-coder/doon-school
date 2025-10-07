
---

## 🧭 `prd.md`

# Product Requirements Document — Doon International School (Static-First Build)

---

## 1. Summary
This project rebuilds the **Doon International School Jabalpur** website from scratch.  
The old site’s design is discarded. The new version is a modern, responsive, static-first site using Next.js, Tailwind, and shadcn/ui.  
All content is locally stored. No CMS or APIs are connected in this phase.

---

## 2. Objectives

- Create a visually modern, responsive, accessible school website.  
- Maintain same logical sections (About, Admissions, Facilities, Gallery, etc.) but with redesigned layouts.  
- Replace placeholder content with polished text and compressed images.  
- Keep dropdown-based navigation for familiarity.  
- Deliver a fast, static build ready for later CMS hookup.

**Success metrics**
- Lighthouse ≥ 90 in performance, ≥ 95 accessibility.  
- Fully navigable on mobile and desktop.  
- Owner approval on design and usability.

---

## 3. Scope

### In Scope
- All static pages listed in specifications.  
- Header with dropdowns, mobile navigation.  
- Static contact form with validation.  
- Static document and gallery pages.  
- Accessibility & SEO fundamentals.  

### Out of Scope
- CMS or Sanity integration.  
- APIs, dynamic fetching, or databases.  
- Authentication or portals.

---

## 4. Target Audience
Parents and students visiting the school site to view admissions, facilities, gallery, and contact details.  
They value clarity, speed, and trustworthiness over novelty.

---

## 5. Design Direction

Visual tone: **modern, minimal, academic.**

- Palette: navy blue (`#1f4f8b`) and gold accent (`#f2b33d`).  
- Typeface: Inter + Lora.  
- Layout: wide grid, strong whitespace.  
- Components: soft radius, subtle shadows.  
- Animations: light fade/slide, nothing flashy.  

---

## 6. Deliverables

1. Complete static Next.js project per `specifications.md`.  
2. Local `/data/` JSONs with hardcoded content.  
3. Working responsive header/footer, dropdowns, and hero.  
4. Accessible navigation and forms.  
5. Optimized images and typography.  
6. Deployment-ready build folder (for Vercel).

---

## 7. Timeline (Estimated 4–5 Weeks)

| Week | Milestone |
|------|------------|
| 1 | Setup, header, navigation, global layout |
| 2 | Home page + About + Admissions pages |
| 3 | Facilities, Gallery, Events |
| 4 | Mandatory Disclosure, Contact, News pages |
| 5 | Polish, accessibility tests, deploy preview |

---

## 8. Acceptance Criteria

- All routes match `specifications.md`.  
- Pages responsive and consistent with design tokens.  
- Header dropdowns and animations work correctly.  
- Lighthouse ≥ 90 Performance, ≥ 95 Accessibility.  
- No console or hydration errors.  
- No use of `fetch`, external requests, or env vars.

---

## 9. Risks & Mitigations

| Risk | Mitigation |
|------|-------------|
| Missing final content | Use realistic placeholders; replace later |
| Layout complexity | Start mobile-first; expand upward |
| Overdesign | Stick to shadcn/ui primitives and Tailwind spacing |
| Feature creep | Follow specs strictly; add nothing outside scope |

---

## 10. After Phase Notes

When the static site is signed off:  
- Prepare for CMS or data integration (Phase 2).  
- Add API endpoints only after layout freeze.  

---

## 11. Post-Launch KPIs

- Faster load time vs. previous site.  
- Increased prospectus downloads (tracked later).  
- Reduced bounce rate (tracked later).  

---

## 12. Sign-Off

✅ Static-first build complete when:
- All pages load locally without errors.  
- Accessibility and visual QA passed.  
- Stakeholder approves design & usability.  

---

End of `prd.md`
