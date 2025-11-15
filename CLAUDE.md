# CLAUDE.md - AI Assistant Guide for Municipal Library Project

**Last Updated:** 2025-11-15
**Version:** 3.0.0
**Project:** Biblioteka Narol (Municipal Library Narol)

## Table of Contents
- [Quick Reference](#quick-reference)
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Architecture & Patterns](#architecture--patterns)
- [Directory Structure](#directory-structure)
- [Development Workflows](#development-workflows)
- [Code Conventions](#code-conventions)
- [Common Tasks](#common-tasks)
- [Important Notes & Gotchas](#important-notes--gotchas)

---

## Quick Reference

### Essential Commands
```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint
npm run type-check       # TypeScript type checking (no output files)
```

### Path Aliases
```typescript
@/*                      // Root directory
@/components/*           // Components directory
@/lib/*                  // Library utilities
@/types/*                // TypeScript types
@/hooks/*                // Custom React hooks
```

### Key Files to Know
- `app/layout.tsx` - Root layout with metadata, providers, navbar, footer
- `app/globals.css` - Global styles, theme variables, animations
- `lib/utils.ts` - Utility functions (cn, formatDate, formatTime)
- `types/index.ts` - All TypeScript interfaces
- `tailwind.config.js` - Theme colors, animations, dark mode config
- `tsconfig.json` - TypeScript compiler options and path aliases

---

## Project Overview

### What This Project Is
A modern, accessible municipal library website built with Next.js 14 App Router. The site features:
- **14 pages** covering library services, events, news, catalog, and information
- **Polish language** throughout (pl-PL locale)
- **WCAG 2.1 AA+ accessibility** with toolbar for theme/font/contrast adjustments
- **Responsive design** with mobile-first approach
- **Animated UI** using Framer Motion
- **Dark mode** support via next-themes
- **Professional green theme** (#4caf50) with gradient accents

### Target Audience
- Library patrons (adults and children)
- Accessibility-focused users (screen readers, keyboard navigation)
- Mobile and desktop users

### Core Features
1. Online catalog integration
2. News and events system
3. Children's programs showcase
4. Contact forms (handled by Express backend)
5. Accessibility toolbar (theme, font size, contrast)
6. Opening hours display
7. Service descriptions
8. Photo gallery
9. Legal pages (GDPR, accessibility declaration, terms)

---

## Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.0.4 | React framework with App Router |
| **React** | 18.2.0 | UI library |
| **TypeScript** | 5.3.3 | Type safety |
| **Tailwind CSS** | 3.3.6 | Utility-first styling |
| **Framer Motion** | 10.16.16 | Animations |
| **next-themes** | 0.2.1 | Dark mode management |
| **lucide-react** | 0.294.0 | Icon library |

### UI Components
- **Radix UI** - Headless component primitives (accordion, dialog, dropdown, etc.)
- **shadcn/ui** - Pre-styled components built on Radix UI
- **class-variance-authority (CVA)** - Component variant management
- **tailwind-merge** + **clsx** - Conditional class merging

### Forms & Validation
- **react-hook-form** (7.48.2) - Form state management
- **zod** (3.22.4) - Schema validation
- **@hookform/resolvers** (3.3.2) - Integration layer

### Backend
- **Express.js** (server/index.js) - Form handling API
  - `POST /api/contact` - Contact form submission
  - `POST /api/newsletter` - Newsletter signup
  - `GET /api/health` - Health check

---

## Architecture & Patterns

### 1. Next.js App Router Architecture

**All pages use App Router** (`app/` directory, not Pages Router).

**File Conventions:**
```
app/
├── layout.tsx          # Root layout (applies to all pages)
├── page.tsx            # Route page component
├── globals.css         # Global styles
└── [route]/
    └── page.tsx        # Nested route
```

**Key Characteristics:**
- **Server Components by default** - Only add `'use client'` when needed
- **All current pages use `'use client'`** due to interactivity (Framer Motion, useState)
- **Metadata defined server-side** - Use Next.js `Metadata` export
- **Layouts wrap pages** - Root layout includes Navbar, Footer, ThemeProvider

### 2. Component Architecture

**Component Hierarchy:**
```
RootLayout (app/layout.tsx)
├── ThemeProvider (components/theme-provider.tsx)
├── AccessibilityToolbar (components/layout/accessibility-toolbar.tsx)
├── Navbar (components/layout/navbar.tsx)
├── main#main-content
│   └── {children} (page components)
└── Footer (components/layout/footer.tsx)
```

**Component Types:**

1. **Layout Components** (`components/layout/`)
   - Persistent across pages
   - Navbar, Footer, AccessibilityToolbar
   - Exported via barrel export (`index.ts`)

2. **UI Components** (`components/ui/`)
   - shadcn/ui base components
   - Radix UI wrappers with custom styling
   - Use CVA for variants (Button, Badge, Card)
   - ForwardRef pattern for DOM access

3. **Library Components** (`components/library/`)
   - Custom feature components
   - FeatureBox, NewsCard, StatCard, etc.
   - Domain-specific to library functionality

4. **Theme Provider** (`components/theme-provider.tsx`)
   - Wraps next-themes provider
   - Client component

### 3. Styling System

**Tailwind CSS Configuration:**
```javascript
// tailwind.config.js
{
  darkMode: ["class"],           // Class-based dark mode
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "hsl(var(--primary))", ... },
        secondary: { DEFAULT: "hsl(var(--secondary))", ... },
        // ... CSS variable-based colors
      },
      keyframes: {
        "accordion-down": { /* ... */ },
        "fade-in": { /* ... */ },
        "slide-in": { /* ... */ },
        "pulse-glow": { /* ... */ },
        "shimmer": { /* ... */ }
      }
    }
  }
}
```

**Theme Colors (Green Palette):**
```css
/* Light mode */
--primary: 142 76% 36%;           /* #4caf50 - main green */
--secondary: 142 40% 60%;         /* lighter green */
--accent: 142 60% 92%;            /* light green highlight */

/* Dark mode */
.dark {
  --primary: 142 70% 45%;
  --background: 142 20% 10%;
  /* ... adjusted colors */
}

/* High contrast mode */
.high-contrast {
  --background: 0 0% 100%;
  --foreground: 0 0% 0%;
  --primary: 142 100% 25%;
}
```

**Utility Patterns:**
```typescript
// Use cn() for conditional classes
import { cn } from '@/lib/utils'

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className // allow prop overrides
)} />
```

### 4. Animation Patterns

**Framer Motion Standard Pattern:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, delay: 0.1 }}
>
  {/* Content */}
</motion.div>
```

**Viewport-triggered Animation:**
```typescript
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Triggers when section enters viewport */}
</motion.section>
```

**Staggered List Animation:**
```typescript
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 * index }}
  >
    {/* Item content */}
  </motion.div>
))}
```

**Accessibility Consideration:**
All animations respect `prefers-reduced-motion` media query (configured in globals.css).

### 5. State Management

**No external state library** - Using React built-in hooks only.

**Patterns Used:**

1. **Local State (useState)**
```typescript
const [isOpen, setIsOpen] = useState(false)
const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('all')
```

2. **Side Effects (useEffect)**
```typescript
useEffect(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) setTheme(savedTheme)
}, [])
```

3. **Theme State (useTheme from next-themes)**
```typescript
const { theme, setTheme } = useTheme()
```

4. **localStorage Persistence**
```typescript
// Save
localStorage.setItem('fontSize', fontSize)

