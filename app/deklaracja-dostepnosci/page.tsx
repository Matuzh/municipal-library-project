import React from "react";

const AccessibilityDeclaration: React.FC = () => {
  return (
    <div className="container">
      <h1 id="a11y-wstep">Deklaracja Dostępności</h1>

      <section className="content-section" id="a11y-podmiot">
        <p>
          <strong>Miejsko-Gminna Biblioteka Publiczna w Narolu</strong> zobowiązuje się zapewnić 
          dostępność swojej strony internetowej zgodnie z przepisami ustawy z dnia 4 kwietnia 2019 r. 
          o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. 
          Oświadczenie w sprawie dostępności ma zastosowanie do strony internetowej 
          Miejsko-Gminnej Biblioteki Publicznej w Narolu.
        </p>
      </section>

      <section className="content-section" id="a11y-data-sporzadzenie">
        <h2>Data publikacji i aktualizacji</h2>
        <p><strong>Data publikacji strony internetowej:</strong> 2024-01-15</p>
        <p><strong>Data ostatniej istotnej aktualizacji:</strong> 2024-10-20</p>
        <p><strong>Data sporządzenia deklaracji:</strong> 2024-11-07</p>
        <p id="a11y-data-przeglad"><strong>Data ostatniego przeglądu deklaracji:</strong> 2024-11-07</p>
      </section>

      <section className="content-section" id="a11y-status">
        <h2>Status pod względem zgodności z ustawą</h2>
        <p>
          Strona internetowa jest <strong>częściowo zgodna</strong> z ustawą z dnia 4 kwietnia 2019 r. 
          o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych 
          z powodu niezgodności lub wyłączeń wymienionych poniżej.
        </p>

        <h3>Treści niedostępne</h3>
        <p>Poniżej wymieniono elementy strony, które nie spełniają wymagań dostępności:</p>
        <ul style={{ lineHeight: "1.8", marginLeft: "var(--spacing-lg)" }}>
          <li>
            <strong>Część materiałów archiwalnych</strong> (zdjęcia i dokumenty PDF opublikowane 
            przed 23 września 2018 r.) może nie posiadać odpowiednich opisów alternatywnych lub 
            nie być w pełni dostępna - wyłączenie na podstawie art. 6 ust. 1 ustawy.
          </li>
          <li>
            <strong>Niektóre elementy galerii</strong> mogą wymagać dodatkowych opisów alternatywnych 
            - są w trakcie uzupełniania.
          </li>
        </ul>

        <h3>Wyłączenia</h3>
        <p>
          Zgodnie z art. 6 ust. 1 ustawy z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron 
          internetowych i aplikacji mobilnych podmiotów publicznych, wymogi dotyczące dostępności 
          nie mają zastosowania do dokumentów biurowych opublikowanych przed 23 września 2018 r.
        </p>
      </section>

      <section className="content-section">
        <h2>Przygotowanie deklaracji w sprawie dostępności</h2>
        <p>Deklarację sporządzono dnia: <strong>2024-11-07</strong>.</p>
        <p>Deklarację sporządzono na podstawie <strong>samooceny</strong> przeprowadzonej przez podmiot publiczny.</p>
        <p>Deklaracja została ostatnio poddana przeglądowi i aktualizacji dnia: <strong>2024-11-07</strong>.</p>
      </section>

      <section className="content-section" id="a11y-kontakt">
        <h2>Informacje zwrotne i dane kontaktowe</h2>
        <p>
          W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. 
          Osobą kontaktową jest <strong>Jan Kowalski, Administrator IT</strong>. 
          Kontaktować można się także dzwoniąc na numer telefonu{" "}
          <span id="a11y-telefon"><strong>16 631 72 00</strong></span> 
          lub pisząc na adres e-mail{" "}
          <span id="a11y-email"><strong>dostepnosc@biblioteka-narol.pl</strong></span>.
        </p>
        <p>
          Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz 
          składać żądania zapewnienia dostępności.
        </p>
      </section>

      <section className="content-section" id="a11y-procedura">
        <h2>Procedura wnioskowo-skargowa</h2>
        <p>
          Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej strony 
          internetowej, aplikacji mobilnej lub jakiegoś ich elementu. Można także zażądać 
          udostępnienia informacji za pomocą alternatywnego sposobu dostępu.
        </p>
        <p>Żądanie powinno zawierać:</p>
        <ul style={{ lineHeight: "1.8", marginLeft: "var(--spacing-lg)" }}>
          <li>dane osoby zgłaszającej żądanie</li>
          <li>wskazanie, o którą stronę internetową lub aplikację mobilną chodzi</li>
          <li>sposób kontaktu</li>
        </ul>
        <p>
          Jeżeli osoba żądająca zgłasza potrzebę otrzymania informacji za pomocą alternatywnego 
          sposobu dostępu, powinna także określić dogodny dla niej sposób przedstawienia tej informacji.
        </p>
        <p>
          Podmiot publiczny powinien zrealizować żądanie niezwłocznie, nie później niż w ciągu{" "}
          <strong>7 dni</strong>. W razie braku możliwości, poinformuje o nowym terminie, nie dłuższym niż{" "}
          <strong>2 miesiące</strong>.
        </p>
        <p>
          Jeżeli zapewnienie dostępności cyfrowej nie jest możliwe, podmiot publiczny może 
          zaproponować alternatywny sposób dostępu do informacji.
        </p>

        <h3>Skargi i odwołania</h3>
        <p>
          W przypadku odmowy realizacji żądania można złożyć skargę w sprawie zapewnienia dostępności 
          cyfrowej strony internetowej lub aplikacji mobilnej.
        </p>
        <p>
          Po wyczerpaniu tej procedury można złożyć wniosek do <strong>Rzecznika Praw Obywatelskich</strong>:
        </p>
        <address style={{ fontStyle: "normal", lineHeight: "1.8", marginLeft: "var(--spacing-lg)" }}>
          Biuro Rzecznika Praw Obywatelskich<br />
          ul. Senatorska 15<br />
          00-082 Warszawa<br />
          <strong>Telefon:</strong> 22 551 77 00<br />
          <strong>E-mail:</strong>{" "}
          <a href="mailto:biuro@rpo.gov.pl">biuro@rpo.gov.pl</a><br />
          <strong>Strona:</strong>{" "}
          <a href="https://www.rpo.gov.pl" target="_blank" rel="noopener noreferrer">
            www.rpo.gov.pl
          </a>
        </address>
      </section>

      <section className="content-section" id="a11y-architektura">
        <h2>Dostępność architektoniczna</h2>
        <p>
          <strong>Miejsko-Gminna Biblioteka Publiczna w Narolu</strong><br />
          ul. Rynek 1<br />
          37-610 Narol
        </p>

        <h3>Wejście do budynku</h3>
        <ul style={{ lineHeight: "1.8", marginLeft: "var(--spacing-lg)" }}>
          <li>✅ Budynek posiada podjazd dla wózków inwalidzkich</li>
          <li>✅ Drzwi wejściowe mają szerokość umożliwiającą wjazd wózkiem</li>
          <li>✅ Wejście główne jest na poziomie parteru</li>
          <li>⚠️ Brak windy - wszystkie usługi dostępne na parterze</li>
        </ul>

        <h3>Wnętrze budynku</h3>
        <ul style={{ lineHeight: "1.8", marginLeft: "var(--spacing-lg)" }}>
          <li>✅ Korytarze i przejścia dostosowane do poruszania się na wózku</li>
          <li>✅ Toaleta przystosowana dla osób z niepełnosprawnościami</li>
          <li>✅ Możliwość wejścia z psem asystującym</li>
        </ul>

        <h3>Parking</h3>
        <ul style={{ lineHeight: "1.8", marginLeft: "var(--spacing-lg)" }}>
          <li>Parking publiczny przy Rynku - 50 m od biblioteki</li>
          <li>✅ Miejsca parkingowe dla osób z niepełnosprawnościami</li>
        </ul>
      </section>

      <section className="content-section" id="a11y-komunikacja">
        <h2>Dostępność komunikacyjno-informacyjna</h2>
        <ul style={{ lineHeight: "1.8", marginLeft: "var(--spacing-lg)" }}>
          <li>✅ Możliwość kontaktu telefonicznego: 16 631 72 00</li>
          <li>✅ Możliwość kontaktu przez e-mail: biblioteka@narol.pl</li>
          <li>✅ Formularz kontaktowy na stronie</li>
          <li>✅ Pracownicy przeszkoleni w obsłudze osób z niepełnosprawnościami</li>
          <li>⚠️ Brak tłumacza języka migowego - prosimy o wcześniejszy kontakt</li>
        </ul>
      </section>

      <section
        className="content-section"
        style={{
          backgroundColor: "var(--bg-light)",
          padding: "var(--spacing-lg)",
          borderRadius: "8px",
        }}
      >
        <h2>Ułatwienia na stronie internetowej</h2>
        <ul style={{ lineHeight: "1.8", marginLeft: "var(--spacing-lg)" }}>
          <li>✅ Strona responsywna</li>
          <li>✅ Nawigacja klawiaturowa obsługiwana</li>
          <li>✅ Widoczny fokus na linkach i przyciskach</li>
          <li>✅ Kontrast zgodny z WCAG AA</li>
          <li>✅ Możliwość powiększenia tekstu</li>
          <li>✅ Zdjęcia posiadają opisy alternatywne</li>
          <li>✅ Poprawna struktura nagłówków</li>
        </ul>
      </section>

      <section className="content-section">
        <p style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>
          Niniejsza deklaracja została sporządzona zgodnie z ustawą z dnia 4 kwietnia 2019 r. 
          o dostępności cyfrowej (Dz.U. 2019 poz. 848) oraz rozporządzeniem Rady Ministrów 
          z dnia 12 kwietnia 2022 r. (Dz.U. 2022 poz. 852).
        </p>
      </section>
    </div>
  );
};

export default AccessibilityDeclaration;
