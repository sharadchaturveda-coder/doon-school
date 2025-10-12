# Component Architecture

## Overview

After completing a full modularization refactor, the Doon International School website now follows a **completely modular architecture** where every section across all pages has been extracted into individual, reusable components.

## Modular Structure

### Directory Organization

```
components/
├── layout/                    # Layout components (header, footer)
├── ui/                       # Base UI atoms (buttons, cards, etc.)
├── sections/                 # 🎯 **FULLY MODULARIZED: 23 Components Across 6 Pages**
│   ├── home/
│   │   └── VisualHighlights.tsx          # Homepage gallery collage
│   ├── about/
│   │   ├── MissionVisionSection.tsx      # Mission/vision cards
│   │   ├── CoreValuesSection.tsx         # Values grid w/ animations
│   │   └── AboutCTA.tsx                  # "Learn more" call-to-action
│   ├── gallery/
│   │   ├── GalleryCategories.tsx         # Photo gallery grids
│   │   ├── VideoGallerySection.tsx       # Video placeholder cards
│   │   ├── EventsGallery.tsx             # Events showcase
│   │   └── GalleryCTA.tsx                # Gallery page CTA
│   ├── updates/
│   │   ├── FeaturedNewsSection.tsx       # Featured news cards
│   │   ├── AllNewsSection.tsx            # Full news archive
│   │   ├── EventsSection.tsx             # Events display
│   │   ├── NewsletterSignup.tsx          # Email subscription form
│   │   └── UpdatesCTA.tsx                # Updates page CTA
│   ├── admissions/
│   │   ├── AdmissionProcessSection.tsx   # 6-step admission process
│   │   ├── RequiredDocumentsSection.tsx  # Document requirements
│   │   ├── FacilitiesShowcaseSection.tsx # School facilities
│   │   └── AdmissionsCTA.tsx             # Admissions CTA
│   └── contact/
│       ├── ContactInfoCards.tsx          # Contact details cards
│       ├── TransportationInfo.tsx        # Transport services info
│       └── ContactFormSection.tsx        # Contact form wrapper
└── blocks/                    # Legacy blocks (contact-form only)
```

## Component Categories

### 1. Sections (🏗️ **NEW - Fully Modularized**)

**Location**: `components/sections/[page]/[Component].tsx`

**Purpose**: Page-specific content sections that form the complete page structure

**Characteristics**:
- Self-contained sections with their own styling
- Include all content, animations, and interactions
- Organized by page for easy maintenance
- Can be reused across different pages if needed

**Examples**:
```tsx
// components/sections/about/MissionVisionSection.tsx
export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Complete section implementation */}
    </section>
  );
}
```

### 2. Layout Components

**Location**: `components/layout/`

**Purpose**: Structural elements used across multiple pages

**Examples**:
- `Header` - Navigation and branding
- `Footer` - Site footer with links

### 3. UI Components (Atoms)

**Location**: `components/ui/`

**Purpose**: Reusable atomic design system components

**Examples**:
- `Button` - Consistent button styles
- `Card` - Card container component
- `Hero` - Hero section template

### 4. Legacy Blocks (📉 **DEPRECATED**)

**Location**: `components/blocks/`

**Purpose**: Older composite components (being phased out)

**Remaining**: `contact-form.tsx` (now used within ContactFormSection)

## Page Structure Patterns

### Before Modularization (Monolithic)
```tsx
// app/about/page.tsx (OLD - ~300 lines)
export default function About() {
  return (
    <>
      {/* Hero Section - 50+ lines */}
      <section>...</section>

      {/* Mission & Vision - 40+ lines */}
      <section>...</section>

      {/* Core Values - 30+ lines */}
      <section>...</section>

      {/* CTA Section - 20+ lines */}
      <section>...</section>
    </>
  );
}
```

### After Modularization (Clean)
```tsx
// app/about/page.tsx (NEW - ~50 lines)
import MissionVisionSection from '../../components/sections/about/MissionVisionSection';
import CoreValuesSection from '../../components/sections/about/CoreValuesSection';
import AboutCTA from '../../components/sections/about/AboutCTA';

export default function About() {
  return (
    <>
      {/* Hero - kept inline as unique per page */}
      <section className="relative py-24 overflow-hidden">
        {/* Custom hero content */}
      </section>

      {/* All sections now modular */}
      <MissionVisionSection />
      <CoreValuesSection />
      <AboutCTA />
    </>
  );
}
```

## Component Design Patterns

### Props Interface Pattern
```tsx
interface ComponentProps {
  title?: string;
  data?: SomeDataType;
  children?: React.ReactNode;
}

export default function Component({ title, data, children }: ComponentProps) {
  // Component logic
}
```

### Data-Driven Pattern
```tsx
const sectionData = [
  { title: "Item 1", desc: "Description 1", icon: "🎯" },
  { title: "Item 2", desc: "Description 2", icon: "⚡" },
];

export default function DataDrivenSection() {
  return (
    <div className="grid gap-4">
      {sectionData.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <span className="text-2xl">{item.icon}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Animation Integration Pattern
```tsx
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function AnimatedSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.div key={index} variants={itemVariants}>
          {/* Content */}
        </motion.div>
      ))}
    </motion.section>
  );
}
```

## Benefits of Modular Architecture

### 1. **Maintainability** 🛠️
- Each section is independently manageable
- Changes to one section don't affect others
- Clear responsibility boundaries

### 2. **Reusability** 🔄
- Sections can be shared between pages
- Consistent design system across site
- Easy A/B testing of different layouts

### 3. **Developer Experience** 👨‍💻
- Faster locating and editing specific content
- Clear file organization by page/function
- Reduced cognitive load when working

### 4. **Performance** ⚡
- Automatic code splitting by route
- Smaller bundle sizes for individual pages
- Tree shaking optimizations possible

### 5. **Scalability** 📈
- Easy to add new sections or pages
- Parallel development by multiple developers
- Clear patterns for future components

## Migration Strategy

### Completed ✅
- **Phase 1**: Established modular directory structure
- **Phase 2**: Extracted 23 sections across 6 pages
- **Phase 3**: Updated all page imports
- **Phase 4**: Verified functionality preservation

### Current State 📊
- **23 modular components** created
- **6 pages** fully refactored
- **100% functionality** maintained
- **Organized structure** implemented

### Next Steps 🎯
- Monitor for any edge cases
- Add component documentation strings
- Consider shared sections across pages
- Performance monitoring and optimization

## Component Quality Standards

### Code Quality
- **TypeScript**: Full type safety
- **Error Boundaries**: Graceful error handling
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Optimized renders and animations

### Naming Conventions
- **Files**: PascalCase (`MissionVisionSection.tsx`)
- **Components**: PascalCase (`MissionVisionSection`)
- **Folders**: lowercase (`about/`, `gallery/`)

### Import Organization
```tsx
// 1. React imports
import React from 'react';

// 2. External libraries
import { motion } from 'framer-motion';

// 3. UI components
import Card from '../../ui/card';

// 4. Relative imports (other components)
import OtherComponent from './OtherComponent';
```

## Testing Strategy

### Component Testing
```tsx
// Example test pattern
describe('MissionVisionSection', () => {
  it('renders mission and vision cards', () => {
    render(<MissionVisionSection />);
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    expect(screen.getByText('Our Vision')).toBeInTheDocument();
  });

  it('applies correct animations on scroll', () => {
    // Animation testing
  });
});
```

This fully modularized architecture provides a solid foundation for maintainable, scalable React development at the Doon International School website.
