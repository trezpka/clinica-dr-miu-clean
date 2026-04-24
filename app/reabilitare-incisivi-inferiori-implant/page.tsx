import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Extracție incisivi și implant imediat cu ghid chirurgical | Clinica Dr. Miu",
  description:
    "Caz clinic real: extracția a 4 incisivi inferiori cu mobilitate, inserarea a 2 implanturi cu ghid chirurgical și 4 coroane temporare în aceeași ședință. Clinica Dr. Miu, Buzău.",
  alternates: {
    canonical: "https://www.clinicadrmiu.ro/reabilitare-incisivi-inferiori-implant",
  },
  openGraph: {
    title: "Extracție incisivi și implant imediat cu ghid chirurgical | Clinica Dr. Miu",
    description:
      "Extracție 4 incisivi inferiori, 2 implanturi cu ghid chirurgical și coroane temporare în aceeași ședință. Caz clinic real, Clinica Dr. Miu Buzău.",
    url: "https://www.clinicadrmiu.ro/reabilitare-incisivi-inferiori-implant",
    siteName: "Clinica Dr. Miu",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://www.clinicadrmiu.ro/copie1.jpeg",
        width: 1200,
        height: 1500,
        alt: "Caz clinic incisivi inferiori - înainte de tratament",
      },
    ],
  },
};

export default function ReabilitareIncisiviInferioriPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Clinica Dr. Miu",
    url: "https://www.clinicadrmiu.ro/reabilitare-incisivi-inferiori-implant",
    telephone: "+40 750 709 716",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Str. Penteleu, 16",
      addressLocality: "Buzău",
      addressCountry: "RO",
    },
    medicalSpecialty: ["Implantologie", "Chirurgie dento-alveolară"],
  };

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">
              Caz clinic real · Clinica Dr. Miu · Buzău
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Extracție incisivi și implant imediat cu ghid chirurgical
            </h1>
            <p className="text-slate-600 text-lg mb-4">
              Pacientul s-a prezentat în clinică pentru extracția celor{" "}
              <strong>4 incisivi inferiori</strong> care prezentau mobilitate
              avansată. După analiza tomografiei computerizate, s-a luat decizia
              de a extrage incisivii, de a insera{" "}
              <strong>2 implanturi cu ajutorul ghidului chirurgical</strong> și
              de a aplica <strong>4 coroane temporare în aceeași ședință</strong>.
            </p>
            <p className="text-slate-600 text-lg mb-8">
              Planificarea digitală completă a permis o intervenție precisă,
              predictibilă și confortabilă pentru pacient.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="tel:+40750709716"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition"
              >
                Sună acum
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition"
              >
                Programează o consultație
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/copie1.jpeg"
              alt="Starea inițială - incisivi inferiori cu mobilitate"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-5">
              <p className="text-white text-sm font-semibold uppercase tracking-wide">
                Caz clinic real
              </p>
              <p className="text-white text-base font-bold">
                Reabilitare incisivi inferiori cu implant imediat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ETAPELE TRATAMENTULUI */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Protocol clinic
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Etapele tratamentului
          </h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl">
            Fiecare etapă a fost planificată digital înainte de intervenție,
            pentru un rezultat predictibil și o recuperare rapidă.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nr: "01",
                titlu: "Evaluare CT și planificare digitală",
                desc: "Tomografia computerizată a evidențiat mobilitatea avansată a celor 4 incisivi inferiori și a permis planificarea precisă a poziției implanturilor cu software dedicat.",
              },
              {
                nr: "02",
                titlu: "Extracție și inserare implanturi cu ghid chirurgical",
                desc: "Cei 4 incisivi au fost extrași atraumatic, iar cele 2 implanturi au fost inserate cu ajutorul ghidului chirurgical fabricat digital, asigurând precizie maximă.",
              },
              {
                nr: "03",
                titlu: "Coroane temporare în aceeași ședință",
                desc: "Imediat după inserarea implanturilor, pacientul a primit 4 coroane temporare, plecând din clinică cu un zâmbet funcțional și estetic în aceeași zi.",
              },
            ].map((etapa) => (
              <div
                key={etapa.nr}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
              >
                <span className="text-4xl font-extrabold text-blue-100 block mb-4">
                  {etapa.nr}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {etapa.titlu}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {etapa.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE FOTO */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Documentare fotografică
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Înainte, în timpul și după tratament
          </h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl">
            Fotografiile surprind starea inițială, momentul inserării
            implanturilor cu ghidul chirurgical și rezultatul final cu coroanele
            temporare.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: "/copie1.jpeg",
                alt: "Starea inițială - incisivi inferiori cu mobilitate avansată",
                label: "Înainte — starea inițială",
                desc: "Cei 4 incisivi inferiori prezentau mobilitate avansată și necesitau extracție.",
              },
              {
                src: "/copie2.jpeg",
                alt: "Inserarea implanturilor cu ghid chirurgical",
                label: "În timpul intervenției",
                desc: "Inserarea celor 2 implanturi cu ajutorul ghidului chirurgical fabricat digital.",
              },
              {
                src: "/copie3.jpeg",
                alt: "Rezultat final cu coroane temporare în aceeași ședință",
                label: "După — coroane temporare imediate",
                desc: "Pacientul a plecat din clinică cu 4 coroane temporare aplicate în aceeași ședință.",
              },
            ].map((foto) => (
              <div
                key={foto.src}
                className="rounded-2xl overflow-hidden shadow-md border border-slate-100 group"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-white">
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                    {foto.label}
                  </p>
                  <p className="text-slate-700 text-sm">{foto.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DE CE GHID CHIRURGICAL */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">
              Avantajele planificării digitale
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              De ce am ales ghidul chirurgical?
            </h2>
            <ul className="space-y-4 text-slate-300 text-base">
              {[
                "Precizie maximă în poziționarea implanturilor, planificată 3D înainte de intervenție",
                "Risc minim de complicații intraoperatorii",
                "Intervenție mai rapidă și mai puțin traumatică pentru pacient",
                "Posibilitatea de a aplica coroane temporare imediat după inserare",
                "Rezultat estetic și funcțional predictibil încă din prima zi",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <Image
              src="/copie2.jpeg"
              alt="Ghid chirurgical pentru inserarea implanturilor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Clinica Dr. Miu · Buzău
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Ai dinți cu mobilitate sau lipsă?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Programează o consultație și află dacă ești candidat pentru implant
            imediat cu ghid chirurgical. Fiecare caz este evaluat individual,
            cu tomografie computerizată și planificare digitală completă.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="tel:+40750709716"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-700 transition"
            >
              📞 Sună acum
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition"
            >
              Programează o consultație
            </Link>
          </div>
        </div>
      </section>

      {/* BACK TO CAZURI */}
      <div className="bg-slate-50 py-8 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/cazuri-clinice"
            className="text-blue-600 font-medium hover:underline text-sm"
          >
            ← Înapoi la toate cazurile clinice
          </Link>
        </div>
      </div>
    </main>
  );
}
