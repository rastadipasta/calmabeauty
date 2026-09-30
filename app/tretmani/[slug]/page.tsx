import { HeaderActions } from '../../header-actions';
import faqPhoneStyles from './faq-phone.module.css';
import type { Metadata } from 'next';
import Image from 'next/image';
/* Native links are intercepted by the shared iris page transition. */
/* oxlint-disable next/no-html-link-for-pages */
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Phone } from 'lucide-react';
import { MobileMenu } from '../../motion-elements';
import { services } from '../../treatments';
import { treatmentFaqs } from '../../treatment-faqs';
import { TreatmentMenu } from '../../treatment-menu';
import { treatmentDetails } from '../../treatment-details';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return {
    title: `${service.title} | Calma Beauty Zagreb`,
    description: service.description,
    alternates: { canonical: `/tretmani/${slug}` },
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const details = treatmentDetails[slug];
  const euros = (amount: number) => new Intl.NumberFormat('hr-HR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 }).format(amount);

  return (
    <>
      <a className="skip-link" href="#sadrzaj">Preskoči na sadržaj</a>
      <header className="site-header">
        <a href="/" aria-label="Calma Beauty — početna">
          <span className="brand-mark"><span>CALMA</span><small>BEAUTY</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Glavna navigacija">
          <a href="/#intro">O nama</a><TreatmentMenu />
          <a href="/#recenzije">Recenzije</a><a href="/#kontakt">Kontakt</a>
        </nav>
        <HeaderActions />
        <MobileMenu homePath="/" />
      </header>
      <main id="sadrzaj" className="treatment-page">
        <section className="treatment-hero section-shell" aria-labelledby="treatment-title">
          <div className="treatment-copy">
            <a className="text-link treatment-back" href="/#usluge"><ArrowLeft size={15} aria-hidden="true" /> Svi tretmani</a>
            <p className="section-index">CALMA BEAUTY</p>
            <h1 id="treatment-title">{service.title}</h1>
            <p className="treatment-subtitle">{service.subtitle}</p>
            <p className="hero-lede">{service.description}</p>
            <ul className="treatment-tags" aria-label="U ponudi">{service.treatments.map((item) => <li key={item}>{item}</li>)}</ul>
            <a className="button button-dark" href="tel:+385916015254">Rezerviraj svoj termin <Phone size={16} aria-hidden="true" /></a>
          </div>
          <figure className="treatment-visual">
            <Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 48vw" priority />
          </figure>
        </section>
        <div className="treatment-directory section-shell">
          <p className="section-index">PRONAĐI SVOJU NJEGU · {String(details.length).padStart(2, '0')} TRETMANA</p>
          <nav aria-label="Odaberi tretman na ovoj stranici">
            {details.map((item, index) => <a href={`#${item.id}`} key={item.id}><span>{String(index + 1).padStart(2, '0')}</span>{item.title}<ArrowUpRight size={16} aria-hidden="true" /></a>)}
          </nav>
          <p className="treatment-pricing-draft"><strong>Radni prijedlog cjenika.</strong> Prikazani iznosi i referentne cijene služe za pregled nove ponude i još nisu važeći cjenik salona. Točnu cijenu potvrđujemo pri rezervaciji.</p>
        </div>
        <div className="treatment-collection section-shell">
          {details.map((item, index) => (
            <section className="treatment-detail" id={item.id} key={item.id} aria-labelledby={`${item.id}-title`}>
              <figure className="treatment-detail-visual">
                <Image src={item.image} alt="" fill sizes="(max-width: 800px) 100vw, 40vw" style={{ objectPosition: item.imagePosition }} />
                <figcaption><span>CALMA BEAUTY</span><span>{String(index + 1).padStart(2, '0')} / {String(details.length).padStart(2, '0')}</span></figcaption>
              </figure>
              <div className="treatment-detail-copy">
                <p className="section-index">{service.title}</p>
                <h2 id={`${item.id}-title`}>{item.title}</h2>
                <p className="treatment-detail-intro">{item.intro}</p>
                <dl className="treatment-explained">
                  <div><dt>Kako izgleda tretman</dt><dd>{item.how}</dd></div>
                  <div><dt>Zašto ga odabrati</dt><dd>{item.why}</dd></div>
                  <div><dt>Za koga je tretman namijenjen</dt><dd>{item.forWhom}</dd></div>
                </dl>
                {item.note && <p className="treatment-detail-note">{item.note}</p>}
                <div className="treatment-booking">
                  <div className="treatment-price">
                    <span className="treatment-price-label">Predložena cijena tretmana</span>
                    {item.price ? <>
                      <strong>{euros(item.price.amount)}</strong>
                      <span className="treatment-price-reference">{item.price.anchorLabel} {euros(item.price.anchorAmount)} na dan {item.price.anchorDate}</span>
                      <small>{item.price.basis}</small>
                    </> : <strong className="treatment-price-pending">Na upit</strong>}
                  </div>
                  <a className="text-link" href={`https://wa.me/385916015254?text=${encodeURIComponent(`Pozdrav! Zanima me ${item.title}. Možete li mi potvrditi cijenu i slobodne termine?`)}`} aria-label={`Upit za tretman: ${item.title}`}>Dogovori termin <ArrowUpRight size={18} aria-hidden="true" /></a>
                </div>
              </div>
            </section>
          ))}
        </div>
        {slug === 'tretmani-lica' && <aside className="treatment-care-note section-shell">
          <p className="section-index">MALI DETALJI NJEGE</p>
          <h2>I ono što tvojoj koži <em>baš tada treba.</em></h2>
          <p>Maske za lice biramo kao dodatak njezi, prema onome što koži odgovara. Enzimatski piling i masaža Glow maskom dio su tretmana Vitamin C Expert. Ako nisi sigurna odakle krenuti, zajedno ćemo proći tvoju rutinu i odabrati prvi tretman.</p>
        </aside>}
        <section className="faq section-shell treatment-faq" aria-labelledby="faq-title">
          <div className="faq-heading">
            <p className="section-index">PITANJA I ODGOVORI</p>
            <h2 id="faq-title">Prije tvog <em>dolaska.</em></h2>
            <p>Sve počinje dobrim razgovorom. Za dodatna pitanja tu smo na <span className={faqPhoneStyles.phone}><a href="tel:+385916015254">091 601 5254</a>.</span></p>
          </div>
          <div className="faq-list">{treatmentFaqs[slug].map((faq, index) => (
            <details key={faq.question} name="treatment-faq">
              <summary><span>0{index + 1}</span>{faq.question}<i aria-hidden="true" /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}</div>
        </section>
        <nav className="treatment-related section-shell" aria-label="Ostali tretmani">
          <p className="section-index">ISTRAŽI I OSTALE TRETMANE</p>
          <div>{services.filter((item) => item.slug !== slug).map((item) => (
            <a href={`/tretmani/${item.slug}`} key={item.slug}>{item.title}<ArrowUpRight size={20} aria-hidden="true" /></a>
          ))}</div>
        </nav>
      </main>
      <footer className="treatment-footer section-shell">
        <a href="/" className="brand-mark brand-mark-light"><span>CALMA</span><small>BEAUTY</small></a>
        <p>Dankovečka ulica 12 · Zagreb</p>
        <a href="tel:+385916015254">091 601 5254</a>
        <div><a href="/#kontakt">Kontakt</a><a href="/cjenik.csv" download>Cjenik</a></div>
        <small className="footer-credit"><a href="https://timdsgn.com/index.html" target="_blank" rel="noopener noreferrer">Powered by TIMDSGN</a></small>
      </footer>
    </>
  );
}

