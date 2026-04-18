import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Fractură incisiv central tratată cu implant dentar imediat | Caz clinic în Buzău | Clinica Dr. Miu",
  description:
    "Caz clinic la Clinica Dr. Miu din Buzău: fractură de incisiv central tratată prin extracție, implant dentar imediat și dinte provizoriu fix în aceeași ședință, cu planificare digitală și ghid chirurgical.",
  alternates: {
    canonical:
      "https://www.clinicadrmiu.ro/caz-clinic-fractura-incisiv-central",
  },
  openGraph: {
    title:
      "Fractură incisiv central tratată cu implant dentar imediat | Caz clinic în Buzău",
    description:
      "Extracție, inserare implant și dinte provizoriu în aceeași ședință, cu planificare digitală și ghid chirurgical.",
    url: "https://www.clinicadrmiu.ro/caz-clinic-fractura-incisiv-central",
    siteName: "Clinica Dr. Miu",
    locale: "ro_RO",
    type: "article",
    images: [
      {
        url: "https://www.clinicadrmiu.ro/caz-fractura-incisiv-1.jpg",
        width: 1200,
        height: 1600,
        alt: "Caz clinic fractură incisiv central tratată cu implant dentar imediat",
      },
    ],
  },
};

export default function CazClinicFracturaIncisivPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Fractură incisiv central tratată cu implant dentar imediat și dinte provizoriu",
    description:
      "Caz clinic realizat la Clinica Dr. Miu din Buzău: fractură de incisiv central, evaluare CBCT, scanare intraorală, ghid chirurgical, extracție, implant și provizoriu în aceeași ședință.",
    author: {
      "@type": "Person",
      name: "Dr. Cosmin Miu",
    },
    publisher: {
      "@type": "Organization",
      name: "Clinica Dr. Miu",
      url: "https://www.clinicadrmiu.ro",
    },
    mainEntityOfPage:
      "https://www.clinicadrmiu.ro/caz-clinic-fractura-incisiv-central",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: "https://www.clinicadrmiu.ro",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cazuri clinice",
        item: "https://www.clinicadrmiu.ro/cazuri-clinice",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Fractură incisiv central — implant imediat",
        item: "https://www.clinicadrmiu.ro/caz-clinic-fractura-incisiv-central",
      },
    ],
  };

  const reviews = [
    {
      name: "Codruta Sofia Ionita",
      text: "Am ales Clinica Dr. Miu pentru un implant dentar și nu am regretat nicio clipă. Dr. Miu este un medic excepțional — profesionist, atent și răbdător. M-a explicat pas cu pas tot procesul și m-a făcut să mă simt în siguranță.",
      stars: 5,
    },
    {
      name: "Adrian Chirita",
      text: "Recomand cu toată încrederea! Am venit pentru un implant dentar și am fost impresionat de profesionalismul Dr. Miu. Intervenția a decurs fără probleme, iar recuperarea a fost rapidă.",
      stars: 5,
    },
    {
      name: "Manuel Iordache",
      text: "Experiență foarte bună la Clinica Dr. Miu. Medicul este foarte profesionist și a explicat clar fiecare etapă a tratamentului. Recomand cu încredere!",
      stars: 5,
    },
  ];

  const benefits = [
    "Menținerea esteticii în zona frontală imediat după intervenție",
    "Evitarea perioadei în care pacientul rămâne fără dinte",
    "Poziționare mai precisă a implantului datorită ghidului chirurgical",
    "Tratament mai predictibil prin planificare digitală",
    "Confort crescut și integrare mai ușoară în viața socială și profesională",
  ];

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ── */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              Caz clinic real
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
              Planificare digitală
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
              Ghid chirurgical
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
              Implant imediat
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Fractură de incisiv central tratată prin extracție, implant dentar
            imediat și dinte provizoriu în aceeași ședință
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Pacienta s-a prezentat la Clinica Dr. Miu din Buzău cu o fractură la
            nivelul unui incisiv central. După evaluare clinică, computer
            tomograf și scanare intraorală, tratamentul a fost planificat
            digital și realizat astfel încât pacienta să nu plece acasă fără
            dinte.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
            <div>
              <span className="font-semibold text-slate-900">Medic:</span>{" "}
              Dr. Cosmin Miu
            </div>
            <div>
              <span className="font-semibold text-slate-900">Clinică:</span>{" "}
              Clinica Dr. Miu, Buzău
            </div>
            <div>
              <span className="font-semibold text-slate-900">Protocol:</span>{" "}
              Implant imediat post-extracție
            </div>
          </div>
        </div>
      </section>

      {/* ── GALERIE ── */}
      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              src: "/caz-fractura-incisiv-1.jpg",
              alt: "Fractură incisiv central înainte de tratament",
              caption: "Situația inițială — fractură incisiv central",
            },
            {
              src: "/caz-fractura-incisiv-2.jpg",
              alt: "Ghid chirurgical pentru inserarea implantului dentar",
              caption: "Ghid chirurgical — precizie digitală",
            },
            {
              src: "/caz-fractura-incisiv-3.jpg",
              alt: "Rezultat imediat după implant dentar și dinte provizoriu",
              caption: "Rezultat imediat — dinte provizoriu fix",
            },
          ].map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-xs font-medium text-slate-500">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SITUATIA INITIALA ── */}
      <section className="mx-auto max-w-4xl px-6 pb-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Situația inițială
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              Fractura unui incisiv central este una dintre cele mai dificile
              situații din punct de vedere estetic, deoarece afectează imediat
              zâmbetul, vorbirea și încrederea pacientului. În acest caz, dintele
              nu mai putea fi păstrat în condiții predictibile pe termen lung.
            </p>

            <p>
              Pentru a stabili dacă este posibil un{" "}
              <strong>implant dentar imediat</strong>, pacienta a efectuat un{" "}
              <strong>computer tomograf (CBCT)</strong> pentru analiza volumului
              osos, iar prin <strong>scanare intraorală</strong> a fost obținută
              o imagine digitală precisă a situației clinice.
            </p>
          </div>
        </div>
      </section>

      {/* ── PLANIFICARE DIGITALA ── */}
      <section className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Planificare digitală și ghid chirurgical
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              Datele obținute din CBCT și din scanarea digitală au fost folosite
              pentru realizarea unui <strong>ghid chirurgical</strong>. Acesta
              permite inserarea implantului într-o poziție exactă, cu o orientare
              corectă din punct de vedere funcțional și estetic.
            </p>

            <p>
              În zona frontală, precizia este esențială. Poziția implantului
              influențează atât aspectul viitoarei coroane, cât și suportul
              gingival. Planificarea digitală reduce imprevizibilul și crește
              șansele unui rezultat estetic natural pe termen lung.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRATAMENT ── */}
      <section className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Tratamentul realizat în aceeași ședință
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              Pacienta a fost programată pentru{" "}
              <strong>extracția incisivului central fracturat</strong>,{" "}
              <strong>inserarea implantului dentar</strong> și aplicarea unui{" "}
              <strong>dinte provizoriu fix</strong> — toate în aceeași ședință.
            </p>

            <p>
              Acest protocol este cunoscut ca{" "}
              <strong>implant dentar imediat cu provizoriu imediat</strong> și
              poate fi realizat doar după o evaluare atentă, în cazurile în care
              osul, poziția implantului și stabilitatea primară permit acest
              lucru.
            </p>

            <p>
              Cel mai important pentru pacient:{" "}
              <strong>nu a plecat acasă fără dinte</strong>. În zona frontală,
              acest lucru contează enorm — atât estetic, cât și emoțional.
            </p>
          </div>
        </div>
      </section>

      {/* ── BENEFICII ── */}
      <section className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Beneficiile pentru pacient
          </h2>

          <ul className="mt-6 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-700" />
                <span className="text-base leading-8 text-slate-700">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CAND ESTE POSIBIL ── */}
      <section className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Când este posibil un implant dentar imediat?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              Nu orice dinte fracturat poate fi tratat în aceeași ședință prin
              extracție, implant și provizoriu. Decizia depinde de mai mulți
              factori: integritatea osoasă, prezența unei infecții, stabilitatea
              implantului după inserare și poziția exactă în os.
            </p>

            <p>
              De aceea, consultația, analiza tomografică și planificarea
              digitală sunt esențiale pentru alegerea tratamentului corect. În
              cazurile potrivite, implantul imediat oferă rezultate excelente
              atât funcțional, cât și estetic.
            </p>
          </div>
        </div>
      </section>

      {/* ── RECENZII ── */}
      <section className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Ce spun pacienții noștri
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {review.text}
                </p>
                <p className="mt-4 text-xs font-semibold text-slate-900">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="mx-auto max-w-4xl px-6 py-6 pb-24 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white md:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ai un dinte frontal fracturat și vrei să știi dacă se poate pune
            implant imediat?
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            La Clinica Dr. Miu din Buzău, fiecare caz este evaluat clinic și
            imagistic pentru a stabili dacă se poate realiza extracția,
            inserarea implantului și aplicarea unui dinte provizoriu în aceeași
            ședință.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              Programează o consultație
            </Link>

            <a
              href="tel:+40750709716"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Sună direct
            </a>

            <Link
              href="/implant-dentar-buzau"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Vezi pagina de implant dentar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
