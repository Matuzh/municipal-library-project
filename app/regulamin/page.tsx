'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  FileText,
  Download,
  Shield,
  BookOpen,
  Users,
  CreditCard,
  Scale,
  CheckCircle2,
  Phone,
  Mail
} from 'lucide-react'
import Link from 'next/link'

const chapters = [
  {
    number: 'I',
    title: 'Postanowienia Ogólne',
    icon: FileText,
    sections: [
      {
        paragraph: '§ 1',
        content: 'Miejsko-Gminna Biblioteka Publiczna im. Tadeusza Polanowskiego w Narolu, zwana dalej Biblioteką, działa na podstawie ustawy o bibliotekach z dnia 27 czerwca 1997 r. (Dz.U. z 2012 r. poz. 642 z późn. zm.) oraz ustawy o organizowaniu i prowadzeniu działalności kulturalnej.'
      },
      {
        paragraph: '§ 2',
        content: 'Biblioteka jest samorządową instytucją kultury, której organizatorem jest Gmina Narol.'
      },
      {
        paragraph: '§ 3',
        content: 'Niniejszy Regulamin określa zasady korzystania z Biblioteki, prawa i obowiązki użytkowników oraz zasady udostępniania zbiorów.'
      }
    ]
  },
  {
    number: 'II',
    title: 'Użytkownicy Biblioteki',
    icon: Users,
    sections: [
      {
        paragraph: '§ 4',
        content: 'Z usług Biblioteki może korzystać każda osoba, która zapozna się z Regulaminem i go zaakceptuje.'
      },
      {
        paragraph: '§ 5',
        content: 'Zapis do Biblioteki następuje po wypełnieniu karty czytelnika i okazaniu dokumentu tożsamości. Osoby niepełnoletnie do 13 roku życia wymagają zgody rodzica lub opiekuna prawnego.'
      },
      {
        paragraph: '§ 6',
        content: 'Korzystanie z usług Biblioteki jest bezpłatne. Opłaty pobierane są jedynie za usługi reprograficzne oraz kary za przetrzymanie materiałów bibliotecznych.'
      }
    ]
  },
  {
    number: 'III',
    title: 'Zasady Wypożyczania',
    icon: BookOpen,
    sections: [
      {
        paragraph: '§ 7',
        content: 'Czytelnik może wypożyczyć jednocześnie do 5 książek na okres 30 dni. Istnieje możliwość przedłużenia wypożyczenia, jeśli książka nie jest zarezerwowana przez innego czytelnika.'
      },
      {
        paragraph: '§ 8',
        content: 'Niektóre materiały biblioteczne (zbiory specjalne, wydania regionalne, nowe pozycje) mogą być udostępniane wyłącznie na miejscu w czytelni.'
      },
      {
        paragraph: '§ 9',
        content: 'Czytelnik zobowiązany jest zwrócić wypożyczone materiały w terminie. W przypadku niemożności zwrotu należy skontaktować się z biblioteką w celu prolongaty.'
      }
    ]
  },
  {
    number: 'IV',
    title: 'Opłaty i Kary',
    icon: CreditCard,
    sections: [
      {
        paragraph: '§ 10',
        content: 'Za przetrzymanie materiałów bibliotecznych pobierana jest kara w wysokości 0,50 zł za każdy dzień przetrzymania.'
      },
      {
        paragraph: '§ 11',
        content: 'W przypadku zniszczenia lub zagubienia książki czytelnik zobowiązany jest do pokrycia kosztów zakupu nowego egzemplarza lub zwrotu równowartości według aktualnej ceny rynkowej.'
      },
      {
        paragraph: '§ 12',
        content: 'Opłaty za usługi reprograficzne (kserokopie, wydruki, skany) określa obowiązujący cennik dostępny w bibliotece.'
      }
    ]
  },
  {
    number: 'V',
    title: 'Prawa i Obowiązki Użytkowników',
    icon: Scale,
    sections: [
      {
        paragraph: '§ 13',
        content: 'Użytkownik ma prawo do: bezpłatnego korzystania ze zbiorów biblioteki, pomocy bibliotekarzy w wyszukiwaniu informacji, udziału w imprezach kulturalnych organizowanych przez bibliotekę, dostępu do Internetu i sprzętu komputerowego.'
      },
      {
        paragraph: '§ 14',
        content: 'Użytkownik zobowiązany jest do: przestrzegania Regulaminu, dbania o wypożyczone materiały, zachowania ciszy w czytelni, poszanowania mienia biblioteki, zwrotu materiałów w terminie.'
      },
      {
        paragraph: '§ 15',
        content: 'Czytelnik ponosi pełną odpowiedzialność materialną za wypożyczone materiały od momentu ich wypożyczenia do chwili zwrotu.'
      }
    ]
  },
  {
    number: 'VI',
    title: 'Ochrona Danych Osobowych',
    icon: Shield,
    sections: [
      {
        paragraph: '§ 16',
        content: 'Biblioteka przetwarza dane osobowe użytkowników zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).'
      },
      {
        paragraph: '§ 17',
        content: 'Administratorem danych osobowych jest Miejsko-Gminna Biblioteka Publiczna w Narolu. Dane osobowe przetwarzane są wyłącznie w celu realizacji zadań statutowych biblioteki.'
      },
      {
        paragraph: '§ 18',
        content: 'Użytkownik ma prawo dostępu do swoich danych, ich poprawiania, usuwania oraz ograniczenia przetwarzania. Szczegółowe informacje zawiera Klauzula Informacyjna RODO dostępna w bibliotece.'
      }
    ]
  },
  {
    number: 'VII',
    title: 'Postanowienia Końcowe',
    icon: CheckCircle2,
    sections: [
      {
        paragraph: '§ 19',
        content: 'W sprawach nieuregulowanych w Regulaminie mają zastosowanie przepisy ustawy o bibliotekach oraz inne właściwe przepisy.'
      },
      {
        paragraph: '§ 20',
        content: 'Regulamin wchodzi w życie z dniem podjęcia uchwały przez Radę Gminy Narol.'
      },
      {
        paragraph: '§ 21',
        content: 'Biblioteka zastrzega sobie prawo do wprowadzania zmian w Regulaminie. Użytkownicy będą informowani o zmianach z odpowiednim wyprzedzeniem.'
      }
    ]
  }
]

