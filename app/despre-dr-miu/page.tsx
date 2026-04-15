import Image from "next/image";
import type { Metadata } from "next";

import { Card, CardContent } from "@/components/ui/card";
import { clinic } from "@/lib/clinic";
import { dentistJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Despre ${clinic.doctor} | Implantologie dentară în ${clinic.city}`,
  description: `${clinic.doctor} este medic specialist în chirurgie dento-alveolară și implantologie dentară în ${clinic.city}, cu activitate concentrată pe tratamente moderne de implant dentar, chirurgie orală și reabilitare orală complexă.`,
  alternates: {
    canonical: "https://clinicadrmiu.ro/despre-dr-miu",
  },
  openGraph: {
    title: `Despre ${clinic.doctor} | Implantologie dentară în ${clinic.city}`,
    description: `${clinic.doctor} este medic specialist în chirurgie dento-alveolară și implantologie dentară în ${clinic.city}, cu abordare orientată spre tratamente predictibile și rezultate stabile pe termen lung.`,
    url: "https://clinicadrmiu.ro/despre-dr-miu",
    siteName: clinic.name,
    locale: "ro_RO",
    type: "website",
  },
};

const values = [
  "evaluare atentă și indicație corectă",
  "explicații clare, fără grabă",
  "decizii medicale orientate spre predictibilitate",
  "respect pentru confortul pacientului",
  "interes pentru rezultate stabile pe termen lung",
] as const;

const expertise = [
  {
    title: "Implant dentar",
    text: `Tratamente de implant dentar planificate corect, cu atenție la funcție, estetică și stabilitate pe termen lung pentru pacienți din ${clinic.city}.`,
  },
  {
    title: "Adiție osoasă și sinus lift",
    text: "Proceduri necesare în cazurile în care suportul osos trebuie pregătit înaintea inserării implanturilor dentare.",
  },
  {
    title: "All-on-4 și All-on-6",
    text: "Soluții de reabilitare orală pentru pacienții care au nevoie de tratamente extinse și de un plan terapeutic bine structurat.",
  },
  {
    title: "Chirurgie dento-alveolară",
    text: "Intervenții realizate cu indicație corectă, cu accent pe vindecare, confort și rezultate predictibile.",
  },
  {
    title: "Reabilitare orală complexă",
    text: "Planuri de tratament personalizate pentru cazuri care necesită o abordare etapizată și atent coordonată.",
  },
  {
    title: "Evaluare completă înainte de tratament",
    text: "Examinare clinică, investigații imagistice și discuție detaliată pentru alegerea soluției potrivite fiecărui pacient.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: `Cu ce tipuri de tratamente se ocupă ${clinic.doctor}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${clinic.doctor} realizează tratamente de implantologie dentară, chirurgie dento-alveolară, adiții osoase, sinus lift și reabilitări orale pentru cazuri simple și complexe.`,
      },
    },
    {
      "@type": "Question",
      name: `Unde consultă și tratează ${clinic.doctor}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${clinic.doctor} consultă și tratează pacienți în ${clinic.city}, în cadrul ${clinic.name}, cu activitate concentrată pe implant dentar și soluții moderne de reabilitare orală.`,
      },
    },
    {
      "@type": "Question",
      name: "Ce este important înainte de un tratament de implant dentar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Înainte de tratament sunt importante evaluarea clinică, investigațiile imagistice și planificarea atentă, pentru alegerea unei soluții corecte și predictibile pe termen lung.",
      },
    },
  ],
};

export default function AboutPage() {
  const jsonLd = dentistJsonLd(
    metadata.description as string,
    "/despre-dr-miu",
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.85),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,250,252,1),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Despre Dr. Miu
            </div>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
              {clinic.doctor} – implantologie dentară în {clinic.city} și
              chirurgie dento-alveolară
            </h1>

            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
              <p>
                <strong>{clinic.doctor}</strong> este medic specialist în
                chirurgie dento-alveolară și implantologie dentară, cu
                activitate concentrată pe tratamente care necesită precizie,
                planificare și o bună înțelegere a particularităților fiecărui
                caz.
              </p>

              <p>
                În cadrul <strong>{clinic.name}</strong> din{" "}
                <strong>{clinic.city}</strong>, tratează atât cazuri simple, cât
                și cazuri complexe, inclusiv situații în care pentru
                reabilitare sunt necesare adiții osoase, sinus lift sau sisteme
                All-on-4 și All-on-6.
              </p>

              <p>
                Abordarea sa este construită în jurul unor evaluări complete,
                explicații clare și soluții medicale orientate spre
                predictibilitate, funcție și rezultate stabile pe termen lung.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                Implant dentar {clinic.city}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                Chirurgie dento-alveolară
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                Reabilitare orală complexă
              </span>
            </div>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border-slate-200 shadow-xl shadow-slate-200/60">
            <CardContent className="p-0">
              <div className="aspect-[4/5] bg-[linear-gradient(180deg,#f8fafc_0%,#e2e8f0_100%)] p-6">
                <div className="flex h-full flex-col rounded-[1.5rem] border border-white/70 bg-white/70 p-6 backdrop-blur">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Portret profesional</span>
                    <span>fotografie reală</span>
                  </div>

                  <div className="relative mt-6 flex-1 overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image
                      src="/dr-miu-cosmin.jpg"
                      alt={`${clinic.doctor} - medic specialist în chirurgie dento-alveolară și implantologie dentară în ${clinic.city}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
                      {clinic.name}
                    </p>
                    <p className="mt-2 text-2xl font-semibold">
                      {clinic.doctor}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Medic specialist în chirurgie dento-alveolară și
                      implantologie dentară, cu activitate orientată spre
                      tratamente bine planificate și rezultate stabile.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Abordare
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Cum este construit tratamentul
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Fiecare plan de tratament este stabilit în funcție de contextul
            clinic, de obiectivul pacientului și de predictibilitatea
            rezultatului pe termen lung. În implantologie, indicația corectă și
            planificarea atentă sunt esențiale.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <ul className="space-y-4">
            {values.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs">
                  ✓
                </span>
                <span className="text-lg leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Expertiză
          </div>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Tipuri de tratamente realizate frecvent
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Despre medic
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Informații clare despre medic, abordare și experiență
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Pacienții caută nu doar tratamente, ci și medicul care explică
              opțiunile clar și construiește un plan corect. Pagina aceasta este
              gândită să ofere context despre <strong>{clinic.doctor}</strong>,
              despre activitatea sa în <strong>implantologie dentară în {clinic.city}</strong>{" "}
              și despre felul în care sunt abordate tratamentele chirurgicale și
              reabilitările orale.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-950">
              Întrebări frecvente
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-900">
                  Cu ce tipuri de tratamente se ocupă {clinic.doctor}?
                </h4>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  Activitatea sa este concentrată pe implant dentar, chirurgie
                  dento-alveolară, adiții osoase, sinus lift și soluții de
                  reabilitare orală pentru cazuri simple și complexe.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900">
                  Unde consultă și tratează pacienți?
                </h4>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  {clinic.doctor} consultă și tratează pacienți în {clinic.city},
                  în cadrul {clinic.name}.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900">
                  Ce este important înainte de un tratament de implant dentar?
                </h4>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  Înainte de tratament sunt importante evaluarea completă,
                  investigațiile imagistice și planificarea atentă, pentru ca
                  soluția aleasă să fie corectă și predictibilă.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
