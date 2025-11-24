# System Patterns: Doon International School Website

## Architecture Principles

### Constitutional Governance
The system follows Specification-Driven Development (SDD) with 10 immutable constitutional articles that govern all implementation decisions:

1. **Static-First Principle**: All features begin as static implementations
2. **Component-First Architecture**: Every UI element is a reusable component
3. **TypeScript-First Development**: All code written in TypeScript with strict types
4. **Test-First Imperative**: All major features incorporate testing from conception
5. **Framework Trust Gate**: Framework features used directly without abstraction
6. **Integration-First Testing**: Tests use realistic environments
7. **Documentation-Driven Development**: All changes documented before implementation

### Framework Architecture
- **Next.js App Router**: File-system based routing with server components
- **App Directory Structure**: Page components in `/app` with nested routing
- **Server-Side Rendering**: All pages pre-rendered for optimal performance
- **Static Generation**: Content built at build time, deployed as static files

## Design Patterns

### Component Design Pattern
```
Atomic Design Hierarchy:
├── ui/               # Atoms: buttons, inputs, labels
├── blocks/           # Molecules: contact-form, enquiry-form, campus-stats
└── sections/         # Organisms: page-specific component collections
```

#### Component Interface Pattern
```typescript
interface ComponentNameProps {
  className?: string;
  children?: React.ReactNode;
  data: ComponentDataType;
}
```

### Data Flow Patterns

#### Static Content Flow
```
JSON Data (data/*.json)
    ↓
Data Fetching (lib/getData.ts)
    ↓
Type-Safe Interfaces
    ↓
Component Props
    ↓
Rendered UI
```

#### Form Submission Flow
```
User Input
    ↓
React Hook Form + Zod Validation
    ↓
API Route Handler (/api/enquiry/route.ts)
    ↓
Nodemailer Email Service
    ↓
Confirmation Response
```

### State Management Pattern
- **Zero Global State**: Pure functional components with props
- **Local Component State**: useState for form inputs and UI interactions
- **Server State**: No traditional state management - all data static

### Error Handling Patterns
- **Type Guards**: Runtime type checking for data validation
- **Zod Schemas**: Form validation with descriptive error messages
- **API Route Error Handling**: Structured error responses with status codes

## Component Relationships

### UI Component Dependencies
```
flows
subgraph Input Components
    A[Button] --> B[Input]
    B --> C[TextArea]
    C --> D[Dropdown]
end

subgraph Form Components
    E[React Hook Form] --> F[Zod Schema]
    F --> G[Form Field]
    G --> H[Validation Messages]
end

subgraph Layout Components
    I[Header] --> J[Navigation Menu]
    J --> K[Mobile Menu]
    K --> L[Footer]
end
```

### Page Component Composition
```
Homepage (/)
├── Layout (Root)
├── Hero Section
├── Feature Strip
├── Campus Stats
├── News Ticker
├── Footer
```

### Common Component Patterns

#### Container Component Pattern
```tsx
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4", className)}>
      {children}
    </div>
  );
}
```

#### Data-Driven Component Pattern
```tsx
export function DynamicSection<T>({ data }: { data: T[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <DataCard key={index} data={item} />
      ))}
    </div>
  );
}
```

## Critical Implementation Paths

### Build & Deployment Path
```
/project/
├── Next.js Build Process
├── TypeScript Compilation (strict: true)
├── ESLint Validation
├── Static Export Generation
└── Vercel Deployment
```

### Content Workflow Path
```
/content-update/
├── Edit JSON file (data/*.json)
├── Commit to Git
├── Trigger Build
├── Static Generation
└── CDN Distribution
```

### Development Workflow Path
```
/feature-development/
├── Specification Document (SDD Template)
├── Constitutional Gate Assessment
├── Implementation Plan Creation
├── TypeScript Code (+ tests)
├── Documentation Update
└── Pull Request Review
```

## Technical Decision Log

### Design System Choice
**Decision**: Tailwind CSS + Component Variants (CVA)
**Rationale**: Framework trust principle, direct usage without abstraction
**Trade-offs**: Less component library bundle, higher maintenance for consistency
**Impact**: Consistent design through base styles and variants

### TypeScript Strict Mode
**Decision**: `strict: true` in tsconfig.json
**Rationale**: Constitutional requirement for type safety
**Trade-offs**: Higher development friction, reduced runtime errors
**Impact**: Improved code reliability and developer experience

### Static-First Data Strategy
**Decision**: JSON files for all content
**Rationale**: Constitutional static-first principle, performance benefits
**Trade-offs**: No dynamic content, manual file updates
**Impact**: Fast loading, version-controlled content, easy maintenance

### Email Integration Pattern
**Decision**: API routes + Nodemailer + Gmail SMTP
**Rationale**: Direct framework usage, simple deployment
**Trade-offs**: Dependency on Gmail credentials, rate limits
**Impact**: Reliable form submissions without third-party services

### Image Optimization Strategy
**Decision**: Next.js Image component + Sharp library
**Rationale**: Built-in optimization, modern formats
**Trade-offs**: Next.js framework coupling, client-side processing
**Impact**: Reduced bandwidth, faster loading, better SEO

## Performance Patterns

### Image Loading Strategy
- **Automatic Optimization**: Next.js Image component handles all images
- **Lazy Loading**: Below-the-fold images load on demand
- **Format Selection**: WebP/AVIF with fallbacks to JPEG/PNG
- **Responsive Images**: Multiple sizes for different viewports

### Bundle Optimization Strategy
- **Route-Based Splitting**: Automatic code splitting by page
- **Static Imports**: Only active components loaded
- **Minimal Dependencies**: Framework trust reduces abstraction layers

## Testing Patterns

### Component Testing Strategy
- **Testing Library**: React Testing Library for component behavior
- **Integration Focus**: User interaction testing over unit isolation
- **Real Dependencies**: Test with actual child components when possible

### Form Testing Strategy
- **Zod Validation**: Schema tests independent of React components
- **Submission Testing**: Full form submission flows through API routes
- **Error State Testing**: Validation message display and behavior

## Accessibility Patterns

### Semantic HTML Structure
- **Proper Heading Hierarchy**: H1 → H2 → H3 structure per page
- **ARIA Labels**: Screen reader support where needed
- **Keyboard Navigation**: All interactive elements keyboard accessible

### Focus Management
- **Visible Focus Indicators**: Clear focus outlines
- **Logical Tab Order**: Natural keyboard navigation flow
- **Skip Links**: Direct navigation to main content

### Color and Contrast
- **WCAG AA Compliance**: Minimum 4.5:1 contrast ratio
- **Color Independence**: Information not conveyed by color alone
- **High Contrast Support**: System preference aware
