import Image from "next/image";
import type { Metadata } from "next";

import { Card, CardContent } from "@/components/ui/card";
import { clinic } from "@/lib/clinic";
import { dentistJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Despre ${clinic.doctor} | Medic specialist implantologie și chirurgie dento-alveolară în ${clinic.city}`,
  description: `${clinic.doctor} este medic specialist în implantologie dentară și chirurgie dento-alveolară în ${clinic.city}, absolvent al Facultății de Medicină Dentară Carol Davila și cu formare continuă în țară și în străinătate.`,
  alternates: {
    canonical: `${clinic.domain}${clinic.path}`,
  },
  openGraph: {
    title: `Despre ${clinic.doctor} | Medic specialist în ${clinic.city}`,
    description: `${clinic.doctor} tratează cazuri de implant dentar, chirurgie dento-alveolară și reabilitare orală, cu accent pe evaluare corectă, planificare și rezultate stabile.`,
    url: `${clinic.domain}${clinic.path}`,
    siteName: clinic.name,
    locale: "ro_RO",
    type: "website",
  },
};

const values = [
  "evaluare atentă și indicație corectă",
  "explicații clare, fără grabă",
  "planificare orientată spre predictibilitate",
  "respect pentru confortul și ritmul pacientului",
  "interes real pentru rezultate stabile pe termen lung",
] as const;

const milestones = [
  {
    year: "2012",
    title: "Facultatea de Medicină Dentară",
    text: "Absolvent al Facultății de Medicină Dentară «Carol Davila», București — una dintre cele mai prestigioase instituții de formare medicală din România.",
  },
  {
    year: "2013",
    title: "Începutul rezidențiatului",
    text: "Am intrat în rezidențiatul de chirurgie dento-alveolară, cu focus pe cazuri chirurgicale și tratamente care necesită precizie și planificare atentă.",
  },
  {
    year: "2017",
    title: "Medic specialist",
    text: "Am finalizat pregătirea de medic specialist în chirurgie dento-alveolară, cu o formare solidă în tratamente chirurgicale și implantare.",
  },
  {
    year: "Continuu",
    title: "Perfecționare permanentă",
    text: "Particip frecvent la cursuri și programe de formare atât în țară, cât și în străinătate, pentru a rămâne conectat la tehnici și protocoale actuale.",
  },
] as const;

const pillars = [
  {
    title: "Diagnostic înainte de tratament",
    text: "Înainte de orice recomandare, cazul trebuie înțeles corect. Evaluarea clinică, investigațiile imagistice și contextul general al pacientului sunt esențiale pentru alegerea soluției potrivite.",
  },
  {
    title: "Planificare, nu decizii grăbite",
    text: "În implantologie și chirurgie, rezultatele bune apar atunci când tratamentul este gândit atent, etapizat corect și adaptat particularităților fiecărui caz.",
  },
  {
    title: "Soluții realiste și stabile",
    text: "Obiectivul nu este doar rezolvarea unei probleme imediate, ci obținerea unui rezultat funcțional, echilibrat și predictibil pe termen lung.",
  },
] as const;

const reviews = [
  {
    name: "Codruța Sofia Ioniță",
    text: "Am fost super mulțumită și m-am simțit foarte ok în cabinetul domnului doctor Cosmin Miu! Recomand din tot sufletul, tot personalul este super!",
    emoji: "🙏",
    treatment: "Pacientă",
  },
  {
    name: "Roxana Clinciu",
    text: "Echipă tânără, super faină și profesionistă. Chiar m-am distrat la extracția uneia masele de minte. Recomand cu drag!",
    emoji: "😄",
    treatment: "Extracție molar de minte",
  },
  {
    name: "Andreea",
    text: "Am fost la domnul doctor Miu pentru o extracție de masea de minte. Un doctor foarte empatic, a lucrat cu grijă, delicat. Totul a parcurs bine. Mulțumesc!",
    emoji: "❤️",
    treatment: "Extracție molar de minte",
  },
  {
    name: "Adrian Chiriță",
    text: "Îl recomand cu mare drag pe dl doctor Cosmin Miu, în urma inserării implanturilor dentare fără durere!",
    emoji: "⭐",
    treatment: "Implant dentar",
  },
  {
    name: "Manuel Iordache",
    text: "Recomand! Dr. Miu — medic de nota 10 plus!",
    emoji: "🏆",
    treatment: "Pacient",
  },
] as const;

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: clinic.name,
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
};

export default function AboutPage() {
  const jsonLd = dentistJsonLd(metadata.description as string, clinic.path);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: clinic.doctor,
    jobTitle: "Medic specialist în chirurgie dento-alveolară",
    alumniOf: "Facultatea de Medicină Dentară Carol Davila",
    worksFor: clinic.name,
    workLocation: clinic.city,
    description: `${clinic.doctor} este medic specialist în implantologie dentară și chirurgie dento-alveolară în ${clinic.city}, cu activitate orientată spre cazuri simple și complexe, planificare atentă și formare profesională continuă.`,
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.85),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,250,252,1),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-24">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Despre Dr. Miu
            </div>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
              {clinic.doctor} – medic specialist în implantologie dentară și
              chirurgie dento-alveolară în {clinic.city}
            </h1>

            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
              <p>
                <strong>{clinic.doctor}</strong> are o activitate concentrată pe{" "}
                <strong>implantologie dentară</strong> și{" "}
                <strong>chirurgie dento-alveolară în {clinic.city}</strong>, cu
                accent pe tratamente planificate atent, adaptate fiecărui caz și
                orientate spre rezultate funcționale și stabile.
              </p>
              <p>
                Am absolvit{" "}
                <strong>Facultatea de Medicină Dentară Carol Davila</strong> în
                anul <strong>2012</strong>, iar în <strong>2013</strong> am
                început rezidențiatul de{" "}
                <strong>chirurgie dento-alveolară</strong>, pe care l-am
                finalizat în <strong>2017</strong>.
              </p>
              <p>
                Particip frecvent la cursuri și programe de perfecționare atât
                în țară, cât și în străinătate, deoarece consider că medicina
                bună înseamnă actualizare continuă, disciplină profesională și
                dorința de a învăța permanent tehnici și abordări noi.
              </p>
              <p>
                În cadrul <strong>{clinic.name}</strong>, tratez atât cazuri
                simple, cât și cazuri complexe, inclusiv situații care pot
                necesita implant dentar, chirurgie dento-alveolară, adiție
                osoasă, sinus lift sau soluții de reabilitare extinsă.
              </p>
            </div>

            {/* Badge-uri autoritate */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Absolvent Carol Davila · 2012",
                "Medic specialist din 2017",
                "Formare continuă internațională",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "Implant dentar " + clinic.city,
                "Chirurgie dento-alveolară",
                "Reabilitare orală complexă",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card cu poza */}
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
                      alt={`${clinic.doctor} - medic specialist implantologie și chirurgie dento-alveolară în ${clinic.city}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
                      {clinic.name}
                    </p>
                    <p className="mt-2 text-2xl font-semibold">{clinic.doctor}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Medic specialist în implantologie dentară și chirurgie
                      dento-alveolară în {clinic.city}.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── 3 PILONI ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RECENZII ── */}
      <section className="border-y border-slate-100 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
          <div className="mb-10">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Ce spun pacienții
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Experiențe reale, în cuvintele lor
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Recenzii autentice de la pacienți care au ales{" "}
              <strong>{clinic.name}</strong> pentru tratamente de implant
              dentar, chirurgie și reabilitare orală.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="flex flex-col justify-between rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div>
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {review.name}
                    </p>
                    <p className="text-xs text-slate-500">{review.treatment}</p>
                  </div>
                  <span className="text-2xl">{review.emoji}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARCURS PROFESIONAL ── */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Parcurs profesional
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Formare solidă și interes constant pentru evoluție
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Încrederea pacientului se construiește nu doar prin rezultat, ci
              și prin pregătire, disciplină și seriozitatea cu care este
              analizat fiecare caz.
            </p>
          </div>

          <div className="space-y-5">
            {milestones.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {item.year}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">
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

      {/* ── PRINCIPII DE LUCRU ── */}
      <section className="border-t border-slate-100 bg-slate-50/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Principii de lucru
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Cum este construit tratamentul
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Fiecare plan terapeutic trebuie să fie justificat medical, clar
              pentru pacient și realist în raport cu situația clinică. Nu cred
              în soluții standard aplicate automat, ci în tratamente adaptate
              corect fiecărui caz.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Pentru mine, un tratament bun începe cu o indicație corectă, cu o
              explicație clară și cu o planificare atentă a etapelor necesare.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4">
              {values.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span className="mt-1 text-blue-700">✓</span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="max-w-4xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                Programare
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Dacă vrei să afli ce soluție este potrivită pentru cazul tău,
                primul pas este evaluarea corectă
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Fie că este vorba despre un implant dentar, o a doua opinie sau
                un caz mai complex de chirurgie și reabilitare orală,
                consultația are rolul de a clarifica opțiunile și de a stabili
                un plan potrivit situației tale reale.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+40750709716"
                  className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Sună acum
                </a>
                <a
                  href="https://wa.me/40750709716"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Scrie pe WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
