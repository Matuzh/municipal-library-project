'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  Ticket,
  CalendarDays,
  ArrowRight,
  UserPlus
} from 'lucide-react'
import Link from 'next/link'

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  category: 'warsztat' | 'spotkanie' | 'konkurs' | 'wystawa' | 'czytanie'
  capacity?: string
  registration: boolean
  featured?: boolean
}

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Noc Bibliotek 2025',
    description: 'Wyjątkowa noc pełna atrakcji! Spotkania autorskie, warsztaty kreatywne, konkursy z nagrodami, nocne czytanie i słodki poczęstunek. Wydarzenie dla całej rodziny.',
    date: '15 czerwca 2025',
    time: '18:00 - 23:00',
    location: 'Biblioteka Główna',
    category: 'spotkanie',
    capacity: 'Bez ograniczeń',
    registration: true,
    featured: true
  },
  {
    id: '2',
    title: 'Spotkanie z Autorką Anną Kowalską',
    description: 'Zapraszamy na spotkanie z Anną Kowalską, autorką bestsellerowej powieści "Szept Wiatru". Rozmowa o procesie twórczym, inspiracjach i planach literackich. Sesja autografów.',
    date: '20 maja 2025',
    time: '17:00 - 19:00',
    location: 'Sala konferencyjna',
    category: 'spotkanie',
    capacity: '50 osób',
    registration: true,
    featured: true
  },
  {
    id: '3',
    title: 'Warsztaty dla Seniorów: Komputery i Internet',
    description: 'Bezpłatne warsztaty z obsługi komputera i Internetu dla osób starszych. Podstawy obsługi, poczta email, komunikatory, bezpieczne zakupy online. Małe grupy, indywidualne podejście.',
    date: '10 kwietnia 2025',
    time: '10:00 - 12:00',
    location: 'Sala komputerowa',
    category: 'warsztat',
    capacity: '10 osób',
    registration: true
  },
  {
    id: '4',
    title: 'Dyskusyjny Klub Książki',
    description: 'Kolejne spotkanie DKK - tym razem omawiamy powieść "Mistrz i Małgorzata" Michaiła Bułhakowa. Dyskusja, wymiana opinii i literacka atmosfera. Zapraszamy wszystkich miłośników literatury.',
    date: '15 marca 2025',
    time: '18:00 - 20:00',
    location: 'Czytelnia',
    category: 'czytanie',
    capacity: '15 osób',
    registration: false
  },
  {
    id: '5',
    title: 'Warsztaty Plastyczne dla Dzieci',
    description: 'Kreatywne warsztaty dla dzieci w wieku 6-12 lat. Malowanie, wycinanie, klejenie - tworzymy zakładki do książek i ozdoby. Wszystkie materiały zapewnia biblioteka.',
    date: '25 kwietnia 2025',
    time: '15:00 - 17:00',
    location: 'Wypożyczalnia dla dzieci',
    category: 'warsztat',
    capacity: '15 dzieci',
    registration: true
  },
  {
    id: '6',
    title: 'Konkurs Czytelniczy - Finał',
    description: 'Wielki finał Konkursu Czytelniczego dla uczniów szkół podstawowych. Rozstrzygnięcie konkursu, wręczenie nagród i dyplomów. Zapraszamy uczestników, rodziców i nauczycieli.',
    date: '30 maja 2025',
    time: '16:00 - 18:00',
    location: 'Biblioteka Główna',
    category: 'konkurs',
    capacity: 'Bez ograniczeń',
    registration: false
  },
  {
    id: '7',
    title: 'Wystawa: "Książki z Naszego Dzieciństwa"',
    description: 'Nostalgiczna wystawa prezentująca klasykę literatury dziecięcej z lat 60-90. Oryginalne wydania, ilustracje, okładki. Możliwość przeglądania i wspominania.',
    date: '1 kwietnia - 30 kwietnia 2025',
    time: 'W godzinach otwarcia',
    location: 'Hol biblioteki',
    category: 'wystawa',
    registration: false
  },
  {
    id: '8',
    title: 'Głośne Czytanie dla Maluchów',
    description: 'Cykliczne spotkanie dla najmłodszych (3-6 lat). Czytamy bajki, oglądamy ilustracje, śpiewamy piosenki. Rozwój wyobraźni i miłości do książek od najmłodszych lat.',
    date: 'Każda sobota',
    time: '10:00 - 11:00',
    location: 'Kącik dla dzieci',
    category: 'czytanie',
    capacity: '10 dzieci z rodzicami',
    registration: false
  }
]

const categoryLabels: Record<Event['category'], { label: string; color: string }> = {
  warsztat: { label: 'Warsztat', color: 'default' },
  spotkanie: { label: 'Spotkanie', color: 'secondary' },
  konkurs: { label: 'Konkurs', color: 'outline' },
  wystawa: { label: 'Wystawa', color: 'outline' },
  czytanie: { label: 'Czytanie', color: 'default' }
}

export default function EventsPage() {
  const featuredEvents = upcomingEvents.filter(e => e.featured)
  const regularEvents = upcomingEvents.filter(e => !e.featured)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Badge className="mb-4" variant="secondary">
          <CalendarDays className="mr-1 h-3 w-3" />
          Kalendarz wydarzeń
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Wydarzenia
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Odkryj nadchodzące spotkania, warsztaty i wydarzenia w naszej bibliotece
        </p>
      </motion.div>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            Wyróżnione wydarzenia
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="default" className="bg-primary">
                      {categoryLabels[event.category].label}
                    </Badge>
                    <Badge variant="outline" className="border-primary text-primary">
                      <Star className="mr-1 h-3 w-3 fill-primary" />
                      Wyróżnione
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="leading-relaxed text-base">
                    {event.description}
                  </CardDescription>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    {event.capacity && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.capacity}</span>
                      </div>
                    )}
                  </div>

                  {event.registration && (
                    <Button className="w-full" size="lg">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Zapisz się
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>
      )}

      {/* All Events */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="h-6 w-6 text-primary" />
          Wszystkie wydarzenia
        </h2>
        <div className="space-y-4">
          {regularEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="py-6">
                  <div className="grid md:grid-cols-[1fr_auto] gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant={categoryLabels[event.category].color as any}>
                          {categoryLabels[event.category].label}
                        </Badge>
                        {event.registration && (
                          <Badge variant="outline">
                            <Ticket className="mr-1 h-3 w-3" />
                            Wymagana rejestracja
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        {event.capacity && (
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>{event.capacity}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center gap-2">
                      {event.registration ? (
                        <Button size="lg">
                          <UserPlus className="mr-2 h-4 w-4" />
                          Zapisz się
                        </Button>
                      ) : (
                        <Button variant="outline" size="lg">
                          Szczegóły
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <Card className="bg-muted/50">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Chcesz wiedzieć o nowych wydarzeniach?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Zapisz się do newslettera lub śledź nas na Facebooku, aby być na bieżąco ze wszystkimi spotkaniami i warsztatami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Zapisz się do newslettera
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://facebook.com/bibliotekanarol" target="_blank">
                  Facebook
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