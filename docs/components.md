# Component Documentation

## Overview

**SCOPE FROZEN COMPONENTS** - Constitutional Article VII Compliance (Simplicity Gate)

This document details the remaining components used in the Doon International School 4-page MVP website. All archived components have been removed in compliance with constitutional Article VII (Simplicity Gate). Components are built with TypeScript and follow modern React patterns.

## Component Categories

### Layout Components

#### Header (`components/layout/header.tsx`)

**Purpose**: Site navigation with responsive behavior
**Location**: `components/layout/header.tsx`
**Usage**: Automatically included in root layout

```typescript
// No direct usage - automatically rendered in layout.tsx
```

**Features**:
- Desktop dropdown navigation from `site.json`
- Mobile sheet menu using shadcn/ui Sheet
- Responsive design with mobile-first approach
- Keyboard navigation support

**Props**: None (reads from siteData)

**Data Source**: `data/site.json`

---

#### Footer (`components/layout/footer.tsx`)

**Purpose**: Site footer with contact information and social links
**Location**: `components/layout/footer.tsx`
**Usage**: Automatically included in root layout

```typescript
// No direct usage - automatically rendered in layout.tsx
```

**Features**:
- Contact information from `site.json`
- Social media links
- Copyright notice
- Responsive grid layout

**Data Source**: `data/site.json`

### UI Components (shadcn/ui based)

#### Button (`components/ui/button.tsx`)

**Purpose**: Standardized button component with multiple variants
**Location**: `components/ui/button.tsx`
**Usage**:

```typescript
import Button from '../components/ui/button';

// Primary button
<Button>Primary</Button>

// Secondary with custom size
<Button variant="secondary" size="lg">Secondary</Button>

// Outline variant
<Button variant="outline">Outline</Button>
```

**Props**:
```typescript
interface ButtonProps {
  variant?: "default" | "secondary" | "outline";
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
```

**Variants**:
- `default`: Primary blue button
- `secondary`: Orange secondary button
- `outline`: Transparent with border

---

#### Card (`components/ui/card.tsx`)

**Purpose**: Content containers with consistent styling and hover effects
**Location**: `components/ui/card.tsx`
**Usage**:

```typescript
import Card from '../components/ui/card';

<Card className="p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

**Features**:
- Framer Motion hover animations
- Glassmorphism effects with backdrop blur
- Shadow depth changes on hover
- Responsive padding

**Props**:
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
}
```

---

#### Hero (`components/ui/hero.tsx`)

**Purpose**: Full-screen banner sections with animations
**Location**: `components/ui/hero.tsx`
**Usage**:

```typescript
import Hero from '../components/ui/hero';

<Hero
  title="Welcome to Excellence"
  subtitle="Education for the future"
  imageUrl="/images/hero-image.svg"
  imageAlt="School building"
>
  <Button>Learn More</Button>
</Hero>
```

**Features**:
- Gradient animated backgrounds
- Floating geometric elements
- Scale and parallax animations
- CTA button integration
- Responsive typography

**Props**:
```typescript
interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}
```

---

#### Navigation Menu (`components/ui/navigation-menu.tsx`)

**Purpose**: Desktop dropdown navigation menu
**Location**: `components/ui/navigation-menu.tsx`
**Usage**: Used internally by Header component

**Props**: Complex shadcn/ui interface - see source for details

---

#### Sheet (`components/ui/sheet.tsx`)

**Purpose**: Mobile overlay navigation menu
**Location**: `components/ui/sheet.tsx`
**Usage**: Used internally by Header component

**Props**: Complex shadcn/ui interface - see source for details

---

#### Form (`components/ui/form.tsx`)

**Purpose**: Form wrapper with validation integration
**Location**: `components/ui/form.tsx`
**Usage**: Wraps form inputs and handles submission

```typescript
import { Form } from '../components/ui/form';

<Form {...formMethods}>
  {/* Form inputs */}
</Form>
```

**Integration**: Works with React Hook Form and Zod

### Block Components

#### Contact Form (`components/blocks/contact-form.tsx`)

**Purpose**: Client-side contact form with validation
**Location**: `components/blocks/contact-form.tsx`
**Usage**:

```typescript
import ContactForm from '../components/blocks/contact-form';

<ContactForm />
```

**Features**:
- React Hook Form integration
- Zod schema validation
- Accessibility labels and ARIA attributes
- Client-side submission (console.log for now)

**Schema**:
```typescript
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message is required")
});
```

---

**ARCHIVED BLOCK COMPONENTS** - Removed in Scope Freeze per Article VII
- `DocumentTable` (was for `/mandatory-disclosure` route)
- `GalleryGrid` (was for `/campus-life/gallery` route)
- `EventCard` (was for `/campus-life/events` route)

These components were removed as part of constitutional compliance eliminating 12+ routes. Content consolidated into 4 core pages using existing UI components.

## Component Patterns

### Design Patterns Used

#### Animation Patterns

```typescript
// Scale hover effect (used in Card, Button)
whileHover={{
  scale: 1.05,
  transition: { duration: 0.15 }
}}

//Fade-in viewport animation
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

#### Responsive Patterns

```typescript
// Mobile-first responsive classes
className="text-sm md:text-base lg:text-lg"

// Grid layouts
className="grid md:grid-cols-2 lg:grid-cols-3"
```

#### Accessibility Patterns

```typescript
// ARIA labels
aria-label="Toggle mobile menu"

// Screen reader only text
className="sr-only"

// Focus management
className="focus:ring-2 focus:ring-blue-500"
```

### State Management

Components use local state for UI interactions:

- `useState` for mobile menu toggle
- `useState` for dropdown hover states
- React Hook Form for form state

### Data Flow

```
Parent Component → Block Component → UI Components
      ↓              ↓              ↓
   Data Props   → Props    →  Render
```

### Performance Considerations

- **Framer Motion**: `whileInView` prevents all animations running simultaneously
- **React.memo**: Planned for expensive components
- **Lazy loading**: Implemented for gallery images
- **Code splitting**: Automatic route-based splitting in Next.js

## Component Testing

### Testing Strategy

```typescript
// Component rendering test
describe('Hero Component', () => {
  it('renders title and subtitle', () => {
    render(<Hero title="Test" subtitle="Sub" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

// Accessibility testing
describe('ContactForm', () => {
  it('is accessible', async () => {
    const { container } = render(<ContactForm />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
```

### Coverage Goals

- Component rendering (100%)
- Props handling (100%)
- Accessibility (95%+)
- User interactions (90%+)

## Maintenance Guidelines

### Adding New Components

1. Follow TypeScript interface patterns
2. Include accessibility features
3. Add hover/animation states
4. Document props and usage
5. Test for responsiveness
6. Add to this documentation

### Updating Components

1. Maintain backward compatibility
2. Update TypeScript types if changing props
3. Test accessibility after changes
4. Update documentation
5. Consider performance impact
