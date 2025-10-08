# Project Architecture

## Overview

**SCOPE FROZEN ARCHITECTURE** - Constitutional Article VII Compliance (Simplicity Gate)

The Doon International School website follows a simplified static-first architecture using Next.js 14 with the App Router. This 4-page MVP reduces complexity from 16+ routes to essential core functionality in compliance with constitutional Article VII (Simplicity Gate).

## Technology Stack

### Core Framework
- **Next.js 14 (App Router)**: Provides file-based routing, server-side rendering, and optimized performance
- **TypeScript**: Ensures type safety and better developer experience
- **React 18**: Modern React with concurrent features and hooks

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **shadcn/ui**: High-quality, accessible component library built on Radix UI
- **Framer Motion**: Animation library for smooth micro-interactions and page transitions

### Forms & Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: TypeScript-first schema validation

### Development Tools
- **ESLint**: Code linting with Next.js configuration
- **TypeScript**: Strict type checking
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Project Structure (Scope Frozen)

```
doon-school/                     # SCOPE FROZEN: 4-page MVP only
├── app/                         # Next.js App Router Pages (4 routes only)
│   ├── layout.tsx              # Root layout (header + footer)
│   ├── page.tsx                # Home page (/)
│   ├── about/page.tsx          # About Us page (/about)
│   ├── admissions/page.tsx     # Admissions page (/admissions)
│   └── contact/page.tsx        # Contact page (/contact)
├── components/                  # Simplified component library
│   ├── layout/
│   │   ├── header.tsx          # Flat navigation (3 items)
│   │   └── footer.tsx          # Site footer
│   ├── ui/                     # Base UI components (unchanged)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── hero.tsx
│   │   └── [other atoms...]
│   └── blocks/                 # 1 remaining block component
│       └── contact-form.tsx    # Contact form only
├── data/                       # Streamlined content (consolidated)
│   ├── site.json               # Navigation + site config (simplified)
│   └── doon/                   # Consolidated school content
│       ├── about.json          # Merged academic/campus content
│       ├── contact.json        # Contact + transport info
│       └── mand...json         # Archived but retained for reference
├── design/                     # Design system (unchanged)
├── lib/                        # Utilities
├── public/                     # Static assets
├── styles/                     # Global styles
└── docs/                       # Updated documentation

# Archived Structure (Pre-Scope Freeze):
# - 12+ route directories removed
# - 3 unused block components archived
# - Complex navigation code simplified
# - Data files consolidated to support 4 pages
```

## Data Architecture

### Content Management Strategy

The project uses a **static-first** approach where all content is stored in JSON files rather than a traditional CMS. This provides benefits including:

- **Fast performance**: No database queries or API calls
- **Version control**: Content changes tracked in git
- **Simple deployment**: No additional infrastructure
- **Type safety**: JSON schemas with TypeScript interfaces

### Data Sources

| File | Purpose | Structure |
|------|---------|-----------|
| `site.json` | Site configuration, navigation, contact info | `{navigation: [], contact: {}, socialMedia: []}` |
| `doon/about.json` | Consolidated school content (academics + campus) | `{sections: [{heading, content}]}` |
| `doon/contact.json` | Contact info + transport information | `{contactInfo: {}, transport: {}}` |

**Archived Data Files** (moved to `/archived-data/`):
- `events.json` (was for `/campus-life/events`)
- `news.json` (was for `/news` routes)
- `gallery.json` (was for `/campus-life/gallery`)
- `disclosures.json` (was for `/mandatory-disclosure`)

### Data Flow

```
JSON Files → Page Components → Rendered HTML
     ↑              ↑              ↑
   Static     TypeScript      Browser
  Content     Processing    Rendering
```

## Component Architecture

### Design Patterns

The project follows modern React patterns:

- **Composition over inheritance**: Components are composed together
- **Separation of concerns**: UI, logic, and data clearly separated
- **Reusability**: Components designed to be reusable across pages
- **Accessibility**: Built-in ARIA support and keyboard navigation

### Component Categories

#### Layout Components
- **Purpose**: Structural elements like headers and footers
- **Location**: `components/layout/`
- **Example**: `Header`, `Footer` - used in root layout

#### UI Components (Atoms)
- **Purpose**: Basic reusable UI elements
- **Location**: `components/ui/`
- **Example**: `Button`, `Card`, `Hero` - shadcn/ui based

#### Block Components (Molecules)
- **Purpose**: Page-specific composite components
- **Location**: `components/blocks/`
- **Example**: `ContactForm` (only remaining block component)

**Archived Block Components** (removed in scope freeze):
- `DocumentTable` (was for `/mandatory-disclosure`)
- `GalleryGrid` (was for `/campus-life/gallery`)
- `EventCard` (was for `/campus-life/events`)

### Component Props Pattern

All components follow TypeScript interfaces:

```typescript
interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, children }) => {
  // Component implementation
};
```

## Routing Architecture

### App Router Structure

Next.js 14 App Router uses folder-based routing:

```
app/
├── layout.tsx          # Root layout (applied to all routes)
├── page.tsx           # / (home page)
├── about/
│   ├── page.tsx       # /about
│   └── principal-message/
│       └── page.tsx   # /about/principal-message
└── dynamic/
    └── [slug]/
        └── page.tsx   # /dynamic/:slug
```

### Route Types

- **Static Routes**: Fixed URLs like `/about`, `/contact`
- **Dynamic Routes**: Parameterized URLs like `/news/[id]`
- **Nested Routes**: Hierarchical routes like `/about/principal-message`

## Performance Considerations

### Optimization Strategies

- **Static Generation**: Pages pre-built at build time
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: HTTP caching headers for static assets

### Performance Targets

- **Bundle Size**: < 120KB gzipped
- **Lighthouse Score**: ≥ 90 performance
- **First Contentful Paint**: < 1.5 seconds
- **Time to Interactive**: < 3 seconds

## Build and Deployment

### Build Process

```bash
npm run build  # Type checking + build
npm run start  # Production server
npm run lint   # Code quality checks
```

### Environment Variables

- **Development**: Local `.env.local`
- **Production**: Vercel environment variables
- **Build-time**: Static site generation

## Future Architecture

### CMS Integration

The static-first approach is designed for easy CMS integration:

```typescript
// Current: Static import
import eventsData from '../data/events.json';

// Future: Dynamic API call
const eventsData = await sanityClient.fetch('*[_type == "event"]');
```

### Microservice Ready

Architecture supports splitting into microservices:
- **Content Service**: Handles dynamic content
- **Email Service**: Processes form submissions
- **Analytics Service**: Tracks user interactions
