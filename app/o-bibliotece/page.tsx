import React from "react";

const AboutLibrary: React.FC = () => {
  return (
    <div className="container">
      <h1>O Bibliotece</h1>

      <section className="content-section">
        <h2>Historia</h2>
        <p>
          Miejsko-Gminna Biblioteka Publiczna w Narolu została założona w 1947 roku i od ponad 
          75 lat służy mieszkańcom miasta i gminy. Nasza biblioteka jest miejscem spotkań z kulturą, 
          literaturą i sztuką, a także centrum życia społecznego lokalnej społeczności.
        </p>
        <p>
          W ciągu dziesięcioleci działalności biblioteka poszerzała swój księgozbiór, modernizowała 
          infrastrukturę i rozwijała ofertę usług. Dziś jesteśmy nowoczesną instytucją kultury, 
          łączącą tradycyjne zbiory biblioteczne z nowoczesnymi technologiami cyfrowymi.
        </p>
      </section>

      <section className="content-section">
        <h2>Misja i Cele</h2>
        <p>Misją naszej biblioteki jest:</p>
        <ul style={{lineHeight: '1.8', marginLeft: 'var(--spacing-lg)'}}>
          <li>Zapewnienie powszechnego dostępu do książek, informacji i wiedzy</li>
          <li>Krzewienie kultury czytelniczej wśród wszystkich grup wiekowych</li>
          <li>Wspieranie edukacji i samokształcenia mieszkańców</li>
          <li>Organizacja wydarzeń kulturalnych i edukacyjnych</li>
          <li>Ochrona i promocja dziedzictwa kulturowego regionu</li>
          <li>Digitalizacja zbiorów i udostępnianie zasobów online</li>
        </ul>
      </section>

      <div className="three-column-grid">
        <div className="card">
          <h3>Księgozbiór</h3>
          <p>
            Nasza biblioteka posiada ponad 25 000 woluminów, w tym literaturę piękną, 
            popularnonaukową, fachową oraz bogatą kolekcję książek dla dzieci i młodzieży.
          </p>
        </div>

        <div className="card">
          <h3>Zbiory Specjalne</h3>
          <p>
            Dysponujemy cenną kolekcją regionalną dotyczącą historii Narola i Galicji, 
            czasopismami oraz zbiorami multimedialnymi.
          </p>
        </div>

        <div className="card">
          <h3>Zasoby Cyfrowe</h3>
          <p>
            Oferujemy dostęp do e-booków, audiobooków, czasopism elektronicznych oraz 
            baz danych edukacyjnych.
          </p>
        </div>
      </div>

      <section className="content-section">
        <h2>Struktura Organizacyjna</h2>
        <p>Biblioteka działa w strukturze:</p>
        <ul style={{lineHeight: '1.8', marginLeft: 'var(--spacing-lg)'}}>
          <li><strong>Dyrektor:</strong> Kieruje całością działalności biblioteki</li>
          <li><strong>Wypożyczalnia dla dorosłych:</strong> Obsługa czytelników dorosłych</li>
          <li><strong>Wypożyczalnia dla dzieci:</strong> Obsługa młodych czytelników</li>
          <li><strong>Czytelnia:</strong> Dostęp do czasopism i pracy na miejscu</li>
          <li><strong>Dział informacyjno-bibliograficzny:</strong> Pomoc w wyszukiwaniu informacji</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Pracownicy</h2>
        <p>
          Nasz zespół składa się z wykwalifikowanych bibliotekarzy z wieloletnim doświadczeniem, 
          którzy z pasją dzielą się swoją wiedzą i miłością do książek. Jesteśmy do Państwa dyspozycji 
          w sprawach związanych z wyborem lektury, pomocą w wyszukiwaniu informacji oraz organizacją 
          wydarzeń bibliotecznych.
        </p>
      </section>

      <section className="content-section">
        <h2>Współpraca</h2>
        <p>
          Biblioteka współpracuje z:
        </p>
        <ul style={{lineHeight: '1.8', marginLeft: 'var(--spacing-lg)'}}>
          <li>Szkołami i przedszkolami z terenu gminy</li>
          <li>Gminnym Ośrodkiem Kultury w Narolu</li>
          <li>Biblioteką Wojewódzką w Rzeszowie</li>
          <li>Stowarzyszeniem Bibliotekarzy Polskich</li>
          <li>Lokalnymi organizacjami pozarządowymi</li>
        </ul>
      </section>

      <section className="content-section" style={{backgroundColor: 'var(--bg-light)', padding: 'var(--spacing-lg)', borderRadius: '8px', textAlign: 'center'}}>
        <h2>Odwiedź nas!</h2>
        <p>
          Zapraszamy do osobistego odwiedzenia naszej biblioteki. Nasi bibliotekarze chętnie 
          pomogą w wyborze książek i odpowiedzą na wszystkie pytania.
        </p>
        <a href="/kontakt" className="btn" style={{marginTop: 'var(--spacing-md)'}}>Skontaktuj się z nami</a>
      </section>
    </div>
  );
};

export default AboutLibrary;