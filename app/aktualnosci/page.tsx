import React from 'react';

export default function News(): JSX.Element {
  return (
    <div className="container">
      <h1>Aktualności i Wydarzenia</h1>

      <section className="content-section">
        <p>
          Śledź najnowsze informacje z życia biblioteki, poznaj nadchodzące wydarzenia 
          i bądź na bieżąco z programami czytelniczymi!
        </p>
      </section>

      <article
        className="content-section"
        style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <p className="card-date" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
          Utworzono dnia: 20 października 2024
        </p>
        <h2>Noc Bibliotek 2025 - Zapisz datę!</h2>
        <img
          src="/images/library-placeholder.jpg"
          alt="Noc Bibliotek 2025"
          style={{
            width: '100%',
            maxWidth: '800px',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: 'var(--spacing-md)',
          }}
        />
        <p>
          Serdecznie zapraszamy wszystkich miłośników książek i kultury na <strong>Noc Bibliotek 2025</strong>, 
          która odbędzie się <strong>13 czerwca 2025 roku</strong> od godziny 18:00 do 22:00.
        </p>
        <p>
          To wyjątkowe wydarzenie, podczas którego biblioteka otworzy swoje drzwi wieczorem, 
          przygotowując bogatą ofertę dla całej rodziny:
        </p>
        <ul style={{ lineHeight: '1.8', marginLeft: 'var(--spacing-lg)' }}>
          <li>🎭 <strong>Spotkanie autorskie</strong> z pisarzem regionalnym Janem Nowakiem</li>
          <li>📖 <strong>Nocne czytanie</strong> - wspólna lektura fragmentów ulubionych książek</li>
          <li>🎨 <strong>Warsztaty plastyczne</strong> dla dzieci - tworzenie zakładek do książek</li>
          <li>🎵 <strong>Muzyka na żywo</strong> - koncert lokalnych artystów</li>
          <li>☕ <strong>Kawiarnia literacka</strong> - napoje i przekąski w bibliotecznym klimacie</li>
          <li>🎁 <strong>Loteria książkowa</strong> - do wygrania ciekawe nagrody!</li>
        </ul>
        <p>Wstęp wolny! Szczegółowy program wydarzenia będzie dostępny w maju. Zapraszamy!</p>
      </article>

      <article
        className="content-section"
        style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <p className="card-date" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
          Utworzono dnia: 15 października 2024
        </p>
        <h2>Mała Książka – Wielki Człowiek - Rusza nowa edycja!</h2>
        <p>
          Z radością informujemy, że nasza biblioteka przystąpiła do ogólnopolskiej akcji 
          <strong> „Mała Książka – Wielki Człowiek"</strong>, promującej czytelnictwo wśród najmłodszych dzieci.
        </p>
        <p>
          Program skierowany jest do dzieci w wieku przedszkolnym (3-6 lat). Każde dziecko, 
          które zapisze się do biblioteki, otrzyma:
        </p>
        <ul style={{ lineHeight: '1.8', marginLeft: 'var(--spacing-lg)' }}>
          <li>📚 Wyprawkę czytelniczą z książeczką</li>
          <li>🎨 Materiały edukacyjne dla rodziców</li>
          <li>🏆 Dyplom po zakończeniu programu</li>
        </ul>
        <p>
          Zapisy trwają! Zapraszamy rodziców z dziećmi do biblioteki lub kontakt telefoniczny: 
          <strong> 16 631 72 00</strong>.
        </p>
      </article>

      <article
        className="content-section"
        style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <p className="card-date" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
          Utworzono dnia: 10 października 2024
        </p>
        <h2>Nowości w Księgozbiorze - Październik 2024</h2>
        <p>
          Do naszej biblioteki trafiły najnowsze bestsellery i nowości wydawnicze! 
          W październiku wzbogaciliśmy nasz księgozbiór o ponad 150 nowych pozycji.
        </p>
        <div className="three-column-grid">
          <div className="card">
            <h3>Literatura Piękna</h3>
            <ul style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
              <li>Nowe powieści polskich autorów</li>
              <li>Tłumaczenia bestsellerów zagranicznych</li>
              <li>Kryminały i thrillery</li>
              <li>Literatura obyczajowa</li>
            </ul>
          </div>
          <div className="card">
            <h3>Literatura Dziecięca</h3>
            <ul style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
              <li>Bajki dla najmłodszych</li>
              <li>Lektury szkolne</li>
              <li>Książki edukacyjne</li>
              <li>Komiksy i manga</li>
            </ul>
          </div>
          <div className="card">
            <h3>Literatura Fachowa</h3>
            <ul style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
              <li>Poradniki psychologiczne</li>
              <li>Książki o zdrowiu</li>
              <li>Historia regionu</li>
              <li>Biografie</li>
            </ul>
          </div>
        </div>
        <p style={{ marginTop: 'var(--spacing-md)' }}>
          Pełną listę nowości można znaleźć w katalogu online lub zapytać bibliotekarza!
        </p>
      </article>

      <article
        className="content-section"
        style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <p className="card-date" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
          Utworzono dnia: 5 października 2024
        </p>
        <h2>Dyskusyjny Klub Książki - Zaproszenie</h2>
        <p>
          Zapraszamy wszystkich miłośników literatury do udziału w <strong>Dyskusyjnym Klubie Książki</strong>, 
          który spotyka się w naszej bibliotece w każdą <strong>trzecią środę miesiąca o godz. 17:00</strong>.
        </p>
        <p>
          <strong>Najbliższe spotkanie: 18 października 2024</strong>
        </p>
        <p>
          Będziemy omawiać powieść „Lalka" Bolesława Prusa w kontekście współczesności. 
          Spotkanie poprowadzi polonistka Anna Nowak.
        </p>
        <p>
          Udział w klubie jest bezpłatny. Prosimy o wcześniejszą rejestrację:{' '}
          <a href="mailto:biblioteka@narol.pl">biblioteka@narol.pl</a> lub telefonicznie: 16 631 72 00.
        </p>
      </article>

      <article className="content-section">
        <p className="card-date" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
          Utworzono dnia: 1 października 2024
        </p>
        <h2>Warsztaty Komputerowe dla Seniorów</h2>
        <p>
          Rozpoczynamy cykl <strong>bezpłatnych warsztatów komputerowych dla seniorów</strong>! 
          Zajęcia odbywają się w każdy <strong>wtorek o godz. 10:00</strong> w sali komputerowej biblioteki.
        </p>
        <p>
          <strong>Program warsztatów:</strong>
        </p>
        <ul style={{ lineHeight: '1.8', marginLeft: 'var(--spacing-lg)' }}>
          <li>Obsługa komputera i internetu - podstawy</li>
          <li>Poczta elektroniczna - zakładanie i korzystanie</li>
          <li>Komunikatory - jak być w kontakcie z rodziną</li>
          <li>Zakupy online - bezpieczeństwo w sieci</li>
          <li>E-urząd - załatwianie spraw urzędowych online</li>
          <li>Korzystanie z katalogu bibliotecznego online</li>
        </ul>
        <p>
          Liczba miejsc ograniczona. Zapisy pod numerem telefonu: <strong>16 631 72 00</strong> 
          lub osobiście w bibliotece.
        </p>
      </article>

      <section
        className="content-section"
        style={{
          backgroundColor: 'var(--bg-light)',
          padding: 'var(--spacing-lg)',
          borderRadius: '8px',
          textAlign: 'center',
          marginTop: 'var(--spacing-xl)',
        }}
      >
        <h2>Chcesz być na bieżąco?</h2>
        <p>
          Śledź nas na Facebooku i zapisz się do newslettera, aby nie przegapić żadnego wydarzenia!
        </p>
        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-md)',
            justifyContent: 'center',
            marginTop: 'var(--spacing-md)',
            flexWrap: 'wrap',
          }}
        >
          <a href="https://facebook.com" className="btn" target="_blank" rel="noopener noreferrer">
            📘 Obserwuj na Facebook
          </a>
          <a href="/kontakt" className="btn btn-secondary">
            ✉️ Zapisz się do newslettera
          </a>
        </div>
      </section>
    </div>
  );
}
