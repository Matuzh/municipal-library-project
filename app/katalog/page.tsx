'use client';

import React from 'react';

export default function Catalog(): JSX.Element {
  return (
    <div className="container">
      <h1>Katalog Online</h1>

      <section
        className="content-section"
        style={{
          backgroundColor: 'var(--bg-light)',
          padding: 'var(--spacing-xl)',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <h2>🔍 Katalog w przygotowaniu</h2>
        <p
          style={{
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-md)',
          }}
        >
          Pracujemy nad udostępnieniem pełnego katalogu online naszych zbiorów bibliotecznych. Wkrótce będzie można
          wyszukiwać książki, rezerwować pozycje i zarządzać kontem czytelnika przez internet.
        </p>
      </section>

      <section className="content-section">
        <h2>Tymczasowe Rozwiązania</h2>
        <div className="three-column-grid">
          <div className="card">
            <h3>📞 Zapytaj Bibliotekarza</h3>
            <p>
              Zadzwoń do nas lub napisz email, a nasi bibliotekarze pomogą Ci znaleźć interesującą książkę.
            </p>
            <p>
              <strong>Tel:</strong> 16 631 72 00
            </p>
            <p>
              <strong>Email:</strong> biblioteka@narol.pl
            </p>
          </div>

          <div className="card">
            <h3>🏢 Odwiedź Nas</h3>
            <p>
              Przyjdź do biblioteki osobiście, a pracownicy pomogą w wyszukiwaniu interesujących Cię pozycji.
            </p>
            <a href="/godziny-otwarcia" className="btn" style={{ marginTop: 'auto' }}>
              Zobacz godziny
            </a>
          </div>

          <div className="card">
            <h3>📚 Katalog Tradycyjny</h3>
            <p>
              W bibliotece dostępny jest tradycyjny katalog kartkowy, który pozwala na przeglądanie naszych zbiorów.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Co będzie dostępne w katalogu online?</h2>
        <ul style={{ lineHeight: '1.8', marginLeft: 'var(--spacing-lg)' }}>
          <li>Wyszukiwanie książek po tytule, autorze, temacie i słowach kluczowych</li>
          <li>Sprawdzanie dostępności książek w czasie rzeczywistym</li>
          <li>Rezerwacja książek wypożyczonych innym czytelnikom</li>
          <li>Prolongata wypożyczeń online</li>
          <li>Historia wypożyczeń i opłat</li>
          <li>Lista nowości i najpopularniejszych książek</li>
          <li>Rekomendacje czytelnicze</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Zasoby Cyfrowe</h2>
        <p>Już teraz możesz korzystać z naszych zasobów cyfrowych dostępnych poprzez platformy zewnętrzne:</p>
        <div className="three-column-grid">
          <div className="card">
            <h3>IBUK Libra</h3>
            <p>Tysiące e-booków naukowych i popularnonaukowych dostępnych dla zarejestrowanych czytelników.</p>
          </div>

          <div className="card">
            <h3>Legimi</h3>
            <p>Bogata biblioteka audiobooków i e-booków z najnowszymi bestsellerami.</p>
          </div>

          <div className="card">
            <h3>Empik GO</h3>
            <p>Dostęp do audiobooków, ebooków i prasy cyfrowej z kodem dostępnym w bibliotece.</p>
          </div>
        </div>
      </section>

      <section
        className="content-section"
        style={{
          backgroundColor: 'var(--bg-light)',
          padding: 'var(--spacing-lg)',
          borderRadius: '8px',
        }}
      >
        <h2>Planowane Funkcjonalności</h2>
        <p>W pełnej wersji katalogu online przygotowujemy dla Państwa:</p>
        <div className="three-column-grid">
          <div className="card">
            <h3>Konto Czytelnika</h3>
            <p>Panel użytkownika z pełną kontrolą nad wypożyczeniami i rezerwacjami.</p>
          </div>

          <div className="card">
            <h3>Powiadomienia</h3>
            <p>Automatyczne przypomnienia o terminie zwrotu i dostępności zarezerwowanych książek.</p>
          </div>

          <div className="card">
            <h3>Recenzje i Oceny</h3>
            <p>Możliwość dzielenia się opinią o przeczytanych książkach z innymi czytelnikami.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
