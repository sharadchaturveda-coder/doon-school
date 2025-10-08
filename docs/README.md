# Doon International School Website Documentation

## Project Overview

This is a modern, static-first website for Doon International School built using Next.js 14 with the App Router architecture. The site serves as a comprehensive digital presence for the school, providing information about academics, admissions, facilities, and campus life to prospective parents and the community.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with design tokens system
- **UI Components**: shadcn/ui component library
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Static site (Vercel-ready)

## Quick Links

- [Project Architecture](./architecture.md)
- [Component Documentation](./components.md)
- [Design System](./design-system.md)
- [Data Management](./data-management.md)
- [Routing & Navigation](./routing-navigation.md)
- [Development Guide](./development.md)
- [Deployment & Performance](./deployment-performance.md)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

### Testing

```bash
npm run lint
```

## Project Structure

```
doon-school/
├── app/                          # Next.js App Router pages
├── components/                   # Reusable components
├── data/                         # Static content (JSON files)
├── design/                       # Design system
├── docs/                         # Documentation (this folder)
├── lib/                          # Utility functions
├── public/                       # Static assets
├── styles/                       # Global styles
└── tests/                        # Tests
```

## Key Features

- ✅ Responsive design (mobile-first)
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Performance optimized
- ✅ SEO optimized
- ✅ Static-first architecture
- ✅ Component-based UI
- ✅ Smooth animations
- ✅ Type-safe development

## SDD Methodology (Specification-Driven Development)

This project follows **SDD (Specification-Driven Development)** methodology where specifications drive implementation rather than code serving as the primary artifact. All development work must comply with the project **constitution** and use structured templates for consistent quality.

### Core SDD Principles
- **Constitution First**: All work governed by `constitution.md` (10 immutable articles)
- **Templates Mandatory**: Use structured templates in `/templates/` for all specifications, plans, and tasks
- **Quality Gates**: Constitutional compliance assessed before implementation
- **Test-First**: All features tested before implementation begins

### SDD Workflow for New Features
1. **Specification** (`templates/specification.md`): Define user stories and requirements
2. **Implementation Plan** (`templates/plan.md`): Technical approach with constitutional gates
3. **Task Breakdown** (`templates/tasks.md`): Executable tasks with parallel execution markers
4. **Implementation**: Code generated from specifications
5. **Validation**: Constitutional compliance and quality verification

### References
- **[Constitution](./constitution.md)**: Immutable development principles
- **[SDD Methodology](./sdd.md)**: Complete methodology documentation
- **[Templates Directory](./templates/)**: Standardized SDD templates
- **Next Feature**: Use SDD methodology for all future development work

## Content Management

The site uses a static-first approach with all content stored in JSON files in the `/data` directory. Content updates require editing these JSON files directly.

For future CMS integration, the architecture is designed to easily integrate with tools like Sanity CMS.

## Contributing (SDD-Compliant)

1. **Follow SDD Workflow**: Start with specification, use constitutional gates
2. **Constitutional Compliance**: Validate against `constitution.md` articles
3. **Template Usage**: Use provided SDD templates for structure and quality
4. **TypeScript First**: Strict typing, no `any` types without justification
5. **Documentation-Driven**: Update docs concurrently with code changes
6. **Quality Gates**: Test-first approach, accessibility, performance standards

## License

Copyright © 2025 Doon International School
