# Development Guide

## Overview

This guide covers development workflows, coding standards, tooling, and best practices for the Doon International School website. The project uses modern development tools and follows established conventions for maintainable, scalable code.

## Development Environment

### Prerequisites

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: Version control system
- **Visual Studio Code**: Recommended IDE with extensions:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier
  - Auto Rename Tag

### Environment Setup

#### 1. Clone Repository

```bash
git clone https://github.com/your-repo/doon-school.git
cd doon-school
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Environment Variables

Create `.env.local` for local development:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other environment variables as needed
```

#### 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the site.

## Project Structure

### Development Folders

```
doon-school/
├── docs/                    # Documentation (this folder)
├── tests/                   # Test files
├── .next/                   # Build output (generated)
├── node_modules/            # Dependencies (generated)
├── .vscode/                 # VS Code settings
├── .gitignore              # Git ignore rules
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS config
├── tsconfig.json           # TypeScript configuration
├── eslint.config.mjs       # ESLint configuration
└── package.json            # Project metadata and scripts
```

### Code Organization

#### Component Structure

```typescript
// components/ui/button.tsx
interface ButtonProps {
  variant?: "default" | "secondary" | "outline";
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  children,
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

#### Page Structure

```typescript
// app/about/page.tsx
import type { Metadata } from 'next';
import aboutData from '../../data/doon/about.json';
import Card from '../../components/ui/card';
import Hero from '../../components/ui/hero';

export const metadata: Metadata = {
  title: 'About Us | Doon International School',
  description: 'Learn about our mission, vision, and heritage.',
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <Hero
        title="About Our School"
        subtitle="Learn about our heritage and values"
      />

      {aboutData.sections.map((section) => (
        <Card key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.content}</p>
        </Card>
      ))}
    </div>
  );
}
```

## Development Workflow

### Feature Development Process

#### 1. Create Feature Branch

```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

#### 2. Implement Feature

- Write code following established patterns
- Test functionality locally
- Run linting and type checking

#### 3. Commit Changes

```bash
git add .
git commit -m "Add: brief description of changes

- Detail about what was changed
- Additional context if needed
- Reference to issue/ticket if applicable
"
```

#### 4. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
# Create PR on GitHub/GitLab
```

### Code Quality Checks

#### Linting

```bash
npm run lint
```

Fix ESLint errors before committing.

#### Type Checking

```bash
npx tsc --noEmit
```

Fix TypeScript errors before committing.

#### Build Verification

```bash
npm run build
```

Ensure production build succeeds.

### Common Development Tasks

#### Adding a New Component

1. **Create component file** in appropriate directory
2. **Define TypeScript interface** for props
3. **Implement component logic**
4. **Add proper styling** with Tailwind classes
5. **Test component** in a page
6. **Update documentation**

#### Adding a New Page

1. **Create page directory** in `app/`
2. **Add `page.tsx`** file
3. **Create optional layout** if needed
4. **Add metadata** for SEO
5. **Update navigation** if required
6. **Add loading/error states** (optional)

#### Adding New Content

1. **Update JSON file** in `data/` directory
2. **Follow existing schema** structure
3. **Test rendering** in affected pages
4. **Validate data** with TypeScript interfaces

## Coding Standards

### TypeScript Best Practices

#### Interface Definitions

```typescript
// Good: Descriptive interface name with clear properties
interface EventData {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly time: string;
  readonly location: string;
  readonly description: string;
  readonly category: EventCategory;
  readonly featured: boolean;
}

// Avoid: Generic or unclear names
interface Data {
  id: string;
  name: string;
  desc: string;
}
```

#### Type Safety

```typescript
// Good: Strict typing with no any
const events: EventData[] = parseEvents(data);

// Avoid: Loose typing
const events = data as any;
```

### React Best Practices

#### Component Patterns

```typescript
// Good: Function component with proper typing
const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <Card onClick={onClick}>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
    </Card>
  );
};

// Avoid: Class components or missing typing
class EventCard extends React.Component {
  render() {
    return <div>{this.props.event.title}</div>;
  }
}
```

#### State Management

```typescript
// Good: useState with proper types
const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

// Good: useReducer for complex state
const [state, dispatch] = useReducer(eventReducer, initialState);

// Avoid: Overusing useEffect
useEffect(() => {
  // Complex logic that should be in event handlers
}, [selectedEvent, otherDependency]);
```

### CSS and Styling

#### Tailwind CSS Patterns

```typescript
// Good: Semantic class names with responsive design
<div className="card bg-white rounded-lg shadow-md p-6 md:p-8">
  <h2 className="text-xl md:text-2xl font-bold mb-4">Title</h2>
  <p className="text-gray-600 leading-relaxed">Content</p>
</div>

// Good: Using design tokens from config
<div className="bg-primary-50 border-primary-200 text-primary-900">
  {/* Using primary color variants */}
</div>

// Avoid: Inline styles or arbitrary values
<div className="p-[0.75rem] md:p-[1.25rem]"> {/* Fixed values */}
```

#### CSS Modules (when needed)

```typescript
// styles/EventCard.module.css
.card {
  @apply bg-white rounded-lg shadow-md p-6;
}

.cardTitle {
  @apply text-xl font-bold mb-4;
}

// component
import styles from './EventCard.module.css';

<div className={styles.card}>
  <h2 className={styles.cardTitle}>Title</h2>
</div>
```

### File Organization

#### Import Order

```typescript
// 1. React imports
import React from 'react';

