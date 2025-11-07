'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Book, Users, Calendar, Headphones, Phone, Mail, MapPin, ArrowRight, BookOpen, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { StatCard } from '@/components/library/stat-card'
import { NewsCard } from '@/components/library/news-card'
import { FeatureBox } from '@/components/library/feature-box'
import type { News } from '@/types'

const newsData: News[] = [
  {
    id: '1',
    title: 'Noc Bibliotek 2025',
    description: 'Zapraszamy na wyjątkowy wieczór! Spotkania autorskie, warsztaty, konkursy z nagrodami. Idealna okazja dla całej rodziny!',
    date: '15 czerwca 2025',
    category: 'urgent',
    icon: '🔥',
    link: '/aktualnosci'
  },
  {
    id: '2',
    title: 'Nowe książki w kolekcji',
    description: 'Ponad 100 nowych pozycji! Bestsellery, literatura popularna, poradniki i książki dla dzieci.',
    date: '1 listopada 2025',
    category: 'new',
    icon: '✨',
    link: '/katalog'
  },
  {
    id: '3',
    title: 'Mała Książka – Wielki Człowiek',
    description: 'Ruszyła nowa edycja programu dla najmłodszych (3-6 lat). Bezpłatne książki dla uczestników!',
    date: 'Zapisz się już dziś!',
    category: 'program',
    icon: '📚',
    link: '/aktualnosci'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-24 lg:py-32 border-b-8 border-accent-warm"
        role="banner"
      >
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-warm/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">
              📚 Miejsko-Gminna Biblioteka Publiczna w Narolu
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-primary-50 leading-relaxed font-medium">
              Twoje centrum kultury, wiedzy i inspiracji – odkryj świat książek i wydarzeń w sercu Narola
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button asChild size="xl" variant="warning">
                <Link href="/katalog">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Przejrzyj Katalog
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="bg-white/10 hover:bg-white border-white">
                <Link href="/aktualnosci">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Zobacz Wydarzenia
                </Link>
              </Button>
              <Button asChild size="xl" variant="secondary">
                <Link href="/kontakt">
                  <Phone className="mr-2 h-5 w-5" />
                  Kontakt
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <section className="py-16 bg-background" aria-label="Statystyki biblioteki">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard number="15,000+" label="Książek w zbiorach" icon="📚" delay={0} />
            <StatCard number="2,500+" label="Aktywnych czytelników" icon="👥" delay={0.1} />
            <StatCard number="50+" label="Wydarzeń rocznie" icon="🎪" delay={0.2} />
            <StatCard number="100+" label="E-booków i audiobooków" icon="🎧" delay={0.3} />
          </div>
        </div>
      </section>

      <Separator />

      {/* Three Column Layout */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar - Quick Access */}
            <aside className="lg:col-span-3 space-y-6" aria-label="Szybki dostęp">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <Card className="border-4 border-primary-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <span className="text-3xl">⚡</span>
                      Szybkie odnośniki
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Button asChild className="w-full justify-start" size="lg">
                        <Link href="/uslugi">
                          <Book className="mr-2 h-5 w-5" />
                          Wypożyczalnia
                        </Link>
                      </Button>
                      <Button asChild className="w-full justify-start" variant="secondary" size="lg">
                        <Link href="/katalog">
                          <BookOpen className="mr-2 h-5 w-5" />
                          Katalog Online
                        </Link>
                      </Button>
                      <Button asChild className="w-full justify-start" variant="outline" size="lg">
                        <Link href="/godziny-otwarcia">
                          <Calendar className="mr-2 h-5 w-5" />
                          Godziny otwarcia
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6 border-2 border-primary-300">
                  <CardHeader>
                    <CardTitle className="text-xl">📞 Kontakt</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary-600" />
                      <a href="tel:+48166317200" className="font-semibold hover:text-primary-600">
                        16 631 72 00
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary-600" />
                      <a href="mailto:biblioteka@narol.pl" className="font-semibold hover:text-primary-600">
                        biblioteka@narol.pl
                      </a>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary-600 mt-1" />
                      <span className="font-semibold">ul. Rynek 1<br/>37-610 Narol</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-6" id="main-content" role="main" aria-label="Główna treść">
              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-black text-primary-700 mb-4 flex items-center justify-center gap-3">
                    <span className="text-accent-warm">◆</span>
                    Witamy w naszej bibliotece
                    <span className="text-accent-warm">◆</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Centrum kultury, edukacji i społeczności lokalnej
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <FeatureBox
                    icon="📚"
                    title="Bogaty księgozbiór"
                    description="Ponad 15,000 woluminów literatury pięknej, popularnonaukowej, fachowej i dziecięcej."
                    delay={0}
                  />
                  <FeatureBox
                    icon="💻"
                    title="Zasoby cyfrowe"
                    description="Dostęp do e-booków, audiobooków, czasopism cyfrowych i baz danych online."
                    delay={0.1}
                  />
                  <FeatureBox
                    icon="🎭"
                    title="Wydarzenia kulturalne"
                    description="Spotkania autorskie, warsztaty literackie, kluby czytelnicze i wystawy."
                    delay={0.2}
                  />
                  <FeatureBox
                    icon="👶"
                    title="Dla najmłodszych"
                    description="Program 'Mała Książka - Wielki Człowiek' i zajęcia edukacyjne dla dzieci."
                    delay={0.3}
                  />
                </div>
              </motion.div>

              <Separator />

              {/* Services Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="my-16"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-black text-primary-700 mb-4">
                    Nasze Usługi
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Wszystko, czego potrzebujesz w jednym miejscu
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <Badge variant="success" className="w-fit mb-2">Najpopularniejsze</Badge>
                      <CardTitle>Wypożyczalnia</CardTitle>
                      <CardDescription>
                        Wypożyczaj książki, audiobooki i czasopisma na dogodnych zasadach.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/uslugi">
                          Poznaj szczegóły
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Badge className="w-fit mb-2">Dostępne teraz</Badge>
                      <CardTitle>Czytelnia</CardTitle>
                      <CardDescription>
                        Komfortowe miejsce do nauki z dostępem do internetu i zasobów cyfrowych.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button asChild variant="secondary" className="w-full">
                        <Link href="/uslugi">
                          Dowiedz się więcej
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </motion.div>
            </main>

            {/* Right Sidebar - News */}
            <aside className="lg:col-span-3 space-y-6" aria-label="Aktualności i wydarzenia">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-4xl animate-bounce-subtle">🔥</span>
                  <h3 className="text-3xl font-black text-primary-700">Aktualności</h3>
                </div>
                
                <div className="space-y-6">
                  {newsData.map((news, index) => (
                    <NewsCard key={news.id} news={news} delay={index * 0.1} />
                  ))}
                </div>

                <Button asChild className="w-full mt-6" size="lg" variant="outline">
                  <Link href="/aktualnosci">
                    Zobacz wszystkie aktualności
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      <Separator />

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-br from-primary-50 to-primary-100"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-primary-700 mb-6">
            Dołącz do nas!
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Zostań częścią naszej społeczności czytelników. Bezpłatna rejestracja!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="xl" variant="warning">
              <Link href="/kontakt">
                Jak się zapisać?
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/o-bibliotece">
                O nas
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
