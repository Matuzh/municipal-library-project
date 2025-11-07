import React from "react";

const Services: React.FC = () => {
  return (
    <div className="container">
      <h1>Usługi Biblioteki</h1>

      <section className="content-section">
        <p>
          Miejsko-Gminna Biblioteka Publiczna w Narolu oferuje szeroki wachlarz
          usług dostosowanych do potrzeb wszystkich grup czytelników.
        </p>
      </section>

      <div className="three-column-grid">
        <div className="card">
          <h3>📚 Wypożyczalnia</h3>
          <p>
            Wypożyczanie książek, audiobooków i czasopism na okres 30 dni z
            możliwością trzykrotnego przedłużenia.
          </p>
          <ul style={{ lineHeight: "1.8", marginTop: "var(--spacing-sm)" }}>
            <li>Dorośli: do 5 książek</li>
            <li>Dzieci: do 10 książek</li>
            <li>Czasopisma: do 3 tytułów</li>
          </ul>
        </div>

        <div className="card">
          <h3>📖 Czytelnia</h3>
          <p>
            Sala do pracy i nauki z dostępem do czasopism, książek naukowych
            oraz księgozbioru podręcznego.
          </p>
          <ul style={{ lineHeight: "1.8", marginTop: "var(--spacing-sm)" }}>
            <li>Ciche miejsce do nauki</li>
            <li>Dostęp do prasy codziennej</li>
            <li>Literatura fachowa</li>
          </ul>
        </div>

        <div className="card">
          <h3>💻 Katalog Online</h3>
          <p>
            Wyszukiwanie zbiorów bibliotecznych, rezerwacja książek oraz
            zarządzanie kontem czytelnika przez internet.
          </p>
          <ul style={{ lineHeight: "1.8", marginTop: "var(--spacing-sm)" }}>
            <li>Wyszukiwanie zaawansowane</li>
            <li>Rezerwacje online</li>
            <li>Historia wypożyczeń</li>
          </ul>
        </div>

        <div className="card">
          <h3>📱 E-booki i Audiobooki</h3>
          <p>
            Dostęp do platform z tysiącami e-booków i audiobooków dostępnych
            24/7 dla zarejestrowanych czytelników.
          </p>
          <ul style={{ lineHeight: "1.8", marginTop: "var(--spacing-sm)" }}>
            <li>IBUK Libra</li>
            <li>Legimi</li>
            <li>Empik GO</li>
          </ul>
        </div>

        <div className="card">
          <h3>🖥️ Stanowiska Komputerowe</h3>
          <p>
            Bezpłatny dostęp do komputerów z internetem, pakietem Office oraz
            możliwością wydruku i skanowania dokumentów.
          </p>
          <ul style={{ lineHeight: "1.8", marginTop: "var(--spacing-sm)" }}>
            <li>60 minut dziennie bezpłatnie</li>
            <li>WiFi w całej bibliotece</li>
            <li>Pomoc w obsłudze</li>
          </ul>
        </div>

        <div className="card">
          <h3>🔄 Wypożyczenia Międzybiblioteczne</h3>
          <p>
            Zamawianie książek z innych bibliotek w Polsce, gdy nie ma ich w
            naszych zbiorach.
          </p>
          <ul style={{ lineHeight: "1.8", marginTop: "var(--spacing-sm)" }}>
            <li>Dostęp do zbiorów krajowych</li>
            <li>Czas realizacji: 7–14 dni</li>
            <li>Opłata wg cennika</li>
          </ul>
        </div>
      </div>

      <section className="content-section">
        <h2>Usługi Reprograficzne</h2>
        <table>
          <thead>
            <tr>
              <th>Usługa</th>
              <th>Format</th>
              <th>Cena</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kserokopia czarno-biała</td>
              <td>A4</td>
              <td>0,30 zł</td>
            </tr>
            <tr>
              <td>Kserokopia czarno-biała</td>
              <td>A3</td>
              <td>0,60 zł</td>
            </tr>
            <tr>
              <td>Wydruk kolorowy</td>
              <td>A4</td>
              <td>1,00 zł</td>
            </tr>
            <tr>
              <td>Skanowanie</td>
              <td>A4</td>
              <td>0,50 zł</td>
            </tr>
            <tr>
              <td>Laminowanie</td>
              <td>A4</td>
              <td>2,50 zł</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="content-section">
        <h2>Usługi Edukacyjne</h2>
        <div className="three-column-grid">
          <div className="card">
            <h3>Lekcje Biblioteczne</h3>
            <p>
              Organizujemy lekcje biblioteczne dla szkół i przedszkoli, ucząc
              dzieci jak korzystać z zasobów biblioteki.
            </p>
          </div>

          <div className="card">
            <h3>Warsztaty i Spotkania</h3>
            <p>
              Regularne warsztaty literackie, plastyczne, komputerowe oraz
              spotkania autorskie z pisarzami.
            </p>
          </div>

          <div className="card">
            <h3>Pomoc w Wyszukiwaniu</h3>
            <p>
              Bibliotekarze służą pomocą w wyszukiwaniu informacji, tworzeniu
              bibliografii i korzystaniu z baz danych.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Programy Czytelnicze</h2>
        <ul style={{ lineHeight: "1.8", marginLeft: "var(--spacing-lg)" }}>
          <li>
            <strong>Mała Książka – Wielki Człowiek</strong> – program dla dzieci
            w wieku przedszkolnym
          </li>
          <li>
            <strong>Dyskusyjny Klub Książki</strong> – comiesięczne spotkania
            miłośników literatury
          </li>
          <li>
            <strong>Narodowe Czytanie</strong> – udział w ogólnopolskiej akcji
            czytelniczej
          </li>
          <li>
            <strong>Noc Bibliotek</strong> – coroczne nocne wydarzenie z bogatym
            programem
          </li>
          <li>
            <strong>Biblioteczny Klub Malucha</strong> – zajęcia dla
            najmłodszych
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Jak Zostać Czytelnikiem?</h2>
        <p>Aby zapisać się do biblioteki, wystarczy:</p>
        <ol style={{ lineHeight: "1.8", marginLeft: "var(--spacing-lg)" }}>
          <li>Przyjść do biblioteki z dowodem osobistym</li>
          <li>Wypełnić kartę czytelnika</li>
          <li>Zapoznać się z regulaminem biblioteki</li>
          <li>Wyrazić zgodę na przetwarzanie danych osobowych (RODO)</li>
        </ol>
        <p style={{ marginTop: "var(--spacing-md)" }}>
          <strong>Zapis do biblioteki jest bezpłatny!</strong> Pierwsza karta
          biblioteczna wydawana jest nieodpłatnie. W przypadku zgubienia, opłata
          za wydanie duplikatu wynosi 5 zł.
        </p>
      </section>

      <section
        className="content-section"
        style={{
          backgroundColor: "var(--bg-light)",
          padding: "var(--spacing-lg)",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h2>Masz pytania dotyczące naszych usług?</h2>
        <p>Skontaktuj się z nami, chętnie odpowiemy na wszystkie pytania!</p>
        <a href="/kontakt" className="btn" style={{ marginTop: "var(--spacing-md)" }}>
          Kontakt
        </a>
      </section>
    </div>
  );
};

export default Services;
