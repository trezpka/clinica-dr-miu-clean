import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Caz clinic real
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
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
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/caz-fractura-incisiv-1.jpg"
                alt="Fractură incisiv central înainte de tratament"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/caz-fractura-incisiv-2.jpg"
                alt="Ghid chirurgical pentru inserarea implantului dentar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/caz-fractura-incisiv-3.jpg"
                alt="Rezultat imediat după implant dentar și dinte provizoriu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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
              <strong>computer tomograf</strong> pentru analiza volumului osos,
              iar prin <strong>scanare intraorală</strong> a fost obținută o
              imagine digitală precisă a situației clinice.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Planificare digitală și ghid chirurgical
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              Datele obținute din CBCT și din scanarea digitală au fost folosite
              pentru realizarea unui <strong>ghid chirurgical</strong>. Acesta
              ne ajută să inserăm implantul într-o poziție exactă, cu o
              orientare corectă din punct de vedere funcțional și estetic.
            </p>

            <p>
              În zona frontală, precizia este esențială. Poziția implantului
              influențează atât aspectul viitoarei coroane, cât și suportul
              gingival. De aceea, planificarea digitală reduce imprevizibilul și
              crește șansele unui rezultat estetic natural.
            </p>
          </div>
        </div>
      </section>

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
              <strong>dinte provizoriu fix</strong>, toate în aceeași ședință.
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
              acest lucru contează enorm, atât estetic, cât și emoțional.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Beneficiile pentru pacient
          </h2>

          <ul className="mt-6 space-y-4 text-base leading-8 text-slate-700">
            <li>
              Menținerea esteticii în zona frontală imediat după intervenție
            </li>
            <li>
              Evitarea perioadei în care pacientul rămâne fără dinte
            </li>
            <li>
              Poziționare mai precisă a implantului datorită ghidului chirurgical
            </li>
            <li>
              Tratament mai predictibil prin planificare digitală
            </li>
            <li>
              Confort crescut și integrare mai ușoară în viața socială și
              profesională
            </li>
          </ul>
        </div>
      </section>

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

      <section className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
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
