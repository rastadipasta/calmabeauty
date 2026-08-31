import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Clock3,
  MapPin,
  Menu,
  Phone,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Tretmani lica',
    subtitle: 'Njega koja sluša tvoju kožu',
    description:
      'Od dubinskog čišćenja i hidratacije do pažljivo odabranih pilinga — tretman prilagođavamo stanju i potrebama tvoje kože.',
    treatments: ['HydraFacial', 'Kemijski pilinzi', 'Individualna njega'],
    image: '/images/hydrafacial.jpg',
    alt: 'HydraFacial tretman lica u salonu Calma Beauty',
  },
  {
    number: '02',
    title: 'Tretmani tijela',
    subtitle: 'Vrijeme za lakoću i ravnotežu',
    description:
      'Rituali njege osmišljeni su kao predah za tijelo — uz stručan pristup, ugodnu atmosferu i pažnju posvećenu svakom detalju.',
    treatments: ['Njega tijela', 'Piling tijela', 'Tretmani po dogovoru'],
    image: '/images/tijelo.jpg',
    alt: 'Tretman njege tijela u salonu Calma Beauty',
  },
  {
    number: '03',
    title: 'Masaže',
    subtitle: 'Dodir koji otpušta napetost',
    description:
      'Usporavanje počinje već pri ulasku. Masaža je tvoj trenutak za odmor, dublji udah i osjećaj da se tijelo ponovno vraća sebi.',
    treatments: ['Opuštajuće masaže', 'Masaža i piling', 'Calma ritual'],
    image: '/images/masaza.jpg',
    alt: 'Opuštajuća masaža i piling tijela u salonu Calma Beauty',
  },
  {
    number: '04',
    title: 'Depilacije',
    subtitle: 'Nježniji put do glatke kože',
    description:
      'Precizan i pažljiv pristup uz fokus na udobnost kože. Dostupna je i depilacija prirodnom šećernom pastom, pogodna za osjetljivu kožu.',
    treatments: ['Šećerna pasta', 'Depilacija tijela', 'Njega osjetljive kože'],
    image: '/images/depilacija.jpg',
    alt: 'Depilacija šećernom pastom u salonu Calma Beauty',
  },
];

const reviews = [
  {
    initials: 'L. J.',
    text: 'Obožavam ovaj salon. Predivna Marina, predivan prostor, predivan pristup i briga oko svakog detalja.',
  },
  {
    initials: 'L. M.',
    text: 'Prezadovoljna sam uslugom! Marina je izuzetno profesionalna, ljubazna i pažljiva; stvarno se vidi koliko voli svoj posao.',
  },
  {
    initials: 'M. V.',
    text: 'Predivno iskustvo! Sve usluge su odrađene profesionalno, precizno i s puno pažnje prema detaljima.',
  },
];

