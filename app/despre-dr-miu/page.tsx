import Image from "next/image";
import type { Metadata } from "next";

import { Card, CardContent } from "@/components/ui/card";
import { clinic } from "@/lib/clinic";
import { dentistJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Despre ${clinic.doctor} | Implant dentar în ${clinic.city}`,
  description: `${clinic.doctor} este medic specialist în implantologie dentară și chirurgie dento-alveolară în ${clinic.city}, cu activitate concentrată pe tratamente moderne de implant dentar și reabilitare orală.`,
  alternates: {
    canonical: `${clinic.domain}${clinic.path}`,
  },
  openGraph: {
    title: `Despre ${clinic.doctor} | Implant dentar în ${clinic.city}`,
    description: `${clinic.doctor} este medic specialist în implantologie dentară și chirurgie dento-alveolară în ${clinic.city}, cu abordare orientată spre tratamente predictibile și rezultate stabile.`,
    url: `${clinic.domain}${clinic.path}`,
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

export default function AboutPage() {
  const jsonLd = dentistJsonLd(
    metadata.description as string,
    clinic.path,
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.85),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,250,252,1),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Despre Dr. Miu
            </div>

            {/* 🔥 H1 optimizat */}
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
              {clinic.doctor} – implant dentar în {clinic.city} și chirurgie dento-alveolară
            </h1>

            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
              <p>
                <strong>{clinic.doctor}</strong> este medic specialist în
                <strong> implantologie dentară și chirurgie dento-alveolară în {clinic.city}</strong>,
                cu activitate concentrată pe tratamente care necesită precizie,
                planificare și o bună înțelegere a particularităților fiecărui caz.
              </p>

              {/* 🔥 propoziție nouă SEO + autoritate */}
              <p>
                Experiența sa include tratamente de implant dentar realizate cu
                planificare digitală și abordări moderne, adaptate fiecărui pacient.
              </p>

              <p>
                În cadrul <strong>{clinic.name}</strong> din{" "}
                <strong>{clinic.city}</strong>, tratează atât cazuri simple, cât și
                cazuri complexe, inclusiv situații în care pentru reabilitare sunt
                necesare adiții osoase, sinus lift sau sisteme All-on-4 și All-on-6.
              </p>

              <p>
                Abordarea sa este construită în jurul unor evaluări complete,
                explicații clare și soluții medicale orientate spre predictibilitate,
                funcție și rezultate stabile pe termen lung.
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
                      alt={`${clinic.doctor} - implant dentar în ${clinic.city}`}
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
                      Implantologie dentară și chirurgie orală în {clinic.city}.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Abordare
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Cum este construit tratamentul
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Fiecare plan de tratament este stabilit în funcție de contextul clinic,
            de obiectivul pacientului și de predictibilitatea rezultatului pe termen lung.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <ul className="space-y-4">
            {values.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