export default function RegulationsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Badge className="mb-4" variant="secondary">
          <Scale className="mr-1 h-3 w-3" />
          Zasady korzystania
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Regulamin Biblioteki
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Miejsko-Gminna Biblioteka Publiczna im. Tadeusza Polanowskiego w Narolu
        </p>
      </motion.div>

      {/* Download Section */}
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
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Pobierz pełny regulamin</h3>
                  <p className="text-muted-foreground text-sm">
                    Dostępny w formacie PDF do pobrania i wydruku
                  </p>
                </div>
              </div>
              <Button size="lg" className="flex-shrink-0">
                <Download className="mr-2 h-4 w-4" />
                Pobierz PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Chapters */}
      <div className="space-y-8 mb-12">
        {chapters.map((chapter, chapterIndex) => {
          const Icon = chapter.icon
          return (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * chapterIndex }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-normal">
                        Rozdział {chapter.number}
                      </div>
                      {chapter.title}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {chapter.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="font-semibold text-lg mb-2 text-primary">
                        {section.paragraph}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                      {sectionIndex < chapter.sections.length - 1 && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Additional Documents */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <Card>
          <CardHeader>
            <CardTitle>Dokumenty Dodatkowe</CardTitle>
            <CardDescription>
              Powiązane dokumenty i regulaminy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <Link href="/regulamin/korzystanie">
                  <FileText className="mr-3 h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">Regulamin Korzystania</div>
                    <div className="text-xs text-muted-foreground">Szczegółowe zasady dla czytelników</div>
                  </div>
                </Link>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <Link href="/regulamin/cennik">
                  <CreditCard className="mr-3 h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">Cennik Usług</div>
                    <div className="text-xs text-muted-foreground">Opłaty za usługi reprograficzne</div>
                  </div>
                </Link>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <Link href="/regulamin/rodo">
                  <Shield className="mr-3 h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">Klauzula RODO</div>
                    <div className="text-xs text-muted-foreground">Informacja o przetwarzaniu danych</div>
                  </div>
                </Link>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <Link href="/regulamin/organizacyjny">
                  <Users className="mr-3 h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">Regulamin Organizacyjny</div>
                    <div className="text-xs text-muted-foreground">Struktura i organizacja pracy</div>
                  </div>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Meta Information */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <Card className="bg-muted/50">
          <CardContent className="py-8">
            <div className="text-center space-y-2 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Regulamin uchwalony:</strong> Uchwała nr XX/XXX/2020 
                Rady Gminy Narol z dnia 20 stycznia 2020 r.
              </p>
              <p>
                <strong className="text-foreground">Data ostatniej zmiany:</strong> 15 marca 2023 r.
              </p>
              <p>
                <strong className="text-foreground">Wersja:</strong> 2.1
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="text-center">
          <CardContent className="py-12">
            <h3 className="text-2xl font-bold mb-4">Masz pytania dotyczące regulaminu?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Skontaktuj się z nami, chętnie wyjaśnimy wszelkie wątpliwości dotyczące 
              zasad korzystania z biblioteki
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
            <Button asChild size="lg">
              <Link href="/kontakt">
                Skontaktuj się z nami
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}