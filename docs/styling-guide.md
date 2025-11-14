# 🎨 Styling Guide

This guide covers the styling approach and design system used in the Doon International School website, focusing on Tailwind CSS best practices and consistent visual design.

## 🎯 Design Philosophy

### Core Principles
- **Utility-First**: Use Tailwind's utility classes for rapid, consistent styling
- **Mobile-First**: Design for mobile devices first, then enhance for larger screens
- **Accessible**: Ensure all components meet WCAG accessibility standards
- **Performant**: Optimize for fast loading and smooth interactions
- **Maintainable**: Consistent patterns that scale with the project

## 🖼️ Design System

### Color Palette

#### Primary Brand Colors
```css
/* Primary - Navy Blue */
--color-primary: #002B6B;      /* Deep navy for trust/authority */
--color-primary-foreground: #FFFFFF;

/* Secondary - Gold */
--color-secondary: #FFD700;    /* Excellence/achievement */
--color-secondary-foreground: #000000;

/* Accent - Amber */
--color-accent: #F2B33D;       /* Action/engagement */
--color-accent-foreground: #000000;
```

#### Semantic Colors
```css
/* Status Colors */
--color-success: #10B981;      /* Green for success states */
--color-warning: #F59E0B;      /* Amber for warnings */
--color-error: #EF4444;        /* Red for errors */
--color-info: #3B82F6;         /* Blue for information */

/* Neutral Colors */
--color-background: #FFFFFF;   /* Page background */
--color-foreground: #0F172A;   /* Primary text */
--color-muted: #64748B;        /* Secondary text */
--color-border: #E2E8F0;       /* Borders and dividers */
```

### Typography Scale

#### Font Families
```css
/* Headings - Custom font stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Body text - Inter for readability */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

#### Font Sizes (Mobile-First)
```css
/* Text sizes scale */
.text-xs: 0.75rem (12px)   /* Small labels */
.text-sm: 0.875rem (14px)  /* Body text small */
.text-base: 1rem (16px)    /* Body text default */
.text-lg: 1.125rem (18px)  /* Large body text */
.text-xl: 1.25rem (20px)   /* Small headings */
.text-2xl: 1.5rem (24px)   /* Section headings */
.text-3xl: 1.875rem (30px) /* Page headings */
.text-4xl: 2.25rem (36px)  /* Hero headings */
.text-5xl: 3rem (48px)     /* Large hero text */
```

#### Font Weights
```css
.font-light: 300     /* Light text */
.font-normal: 400    /* Regular text */
.font-medium: 500    /* Medium emphasis */
.font-semibold: 600  /* Strong emphasis */
.font-bold: 700      /* Bold headings */
.font-black: 900     /* Extra bold accents */
```

### Spacing Scale

#### Consistent Spacing
```css
/* Spacing scale (4px base) */
.space-1: 0.25rem (4px)   /* Minimal spacing */
.space-2: 0.5rem (8px)    /* Small gaps */
.space-3: 0.75rem (12px)  /* Component padding */
.space-4: 1rem (16px)     /* Standard padding */
.space-6: 1.5rem (24px)   /* Section spacing */
.space-8: 2rem (32px)     /* Large gaps */
.space-12: 3rem (48px)    /* Major sections */
.space-16: 4rem (64px)    /* Hero spacing */
```

## 🛠️ Tailwind CSS Patterns

### Utility-First Approach

#### Basic Button Styling
```typescript
// ✅ Good: Composable utilities
<button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50">
  Click me
</button>

// ❌ Avoid: Inline styles or arbitrary values
<button style={{ backgroundColor: '#002B6B', padding: '8px 16px' }}>
  Click me
</button>
```

#### Responsive Design Patterns
```typescript
// Mobile-first responsive classes
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* 1 column mobile, 2 tablet, 4 desktop */}
</div>

<div className="text-base sm:text-lg lg:text-xl">
  {/* Scales text size responsively */}
</div>

<div className="p-4 sm:p-6 lg:p-8">
  {/* Scales padding responsively */}
</div>
```

### Component Styling Patterns

#### Card Component
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      // Base styles
      "bg-background border border-border rounded-lg shadow-sm",
      // Hover effects
      "hover:shadow-md transition-shadow duration-200",
      // Custom classes
      className
    )}>
      {children}
    </div>
  );
}
```

#### Button Variants with CVA
```typescript
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  // Base classes (always applied)
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  "focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",

  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ variant, size, children, onClick }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }))}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Layout Patterns

#### Container Pattern
```typescript
interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export default function Container({ children, size = 'lg', className }: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  return (
    <div className={cn(
      'mx-auto px-4 sm:px-6 lg:px-8',
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  );
}
```

#### Flexbox Grid System
```typescript
// Simple responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm">
      {/* Card content */}
    </div>
  ))}
</div>

// Complex layout with sidebar
<div className="flex flex-col lg:flex-row gap-8">
  {/* Main content */}
  <main className="flex-1">
    <h1>Main Content</h1>
  </main>

  {/* Sidebar */}
  <aside className="lg:w-80">
    <h2>Sidebar</h2>
  </aside>
</div>
```

## 🎭 Animation Patterns

### Framer Motion Integration

#### Page Transitions
```typescript
'use client';

