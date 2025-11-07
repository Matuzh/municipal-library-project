'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Baby,
  BookOpen,
  Palette,
  Music,
  Puzzle,
  Heart,
  Star,
  Users,
  Gift,
  Sparkles,
  Calendar,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

interface Program {
  id: string
  title: string
  description: string
  age: string
  icon: any
  schedule?: string
  registration: boolean
}

const programs: Program[] = [
  {
    id: '1',
    title: 'Mała Książka - Wielki Człowiek',
    description: 'Ogólnopolski program promocji czytelnictwa dla dzieci w wieku 3-6 lat. Każde dziecko otrzymuje bezpłatnie pierwszą książkę oraz Kartę Małego Czytelnika. Rodzice otrzymują porady dotyczące czytania z dziećmi.',
    age: '3-6 lat',
    icon: Gift,
    schedule: 'Cały rok - zapisy w bibliotece',
    registration: true
  },
  {
    id: '2',
    title: 'Biblioteczny Klub Malucha',
    description: 'Cykliczne spotkania dla najmłodszych czytelników. Głośne czytanie bajek, zabawy z książką, piosenki, zagadki i kreatywne zadania rozwijające wyobraźnię i miłość do czytania.',
    age: '3-5 lat',
    icon: Baby,
    schedule: 'Każdy czwartek, godz. 10:00-11:00',
    registration: true
  },
  {
    id: '3',
    title: 'Warsztaty Plastyczne',
    description: 'Kreatywne zajęcia rozwijające zdolności manualne i artystyczne. Malowanie, rysowanie, wycinanie, klejenie. Tworzymy zakładki do książek, ozdoby i ilustracje do ulubionych historii.',
    age: '6-12 lat',
    icon: Palette,
    schedule: 'Co dwa tygodnie, soboty 15:00-17:00',
    registration: true
  },
  {
    id: '4',
    title: 'Bajkowe Czytanie',
    description: 'Głośne czytanie najpiękniejszych bajek i baśni z całego świata. Dzieci słuchają, oglądają ilustracje, dyskutują o bohaterach i przygodach. Rozwijamy wyobraźnię i słownictwo.',
    age: '4-8 lat',
    icon: BookOpen,
    schedule: 'Każda sobota, godz. 11:00-12:00',
    registration: false
  },
  {
    id: '5',
    title: 'Gry i Zagadki Logiczne',
    description: 'Zajęcia rozwijające myślenie logiczne, koncentrację i umiejętność rozwiązywania problemów. Gry planszowe, puzzle, rebusy i zagadki dostosowane do wieku dzieci.',
    age: '7-12 lat',
    icon: Puzzle,
    schedule: 'Piątki, godz. 16:00-17:30',
    registration: true
  },
  {
    id: '6',
    title: 'Piosenka i Bajka',
    description: 'Muzyczno-literackie spotkania łączące czytanie z śpiewaniem. Poznajemy piosenki z bajek, śpiewamy razem, poznajemy instrumenty muzyczne. Radosna atmosfera gwarantowana!',
    age: '3-7 lat',
    icon: Music,
    schedule: 'Co miesiąc - szczegóły w aktualnoś ciach',
    registration: true
  }
]

const collections = [
  {
    title: 'Książki dla najmłodszych',
    description: 'Kartonowe książeczki, wierszyki, pierwsze bajki',
    age: '0-3 lata',
    icon: '👶'
  },
  {
    title: 'Bajki i baśnie',
    description: 'Klasyka literatury dziecięcej, ilustrowane opowieści',
    age: '4-7 lat',
    icon: '📚'
  },
  {
    title: 'Przygodowe powieści',
    description: 'Seria przygodowe, detektywistyczne, fantastyka',
    age: '8-12 lat',
    icon: '🔍'
  },
  {
    title: 'Literatura młodzieżowa',
    description: 'Powieści obyczajowe, science fiction, fantasy',
    age: '13+ lat',
    icon: '🌟'
  }
]

export default function ForChildrenPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Badge className="mb-4" variant="secondary">
          <Heart className="mr-1 h-3 w-3" />
          Dla młodych czytelników
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Dla Dzieci
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Odkryj magiczny świat książek! Programy, zajęcia i zbiory dla najmłodszych czytelników
        </p>
      </motion.div>

      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-16"
      >
        <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border-2">
          <CardContent className="py-12 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
              <Sparkles className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Kącik dla Dzieci</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Specjalna przestrzeń w naszej bibliotece stworzona z myślą o najmłodszych. 
              Kolorowe wnętrze, wygodne pufy, zabawki edukacyjne i tysiące książek czekają na małych odkrywców!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/godziny-otwarcia">
                  <Calendar className="mr-2 h-4 w-4" />
                  Zobacz godziny
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/kontakt">
                  <Users className="mr-2 h-4 w-4" />
                  Skontaktuj się
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Programs Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Nasze Programy i Zajęcia</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Różnorodne programy edukacyjne i kreatywne dla dzieci w każdym wieku
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary">{program.age}</Badge>
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="leading-relaxed">
                      {program.description}
                    </CardDescription>
                    
                    {program.schedule && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{program.schedule}</span>
                      </div>
                    )}

                    {program.registration && (
                      <Button className="w-full" variant="outline">
                        <Star className="mr-2 h-4 w-4" />
                        Zapisz dziecko
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Collections Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Nasze Zbiory dla Dzieci</CardTitle>
            <CardDescription>
              Ponad 3,000 książek dla dzieci w różnym wieku
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="p-6 rounded-lg bg-muted/50 text-center hover:bg-muted transition-colors"
                >
                  <div className="text-4xl mb-3">{collection.icon}</div>
                  <h3 className="font-semibold mb-2">{collection.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {collection.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {collection.age}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Parent's Corner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Card className="bg-gradient-to-br from-secondary/5 to-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              Dla Rodziców
            </CardTitle>
            <CardDescription>
              Wskazówki i materiały pomocne w rozwijaniu czytelnictwa u dzieci
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Jak zachęcić dziecko do czytania?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Czytaj dziecku codziennie, najlepiej przed snem - buduj rytuał czytania</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Daj dziecku wybór książki - niech samo decyduje, co chce przeczytać</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Bądź wzorem - czytaj przy dziecku, pokaż że Ty też lubisz książki</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Odwiedzaj z dzieckiem bibliotekę regularnie - niech to będzie przyjemny rytuał</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Rozmawiaj o przeczytanych książkach, zadawaj pytania o postacie i przygody</span>
                </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-background">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  Rekomendacje książkowe
                </h4>
                <p className="text-sm text-muted-foreground">
                  Regularnie aktualizowana lista polecanych książek dla różnych grup wiekowych
                </p>
              </div>
              <div className="p-4 rounded-lg bg-background">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Porady bibliotekarzy
                </h4>
                <p className="text-sm text-muted-foreground">
                  Nasi bibliotekarze chętnie pomogą w doborze odpowiednich książek dla Twojego dziecka
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="text-center bg-muted/50">
          <CardContent className="py-12">
            <h3 className="text-2xl font-bold mb-4">Masz pytania?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Skontaktuj się z nami, aby dowiedzieć się więcej o programach dla dzieci, 
              zapisać dziecko na zajęcia lub uzyskać porady dotyczące czytelnictwa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  Skontaktuj się
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/godziny-otwarcia">
                  Zobacz godziny otwarcia
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}