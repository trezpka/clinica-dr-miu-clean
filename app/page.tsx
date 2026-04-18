import type { Metadata } from "next";
import Image from "next/image";

const services = [
  {
    title: "Implant dentar Buzău",
    text: "Înlocuirea unui dinte lipsă printr-o soluție fixă, stabilă și estetică, planificată în funcție de situația clinică reală și de volumul osos disponibil.",
  },
  {
    title: "Implantologie Buzău",
    text: "Tratament planificat pe baza examinării clinice, a investigațiilor imagistice și a obiectivelor funcționale și estetice ale pacientului.",
  },
  {
    title: "Sinus lift Buzău",
    text: "Procedură indicată în anumite cazuri pentru creșterea volumului osos la nivelul maxilarului superior, atunci când este necesară inserarea implanturilor.",
  },
  {
    title: "Adiție osoasă Buzău",
    text: "Reconstrucție osoasă utilizată în cazurile în care suportul osos este insuficient pentru tratamentul implantar sau pentru stabilitatea pe termen lung.",
  },
  {
    title: "All-on-X Buzău",
    text: "Soluție fixă pe implanturi pentru pacienții cu edentații extinse sau lucrări compromise, stabilită numai după o evaluare atentă și un plan corect.",
  },
  {
    title: "Chirurgie dento-alveolară Buzău",
    text: "Extracții complexe și alte proceduri chirurgicale necesare în cadrul unui plan de reabilitare orală complet, realizate cu accent pe precizie și confort.",
  },
];

const faqItems = [
  {
    question: "Când este recomandat un implant dentar?",
    answer:
      "Un implant dentar este recomandat atunci când lipsește unul sau mai mulți dinți, iar situația clinică permite o soluție fixă și predictibilă. Indicația corectă se stabilește după consultație, examinare clinică și investigații imagistice.",
  },
  {
    question: "Ce presupune consultația pentru implant dentar la Clinica Dr. Miu?",
    answer:
      "Consultația include evaluarea clinică, analiza situației dentare și parodontale, discutarea istoricului medical și, în funcție de caz, recomandarea investigațiilor imagistice precum CBCT și scanarea digitală. Scopul este stabilirea unui plan de tratament clar și realist.",
  },
  {
    question: "Este potrivit tratamentul All-on-X pentru orice pacient?",
    answer:
      "Nu. All-on-X nu este o soluție universală. Indicația depinde de volumul osos disponibil, statusul gingival, tipul de mușcătură, igiena orală și obiectivele funcționale și estetice ale pacientului.",
  },
  {
    question: "Când este nevoie de sinus lift sau adiție osoasă?",
    answer:
      "Sinus lift-ul sau adiția osoasă pot fi necesare atunci când osul existent nu oferă suport suficient pentru inserarea corectă și stabilă a implanturilor dentare. Necesitatea acestor proceduri se stabilește doar după investigații și planificare.",
  },
  {
    question: "Cum aleg cea mai bună soluție pentru un caz complex?",
    answer:
      "În cazurile complexe, alegerea tratamentului corect se face în funcție de examinarea clinică, imaginile CBCT, situația lucrărilor existente, igiena, ocluzia și așteptările pacientului. De aceea, fiecare caz trebuie analizat individual, nu tratat după un model standard.",
  },
];