import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function Page({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
```

#### Hover Effects
```typescript
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="bg-white p-6 rounded-lg shadow-sm cursor-pointer"
>
  <h3>Hover me</h3>
</motion.div>
```

#### Scroll Animations
```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h2>Animated on scroll</h2>
</motion.div>
```

## 📱 Responsive Design

### Breakpoint Strategy

#### Tailwind Breakpoints
```typescript
// Breakpoint prefixes
// sm: 640px and up
// md: 768px and up
// lg: 1024px and up
// xl: 1280px and up
// 2xl: 1536px and up

<div className="text-sm md:text-base lg:text-lg xl:text-xl">
  {/* Responsive text sizing */}
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {/* Responsive grid columns */}
</div>
```

#### Mobile-First Approach
```typescript
// Start with mobile styles, then enhance
<div className="flex flex-col gap-4 md:flex-row md:gap-8">
  {/* Stacked on mobile, side-by-side on desktop */}
</div>

<div className="p-4 md:p-6 lg:p-8">
  {/* Small padding on mobile, larger on desktop */}
</div>
```

### Touch-Friendly Design
```typescript
// Ensure touch targets are at least 44px
<button className="min-h-[44px] min-w-[44px] p-3">
  Touch-friendly button
</button>

// Adequate spacing between interactive elements
<div className="space-y-4 md:space-y-0 md:space-x-4">
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

## ♿ Accessibility Patterns

### Focus Management
```typescript
// Visible focus indicators
<button className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
  Accessible button
</button>

// Skip links for keyboard navigation
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
>
  Skip to main content
</a>
```

### Screen Reader Support
```typescript
// Semantic HTML with ARIA labels
<button
  aria-label="Close modal"
  aria-expanded={isOpen}
>
  <XIcon />
</button>

// Hidden labels for icons
<span className="sr-only">Search</span>
<SearchIcon />

// Live regions for dynamic content
<div aria-live="polite" aria-atomic="true">
  {message}
</div>
```

### Color Contrast
```typescript
// Ensure sufficient contrast ratios
<div className="bg-primary text-primary-foreground">
  {/* High contrast text on primary background */}
</div>

<div className="text-foreground">
  {/* Default text color with good contrast */}
</div>
```

## 🧩 Component-Specific Patterns

### Form Styling
```typescript
// Input component
<input
  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  placeholder="Enter your email"
/>

// Label styling
<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
  Email address
</label>
```

### Navigation Styling
```typescript
// Active link styling
<Link
  href="/about"
  className={cn(
    "transition-colors hover:text-foreground/80",
    pathname === "/about"
      ? "text-foreground"
      : "text-foreground/60"
  )}
>
  About
</Link>
```

### Card Patterns
```typescript
// Basic card
<div className="rounded-lg border bg-card text-card-foreground shadow-sm">
  <div className="p-6">
    <h3 className="text-lg font-semibold">Card Title</h3>
    <p className="text-sm text-muted-foreground">Card content</p>
  </div>
</div>

// Interactive card
<div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow cursor-pointer">
  {/* Card content */}
</div>
```

## 🚀 Performance Optimization

### CSS Optimization
```typescript
// Use @apply sparingly for reusable patterns
.btn-primary {
  @apply bg-primary text-primary-foreground hover:bg-primary/90;
  @apply font-medium py-2 px-4 rounded-md transition-colors;
}

// Prefer utility classes for one-off styles
<div className="bg-red-500 text-white p-4 rounded">Alert</div>
```

### Image Optimization
```typescript
import Image from 'next/image';

// Automatic optimization
<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority // Above the fold
  className="object-cover"
/>
```

### Bundle Splitting
```typescript
// Dynamic imports for large components
const AdminPanel = dynamic(() => import('./AdminPanel'), {
  loading: () => <div>Loading...</div>,
  ssr: false // Client-side only
});
```

## 📋 Styling Checklist

Before committing styles, ensure:

### ✅ Design Consistency
- [ ] Colors from the approved palette?
- [ ] Typography following the scale?
- [ ] Spacing using the defined scale?
- [ ] Components match design system?

### ✅ Responsive Design
- [ ] Mobile-first approach?
- [ ] Touch-friendly targets (44px minimum)?
- [ ] Readable text on all screen sizes?
- [ ] Proper breakpoints used?

### ✅ Accessibility
- [ ] Sufficient color contrast?
- [ ] Focus indicators visible?
- [ ] Screen reader friendly?
- [ ] Keyboard navigation works?

### ✅ Performance
- [ ] Minimal CSS bundle size?
- [ ] Efficient animations?
- [ ] Optimized images?
- [ ] No layout thrashing?

### ✅ Browser Compatibility
- [ ] Works in supported browsers?
- [ ] Graceful degradation?
- [ ] Progressive enhancement?

## 🔧 Customization Guidelines

### Adding New Colors
```typescript
// 1. Add to design tokens (tailwind.config.js)
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}

// 2. Use in components
<div className="bg-brand-500 text-brand-50">
  Branded content
</div>
```

### Creating New Components
```typescript
// 1. Define the component interface
interface CustomComponentProps {
  variant?: 'default' | 'featured';
  children: React.ReactNode;
}

// 2. Use design system classes
export default function CustomComponent({ variant = 'default', children }: CustomComponentProps) {
  return (
    <div className={cn(
      "rounded-lg p-4",
      variant === 'featured' && "bg-primary text-primary-foreground"
    )}>
      {children}
    </div>
  );
}
```

---

This styling guide ensures consistent, accessible, and performant visual design across the Doon International School website. Follow these patterns to maintain design quality and developer experience.</content>
