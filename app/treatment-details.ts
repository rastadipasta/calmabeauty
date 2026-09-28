export type TreatmentDetail = {
  id: string;
  title: string;
  intro: string;
  how: string;
  why: string;
  forWhom: string;
  image: string;
  imagePosition?: string;
  note?: string;
  price: null | { amount: number; anchorAmount: number; anchorLabel: string; anchorDate: string; basis: string };
};

// Owner-authorized draft prices. Reference prices are proposals, not price history.
const draftPrice = (amount: number, anchorAmount: number, basis = 'Jedan tretman') => ({
  amount, anchorAmount, anchorLabel: 'Sidrena cijena', anchorDate: '10.9.2026.', basis,
});

export const proposedPrices: Record<string, ReturnType<typeof draftPrice>> = {
  'ciscenje-lica': draftPrice(50, 50),
  'ultrazvucno-ciscenje': draftPrice(50, 50),
  hydrafacial: draftPrice(50, 50),
  'kemijski-piling': draftPrice(50, 50),
  radiofrekvencija: draftPrice(50, 50),
  'tretman-kisikom': draftPrice(50, 50),
  microneedling: draftPrice(50, 50),
  'exo-lift': draftPrice(50, 50),
  'vitamin-c': draftPrice(50, 50),
  'face-lifting': draftPrice(50, 50),
  presoterapija: draftPrice(50, 50),
  'vacuslim-48': draftPrice(50, 50),
  'sunny-mango': draftPrice(50, 50),
  'relax-masaza': draftPrice(50, 50),
  'masaza-kokosovim-uljem': draftPrice(50, 50),
  maderoterapija: draftPrice(50, 50),
  'cupping-masaza': draftPrice(50, 50),
  'masaza-i-piling': draftPrice(50, 50),
  'depilacija-voskom': draftPrice(50, 50, 'Potkoljenice · prijedlog cijene za jedno područje'),
  'secerna-pasta': draftPrice(50, 50, 'Potkoljenice · prijedlog cijene za jedno područje'),
};
export const treatmentDetails: Record<string, TreatmentDetail[]> = {
  'tretmani-lica': [
    {
      id: 'ciscenje-lica', title: 'Čišćenje lica',
      intro: 'Kad koži treba malo više od umivanja kod kuće. Krenemo od razgovora o tvojoj rutini, a zatim joj posvetimo vrijeme i pažnju.',
      how: 'Kožu očistimo i pripremimo za daljnju njegu. Način čišćenja i završne proizvode biramo prema njezinu stanju na dan dolaska.',
      why: 'Za uklanjanje nakupljenih nečistoća i osjećaj svježine, osobito kada je koža gruba na dodir ili djeluje umorno.',
      forWhom: 'Za tebe ako primjećuješ začepljene pore ili želiš ponovno uvesti redovitu njegu. Ne moraš unaprijed znati koji ti tretman odgovara.',
      image: '/images/treatments/ciscenje-lica.jpg', price: null,
    },
    {
      id: 'ultrazvucno-ciscenje', title: 'Ultrazvučno čišćenje lica',
      intro: 'Precizna njega za one dane kada koži želiš pružiti temeljitije čišćenje.',
      how: 'Na pripremljenoj koži radimo ultrazvučnom špatulom, a zatim nanosimo njegu odabranu za tvoj tip kože.',
      why: 'Bira se za površinske nečistoće i odumrle stanice koje mogu ostaviti dojam neujednačene teksture.',
      forWhom: 'Za kožu kojoj treba čišćenje i glađi osjećaj pod prstima. Na dolasku provjerimo odgovara li ti ova metoda.',
      image: '/images/hydrafacial.jpg', price: null,
    },
    {
      id: 'hydrafacial', title: 'HydraFacial',
      intro: 'Čišćenje i hidratacija u jednom dolasku. Dobar izbor kad želiš posvetiti pažnju i porama i osjećaju zatezanja kože.',
      how: 'Hidradermoabrazija spaja čišćenje, eksfolijaciju i hidrataciju uz vakuumski nastavak. Završnu njegu prilagodimo tvojoj koži.',
      why: 'Zato što koža može istodobno imati nečistoće i trebati vlagu. Ovaj tretman povezuje oba koraka njege.',
      forWhom: 'Za kožu bez sjaja, s vidljivim porama ili osjećajem dehidracije. Ako je trenutačno osjetljiva, prvo dogovaramo što joj odgovara.',
      image: '/images/hydrafacial.jpg', imagePosition: '55% center', price: null,
    },
    {
      id: 'kemijski-piling', title: 'Dr. Lacto Peel Beta',
      intro: 'Kemijski piling koji biramo prema stanju kože, a ne prema tome koliko intenzivan tretman može biti.',
      how: 'Na očišćenu kožu nanosimo piling s kombinacijom glikolne, laktične, laktobionske i salicilne kiseline. Primjenu i njegu nakon tretmana dogovaramo individualno.',
      why: 'Za njegu neujednačene teksture i tena te kože sklone nepravilnostima.',
      forWhom: 'Prvenstveno za masnu i problematičnu kožu. Prije dolaska reci nam koristiš li aktivne sastojke i jesi li nedavno radila druge tretmane.',
      image: '/images/treatments/lacto-peel.jpg', price: null,
    },
    {
      id: 'radiofrekvencija', title: 'Radiofrekvencija lica',
      intro: 'Tretman za njegu kože kojoj želiš posvetiti više pažnje kada primijetiš promjene u čvrstoći.',
      how: 'Radiofrekvencijskim nastavkom prelazimo preko odabranih područja lica. Tijekom rada provjeravamo kako ti odgovara osjećaj topline.',
      why: 'Bira se kada je cilj njega tonusa i punijeg, odmornijeg izgleda kože.',
      forWhom: 'Za tebe ako te više od čišćenja zanima njega čvrstoće kože. Prikladnost tretmana provjeravamo prije početka.',
      image: '/images/hydrafacial.jpg', price: null,
    },
    {
      id: 'tretman-kisikom', title: 'Tretman kisikom',
      intro: 'Malo dodatne njege kada koža izgleda umorno i nedostaje joj svježine.',
      how: 'Na očišćenoj koži koristimo aparaturni nastavak za tretman kisikom i odabrane preparate za njegu.',
      why: 'Za osjećaj njegovane kože i svježiji izgled, uz naglasak na hidrataciji.',
      forWhom: 'Za kožu bez sjaja i za tebe ako tražiš tretman usmjeren na vlagu i ugodu.',
      image: '/images/hero-face.jpg', price: null,
    },
    {
      id: 'microneedling', title: 'Microneedling',
      intro: 'Ciljana njega teksture kože. Prije nego krenemo, razgovaramo o tome što želiš postići i kakvu njegu već koristiš.',
      how: 'Uređajem sa sitnim iglicama obrađujemo odabrana područja. Intenzitet, preparate i njegu nakon dolaska prilagođavamo tvojoj koži.',
      why: 'Bira se zbog neujednačene teksture, sitnih linija i vidljivih tragova nakon nepravilnosti.',
      forWhom: 'Za tebe ako želiš raditi na kvaliteti i izgledu kože kroz promišljenu njegu. Prije rezervacije provjeravamo je li sada pravi trenutak za ovaj tretman.',
      image: '/images/treatments/microneedling.jpg', note: 'O pripremi i njezi nakon tretmana razgovaramo prije termina.', price: null,
    },
    {
      id: 'exo-lift', title: 'EXO-LIFT · njega egzosomima',
      intro: 'Njega s naglaskom na zreliju kožu i trenutke kada joj uobičajena rutina više nije dovoljna.',
      how: 'U tretman uključujemo EXO-LIFT njegu i Double Infinity Exosome Shot. Odabir koraka ovisi o tvojoj koži i njezinim potrebama.',
      why: 'Kada želiš usmjeriti njegu na tonus, vlagu i njegovan izgled kože.',
      forWhom: 'Za tebe ako primjećuješ promjene u teksturi ili čvrstoći i želiš pažljivo odabranu njegu. Nije potrebno unaprijed znati koji preparat tražiš.',
      image: '/images/piling.jpg', price: null,
    },
    {
      id: 'vitamin-c', title: 'Vitamin C Expert',
      intro: 'Za dane kada licu nedostaje svježine. Njega vitaminom C uz masažu i vrijeme u kojem ne moraš nikamo žuriti.',
      how: 'Tretman uključuje enzimatski piling, masažu Glow maskom, Vitamin C Super Shot i završnu kremu Vitamin C Expert.',
      why: 'Da koži pružiš hidrataciju i njegu usmjerenu na blistaviji, ujednačeniji izgled.',
      forWhom: 'Za kožu koja djeluje umorno ili dehidrirano i za tebe ako uz njegu voliš i masažu lica.',
      image: '/images/piling.jpg', price: null,
    },
    {
      id: 'face-lifting', title: 'Face lifting masaža',
      intro: 'Masaža lica vakuumskim čašicama. Miran ritam, precizni pokreti i pažnja posvećena konturama lica.',
      how: 'Malim vakuumskim čašicama radimo masažu lica, uz njegu koja omogućuje ugodno klizanje po koži.',
      why: 'Za opuštanje i njegu svježijeg izgleda lica, bez žurbe i uz pritisak prilagođen tvojoj ugodi.',
      forWhom: 'Za tebe ako voliš masažu lica i želiš njegu usmjerenu na njegov tonus. Prije početka provjeravamo odgovara li koži vakuumska tehnika.',
      image: '/images/hero-face.jpg', price: null,
    },
  ],
  'tretmani-tijela': [
    {
      id: 'presoterapija', title: 'Presoterapija',
      intro: 'Predah za noge nakon dana provedenog na nogama ili za stolom.',
      how: 'Tijekom tretmana odmaraš u nastavcima koji se ritmično pune zrakom i stvaraju izmjeničan pritisak. Riječ je o aparaturnoj limfnoj drenaži.',
      why: 'Bira se za osjećaj lakoće i kao dio njege tijela kada ti noge djeluju teške.',
      forWhom: 'Za tebe ako tražiš aparaturni tretman uz koji možeš mirno odmoriti. Prije prvog dolaska provjerimo odgovara li ti ovakav pritisak.',
      image: '/images/tijelo.jpg', price: null,
    },
    {
      id: 'vacuslim-48', title: 'Vacuslim 48',
      intro: 'Tretman njege i oblikovanja tijela koji biramo prema području kojem želiš posvetiti pažnju.',
      how: 'Nanosimo preparate iz Vacuslim 48 protokola i koristimo pripadajuću opremu. Prije početka objasnimo ti svaki korak.',
      why: 'Kao dio redovite njege izgleda i tonusa kože tijela. Plan dolazaka dogovaramo prema tvojim željama.',
      forWhom: 'Za tebe ako želiš ciljanu njegu određenih područja tijela, uz realna očekivanja i individualan dogovor.',
      image: '/images/tijelo.jpg', imagePosition: '65% center', price: null,
    },
    {
      id: 'sunny-mango', title: 'Sunny Mango piling tijela',
      intro: 'Miris manga i koža koju poželiš dodirnuti. Jednostavan način da redovitoj njezi dodaš malo vremena za sebe.',
      how: 'Sunny Mango piling nanosimo masažnim pokretima, uklanjamo ga i završavamo njegom kože.',
      why: 'Za uklanjanje površinskih odumrlih stanica i mekši, glađi osjećaj kože.',
      forWhom: 'Za kožu koja je gruba na dodir ili za tebe ako voliš mirisne rituale njege tijela.',
      image: '/images/piling.jpg', price: null,
    },
  ],
  masaze: [
    {
      id: 'relax-masaza', title: 'Opuštajuća masaža',
      intro: 'Ne moraš čekati da se umor nakupi. Ponekad je dovoljno odvojiti vrijeme i prepustiti se mirnom ritmu masaže.',
      how: 'Ručnom masažom prolazimo kroz dogovorena područja. Pritisak prilagođavamo tebi, a tijekom tretmana slobodno reci što ti odgovara.',
      why: 'Za odmor, opuštanje i ugodan predah od svakodnevnog tempa.',
      forWhom: 'Za tebe ako želiš usporiti, ako ti nedostaje vremena za sebe ili jednostavno voliš dobru masažu.',
      image: '/images/masaza.jpg', price: null,
    },
    {
      id: 'masaza-kokosovim-uljem', title: 'Masaža kokosovim uljem',
      intro: 'Opuštajuća masaža s mirisom koji podsjeća na ljeto. Poznati ritual, uz malo drugačiji osjećaj na koži.',
      how: 'Za masažu koristimo kokosovo ulje, uz ritam i pritisak koje prilagodimo tvojoj ugodi.',
      why: 'Ako uz opuštanje voliš bogatiju njegu kože i blagi miris masažnog ulja.',
      forWhom: 'Za ljubiteljice masaže uljem. Ako si osjetljiva na sastojke ili mirise, spomeni nam to pri rezervaciji.',
      image: '/images/masaza.jpg', imagePosition: '70% center', price: null,
    },
    {
      id: 'maderoterapija', title: 'Maderoterapija',
      intro: 'Anticelulitna masaža drvenim valjcima i rolerima, usmjerena na područja koja zajedno odaberemo.',
      how: 'Različitim drvenim nastavcima izvodimo ponavljajuće masažne pokrete. Intenzitet prilagođavamo području i tvojoj osjetljivosti.',
      why: 'Bira se kao dio redovite njege izgleda kože i masaže tijela.',
      forWhom: 'Za tebe ako želiš ciljanu anticelulitnu njegu i odgovara ti intenzivnija tehnika masaže.',
      image: '/images/tijelo.jpg', price: null,
    },
    {
      id: 'cupping-masaza', title: 'Cupping masaža tijela',
      intro: 'Drugačiji osjećaj masaže, uz silikonske vakuumske čašice i pažljivo odmjerene pokrete.',
      how: 'Čašicama stvaramo vakuum i prelazimo preko odabranih područja tijela. Jačinu prilagođavamo tvojoj koži i ugodi.',
      why: 'Kao dodatak njezi izgleda kože tijela, osobito kada želiš isprobati masažu drukčiju od klasične ručne tehnike.',
      forWhom: 'Za tebe ako te zanima vakuumska masaža u sklopu njege tijela. Prije početka razgovaramo o osjetljivosti kože.',
      image: '/images/tijelo.jpg', price: null,
    },
    {
      id: 'masaza-i-piling', title: 'Ritual masaže i pilinga',
      intro: 'Kad ne želiš birati između njege kože i odmora. Piling i masaža povezani u jedan miran dolazak.',
      how: 'Najprije radimo piling tijela, a zatim nastavljamo opuštajućom masažom. Kombinaciju dogovaramo pri rezervaciji.',
      why: 'Za glađi osjećaj kože i dovoljno vremena da se nakon pilinga zaista opustiš.',
      forWhom: 'Za tebe ako želiš dulji ritual njege ili si odlučila pokloniti sebi malo više vremena.',
      image: '/images/masaza.jpg', price: null,
    },
  ],
  depilacije: [
    {
      id: 'depilacija-voskom', title: 'Depilacija voskom',
      intro: 'Glatka koža uz pažljiv rad i prostor da kažeš ako ti treba kratka stanka.',
      how: 'Na pripremljenu kožu nanosimo vosak i uklanjamo dlačice iz korijena. Tretman završavamo njegom depiliranog područja.',
      why: 'Kad želiš uklanjanje dlačica iz korijena kao alternativu svakodnevnom brijanju.',
      forWhom: 'Za tebe ako ti odgovara depilacija voskom. Pri rezervaciji navedi područje i eventualnu osjetljivost kože.',
      image: '/images/depilacija.jpg', note: 'Cijena i trajanje ovise o odabranom području depilacije.', price: null,
    },
    {
      id: 'secerna-pasta', title: 'Depilacija šećernom pastom',
      intro: 'Jednostavan sastav i precizan rad. Opcija koju vrijedi razmotriti ako tražiš drugačiji pristup depilaciji.',
      how: 'Šećernom pastom uklanjamo dlačice iz korijena, radeći postupno po odabranom području. Nakon toga njegujemo kožu.',
      why: 'Za glatku kožu uz metodu koja se često bira kada je važna nježnost postupka.',
      forWhom: 'Za tebe ako preferiraš šećernu pastu ili želiš razgovarati o depilaciji osjetljive kože. Zajedno provjerimo odgovara li ti.',
      image: '/images/depilacija.jpg', imagePosition: '65% center', note: 'Pri rezervaciji navedi područje koje želiš depilirati.', price: null,
    },
  ],
};

for (const treatments of Object.values(treatmentDetails)) {
  for (const treatment of treatments) treatment.price = proposedPrices[treatment.id] ?? null;
}
