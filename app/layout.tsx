import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://biblioteka-narol.pl'),
  title: {
    default: 'Miejsko-Gminna Biblioteka Publiczna w Narolu | Centrum Kultury',
    template: '%s | Biblioteka Narol'
  },
  description: 'Miejsko-Gminna Biblioteka Publiczna im. Tadeusza Polanowskiego w Narolu. Centrum kultury, wiedzy i czytelnictwa. Dostępna dla wszystkich - WCAG AA+, TypeScript, shadcn/ui.',
  keywords: ['biblioteka Narol', 'MGBP Narol', 'TypeScript', 'książki', 'kultura', 'wydarzenia', 'accessibility', 'WCAG'],
  authors: [{ name: 'Miejsko-Gminna Biblioteka Publiczna w Narolu' }],
  creator: 'MGBP Narol',
  publisher: 'MGBP Narol',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://biblioteka-narol.pl',
    siteName: 'Biblioteka Publiczna w Narolu',
    title: 'Miejsko-Gminna Biblioteka Publiczna w Narolu',
    description: 'Nowoczesna strona biblioteki w TypeScript z shadcn/ui. Centrum kultury i wiedzy w Narolu.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Biblioteka Publiczna w Narolu',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biblioteka Publiczna w Narolu',
    description: 'Nowoczesna strona TypeScript. Książki, wydarzenia, kultura.',
    creator: '@BibliotekaNarol',
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1b5e20' },
    { media: '(prefers-color-scheme: dark)', color: '#4caf50' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Accessibility */}
        <meta name="color-scheme" content="light dark" />
        <link rel="accessibility" href="/deklaracja-dostepnosci" />
        
        {/* Geo tags */}
        <meta name="geo.region" content="PL-PR" />
        <meta name="geo.placename" content="Narol" />
        <meta name="geo.position" content="50.3609;23.3257" />
      </head>
      <body className="min-h-screen bg-dots font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to content */}
          <a href="#main-content" className="skip-link">
            Przejdź do głównej treści (Enter)
          </a>
          
          {/* Screen reader announcements */}
          <div 
            role="status" 
            aria-live="polite" 
            aria-atomic="true" 
            className="sr-only"
            id="announcements"
          />
          
          {children}
          
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
