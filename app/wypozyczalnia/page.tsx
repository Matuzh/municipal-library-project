'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  BookOpen,
  Users,
  Clock,
  CreditCard,
  Calendar,
  CheckCircle2,
  XCircle,
  AlertCircle,
  UserPlus,
  RefreshCw,
  Search,
  BookMarked
} from 'lucide-react'
import Link from 'next/link'

const collections = [
  {
    title: 'Literatura piękna',
    description: 'Polscy i zagraniczni autorzy, klasyka i współczesność',
    count: '8,000+',
    icon: '📚'
  },
  {
    title: 'Literatura popularnonaukowa',
    description: 'Poradniki, biografie, historia, nauka',
    count: '3,500+',
    icon: '🔬'
  },
  {
    title: 'Literatura dziecięca',
    description: 'Bajki, baśnie, książki dla młodzieży',
    count: '3,000+',
    icon: '🎨'
  },
  {
    title: 'Audiobooki',
    description: 'Słuchowiska i książki w wersji audio',
    count: '500+',
    icon: '🎧'
  }
]

const rules = [
  {
    icon: CheckCircle2,
    title: 'Może wypożyczyć',
    color: 'text-green-600',
    items: [
      'Każda osoba po wypełnieniu karty czytelnika',
      'Do 5 książek jednocześnie',
      'Okres wypożyczenia: 30 dni',
      'Możliwość prolongaty (jeśli książka nie jest zarezerwowana)',
      'Bezpłatne wypożyczanie książek',
      'Osoby niepełnoletnie (za zgodą rodzica/opiekuna)'
    ]
  },
  {
    icon: XCircle,
    title: 'Nie można wypożyczyć',
    color: 'text-red-600',
    items: [
      'Zbiorów specjalnych i regionalnych',
      'Nowych pozycji (pierwsz e 30 dni od zakupu)',
      'Czasopism z bieżącego miesiąca',
      'Encyklopedii i słowników',
      'Materiałów uszkodzonych',
      'Książek zarezerwowanych przez innych czytelników'
    ]
  }
]

const fees = [
  { item: 'Wypożyczanie książek', price: 'Bezpłatne' },
  { item: 'Zapis do biblioteki', price: 'Bezpłatne' },
  { item: 'Pierwsza karta czytelnika', price: 'Bezpłatne' },
  { item: 'Duplikat karty', price: '5 zł' },
  { item: 'Przetrzymanie książki', price: '0,50 zł/dzień' },
  { item: 'Prolongata online/telefoniczna', price: 'Bezpłatne' },
]

export default function LendingPage() {
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
          Usługi biblioteczne
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Wypożyczalnia
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ponad 15,000 książek dostępnych do wypożyczenia dla wszystkich czytelników
        </p>
      </motion.div>

      {/* Hero Card */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-16"
      >
        <Card className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 border-2">
          <CardContent className="py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Jak to działa?</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Wypożyczanie książek z naszej biblioteki jest proste, szybkie i całkowicie bezpłatne. 
                  Wystarczy zapisać się do biblioteki i możesz cieszyć się dostępem do tysięcy książek.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="#zapis">
                      <UserPlus className="mr-2 h-5 w-5" />
                      Jak się zapisać?
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/katalog">
                      <Search className="mr-2 h-5 w-5" />
                      Przeszukaj katalog
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">5</div>
                    <div className="text-sm text-muted-foreground">Książek jednocześnie</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">30</div>
                    <div className="text-sm text-muted-foreground">Dni wypożyczenia</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">0 zł</div>
                    <div className="text-sm text-muted-foreground">Koszt wypożyczenia</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">∞</div>
                    <div className="text-sm text-muted-foreground">Prolongat</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Collections */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Nasze Zbiory</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Szeroki wybór literatury dla każdego czytelnika
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-5xl mb-3">{collection.icon}</div>
                  <CardTitle className="text-lg">{collection.title}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {collection.count} pozycji
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{collection.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Rules */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Zasady Wypożyczania</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Poznaj warunki korzystania z wypożyczalni
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {rules.map((rule, index) => {
            const Icon = rule.icon
            return (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className={`h-6 w-6 ${rule.color}`} />
                      {rule.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {rule.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Icon className={`h-4 w-4 ${rule.color} mt-0.5 flex-shrink-0`} />
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

      {/* How to Register */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
        id="zapis"
      >
        <Card className="bg-gradient-to-br from-secondary/5 to-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <UserPlus className="h-6 w-6 text-primary" />
              Jak Zostać Czytelnikiem?
            </CardTitle>
            <CardDescription>
              Zapis do biblioteki jest bezpłatny i prosty
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              {[
                { step: '1', title: 'Przyjdź do biblioteki', desc: 'Z dowodem osobistym' },
                { step: '2', title: 'Wypełnij kartę', desc: 'Czytelnika' },
                { step: '3', title: 'Zaakceptuj regulamin', desc: 'I RODO' },
                { step: '4', title: 'Gotowe!', desc: 'Możesz wypożyczać' }
              ].map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground mx-auto mb-3 flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Ważne informacje
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Osoby niepełnoletnie (do 13 lat) wymagają zgody rodzica/opiekuna</li>
                <li>• Pierwsza karta czytelnika jest bezpłatna</li>
                <li>• Karta jest ważna bezterminowo</li>
                <li>• Możesz korzystać ze wszystkich filii biblioteki</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Prolongation and Returns */}
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
                <RefreshCw className="h-5 w-5 text-primary" />
                Prolongata
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Możesz przedłużyć termin zwrotu książki, jeśli nie jest ona zarezerwowana przez innego czytelnika.
              </p>
              <div className="space-y-2 text-sm">
                <h4 className="font-semibold">Sposoby prolongaty:</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Online poprzez katalog</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Telefonicznie: 16 631 72 00</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Osobiście w bibliotece</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookMarked className="h-5 w-5 text-primary" />
                Zwroty
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Książki należy zwracać w terminie osobiście w bibliotece.
              </p>
              <div className="space-y-2 text-sm">
                <h4 className="font-semibold">Gdzie zwrócić:</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>W wypożyczalni (w godzinach otwarcia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>W dowolnej filii biblioteki</span>
                  </li>
                </ul>
                <p className="text-muted-foreground pt-2">
                  <strong>Uwaga:</strong> Za przetrzymanie książki pobierana jest kara 0,50 zł za każdy dzień.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Fees */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Cennik Usług
            </CardTitle>
            <CardDescription>
              Większość usług bibliotecznych jest bezpłatna
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {fees.map((fee, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <span className="font-medium">{fee.item}</span>
                  <Badge variant={fee.price === 'Bezpłatne' ? 'secondary' : 'outline'}>
                    {fee.price}
                  </Badge>
                </div>
              ))}
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
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Odwiedź nas!</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Zapraszamy do naszej wypożyczalni w godzinach otwarcia. 
              Nasi bibliotekarze chętnie pomogą w wyborze książek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/godziny-otwarcia">
                  <Calendar className="mr-2 h-4 w-4" />
                  Zobacz godziny otwarcia
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/kontakt">
                  Skontaktuj się z nami
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}