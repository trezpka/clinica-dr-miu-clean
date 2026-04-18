import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://clinicadrmiu.ro'),
  title:
    'Implant dentar Buzău | Implantologie și chirurgie dento-alveolară | Clinica Dr. Miu',
  description:
    'Clinica Dr. Miu din Buzău oferă tratamente de implant dentar, implantologie, sinus lift, adiție osoasă, All-on-X și chirurgie dento-alveolară, pe baza evaluării clinice, CBCT și planificării digitale.',
  keywords: [
    'implant dentar Buzău',
    'implantologie Buzău',
    'sinus lift Buzău',
    'adiție osoasă Buzău',
    'All-on-X Buzău',
    'chirurgie dento-alveolară Buzău',
    'clinică stomatologică Buzău',
    'implanturi dentare Buzău',
    'reabilitare orală Buzău',
    'Clinica Dr. Miu',
  ],
  alternates: {
    canonical: 'https://clinicadrmiu.ro',
  },
  openGraph: {
    title:
      'Implant dentar Buzău | Implantologie și chirurgie | Clinica Dr. Miu',
    description:
      'Evaluare completă, CBCT, scanare digitală și plan de tratament personalizat pentru implant dentar și reabilitări complexe în Buzău.',
    url: 'https://clinicadrmiu.ro',
    siteName: 'Clinica Dr. Miu',
    locale: 'ro_RO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    title: 'Implant dentar Buzău',
    text: 'Înlocuirea unui dinte lipsă printr-o soluție fixă, stabilă și estetică, planificată în funcție de situația clinică reală și de volumul osos disponibil.',
  },
  {
    title: 'Implantologie Buzău',
    text: 'Tratament planificat pe baza examinării clinice, a investigațiilor imagistice și a obiectivelor funcționale și estetice ale pacientului.',
  },
  {
    title: 'Sinus lift Buzău',
    text: 'Procedură indicată în anumite cazuri pentru creșterea volumului osos la nivelul maxilarului superior, atunci când este necesară inserarea implanturilor.',
  },
  {
    title: 'Adiție osoasă Buzău',
    text: 'Reconstrucție osoasă utilizată în cazurile în care suportul osos este insuficient pentru tratamentul implantar sau pentru stabilitatea pe termen lung.',
  },
  {
    title: 'All-on-X Buzău',
    text: 'Soluție fixă pe implanturi pentru pacienții cu edentații extinse sau lucrări compromise, stabilită numai după o evaluare atentă și un plan corect.',
  },
  {
    title: 'Chirurgie dento-alveolară Buzău',
    text: 'Extracții complexe și alte proceduri chirurgicale necesare în cadrul unui plan de reabilitare orală complet, realizate cu accent pe precizie și confort.',
  },
];

const faqItems = [
  {
    question: 'Când este recomandat un implant dentar?',
    answer:
      'Un implant dentar este recomandat atunci când lipsește unul sau mai mulți dinți, iar situația clinică permite o soluție fixă și predictibilă. Indicația corectă se stabilește după consultație, examinare clinică și investigații imagistice.',
  },
  {
    question: 'Ce presupune consultația pentru implant dentar la Clinica Dr. Miu?',
    answer:
      'Consultația include evaluarea clinică, analiza situației dentare și parodontale, discutarea istoricului medical și, în funcție de caz, recomandarea investigațiilor imagistice precum CBCT și scanarea digitală. Scopul este stabilirea unui plan de tratament clar și realist.',
  },
  {
    question: 'Este potrivit tratamentul All-on-X pentru orice pacient?',
    answer:
      'Nu. All-on-X nu este o soluție universală. Indicația depinde de volumul osos disponibil, statusul gingival, tipul de mușcătură, igiena orală și obiectivele funcționale și estetice ale pacientului.',
  },
  {
    question: 'Când este nevoie de sinus lift sau adiție osoasă?',
    answer:
      'Sinus lift-ul sau adiția osoasă pot fi necesare atunci când osul existent nu oferă suport suficient pentru inserarea corectă și stabilă a implanturilor dentare. Necesitatea acestor proceduri se stabilește doar după investigații și planificare.',
  },
  {
    question: 'Cum aleg cea mai bună soluție pentru un caz complex?',
    answer:
      'În cazurile complexe, alegerea tratamentului corect se face în funcție de examinarea clinică, imaginile CBCT, situația lucrărilor existente, igiena, ocluzia și așteptările pacientului. De aceea, fiecare caz trebuie analizat individual, nu tratat după un model standard.',
  },
];

