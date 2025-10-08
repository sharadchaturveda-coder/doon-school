# Routing & Navigation Documentation

## Overview

**SCOPE FROZEN** - Constitutional Article VII Compliance (Simplicity Gate)

The Doon International School website now operates under a frozen scope consisting of only 4 core pages: Home, About Us, Admissions, and Contact Us. This simplified architecture eliminates 12+ routes in compliance with constitutional Article VII (Simplicity Gate).

The website uses Next.js 14 App Router for file-based routing. Navigation is now flat with 3 top-level menu items, eliminating complex dropdown structures.

## App Router Structure

### Folder-Based Routing

Next.js App Router uses the file system as the basis for routing:

```
app/                                # SCOPE FROZEN: Only 4 core routes maintained
├── layout.tsx                    # Root layout (/ and all routes)
├── page.tsx                      # Home page (/)
├── about/page.tsx                # About Us page (/about)
├── admissions/page.tsx           # Admissions page (/admissions)
└── contact/page.tsx              # Contact page (/contact)

# Archived Routes (Removed in Scope Freeze):
# - /about/principal-message, /about/historical-legacy
# - /admissions/prospectus
# - /campus-life/* (facilities, gallery, events)
# - /mandatory-disclosure
# - /news/* (news listing and articles)
# Content consolidated into 4 core pages per Article VII compliance
```

## Route Types

### Static Routes

Fixed URL routes that correspond directly to pages:

```typescript
// app/about/page.tsx → /about
export default function AboutPage() {
  return <AboutContent />;
}

// app/contact/page.tsx → /contact
export default function ContactPage() {
  return <ContactForm />;
}
```

### Nested Routes

Routes with hierarchical organization:

```typescript
// app/about/principal-message/page.tsx → /about/principal-message
export default function PrincipalMessage() {
  return <MessageContent />;
}
```

### Dynamic Routes

Parameterized routes using square brackets:

```typescript
// app/news/[id]/page.tsx → /news/article-1, /news/event-announcement
export default function NewsArticle({ params }: { params: { id: string } }) {
  const article = getNewsArticle(params.id);
  return <ArticleContent article={article} />;
}
```

## Layout System

### Root Layout

**Location**: `app/layout.tsx`
**Purpose**: Provides consistent structure for all pages
**Components**: Header, Footer, global styles

```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

### Section Layouts

Optional layouts for route segments:

```typescript
// app/about/layout.tsx (example)
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="about-section">
      <AboutNavigation />
      {children}
    </div>
  );
}
```

## Navigation Architecture

### Site Navigation Structure

**SCOPE FROZEN NAVIGATION** - Constitutional compliance eliminates dropdowns

**Data Source**: `data/site.json`
**Location**: Navigation configuration

```json
{
  "navigation": [
    { "name": "About", "href": "/about" },
    { "name": "Admissions", "href": "/admissions" },
    { "name": "Contact", "href": "/contact" }
  ],
  "siteName": "Doon International School, Jabalpur"
}
```

**Before Scope Freeze**: 16+ navigation items with complex dropdown hierarchies
**After Scope Freeze**: 3 flat navigation items only (About, Admissions, Contact)

**Home page** (/): Not in navigation menu but accessible via logo link

### Header Component

**SCOPE FROZEN NAVIGATION** - No dropdowns, simplified to 3 flat menu items

**Location**: `components/layout/header.tsx`
**Purpose**: Minimal responsive navigation for 4-page MVP

#### Desktop Navigation
- Horizontal flat menu (3 items only)
- Simple hover states and transitions
- Keyboard navigation support
- ARIA labels for accessibility

#### Mobile Navigation
- Sheet overlay (shadcn/ui Sheet)
- Simple list of 3 navigation links
- Touch-friendly interactions
- Close on navigation

**Note**: Complex dropdown logic removed in scope freeze - component simplified to basic flat navigation

### Navigation Patterns

#### Dropdown Implementation

```typescript
// Header Dropdown Logic
const [openDropdown, setOpenDropdown] = useState<string | null>(null);

// Desktop hover effects
<Link
  onMouseEnter={() => setOpenDropdown(item.name)}
  onMouseLeave={() => setOpenDropdown(null)}
>
  {item.name}
</Link>

// Dropdown container with smooth transitions
<div className={`absolute top-full left-0 mt-1 transition-all duration-200 ${
  openDropdown === item.name
    ? 'opacity-100 visible'
    : 'opacity-0 invisible'
}`}>
  {/* Dropdown items */}
</div>
```

#### Mobile Menu Implementation

```typescript
// Mobile sheet toggle
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// Sheet component usage
<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
  <SheetTrigger className="md:hidden">
    <Menu className="h-6 w-6" />
  </SheetTrigger>
  <SheetContent>
    <div className="flex flex-col space-y-4 mt-4">
      {/* Mobile navigation items */}
    </div>
  </SheetContent>
</Sheet>
```

## Route Configuration

### Metadata Configuration

Each page supports Next.js metadata API:

```typescript
// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Doon International School',
  description: 'Learn about our mission, vision, and heritage.',
  keywords: ['school', 'education', 'about', 'mission'],
  openGraph: {
    title: 'About Us | Doon International School',
    description: 'Learn about our mission, vision, and heritage.',
    url: '/about',
  },
};
```

### Loading States

```typescript
// app/news/loading.tsx
export default function Loading() {
  return <NewsSkeleton />;
}

