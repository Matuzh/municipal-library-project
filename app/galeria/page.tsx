import React from "react";

interface GalleryItem {
  title: string;
  date: string;
  count: string;
}

const Gallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    { title: "Noc Bibliotek 2024", date: "14 czerwca 2024", count: "25 zdjęć" },
    { title: "Spotkanie autorskie z J. Nowakiem", date: "5 maja 2024", count: "12 zdjęć" },
    { title: "Dzień Dziecka w bibliotece", date: "1 czerwca 2024", count: "30 zdjęć" },
    { title: "Warsztaty plastyczne", date: "20 kwietnia 2024", count: "18 zdjęć" },
    { title: "Narodowe Czytanie", date: "2 września 2024", count: "22 zdjęć" },
    { title: "Konkurs czytelniczy", date: "15 marca 2024", count: "16 zdjęć" },
  ];

  return (
    <div className="container">
      <h1>Galeria</h1>

      <section className="content-section">
        <p>
          W naszej galerii znajdziesz zdjęcia z wydarzeń organizowanych przez bibliotekę,
          spotkań autorskich, warsztatów i innych inicjatyw kulturalnych.
        </p>
      </section>

      <div className="three-column-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="card">
            <img
              src="/images/library-placeholder.jpg"
              alt={item.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <h3>{item.title}</h3>
            <p style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>
              {item.date}
            </p>
            <p style={{ marginTop: "var(--spacing-sm)" }}>{item.count}</p>
            <div className="card-footer">
              <button className="btn" style={{ cursor: "pointer" }}>
                Zobacz galerię
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="content-section" style={{ marginTop: "var(--spacing-xl)" }}>
        <h2>Najnowsze Wydarzenia</h2>

        <article
          style={{
            marginBottom: "var(--spacing-xl)",
            borderBottom: "1px solid var(--border-color)",
            paddingBottom: "var(--spacing-lg)",
          }}
        >
          <h3>Noc Bibliotek 2024</h3>
          <p className="card-date" style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>
            14 czerwca 2024
          </p>
          <div className="three-column-grid" style={{ marginTop: "var(--spacing-md)" }}>
            <img
              src="/images/books-placeholder.jpg"
              alt="Noc Bibliotek 1"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <img
              src="/images/reading-placeholder.jpg"
              alt="Noc Bibliotek 2"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <img
              src="/images/library-placeholder.jpg"
              alt="Noc Bibliotek 3"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          </div>
          <p style={{ marginTop: "var(--spacing-md)" }}>
            Tegoroczna Noc Bibliotek była pełna atrakcji! Odwiedziło nas ponad 200 osób,
            które uczestniczyły w spotkaniach autorskich, warsztatach i nocnym czytaniu.
            Dziękujemy wszystkim za wspaniałą atmosferę!
          </p>
        </article>

        <article
          style={{
            marginBottom: "var(--spacing-xl)",
            borderBottom: "1px solid var(--border-color)",
            paddingBottom: "var(--spacing-lg)",
          }}
        >
          <h3>Spotkanie autorskie z Janem Nowakiem</h3>
          <p className="card-date" style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>
            5 maja 2024
          </p>
          <div className="three-column-grid" style={{ marginTop: "var(--spacing-md)" }}>
            <img
              src="/images/library-placeholder.jpg"
              alt="Spotkanie 1"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <img
              src="/images/books-placeholder.jpg"
              alt="Spotkanie 2"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <img
              src="/images/reading-placeholder.jpg"
              alt="Spotkanie 3"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          </div>
          <p style={{ marginTop: "var(--spacing-md)" }}>
            Gościliśmy pisarza regionalnego Jana Nowaka, który opowiadał o historii
            i tradycjach Galicji. Spotkanie cieszyło się ogromnym zainteresowaniem
            lokalnej społeczności.
          </p>
        </article>

        <article>
          <h3>Dzień Dziecka w bibliotece</h3>
          <p className="card-date" style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>
            1 czerwca 2024
          </p>
          <div className="three-column-grid" style={{ marginTop: "var(--spacing-md)" }}>
            <img
              src="/images/reading-placeholder.jpg"
              alt="Dzień Dziecka 1"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <img
              src="/images/library-placeholder.jpg"
              alt="Dzień Dziecka 2"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <img
              src="/images/books-placeholder.jpg"
              alt="Dzień Dziecka 3"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          </div>
          <p style={{ marginTop: "var(--spacing-md)" }}>
            Z okazji Dnia Dziecka zorganizowaliśmy wiele atrakcji dla naszych młodych
            czytelników: warsztaty plastyczne, konkursy, głośne czytanie i słodki poczęstunek.
            Dzieci świetnie się bawiły!
          </p>
        </article>
      </section>

      <section
        className="content-section"
        style={{
          backgroundColor: "var(--bg-light)",
          padding: "var(--spacing-lg)",
          borderRadius: "8px",
          textAlign: "center",
          marginTop: "var(--spacing-xl)",
        }}
      >
        <h2>Chcesz zobaczyć więcej zdjęć?</h2>
        <p>
          Odwiedź nasz profil na Facebooku, gdzie regularnie publikujemy zdjęcia
          z wydarzeń bibliotecznych!
        </p>
        <a
          href="https://facebook.com"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "var(--spacing-md)" }}
        >
          📘 Zobacz nas na Facebooku
        </a>
      </section>

      <section className="content-section">
        <h2>Zasady korzystania z galerii</h2>
        <div
          className="card"
          style={{ backgroundColor: "#FFF9E6", border: "2px solid #FFD700" }}
        >
          <h3>⚠️ Uwaga dotycząca prywatności</h3>
          <p>
            Zdjęcia publikowane w galerii zostały wykonane podczas publicznych wydarzeń
            organizowanych przez bibliotekę. Jeśli jesteś na zdjęciu i nie życzysz sobie,
            aby było ono publikowane, prosimy o kontakt:
          </p>
          <p style={{ marginTop: "var(--spacing-sm)" }}>
            <strong>Email:</strong>{" "}
            <a href="mailto:biblioteka@narol.pl">biblioteka@narol.pl</a>
            <br />
            <strong>Telefon:</strong>{" "}
            <a href="tel:+48166317200">16 631 72 00</a>
          </p>
          <p style={{ marginTop: "var(--spacing-sm)", fontSize: "0.9rem" }}>
            Usunięcie zdjęcia nastąpi w ciągu 48 godzin od zgłoszenia.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
