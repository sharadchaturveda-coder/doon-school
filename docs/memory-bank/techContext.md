# Technical Context: Doon International School Website

## Core Technology Stack

### Framework & Runtime
- **Next.js 14.2.33**: React framework with App Router architecture
- **Node.js 18+**: JavaScript runtime environment
- **TypeScript 5.4.5**: Static typing system with strict mode enabled

### Development Environment
- **VS Code**: Primary development IDE
- **Git**: Version control and collaboration
- **npm**: Package management and scripts
- **ESLint**: Code linting and quality enforcement
- **Prettier**: Code formatting standardization

### Frontend Framework
- **React 18.2.0**: UI library with concurrent features
- **TypeScript**: Complete type safety throughout the application

## Styling & Design System

### CSS Framework
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **PostCSS 8.4.31**: CSS processing pipeline
- **Autoprefixer**: Automatic browser compatibility prefixes

### Animation Library
- **Framer Motion 12.23.22**: Declarative animation library for React

## Form Management & Validation

### Form Libraries
- **React Hook Form 7.64.2**: Performant forms with minimal re-rendering
- **Zod 4.1.12**: TypeScript-first schema validation
- **@hookform/resolvers 5.2.2**: Zod integration for React Hook Form

## Email & Backend Services

### Email Integration
- **Nodemailer 7.0.10**: Email sending library
- **Gmail SMTP**: Email delivery service
- **@types/nodemailer 7.0.3**: TypeScript definitions

## UI Component Ecosystem

### Design System
- **Radix UI**: Headless UI components for accessibility
  - @radix-ui/react-label 2.1.7
  - @radix-ui/react-slot 1.2.3
- **Lucide React 0.545.0**: Icon library for consistent visual language
- **Class Variance Authority 0.7.1**: Component variant styling
- **clsx 2.1.1**: Conditional class names utility
- **tailwind-merge 3.3.1**: Tailwind class merging utility

### Typography & Icons
- **FontAwesome 7.1.0**: Icon system integration

## Development & Build Tools

### TypeScript Configuration
- **tsconfig.json**: Strict type checking configuration
- **typescript**: Compiler for type checking and transpilation

### Image Optimization
- **Sharp 0.34.4**: High-performance image processing
- **Next.js Image Component**: Automatic optimization and lazy loading

## Project Structure Patterns

### Directory Organization
```
doon-school/
├── app/                    # Next.js App Router
├── components/            # Reusable React components
│   ├── ui/               # Basic UI primitives
│   ├── blocks/           # Composite component blocks
│   └── sections/         # Page-level sections
├── data/                 # Static JSON content
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Global styles
```

### Component Architecture
- **Atomic Design**: Components organized by complexity (atoms → molecules → organisms)
- **Composition over Inheritance**: Functional components with props
- **TypeScript Interfaces**: All components properly typed
- **Component Libraries**: Shared UI components in `/ui`

## Data Management

### Content Strategy
- **JSON-First**: All content stored in static JSON files
- **Static Generation**: Content built at deploy time
- **No Server State**: Purely static with client-side interactions

### Data Flow
- JSON files → Page components → Static HTML
- Client forms → API routes → Email notifications

## Deployment & Hosting

### Target Platforms
- **Vercel**: Optimized hosting for Next.js applications
- **Static Export**: Fallback support for other hosting services
- **CDN**: Global content delivery for performance

### Build Configuration
- **Production Builds**: `npm run build` generates optimized static files
- **Development Server**: `npm run dev` for rapid iterative development

## Quality Assurance

### Code Quality Tools
- **ESLint**: Airbnb configuration with TypeScript rules
- **TypeScript Compiler**: Strict mode checking
- **Pre-commit Hooks**: Enforced quality standards

### Performance Tools
- **Web Vitals**: Core performance metrics monitoring
- **Bundle Analysis**: Webpack bundle size optimization

## Development Workflow

### Local Development
```bash
npm install
npm run dev        # Start development server
npm run build      # Production build
npm run lint       # Code quality checks
```

### Version Control
- **Git Flow**: Feature branches, main branch protection
- **Conventional Commits**: Standardized commit message format

## Constitutional Constraints

### SDD Methodology Compliance
- **Constitution.md**: 10 immutable development principles
- **Template-Driven**: All work follows structured SDD templates
- **Quality Gates**: All changes vetted against constitutional articles

### Framework Trust Principles
- **Next.js Direct Usage**: No abstraction layers over framework
- **Direct Library Usage**: No wrapper components over Radix UI/Tailwind
- **Framework Lock-in Accepted**: Strategic choice for consistency
