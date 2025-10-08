# Design System Documentation

## Overview

The Doon International School website uses a comprehensive design system built on Tailwind CSS with custom design tokens. This system ensures consistency across all components and pages while providing flexibility for different content needs.

## Design Tokens

### Color Palette

The design uses a sophisticated blue and orange color scheme with comprehensive variants:

#### Primary Colors (Blue)
```json
{
  "primary": {
    "50": "#eff6ff",   // Lightest - backgrounds
    "600": "#004A99",  // Brand primary
    "700": "#004A99",  // Darker for text
    "900": "#1e3a8a"   // Darkest - text
  }
}
```

#### Secondary Colors (Orange)
```json
{
  "secondary": {
    "400": "#F7941D",  // Main secondary
    "50": "#fefce8",   // Light background
    "500": "#F7941D"   // Brand secondary
  }
}
```

#### Neutral Colors
```json
{
  "neutral": {
    "50": "#f8fafc",   // Page backgrounds
    "600": "#475569",  // Body text
    "900": "#000000"   // Dark text
  }
}
```

### Usage Guidelines

- **Primary**: Buttons, links, headings, brand elements
- **Secondary**: Accents, highlights, call-to-action elements
- **Success/Error**: Reserved for future form validation states

## Typography

### Font Families

- **Heading**: Helvetica/Arial (sans-serif) - Bold, modern, authoritative
- **Body**: Futura/Arial (sans-serif) - Clean, readable, contemporary

### Typography Scale

Following a systematic scale for consistency:

```css
/* Heading scale */
--font-heading-1: 3rem    (48px) /* xl display text */
--font-heading-2: 2.25rem (36px) /* large headings */
--font-heading-3: 1.875rem (30px) /* medium headings */
--font-heading-4: 1.5rem   (24px) /* small headings */
--font-heading-5: 1.25rem (20px) /* component headers */

/* Body text scale */
--font-body-lg: 1.125rem (18px) /* lead text */
--font-body-base: 1rem   (16px) /* regular body */
--font-body-sm: 0.875rem (14px) /* secondary text */
--font-body-xs: 0.75rem   (12px) /* captions */
```

### Text Colors

```css
--text-primary: var(--neutral-900)     /* Headings, important text */
--text-secondary: var(--neutral-600)   /* Body text */
--text-muted: var(--neutral-500)       /* Secondary information */
--text-inverse: #ffffff                /* Text on dark backgrounds */
```

## Spacing System

### Spacing Scale

Based on a 4px baseline for consistency:

```css
--space-px: 1px
--space-1: 0.25rem (4px)
--space-2: 0.5rem  (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem    (16px)
--space-5: 1.25rem (20px)
--space-6: 1.5rem  (24px)
--space-8: 2rem    (32px)
--space-10: 2.5rem (40px)
--space-12: 3rem   (48px)
--space-16: 4rem   (64px)
--space-20: 5rem   (80px)
--space-24: 6rem   (96px)
```

### Usage Patterns

```css
/* Component spacing */
--component-padding: var(--space-6)     /* Cards, sections */
--component-margin: var(--space-8)       /* Between components */

/* Layout spacing */
--container-padding: var(--space-4)      /* Desktop padding */
--section-spacing: var(--space-16)       /* Section vertical space */
--grid-gap: var(--space-8)              /* Grid item spacing */
```

## Component Styles

### Buttons

#### Variants
- **Primary**: Solid blue with white text
- **Secondary**: Solid orange with white text
- **Outline**: Transparent with blue border
- **Ghost**: Minimal button with color on hover

#### Sizes
- **Small**: Compact buttons (32px height)
- **Medium**: Standard buttons (40px height)
- **Large**: Prominent buttons (48px height)

#### States
- **Default**: Normal appearance
- **Hover**: Slight scale (1.02) + color shift
- **Active**: Pressed state animation
- **Disabled**: Reduced opacity, no interactions

### Cards

#### Styles
- **Default**: White background with subtle shadow
- **Glass**: Semi-transparent with backdrop blur
- **Gradient**: Colorful background with overlay

