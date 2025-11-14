# 🧩 Component Patterns Guide

This guide explains the component architecture and patterns used in the Doon International School website, helping developers build consistent, maintainable, and reusable components.

## 📊 Component Hierarchy

The codebase follows the **Atomic Design** methodology, organizing components by complexity and reusability:

```
📦 Components
├── 🧬 ui/              # Atoms - Basic building blocks
├── 🧬 blocks/          # Molecules - Functional combinations
├── 🏗️ sections/        # Organisms - Complex page sections
└── 📐 layout/          # Templates - Page-level layouts
```

### Atoms (ui/)
**Purpose**: Basic, reusable UI elements that can't be broken down further.

**Examples**:
- `Button` - Clickable actions
- `Input` - Form inputs
- `Card` - Content containers
- `Badge` - Status indicators

**Characteristics**:
- No business logic
- Highly reusable
- Consistent API across the app
- Styled with Tailwind utilities

### Molecules (blocks/)
**Purpose**: Combinations of atoms that form functional units.

**Examples**:
- `Hero` - Large banner with title and CTA
- `FeatureStrip` - Horizontal feature showcase
- `NewsTicker` - Scrolling news feed
- `ContactForm` - Complete form with validation

**Characteristics**:
- Combine multiple atoms
- Have specific functionality
- Can be used across different pages
- May include some business logic

### Organisms (sections/)
**Purpose**: Complex page sections that combine multiple molecules.

**Examples**:
- `AdmissionProcessSection` - Complete admissions workflow
- `CampusExperienceSection` - Facilities and campus info
- `MissionVisionSection` - About page content

**Characteristics**:
- Page-specific content
- Combine multiple molecules and atoms
- Include data fetching and state management
- May be conditionally rendered

### Templates (layout/)
**Purpose**: Page-level layouts that structure the entire application.

**Examples**:
- `Header` - Navigation and branding
- `UnifiedFooter` - Site footer with links
- `layout.tsx` - Root page structure

**Characteristics**:
- Define page structure
- Include global navigation
- Handle responsive behavior
- Manage global state

## 🏗️ Component Architecture Patterns

### 1. Functional Components with TypeScript

#### Basic Component Structure
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick
}: ButtonProps): JSX.Element {
  // Component logic here

  return (
    <button
      className={cn(buttonVariants({ variant, size }))}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

#### Key Patterns:
- **Interface definitions** for all props
- **Default values** for optional props
- **Return type annotation** (`JSX.Element`)
- **Destructuring** in function parameters
- **Conditional styling** with `cn()` utility

### 2. Variant Pattern with Class Variance Authority

#### Button Variants Example
```typescript
// lib/utils.ts or component file
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  // Base classes applied to all variants
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',

  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// Component usage
interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ variant, size, children, onClick }: ButtonProps): JSX.Element {
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

#### Benefits:
- **Type-safe variants** - TypeScript ensures valid combinations
- **Consistent styling** - All variants follow the same patterns
- **Easy extension** - Add new variants without breaking existing code
- **Performance** - Classes generated at build time

### 3. Server vs Client Components

#### Server Components (Default)
```typescript
// app/about/page.tsx
export default async function AboutPage(): Promise<JSX.Element> {
  // ✅ Runs on server
  const data = await getData();

  return (
    <div>
      {/* ✅ Server-rendered HTML */}
      <h1>{data.title}</h1>
      <AboutContent data={data} />
    </div>
  );
}
```

#### Client Components (When Needed)
```typescript
'use client';

// components/ui/modal.tsx
export default function Modal({ isOpen, onClose, children }: ModalProps): JSX.Element {
  // ✅ Client-side interactivity
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Modal content */}
      <div onClick={onClose} className="absolute inset-0 bg-black/50" />
      <div className="relative bg-white p-6 rounded-lg">
        {children}
      </div>
    </div>
  );
}
```

#### When to Use Client Components:
- **User interactions** (clicks, hovers, form inputs)
- **Browser APIs** (localStorage, geolocation)
- **State management** (useState, useReducer)
- **Effects** (useEffect, useLayoutEffect)

### 4. Data Fetching Patterns

#### Server-Side Data Fetching
```typescript
// app/blog/page.tsx
export default async function BlogPage(): Promise<JSX.Element> {
  // ✅ Fetch at build time or request time
  const posts = await getBlogPosts();

  return (
    <div>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}
```

#### Client-Side Data Fetching
```typescript
'use client';

// components/search.tsx
export default function Search(): JSX.Element {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      // ✅ Client-side API calls
      searchAPI(query).then(setResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {results.map(result => (
        <SearchResult key={result.id} result={result} />
      ))}
    </div>
  );
}
```

### 5. Error Handling Patterns

#### Error Boundaries
```typescript
'use client';

// components/error-boundary.tsx
export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ComponentType<{ error: Error }> },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ComponentType<{ error: Error }> }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to error reporting service
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error!} />;
    }

    return this.props.children;
  }
}
```

#### API Error Handling
```typescript
// lib/api.ts
export async function apiRequest<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    // Log error for debugging
    console.error('API request failed:', error);

    // Re-throw with user-friendly message
    throw new Error('Failed to load data. Please try again later.');
  }
}
```

## 🎨 Styling Patterns

### Tailwind CSS Best Practices

#### Utility-First Approach
```typescript
// ✅ Good: Composable utilities
<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
  Click me
