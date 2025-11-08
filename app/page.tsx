'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Calendar,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Heart,
  Award,
  Newspaper,
  GraduationCap,
  Baby,
} from 'lucide-react'

const stats = [
  { icon: BookOpen, label: 'Książek', value: '15,000+', color: 'text-green-600' },
  { icon: Users, label: 'Czytelników', value: '2,500+', color: 'text-blue-600' },
  { icon: Calendar, label: 'Wydarzeń rocznie', value: '120+', color: 'text-purple-600' },
  { icon: Award, label: 'Lat działalności', value: '75+', color: 'text-amber-600' },
]

const services = [
  {
    icon: BookOpen,
    title: 'Wypożyczalnia',
    description: 'Bogaty zbiór literatury pięknej, popularnonaukowej i fachowej dla wszystkich grup wiekowych.',
    link: '/wypozyczalnia',
  },
  {
    icon: GraduationCap,
    title: 'Czytelnia',
    description: 'Przestrzeń do nauki i pracy z dostępem do prasy, czasopism i Internetu.',
    link: '/czytelnia',
  },
  {
    icon: Baby,
    title: 'Dla dzieci',
    description: 'Kącik dla najmłodszych z bogatą kolekcją książek, zabawek i zajęć edukacyjnych.',
    link: '/dla-dzieci',
  },
  {
    icon: Calendar,
    title: 'Wydarzenia',
    description: 'Spotkania autorskie, warsztaty, konkursy i inne wydarzenia kulturalne.',
    link: '/wydarzenia',
  },
]

const news = [
  {
    title: 'Noc Bibliotek 2025',
    date: '15 maja 2025',
    category: 'Wydarzenie',
    description: 'Zapraszamy na wyjątkową noc pełną atrakcji dla całej rodziny!',
    badge: 'Wkrótce',
  },
  {
    title: 'Warsztaty dla seniorów',
    date: '10 kwietnia 2025',
    category: 'Warsztat',
    description: 'Bezpłatne zajęcia z obsługi komputera i Internetu.',
    badge: 'Zapisy',
  },
  {
    title: 'Konkurs czytelniczy',
    date: '1 marca 2025',
    category: 'Konkurs',
    description: 'Ruszył tegoroczny konkurs dla uczniów szkół podstawowych.',
    badge: 'Aktywny',
  },
]

const backgroundImages = [
  '/heroBackground/biblioteka1.jpg',
  '/heroBackground/biblioteka2.jpg',
  '/heroBackground/biblioteka3.jpg',
  '/heroBackground/biblioteka4.jpg',
]

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 7000) 
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[80vh] flex items-center justify-center">
        {/* Background Slideshow  */}
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentImage}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${backgroundImages[currentImage]})`,
                filter: 'blur(6px)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-white/30" />
        </div>


        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 text-sm" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" aria-hidden="true" />
                Otwarta dla wszystkich
              </Badge>
              <h1 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block text-foreground">Witaj w</span>
                <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  Bibliotece Narol
                </span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl leading-relaxed">
                Miejsko-Gminna Biblioteka Publiczna im. Tadeusza Polanowskiego. 
                Twoje centrum kultury, wiedzy i społeczności lokalnej.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="group">
                  <Link href="/katalog">
                    <BookOpen className="mr-2 h-5 w-5" aria-hidden="true" />
                    Przeszukaj katalog
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/o-bibliotece">
                    <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
                    Poznaj nas
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Hero Image/Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-2xl border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Award className="h-6 w-6 text-primary" aria-hidden="true" />
                    Nasza Biblioteka w liczbach
                  </CardTitle>
                  <CardDescription>
                    Ponad 75 lat służby społeczności Narola
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          className="flex flex-col items-center text-center p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                        >
                          <Icon className={`h-8 w-8 mb-2 ${stat.color}`} aria-hidden="true" />
                          <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Nasze usługi
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Odkryj wszystko, co nasza biblioteka ma do zaoferowania
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all hover:shadow-xl hover:-translate-y-1 group">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="ghost" className="group/link">
                        <Link href={service.link}>
                          Dowiedz się więcej
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-muted/50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex items-center justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Aktualności
              </h2>
              <p className="text-lg text-muted-foreground">
                Bądź na bieżąco z wydarzeniami w bibliotece
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="/wydarzenia">
                <Newspaper className="mr-2 h-4 w-4" aria-hidden="true" />
                Wszystkie wydarzenia
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-3 flex items-center justify-between">
                      <Badge variant="secondary">{item.category}</Badge>
                      <Badge variant="outline">{item.badge}</Badge>
                    </div>
                    <CardTitle className="text-xl leading-tight">{item.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      <time dateTime={item.date}>{item.date}</time>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link href="/wydarzenia">
                <Newspaper className="mr-2 h-4 w-4" aria-hidden="true" />
                Wszystkie wydarzenia
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-2">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-primary to-secondary p-8 md:p-12 text-primary-foreground">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Odwiedź nas lub skontaktuj się
                </h2>
                <p className="mb-8 text-lg opacity-90">
                  Jesteśmy tu, aby Ci pomóc. Przyjdź osobiście lub skontaktuj się z nami telefonicznie czy mailowo.
                </p>
                <div className="space-y-4">
                  <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Link href="/kontakt">
                      <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                      Formularz kontaktowy
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-card p-8 md:p-12">
                <h3 className="mb-6 text-xl font-bold">Dane kontaktowe</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">Adres</div>
                      <div className="text-muted-foreground">
                        ul. Rynek 1<br />
                        37-610 Narol
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">Telefon</div>
                      <a 
                        href="tel:+48166317200" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        16 631 72 00
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <a 
                        href="mailto:biblioteka@narol.pl" 
                        className="text-muted-foreground hover:text-foreground transition-colors break-all"
                      >
                        biblioteka@narol.pl
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">Godziny otwarcia</div>
                      <Button asChild variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                        <Link href="/godziny-otwarcia">
                          Zobacz godziny otwarcia
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}