// 2. Third-party libraries
import { motion } from 'framer-motion';

// 3. Local imports - components
import Button from '../components/ui/button';
import Card from '../components/ui/card';

// 4. Local imports - utilities
import { getEvents } from '../../lib/events';
import { formatDate } from '../../lib/utils';

// 5. Local imports - data/types
import type { EventData } from '../../types/event';
import eventsData from '../../data/events.json';
```

#### File Naming

```bash
# Components: PascalCase
Button.tsx
EventCard.tsx

# Pages: kebab-case
about-us.tsx
contact-form.tsx

# Utilities: camelCase
getEvents.ts
formatDate.ts

# Data files: kebab-case
events.json
site-settings.json
```

## Testing

### Testing Strategy

#### Component Testing

```typescript
// __tests__/components/EventCard.test.tsx
import { render, screen } from '@testing-library/react';
import EventCard from '../../components/EventCard';

const mockEvent = {
  id: '1',
  title: 'Test Event',
  date: '2025-01-15',
  time: '10:00 AM',
  location: 'Auditorium',
  description: 'Test description',
  category: 'Academic',
  featured: false,
};

describe('EventCard', () => {
  it('renders event information', () => {
    render(<EventCard event={mockEvent} />);

    expect(screen.getByText('Test Event')).toBeInTheDocument();
    expect(screen.getByText('10:00 AM')).toBeInTheDocument();
    expect(screen.getByText('Auditorium')).toBeInTheDocument();
  });
});
```

#### Accessibility Testing

```typescript
// Use axe-core for accessibility testing
import { axe, toHaveNoViolations } from 'jest-axe';

describe('EventCard Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<EventCard event={mockEvent} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run accessibility tests
npm run test:a11y
```

## Performance Optimization

### Code Splitting

```typescript
// Dynamic imports for components
const HeavyComponent = dynamic(
  () => import('../components/HeavyComponent'),
  {
    loading: () => <SkeletonLoader />,
    ssr: false, // Disable SSR if needed
  }
);
```

### Image Optimization

```typescript
import Image from 'next/image';

// Optimized image with lazy loading
<Image
  src="/images/event.jpg"
  alt="Event photo"
  width={400}
  height={300}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQ..."
/>
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run build:analyze

# Check for unused dependencies
npm run dep:check
```

## Debugging

### Development Debugging

#### Console Logging

```typescript
// Temporary debug logging
console.log('Component props:', props);
console.log('State changes:', state);

// Clean up before committing!
```

#### React DevTools

- Component hierarchy inspection
- Props and state viewing
- Performance profiling
- React Query/Mutation debugging

#### Browser DevTools

- Network tab for API calls
- Performance tab for bottlenecks
- Console for errors and logs

### Common Debugging Scenarios

#### Styling Issues

```typescript
// Check Tailwind classes
<div className="bg-blue-500 p-4"> {/* Is this class available? */}

// Inspect computed styles
const element = document.querySelector('.my-element');
console.log(getComputedStyle(element));
```

#### Data Loading Issues

```typescript
// Check data structure
console.log('Events data:', eventsData);

// Validate JSON parsing
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('JSON parsing error:', error);
}
```

## Git Workflow

### Branch Naming

```bash
# Features
feature/add-event-calendar
feature/improve-navigation

# Bug fixes
bugfix/fix-mobile-menu
bugfix/resolve-form-validation

# Documentation
docs/update-component-documentation
docs/add-deployment-guide

# Hotfixes
hotfix/critical-security-patch
```

### Commit Conventions

```bash
# Format: type(scope): description

# Examples
feat(header): add responsive mobile navigation
fix(form): resolve validation error display
docs(readme): update installation instructions
style(button): improve focus states
refactor(event-card): optimize re-rendering
test(event-list): add accessibility tests
chore(deps): update react to v18
```

## Deployment

### Staging Deployment

```bash
# Build for staging
npm run build:staging

# Deploy to staging environment
npm run deploy:staging
```

### Production Deployment

```bash
# Build for production
npm run build

# Deploy to production
npm run deploy
```

### Environment Variables

- **Development**: `.env.local`
- **Staging**: `.env.staging`
- **Production**: `.env.production`

## Maintenance

### Regular Tasks

#### Weekly
- Run security audit: `npm audit`
- Update dependencies: `npm update`
- Review pull requests
- Monitor error logs

#### Monthly
- Performance monitoring
- Analytics review
- Content audit
- Backup verification

#### Quarterly
- Major dependency updates
- Security patches
- Design system review
- Code refactoring

### Health Checks

```bash
# Automated health check script
#!/bin/bash

# Lint check
npm run lint

# Type check
npx tsc --noEmit

# Build check
npm run build

# Test check
npm test

echo "All checks passed!"
```

## Troubleshooting Guide

### Common Issues

#### "Module not found" errors

```bash
# Clear Next.js cache
rm -rf .next
npm run dev

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### Port already in use

```bash
# Find process using port 3000
lsof -ti:3000 | xargs kill

# Or use different port
npm run dev -- -p 3001
```

#### Build failures

```bash
# Check Node.js version
node --version

# Check package.json
cat package.json

# Clear cache and rebuild
rm -rf .next node_modules/.cache
npm install
npm run build
```

#### TypeScript errors

```bash
# Check TypeScript configuration
cat tsconfig.json

# Run type checking with verbose output
npx tsc --noEmit --listFiles
```

This comprehensive development guide ensures consistent, maintainable, and high-quality code across the Doon International School website project.