</button>

// ❌ Avoid: Arbitrary values without design tokens
<button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-[8px] px-[16px] rounded-[6px]">
  Click me
</button>
```

#### Responsive Design
```typescript
// Mobile-first responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>

<div className="text-sm md:text-base lg:text-lg">
  {/* Small text on mobile, medium on tablet, large on desktop */}
</div>
```

#### Dark Mode Support
```typescript
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  {/* Automatically switches based on user preference */}
</div>
```

### CSS-in-JS Patterns (When Needed)

#### Styled Components Alternative
```typescript
// lib/styles.ts
import { styled } from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

// Usage
import { Card } from '../lib/styles';

export default function ProductCard() {
  return (
    <Card>
      <h3>Product Title</h3>
      <p>Product description</p>
    </Card>
  );
}
```

## 🔧 Advanced Patterns

### Custom Hooks
```typescript
// hooks/use-local-storage.ts
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue] as const;
}
```

### Render Props Pattern
```typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  renderEmpty?: () => React.ReactNode;
}

export default function List<T>({ items, renderItem, renderEmpty }: ListProps<T>) {
  if (items.length === 0) {
    return renderEmpty ? renderEmpty() : <div>No items found</div>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}

// Usage
<List
  items={products}
  renderItem={(product) => <ProductCard product={product} />}
  renderEmpty={() => <div>No products available</div>}
/>
```

### Compound Components Pattern
```typescript
// components/tabs/index.ts
export { default as Tabs } from './tabs';
export { default as TabList } from './tab-list';
export { default as Tab } from './tab';
export { default as TabPanel } from './tab-panel';

// components/tabs/tabs.tsx
import React, { createContext, useContext, useState } from 'react';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

export function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a Tabs component');
  }
  return context;
}

interface TabsProps {
  defaultTab?: string;
  children: React.ReactNode;
}

export default function Tabs({ defaultTab, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || '');

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}
```

## 📋 Component Checklist

Before creating a new component, ask:

### ✅ Functional Requirements
- [ ] What problem does this component solve?
- [ ] What are the acceptance criteria?
- [ ] How will it be used in the application?

### ✅ Technical Requirements
- [ ] Which hierarchy level (atom/molecule/organism/template)?
- [ ] Does it need client-side interactivity?
- [ ] What data does it need?
- [ ] How will it handle errors?

### ✅ Design Requirements
- [ ] Responsive design considerations?
- [ ] Accessibility requirements (ARIA labels, keyboard navigation)?
- [ ] Dark mode support needed?
- [ ] Animation requirements?

### ✅ Code Quality
- [ ] TypeScript interfaces defined?
- [ ] Proper error handling?
- [ ] Performance optimized?
- [ ] Tests written?

## 🚀 Best Practices Summary

### For Newcomers
1. **Start with atoms** - Build basic components first
2. **Follow existing patterns** - Look at similar components
3. **Use TypeScript** - Define interfaces for all props
4. **Test thoroughly** - Check responsive behavior and edge cases

### For Experts
1. **Consider performance** - Use Server Components when possible
2. **Plan for reusability** - Design with multiple use cases in mind
3. **Handle errors gracefully** - Implement proper error boundaries
4. **Document complex logic** - Add comments for non-obvious code

### General Guidelines
- **Single Responsibility** - Each component should do one thing well
- **Composition over Inheritance** - Combine simple components
- **Consistent Naming** - Use PascalCase for components, camelCase for props
- **Prop Validation** - Use TypeScript for compile-time validation
- **Accessibility First** - Ensure all components are accessible

---

This guide provides the foundation for building consistent, maintainable components. As the project evolves, these patterns may be refined based on new requirements and team feedback.</content>
