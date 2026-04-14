import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Implant dentar Buzău | Clinica Dr. Miu",
  description:
    "Implant dentar în Buzău la Clinica Dr. Miu. Evaluare clinică, CBCT, scanare digitală și planificare atentă pentru soluții funcționale și estetice.",
  alternates: {
    canonical: "https://www.clinicadrmiu.ro/implant-dentar-buzau",
  },
  openGraph: {
    title: "Implant dentar Buzău | Clinica Dr. Miu",
    description:
      "Soluții moderne de implant dentar în Buzău, cu planificare digitală și accent pe estetică, funcție și predictibilitate.",
    url: "https://www.clinicadrmiu.ro/implant-dentar-buzau",
    siteName: "Clinica Dr. Miu",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://www.clinicadrmiu.ro/implant-caz.jpg",
        width: 1200,
        height: 1500,
        alt: "Implant dentar Buzău - caz clinic real",
      },
    ],
  },
};

export default function ImplantDentarBuzauPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Clinica Dr. Miu",
    url: "https://www.clinicadrmiu.ro/implant-dentar-buzau",
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

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,245,249,0.9),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(226,232,240,0.7),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-slate-900" />
              Implant dentar Buzău · Planificare digitală · Estetică predictibilă
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Implant dentar în Buzău — soluția modernă pentru înlocuirea
              dinților lipsă
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              La Clinica Dr. Miu, tratamentele cu implant dentar sunt planificate
              atent, pe baza examenului clinic, a investigațiilor imagistice și
              a obiectivelor estetice și funcționale ale pacientului.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Scopul tratamentului nu este doar înlocuirea unui dinte lipsă, ci
              refacerea confortului, a masticației și a aspectului natural al
              zâmbetului.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Programează o consultație
              </Link>

              <a
                href="tel:+40750709716"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
              >
                Sună acum
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-950">
                  Evaluare completă
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Examinare clinică, CBCT și scanare digitală pentru o decizie
                  corectă.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-950">
                  Abordare predictibilă
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Accent pe funcție, estetică și stabilitate pe termen lung.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-950">
                  Cazuri selectate
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  În anumite situații, se poate realiza implant cu provizoriu
                  imediat.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-slate-100 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/implant-caz.jpg"
                  alt="Implant dentar Buzău - caz clinic real"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="border-t border-slate-200 bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Caz clinic real
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                      Implant dentar imediat în zona frontală
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Planificare digitală, ghid chirurgical și dinte provizoriu
                      în aceeași ședință, în cazurile potrivite.
                    </p>
                  </div>

                  <div className="shrink-0 rounded-2xl bg-slate-950 px-4 py-3 text-right text-white shadow-sm">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                      Clinica Dr. Miu
                    </p>
                    <p className="mt-1 text-sm font-medium">Buzău</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/caz-clinic-fractura-incisiv-central"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                  >
                    Vezi cazul clinic complet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-base font-semibold text-slate-950">
              Planificare 3D
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Analiza volumului osos și a poziției ideale a implantului înainte
              de tratament.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-base font-semibold text-slate-950">
              Estetică atent planificată
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              În zona frontală, poziționarea corectă influențează direct
              aspectul final al zâmbetului.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-base font-semibold text-slate-950">
              Confort pentru pacient
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              În anumite cazuri, tratamentul poate include și un dinte
              provizoriu imediat.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Despre tratament
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Când și de ce poate fi recomandat un implant dentar
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Implantul dentar poate fi recomandat atunci când un dinte nu mai
              poate fi salvat sau atunci când dintele lipsește deja. Este o
              soluție stabilă și modernă pentru refacerea funcției masticatorii
              și a aspectului natural al zâmbetului.
            </p>

            <p>
              Fiecare caz trebuie analizat individual. Volumul osos, starea
              gingiei, poziția dintelui lipsă și obiectivele pacientului
              influențează planul de tratament.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Ce presupune tratamentul cu implant dentar
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-base font-semibold text-slate-950">
                1. Consultația și investigațiile
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Tratamentul începe cu evaluarea clinică, imagistică și, când
                este necesar, cu scanare digitală. Aceste etape ne ajută să
                alegem soluția corectă și predictibilă.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-base font-semibold text-slate-950">
                2. Planificarea inserării implantului
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Poziția implantului este stabilită astfel încât să permită atât
                o funcție corectă, cât și un rezultat estetic armonios.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-base font-semibold text-slate-950">
                3. Inserarea implantului
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Intervenția se desfășoară conform planului stabilit. În anumite
                situații, se poate discuta și varianta unui implant imediat.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-base font-semibold text-slate-950">
                4. Etapa protetică
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                După perioada de vindecare, implantul este restaurat astfel încât
                rezultatul final să fie funcțional, stabil și cât mai natural.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Avantajele implantului dentar
          </h2>

          <ul className="mt-6 grid gap-4 text-base leading-8 text-slate-700 md:grid-cols-2">
            <li>• Înlocuirea stabilă a unui dinte lipsă</li>
            <li>• Refacerea masticației și a confortului zilnic</li>
            <li>• Menținerea unui aspect natural al zâmbetului</li>
            <li>• Protejarea dinților vecini, fără șlefuirea lor</li>
            <li>• Soluție predictibilă pe termen lung</li>
            <li>• Posibilitatea unei abordări digitale în cazurile potrivite</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Rezultate reale – implant dentar imediat
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-700">
            În anumite situații, implantul dentar poate fi inserat imediat după
            extracție, iar pacientul poate beneficia de un dinte provizoriu în
            aceeași zi.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-700">
            Vezi mai jos un caz real tratat în clinica noastră, unde am folosit
            scanare digitală, planificare 3D și ghid chirurgical pentru
            poziționarea exactă a implantului.
          </p>

          <div className="mt-6">
            <Link
              href="/caz-clinic-fractura-incisiv-central"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
            >
              Vezi cazul clinic complet
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:pb-20">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white md:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Cauți o soluție de implant dentar în Buzău?
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Programează o consultație la Clinica Dr. Miu pentru evaluare
            clinică, investigații și un plan de tratament adaptat situației
            tale.
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
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Sună acum
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