const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Clinica Dr. Miu',
  url: 'https://clinicadrmiu.ro',
  telephone: '+40 750 709 716',
  email: 'contact@clinicadrmiu.ro',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Str. Penteleu 16',
    addressLocality: 'Buzău',
    addressCountry: 'RO',
  },
  areaServed: 'Buzău',
  medicalSpecialty: ['Dentistry', 'Oral Surgery'],
  availableService: [
    { '@type': 'MedicalProcedure', name: 'Implant dentar' },
    { '@type': 'MedicalProcedure', name: 'Implantologie' },
    { '@type': 'MedicalProcedure', name: 'Sinus lift' },
    { '@type': 'MedicalProcedure', name: 'Adiție osoasă' },
    { '@type': 'MedicalProcedure', name: 'All-on-X' },
    { '@type': 'MedicalProcedure', name: 'Chirurgie dento-alveolară' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const sectionStyle: React.CSSProperties = {
  padding: '72px 20px',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1180px',
  margin: '0 auto',
};

const cardStyle: React.CSSProperties = {
  background: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '18px',
  padding: '24px',
  boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
};

export default function HomePage() {
  return (
    <main style={{ background: '#f8fafc', color: '#0f172a' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        style={{
          padding: '88px 20px 72px',
          background:
            'linear-gradient(180deg, #eff6ff 0%, #f8fafc 45%, #ffffff 100%)',
        }}
      >
        <div style={containerStyle}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              alignItems: 'center',
            }}
          >
            <div>
              <p
                style={{
                  margin: '0 0 16px',
                  color: '#1d4ed8',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}
              >
                Clinica Dr. Miu · Buzău
              </p>

              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                  lineHeight: 1.1,
                  margin: '0 0 20px',
                  fontWeight: 800,
                }}
              >
                Implant dentar în Buzău, cu evaluare completă și planificare
                atentă pentru rezultate funcționale și estetice
              </h1>

              <p
                style={{
                  fontSize: '1.12rem',
                  lineHeight: 1.8,
                  margin: '0 0 28px',
                  color: '#334155',
                  maxWidth: '760px',
                }}
              >
                La Clinica Dr. Miu, tratamentele de{' '}
                <strong>implant dentar în Buzău</strong>,{' '}
                <strong>implantologie</strong> și{' '}
                <strong>chirurgie dento-alveolară</strong> sunt stabilite pe
                baza unei examinări clinice complete, a investigațiilor
                imagistice și a unei planificări orientate către funcție,
                estetică și predictibilitate. Fie că este vorba despre un singur
                dinte lipsă sau despre o reabilitare extinsă, fiecare caz este
                analizat individual.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '14px',
                  marginBottom: '28px',
                }}
              >
                <a
                  href="tel:+40750709716"
                  style={{
                    background: '#1d4ed8',
                    color: '#ffffff',
                    padding: '14px 22px',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    fontWeight: 700,
                  }}
                >
                  Sună acum
                </a>

                <a
                  href="https://wa.me/40750709716"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: '#ffffff',
                    color: '#0f172a',
                    padding: '14px 22px',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    border: '1px solid #cbd5e1',
                  }}
                >
                  Scrie pe WhatsApp
                </a>

                <a
                  href="#programare"
                  style={{
                    background: '#ffffff',
                    color: '#0f172a',
                    padding: '14px 22px',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    border: '1px solid #cbd5e1',
                  }}
                >
                  Programează o consultație
                </a>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '12px',
                }}
              >
                {[
                  'Evaluare clinică și imagistică',
                  'CBCT și scanare digitală',
                  'Plan de tratament personalizat',
                  'Cazuri simple și complexe',
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '14px',
                      padding: '14px 16px',
                      fontWeight: 600,
                      color: '#1e293b',
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div style={cardStyle}>
              <p
                style={{
                  marginTop: 0,
                  marginBottom: '12px',
                  color: '#1d4ed8',
                  fontWeight: 700,
                }}
              >
                De ce aleg pacienții Clinica Dr. Miu
              </p>

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: '18px',
                  fontSize: '1.8rem',
                  lineHeight: 1.25,
                }}
              >
                Tratament corect, nu doar o intervenție punctuală
              </h2>

              <p style={{ color: '#334155', lineHeight: 1.8 }}>
                În implantologie și chirurgie, decizia corectă începe cu o
                analiză atentă. Scopul nu este doar inserarea unui implant, ci
                alegerea unei soluții potrivite pentru situația clinică reală a
                pacientului, astfel încât rezultatul să fie stabil, funcțional
                și armonios.
              </p>

              <ul
                style={{
                  paddingLeft: '20px',
                  color: '#334155',
                  lineHeight: 1.9,
                  marginTop: '18px',
                  marginBottom: 0,
                }}
              >
                <li>Accent pe diagnostic și planificare predictibilă</li>
                <li>
                  Abordare personalizată pentru implant dentar și reabilitări
                  extinse
                </li>
                <li>Integrare între estetică, funcție și stabilitate</li>
                <li>
                  Soluții adaptate inclusiv cazurilor care necesită sinus lift
                  sau adiție osoasă
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="despre" style={sectionStyle}>
        <div style={containerStyle}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              alignItems: 'start',
            }}
          >
            <div>
              <p
                style={{
                  color: '#1d4ed8',
                  fontWeight: 700,
                  margin: '0 0 12px',
                }}
              >
                Implantologie și chirurgie dento-alveolară în Buzău
              </p>

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: '18px',
                  fontSize: '2rem',
                  lineHeight: 1.2,
                }}
              >
                O abordare bazată pe evaluare, tehnologie și decizii corecte
              </h2>

              <p style={{ color: '#334155', lineHeight: 1.9, marginBottom: 16 }}>
                Clinica Dr. Miu este orientată către tratamente de{' '}
                <strong>implantologie în Buzău</strong> și{' '}
                <strong>chirurgie dento-alveolară</strong>, cu accent pe
                analiza atentă a fiecărui caz și pe stabilirea unei soluții
                potrivite pe termen lung. Înainte de tratament, sunt luate în
                calcul contextul clinic, investigațiile imagistice, volumul osos
                disponibil, statusul gingival și obiectivele pacientului.
              </p>

              <p style={{ color: '#334155', lineHeight: 1.9, margin: 0 }}>
                Pentru pacient, acest lucru înseamnă mai multă claritate, mai
                multă siguranță în decizie și un plan realist, construit în
                funcție de nevoile reale ale cazului, nu după un model general.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '16px',
              }}
            >
              <div style={cardStyle}>
                <h3 style={{ marginTop: 0, marginBottom: '10px' }}>
                  Evaluare completă
                </h3>
                <p style={{ margin: 0, color: '#334155', lineHeight: 1.8 }}>
                  Examinare clinică, analiză imagistică și integrarea
                  informațiilor necesare pentru un plan de tratament corect.
                </p>
              </div>

              <div style={cardStyle}>
                <h3 style={{ marginTop: 0, marginBottom: '10px' }}>
                  Tehnologie digitală
                </h3>
                <p style={{ margin: 0, color: '#334155', lineHeight: 1.8 }}>
                  CBCT și scanare digitală pentru cazurile în care precizia și
                  predictibilitatea sunt esențiale.
                </p>
              </div>

              <div style={cardStyle}>
                <h3 style={{ marginTop: 0, marginBottom: '10px' }}>
                  Soluții adaptate cazului
                </h3>
                <p style={{ margin: 0, color: '#334155', lineHeight: 1.8 }}>
                  De la un implant unic până la reabilitări extinse de tip{' '}
                  <strong>All-on-X în Buzău</strong>, recomandarea se face
                  individual, în funcție de particularitățile fiecărui pacient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicii"
        style={{
          ...sectionStyle,
          background: '#ffffff',
        }}
      >
        <div style={containerStyle}>
          <p
            style={{
              color: '#1d4ed8',
              fontWeight: 700,
              margin: '0 0 12px',
            }}
          >
            Servicii
          </p>

          <h2
            style={{
              marginTop: 0,
              marginBottom: '18px',
              fontSize: '2rem',
              lineHeight: 1.2,
            }}
          >
            Tratemente orientate spre stabilitate, funcție și estetică
          </h2>

          <p
            style={{
              maxWidth: '860px',
              color: '#334155',
              lineHeight: 1.9,
              marginTop: 0,
              marginBottom: '34px',
            }}
          >
            Fiecare tratament este ales în funcție de situația clinică reală, de
            obiectivele funcționale și estetice și de condițiile locale existente.
            În funcție de caz, planul de tratament poate include{' '}
            <strong>implant dentar</strong>, proceduri de{' '}
            <strong>sinus lift</strong>, <strong>adiție osoasă</strong>,{' '}
            <strong>All-on-X</strong> sau alte intervenții de{' '}
            <strong>chirurgie dento-alveolară în Buzău</strong>.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {services.map((service) => (
              <article key={service.title} style={cardStyle}>
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: '12px',
                    fontSize: '1.25rem',
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ margin: 0, color: '#334155', lineHeight: 1.85 }}>
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            <div style={cardStyle}>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: '14px',
                  fontSize: '1.8rem',
                  lineHeight: 1.25,
                }}
              >
                Cum decurge evaluarea inițială
              </h2>
              <p style={{ color: '#334155', lineHeight: 1.85, marginTop: 0 }}>
                Înainte de a recomanda un tratament, sunt analizate toate
                elementele importante pentru succesul și predictibilitatea
                rezultatului.
              </p>
              <ol
                style={{
                  paddingLeft: '20px',
                  color: '#334155',
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                <li>Examinare clinică atentă</li>
                <li>Discuție despre istoricul medical și dentar</li>
                <li>Analiză imagistică și, când este necesar, CBCT</li>
                <li>Evaluarea volumului osos și a statusului gingival</li>
                <li>Stabilirea unui plan personalizat de tratament</li>
              </ol>
            </div>

            <div style={cardStyle}>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: '14px',
                  fontSize: '1.8rem',
                  lineHeight: 1.25,
                }}
              >
                Ce este analizat înainte de tratament
              </h2>
              <ul
                style={{
                  paddingLeft: '20px',
                  color: '#334155',
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                <li>Volumul osos disponibil</li>
                <li>Situația protetică existentă</li>
                <li>Statusul gingival și nivelul de igienă</li>
                <li>Funcția masticatorie și ocluzia</li>
                <li>Obiectivele funcționale și estetice ale pacientului</li>
                <li>Necesitatea unor proceduri auxiliare, dacă este cazul</li>
              </ul>
            </div>

            <div style={cardStyle}>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: '14px',
                  fontSize: '1.8rem',
                  lineHeight: 1.25,
                }}
              >
                Pentru cine poate fi potrivit tratamentul
              </h2>
              <p style={{ color: '#334155', lineHeight: 1.85, marginTop: 0 }}>
                Consultația este potrivită pentru pacienții care:
              </p>
              <ul
                style={{
                  paddingLeft: '20px',
                  color: '#334155',
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                <li>au unul sau mai mulți dinți lipsă</li>
                <li>au lucrări vechi compromise</li>
                <li>vor să afle dacă implantul dentar este o opțiune</li>
                <li>au nevoie de o a doua opinie pentru un caz complex</li>
                <li>
                  doresc o soluție fixă pe implanturi după o evaluare corectă
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          background: '#ffffff',
        }}
      >
        <div style={containerStyle}>
          <p
            style={{
              color: '#1d4ed8',
              fontWeight: 700,
              margin: '0 0 12px',
            }}
          >
            Cazuri clinice
          </p>

          <h2
            style={{
              marginTop: 0,
              marginBottom: '16px',
              fontSize: '2rem',
              lineHeight: 1.2,
            }}
          >
            Tratament modern, planificat atent, adaptat fiecărui caz
          </h2>

          <p
            style={{
              color: '#334155',
              lineHeight: 1.9,
              maxWidth: '880px',
              marginTop: 0,
              marginBottom: '28px',
            }}
          >
            În implantologie și chirurgie, fiecare caz are particularitățile lui.
            De aceea, modul de abordare trebuie să țină cont de diagnosticul
            real, de structurile anatomice, de volumul osos disponibil și de
            obiectivele pacientului. De la un implant imediat în zona frontală
            până la reabilitări extinse pe implanturi, tratamentul este ales în
            funcție de ceea ce este corect și predictibil pentru fiecare situație.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            <article style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: '10px' }}>
                Implant dentar imediat după fractură dentară
              </h3>
              <p style={{ margin: 0, color: '#334155', lineHeight: 1.85 }}>
                În anumite cazuri, extracția, inserarea implantului și provizoratul
                pot face parte din același plan terapeutic, atunci când indicația
                este corectă și condițiile clinice permit acest lucru.
              </p>
            </article>

            <article style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: '10px' }}>
                Reabilitare extinsă pe implanturi
              </h3>
              <p style={{ margin: 0, color: '#334155', lineHeight: 1.85 }}>
                Cazurile cu edentații multiple sau lucrări vechi compromise pot
                necesita o abordare complexă, etapizată, cu analiză atentă și
                planificare riguroasă.
              </p>
            </article>

            <article style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: '10px' }}>
                Soluții personalizate pentru cazuri dificile
              </h3>
              <p style={{ margin: 0, color: '#334155', lineHeight: 1.85 }}>
                În unele situații, tratamentul poate include proceduri auxiliare
                precum <strong>sinus lift</strong> sau{' '}
                <strong>adiție osoasă</strong>, pentru a crea condițiile necesare
                unei reabilitări stabile.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" style={sectionStyle}>
        <div style={containerStyle}>
          <p
            style={{
              color: '#1d4ed8',
              fontWeight: 700,
              margin: '0 0 12px',
            }}
          >
            Întrebări frecvente
          </p>

          <h2
            style={{
              marginTop: 0,
              marginBottom: '28px',
              fontSize: '2rem',
              lineHeight: 1.2,
            }}
          >
            Informații utile despre implant dentar și reabilitare orală
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '16px',
            }}
          >
            {faqItems.map((item) => (
              <article key={item.question} style={cardStyle}>
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: '10px',
                    fontSize: '1.18rem',
                    lineHeight: 1.35,
                  }}
                >
                  {item.question}
                </h3>
                <p style={{ margin: 0, color: '#334155', lineHeight: 1.85 }}>
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          background: '#0f172a',
          color: '#ffffff',
        }}
        id="programare"
      >
        <div style={containerStyle}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              alignItems: 'center',
            }}
          >
            <div>
              <p
                style={{
                  color: '#93c5fd',
                  fontWeight: 700,
                  margin: '0 0 12px',
                }}
              >
                Programează o consultație
              </p>

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: '16px',
                  fontSize: '2.1rem',
                  lineHeight: 1.2,
                }}
              >
                Vrei să afli ce soluție este potrivită pentru cazul tău?
              </h2>

              <p
                style={{
                  color: '#cbd5e1',
                  lineHeight: 1.9,
                  marginTop: 0,
                  marginBottom: 0,
                  maxWidth: '760px',
                }}
              >
                Dacă ai nevoie de un <strong>implant dentar în Buzău</strong>,
                de o opinie privind un caz complex sau de o evaluare pentru{' '}
                <strong>All-on-X</strong>, <strong>sinus lift</strong> ori{' '}
                <strong>adiție osoasă</strong>, primul pas este consultația. În
                cadrul acesteia, sunt analizate particularitățile clinice și sunt
                discutate opțiunile de tratament potrivite pentru situația ta.
              </p>
            </div>

            <div
              style={{
                ...cardStyle,
                background: '#ffffff',
                color: '#0f172a',
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: '16px' }}>
                Date de contact
              </h3>

              <p style={{ margin: '0 0 10px', lineHeight: 1.8 }}>
                <strong>Adresă:</strong> Str. Penteleu 16, Buzău
              </p>
              <p style={{ margin: '0 0 10px', lineHeight: 1.8 }}>
                <strong>Telefon:</strong>{' '}
                <a
                  href="tel:+40750709716"
                  style={{ color: '#1d4ed8', textDecoration: 'none' }}
                >
                  0750 709 716
                </a>
              </p>
              <p style={{ margin: '0 0 22px', lineHeight: 1.8 }}>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:contact@clinicadrmiu.ro"
                  style={{ color: '#1d4ed8', textDecoration: 'none' }}
                >
                  contact@clinicadrmiu.ro
                </a>
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <a
                  href="tel:+40750709716"
                  style={{
                    background: '#1d4ed8',
                    color: '#ffffff',
                    padding: '13px 20px',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    fontWeight: 700,
                  }}
                >
                  Sună acum
                </a>

                <a
                  href="https://wa.me/40750709716"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: '#e2e8f0',
                    color: '#0f172a',
                    padding: '13px 20px',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    fontWeight: 700,
                  }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
