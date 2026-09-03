import { ArrowLeft, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <header className="not-found-header">
        <Link className="brand-mark" href="/" aria-label="Calma Beauty — početna">
          <span>CALMA</span>
          <small>BEAUTY</small>
        </Link>

        <span className="not-found-header-note">Kozmetički salon · Zagreb</span>
      </header>

      <section className="not-found-content" aria-labelledby="not-found-title">
        <div className="not-found-copy">
          <p className="not-found-code" aria-hidden="true">
            404
          </p>
          <p className="eyebrow">Stranica nije pronađena</p>
          <h1 id="not-found-title">
            Izgleda da je ova stranica otišla na <em>predah.</em>
          </h1>
          <p className="not-found-lede">
            Poveznica možda više nije aktivna, ali tvoj trenutak mira i dalje je
            samo jedan korak udaljen.
          </p>

          <div className="not-found-actions">
            <Link className="button button-dark" href="/">
              <ArrowLeft aria-hidden="true" size={16} />
              Povratak na početnu
            </Link>
            <a className="text-link" href="tel:+385916015254">
              <Phone aria-hidden="true" size={15} />
              Rezerviraj termin
            </a>
          </div>
        </div>

        <figure className="not-found-visual image-noise">
          <Image
            src="/images/hero-face.jpg"
            alt="Mirna atmosfera salona Calma Beauty"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 46vw"
          />
          <figcaption>Vrijeme je da se vratiš sebi.</figcaption>
        </figure>
      </section>
    </main>
  );
}
