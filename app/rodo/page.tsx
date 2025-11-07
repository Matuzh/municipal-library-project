import React from "react";

const RODO: React.FC = () => {
  return (
    <div className="container">
      <h1>Polityka Prywatności (RODO)</h1>

      <section className="content-section">
        <p>
          Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
          przekazanych przez Użytkowników w związku z korzystaniem z usług świadczonych drogą 
          elektroniczną przez Miejsko-Gminną Bibliotekę Publiczną w Narolu.
        </p>
        <p style={{marginTop: 'var(--spacing-md)'}}>
          <strong>Data ostatniej aktualizacji:</strong> 7 listopada 2024
        </p>
      </section>

      <section className="content-section">
        <h2>1. Administrator Danych Osobowych</h2>
        <p>
          Administratorem danych osobowych jest:
        </p>
        <address style={{fontStyle: 'normal', lineHeight: '1.8', marginLeft: 'var(--spacing-lg)'}}>
          <strong>Miejsko-Gminna Biblioteka Publiczna w Narolu</strong><br/>
          ul. Rynek 1<br/>
          37-610 Narol<br/>
          NIP: 123-456-78-90<br/>
          REGON: 123456789<br/>
          <strong>Tel:</strong> 16 631 72 00<br/>
          <strong>E-mail:</strong> biblioteka@narol.pl
        </address>
      </section>

      <section className="content-section">
        <h2>2. Inspektor Ochrony Danych (IOD)</h2>
        <p>
          Administrator wyznaczył Inspektora Ochrony Danych, z którym można skontaktować się:
        </p>
        <p style={{marginLeft: 'var(--spacing-lg)'}}>
          <strong>Email:</strong> iod@biblioteka-narol.pl<br/>
          <strong>Telefon:</strong> 16 631 72 00 (wew. 15)<br/>
          <strong>Adres korespondencyjny:</strong> ul. Rynek 1, 37-610 Narol
        </p>
        <p>
          Z Inspektorem Ochrony Danych można kontaktować się we wszystkich sprawach dotyczących 
          przetwarzania danych osobowych oraz korzystania z praw związanych z przetwarzaniem danych.
        </p>
      </section>

      <section className="content-section">
        <h2>3. Źródła i Kategorie Przetwarzanych Danych Osobowych</h2>
        <p>
          Administrator przetwarza dane osobowe, które Użytkownicy przekazują dobrowolnie:
        </p>
        <ul style={{lineHeight: '1.8', marginLeft: 'var(--spacing-lg)'}}>
          <li>podczas rejestracji jako czytelnik biblioteki</li>
          <li>podczas wypełniania formularzy kontaktowych na stronie internetowej</li>
          <li>podczas zapisów na wydarzenia i programy biblioteczne</li>
          <li>podczas korzystania z usług bibliotecznych</li>
          <li>podczas kontaktu telefonicznego lub e-mailowego</li>
        </ul>

        <h3>Kategorie danych osobowych:</h3>
        <ul style={{lineHeight: '1.8', marginLeft: 'var(--spacing-lg)'}}>
          <li>Dane identyfikacyjne: imię, nazwisko</li>
          <li>Dane kontaktowe: adres zamieszkania, numer telefonu, adres e-mail</li>
          <li>Data urodzenia (w przypadku dzieci i młodzieży)</li>
          <li>Numer dowodu osobistego lub innego dokumentu tożsamości</li>
          <li>Historia wypożyczeń (wyłącznie dla celów bibliotecznych)</li>
          <li>Informacje o opłatach i należnościach</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>4. Cele Przetwarzania Danych i Podstawa Prawna</h2>
        
        <h3>4.1. Obsługa czytelników biblioteki</h3>
        <p>
          <strong>Cel:</strong> Prowadzenie usług bibliotecznych, wypożyczanie zbiorów, 
          zarządzanie kontem czytelnika.
        </p>
        <p>
          <strong>Podstawa prawna:</strong> Art. 6 ust. 1 lit. b) RODO (wykonanie umowy) oraz 
          Ustawa z dnia 27 czerwca 1997 r. o bibliotekach.
        </p>
        <p>
          <strong>Okres przechowywania:</strong> Przez okres korzystania z usług biblioteki 
          oraz przez 5 lat od zaprzestania korzystania (zgodnie z przepisami archiwalnymi).
        </p>

        <h3>4.2. Kontakt z użytkownikami</h3>
        <p>
          <strong>Cel:</strong> Odpowiedzi na pytania, obsługa zgłoszeń, komunikacja.
        </p>
        <p>
          <strong>Podstawa prawna:</strong> Art. 6 ust. 1 lit. f) RODO (prawnie uzasadniony 
          interes administratora).
        </p>
        <p>
          <strong>Okres przechowywania:</strong> Do czasu zakończenia sprawy lub do momentu 
          wniesienia sprzeciwu.
        </p>

        <h3>4.3. Newsletter i informacje o wydarzeniach</h3>
        <p>
          <strong>Cel:</strong> Wysyłanie informacji o wydarzeniach, nowościach w księgozbiorze, 
          aktualnościach bibliotecznych.
        </p>
        <p>
          <strong>Podstawa prawna:</strong> Art. 6 ust. 1 lit. a) RODO (zgoda).
        </p>
        <p>
          <strong>Okres przechowywania:</strong> Do czasu wycofania zgody.
        </p>

        <h3>4.4. Wypełnienie obowiązków prawnych</h3>
        <p>
          <strong>Cel:</strong> Wypełnienie obowiązków wynikających z przepisów prawa 
          (np. sprawozdawczość statystyczna).
        </p>
        <p>
          <strong>Podstawa prawna:</strong> Art. 6 ust. 1 lit. c) RODO (obowiązek prawny).
        </p>
        <p>
          <strong>Okres przechowywania:</strong> Zgodnie z przepisami właściwymi dla danego 
          obowiązku prawnego.
        </p>
      </section>

      <section className="content-section">
        <h2>5. Odbiorcy Danych Osobowych</h2>
        <p>
          Dane osobowe mogą być przekazywane następującym kategoriom odbiorców:
        </p>
        <ul style={{lineHeight: '1.8', marginLeft: 'var(--spacing-lg)'}}>
          <li>Dostawcy usług IT obsługujący systemy informatyczne biblioteki</li>
          <li>Dostawcy usług hostingowych</li>
          <li>Organy publiczne uprawione do otrzymania danych na podstawie przepisów prawa</li>
          <li>Podmioty świadczące usługi księgowe i prawne</li>
        </ul>
        <p>
          Wszyscy odbiorcy danych osobowych są związani umowami powierzenia przetwarzania danych 
          osobowych lub innymi umowami zapewniającymi ochronę danych osobowych.
        </p>
      </section>

      <section className="content-section">
        <h2>6. Przekazywanie Danych Poza EOG</h2>
        <p>
          Administrator nie przekazuje danych osobowych do państw trzecich (poza Europejski Obszar Gospodarczy).
        </p>
      </section>

      <section className="content-section">
        <h2>7. Prawa Osób, Których Dane Dotyczą</h2>
        <p>
          Każda osoba, której dane osobowe są przetwarzane przez Administratora, ma prawo do:
        </p>

        <div className="card">
          <h3>7.1. Prawo dostępu do danych</h3>
          <p>
            Prawo do uzyskania informacji o przetwarzaniu danych osobowych oraz otrzymania 
            kopii tych danych (art. 15 RODO).
          </p>
        </div>

        <div className="card">
          <h3>7.2. Prawo do sprostowania danych</h3>
          <p>
            Prawo do żądania sprostowania (poprawiania) nieprawidłowych danych osobowych 
            lub uzupełnienia niekompletnych danych (art. 16 RODO).
          </p>
        </div>

        <div className="card">
          <h3>7.3. Prawo do usunięcia danych („prawo do bycia zapomnianym")</h3>
          <p>
            Prawo do żądania usunięcia danych osobowych, gdy nie są już niezbędne do celów, 
            w których zostały zebrane, lub gdy została wycofana zgoda (art. 17 RODO).
          </p>
        </div>

        <div className="card">
          <h3>7.4. Prawo do ograniczenia przetwarzania</h3>
          <p>
            Prawo do ograniczenia przetwarzania danych osobowych w określonych przypadkach 
            (art. 18 RODO).
          </p>
        </div>

        <div className="card">
          <h3>7.5. Prawo do przenoszenia danych</h3>
          <p>
            Prawo do otrzymania danych osobowych w ustrukturyzowanym, powszechnie używanym 
            formacie nadającym się do odczytu maszynowego (art. 20 RODO).
          </p>
        </div>

        <div className="card">
          <h3>7.6. Prawo sprzeciwu</h3>
          <p>
            Prawo do wniesienia sprzeciwu wobec przetwarzania danych osobowych (art. 21 RODO).
          </p>
        </div>

        <div className="card">
          <h3>7.7. Prawo do cofnięcia zgody</h3>
          <p>
            W przypadku, gdy przetwarzanie danych odbywa się na podstawie zgody, przysługuje 
            prawo do cofnięcia zgody w dowolnym momencie (art. 7 ust. 3 RODO).
          </p>
        </div>

        <div className="card">
          <h3>7.8. Prawo do wniesienia skargi</h3>
          <p>
            Prawo do wniesienia skargi do organu nadzorczego - Prezesa Urzędu Ochrony 
            Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
          </p>
        </div>

        <p style={{marginTop: 'var(--spacing-md)'}}>
          W celu skorzystania z powyższych praw prosimy o kontakt z Administratorem lub 
          Inspektorem Ochrony Danych.
        </p>
      </section>

      <section className="content-section">
        <h2>8. Pliki Cookies</h2>
        <p>
          Strona internetowa biblioteki używa plików cookies (ciasteczek). Są to małe pliki 
          tekstowe wysyłane przez serwer i zapisywane po stronie użytkownika.
        </p>

        <h3>Wykorzystywane pliki cookies:</h3>
        <ul style={{lineHeight: '1.8', marginLeft: 'var(--spacing-lg)'}}>
          <li><strong>Cookies techniczne</strong> - niezbędne do prawidłowego funkcjonowania strony</li>
          <li><strong>Cookies analityczne</strong> - służące do analizy ruchu na stronie (za zgodą użytkownika)</li>
        </ul>

        <p style={{marginTop: 'var(--spacing-md)'}}>
          Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w 
          przeglądarce internetowej. Brak zmiany tych ustawień oznacza akceptację dla 
          stosowanych tu plików cookies.
        </p>
      </section>

      <section className="content-section">
        <h2>9. Bezpieczeństwo Danych</h2>
        <p>
          Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające 
          ochronę przetwarzanych danych osobowych, w tym:
        </p>
        <ul style={{lineHeight: '1.8', marginLeft: 'var(--spacing-lg)'}}>
          <li>Szyfrowanie połączeń SSL/TLS</li>
          <li>Ograniczenie dostępu do danych osobowych wyłącznie dla upoważnionych pracowników</li>
          <li>Regularne kopie zapasowe danych</li>
          <li>Stosowanie aktualnego oprogramowania zabezpieczającego</li>
          <li>Kontrola dostępu do pomieszczeń, w których przetwarzane są dane osobowe</li>
          <li>Szkolenia pracowników z zakresu ochrony danych osobowych</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>10. Zautomatyzowane Podejmowanie Decyzji</h2>
        <p>
          Dane osobowe nie będą wykorzystywane do zautomatyzowanego podejmowania decyzji, 
          w tym profilowania.
        </p>
      </section>

      <section className="content-section">
        <h2>11. Zmiany Polityki Prywatności</h2>
        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce 
          Prywatności. O wszelkich zmianach użytkownicy zostaną poinformowani poprzez 
          publikację nowej wersji Polityki Prywatności na stronie internetowej.
        </p>
      </section>

      <section className="content-section" style={{backgroundColor: 'var(--bg-light)', padding: 'var(--spacing-lg)', borderRadius: '8px'}}>
        <h2>12. Kontakt w Sprawach Ochrony Danych Osobowych</h2>
        <p>
          W sprawach dotyczących przetwarzania danych osobowych oraz realizacji przysługujących 
          praw prosimy o kontakt:
        </p>
        <address style={{fontStyle: 'normal', lineHeight: '1.8', marginTop: 'var(--spacing-md)'}}>
          <strong>Inspektor Ochrony Danych:</strong><br/>
          Email: iod@biblioteka-narol.pl<br/>
          Telefon: 16 631 72 00 (wew. 15)<br/>
          Adres korespondencyjny: Miejsko-Gminna Biblioteka Publiczna w Narolu, 
          ul. Rynek 1, 37-610 Narol
        </address>
      </section>

      <section className="content-section">
        <p style={{fontSize: '0.9rem', color: 'var(--text-light)', marginTop: 'var(--spacing-xl)'}}>
          Niniejsza Polityka Prywatności została opracowana zgodnie z Rozporządzeniem Parlamentu 
          Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób 
          fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu 
          takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych 
          - RODO).
        </p>
      </section>
    </div>
  );
};

export default RODO;