#### Elevation System

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)   /* Subtle */
--shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1)  /* Default */
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1) /* Lifted */
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1) /* Floating */
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1) /* Prominent */
```

### Forms

#### Input Fields
- **Default**: Clean white background
- **Focus**: Blue outline with smooth transition
- **Error**: Pink outline with error message
- **Disabled**: Grayed out with reduced opacity

#### Validation States
- **Valid**: Green checkmark
- **Invalid**: Red cross with error text
- **Required**: Asterisk indicator

## Animations & Interactions

### Animation Principles

- **Purposeful**: Every animation serves a UX purpose
- **Performant**: Using transform and opacity where possible
- **Accessible**: Respect user's reduced motion preferences
- **Smooth**: Quartic ease curves for natural feel

### Micro-interactions

#### Hover States

```typescript
// Button hover
whileHover={{
  scale: 1.02,
  transition: { duration: 0.15, ease: "easeOut" }
}}

// Card hover
whileHover={{
  scale: 1.05,
  y: -8,
  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
  transition: { duration: 0.2, ease: "easeOut" }
}}
```

#### Page Transitions

```typescript
// Fade-in animation
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
```

#### Viewport Animations

```typescript
// Element enters viewport
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-50px" }}
transition={{ duration: 0.4, ease: "easeOut" }}
```

### Special Effects

#### Hero Section Animations

- **Gradient shifts**: Slow color transitions (8-12 seconds)
- **Floating elements**: Subtle bobbing motion (3-6 seconds)
- **Text scaling**: Scale-in effect on load (0.8 seconds)

#### Parallax Effects

- **Background images**: Subtle scroll-based movement
- **Layered content**: Different movement speeds
- **Geometric shapes**: Independent floating elements

## Layout Patterns

### Container System

```css
--container-sm: 640px
--container-md: 768px
--container-lg: 1024px
--container-xl: 1280px
--container-2xl: 1536px
```

### Grid Systems

#### Responsive Grids

```css
/* Simple two-column grid */
.grid-cols-1 md:grid-cols-2

/* Complex three-column grid */
.grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Sidebar layout */
.grid-cols-1 lg:grid-cols-4
├── Large content (span 3)
└── Sidebar content (span 1)
```

#### Flexible Layouts

```css
/* Flexible width grid */
.grid-cols-[repeat(auto-fit,minmax(300px,1fr))]

/* Masonry-style */
.grid-cols-1 md:grid-cols-2 gap-6
```

## Responsive Design

### Breakpoints

Following Tailwind's mobile-first approach:

```css
--mobile: 0px      /* Default (no prefix) */
--tablet: 768px    /* md: prefix */
--desktop: 1024px  /* lg: prefix */
--wide: 1280px     /* xl: prefix */
--ultra-wide: 1536px /* 2xl: prefix */
```

### Responsive Patterns

#### Text Scaling
```css
text-2xl md:text-3xl lg:text-4xl /* Scale up with screen size */
```

#### Component Layout
```css
flex-col md:flex-row /* Stack on mobile, row on desktop */
```

#### Visibility Control
```css
hidden md:block /* Hide on mobile, show on desktop */
```

## Theme Configuration

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          600: '#004A99',
          // ... other primary colors
        },
        secondary: {
          400: '#F7941D',
          // ... other secondary colors
        }
      },
      fontFamily: {
        heading: ['Helvetica', 'Arial', 'sans-serif'],
        body: ['Futura', 'Arial', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite'
      }
    }
  }
}
```

## Accessibility Guidelines

### Color Contrast

- **WCAG AA**: Minimum 4.5:1 for normal text
- **WCAG AAA**: Minimum 7:1 for normal text
- **Large text**: Minimum 3:1 ratio

### Focus Management

- **Visible focus indicators**: Blue outline on focus
- **Logical tab order**: Follow document flow
- **Keyboard navigation**: All interactive elements accessible

### Motion Considerations

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Implementation Guidelines

### Using the Design System

