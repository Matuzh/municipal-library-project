'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.consent) {
      setSubmitStatus('error');
      alert('Proszę wyrazić zgodę na przetwarzanie danych osobowych.');
      return;
    }

    // Tu później wyślesz dane do backendu (Express)
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      consent: false,
    });
  };

  return (
    <div className="container">
      <h1>Kontakt</h1>

      <div className="three-column-grid" style={{ marginBottom: 'var(--spacing-xl)' }}>
        <div className="card">
          <h3>📍 Adres</h3>
          <address style={{ fontStyle: 'normal', lineHeight: '1.8' }}>
            <strong>
              Miejsko-Gminna Biblioteka
              <br />
              Publiczna w Narolu
            </strong>
            <br />
            ul. Rynek 1
            <br />
            37-610 Narol
            <br />
            woj. podkarpackie
          </address>
        </div>

        <div className="card">
          <h3>📞 Telefon i Email</h3>
          <p>
            <strong>Sekretariat:</strong>
            <br />
            <a href="tel:+48166317200">16 631 72 00</a>
          </p>
          <p>
            <strong>Email:</strong>
            <br />
            <a href="mailto:biblioteka@narol.pl">biblioteka@narol.pl</a>
          </p>
          <p>
            <strong>Facebook:</strong>
            <br />
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              @BibliotekaNarol
            </a>
          </p>
        </div>

        <div className="card">
          <h3>🕐 Godziny Pracy</h3>
          <p>
            <strong>Pon - Czw:</strong> 9:00 - 17:00
          </p>
          <p>
            <strong>Wtorek, Środa:</strong> 9:00 - 18:00
          </p>
          <p>
            <strong>Piątek:</strong> 9:00 - 15:00
          </p>
          <p>
            <strong>Sobota:</strong> I i III: 8:30 - 12:30
          </p>
          <p>
            <a href="/godziny-otwarcia">Zobacz szczegóły →</a>
          </p>
        </div>
      </div>

      <section className="content-section">
        <h2>Formularz Kontaktowy</h2>
        <p>Masz pytania? Napisz do nas! Odpowiemy tak szybko, jak to możliwe.</p>

        {submitStatus === 'success' && (
          <div
            style={{
              backgroundColor: '#d4edda',
              color: '#155724',
              padding: 'var(--spacing-md)',
              borderRadius: '4px',
              marginBottom: 'var(--spacing-md)',
              border: '1px solid #c3e6cb',
            }}
          >
            ✓ Wiadomość została wysłana pomyślnie! Odpowiemy najszybciej jak to możliwe.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="form-group">
            <label htmlFor="name">Imię i nazwisko *</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Adres email *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Numer telefonu (opcjonalnie)</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Temat wiadomości *</label>
            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
              <option value="">-- Wybierz temat --</option>
              <option value="zapytanie">Ogólne zapytanie</option>
              <option value="zapis">Zapis do biblioteki</option>
              <option value="katalog">Pytanie o katalog</option>
              <option value="wydarzenie">Wydarzenia i programy</option>
              <option value="reklamacja">Reklamacja</option>
              <option value="inne">Inne</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Treść wiadomości *</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} />
          </div>

          <div className="form-group">
            <label
              style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-xs)', cursor: 'pointer' }}
            >
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                style={{ minWidth: '24px', minHeight: '24px', marginTop: '4px' }}
              />
              <span style={{ fontSize: '0.9rem' }}>
                Wyrażam zgodę na przetwarzanie moich danych osobowych przez Miejsko-Gminną Bibliotekę Publiczną w Narolu
                w celu odpowiedzi na przesłane zapytanie zgodnie z{' '}
                <a href="/rodo">Polityką Prywatności</a>. *
              </span>
            </label>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: 'var(--spacing-md)' }}>
            * Pola wymagane
          </p>

          <button type="submit" className="btn">
            Wyślij wiadomość
          </button>
        </form>
      </section>

      <section className="content-section" style={{ marginTop: 'var(--spacing-xl)' }}>
        <h2>Jak do nas trafić?</h2>
        <div className="card" style={{ backgroundColor: 'var(--bg-light)' }}>
          <h3>🗺️ Lokalizacja</h3>
          <p>
            Biblioteka znajduje się w centrum Narola, w historycznym budynku na Rynku. Biblioteka jest dobrze
            skomunikowana - w pobliżu znajdują się przystanki autobusowe oraz parking publiczny.
          </p>
          <p style={{ marginTop: 'var(--spacing-md)' }}>
            <strong>Dojazd:</strong>
          </p>
          <ul style={{ lineHeight: '1.8' }}>
            <li>🚌 Przystanek autobusowy: 100 m od biblioteki</li>
            <li>🚗 Parking publiczny: Przy Rynku (50 m)</li>
            <li>♿ Dostęp dla osób niepełnosprawnych: Podjazd od strony głównego wejścia</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h2>Dyrektor Biblioteki</h2>
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3>Anna Kowalska</h3>
          <p>
            <strong>Stanowisko:</strong> Dyrektor Miejsko-Gminnej Biblioteki Publicznej w Narolu
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:dyrektor@biblioteka-narol.pl">dyrektor@biblioteka-narol.pl</a>
          </p>
          <p>
            <strong>Godziny przyjęć:</strong> Wtorek i Czwartek, 14:00 - 16:00 (po wcześniejszym umówieniu)
          </p>
        </div>
      </section>
    </div>
  );
}