// Load
const saved = localStorage.getItem('fontSize') as FontSize
```

**Data Strategy:**
- **Static data** embedded in components (no API calls)
- **Filtering** done client-side with `filter()` and `map()`
- **Forms** validated with react-hook-form + zod
- **Future API integration** ready via Express backend (`server/index.js`)

### 6. TypeScript Patterns

**Interface Naming:**
```typescript
// Component props
interface ComponentNameProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  description?: string
}

// Domain models (no suffix)
interface News {
  id: string
  title: string
  // ...
}
```

**Type Imports:**
```typescript
// Prefer type-only imports for types
import type { News, Event } from '@/types'

// Regular imports for values
import { cn } from '@/lib/utils'
```

**Union Types for Categories:**
```typescript
type NewsCategory = 'all' | 'wydarzenia' | 'nowosci' | 'ogloszenia' | 'konkursy'
type FontSize = 'normal' | 'large' | 'extra-large'
```

---

## Directory Structure

```
municipal-library-project/
├── app/                           # Next.js 14 App Router
│   ├── globals.css                # Global styles, theme variables
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Homepage (/)
│   ├── aktualnosci/               # News page (/aktualnosci)
│   ├── katalog/                   # Catalog page (/katalog)
│   ├── o-bibliotece/              # About page (/o-bibliotece)
│   ├── godziny-otwarcia/          # Hours page (/godziny-otwarcia)
│   ├── dla-dzieci/                # Children's page (/dla-dzieci)
│   ├── wypozyczalnia/             # Lending page (/wypozyczalnia)
│   ├── wydarzenia/                # Events page (/wydarzenia)
│   ├── uslugi/                    # Services page (/uslugi)
│   ├── kontakt/                   # Contact page (/kontakt)
│   ├── deklaracja-dostepnosci/    # Accessibility declaration
│   ├── regulamin/                 # Terms of service
│   ├── rodo/                      # GDPR privacy policy
│   └── galeria/                   # Photo gallery
│
├── components/
│   ├── layout/                    # Layout components
│   │   ├── navbar.tsx             # Main navigation
│   │   ├── footer.tsx             # Site footer
│   │   ├── accessibility-toolbar.tsx  # Theme/font/contrast controls
│   │   └── index.ts               # Barrel export
│   │
│   ├── ui/                        # shadcn/ui base components
│   │   ├── button.tsx             # Button with CVA variants
│   │   ├── card.tsx               # Card with subcomponents
│   │   ├── badge.tsx              # Badge with variants
│   │   ├── dropdown-menu.tsx      # Radix UI dropdown wrapper
│   │   └── separator.tsx          # Decorative separator
│   │
│   ├── library/                   # Custom library components
│   │   ├── feature-box.tsx        # Animated feature display
│   │   ├── news-card.tsx          # News item card
│   │   └── stat-card.tsx          # Statistics card
│   │
│   └── theme-provider.tsx         # next-themes provider wrapper
│
├── lib/
│   └── utils.ts                   # Utility functions
│       ├── cn()                   # Class name merger (clsx + twMerge)
│       ├── formatDate()           # Date formatter (pl-PL)
│       └── formatTime()           # Time formatter (pl-PL)
│
├── types/
│   └── index.ts                   # TypeScript interfaces
│       ├── News                   # News item interface
│       ├── Event                  # Event interface
│       ├── Service                # Service interface
│       ├── OpeningHours           # Hours interface
│       ├── Statistics             # Stats interface
│       ├── ContactInfo            # Contact interface
│       └── LibraryMetadata        # Library info interface
│
├── server/
│   └── index.js                   # Express.js backend
│       ├── POST /api/contact      # Contact form handler
│       ├── POST /api/newsletter   # Newsletter handler
│       └── GET /api/health        # Health check
│
├── public/
│   ├── heroBackground/            # Hero section images
│   │   └── biblioteka[1-4].jpg   # Background images
│   └── images/                    # Placeholder images
│
├── tailwind.config.js             # Tailwind theme & plugins
├── tsconfig.json                  # TypeScript config
├── next.config.js                 # Next.js config
├── postcss.config.js              # PostCSS with Tailwind
├── package.json                   # Dependencies & scripts
└── README.md                      # Project documentation
```

---

## Development Workflows

### Adding a New Page

1. **Create page file:**
```bash
# Example: Adding /bibliotekarz page
mkdir -p app/bibliotekarz
touch app/bibliotekarz/page.tsx
```

2. **Page template:**
```typescript
'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IconName } from 'lucide-react'

