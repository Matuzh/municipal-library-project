'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  BookOpen, 
  Users, 
  Award, 
  Heart, 
  Building2, 
  History,
  Target,
  Sparkles
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Badge className="mb-4" variant="secondary">
          <History className="mr-1 h-3 w-3" />
          Od 1950 roku
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          O Bibliotece
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Miejsko-Gminna Biblioteka Publiczna im. Tadeusza Polanowskiego w Narolu
        </p>
      </motion.div>

      {/* Historia */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <History className="h-6 w-6 text-primary" />
              Historia
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Miejsko-Gminna Biblioteka Publiczna w Narolu została założona w <strong>1950 roku</strong>. 
              Przez ponad 75 lat działalności biblioteka stała się nieodłącznym elementem życia kulturalnego 
              i edukacyjnego społeczności Narola i okolicznych miejscowości.
            </p>
            <p className="leading-relaxed">
              W <strong>1985 roku</strong> bibliotece nadano imię <strong>Tadeusza Polanowskiego</strong>, 
              wybitnego działacza społecznego i oświatowego, który przyczynił się do rozwoju czytelnictwa 
              w regionie. Jego pasja do krzewienia kultury i edukacji pozostaje naszą inspiracją do dziś.
            </p>
            <p className="leading-relaxed">
              Na przestrzeni lat biblioteka wielokrotnie zmieniała swoje siedziby, ostatecznie trafiając 
              do zabytkowej kamienicy przy <strong>Rynku 1</strong>, gdzie znajduje się do dziś. Budynek ten, 
              po gruntownej renowacji, idealnie łączy historyczny charakter z nowoczesnymi wymogami 
              współczesnej biblioteki.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Misja i wizja */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Nasza Misja
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="leading-relaxed">
                Wspieranie rozwoju kulturalnego i edukacyjnego społeczności lokalnej poprzez 
                zapewnienie powszechnego dostępu do wiedzy, kultury i informacji. Tworzymy 
                przestrzeń spotkań, dialogu i inspiracji dla wszystkich pokoleń.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Nasza Wizja
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="leading-relaxed">
                Być nowoczesnym centrum kultury i wiedzy, które inspiruje do czytania, uczy kreatywności 
                i łączy ludzi. Dążymy do tego, by biblioteka była miejscem przyjaznym, otwartym i dostępnym 
                dla każdego.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Zbiory */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Nasze Zbiory</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>15,000+</CardTitle>
              <CardDescription>Książek</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Literatura piękna, popularnonaukowa, naukowa i fachowa
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>2,500+</CardTitle>
              <CardDescription>Czytelników</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Aktywnych zarejestrowanych użytkowników biblioteki
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>120+</CardTitle>
              <CardDescription>Wydarzeń rocznie</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Spotkania autorskie, warsztaty i konkursy
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>75+</CardTitle>
              <CardDescription>Lat działalności</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Tradycja i doświadczenie w służbie społeczności
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Struktura */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Building2 className="h-6 w-6 text-primary" />
              Struktura Organizacyjna
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Dyrektor</h3>
                <p className="text-muted-foreground">
                  Kieruje całością działalności biblioteki i reprezentuje ją na zewnątrz
                </p>
              </div>

              <Separator />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Wypożyczalnia dla dorosłych</h3>
                  <p className="text-sm text-muted-foreground">
                    Obsługa czytelników dorosłych, pomoc w wyborze lektury
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Wypożyczalnia dla dzieci</h3>
                  <p className="text-sm text-muted-foreground">
                    Obsługa młodych czytelników, organizacja zajęć edukacyjnych
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Czytelnia</h3>
                  <p className="text-sm text-muted-foreground">
                    Dostęp do czasopism, prasy i pracy na miejscu
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Dział informacyjno-bibliograficzny</h3>
                  <p className="text-sm text-muted-foreground">
                    Pomoc w wyszukiwaniu informacji i korzystaniu z katalogów
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Współpraca */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-2xl">Współpraca</CardTitle>
            <CardDescription>
              Biblioteka aktywnie współpracuje z wieloma instytucjami
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Szkołami i przedszkolami z terenu gminy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Gminnym Ośrodkiem Kultury w Narolu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Biblioteką Wojewódzką w Rzeszowie</span>
                </li>
              </ul>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Stowarzyszeniem Bibliotekarzy Polskich</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Lokalnymi organizacjami pozarządowymi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Instytucjami kultury w regionie</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}