const reviews = [
  {
    name: "Codruța Sofia Ioniță",
    text: "Am fost super mulțumită și m-am simțit foarte ok în cabinetul domnului doctor Cosmin Miu! Recomand din tot sufletul, tot personalul este super!",
    treatment: "Pacientă",
  },
  {
    name: "Roxana Clinciu",
    text: "Echipă tânără, super faină și profesionistă. Chiar m-am distrat la extracția uneia masele de minte. Recomand cu drag!",
    treatment: "Extracție molar de minte",
  },
  {
    name: "Andreea",
    text: "Am fost la domnul doctor Miu pentru o extracție de masea de minte. Un doctor foarte empatic, a lucrat cu grijă, delicat. Totul a parcurs bine. Mulțumesc!",
    treatment: "Extracție molar de minte",
  },
  {
    name: "Adrian Chiriță",
    text: "Îl recomand cu mare drag pe dl doctor Cosmin Miu, în urma inserării implanturilor dentare fără durere!",
    treatment: "Implant dentar",
  },
  {
    name: "Manuel Iordache",
    text: "Recomand! Dr. Miu — medic de nota 10 plus!",
    treatment: "Pacient",
  },
  {
    name: "Aura Moise",
    text: "Recomand cu mare drag pe dl dr Cosmin Miu!",
    treatment: "Pacientă",
  },
  {
    name: "Nicoleta Mădălina",
    text: "Am avut o experiență bună! Am apreciat răbdarea și empatia domnului doctor Miu. Recomand cu căldură!",
    treatment: "Pacientă",
  },
  {
    name: "Cornel Dobrescu",
    text: "Am fost la domnul dr. Miu pentru o extracție a unei masele ireparabile. Experiența a fost una extraordinară, domnul doctor este foarte de treabă și datorită profesionalismului totul a fost ok. P.s: chiar nu doare.",
    treatment: "Extracție dentară",
  },
  {
    name: "Ștefan Bogdan",
    text: "Mă declar foarte mulțumit de serviciile oferite! Recomand cu încredere pentru servicii de implant dentar, domnul doctor Miu este TOP! Felicitări și vă mulțumesc încă o dată!",
    treatment: "Implant dentar",
  },
  {
    name: "Nicoleta Ciurea",
    text: "Recomand Domnul Dr Miu Cosmin.",
    treatment: "Pacientă",
  },
];

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Clinica Dr. Miu",
  url: "https://clinicadrmiu.ro",
  telephone: "+40 750 709 716",
  email: "contact@clinicadrmiu.ro",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Penteleu 16",
    addressLocality: "Buzău",
    addressCountry: "RO",
  },
  areaServed: "Buzău",
  medicalSpecialty: ["Dentistry", "Oral Surgery"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: reviews.length,
    bestRating: "5",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewBody: r.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
  })),
  availableService: [
    { "@type": "MedicalProcedure", name: "Implant dentar" },
    { "@type": "MedicalProcedure", name: "Implantologie" },
    { "@type": "MedicalProcedure", name: "Sinus lift" },
    { "@type": "MedicalProcedure", name: "Adiție osoasă" },
    { "@type": "MedicalProcedure", name: "All-on-X" },
    { "@type": "MedicalProcedure", name: "Chirurgie dento-alveolară" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicadrmiu.ro"),
  title:
    "Implant dentar Buzău | Implantologie și chirurgie dento-alveolară | Clinica Dr. Miu",
  description:
    "Clinica Dr. Miu din Buzău oferă tratamente de implant dentar, implantologie, sinus lift, adiție osoasă, All-on-X și chirurgie dento-alveolară. Evaluare completă, CBCT și plan personalizat.",
  alternates: { canonical: "https://clinicadrmiu.ro" },
  openGraph: {
    title: "Implant dentar Buzău | Clinica Dr. Miu",
    description:
      "Evaluare completă, CBCT, scanare digitală și plan de tratament personalizat.",
    url: "https://clinicadrmiu.ro",
    siteName: "Clinica Dr. Miu",
    locale: "ro_RO",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const sectionStyle: React.CSSProperties = { padding: "72px 20px" };
const containerStyle: React.CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
};
const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "18px",
  padding: "24px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
};

const starSvg = (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="#f59e0b">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function HomePage() {
  return (
    <main style={{ background: "#f8fafc", color: "#0f172a" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── STILURI SLIDER CSS ── */}
      <style>{`
        .reviews-track {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          gap: 20px;
          padding-bottom: 16px;
          scrollbar-width: none;
        }
        .reviews-track::-webkit-scrollbar { display: none; }
        .review-slide {
          flex: 0 0 calc(33.333% - 14px);
          scroll-snap-align: start;
          min-width: 280px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (max-width: 900px) {
          .review-slide { flex: 0 0 calc(50% - 10px); }
        }
        @media (max-width: 600px) {
          .review-slide { flex: 0 0 90%; }
        }
        .scroll-hint {
          text-align: center;
          color: #94a3b8;
          font-size: 0.82rem;
          margin-top: 12px;
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        style={{
          padding: "88px 20px 72px",
          background:
            "linear-gradient(180deg, #eff6ff 0%, #f8fafc 45%, #ffffff 100%)",
        }}
      >
        <div style={containerStyle}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 16px",
                  color: "#1d4ed8",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                Clinica Dr. Miu · Buzău
              </p>

              <h1
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  lineHeight: 1.1,
                  margin: "0 0 20px",
                  fontWeight: 800,
                }}
              >
                Implant dentar în Buzău — fără durere, cu planificare atentă și
                rezultate stabile
              </h1>

              <p
                style={{
                  fontSize: "1.12rem",
                  lineHeight: 1.8,
                  margin: "0 0 20px",
                  color: "#334155",
                  maxWidth: "760px",
                }}
              >
                La Clinica Dr. Miu, tratamentele de{" "}
                <strong>implant dentar în Buzău</strong>,{" "}
                <strong>implantologie</strong> și{" "}
                <strong>chirurgie dento-alveolară</strong> sunt stabilite pe
                baza unei examinări clinice complete, a investigațiilor
                imagistice și a unei planificări orientate către funcție,
                estetică și predictibilitate.
              </p>

              {/* Social proof bar */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginBottom: "28px",
                  padding: "16px 20px",
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                }}
              >
                {[
                  { value: "500+", label: "implanturi inserate" },
                  { value: "10 / 10", label: "recenzii pacienți" },
                  { value: "12+", label: "ani experiență" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{ textAlign: "center", flex: "1 1 100px" }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        color: "#1d4ed8",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.8rem", color: "#64748b" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                  marginBottom: "28px",
                }}
              >
                <a
                  href="tel:+40750709716"
                  style={{
                    background: "#1d4ed8",
                    color: "#ffffff",
                    padding: "14px 22px",
                    borderRadius: "999px",
                    textDecoration: "none",
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
                    background: "#ffffff",
                    color: "#0f172a",
                    padding: "14px 22px",
                    borderRadius: "999px",
                    textDecoration: "none",
                    fontWeight: 700,
                    border: "1px solid #cbd5e1",
                  }}
                >
                  Scrie pe WhatsApp
                </a>
                <a
                  href="#programare"
                  style={{
                    background: "#ffffff",
                    color: "#0f172a",
                    padding: "14px 22px",
                    borderRadius: "999px",
                    textDecoration: "none",
                    fontWeight: 700,
                    border: "1px solid #cbd5e1",
                  }}
                >
                  Programează o consultație
                </a>
              </div>
            </div>

            <div style={cardStyle}>
              <p
                style={{
                  marginTop: 0,
                  marginBottom: "12px",
                  color: "#1d4ed8",
                  fontWeight: 700,
                }}
              >
                De ce aleg pacienții Clinica Dr. Miu
              </p>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "18px",
                  fontSize: "1.8rem",
                  lineHeight: 1.25,
                }}
              >
                Tratament corect, nu doar o intervenție punctuală
              </h2>
              <p style={{ color: "#334155", lineHeight: 1.8 }}>
                În implantologie și chirurgie, decizia corectă începe cu o
                analiză atentă. Scopul nu este doar inserarea unui implant, ci
                alegerea unei soluții potrivite pentru situația clinică reală a
                pacientului.
              </p>
              <ul
                style={{
                  paddingLeft: "20px",
                  color: "#334155",
                  lineHeight: 1.9,
                  marginTop: "18px",
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

      {/* ── DR. MIU ── */}
      <section
        id="despre-medic"
        style={{ padding: "72px 20px", background: "#ffffff" }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              aspectRatio: "3/4",
              maxWidth: "460px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <Image
              src="/dr-miu-portrait-v2.jpg"
              alt="Dr. Cosmin Miu — medic specialist implantologie și chirurgie dento-alveolară Buzău"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
              sizes="(max-width: 768px) 100vw, 460px"
            />
          </div>

          <div>
            <p
              style={{
                color: "#1d4ed8",
                fontWeight: 700,
                margin: "0 0 12px",
                letterSpacing: "0.02em",
              }}
            >
              Medicul tău specialist
            </p>
            <h2
              style={{
                marginTop: 0,
                marginBottom: "20px",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                lineHeight: 1.15,
                color: "#0f172a",
              }}
            >
              Dr. Cosmin Miu
              <br />
              <span
                style={{
                  color: "#475569",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                }}
              >
                Implantologie · Chirurgie dento-alveolară
              </span>
            </h2>

            <p
              style={{
                color: "#334155",
                lineHeight: 1.9,
                marginBottom: "16px",
                fontSize: "1.05rem",
              }}
            >
              Absolvent al{" "}
              <strong>Facultății de Medicină Dentară Carol Davila</strong>{" "}
              (2012), medic specialist în{" "}
              <strong>chirurgie dento-alveolară</strong> din 2017, cu
              activitate concentrată exclusiv pe{" "}
              <strong>implantologie și chirurgie orală</strong>.
            </p>

            <p
              style={{
                color: "#334155",
                lineHeight: 1.9,
                marginBottom: "28px",
                fontSize: "1.05rem",
              }}
            >
              Particip frecvent la cursuri de perfecționare în țară și în
              străinătate, deoarece cred că medicina bună înseamnă actualizare
              continuă și dorința de a învăța permanent tehnici noi.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              {[
                "Absolvent Carol Davila · 2012",
                "Medic specialist din 2017",
                "Formare continuă internațională",
                "500+ implanturi inserate",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    fontWeight: 600,
                    color: "#1e40af",
                    fontSize: "0.88rem",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a
                href="tel:+40750709716"
                style={{
                  background: "#1d4ed8",
                  color: "#ffffff",
                  padding: "13px 22px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Programează o consultație
              </a>
              <a
                href="https://wa.me/40750709716"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#f1f5f9",
                  color: "#0f172a",
                  padding: "13px 22px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENZII SLIDER CSS ── */}
      <section
        style={{
          ...sectionStyle,
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div style={containerStyle}>
          <p
            style={{ color: "#1d4ed8", fontWeight: 700, margin: "0 0 12px" }}
          >
            Ce spun pacienții
          </p>
          <h2
            style={{
              marginTop: 0,
              marginBottom: "8px",
              fontSize: "2rem",
              lineHeight: 1.2,
            }}
          >
            Experiențe reale, în cuvintele lor
          </h2>
          <p
            style={{
              color: "#64748b",
              marginTop: 0,
              marginBottom: "36px",
              fontSize: "1rem",
            }}
          >
            {reviews.length} recenzii autentice · Nota medie 5 / 5
          </p>

          {/* Slider scroll orizontal CSS pur */}
          <div className="reviews-track">
            {reviews.map((review) => (
              <div key={review.name} className="review-slide">
                <div>
                  <div
                    style={{ display: "flex", gap: "4px", marginBottom: "14px" }}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{starSvg}</span>
                    ))}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      color: "#334155",
                      lineHeight: 1.8,
                      fontSize: "0.97rem",
                    }}
                  >
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div
                  style={{
                    marginTop: "18px",
                    paddingTop: "14px",
                    borderTop: "1px solid #f1f5f9",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 700,
                        color: "#0f172a",
                        fontSize: "0.9rem",
                      }}
                    >
                      {review.name}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        color: "#94a3b8",
                        fontSize: "0.8rem",
                      }}
                    >
                      {review.treatment}
                    </p>
                  </div>
                  <div
                    style={{
                      background: "#f1f5f9",
                      borderRadius: "8px",
                      padding: "4px 10px",
                      fontSize: "0.75rem",
                      color: "#64748b",
                      fontWeight: 600,
                    }}
                  >
                    Google
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="scroll-hint">← Glisează pentru mai multe recenzii →</p>
        </div>
      </section>

      {/* ── ÎNAINTE ȘI DUPĂ ── */}
      <section style={{ ...sectionStyle, background: "#ffffff" }}>
        <div style={containerStyle}>
          <p
            style={{ color: "#1d4ed8", fontWeight: 700, margin: "0 0 12px" }}
          >
            Cazuri clinice reale
          </p>
          <h2
            style={{
              marginTop: 0,
              marginBottom: "12px",
              fontSize: "2rem",
              lineHeight: 1.2,
            }}
          >
            Înainte și după — reabilitare orală complexă
          </h2>
          <p
            style={{
              color: "#334155",
              lineHeight: 1.9,
              maxWidth: "860px",
              marginTop: 0,
              marginBottom: "36px",
            }}
          >
            Cazul de mai jos ilustrează o reabilitare orală complexă realizată
            la Clinica Dr. Miu. Planificarea atentă, evaluarea imagistică și
            alegerea corectă a soluției terapeutice au permis obținerea unui
            rezultat funcțional și estetic stabil.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Înainte */}
            <div style={cardStyle}>
              <div
                style={{
                  display: "inline-block",
                  background: "#fee2e2",
                  color: "#b91c1c",
                  borderRadius: "8px",
                  padding: "4px 14px",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  marginBottom: "14px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Înainte
              </div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "#f1f5f9",
                }}
              >
                <Image
                  src="/caz-maxilar-2.jpg"
                  alt="Stare inițială înainte de reabilitare orală — Clinica Dr. Miu Buzău"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
              <p
                style={{
                  margin: "14px 0 0",
                  color: "#64748b",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                Stare inițială: lucrări vechi compromise, uzură avansată,
                necesitate de reabilitare completă.
              </p>
            </div>

            {/* După */}
            <div style={cardStyle}>
              <div
                style={{
                  display: "inline-block",
                  background: "#dcfce7",
                  color: "#15803d",
                  borderRadius: "8px",
                  padding: "4px 14px",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  marginBottom: "14px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                După
              </div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "#f1f5f9",
                }}
              >
                <Image
                  src="/caz-maxilar-1.jpg"
                  alt="Rezultat după reabilitare orală — Clinica Dr. Miu Buzău"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
              <p
                style={{
                  margin: "14px 0 0",
                  color: "#64748b",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                Rezultat final: reabilitare completă, funcție masticatorie
                restabilită, aspect estetic natural.
              </p>
            </div>
          </div>

          <p
            style={{
              marginTop: "20px",
              color: "#94a3b8",
              fontSize: "0.82rem",
              fontStyle: "italic",
            }}
          >
            * Imagini publicate cu acordul pacientului. Rezultatele pot varia
            în funcție de situația clinică individuală.
          </p>
        </div>
      </section>

      {/* ── DESPRE CLINICĂ ── */}
      <section id="despre" style={sectionStyle}>
        <div style={containerStyle}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  color: "#1d4ed8",
                  fontWeight: 700,
                  margin: "0 0 12px",
                }}
              >
                Implantologie și chirurgie dento-alveolară în Buzău
              </p>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "18px",
                  fontSize: "2rem",
                  lineHeight: 1.2,
                }}
              >
                O abordare bazată pe evaluare, tehnologie și decizii corecte
              </h2>
              <p
                style={{
                  color: "#334155",
                  lineHeight: 1.9,
                  marginBottom: 16,
                }}
              >
                Clinica Dr. Miu este orientată către tratamente de{" "}
                <strong>implantologie în Buzău</strong> și{" "}
                <strong>chirurgie dento-alveolară</strong>, cu accent pe
                analiza atentă a fiecărui caz și pe stabilirea unei soluții
                potrivite pe termen lung.
              </p>
              <p style={{ color: "#334155", lineHeight: 1.9, margin: 0 }}>
                Pentru pacient, acest lucru înseamnă mai multă claritate, mai
                multă siguranță în decizie și un plan realist, construit în
                funcție de nevoile reale ale cazului.
              </p>
            </div>

            <div
              style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}
            >
              {[
                {
                  title: "Evaluare completă",
                  text: "Examinare clinică, analiză imagistică și integrarea informațiilor necesare pentru un plan de tratament corect.",
                },
                {
                  title: "Tehnologie digitală",
                  text: "CBCT și scanare digitală pentru cazurile în care precizia și predictibilitatea sunt esențiale.",
                },
                {
                  title: "Soluții adaptate cazului",
                  text: "De la un implant unic până la reabilitări extinse de tip All-on-X în Buzău, recomandarea se face individual.",
                },
              ].map((item) => (
                <div key={item.title} style={cardStyle}>
                  <h3 style={{ marginTop: 0, marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, color: "#334155", lineHeight: 1.8 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICII ── */}
      <section id="servicii" style={{ ...sectionStyle, background: "#ffffff" }}>
        <div style={containerStyle}>
          <p
            style={{ color: "#1d4ed8", fontWeight: 700, margin: "0 0 12px" }}
          >
            Servicii
          </p>
          <h2
            style={{
              marginTop: 0,
              marginBottom: "18px",
              fontSize: "2rem",
              lineHeight: 1.2,
            }}
          >
            Tratamente orientate spre stabilitate, funcție și estetică
          </h2>
          <p
            style={{
              maxWidth: "860px",
              color: "#334155",
              lineHeight: 1.9,
              marginTop: 0,
              marginBottom: "34px",
            }}
          >
            Fiecare tratament este ales în funcție de situația clinică reală,
            de obiectivele funcționale și estetice și de condițiile locale
            existente.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {services.map((service) => (
              <article key={service.title} style={cardStyle}>
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: "12px",
                    fontSize: "1.25rem",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ margin: 0, color: "#334155", lineHeight: 1.85 }}>
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVALUARE ── */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                title: "Cum decurge evaluarea inițială",
                type: "ol",
                items: [
                  "Examinare clinică atentă",
                  "Discuție despre istoricul medical și dentar",
                  "Analiză imagistică și, când este necesar, CBCT",
                  "Evaluarea volumului osos și a statusului gingival",
                  "Stabilirea unui plan personalizat de tratament",
                ],
              },
              {
                title: "Ce este analizat înainte de tratament",
                type: "ul",
                items: [
                  "Volumul osos disponibil",
                  "Situația protetică existentă",
                  "Statusul gingival și nivelul de igienă",
                  "Funcția masticatorie și ocluzia",
                  "Obiectivele funcționale și estetice ale pacientului",
                  "Necesitatea unor proceduri auxiliare, dacă este cazul",
                ],
              },
              {
                title: "Pentru cine poate fi potrivit tratamentul",
                type: "ul",
                items: [
                  "Au unul sau mai mulți dinți lipsă",
                  "Au lucrări vechi compromise",
                  "Vor să afle dacă implantul dentar este o opțiune",
                  "Au nevoie de o a doua opinie pentru un caz complex",
                  "Doresc o soluție fixă pe implanturi după o evaluare corectă",
                ],
              },
            ].map((block) => (
              <div key={block.title} style={cardStyle}>
                <h2
                  style={{
                    marginTop: 0,
                    marginBottom: "14px",
                    fontSize: "1.8rem",
                    lineHeight: 1.25,
                  }}
                >
                  {block.title}
                </h2>
                {block.type === "ol" ? (
                  <ol
                    style={{
                      paddingLeft: "20px",
                      color: "#334155",
                      lineHeight: 1.9,
                      margin: 0,
                    }}
                  >
                    {block.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ol>
                ) : (
                  <ul
                    style={{
                      paddingLeft: "20px",
                      color: "#334155",
                      lineHeight: 1.9,
                      margin: 0,
                    }}
                  >
                    {block.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ ...sectionStyle, background: "#ffffff" }}>
        <div style={containerStyle}>
          <p
            style={{ color: "#1d4ed8", fontWeight: 700, margin: "0 0 12px" }}
          >
            Întrebări frecvente
          </p>
          <h2
            style={{
              marginTop: 0,
              marginBottom: "28px",
              fontSize: "2rem",
              lineHeight: 1.2,
            }}
          >
            Informații utile despre implant dentar și reabilitare orală
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}
          >
            {faqItems.map((item) => (
              <article key={item.question} style={cardStyle}>
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: "10px",
                    fontSize: "1.18rem",
                    lineHeight: 1.35,
                  }}
                >
                  {item.question}
                </h3>
                <p style={{ margin: 0, color: "#334155", lineHeight: 1.85 }}>
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        style={{ ...sectionStyle, background: "#0f172a", color: "#ffffff" }}
        id="programare"
      >
        <div style={containerStyle}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  color: "#93c5fd",
                  fontWeight: 700,
                  margin: "0 0 12px",
                }}
              >
                Programează o consultație
              </p>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "16px",
                  fontSize: "2.1rem",
                  lineHeight: 1.2,
                }}
              >
                Vrei să afli ce soluție este potrivită pentru cazul tău?
              </h2>
              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.9,
                  marginTop: 0,
                  marginBottom: 0,
                  maxWidth: "760px",
                }}
              >
                Dacă ai nevoie de un{" "}
                <strong>implant dentar în Buzău</strong>, de o opinie privind
                un caz complex sau de o evaluare pentru{" "}
                <strong>All-on-X</strong>, <strong>sinus lift</strong> ori{" "}
                <strong>adiție osoasă</strong>, primul pas este consultația.
              </p>
            </div>

            <div
              style={{ ...cardStyle, background: "#ffffff", color: "#0f172a" }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "16px" }}>
                Date de contact
              </h3>
              <p style={{ margin: "0 0 10px", lineHeight: 1.8 }}>
                <strong>Adresă:</strong> Str. Penteleu 16, Buzău
              </p>
              <p style={{ margin: "0 0 10px", lineHeight: 1.8 }}>
                <strong>Telefon:</strong>{" "}
                <a
                  href="tel:+40750709716"
                  style={{ color: "#1d4ed8", textDecoration: "none" }}
                >
                  0750 709 716
                </a>
              </p>
              <p style={{ margin: "0 0 22px", lineHeight: 1.8 }}>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@clinicadrmiu.ro"
                  style={{ color: "#1d4ed8", textDecoration: "none" }}
                >
                  contact@clinicadrmiu.ro
                </a>
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a
                  href="tel:+40750709716"
                  style={{
                    background: "#1d4ed8",
                    color: "#ffffff",
                    padding: "13px 20px",
                    borderRadius: "999px",
                    textDecoration: "none",
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
                    background: "#e2e8f0",
                    color: "#0f172a",
                    padding: "13px 20px",
                    borderRadius: "999px",
                    textDecoration: "none",
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