export default function PageName() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-16"
      >
        <Badge className="mb-6 text-base px-6 py-2">
          <IconName className="mr-2 h-5 w-5" />
          Badge Text
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Page Title
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Page description
        </p>
      </motion.div>

      {/* Content Sections */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards or content */}
        </div>
      </motion.section>
    </div>
  )
}
```

3. **Add to navigation (if needed):**
```typescript
// components/layout/navbar.tsx
const navItems = [
  // ... existing items
  { href: '/bibliotekarz', label: 'Bibliotekarz' }
]
```

4. **Add to footer (if needed):**
```typescript
// components/layout/footer.tsx
// Update relevant footer column
```

### Adding a New Component

1. **UI Component (shadcn/ui style):**
```bash
# Create in components/ui/
touch components/ui/new-component.tsx
```

```typescript
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const componentVariants = cva(
  "base-classes-here",
  {
    variants: {
      variant: {
        default: "default-classes",
        secondary: "secondary-classes",
      },
      size: {
        default: "default-size-classes",
        sm: "small-size-classes",
        lg: "large-size-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // Additional props
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Component.displayName = "Component"

export { Component, componentVariants }
```

2. **Library Component (feature-specific):**
```bash
touch components/library/feature-name.tsx
```

```typescript
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

interface FeatureNameProps {
  title: string
  description: string
  className?: string
}

export function FeatureName({ title, description, className }: FeatureNameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      <Card>
        <CardContent>
          <h3>{title}</h3>
          <p>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
```

### Adding a New Type

```typescript
// types/index.ts

export interface NewType {
  id: string
  name: string
  description: string
  createdAt: string
  // ... fields
}

// Use in components
import type { NewType } from '@/types'
```

### Styling Workflow

1. **Use existing Tailwind classes** (preferred)
2. **Add custom classes to globals.css** if needed:
```css
@layer components {
  .custom-class {
    @apply flex items-center gap-2;
  }
}
```

3. **Extend theme in tailwind.config.js** for design tokens:
```javascript
theme: {
  extend: {
    colors: {
      'new-color': 'hsl(var(--new-color))',
    }
  }
}
```

4. **Define CSS variable in globals.css:**
```css
:root {
  --new-color: 200 100% 50%;
}

.dark {
  --new-color: 200 80% 60%;
}
```

### Testing Changes

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Build (catches production errors)
npm run build

# Run locally
npm run dev
```

---

## Code Conventions

### File Naming
- **Components:** PascalCase.tsx (`Button.tsx`, `NewsCard.tsx`)
- **Utilities:** camelCase.ts (`utils.ts`, `formatDate.ts`)
- **Config files:** kebab-case.js (`tailwind.config.js`, `next.config.js`)
- **Pages:** page.tsx (Next.js convention)
- **Layouts:** layout.tsx (Next.js convention)

### Component Naming
- **Components:** PascalCase (`Button`, `NewsCard`)
- **Props interfaces:** `ComponentNameProps`
- **Variant functions:** `componentVariants`

### Variable Naming
- **Constants:** SCREAMING_SNAKE_CASE for true constants
```typescript
const MAX_ITEMS = 100
```
- **Variables:** camelCase
```typescript
const userName = "Jan Kowalski"
const isActive = true
```

### Function Naming
- **camelCase** for functions
```typescript
function formatDate(date: string): string { }
function handleClick() { }
```

### CSS Class Naming
- **Use Tailwind utility classes** (no custom class names unless necessary)
- **Custom classes:** kebab-case in globals.css
```css
.custom-gradient-border { }
```

### Import Order
```typescript
// 1. React
import { useState, useEffect } from 'react'

// 2. Next.js
import type { Metadata } from 'next'

// 3. Third-party libraries
import { motion } from 'framer-motion'
import { BookOpen, Calendar } from 'lucide-react'

// 4. UI components
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

// 5. Layout components
import { Navbar, Footer } from '@/components/layout'

// 6. Library components
import { NewsCard } from '@/components/library/news-card'

// 7. Utilities
import { cn, formatDate } from '@/lib/utils'

// 8. Types
import type { News, Event } from '@/types'
```

### TypeScript Style

**DO:**
```typescript
// Use interface for objects
interface User {
  name: string
  email: string
}

// Use type for unions, primitives
type Status = 'pending' | 'approved' | 'rejected'

// Optional properties with ?
interface Config {
  required: string
  optional?: number
}

// Extend HTML attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

// Type imports
import type { News } from '@/types'
```

**DON'T:**
```typescript
// Don't use any
const data: any = {}  // ❌

// Don't use type for object shapes (prefer interface)
type User = {  // ❌ Use interface instead
  name: string
}

// Don't ignore TypeScript errors
// @ts-ignore  // ❌
```

### React/Next.js Style

**DO:**
```typescript
// Use 'use client' only when needed
'use client'  // For useState, useEffect, event handlers, Framer Motion

// Prefer arrow functions for components
export default function ComponentName() { }

// Use destructuring for props
function Component({ title, description }: ComponentProps) { }

// Provide display name for forwardRef
Component.displayName = "Component"

// Use early returns
if (!data) return null
```

**DON'T:**
```typescript
// Don't forget 'use client' for client features
// Missing 'use client' when using useState/useEffect  ❌

// Don't use default exports for non-page components
export default Button  // ❌ Use named export

// Don't forget keys in lists
items.map(item => <div>{item}</div>)  // ❌
items.map(item => <div key={item.id}>{item}</div>)  // ✅
```

### Accessibility Conventions

**ALWAYS:**
- Use semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`)
- Provide `alt` text for images (or `aria-hidden="true"` if decorative)
- Use `aria-label` for icon-only buttons
- Ensure keyboard navigation works
- Test with screen readers
- Respect `prefers-reduced-motion`
- Maintain color contrast ratios (4.5:1 minimum)
- Use proper heading hierarchy (h1 → h2 → h3)

**Example:**
```typescript
// Good accessibility
<button aria-label="Zamknij menu" onClick={handleClose}>
  <X className="h-6 w-6" aria-hidden="true" />
</button>

// Navigation with aria-label
<nav aria-label="Nawigacja główna">
  {/* ... */}
</nav>

// Decorative icons
<BookOpen className="h-6 w-6" aria-hidden="true" />

// Skip link
<a href="#main-content" className="skip-link">
  Przejdź do treści głównej
</a>
```

---

## Common Tasks

### Task 1: Update Theme Colors

1. **Edit CSS variables** in `app/globals.css`:
```css
:root {
  --primary: 142 76% 36%;  /* Change HSL values */
}
```

2. **Update Tailwind config** if adding new color (optional):
```javascript
// tailwind.config.js
colors: {
  'library-green': 'hsl(var(--primary))'
}
```

3. **Rebuild** to see changes:
```bash
npm run dev
```

### Task 2: Add News Item

**Edit page component:**
```typescript
// app/aktualnosci/page.tsx

const newsData: News[] = [
  // Add new item at the top
  {
    id: 'news-new',
    title: 'Nowy tytuł',
    description: 'Opis aktualności...',
    date: '2025-11-15',
    category: 'nowosci',
    icon: 'BookOpen',
    link: '/aktualnosci#news-new'
  },
  // ... existing items
]
```

### Task 3: Update Opening Hours

**Edit hours page:**
```typescript
// app/godziny-otwarcia/page.tsx

const schedule: OpeningHours[] = [
  { day: 'Poniedziałek', hours: '8:00 - 17:00', isOpen: true },
  { day: 'Wtorek', hours: '8:00 - 17:00', isOpen: true },
  // ... update hours as needed
]
```

### Task 4: Add New Service

1. **Define in types** (if not exists):
```typescript
// types/index.ts
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  link: string
  available: boolean
}
```

2. **Add to page:**
```typescript
// app/uslugi/page.tsx or app/page.tsx

const services: Service[] = [
  // ... existing services
  {
    id: 'new-service',
    title: 'Nowa usługa',
    description: 'Opis usługi',
    icon: 'IconName',
    link: '/uslugi/new-service',
    available: true
  }
]
```

3. **Update icon import:**
```typescript
import { BookOpen, Calendar, IconName } from 'lucide-react'
```

### Task 5: Modify Navbar Links

**Edit navigation items:**
```typescript
// components/layout/navbar.tsx

const navItems = [
  { href: '/', label: 'Strona główna' },
  { href: '/aktualnosci', label: 'Aktualności' },
  // ... add/remove/modify items
  { href: '/new-page', label: 'Nowa strona' }
]
```

### Task 6: Update Footer Content

**Edit footer sections:**
```typescript
// components/layout/footer.tsx

// Update any of the 4 footer columns:
// - Informacje (Info)
// - Szybkie linki (Quick Links)
// - Usługi (Services)
// - Kontakt (Contact)
```

### Task 7: Add Animation to Component

```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

### Task 8: Create Contact Form Handler

**Form already exists in** `app/kontakt/page.tsx`

**Backend endpoint ready in** `server/index.js`:
```javascript
POST /api/contact
{
  name: string,
  email: string,
  phone?: string,
  subject: string,
  message: string,
  consent: boolean
}
```

**To test:**
```bash
# Start Express server (separate from Next.js)
node server/index.js
# Sends to http://localhost:3001/api/contact
```

### Task 9: Add Custom Utility Function

```typescript
// lib/utils.ts

export function newUtility(input: string): string {
  // Implementation
  return input.toUpperCase()
}

// Use in components
import { cn, newUtility } from '@/lib/utils'
```

### Task 10: Update Metadata (SEO)

```typescript
// app/page-name/page.tsx (won't work in client components)
// OR app/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strona - Biblioteka Narol',
  description: 'Opis strony dla SEO',
  keywords: ['biblioteka', 'książki', 'Narol'],
  openGraph: {
    title: 'Strona - Biblioteka Narol',
    description: 'Opis dla social media',
    images: ['/og-image.jpg']
  }
}
```

**Note:** If page uses `'use client'`, move metadata to `layout.tsx` in the same directory.

---

## Important Notes & Gotchas

### 1. Client vs Server Components

**Current State:** All pages use `'use client'` because of:
- Framer Motion animations
- `useState` hooks
- Event handlers (`onClick`, etc.)

**Important:** Metadata exports only work in **Server Components**. If you need metadata on a client page, create a `layout.tsx` in the same directory as a Server Component.

**Example:**
```typescript
// app/example/layout.tsx (Server Component)
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Example Page'
}

export default function Layout({ children }) {
  return children
}

// app/example/page.tsx (Client Component)
'use client'
export default function Page() { }
```

### 2. Image Optimization

**Current config** (`next.config.js`):
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'http',
      hostname: 'localhost',
    }
  ]
}
```

**Before production:**
- Update to production domain
- Add proper image hosting
- Use Next.js `<Image>` component for optimization

### 3. Dark Mode Implementation

**Uses class-based dark mode:**
```typescript
// ThemeProvider wraps app
<ThemeProvider attribute="class" defaultTheme="system">
  {children}
</ThemeProvider>

// Theme switching
const { theme, setTheme } = useTheme()
setTheme('dark') // 'light' | 'dark' | 'system'
```

**Styling:**
```css
/* Light mode (default) */
.bg-background { background: white }

/* Dark mode (add .dark class) */
.dark .bg-background { background: hsl(142 20% 10%) }
```

### 4. LocalStorage and Hydration

**Problem:** localStorage is client-only, causes hydration mismatch.

**Solution:** Use `mounted` state pattern:
```typescript
const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
  // Now safe to access localStorage
  const saved = localStorage.getItem('key')
}, [])

