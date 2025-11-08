'use client'

import Link from 'next/link'
import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Clock, FileText } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  biblioteka: [
    { name: 'O bibliotece', href: '/o-bibliotece' },
    { name: 'Katalog online', href: '/katalog' },
    { name: 'Godziny otwarcia', href: '/godziny-otwarcia' },
    { name: 'Regulamin', href: '/regulamin' },
  ],
  uslugi: [
    { name: 'Wydarzenia', href: '/wydarzenia' },
    { name: 'Dla dzieci', href: '/dla-dzieci' },
    { name: 'Wypożyczalnia', href: '/wypozyczalnia' },
    { name: 'Czytelnia', href: '/czytelnia' },
  ],
  informacje: [
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Deklaracja dostępności', href: '/deklaracja-dostepnosci' },
    { name: 'Polityka prywatności', href: '/polityka-prywatnosci' },
    { name: 'Mapa strony', href: '/mapa-strony' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Biblioteka Narol</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Miejsko-Gminna Biblioteka Publiczna im. Tadeusza Polanowskiego w Narolu. 
              Centrum kultury, wiedzy i społeczności lokalnej.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://facebook.com/bibliotekanarol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Facebook - Biblioteka Narol"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="https://instagram.com/bibliotekanarol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Instagram - Biblioteka Narol"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Biblioteka
            </h3>
            <ul className="space-y-2">
              {footerLinks.biblioteka.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Usługi
            </h3>
            <ul className="space-y-2">
              {footerLinks.uslugi.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+48166317200"
                  className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  <Phone className="w-4 h-4 mt-0.5 group-hover:text-primary transition-colors" aria-hidden="true" />
                  <span>16 631 72 00</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:biblioteka@narol.pl"
                  className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  <Mail className="w-4 h-4 mt-0.5 group-hover:text-primary transition-colors" aria-hidden="true" />
                  <span className="break-all">biblioteka@narol.pl</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary" aria-hidden="true" />
                  <span>ul. Rynek 1<br />37-610 Narol</span>
                </div>
              </li>
              <li>
                <Link
                  href="/godziny-otwarcia"
                  className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  <Clock className="w-4 h-4 mt-0.5 group-hover:text-primary transition-colors" aria-hidden="true" />
                  <span>Godziny otwarcia</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Miejsko-Gminna Biblioteka Publiczna w Narolu. 
            <span className="hidden sm:inline"> Wszelkie prawa zastrzeżone.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/deklaracja-dostepnosci"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              <FileText className="w-3 h-3" aria-hidden="true" />
              Deklaracja dostępności
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link
              href="/polityka-prywatnosci"
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              Polityka prywatności
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <span className="text-muted-foreground">
              WCAG 2.1 AA+
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}