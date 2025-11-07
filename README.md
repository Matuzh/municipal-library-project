# 🚀 Biblioteka Narol - TypeScript Edition v3.0

## 📚 Modern Library Website Built with Latest Technologies

A fully accessible, type-safe, and modern library website built with Next.js 14, TypeScript, shadcn/ui, and Tailwind CSS.

---

## ✨ Technologies Used

### Core Framework
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 18** - Latest React features

### UI Libraries
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

### Styling & Animations
- **Tailwind CSS Animate** - Animation utilities
- **class-variance-authority** - Component variants
- **clsx** + **tailwind-merge** - Class name utilities

### Forms & Validation
- **React Hook Form** - Form handling
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation resolvers

### Additional Features
- **next-themes** - Dark mode support
- **Sonner** - Toast notifications
- **Embla Carousel** - Carousel component
- **Vaul** - Drawer component

---

## 🎯 Key Features

### TypeScript Benefits
✅ **Type Safety** - Catch errors at compile time
✅ **IntelliSense** - Auto-completion in your IDE
✅ **Better Documentation** - Types serve as documentation
✅ **Refactoring** - Safe code refactoring
✅ **Interfaces** - Clear data structures

### shadcn/ui Components
✅ **Button** - Multiple variants with animations
✅ **Card** - Enhanced card with gradients
✅ **Badge** - Animated badges with icons
✅ **Separator** - Decorative dividers
✅ **Theme Provider** - Dark mode support

### Custom Components
✅ **StatCard** - Animated statistics display
✅ **NewsCard** - News items with categories
✅ **FeatureBox** - Animated feature showcase

### Accessibility Features
✅ **WCAG 2.1 AA+** - Full compliance
✅ **Keyboard Navigation** - Complete Tab support
✅ **Screen Reader** - ARIA labels and semantic HTML
✅ **Focus Indicators** - 4px yellow outlines
✅ **High Contrast** - Automatic detection
✅ **Reduced Motion** - Respects user preferences
✅ **Skip Links** - Jump to main content
✅ **Color Blind Friendly** - Icons + text labels

### Modern Features
✅ **Three-Column Layout** - Organized content structure
✅ **Framer Motion Animations** - Smooth, professional
✅ **Dark Mode** - Theme switching
✅ **Toast Notifications** - User feedback
✅ **Responsive Design** - Mobile-first approach
✅ **Type-Safe** - Full TypeScript coverage
✅ **Component Library** - Reusable UI components
✅ **Pattern Backgrounds** - Dot and grid patterns
✅ **Gradient Effects** - Beautiful color transitions
✅ **Custom Scrollbar** - Themed scrollbar
✅ **Print Styles** - Print-optimized

---

## 📁 Project Structure

```
biblioteka-typescript/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx            # Root layout with providers
│   └── page.tsx              # Homepage
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── separator.tsx
│   ├── library/              # Custom library components
│   │   ├── stat-card.tsx
│   │   ├── news-card.tsx
│   │   └── feature-box.tsx
│   └── theme-provider.tsx    # Theme context provider
├── lib/
│   └── utils.ts              # Utility functions
├── types/
│   └── index.ts              # TypeScript type definitions
├── hooks/                    # Custom React hooks (optional)
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies
└── next.config.js            # Next.js configuration
```

---

## 🚀 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Steps

1. **Extract the project**
```bash
cd biblioteka-typescript
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open browser**
Visit `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

### Type Checking
```bash
npm run type-check
```

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    600: '#1b5e20',  // Main green
    // ... other shades
  }
}
```

### Components
All components are in `components/ui/` and `components/library/`.
They use `class-variance-authority` for variants:
```typescript
<Button variant="warning" size="lg">
  Click me
</Button>
```

### Types
Add new types in `types/index.ts`:
```typescript
export interface YourType {
  id: string
  name: string
}
```

### Animations
Configure animations in `tailwind.config.js`:
```javascript
keyframes: {
  'your-animation': {
    // animation keyframes
  }
}
```

---

## 📊 Component Examples

### Button
```typescript
import { Button } from '@/components/ui/button'

<Button variant="default" size="lg">
  Click me
</Button>

// Variants: default, secondary, outline, warning, ghost, link
// Sizes: sm, default, lg, xl, icon
```

### Card
```typescript
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
  <CardFooter>
    Footer
  </CardFooter>