#### CSS Classes
```html
<!-- Correct usage -->
<button class="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
  Primary Button
</button>

<!-- Avoid custom values -->
<button class="bg-blue-600"> <!-- Don't use arbitrary colors -->
```

#### Component Usage
```typescript
// Correct usage
<Button variant="primary" size="md">Save</Button>

// Avoid direct styling
<Button className="bg-red-500"> <!-- Don't override colors -->
```

### Adding to the System

1. **Consolidate usage**: Check if pattern already exists
2. **Document decision**: Add to this documentation
3. **Test accessibility**: Ensure WCAG compliance
4. **Test responsiveness**: Works on all screen sizes
5. **Performance**: Ensure no performance impact

### Maintenance

- **Regular audit**: Review design token usage
- **User testing**: Validate with real users
- **Performance monitoring**: Track impact of animations
- **Accessibility review**: Annual WCAG audit

## Image Optimization Guidelines

### Format Strategy for Web Images

For optimal web performance, all images added to the codebase must follow this format hierarchy:

#### Modern Browsers (AVIF Primary)
- **Format**: AVIF (AOMedia Video 1)
- **Quality Setting**: 80% quality with effort level 6
- **Use Case**: Highest compression with superior image quality

#### Fallback Support (WebP Secondary)
- **Format**: WebP (Web Picture format)
- **Quality Setting**: 80% quality with effort level 6
- **Use Case**: Widespread browser support for older browsers

#### Legacy Support (Optional)
- **Format**: Keep original (JPG/PNG) if needed for extreme legacy compatibility
- **Use Case**: Only when AVIF/WebP conversion significantly degrades quality

### Implementation Process

#### Automated Conversion
Use the `convert.js` script for batch processing:
```bash
node convert.js
```

#### Manual Conversion (Single Images)
```javascript
const sharp = require('sharp');

// Convert to AVIF
await sharp(inputBuffer)
  .avif({ quality: 80, effort: 6 })
  .toFile(outputPath + '.avif');

// Convert to WebP
await sharp(inputBuffer)
  .webp({ quality: 80, effort: 6 })
  .toFile(outputPath + '.webp');
```

### File Naming Convention

```
Original: DSC05341.JPG
AVIF:    DSC05341.avif
WebP:    DSC05341.webp
```

### HTML Implementation

Use modern `<picture>` element with AVIF/WebP fallback:

```html
<picture>
  <source srcset="images/DSC05341.avif" type="image/avif">
  <source srcset="images/DSC05341.webp" type="image/webp">
  <img src="images/DSC05341.JPG" alt="Description" loading="lazy">
</picture>
```

### Size Thresholds

- **Large Images** (>1MB): Always convert all 3 formats (AVIF/WebP/original)
- **Medium Images** (500KB-1MB): Convert to AVIF/WebP, keep original optional
- **Small Images** (<500KB): Consider AVIF only if quality allows

### Quality Assurance

#### Before Committing Images:
- [ ] Verify AVIF file size is smaller than original
- [ ] Check WebP provides fallback compatibility
- [ ] Ensure visual quality is maintained (no artifacts)
- [ ] Test loading in multiple browsers (Chrome, Firefox, Safari, Edge)

#### Performance Validation:
- [ ] Lighthouse performance score remains above 90
- [ ] Image format contributes to good Core Web Vitals
- [ ] Page load time not adversely affected

### Technical Details

#### Sharp Library Configuration
- **Dependencies**: `sharp` package installed in `package.json`
- **Quality**: 80% balancing size vs. quality
- **Effort**: Level 6 for optimal compression time vs. size trade-off

#### Browser Support (as of 2024)
- **AVIF**: Chrome 85+, Firefox 93+, Safari 16.4+
- **WebP**: Chrome 32+, Firefox 65+, Safari 14+
- **Fallback Strategy**: Progressive enhancement (modern first, graceful degradation)

### Exceptions

Convert only when:
- Image quality remains visually acceptable after compression
- File size reduction is at least 30% smaller
- No progressive features or animations that require GIF format

For specialized images (diagrams, charts) test compression carefully to avoid text readability issues.
