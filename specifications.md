# Specifications — Doon International School (Static-First Build)

**Goal:** Rebuild the entire Doon International School Jabalpur website from the ground up as a static-first project.  
All content is local and hardcoded or sourced from `/data/` JSON files.  
No external APIs, CMS, or backend integrations are to be used until the visual design and content are finalized.

---

## 1. Stack & Dependencies

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (locally installed)
- **Animation:** Framer Motion
- **Form handling:** react-hook-form + Zod (client-side only)
- **Deployment:** Vercel (optional at end) - i will do it myself



---

## 2. Folder Architecture

/doon-school/
├── app/
│ ├── layout.tsx
│ ├── globals.css
│ ├── page.tsx # Home
│ ├── about/
│ │ ├── page.tsx
│ │ ├── principal-message/page.tsx
│ │ └── historical-legacy/page.tsx
│ ├── admissions/
│ │ ├── page.tsx
│ │ └── prospectus/page.tsx
│ ├── campus-life/
│ │ ├── facilities/page.tsx
│ │ ├── gallery/page.tsx
│ │ └── events/page.tsx
│ ├── mandatory-disclosure/page.tsx
│ ├── contact/page.tsx
│ └── news/
│ ├── page.tsx
│ └── [slug]/page.tsx
├── components/
│ ├── layout/
│ │ ├── header.tsx
│ │ └── footer.tsx
│ ├── ui/
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ ├── hero.tsx
│ │ ├── navigation-menu.tsx
│ │ └── form.tsx
│ └── blocks/
│ ├── document-table.tsx
│ ├── gallery-grid.tsx
│ ├── contact-form.tsx
│ └── event-card.tsx
├── data/
│ ├── events.json
│ ├── news.json
│ ├── disclosures.json
│ ├── gallery.json
│ └── site.json
├── design/
│ ├── tokens.json
│ └── tailwind.config.ts
├── public/
│ ├── images/
│ └── favicon.ico
├── styles/
│ └── tailwind.css
├── tests/
│ └── accessibility.test.ts
├── specifications.md
├── prd.md
└── README.md


---

## 3. Modern Design System

### Visual Design Goals:
- **Sleek & Modern**: Contemporary design with subtle gradients, glassmorphism effects
- **Beautiful Colors**: Rich, sophisticated color palette with depth
- **Smooth Animations**: Fluid micro-interactions and page transitions
- **Mobile-First**: Pixel-perfect responsive design
- **Premium Feel**: High-end aesthetic rivaling top educational institutions

### Enhanced Design Tokens:
```json
{
  "colors": {
    "primary": {
      "50": "#eff6ff",
      "500": "#3b82f6",
      "600": "#2563eb",
      "700": "#1d4ed8",
      "900": "#1e3a8a"
    },
    "secondary": {
      "50": "#fefce8",
      "400": "#facc15",
      "500": "#eab308",
      "600": "#ca8a04"
    },
    "accent": {
      "purple": "#8b5cf6",
      "pink": "#ec4899",
      "emerald": "#10b981",
      "orange": "#f97316"
    },
    "background": {
      "primary": "#ffffff",
      "secondary": "#f8fafc",
      "dark": "#0f172a"
    },
    "glassmorphism": "rgba(255, 255, 255, 0.1)"
  },
  "gradients": {
    "primary": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "secondary": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "hero": "linear-gradient(135deg, #4f46e5 0%, #06b6d4 50%, #10b981 100%)",
    "card": "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
  },
  "effects": {
    "glassmorphism": {
      "background": "rgba(255, 255, 255, 0.15)",
      "backdropFilter": "blur(10px)",
      "border": "1px solid rgba(255, 255, 255, 0.2)"
    },
    "shadows": {
      "soft": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      "medium": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      "large": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      "glow": "0 0 20px rgba(59, 130, 246, 0.3)"
    }
  },
  "typography": {
    "fontFamily": {
      "primary": "Inter",
      "heading": "Poppins",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem"
    }
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "3rem",
    "2xl": "6rem"
  },
  "borderRadius": {
    "sm": "0.375rem",
    "md": "0.5rem",
    "lg": "0.75rem",
    "xl": "1rem",
    "2xl": "1.5rem"
  }
}
```

4. Routes & Pages

Each route below corresponds to a page.tsx file.
All pages use static imports from /data/ for their text and images.
Route	Description
/	Home — Hero, 3 feature cards, news teasers
/about	Overview of the school
/about/principal-message	Principal’s message
/about/historical-legacy	Founding history
/admissions	Admission procedure, requirements
/admissions/prospectus	Prospectus download link
/campus-life/facilities	List of facilities
/campus-life/gallery	Gallery grid with modal
/campus-life/events	Event list
/mandatory-disclosure	Document table
/news	Static list of news items
/news/[slug]	Static single post template
/contact	Contact info + static form
5. Components

Header

    Desktop: shadcn NavigationMenu

    Mobile: Sheet menu

    Props: navItems: {title, href, children?}

    Accessibility: Keyboard nav, aria labels

Hero

    Props: title, subtitle, primaryCta, secondaryCta

    Animation: fade + slide-up

Card

    Used for facilities, news, and highlights.

    whileHover={{ scale: 1.03 }}

DocumentTable

    Columns: Title, File Type, Size, Link

GalleryGrid

    Opens modal dialog on click (keyboard navigable)

ContactForm

    Uses react-hook-form + Zod for validation.

    No submission handler (dummy console.log only).

6. Accessibility & SEO

    Alt text on all images.

    Keyboard navigable menu and modals.

    <main>, <header>, <footer> landmarks used.

    Semantic headings (h1–h3 hierarchy).

    Page titles set with <title> in each page.

7. Enhanced Animations & Interactions

### Core Animations:
- **Page Transitions**: Smooth fade-in with stagger effects
- **Hero Section**: Gradient animation, floating elements, parallax scrolling
- **Cards**: 3D hover effects with shadow depth
- **Buttons**: Ripple effects, gradient shifts on hover
- **Navigation**: Smooth slide-in dropdowns with spring animations
- **Scroll Animations**: Progressive reveal as elements enter viewport
- **Loading States**: Skeleton screens, smooth transitions

### Micro-interactions:
- **Hover States**: Scale transforms (1.02-1.05x), shadow depth changes
- **Click Feedback**: Button press animations, success/error states
- **Form Interactions**: Focus rings, validation animations
- **Image Loading**: Blur-to-clear progressive enhancement

### Performance Requirements:
- 60fps animations using transform and opacity
- Hardware acceleration with will-change and translate3d
- Respect prefers-reduced-motion
- Stagger animations to avoid overwhelming users

8. Performance Targets

    Lighthouse: Performance ≥ 90, Accessibility ≥ 95.

    Bundle < 120KB gzipped.

    All images in WebP or AVIF format.

    Lazy-load gallery images.

9. Acceptance Criteria

    All listed routes build and render locally.

    Header and dropdowns functional on desktop and mobile.

    Forms validate client-side.

    No 404 routes.

    No console errors.

    Mobile-first responsive design confirmed at 375px, 768px, 1024px, 1440px.

    Accessibility audit passes (axe-core).

10. Static-First Development Policy

    All development in this phase must rely exclusively on static content.
    No network requests, CMS connections, or dynamic data sources are allowed until the static site is complete and approved.

End of specifications.md