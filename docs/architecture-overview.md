# 🏗️ Architecture Overview

This document provides a comprehensive view of the Doon International School website architecture, covering both high-level design decisions and technical implementation details.

## 📊 System Overview

The website is built as a modern **Server-Side Rendered (SSR)** React application using Next.js 14's App Router, designed for optimal performance, SEO, and developer experience.

### Core Principles
- **Performance First**: Optimized loading times and efficient resource usage
- **Developer Experience**: Type-safe development with excellent tooling
- **Maintainability**: Clean architecture with clear separation of concerns
- **Scalability**: Modular design that can grow with the school's needs

## 🏛️ Architectural Patterns

### 1. Next.js App Router Architecture

#### File-Based Routing
```
app/
├── layout.tsx           # Root layout (shared across all pages)
├── page.tsx             # Homepage (/)
├── about/
│   ├── layout.tsx       # About-specific layout (optional)
│   └── page.tsx         # About page (/about)
└── api/
    └── enquiry/
        └── route.ts     # API endpoint (/api/enquiry)
```

**Key Benefits:**
- **Automatic Routing**: File paths determine URL routes
- **Nested Layouts**: Shared UI components without duplication
- **Server Components**: Better performance and SEO by default
- **API Colocation**: API routes live alongside related pages

#### Layout Composition
```typescript
// Root layout wraps all pages
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />          {/* Navigation */}
        <main>{children}</main>  {/* Page content */}
        <Footer />          {/* Site footer */}
      </body>
    </html>
  );
}
```

### 2. Component Architecture

#### Atomic Design Pattern
```
components/
├── ui/                  # Atoms (Button, Input, Card)
├── blocks/              # Molecules (Hero, FeatureStrip)
├── sections/            # Organisms (page sections)
└── layout/              # Templates (Header, Footer)
```

**Component Hierarchy:**
- **Atoms**: Basic, reusable UI elements
- **Molecules**: Combinations of atoms forming functional units
- **Organisms**: Complex sections combining multiple molecules
- **Templates**: Page-level layouts combining organisms

#### Example Component Flow
```typescript
// Atom: Basic button
function Button({ children, variant }) {
  return <button className={`btn btn-${variant}`}>{children}</button>;
}

// Molecule: CTA section using buttons
function CallToAction({ title, description }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button variant="primary">Learn More</Button>
      <Button variant="secondary">Contact Us</Button>
    </section>
  );
}

// Organism: Complete page section
function HeroSection() {
  return (
    <section className="hero">
      <HeroContent />
      <CallToAction />
      <BackgroundAnimation />
    </section>
  );
}
```

### 3. Data Management Strategy

#### Static Data Architecture
```typescript
// Data flows: JSON → Components → UI
data/
├── site.json            # Global configuration
├── infrastructure.json  # Infrastructure/facilities page content
└── doon/
    ├── home.json        # Homepage data
    ├── about.json       # About page data
    └── facilities.json  # Facilities data
```

#### Data Fetching Patterns

**Server Components (Recommended):**
```typescript
// Data fetched at build time or request time
export default async function AboutPage() {
  const aboutData = await getData(); // Server-side fetching

  return <AboutContent data={aboutData} />;
}
```

**Client Components (When Needed):**
```typescript
'use client';

export default function InteractiveComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return <div>{/* Render with client-side data */}</div>;
}
```

## 🔄 Data Flow Architecture

### Request Lifecycle

1. **User Request** → Next.js Server
2. **Route Matching** → `app/[route]/page.tsx`
3. **Data Fetching** → `lib/getData.ts` or API routes
4. **Server Rendering** → React components to HTML
5. **Client Hydration** → Interactive JavaScript attached
6. **Response** → Fully rendered page to user

### State Management

#### Local Component State
```typescript
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? 'Close' : 'Menu'}
    </button>
  );
}
```

#### Global Application State
- **Context API**: For theme, user preferences
- **URL State**: For routing and filters
- **Local Storage**: For user settings persistence

## 🎨 Styling Architecture

### Tailwind CSS Strategy

#### Utility-First Approach
```typescript
// Instead of custom CSS classes, use utilities
<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
  Click me
</button>
```

#### Design System Integration
```typescript
// Consistent spacing using design tokens
const buttonStyles = {
  padding: 'py-2 px-4',           // 0.5rem 1rem
  borderRadius: 'rounded-lg',     // 0.5rem
  fontSize: 'text-base',          // 1rem
  transition: 'transition-colors' // Smooth color changes
};
```

#### Responsive Design Pattern
```typescript
// Mobile-first responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive: 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

### CSS Organization

#### Global Styles (`app/globals.css`)
```css
/* CSS custom properties for design tokens */
:root {
  --color-primary: #002B6B;
  --color-secondary: #FFD700;
  --color-accent: #F2B33D;
}