if (!mounted) return null // or loading state
```

### 5. TypeScript Strict Mode

**Enabled in tsconfig.json:**
- All variables must be typed
- `null` and `undefined` checks required
- No implicit `any`

**Common fixes:**
```typescript
// Problem: Property might be undefined
user.name.toUpperCase()  // ❌

// Solution: Optional chaining
user?.name?.toUpperCase()  // ✅

// Solution: Nullish coalescing
const name = user?.name ?? 'Guest'  // ✅
```

### 6. Tailwind Class Merging

**Problem:** Conflicting Tailwind classes don't merge correctly.

**Solution:** Use `cn()` utility:
```typescript
import { cn } from '@/lib/utils'

// BAD: Last class doesn't override
<div className={`bg-red-500 ${active ? 'bg-blue-500' : ''}`} />

// GOOD: Classes merge correctly
<div className={cn('bg-red-500', active && 'bg-blue-500')} />
```

### 7. Framer Motion and Layout Shift

**Problem:** Animations can cause layout shift (CLS).

**Solution:**
- Use `transform` instead of `top`/`left`/`width`/`height`
- Add `layout` prop for layout animations
- Use `layoutId` for shared element transitions

```typescript
// Good: Uses transform (no layout shift)
<motion.div
  initial={{ opacity: 0, y: 20 }}  // y uses transform
  animate={{ opacity: 1, y: 0 }}
