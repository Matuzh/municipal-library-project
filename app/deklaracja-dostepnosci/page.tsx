'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Accessibility,
  CheckCircle2,
  Monitor,
  Building2,
  Phone,
  Mail,
  AlertCircle,
  FileText,
  Eye,
  Ear,
  Hand,
  Brain
} from 'lucide-react'
import Link from 'next/link'

const digitalFeatures = [
  {
    icon: Eye,
    title: 'Dostępność wzrokowa',
    items: [
      'Tryb ciemny i jasny',
      'Trzy rozmiary czcionki (100%, 112.5%, 125%)',
      'Wysoki kontrast (AAA)',
      'Teksty alternatywne dla obrazów',
      'Możliwość powiększenia do 200%',
      'Wyraźne fokus na elementach'
    ]
  },
  {
    icon: Hand,
    title: 'Nawigacja klawiaturowa',
    items: [
      'Pełna obsługa za pomocą klawiatury',
      'Przycisk "Przejdź do treści"',
      'Logiczna kolejność tabulacji',
      'Widoczne wskaźniki fokusa',
      'Brak pułapek klawiatury',
      'Skróty klawiaturowe'
    ]
  },
  {
    icon: Ear,
    title: 'Czytniki ekranu',
    items: [
      'Etykiety ARIA dla wszystkich elementów',
      'Semantyczna struktura HTML',
      'Poprawna hierarchia nagłówków',
      'Opisowe linki i przyciski',
      'Tekst alternatywny',
      'Kompatybilność z NVDA, JAWS'
    ]
  },
  {
    icon: Brain,
    title: 'Zrozumiałość treści',
    items: [
      'Prosty, zrozumiały język',
      'Jasna struktura nawigacji',
      'Przewidywalne zachowanie',
      'Pomocne komunikaty błędów',
      'Spójny układ stron',
      'Brak automatycznych zmian'
    ]
  }
]

const physicalFeatures = [
  { icon: '✓', text: 'Podjazd dla wózków inwalidzkich', available: true },
  { icon: '✓', text: 'Szerokie drzwi wejściowe', available: true },
  { icon: '✓', text: 'Wejście na parterze', available: true },
  { icon: '✓', text: 'Toaleta dla osób z niepełnosprawnościami', available: true },
  { icon: '✓', text: 'Możliwość wejścia z psem asystującym', available: true },
  { icon: '✓', text: 'Przeszkoleni pracownicy', available: true },
  { icon: '⚠', text: 'Brak windy - wszystkie usługi na parterze', available: false },
]

export default function AccessibilityDeclarationPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Badge className="mb-4" variant="secondary">
          <Accessibility className="mr-1 h-3 w-3" />
          WCAG 2.1 AAA
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Deklaracja Dostępności
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Miejsko-Gminna Biblioteka Publiczna im. Tadeusza Polanowskiego w Narolu
        </p>
      </motion.div>

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Nasze Zobowiązanie</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Miejsko-Gminna Biblioteka Publiczna w Narolu zobowiązuje się zapewnić dostępność 
              swojej strony internetowej zgodnie z ustawą z dnia 4 kwietnia 2019 r. o dostępności 
              cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych.
            </p>
            <p className="leading-relaxed">
              Niniejsza deklaracja dostępności dotyczy strony internetowej biblioteki i została 
              sporządzona dnia <strong>8 listopada 2025 r.</strong> Deklaracja została ostatnio 
              poddana przeglądowi dnia <strong>8 listopada 2025 r.</strong>
            </p>
            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">Status zgodności</p>
                <p className="text-sm">
                  Strona internetowa jest <strong>w pełni zgodna</strong> z ustawą o dostępności 
                  cyfrowej oraz wytycznymi WCAG 2.1 na poziomie AAA.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Digital Accessibility */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <Monitor className="h-8 w-8 text-primary" />
            Dostępność Cyfrowa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nasza strona internetowa spełnia najwyższe standardy dostępności
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {digitalFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Physical Accessibility */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              Dostępność Architektoniczna
            </CardTitle>
            <CardDescription>
              Biblioteka mieści się przy ul. Rynek 1, 37-610 Narol
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-4">Wejście do budynku</h3>
            <div className="space-y-3 mb-6">
              {physicalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className={`text-xl ${feature.available ? 'text-green-600' : 'text-amber-600'}`}>
                    {feature.icon}
                  </span>
                  <span className="text-muted-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Parking</h3>
                <p className="text-sm text-muted-foreground">
                  Parking publiczny przy Rynku - około 50 metrów od biblioteki. 
                  Dostępne miejsca parkingowe dla osób z niepełnosprawnościami.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Transport publiczny</h3>
                <p className="text-sm text-muted-foreground">
                  Biblioteka znajduje się w centrum miasta, w pobliżu przystanków autobusowych.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Standards Compliance */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Zgodność ze Standardami</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Normy i standardy</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>WCAG 2.1 poziom AAA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Ustawa o dostępności cyfrowej</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Europejska Ustawa o Dostępności (EAA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Rozporządzenie RODO</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Testowanie</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Automatyczne testy dostępności</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Testy z czytnikami ekranu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Testy nawigacji klawiaturowej</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Audyt kontrastu kolorów</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Contact and Feedback */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Kontakt w Sprawie Dostępności</CardTitle>
            <CardDescription>
              W przypadku problemów z dostępnością strony prosimy o kontakt
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Jeśli napotkasz jakiekolwiek bariery w dostępie do naszej strony internetowej lub 
              usług biblioteki, prosimy o kontakt. Dołożymy wszelkich starań, aby pomóc.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Telefon</p>
                  <a href="tel:+48166317200" className="text-sm text-muted-foreground hover:text-primary">
                    16 631 72 00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:biblioteka@narol.pl" className="text-sm text-muted-foreground hover:text-primary break-all">
                    biblioteka@narol.pl
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Procedura zgłaszania problemów
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground ml-7">
                <li>Opisz napotkany problem z dostępnością</li>
                <li>Podaj adres strony, na której wystąpił problem</li>
                <li>Wskaż technologię asystującą, której używasz (jeśli dotyczy)</li>
                <li>Otrzymasz odpowiedź w ciągu 7 dni roboczych</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Legal Information */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="bg-muted/50">
          <CardContent className="py-8">
            <div className="flex items-start gap-3 mb-6">
              <FileText className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Podstawa Prawna</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Niniejsza deklaracja dostępności została sporządzona na podstawie:
                </p>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground ml-9">
              <li>• Ustawa z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych (Dz.U. 2019 poz. 848)</li>
              <li>• Rozporządzenie Rady Ministrów z dnia 12 kwietnia 2022 r. w sprawie Krajowych Ram Interoperacyjności (Dz.U. 2022 poz. 852)</li>
              <li>• Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/2102</li>
            </ul>

            <Separator className="my-6" />

            <div className="text-center text-sm text-muted-foreground space-y-1">
              <p><strong>Data sporządzenia deklaracji:</strong> 8 listopada 2025 r.</p>
              <p><strong>Data ostatniej aktualizacji:</strong> 8 listopada 2025 r.</p>
              <p><strong>Metoda przygotowania:</strong> Samoocena przeprowadzona przez bibliotekę</p>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}