/* Global utility classes */
.container { max-width: 1200px; margin: 0 auto; }
.text-balance { text-wrap: balance; }
```

#### Component Styles
```typescript
// Colocate styles with components using className
export default function Card({ children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      {children}
    </div>
  );
}
```

## 📧 Email Integration Architecture

### API Route Design

#### Serverless Function Pattern
```typescript
// app/api/enquiry/route.ts
export async function POST(request: NextRequest) {
  // 1. Parse request
  const body = await request.json();

  // 2. Validate data
  const validatedData = validateEnquiryData(body);

  // 3. Process email
  const emailResult = await sendEnquiryEmail(validatedData);

  // 4. Return response
  return NextResponse.json({ success: true });
}
```

#### Error Handling Strategy
```typescript
try {
  // Email sending logic
  await transporter.sendMail(mailOptions);
  return NextResponse.json({ message: 'Success' });
} catch (error) {
  // Log error for debugging
  console.error('Email sending failed:', error);

  // Return user-friendly error
  return NextResponse.json(
    { error: 'Failed to send enquiry' },
    { status: 500 }
  );
}
```

### Email Template Architecture

#### Template Composition
```typescript
const emailHtml = `
  <div class="email-container">
    <header class="email-header">
      <h1>New Enquiry</h1>
    </header>
    <main class="email-content">
      ${generateEnquiryContent(enquiryData)}
    </main>
    <footer class="email-footer">
      ${generateFooterContent()}
    </footer>
  </div>
`;
```

## 🚀 Performance Optimizations

### Build-Time Optimizations

#### Static Generation
```typescript
// Pre-render pages at build time
export default function StaticPage() {
  return <div>Static content</div>;
}
```

#### Image Optimization
```typescript
import Image from 'next/image';

// Automatic optimization, lazy loading, and WebP conversion
<Image
  src="/hero-image.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority // Above the fold images
/>
```

#### Bundle Splitting
```typescript
// Automatic code splitting by route
// Large components lazy loaded
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>
});
```

### Runtime Optimizations

#### Client-Side Caching
```typescript
// Cache expensive computations
const cachedData = useMemo(() => {
  return expensiveCalculation(props);
}, [props]);
```

#### Animation Performance
```typescript
// Use transform and opacity for smooth animations
<motion.div
  animate={{ x: 100, opacity: 1 }}
  transition={{ type: "spring", stiffness: 100 }}
>
  Smooth animation
</motion.div>
```

## 🔧 Development Workflow

### Code Quality Gates

#### TypeScript Configuration
```json
// tsconfig.json - Strict type checking
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true
  }
}
```

#### ESLint Configuration
```javascript
// .eslintrc.js - Code quality rules
module.exports = {
  extends: ['next/core-web-vitals', 'airbnb-typescript'],
  rules: {
    'react/prop-types': 'off', // TypeScript handles this
    '@typescript-eslint/no-unused-vars': 'error'
  }
};
```

### Testing Strategy

#### Component Testing
```typescript
// __tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from '../Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

#### API Testing
```typescript
// __tests__/api/enquiry.test.ts
import { POST } from '../app/api/enquiry/route';

test('sends email on valid enquiry', async () => {
  const request = createMockRequest(validEnquiryData);
  const response = await POST(request);

  expect(response.status).toBe(200);
});
```

## 📊 Monitoring & Analytics

### Performance Monitoring
```typescript
// Performance tracking
useEffect(() => {
  if (typeof window !== 'undefined') {
    // Track page load performance
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        analytics.track('performance', entry);
      });
    });
    observer.observe({ entryTypes: ['measure'] });
  }
}, []);
```

### Error Tracking
```typescript
// Global error boundary
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Log to error tracking service
    errorTracker.captureException(error, { extra: errorInfo });
  }
}
```

## 🔒 Security Considerations

### Environment Variables
```env
# Never commit secrets
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=secret-app-password

# Public variables prefixed with NEXT_PUBLIC_
NEXT_PUBLIC_ANALYTICS_ID=public-analytics-id
```

### Input Validation
```typescript
// Server-side validation for API routes
const validatedData = enquirySchema.parse(requestBody);

// Client-side validation for forms
const { register, handleSubmit, errors } = useForm<EnquiryForm>({
  resolver: zodResolver(enquirySchema)
});
```

### Content Security Policy
```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline';"
          }
        ]
      }
    ];
  }
};
```

## 🚀 Deployment Architecture

### Build Pipeline
```bash
# Production build process
npm run build    # Type checking + compilation
npm run lint     # Code quality checks
npm run test     # Run test suite

# Output: Optimized static files in .next/
```

### Hosting Strategy
- **Vercel**: Recommended for Next.js (automatic optimizations)
- **Netlify**: Alternative with good Next.js support
- **Static Export**: For traditional hosting (`npm run export`)

### CDN Integration
```typescript
// next.config.js - Image optimization via CDN
module.exports = {
  images: {
    domains: ['cdn.example.com'],
    formats: ['image/webp', 'image/avif']
  }
};
```

## 📈 Scalability Considerations

### Code Splitting Strategies
```typescript
// Route-based splitting (automatic)
// Component-based splitting
const AdminPanel = dynamic(() => import('./AdminPanel'), {
  loading: () => <div>Loading admin panel...</div>
});
```

### Database Integration (Future)
```typescript
// Prepared for database integration
export async function getServerSideProps() {
  const data = await db.enquiries.findMany();
  return { props: { data } };
}
```

### API Rate Limiting
```typescript
// Middleware for rate limiting
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
```

## 🎯 Best Practices Implemented

### Code Organization
- **Consistent file naming**: kebab-case for files, PascalCase for components
- **Import grouping**: React imports first, then external libraries, then internal
- **Barrel exports**: Clean public APIs for component libraries

### Performance Patterns
- **Server components by default**: Better performance and SEO
- **Client components only when needed**: For interactivity
- **Optimized images**: Automatic WebP/AVIF conversion
- **Lazy loading**: Above-the-fold content prioritized

### Developer Experience
- **TypeScript strict mode**: Catch errors at compile time
- **Hot reload**: Instant feedback during development
- **Comprehensive documentation**: Guides for all experience levels
- **Consistent tooling**: Same setup across all environments

---

This architecture provides a solid foundation for the Doon International School website, balancing performance, maintainability, and developer experience. The modular design allows for easy extension and modification as the school's needs evolve.</content>