/>

// Avoid: Animating layout properties directly
<motion.div
  initial={{ opacity: 0, top: '100px' }}  // ❌ Causes layout shift
/>
```

### 8. Icon Usage Pattern

**Using lucide-react:**
```typescript
import { BookOpen, Calendar, Users } from 'lucide-react'

// Static icon
<BookOpen className="h-6 w-6" aria-hidden="true" />

// Dynamic icon (from data)
const items = [
  { icon: BookOpen, title: 'Books' },
  { icon: Calendar, title: 'Events' }
]

{items.map(({ icon: Icon, title }) => (
  <Icon key={title} className="h-6 w-6" aria-hidden="true" />
))}
```

**Note:** Icons are decorative (aria-hidden), text provides meaning.

### 9. Performance Considerations

**Current optimizations:**
- Next.js automatic code splitting
- Image optimization (Next.js Image component ready)
- Tailwind purges unused CSS
- Font optimization with `next/font`

**TODO before production:**
- Add proper loading states
- Implement error boundaries
- Add monitoring (Sentry, etc.)
- Optimize bundle size (analyze with `next bundle-analyzer`)

### 10. Polish Language Formatting

**Date/Time Formatting:**
```typescript
// lib/utils.ts already has Polish formatters
formatDate('2025-11-15')  // "15 listopada 2025"
formatTime('14:30')       // "14:30"

