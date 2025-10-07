
# `prd.md`

```markdown
# PRD — Doon International School Website Rebuild (Minimal Scope, UX-First)

**Project**: Doon International School, Jabalpur — UI/UX & front-end rebuild  
**Owner / Stakeholder**: School Principal & Administration  
**Delivery lead**: (your name)  
**Engineers**: Frontend engineer (you), optional backend (for API/email), content editor (school staff)  
**Target launch**: 6 weeks (MVP) — see timeline below

---

## 1. Executive summary
The current website is functionally broken, slow, and visually inconsistent; it harms admissions and brand credibility. This project replaces the frontend with a modern, performant Next.js site that preserves the same content and menu taxonomy but reorganizes layout and visual hierarchy for clarity, accessibility, and performance. No new user-facing modules are added beyond the existing content set. The result should be fast, accessible, and easy for staff to update via Sanity.

---

## 2. Objectives & success criteria
**Primary objective:** Convert existing site content into a professional, trust-building website that increases enquiries and downloads (prospectus).

**Success criteria (measurable):**
- Lighthouse Performance ≥ 90 on homepage (Vercel simulated).
- Enquiry form functional and delivering leads to school (email or Sanity collection).
- Prospectus downloadable with correct headers and < 2s download on normal connection.
- Owner sign-off on visual design (home + one inner page).
- All pages contain meta tags and at least homepage has School JSON-LD.

---

## 3. Scope (what's in / what's out)
**In scope**
- Full rebuild of front-end for all existing pages listed in `specifications.md`.
- Content parity: same menu items and content sections (rewrite duplicates).
- Implement dropdown nav (desktop + mobile).
- Contact form, prospectus download proxy, document list, gallery lightbox.
- Sanity integration for content (initial import or local JSON fallback).
- Accessibility fixes for WCAG 2.1 AA critical issues.
- Basic SEO: meta tags, JSON-LD for School, sitemap.

**Out of scope**
- Parent portal, user auth, dynamic account areas.
- Payment or e-commerce.
- Custom ERP integrations (beyond email forwarding or simple webhook).
- Large new feature development (alumni, bookings).

---

## 4. Target audience & user needs
Primary: Prospective parents (age 30–50), looking for admissions info quickly.  
Secondary: Existing parents seeking notices and prospectus.  
User needs:
- Fast access to admissions & contact info.
- Clear presentation of facilities and credibility proof.
- Downloadable prospectus easily accessible.

---

## 5. UX principles & design direction
- **Clarity over cleverness.** One clear CTA per page.  
- **Hierarchy over density.** Break content into modular blocks.  
- **Trust-building details.** Real photography, proof points (affiliation), compressed prospectus.  
- **Accessibility-first.** Keyboard navigable, alt text, good contrast.  
- **No feature bloat.** Keep only what owner currently expects.

Design directions (pick one at start):
- Prestige & Tradition (deep navy + gold) — authoritative tone.
- Modern & Innovative (blue + warm accent) — tech-forward tone.
- Community & Nurturing (sage + warm neutrals) — friendly tone.

---

## 6. Milestones & timeline (6-week MVP)
**Week 0 (prep)**: Kickoff, pick design direction, gather content, get prospectus PDF.  
**Week 1**: Project boot + header/nav + home hero + quick info cards. (Preview)  
**Week 2**: About pages + principal message + mandatory disclosure page + DocumentTable.  
**Week 3**: Admissions + prospectus download + contact form + API route.  
**Week 4**: Gallery + events page + news listing (local JSON).  
**Week 5**: Accessibility fixes, SEO JSON-LD, Lighthouse polishing.  
**Week 6**: QA, content QA with school staff, final changes, production deploy.

Deliverable at end of Week 2: Home + header + one inner page for client approval.

---

## 7. Roles & responsibilities
- **Delivery lead** (you): Technical lead, design decision mediator, deploys previews.  
- **Content editor (school)**: Provide official copy, photos, and PDFs; validate mandatory disclosure docs.  
- **Reviewer (principal)**: Sign-off on visual direction and key content (hero messaging, prospectus).  
- **Optional**: Backend/email integrator for SMTP setup.

---

## 8. Risks & mitigation
**Risk:** Owner delays in providing official copy & prospectus.  
**Mitigation:** Use placeholder real-sounding content and present early mock for sign-off; lock quick-wins.

**Risk:** Hidden broken or missing content on WP requiring decisions.  
**Mitigation:** Create a content migration report and request owner decisions on ambiguous items within Week 1.

**Risk:** Sanity initial setup delays.  
**Mitigation:** Local JSON fallback — site reads local JSON until Sanity is ready.

---

## 9. KPIs post-launch (30/90 day)
- Prospectus downloads per month (baseline -> target +50%).  
- Enquiry form submissions per month (baseline -> target +30%).  
- Page speed metrics (median page load < 2.5s).  
- Owner satisfaction (survey) — target 90% satisfaction.

---

## 10. Acceptance & release criteria
**Beta release (staging):**
- All routes listed in `specifications.md` resolve.
- Contact form forwards leads (or logs them).
- Basic SEO & School JSON-LD present on homepage.

**Production release:**
- Owner approves visuals & copy.
- Lighthouse targets met for home page and one inner page.
- All accessibility critical errors resolved.
- Backups: Old site exported and stored before DNS swap.

Rollback plan:
- Maintain old WP site unchanged until DNS swap.
- If production failure, rollback by restoring DNS to old host (document TTL & steps in release notes).

---

## 11. Communication & sign-off
- Weekly update email to stakeholder (fixed template: progress, blockers, next week).
- Demo meeting at end of Week 2 and Week 5 (screenshare).
- Final sign-off checklist to be completed by principal: visual approval + content approval.

---

## 12. Pricing & resources (high level)
Estimate (example):  
- Design + Frontend MVP (6 weeks, 1 FE): 120 hours  
- Sanity/CMS setup + migration: 12 hours  
- QA and polish: 16 hours  
Total dev hours: ~150 hours (adjust per hourly rate)

---

## 13. Launch checklist (pre-prod)
- [ ] Final content in Sanity for all pages.
- [ ] Prospectus PDF audited, compressed, served via proxy.
- [ ] Contact form email webhook/Sanity leads verified.
- [ ] Lighthouse report attached (home ≥ 90).
- [ ] DNS TTL scheduled and backup of old site confirmed.
- [ ] Owner approval recorded in email.

---

## 14. Vendor & tool notes
- **Design files**: use Figma for mock; export tokens to `design/tokens.json`.  
- **Code review**: PR required for each feature, must reference `specifications.md` task id.  
- **Testing**: React Testing Library for header & contact form; Axe for a11y tests.

---

## 15. Post-launch (30/90 day) quick wins
- Add Google Business verification & local content updates.
- Enable basic analytics (Plausible or Vercel Analytics).
- Start a small editorial calendar for "News & Announcements" (owner must commit to 2 posts/month).

---

## 16. Appendix — Owner pitch bullets (one-liner)
- Faster site = more parent trust = more enquiries.  
- Downloadable prospectus fixed and tracked.  
- Same content, modern layout, accessible, and easy for staff to update.

---
End of PRD
