'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Newspaper, 
  Calendar,
  Tag,
  ArrowRight,
  Sparkles,
  Bell,
  Filter
} from 'lucide-react'
import Link from 'next/link'

type NewsCategory = 'all' | 'wydarzenia' | 'nowosci' | 'ogloszenia' | 'konkursy'

interface NewsItem {
  id: string
  title: string
  excerpt: string
  date: string
  category: NewsCategory
  slug: string
}

const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Noc Bibliotek 2025 - Zapisz się już dziś!',
    excerpt: 'Zapraszamy na wyjątkową noc pełną atrakcji! Spotkania autorskie, warsztaty kreatywne, konkursy z nagrodami, nocne czytanie i wiele więcej. Wydarzenie dla całej rodziny.',
    date: '15 czerwca 2025',
    category: 'wydarzenia',
    slug: 'noc-bibliotek-2025'
  },
  {
    id: '2',
    title: 'Nowe książki w kolekcji - Ponad 100 pozycji!',
    excerpt: 'Z przyjemnością informujemy, że do naszych zbiorów trafiło ponad 100 nowych książek. W tym bestsellery, literatura popularna, poradniki oraz książki dla dzieci i młodzieży.',
    date: '1 listopada 2025',
    category: 'nowosci',
    slug: 'nowe-ksiazki-listopad'
  },
  {
    id: '3',
    title: 'Konkurs Czytelniczy dla Szkół Podstawowych',
    excerpt: 'Ruszył tegoroczny konkurs czytelniczy dla uczniów szkół podstawowych. Czekają wspaniałe nagrody książkowe i dyplomy dla najlepszych czytelników!',
    date: '1 marca 2025',
    category: 'konkursy',
    slug: 'konkurs-czytelniczy-2025'
  },
  {
    id: '4',
    title: 'Warsztaty dla Seniorów - Komputery i Internet',
    excerpt: 'Zapraszamy seniorów na bezpłatne warsztaty z obsługi komputera i Internetu. Nauka podstaw, poczta email, zakupy online i komunikatory. Zapisy w bibliotece.',
    date: '10 kwietnia 2025',
    category: 'wydarzenia',
    slug: 'warsztaty-dla-seniorow'
  },
  {
    id: '5',
    title: 'Zmiana godzin pracy w okresie świątecznym',
    excerpt: 'Informujemy, że w okresie świąt wielkanocnych biblioteka będzie czynna w zmienionych godzinach. Szczegóły w ogłoszeniu.',
    date: '25 marca 2025',
    category: 'ogloszenia',
    slug: 'godziny-wielkanoc'
  },
  {
    id: '6',
    title: 'Mała Książka - Wielki Człowiek: Nowa Edycja',
    excerpt: 'Ruszyła nowa edycja programu "Mała Książka - Wielki Człowiek" dla dzieci w wieku 3-6 lat. Bezpłatne książki dla wszystkich uczestników! Zapisy w bibliotece.',
    date: '15 lutego 2025',
    category: 'nowosci',
    slug: 'mala-ksiazka-2025'
  },
  {
    id: '7',
    title: 'Spotkanie z Autorką Anną Kowalską',
    excerpt: 'Zapraszamy na spotkanie z Anną Kowalską, autorką bestsellerowej powieści "Szept Wiatru". Rozmowa, autografy i literacka atmosfera. Wstęp wolny.',
    date: '20 maja 2025',
    category: 'wydarzenia',
    slug: 'spotkanie-anna-kowalska'
  },
  {
    id: '8',
    title: 'Skontrum - Biblioteka Nieczynna',
    excerpt: 'W dniach 14-25 kwietnia biblioteka będzie nieczynna z powodu przeprowadzania skontrum (inwentaryzacji zbiorów). Przepraszamy za utrudnienia.',
    date: '1 kwietnia 2025',
    category: 'ogloszenia',
    slug: 'skontrum-2025'
  },
  {
    id: '9',
    title: 'Konkurs Plastyczny "Moja Ulubiona Książka"',
    excerpt: 'Ogłaszamy konkurs plastyczny dla dzieci i młodzieży. Temat: Moja Ulubiona Książka. Prace przyjmujemy do końca marca. Nagrody dla zwycięzców!',
    date: '5 marca 2025',
    category: 'konkursy',
    slug: 'konkurs-plastyczny-2025'
  },
  {
    id: '10',
    title: 'Dyskusyjny Klub Książki - Nowe Spotkanie',
    excerpt: 'Kolejne spotkanie DKK już 15 marca! Tym razem rozmawiamy o powieści "Mistrz i Małgorzata" Bułhakowa. Zapraszamy wszystkich miłośników literatury.',
    date: '1 marca 2025',
    category: 'wydarzenia',
    slug: 'dkk-marzec-2025'
  }
]

const categories: { value: NewsCategory; label: string; color: string }[] = [
  { value: 'all', label: 'Wszystkie', color: 'default' },
  { value: 'wydarzenia', label: 'Wydarzenia', color: 'default' },
  { value: 'nowosci', label: 'Nowości', color: 'secondary' },
  { value: 'ogloszenia', label: 'Ogłoszenia', color: 'outline' },
  { value: 'konkursy', label: 'Konkursy', color: 'default' }
]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('all')

  const filteredNews = selectedCategory === 'all' 
    ? newsData 
    : newsData.filter(item => item.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Badge className="mb-4" variant="secondary">
          <Newspaper className="mr-1 h-3 w-3" />
          Co nowego
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Aktualności
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Bądź na bieżąco z najnowszymi wydarzeniami i informacjami z biblioteki
        </p>
      </motion.div>

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
          <CardContent className="py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Nie przegap żadnej nowości!</h3>
                  <p className="text-muted-foreground">
                    Zapisz się do newslettera i otrzymuj informacje o wydarzeniach prosto na swoją skrzynkę
                  </p>
                </div>
              </div>
              <Button asChild size="lg" className="flex-shrink-0">
                <Link href="/kontakt">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Zapisz się
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Filter className="h-5 w-5 text-primary" />
              Filtruj aktualności
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  <Tag className="mr-2 h-3 w-3" />
                  {category.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* News Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {filteredNews.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant={
                    item.category === 'wydarzenia' ? 'default' :
                    item.category === 'nowosci' ? 'secondary' :
                    'outline'
                  }>
                    {categories.find(c => c.value === item.category)?.label}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <time dateTime={item.date}>{item.date}</time>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed mb-4">
                  {item.excerpt}
                </CardDescription>
                <Button variant="ghost" className="group/link p-0 h-auto font-semibold">
                  Czytaj więcej
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredNews.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
            <Newspaper className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Brak aktualności w tej kategorii</h3>
          <p className="text-muted-foreground mb-4">
            Spróbuj wybrać inną kategorię lub sprawdź później
          </p>
          <Button variant="outline" onClick={() => setSelectedCategory('all')}>
            Pokaż wszystkie
          </Button>
        </motion.div>
      )}

      {/* Archive Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Card className="inline-block">
          <CardContent className="py-6 px-8">
            <p className="text-muted-foreground mb-4">
              Szukasz starszych aktualności?
            </p>
            <Button variant="outline" asChild>
              <Link href="/aktualnosci/archiwum">
                Zobacz archiwum
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}