// Locale is 'pl-PL' throughout
```

**Content Language:**
- All text in Polish
- Form labels in Polish
- Error messages should be in Polish
- Date/time displays use Polish format

### 11. Accessibility Testing

**Manual checks:**
- Tab through all interactive elements
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Check color contrast (use browser DevTools)
- Test with keyboard only (no mouse)
- Verify reduced motion preference

**Tools:**
- Lighthouse (in Chrome DevTools)
- axe DevTools browser extension
- WAVE browser extension

### 12. Git Workflow

**Current branch:** `claude/claude-md-mhzitlq56nqjs681-01QEDxQeJwbr75kn1waEhUHZ`

**Workflow:**
```bash
# Make changes
git add .
git commit -m "feat: Add new feature"

# Push to feature branch
git push -u origin claude/claude-md-mhzitlq56nqjs681-01QEDxQeJwbr75kn1waEhUHZ
```

**Commit message format:**
- `feat: New feature`
- `fix: Bug fix`
- `docs: Documentation`
- `style: Formatting`
- `refactor: Code refactoring`
- `test: Tests`
- `chore: Maintenance`

### 13. Environment Variables

**Not currently used**, but if needed:

Create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
DATABASE_URL=postgresql://...
```

Access in code:
```typescript
// Client-side (must start with NEXT_PUBLIC_)
const apiUrl = process.env.NEXT_PUBLIC_API_URL

// Server-side only
const dbUrl = process.env.DATABASE_URL
```