const faqs = [
  {
    question: 'Kako mogu rezervirati termin?',
    answer:
      'Najbrže je nazvati nas na 091 601 5254. Ako ti je lakše, možeš nam poslati i poruku putem Instagram profila @_calmabeauty_.',
  },
  {
    question: 'Koje je radno vrijeme salona?',
    answer:
      'Otvoreni smo od ponedjeljka do subote, od 08:00 do 20:00. Termin je moguće dogovoriti i izvan tog vremena, ovisno o dostupnosti.',
  },
  {
    question: 'Gdje se nalazi Calma Beauty?',
    answer:
      'Salon se nalazi na adresi Dankovečka ulica 12, 10000 Zagreb, u Dubravi. Poveznica na Google kartu nalazi se u odjeljku Kontakt.',
  },
  {
    question: 'Kako odabrati pravi tretman?',
    answer:
      'Ne moraš znati unaprijed. Pri rezervaciji nam reci što želiš postići ili kako se želiš osjećati, a zajedno ćemo odabrati tretman koji ti najbolje odgovara.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Calma Beauty',
  url: '/',
  description:
    'Salon za žene u Zagrebu za tretmane lica i tijela, masaže i depilacije.',
  image: '/images/hero-face.jpg',
  telephone: '+385916015254',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dankovečka ulica 12',
    postalCode: '10000',
    addressLocality: 'Zagreb',
    addressCountry: 'HR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  sameAs: ['https://www.instagram.com/_calmabeauty_/'],
};

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-mark${light ? ' brand-mark-light' : ''}`}>
      <span>CALMA</span>
      <small>BEAUTY</small>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="loader" aria-hidden="true">
        <img src="/images/calma-logo.png" alt="" />
        <span />
      </div>

      <a className="skip-link" href="#intro">
        Preskoči na sadržaj
      </a>

      <header className="site-header">
        <a href="#top" aria-label="Calma Beauty — početna">
          <BrandMark />
        </a>

        <nav className="desktop-nav" aria-label="Glavna navigacija">
          <a href="#intro">O nama</a>
          <a href="#usluge">Tretmani</a>
          <a href="#recenzije">Recenzije</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a className="header-cta" href="tel:+385916015254">
          <Phone aria-hidden="true" size={15} />
          <span>Rezerviraj termin</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Otvori izbornik">
            <Menu aria-hidden="true" size={22} />
          </summary>
          <nav aria-label="Mobilna navigacija">
            <a href="#intro">O nama</a>
            <a href="#usluge">Tretmani</a>
            <a href="#recenzije">Recenzije</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </details>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow reveal">Kozmetički salon · Zagreb</p>
            <h1 id="hero-title" className="reveal delay-1">
              Mjesto gdje
              <br /> počinje tvoj <em>mir.</em>
            </h1>
            <p className="hero-lede reveal delay-2">
              Vrijeme posvećeno tebi, uz pažljivo odabrane tretmane lica i tijela,
              masaže i nježnu depilaciju.
            </p>
            <div className="hero-actions reveal delay-3">
              <a className="button button-dark magnetic" href="tel:+385916015254">
                Nazovi i rezerviraj <Phone aria-hidden="true" size={16} />
              </a>
              <a className="text-link" href="#usluge">
                Istraži tretmane <ArrowDown aria-hidden="true" size={16} />
              </a>
            </div>
            <a
              className="rating reveal delay-4"
              href="https://share.google/ekcDs0SmWT68ilKM0"
              target="_blank"
              rel="noreferrer"
              aria-label="Calma Beauty ima ocjenu 5,0 od 5 na temelju 13 Google recenzija"
            >
              <span className="stars" aria-hidden="true">★★★★★</span>
              <strong>5,0</strong>
              <span>13 Google recenzija</span>
            </a>
          </div>

          <div className="hero-visual">
            <img
              src="/images/hero-face.jpg"
              alt="Tretman njege lica u salonu Calma Beauty"
              width="640"
              height="640"
              loading="eager"
              fetchPriority="high"
            />
            <div className="hero-shade" />
            <div className="hero-stamp" aria-hidden="true">
              <span>CALMA</span>
              <small>BEAUTY · ZAGREB</small>
            </div>
            <span className="image-caption">Njega koja vraća ravnotežu</span>
          </div>
        </section>

        <section className="intro section-shell" id="intro">
          <div className="intro-heading view-reveal">
            <p className="section-index">01 — CALMA TRENUTAK</p>
            <p className="intro-quote">
              Ovdje ljepota nije žurba. Ona je osjećaj da si viđena, njegovana i
              ponovno svoja.
            </p>
          </div>
          <div className="intro-grid">
            <div className="intro-copy view-reveal">
              <Sparkles aria-hidden="true" size={20} strokeWidth={1.4} />
              <p>
                Calma Beauty je salon za žene u kojem svaki dolazak počinje
                razgovorom, a svaki tretman prati miran, individualan pristup.
                Ne tražimo prečace — biramo ono što tvojoj koži i tijelu u tom
                trenutku stvarno treba.
              </p>
              <a className="text-link" href="tel:+385916015254">
                Pronađimo tvoj Calma ritual <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
            <div className="editorial-collage view-reveal">
              <img
                className="collage-main"
                src="/images/piling.jpg"
                alt="Pažljivo izvođenje tretmana kože lica"
                width="640"
                height="640"
                loading="lazy"
              />
              <img
                className="collage-detail"
                src="/images/calma-logo.png"
                alt="Calma Beauty logotip"
                width="769"
                height="489"
                loading="lazy"
              />
              <span className="collage-note">Preciznost u svakom dodiru.</span>
            </div>
          </div>
        </section>

        <section className="services section-shell" id="usluge" aria-labelledby="services-title">
          <div className="section-heading view-reveal">
            <p className="section-index">02 — TRETMANI</p>
            <h2 id="services-title">Njega koja se prilagođava <em>tebi.</em></h2>
            <p>
              Četiri načina da zastaneš, poslušaš svoje tijelo i odabereš ono što ti
              danas najviše treba.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card view-reveal" key={service.number}>
                <div className="service-number">{service.number}</div>
                <div className="service-image-wrap">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width="640"
                    height="640"
                    loading="lazy"
                  />
                </div>
                <div className="service-copy">
                  <p>{service.subtitle}</p>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul aria-label={`Izdvojeno iz kategorije ${service.title}`}>
                    {service.treatments.map((treatment) => (
                      <li key={treatment}>{treatment}</li>
                    ))}
                  </ul>
                  <a className="round-link" href="tel:+385916015254" aria-label={`Rezerviraj ${service.title}`}>
                    <ArrowUpRight aria-hidden="true" size={19} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ritual" aria-labelledby="ritual-title">
          <div className="ritual-image view-reveal">
            <img
              src="/images/masaza.jpg"
              alt="Calma ritual masaže i njege tijela"
              width="640"
              height="640"
              loading="lazy"
            />
          </div>
          <div className="ritual-copy view-reveal">
            <p className="section-index">CALMA RITUAL</p>
            <h2 id="ritual-title">Sat vremena samo za <em>tebe.</em></h2>
            <p>
              Utišaj obavijesti. Duboko udahni. Prepusti nam detalje, a sebi dopusti
              trenutak u kojem ne moraš biti nigdje drugdje.
            </p>
            <a className="button button-light magnetic" href="tel:+385916015254">
              Rezerviraj svoj trenutak <Phone aria-hidden="true" size={16} />
            </a>
          </div>
          <div className="marquee" aria-hidden="true">
            <span>CALMA · NJEGA · MIR · RAVNOTEŽA · CALMA · NJEGA · MIR · RAVNOTEŽA ·</span>
          </div>
        </section>

        <section className="reviews section-shell" id="recenzije" aria-labelledby="reviews-title">
          <div className="reviews-lead view-reveal">
            <p className="section-index">03 — RIJEČI KLIJENTICA</p>
            <h2 id="reviews-title">Povjerenje se osjeti u <em>detaljima.</em></h2>
            <a
              className="rating rating-large"
              href="https://share.google/ekcDs0SmWT68ilKM0"
              target="_blank"
              rel="noreferrer"
            >
              <span className="stars" aria-hidden="true">★★★★★</span>
              <strong>5,0 / 5</strong>
              <span>na temelju 13 Google recenzija</span>
            </a>
          </div>
          <div className="review-grid">
            {reviews.map((review, index) => (
              <figure className="review-card view-reveal" key={review.initials}>
                <span className="quote-mark" aria-hidden="true">“</span>
                <blockquote>{review.text}</blockquote>
                <figcaption>
                  <span>{review.initials}</span>
                  <small>Google recenzija · 5/5</small>
                </figcaption>
                <span className="review-count">0{index + 1}</span>
              </figure>
            ))}
          </div>
        </section>

        <section className="faq section-shell" aria-labelledby="faq-title">
          <div className="faq-heading view-reveal">
            <p className="section-index">04 — DOBRO JE ZNATI</p>
            <h2 id="faq-title">Prije tvog prvog <em>dolaska.</em></h2>
            <p>Ako odgovor nije ovdje, nazovi nas. Rado ćemo ti pomoći odabrati pravi termin i tretman.</p>
          </div>
          <div className="faq-list view-reveal">
            {faqs.map((faq, index) => (
              <details key={faq.question} name="calma-faq">
                <summary>
                  <span>0{index + 1}</span>
                  {faq.question}
                  <i aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact" id="kontakt" aria-labelledby="contact-title">
          <div className="contact-top section-shell">
            <div className="contact-title view-reveal">
              <p className="section-index">05 — POSJETI NAS</p>
              <h2 id="contact-title">Tvoj mir počinje <em>ovdje.</em></h2>
            </div>
            <div className="contact-grid">
              <a
                className="contact-item view-reveal"
                href="https://share.google/ekcDs0SmWT68ilKM0"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin aria-hidden="true" size={20} strokeWidth={1.4} />
                <span>
                  <small>Adresa</small>
                  Dankovečka ulica 12
                  <br />10000 Zagreb
                </span>
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a className="contact-item view-reveal" href="tel:+385916015254">
                <Phone aria-hidden="true" size={20} strokeWidth={1.4} />
                <span>
                  <small>Rezervacije</small>
                  091 601 5254
                </span>
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <div className="contact-item view-reveal">
                <Clock3 aria-hidden="true" size={20} strokeWidth={1.4} />
                <span>
                  <small>Radno vrijeme</small>
                  Pon–Sub 08:00–20:00
                  <br />ili po dogovoru
                </span>
              </div>
              <a
                className="contact-item view-reveal"
                href="https://www.instagram.com/_calmabeauty_/"
                target="_blank"
                rel="noreferrer"
              >
                <Camera aria-hidden="true" size={20} strokeWidth={1.4} />
                <span>
                  <small>Instagram</small>
                  @_calmabeauty_
                </span>
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>

          <footer>
            <BrandMark light />
            <p>Mjesto gdje počinje tvoj mir.</p>
            <div>
              <a href="#usluge">Tretmani</a>
              <a href="#recenzije">Recenzije</a>
              <a href="#kontakt">Kontakt</a>
            </div>
            <small>© 2026 Calma Beauty · Zagreb</small>
          </footer>
        </section>
      </main>

      <a className="mobile-cta" href="tel:+385916015254">
        <Phone aria-hidden="true" size={16} /> Rezerviraj termin
      </a>
    </>
  );
}
