'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Contrast, Type, Settings } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { toast } from 'sonner'

type FontSize = 'normal' | 'large' | 'extra-large'
type ContrastMode = 'normal' | 'high'

export function AccessibilityToolbar() {
  const { theme, setTheme } = useTheme()
  const [fontSize, setFontSize] = useState<FontSize>('normal')
  const [contrast, setContrast] = useState<ContrastMode>('normal')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load saved preferences
    const savedFontSize = localStorage.getItem('fontSize') as FontSize
    const savedContrast = localStorage.getItem('contrast') as ContrastMode
    
    if (savedFontSize) {
      setFontSize(savedFontSize)
      applyFontSize(savedFontSize)
    }
    if (savedContrast) {
      setContrast(savedContrast)
      applyContrast(savedContrast)
    }
  }, [])

  const applyFontSize = (size: FontSize) => {
    const root = document.documentElement
    root.classList.remove('font-normal', 'font-large', 'font-extra-large')
    root.classList.add(`font-${size}`)
    localStorage.setItem('fontSize', size)
  }

  const applyContrast = (mode: ContrastMode) => {
    const root = document.documentElement
    if (mode === 'high') {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }
    localStorage.setItem('contrast', mode)
  }

  const handleFontSizeChange = (size: FontSize) => {
    setFontSize(size)
    applyFontSize(size)
    const sizeLabels = {
      normal: 'normalny',
      large: 'duży',
      'extra-large': 'bardzo duży'
    }
    toast.success(`Rozmiar czcionki zmieniony na ${sizeLabels[size]}`, {
      description: 'Ustawienie zostało zapisane'
    })
  }

  const handleContrastChange = (mode: ContrastMode) => {
    setContrast(mode)
    applyContrast(mode)
    toast.success(
      mode === 'high' ? 'Włączono wysoki kontrast' : 'Wyłączono wysoki kontrast',
      { description: 'Ustawienie zostało zapisane' }
    )
  }

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    toast.success(
      newTheme === 'dark' ? 'Włączono tryb ciemny' : 'Włączono tryb jasny',
      { description: 'Ustawienie zostało zapisane' }
    )
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled aria-label="Ładowanie ustawień dostępności">
        <Settings className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Ustawienia dostępności"
        >
          <Settings className="h-5 w-5" />
          <span className="sr-only">Otwórz ustawienia dostępności</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuLabel className="text-base">
          Ustawienia dostępności
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {/* Theme Selection */}
        <div className="px-2 py-2">
          <div className="text-sm font-medium mb-2 flex items-center gap-2">
            {theme === 'dark' ? (
              <Moon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Sun className="h-4 w-4" aria-hidden="true" />
            )}
            Motyw
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={theme === 'light' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleThemeChange('light')}
              className="w-full justify-start"
              aria-pressed={theme === 'light'}
            >
              <Sun className="h-4 w-4 mr-2" aria-hidden="true" />
              Jasny
            </Button>
            <Button
              variant={theme === 'dark' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleThemeChange('dark')}
              className="w-full justify-start"
              aria-pressed={theme === 'dark'}
            >
              <Moon className="h-4 w-4 mr-2" aria-hidden="true" />
              Ciemny
            </Button>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Font Size Selection */}
        <div className="px-2 py-2">
          <div className="text-sm font-medium mb-2 flex items-center gap-2">
            <Type className="h-4 w-4" aria-hidden="true" />
            Rozmiar czcionki
          </div>
          <div className="space-y-1">
            <Button
              variant={fontSize === 'normal' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFontSizeChange('normal')}
              className="w-full justify-start"
              aria-pressed={fontSize === 'normal'}
            >
              <span className="text-sm">A</span>
              <span className="ml-2">Normalny</span>
            </Button>
            <Button
              variant={fontSize === 'large' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFontSizeChange('large')}
              className="w-full justify-start"
              aria-pressed={fontSize === 'large'}
            >
              <span className="text-base">A</span>
              <span className="ml-2">Duży</span>
            </Button>
            <Button
              variant={fontSize === 'extra-large' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFontSizeChange('extra-large')}
              className="w-full justify-start"
              aria-pressed={fontSize === 'extra-large'}
            >
              <span className="text-lg">A</span>
              <span className="ml-2">Bardzo duży</span>
            </Button>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Contrast Selection */}
        <div className="px-2 py-2">
          <div className="text-sm font-medium mb-2 flex items-center gap-2">
            <Contrast className="h-4 w-4" aria-hidden="true" />
            Kontrast
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={contrast === 'normal' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleContrastChange('normal')}
              className="w-full justify-start"
              aria-pressed={contrast === 'normal'}
            >
              Normalny
            </Button>
            <Button
              variant={contrast === 'high' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleContrastChange('high')}
              className="w-full justify-start"
              aria-pressed={contrast === 'high'}
            >
              Wysoki
            </Button>
          </div>
        </div>

        <DropdownMenuSeparator />
        
        <div className="px-2 py-2 text-xs text-muted-foreground">
          Ustawienia są zapisywane automatycznie
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}