### 14. Common Errors and Solutions

**Error:** "Hydration failed"
```
Solution: Check for client-only code (localStorage) running on server.
Use mounted state pattern or dynamic imports.
```

**Error:** "Module not found: Can't resolve '@/components/...'"
```
Solution: Check tsconfig.json paths are correct. Restart TS server.
```

**Error:** "className did not match"
```
Solution: Tailwind class conflict. Use cn() utility to merge classes.
```

**Error:** "Cannot read property of undefined"
```
Solution: Add optional chaining (?.) or null checks.
```

### 15. Code Review Checklist

Before committing changes:
- [ ] TypeScript type check passes (`npm run type-check`)
- [ ] ESLint has no errors (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Tested in dev mode (`npm run dev`)
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Accessibility checked (keyboard nav, screen reader)
- [ ] Dark mode tested
- [ ] High contrast mode tested (if applicable)
- [ ] Animations respect `prefers-reduced-motion`
- [ ] No console errors in browser
- [ ] Performance acceptable (no major CLS, LCP issues)

---

## Additional Resources

### Official Documentation
- [Next.js 14 Docs](https://nextjs.org/docs)
- [React 18 Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Radix UI Docs](https://www.radix-ui.com)
- [shadcn/ui Docs](https://ui.shadcn.com)

### Component Libraries Used
- [lucide-react Icons](https://lucide.dev)
- [React Hook Form](https://react-hook-form.com)
- [Zod Validation](https://zod.dev)
- [next-themes](https://github.com/pacocoursey/next-themes)

### Accessibility Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org)

---

## Contact & Support

For questions about this codebase:
1. Check this CLAUDE.md first
2. Review README.md
3. Check component files for inline documentation
4. Review official library documentation

**Project Structure Questions:**
- Refer to [Directory Structure](#directory-structure)
- Check [Architecture & Patterns](#architecture--patterns)

**Code Style Questions:**
- Refer to [Code Conventions](#code-conventions)
- Check existing components for patterns

**Task Implementation Questions:**
- Refer to [Common Tasks](#common-tasks)
- Check [Development Workflows](#development-workflows)

---

**Last Updated:** 2025-11-15
**Version:** 3.0.0
**Maintained by:** AI Assistant (Claude)
