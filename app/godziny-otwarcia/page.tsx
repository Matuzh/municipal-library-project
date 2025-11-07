import React from "react";

const OpeningHours: React.FC = () => {
  return (
    <div className="container">
      <h1>Godziny Otwarcia</h1>

      <section className="content-section">
        <h2>📅 Aktualne Godziny Otwarcia</h2>
        <table style={{ maxWidth: "800px", margin: "0 auto" }}>
          <thead>
            <tr>
              <th>Dzień Tygodnia</th>
              <th>Godziny</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Poniedziałek</strong></td>
              <td>9:00 - 17:00</td>
            </tr>
            <tr>
              <td><strong>Wtorek</strong></td>
              <td>9:00 - 18:00</td>
            </tr>
            <tr>
              <td><strong>Środa</strong></td>
              <td>9:00 - 18:00</td>
            </tr>
            <tr>
              <td><strong>Czwartek</strong></td>
              <td>9:00 - 17:00</td>
            </tr>
            <tr>
              <td><strong>Piątek</strong></td>
              <td>9:00 - 15:00</td>
            </tr>
            <tr>
              <td><strong>Sobota</strong></td>
              <td>I i III sobota miesiąca: 8:30 - 12:30</td>
            </tr>
            <tr>
              <td><strong>Niedziela</strong></td>
              <td>Nieczynne</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="content-section">
        <h2>Dni Wolne od Pracy</h2>
        <p>Biblioteka jest nieczynna w następujące dni:</p>
        <ul style={{ lineHeight: "1.8", marginLeft: "var(--spacing-lg)" }}>
          <li>Wszystkie niedziele i święta państwowe</li>
          <li>1 stycznia - Nowy Rok</li>
          <li>6 stycznia - Trzech Króli</li>
          <li>Poniedziałek Wielkanocny</li>
          <li>1 maja - Święto Pracy</li>
          <li>3 maja - Święto Konstytucji 3 Maja</li>
          <li>Dzień Bożego Ciała</li>
          <li>15 sierpnia - Wniebowzięcie NMP</li>
          <li>1 listopada - Wszystkich Świętych</li>
          <li>11 listopada - Święto Niepodległości</li>
          <li>25-26 grudnia - Boże Narodzenie</li>
        </ul>
      </section>

      <div className="three-column-grid">
        <div className="card">
          <h3>🏢 Wypożyczalnia dla Dorosłych</h3>
          <p><strong>Poniedziałek - Czwartek:</strong> 9:00 - 17:00</p>
          <p><strong>Piątek:</strong> 9:00 - 15:00</p>
          <p><strong>Sobota:</strong> I i III sobota: 8:30 - 12:30</p>
        </div>

        <div className="card">
          <h3>👶 Wypożyczalnia dla Dzieci</h3>
          <p><strong>Poniedziałek - Czwartek:</strong> 9:00 - 17:00</p>
          <p><strong>Piątek:</strong> 9:00 - 15:00</p>
          <p><strong>Sobota:</strong> I i III sobota: 8:30 - 12:30</p>
        </div>

        <div className="card">
          <h3>📖 Czytelnia</h3>
          <p><strong>Poniedziałek - Czwartek:</strong> 9:00 - 17:00</p>
          <p><strong>Piątek:</strong> 9:00 - 15:00</p>
          <p><strong>Sobota:</strong> Nieczynne</p>
        </div>
      </div>

      <section
        className="content-section"
        style={{
          backgroundColor: "#FFF9E6",
          padding: "var(--spacing-lg)",
          borderRadius: "8px",
          border: "2px solid #FFD700",
        }}
      >
        <h2>⚠️ Informacje Specjalne</h2>
        <h3>Skontrum 2025</h3>
        <p>
          <strong>Biblioteka będzie nieczynna w dniach 14-25 kwietnia 2025 r.</strong>{" "}
          z powodu przeprowadzania skontrum (inwentaryzacji zbiorów). Przepraszamy za utrudnienia.
        </p>
        <h3>Letnie Godziny Pracy</h3>
        <p>
          W okresie wakacyjnym (lipiec - sierpień) obowiązują skrócone godziny pracy.
          Szczegółowe informacje będą dostępne na stronie i w bibliotece od czerwca.
        </p>
      </section>

      <section className="content-section">
        <h2>Dostępność dla Osób z Niepełnosprawnościami</h2>
        <ul style={{ lineHeight: "1.8", marginLeft: "var(--spacing-lg)" }}>
          <li>✅ Budynek biblioteki posiada podjazd dla wózków inwalidzkich</li>
          <li>✅ Wejście główne jest dostosowane dla osób poruszających się na wózkach</li>
          <li>✅ Toaleta przystosowana dla osób z niepełnosprawnościami</li>
          <li>✅ Możliwość wejścia z psem asystującym</li>
          <li>✅ Pracownicy przeszkoleni w obsłudze osób z niepełnosprawnościami</li>
          <li>⚠️ Brak windy - parter w pełni dostępny</li>
        </ul>
        <p style={{ marginTop: "var(--spacing-md)" }}>
          W razie jakichkolwiek trudności prosimy o kontakt telefoniczny - pracownicy chętnie pomogą!
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
        <h2>Potrzebujesz więcej informacji?</h2>
        <p>Skontaktuj się z nami telefonicznie lub mailowo!</p>
        <div style={{ marginTop: "var(--spacing-md)" }}>
          <p>
            <strong>📞 Telefon:</strong>{" "}
            <a href="tel:+48166317200">16 631 72 00</a>
          </p>
          <p>
            <strong>📧 Email:</strong>{" "}
            <a href="mailto:biblioteka@narol.pl">biblioteka@narol.pl</a>
          </p>
        </div>
        <a href="/kontakt" className="btn" style={{ marginTop: "var(--spacing-md)" }}>
          Formularz kontaktowy
        </a>
      </section>
    </div>
  );
};

export default OpeningHours;
