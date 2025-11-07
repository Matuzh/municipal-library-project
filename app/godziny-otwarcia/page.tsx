'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Clock,
  Calendar,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Accessibility,
  Info
} from 'lucide-react'
import Link from 'next/link'

const weekSchedule = [
  { day: 'Poniedziałek', hours: '9:00 - 17:00', isOpen: true },
  { day: 'Wtorek', hours: '9:00 - 18:00', isOpen: true },
  { day: 'Środa', hours: '9:00 - 18:00', isOpen: true },
  { day: 'Czwartek', hours: '9:00 - 17:00', isOpen: true },
  { day: 'Piątek', hours: '9:00 - 15:00', isOpen: true },
  { day: 'Sobota', hours: 'I i III sobota: 8:30 - 12:30', isOpen: true },
  { day: 'Niedziela', hours: 'Nieczynne', isOpen: false }
]

const departmentHours = [
  {
    name: 'Wypożyczalnia dla Dorosłych',
    icon: '📚',
    schedule: [
      'Pon - Czw: 9:00 - 17:00',
      'Wtorek, Środa: 9:00 - 18:00',
      'Piątek: 9:00 - 15:00',
      'Sobota: I i III: 8:30 - 12:30'
    ]
  },
  {
    name: 'Wypożyczalnia dla Dzieci',
    icon: '🎨',
    schedule: [
      'Pon - Czw: 9:00 - 17:00',
      'Piątek: 9:00 - 15:00',
      'Sobota: I i III: 8:30 - 12:30'
    ]
  },
  {
    name: 'Czytelnia',
    icon: '📖',
    schedule: [
      'Pon - Czw: 9:00 - 17:00',
      'Piątek: 9:00 - 15:00',
      'Sobota: Nieczynne'
    ]
  }
]

const holidays = [
  '1 stycznia - Nowy Rok',
  '6 stycznia - Trzech Króli',
  'Poniedziałek Wielkanocny',
  '1 maja - Święto Pracy',
  '3 maja - Święto Konstytucji 3 Maja',
  'Dzień Bożego Ciała',
  '15 sierpnia - Wniebowzięcie NMP',
  '1 listopada - Wszystkich Świętych',
  '11 listopada - Święto Niepodległości',
  '25-26 grudnia - Boże Narodzenie'
]

export default function OpeningHoursPage() {
  // Get current day for highlighting
  const currentDay = new Date().toLocaleDateString('pl-PL', { weekday: 'long' })
  const dayMap: Record<string, string> = {
    'poniedziałek': 'Poniedziałek',
    'wtorek': 'Wtorek',
    'środa': 'Środa',
    'czwartek': 'Czwartek',
    'piątek': 'Piątek',
    'sobota': 'Sobota',
    'niedziela': 'Niedziela'
  }
  const todayName = dayMap[currentDay.toLowerCase()]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Badge className="mb-4" variant="secondary">
          <Clock className="mr-1 h-3 w-3" />
          Godziny pracy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Godziny Otwarcia
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Sprawdź, kiedy możesz nas odwiedzić
        </p>
      </motion.div>

      {/* Main Schedule */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              Aktualny Harmonogram
            </CardTitle>
            <CardDescription>
              Godziny otwarcia głównej biblioteki
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {weekSchedule.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                    item.day === todayName
                      ? 'bg-primary/10 border-2 border-primary'
                      : 'bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.day === todayName && (
                      <Badge variant="default" className="text-xs">
                        Dziś
                      </Badge>
                    )}
                    <span className={`font-semibold ${
                      item.day === todayName ? 'text-primary' : ''
                    }`}>
                      {item.day}
                    </span>
                  </div>
                  <span className={`font-medium ${
                    item.isOpen 
                      ? 'text-foreground' 
                      : 'text-muted-foreground'
                  }`}>
                    {item.hours}
                  </span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Department Hours */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-6">Godziny Poszczególnych Działów</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {departmentHours.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <Card>
                <CardHeader>
                  <div className="text-4xl mb-2 text-center">{dept.icon}</div>
                  <CardTitle className="text-center text-lg">
                    {dept.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {dept.schedule.map((time, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{time}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Special Notices */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Skontrum Notice */}
          <Card className="border-amber-500/50 bg-amber-50/50 dark:bg-amber-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                Skontrum 2025
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="font-semibold text-amber-900 dark:text-amber-100">
                Biblioteka będzie nieczynna w dniach 14-25 kwietnia 2025 r.
              </p>
              <p className="text-muted-foreground">
                Z powodu przeprowadzania skontrum (inwentaryzacji zbiorów). 
                Przepraszamy za utrudnienia.
              </p>
            </CardContent>
          </Card>

          {/* Summer Hours Notice */}
          <Card className="border-blue-500/50 bg-blue-50/50 dark:bg-blue-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Info className="h-5 w-5 text-blue-600" />
                Letnie Godziny Pracy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="font-semibold text-blue-900 dark:text-blue-100">
                Lipiec - Sierpień: skrócone godziny
              </p>
              <p className="text-muted-foreground">
                W okresie wakacyjnym obowiązują zmienione godziny pracy. 
                Szczegóły będą dostępne od czerwca.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Holidays */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Dni Wolne od Pracy</CardTitle>
            <CardDescription>
              Biblioteka jest nieczynna w następujące dni
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {holidays.map((holiday, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground py-1"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{holiday}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 pt-4 border-t">
              Dodatkowo biblioteka jest nieczynna w każdą niedzielę
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Accessibility */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Accessibility className="h-5 w-5 text-primary" />
              Dostępność dla Osób z Niepełnosprawnościami
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-muted-foreground">Podjazd dla wózków inwalidzkich</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-muted-foreground">Dostosowane wejście główne</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-muted-foreground">Toaleta dla osób z niepełnosprawnościami</span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-muted-foreground">Możliwość wejścia z psem asystującym</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-muted-foreground">Przeszkoleni pracownicy</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">⚠</span>
                  <span className="text-muted-foreground">Brak windy - parter w pełni dostępny</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 pt-4 border-t">
              W razie jakichkolwiek trudności prosimy o kontakt telefoniczny - 
              pracownicy chętnie pomogą!
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="text-center bg-muted/50">
          <CardContent className="py-12">
            <h3 className="text-2xl font-bold mb-4">Potrzebujesz więcej informacji?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Skontaktuj się z nami telefonicznie lub mailowo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+48166317200" className="font-semibold hover:text-primary transition-colors">
                  16 631 72 00
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:biblioteka@narol.pl" className="font-semibold hover:text-primary transition-colors">
                  biblioteka@narol.pl
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="/kontakt">
                  Formularz kontaktowy
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/o-bibliotece">
                  <MapPin className="mr-2 h-4 w-4" />
                  Jak do nas trafić
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}