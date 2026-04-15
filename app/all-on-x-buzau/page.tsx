import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All-on-X în Buzău | Lucrare fixă pe implanturi | Clinica Dr. Miu",
  description:
    "Tratament All-on-X în Buzău la Clinica Dr. Miu. Soluție fixă pe implanturi pentru reabilitări extinse, planificată digital și adaptată fiecărui pacient.",
  alternates: {
    canonical: "https://www.clinicadrmiu.ro/all-on-x-buzau",
  },
  openGraph: {
    title: "All-on-X în Buzău | Lucrare fixă pe implanturi",
    description:
      "Află când poate fi recomandată o reabilitare fixă de tip All-on-X și cum este planificat tratamentul la Clinica Dr. Miu.",
    url: "https://www.clinicadrmiu.ro/all-on-x-buzau",
    siteName: "Clinica Dr. Miu",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://www.clinicadrmiu.ro/all-on-x-hero.jpg",
        width: 1400,
        height: 1000,
        alt: "All-on-X Buzău - reabilitare fixă pe implanturi",
      },
    ],
  },
};

export default function AllOnXBuzauPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "All-on-X în Buzău",
    url: "https://www.clinicadrmiu.ro/all-on-x-buzau",
    description:
      "Pagină dedicată tratamentului All-on-X la Clinica Dr. Miu din Buzău.",
    mainEntity: {
      "@type": "MedicalProcedure",
      name: "Reabilitare fixă pe implanturi de tip All-on-X",
    },
    provider: {
      "@type": "Dentist",
      name: "Clinica Dr. Miu",
      telephone: "+40 750 709 716",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Str. Penteleu, 16",
        addressLocality: "Buzău",
        addressCountry: "RO",
      },
    },
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
              All-on-X Buzău · Lucrare fixă pe implanturi · Planificare atentă
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              All-on-X în Buzău — reabilitare fixă pe implanturi pentru cazuri
              extinse
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              All-on-X este un concept modern de reabilitare fixă pe implanturi,
              recomandat în anumite situații în care pacientul are nevoie de o
              reconstrucție extinsă a arcadei.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              La Clinica Dr. Miu, fiecare caz este analizat individual, pe baza
              examenului clinic, a investigațiilor imagistice și a obiectivelor
              funcționale și estetice ale pacientului.
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
                  Examinare clinică, CBCT și analiză atentă a volumului osos.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-950">
                  Soluție fixă
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tratament gândit pentru stabilitate, confort și funcție.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-950">
                  Cazuri selectate
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Indicația depinde de anatomie, starea locală și planul
                  protetic.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-slate-100 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/all-on-x-hero.jpg"
                  alt="All-on-X Buzău - reabilitare fixă pe implanturi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="border-t border-slate-200 bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Reabilitare extinsă
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                      Soluție modernă pentru arcadă fixă
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Planificare atentă și abordare personalizată pentru
                      pacienții care au nevoie de o reabilitare mai amplă.
                    </p>
                  </div>

                  <div className="shrink-0 rounded-2xl bg-slate-950 px-4 py-3 text-right text-white shadow-sm">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                      Clinica Dr. Miu
                    </p>
                    <p className="mt-1 text-sm font-medium">Buzău</p>
                  </div>
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
              Analiza atentă a osului și a punctelor de sprijin înaintea
              tratamentului.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-base font-semibold text-slate-950">
              Confort și funcție
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Obiectivul este o lucrare stabilă, funcțională și ușor de integrat
              în viața zilnică.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-base font-semibold text-slate-950">
              Abordare personalizată
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Nu toate cazurile au aceeași indicație; tratamentul se adaptează
              situației reale a pacientului.
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
              Ce înseamnă All-on-X
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              All-on-X este un concept de reabilitare fixă pe implanturi, folosit
              în anumite cazuri pentru reconstrucția unei arcade dentare atunci
              când dinții existenți nu mai pot fi păstrați sau când situația
              protetică este compromisă.
            </p>

            <p>
              Numărul exact de implanturi și tipul lucrării finale sunt stabilite
              doar după evaluare clinică și imagistică. Scopul este obținerea
              unui echilibru între stabilitate, funcție, estetică și
              predictibilitate.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Când poate fi luată în calcul această soluție
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              All-on-X poate fi discutat în cazurile în care pacientul are
              pierderi dentare extinse, dinți cu prognostic nefavorabil, lucrări
              vechi compromise sau nevoie de o reabilitare mai amplă a unei
              arcade.
            </p>

            <p>
              Indicația nu este identică pentru toți pacienții. Volumul osos,
              statusul gingival, relațiile ocluzale și obiectivele pacientului
              influențează decizia terapeutică și planul protetic final.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Etapele generale ale tratamentului
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-950">
                1. Consultația și investigațiile
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Evaluare clinică, CBCT și analiză a situației osoase și
                protetice.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-950">
                2. Stabilirea planului protetic
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Alegerea numărului de implanturi și a tipului de reabilitare
                fixă potrivite cazului.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-950">
                3. Inserarea implanturilor
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Etapă chirurgicală realizată pe baza planificării stabilite
                anterior.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-950">
                4. Lucrarea provizorie / finală
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                În funcție de caz, se stabilește protocolul de restaurare și
                etapele protetice ulterioare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Avantajele unei reabilitări fixe pe implanturi
          </h2>

          <ul className="mt-6 grid gap-4 text-base leading-8 text-slate-700 md:grid-cols-2">
            <li>• Stabilitate mai bună comparativ cu soluțiile mobile</li>
            <li>• Confort crescut în masticație și vorbire</li>
            <li>• Estetică mai apropiată de aspectul natural</li>
            <li>• Plan de tratament clar și predictibil</li>
            <li>• Posibilitatea unei reconstrucții extinse a arcadei</li>
            <li>• Integrare mai bună în viața socială și profesională</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Caz clinic asociat: reabilitare maxilar cu 6 implanturi
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-700">
            Nu toate reabilitările extinse se încadrează în aceeași indicație
            protetică. Vezi și un caz clinic real în care planul de tratament a
            inclus inserarea a 6 implanturi maxilare pentru susținerea unei
            lucrări fixe.
          </p>

          <div className="mt-6">
            <Link
              href="/reabilitare-maxilar-cu-6-implanturi"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-white"
            >
              Vezi cazul clinic complet
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:pb-20">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white md:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Vrei să afli dacă All-on-X este potrivit pentru cazul tău?
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Programează o consultație la Clinica Dr. Miu din Buzău pentru
            evaluare clinică, investigații imagistice și un plan de tratament
            personalizat.
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