// app/news/[id]/loading.tsx
export default function Loading() {
  return <ArticleSkeleton />;
}
```

### Error Handling

```typescript
// app/news/[id]/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="error-container">
      <h2>Article Not Found</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
```

## Navigation Components

### Link Component Usage

Next.js optimized Link component:

```typescript
import Link from 'next/link';

// Basic internal link
<Link href="/about">About Us</Link>

// Dynamic route link
<Link href={`/news/${article.id}`}>Read More</Link>

// External link
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>
```

### Breadcrumbs

For nested pages:

```typescript
// components/ui/breadcrumbs.tsx
interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

const Breadcrumbs: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index}>
            {item.current ? (
              <span>{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
```

## Route Guards and Accessibility

### Navigation Accessibility

```typescript
// Header accessibility
<nav role="navigation" aria-label="Main navigation">
  {/* Desktop menu */}
  <ul role="menubar">
    <li role="none">
      <Link role="menuitem" href="/about">About</Link>
    </li>
  </ul>
</nav>
```

### Keyboard Navigation

- **Tab Order**: Logical tab sequence through menu items
- **Escape Key**: Close mobile menu
- **Arrow Keys**: Navigate dropdown items
- **Enter/Space**: Activate menu items

### Skip Links

```typescript
// In root layout, above navigation
<a
  href="#main-content"
  className="skip-link"
  onFocus={(e) => (e.target.style.display = 'block')}
  onBlur={(e) => (e.target.style.display = 'none')}
>
  Skip to main content
</a>

// Target in main content area
<main id="main-content" className="main-content">
  {/* Page content */}
</main>
```

## Route Transitions

### Page Transitions

Smooth page-to-page animations:

```typescript
// layout.tsx - wrap children
'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

## SEO and Metadata

### Structured Data

JSON-LD for school information:

```typescript
// components/seo/school-schema.tsx
export function SchoolSchema() {
  const schoolData = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Doon International School",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 School Road",
      "addressLocality": "Jabalpur",
      "addressCountry": "IN"
    },
    "telephone": "+91 12345 67890",
    "email": "info@doonschool.com"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schoolData),
      }}
    />
  );
}
```

### Sitemap Generation

```typescript
// app/sitemap.ts
export default function sitemap() {
  const baseUrl = 'https://doonschool.com';

  const staticPages = [
    '',
    '/about',
    '/admissions',
    '/contact',
    // ... other routes
  ];

  const dynamicPages = getNewsArticles().map((article) => ({
    url: `${baseUrl}/news/${article.id}`,
    lastModified: new Date(article.date),
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
    })),
    ...dynamicPages,
  ];
}
```

## Performance Optimization

### Route Optimization

#### Static Generation

Pages are pre-built at build time:

```typescript
// app/news/page.tsx
export async function generateStaticParams() {
  const articles = getNewsArticles();

  return articles.map((article) => ({
    id: article.id,
  }));
}

export default function NewsPage() {
  // Static content, generated at build time
}
```

#### Dynamic Routes

```typescript
// app/news/[id]/page.tsx
export async function generateStaticParams() {
  const articles = getNewsArticles();
  return articles.map((article) => ({ id: article.id }));
}

export async function generateMetadata({
  params
}: {
  params: { id: string }
}) {
  const article = getNewsArticle(params.id);
  return {
    title: article.title,
  };
}
```

### Bundle Splitting

Automatic route-based code splitting:

```typescript
// Large page components import dynamically
const HeavyComponent = dynamic(
  () => import('../components/heavy-component'),
  {
    loading: () => <SkeletonLoader />,
  }
);
```

## Development & Debugging

### Route Debugging

```typescript
// components/dev/route-debugger.tsx
'use client';

import { usePathname } from 'next/navigation';

export function RouteDebugger() {
  const pathname = usePathname();

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded">
      Current Route: {pathname}
    </div>
  );
}
```

## Future Routing Enhancements

### Planned Improvements

- **Internationalization**: Multi-language route support
- **Protected Routes**: Authentication-based access control
- **Advanced Loading**: More sophisticated loading states
- **Route Prefetching**: Smart prefetching for SPA-like experience

### Migration Considerations

When transitioning to dynamic content:

```typescript
// Current: Static data
import eventsData from '../data/events.json';

// Future: Dynamic fetching
export async function getEvents() {
  // Could be from CMS, database, or API
  const response = await fetch('/api/events');
  return response.json();
}
```

## Troubleshooting

### Common Route Issues

#### 404 Errors
1. Check file path matches route structure
2. Verify page.tsx exists in correct directory
3. Clear Next.js cache: `rm -rf .next`

#### Navigation Not Working
1. Verify Link components (not `<a>` tags)
2. Check href attributes match route structure
3. Test in browser developer tools

#### Metadata Not Applying
1. Ensure metadata exported from page component
2. Check for typos in export statement
3. Verify static vs. dynamic metadata usage

#### Layout Not Loading
1. Confirm layout.tsx exists in correct directory
2. Check for TypeScript errors in layout
3. Verify children prop is properly destructured
