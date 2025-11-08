'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, BookOpen, Home, Calendar, Users, Info, Phone, FileText, Newspaper } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AccessibilityToolbar } from './accessibility-toolbar'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Strona główna', href: '/', icon: Home },
  { name: 'Aktualności', href: '/aktualnosci', icon: Newspaper },
  { name: 'O bibliotece', href: '/o-bibliotece', icon: Info },
  { name: 'Katalog', href: '/katalog', icon: BookOpen },
  { name: 'Wydarzenia', href: '/wydarzenia', icon: Calendar },
  { name: 'Dla dzieci', href: '/dla-dzieci', icon: Users },
  { name: 'Kontakt', href: '/kontakt', icon: Phone },
  { name: 'Deklaracja dostępności', href: '/deklaracja-dostepnosci', icon: FileText },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Główna nawigacja">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <Link 
              href="/" 
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg p-2"
              aria-label="Strona główna - Biblioteka Narol"
            >
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <BookOpen className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-foreground leading-tight">
                  Biblioteka Narol
                </div>
                <div className="text-xs text-muted-foreground">
                  Centrum Kultury i Wiedzy
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Accessibility Toolbar and Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <AccessibilityToolbar />
            
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="space-y-1 pb-4 pt-2">
                {navigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}