</Card>
```

### Badge
```typescript
import { Badge } from '@/components/ui/badge'

<Badge variant="success">New</Badge>

// Variants: default, secondary, destructive, outline, success, warning, urgent
```

### StatCard
```typescript
import { StatCard } from '@/components/library/stat-card'

<StatCard 
  number="15,000+" 
  label="Books" 
  icon="📚" 
  delay={0.1}
/>
```

---

## 🎯 Type Safety Examples

### Props Interface
```typescript
interface ComponentProps {
  title: string
  description?: string
  onAction: () => void
}

export function Component({ title, description, onAction }: ComponentProps) {
  // TypeScript ensures type safety
}
```

### Type Imports
```typescript
import type { News, Event } from '@/types'

const news: News = {
  id: '1',
  title: 'News Title',
  // TypeScript validates all properties
}
```

---

## ♿ Accessibility Features

### Focus Management
All interactive elements have visible focus indicators:
- 4px yellow outline
- Offset for clarity
- High contrast support

### Keyboard Navigation
- Tab through all interactive elements
- Enter/Space to activate
- Escape to close modals
- Arrow keys for navigation

### Screen Reader Support
- ARIA labels on all regions
- Semantic HTML elements
- Alt text for all images
- Live regions for updates

### Responsive Text
- Scales up to 200%
- No horizontal scrolling
- Readable at all sizes

---

## 🌙 Dark Mode

Dark mode is built-in with `next-themes`:

```typescript
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  )
}
```

---

## 📱 Responsive Design

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Grid Layout
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns (left sidebar, main, right sidebar)

---

## 🔧 Configuration Files

### tsconfig.json
- Strict mode enabled
- Path aliases (@/)
- Latest ES features

### tailwind.config.js
- Custom green color scheme
- Animation utilities
- Pattern backgrounds
- Custom keyframes

### next.config.js
- React strict mode
- SWC minification
- Image optimization

---

## 📈 Performance

### Optimizations
✅ **Code Splitting** - Automatic with Next.js
✅ **Image Optimization** - Next.js Image component
✅ **Font Optimization** - Google Fonts with display=swap
✅ **CSS Optimization** - Tailwind purges unused CSS
✅ **TypeScript** - Faster than Babel
✅ **SWC** - Rust-based compiler

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 🐛 Troubleshooting

### Type Errors
Run `npm run type-check` to see all TypeScript errors.

### Styling Issues
- Clear `.next` folder: `rm -rf .next`
- Restart dev server
- Check Tailwind purge settings

### Component Not Found
- Check import path
- Verify file exists
- Check tsconfig paths

---

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)

### Learning
- TypeScript in 5 minutes
- Next.js 14 App Router
- Tailwind CSS Best Practices
- React Hooks
- Framer Motion Animations

---

## 🎉 Summary

### What You Get
✨ **TypeScript** - Full type safety
✨ **shadcn/ui** - Beautiful components
✨ **Modern Stack** - Latest technologies
✨ **Accessible** - WCAG 2.1 AA+
✨ **Fast** - Optimized performance
✨ **Maintainable** - Clean code structure
✨ **Extensible** - Easy to customize
✨ **Professional** - Production-ready

### vs Previous Versions
| Feature | v1.0 | v2.0 | v3.0 TypeScript |
|---------|------|------|-----------------|
| Language | JavaScript | JavaScript | **TypeScript** ✨ |
| UI Library | Custom CSS | Custom CSS | **shadcn/ui** ✨ |
| Components | Basic | Enhanced | **Reusable + Type-safe** ✨ |
| Animations | CSS | CSS | **Framer Motion** ✨ |
| Icons | Emojis | Emojis | **Lucide React** ✨ |
| Forms | Basic | Basic | **React Hook Form + Zod** ✨ |
| Dark Mode | No | No | **Yes** ✨ |
| Type Safety | No | No | **Full** ✨ |

---

## 🚀 Next Steps

1. ✅ Install dependencies
2. ✅ Run development server
3. ✅ Explore components
4. ✅ Customize colors
5. ✅ Add your content
6. ✅ Test accessibility
7. ✅ Build for production
8. ✅ Deploy!

---

**Built with ❤️ using TypeScript, Next.js, shadcn/ui, and modern web technologies**

**Version**: 3.0.0  
**License**: MIT  
**Status**: Production Ready 🚀
