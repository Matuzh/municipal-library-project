'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  BookOpen,
  Search,
  ExternalLink,
  Smartphone,
  Laptop,
  Globe,
  ArrowRight,
  Info,
  HelpCircle,
  BookMarked,
  Download,
  Clock
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Search,
    title: 'Zaawansowane wyszukiwanie',
    description: 'Szukaj według tytułu, autora, ISBN, słów kluczowych i wielu innych kryteriów'
  },
  {
    icon: BookMarked,
    title: 'Rezerwacja książek',
    description: 'Zarezerwuj wypożyczone książki i otrzymuj powiadomienia o ich dostępności'
  },
  {
    icon: Clock,
    title: 'Historia wypożyczeń',
    description: 'Przeglądaj historię swoich wypożyczeń i zarządzaj aktualnie wypożyczonymi książkami'
  },
  {
    icon: Download,
    title: 'Prolongata online',
    description: 'Przedłużaj termin zwrotu książek bez wizyty w bibliotece'
  }
]

const instructions = [
  {
    step: '1',
    title: 'Przejdź do katalogu online',
    description: 'Kliknij przycisk poniżej aby otworzyć system katalogowy'
  },
  {
    step: '2',
    title: 'Wyszukaj książkę',
    description: 'Użyj wyszukiwarki wpisując tytuł, autora lub słowa kluczowe'
  },
  {
    step: '3',
    title: 'Sprawdź dostępność',
    description: 'Zobacz czy książka jest dostępna do wypożyczenia'
  },
  {
    step: '4',
    title: 'Zarezerwuj lub odwiedź nas',
    description: 'Zarezerwuj online lub przyjdź do biblioteki po książkę'
  }
]

export default function CatalogPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Badge className="mb-4" variant="secondary">
          <BookOpen className="mr-1 h-3 w-3" />
          Przeszukuj zbiory
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Katalog Online
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Przeszukuj ponad 15,000 książek w naszej kolekcji
        </p>
      </motion.div>

      {/* Main CTA Card */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-16"
      >
        <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <CardContent className="py-12 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
              <Globe className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Wyszukaj książkę w katalogu</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nasz katalog online umożliwia wyszukiwanie książek, sprawdzanie dostępności, 
              rezerwację oraz zarządzanie wypożyczeniami z dowolnego miejsca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-8 py-6 h-auto"
              >
                <a 
                  href="https://szukamksiążki.pl/SkNewWeb/astart/920" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Otwórz katalog online
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 h-auto"
              >
                <Link href="#instrukcja">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Jak korzystać?
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Features */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Możliwości katalogu online</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Katalog oferuje wiele przydatnych funkcji dla czytelników
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Instructions */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
        id="instrukcja"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Jak korzystać z katalogu?</CardTitle>
            <CardDescription>
              Prosta instrukcja krok po kroku
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {instructions.map((instruction, index) => (
                <motion.div
                  key={instruction.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                      {instruction.step}
                    </div>
                    <h3 className="font-semibold mb-2">{instruction.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {instruction.description}
                    </p>
                  </div>
                  {index < instructions.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-12 text-primary">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Device Compatibility */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-xl text-center">Dostępny na wszystkich urządzeniach</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                  <Laptop className="h-8 w-8 text-primary" />
                </div>
                <p className="font-semibold">Komputer</p>
                <p className="text-sm text-muted-foreground">Desktop & Laptop</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <p className="font-semibold">Smartfon</p>
                <p className="text-sm text-muted-foreground">iOS & Android</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <p className="font-semibold">Przeglądarka</p>
                <p className="text-sm text-muted-foreground">Wszystkie przeglądarki</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Traditional Catalog */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Card className="border-amber-500/50 bg-amber-50/50 dark:bg-amber-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-amber-600" />
              Katalog Tradycyjny
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              W bibliotece dostępny jest również tradycyjny katalog kartkowy. 
              Jeśli wolisz przeglądać katalog osobiście, zapraszamy do biblioteki 
              w godzinach otwarcia.
            </p>
            <Button asChild variant="outline">
              <Link href="/godziny-otwarcia">
                <Clock className="mr-2 h-4 w-4" />
                Zobacz godziny otwarcia
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.section>

      {/* Help Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="text-center">
          <CardContent className="py-12">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Potrzebujesz pomocy?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Nasi bibliotekarze chętnie pomogą w wyszukiwaniu książek i korzystaniu z katalogu. 
              Skontaktuj się z nami lub odwiedź bibliotekę osobiście.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  Skontaktuj się z nami
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/o-bibliotece">
                  O bibliotece
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}