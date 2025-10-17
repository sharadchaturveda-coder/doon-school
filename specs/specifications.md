---
version: 2025.10.16
origin: doon
branch: cognitive-transplant

# Doon International School MVP Specifications

## Overview
This specification defines the complete specification-driven development framework for the Doon International School website MVP, consisting of 4 core pages: Home, About, Admissions, and Contact.

## Core Pages

### 1. Home (/)
**Hero Section:**
- Main Headline: "A LEGACY OF EXCELLENCE"
- Sub-headline: "NURTURING YOUNG MINDS FOR A BRIGHTER FUTURE"
- Welcome Message (intro about school's philosophy)
- Core Pillars (Holistic Development, Experienced Faculty, Infrastructure)
- Mission & Vision preview
- Principal's Message preview

### 2. About (/about)
- Page Header: "ABOUT US"
- Institutional Identity (Our Story, Vision, Mission)
- Leadership Message (Principal's message - Mr. Manjeet Singh)
- Full welcome message (personal, partnership-focused tone)

### 3. Admissions (/admissions)
- Page Header: "ADMISSIONS"
- Admission Procedure (ordered steps)
- Eligibility Criteria (3+ for Nursery as of April 1)
- Downloads (Brochure CTA: "Download Brochure")

### 4. Contact (/contact)
- Page Header: "CONTACT US"
- Inquiry Form (Name, Email, Phone, Message fields)
- Contact Details (address, phone, email)
- Map Location (embedded)

## Global Elements
- Header with navigation links: Home, About Us, Admissions, Contact Us
- Footer with contact info, social links, copyright

## User Stories

### As a prospective parent
I want to understand the school's philosophy and values
So that I can determine if it's the right fit for my child

Acceptance Criteria:
- [ ] Mission, vision, and values prominently displayed
- [ ] Principal's message accessible on About page
- [ ] Philosophy communicated through hero section

### As a prospective parent
I want to learn about the admission process
So that I can prepare the necessary documentation

Acceptance Criteria:
- [ ] Step-by-step admission procedure clearly listed
- [ ] Eligibility criteria prominently displayed
- [ ] Downloadable brochure available

### As a prospective parent
I want to contact the school easily
So that I can get answers to my questions

Acceptance Criteria:
- [ ] Contact form with all fields validated
- [ ] Contact information clearly displayed
- [ ] Map location embedded

## Technical Requirements
- Stack: Next.js 14, TypeScript, Tailwind CSS
- Content: Static JSON data
- Performance: Lighthouse ≥ 90, load < 3s
- Accessibility: WCAG 2.1 AA compliance

## Constitution Compliance
- **Article I:** All content in JSON files
- **Article II:** All UI as reusable components
- **Article III:** TypeScript strict mode
- **Article IV:** Test-first development (planned)
- **Article VII:** Simplicity gate - 4 pages only
- **Article VIII:** Direct framework usage
- **Article IX:** Integration testing priority
- **Article X:** Documentation-first approach

# END OF EXPORTED KNOWLEDGE

No reasoning beyond this line.
