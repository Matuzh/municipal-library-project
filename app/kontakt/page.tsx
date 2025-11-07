'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook,
  Send,
  CheckCircle2
} from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success('Wiadomość wysłana!', {
      description: 'Odpowiemy najszybciej jak to możliwe.'
    })

    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Badge className="mb-4" variant="secondary">
          <Phone className="mr-1 h-3 w-3" />
          Skontaktuj się z nami
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Kontakt
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Jesteśmy tu, aby Ci pomóc
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Adres
                </CardTitle>
              </CardHeader>
              <CardContent>
                <address className="not-italic text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    Miejsko-Gminna Biblioteka Publiczna
                  </p>
                  <p className="mt-2">ul. Rynek 1</p>
                  <p>37-610 Narol</p>
                  <p>woj. podkarpackie</p>
                </address>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Telefon i Email
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Telefon</p>
                  <a 
                    href="tel:+48166317200"
                    className="text-lg font-semibold hover:text-primary transition-colors"
                  >
                    16 631 72 00
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a 
                    href="mailto:biblioteka@narol.pl"
                    className="text-lg font-semibold hover:text-primary transition-colors break-all"
                  >
                    biblioteka@narol.pl
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Facebook</p>
                  <a 
                    href="https://facebook.com/bibliotekanarol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                    @BibliotekaNarol
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Godziny Otwarcia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Poniedziałek - Czwartek:</span>
                  <span className="font-semibold">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Wtorek, Środa:</span>
                  <span className="font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Piątek:</span>
                  <span className="font-semibold">9:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota:</span>
                  <span className="font-semibold">I i III: 8:30 - 12:30</span>
                </div>
                <Button asChild variant="link" className="w-full mt-4">
                  <Link href="/godziny-otwarcia">
                    Zobacz szczegóły →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Formularz Kontaktowy</CardTitle>
              <CardDescription>
                Masz pytania? Napisz do nas! Odpowiemy tak szybko, jak to możliwe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="jan.kowalski@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Temat
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Np. Pytanie o wypożyczenia"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                    placeholder="Twoja wiadomość..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="mr-2 h-4 w-4 animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Wyślij wiadomość
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Jak do nas trafić?</CardTitle>
            <CardDescription>
              Biblioteka mieści się w samym centrum Narola, przy głównym rynku
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="text-lg font-semibold">ul. Rynek 1, 37-610 Narol</p>
                <p className="text-sm mt-2">Mapa dostępna wkrótce</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}