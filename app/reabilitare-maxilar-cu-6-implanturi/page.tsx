import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Reabilitare maxilar cu 6 implanturi dentare în Buzău | Caz clinic | Clinica Dr. Miu",
  description:
    "Caz clinic la Clinica Dr. Miu din Buzău: pacient cu lucrare protetică fixă veche și probleme funcționale, tratat prin reabilitare maxilară cu 6 implanturi și viitoare lucrare fixă.",
  alternates: {
    canonical:
      "https://www.clinicadrmiu.ro/reabilitare-maxilar-cu-6-implanturi",
  },
  openGraph: {
    title:
      "Reabilitare maxilar cu 6 implanturi dentare în Buzău | Caz clinic",
    description:
      "Evaluare CBCT, planificare atentă și tratament de reabilitare completă a maxilarului cu 6 implanturi dentare.",
    url: "https://www.clinicadrmiu.ro/reabilitare-maxilar-cu-6-implanturi",
    siteName: "Clinica Dr. Miu",
    locale: "ro_RO",
    type: "article",
    images: [
      {
        url: "https://www.clinicadrmiu.ro/caz-maxilar-1.jpg",
        width: 1400,
        height: 1000,
        alt: "Reabilitare maxilar cu 6 implanturi dentare la Clinica Dr. Miu",
      },
    ],
  },
};

export default function ReabilitareMaxilarPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Reabilitare maxilar cu 6 implanturi dentare în Buzău",
    description:
      "Caz clinic realizat la Clinica Dr. Miu: pacient cu lucrare protetică fixă veche, evaluat imagistic și tratat prin inserarea a 6 implanturi maxilare în vederea unei lucrări fixe.",
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
      "https://www.clinicadrmiu.ro/reabilitare-maxilar-cu-6-implanturi",
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
              Caz clinic real · Reabilitare maxilară · 6 implanturi dentare
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Reabilitare completă a maxilarului cu 6 implanturi dentare
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Pacientul s-a prezentat în clinica noastră pentru reabilitarea
              maxilarului superior, acuzând probleme la nivelul unei lucrări
              protetice fixe vechi, cu afectare funcțională și estetică.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              După evaluarea clinică și computer tomograf, s-a stabilit planul
              de tratament: inserarea a 6 implanturi maxilare și realizarea unei
              lucrări fixe, pentru o reabilitare stabilă și predictibilă.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Programează o consultație
              </Link>

              <Link
                href="/all-on-x-buzau"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
              >
                Vezi și soluția All-on-X
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-slate-100 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/caz-maxilar-1.jpg"
                  alt="Reabilitare maxilar cu 6 implanturi dentare"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="border-t border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Clinica Dr. Miu · Buzău
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  Reabilitare fixă planificată pe 6 implanturi
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Soluție indicată pacienților care au nevoie de stabilitate,
                  funcție corectă și o reconstrucție protetică mai predictibilă
                  a maxilarului.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-base font-semibold text-slate-950">
              Evaluare imagistică
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Computer tomograf pentru analiza volumului osos și a pozițiilor
              ideale de inserare.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-base font-semibold text-slate-950">
              Reabilitare stabilă
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Plan orientat către o lucrare fixă, cu confort crescut și sprijin
              predictibil pe implanturi.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-base font-semibold text-slate-950">
              Caz complex
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Potrivit pentru pacienți cu lucrări vechi compromise sau dinți cu
              prognostic nefavorabil.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/caz-maxilar-2.jpg"
                alt="Situația inițială a pacientului înainte de reabilitarea maxilarului"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Situația inițială
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                Pacientul s-a prezentat cu o lucrare protetică fixă veche la
                nivelul maxilarului superior, care genera probleme funcționale,
                igienice și estetice.
              </p>

              <p>
                Examinarea clinică a fost completată de un computer tomograf,
                necesar pentru analiza atentă a volumului osos și pentru alegerea
                unei soluții moderne de reabilitare.
              </p>

              <p>
                După evaluarea completă, s-a decis inserarea a 6 implanturi
                maxilare, care să susțină o viitoare lucrare fixă.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Plan de tratament
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-950">
                1. Evaluare clinică și CBCT
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Analiza statusului actual și a volumului osos pentru stabilirea
                unei soluții protetice fixe pe implanturi.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-950">
                2. Îndepărtarea lucrării vechi
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Etapă necesară pentru igienizare, reevaluare și pregătirea
                câmpului protetic și chirurgical.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-950">
                3. Inserarea a 6 implanturi maxilare
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Implanturile creează baza biologică pentru o reabilitare fixă,
                stabilă și pe termen lung.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-950">
                4. Realizarea lucrării fixe
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Etapa finală urmărește refacerea esteticii, funcției și
                confortului pacientului în viața de zi cu zi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            De ce este importantă o astfel de reabilitare?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              Când o lucrare protetică veche nu mai oferă stabilitate, igienizare
              corectă și confort, reabilitarea completă a maxilarului poate fi
              soluția care schimbă atât funcția masticatorie, cât și calitatea
              vieții pacientului.
            </p>

            <p>
              Sprijinul pe implanturi permite o abordare modernă și mai
              predictibilă, în special în cazurile complexe, unde simpla
              refacere a lucrării vechi nu mai este suficientă.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Legătura cu tratamentele All-on-X
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              În anumite cazuri, reabilitările extinse ale maxilarului pot fi
              corelate cu conceptele moderne de tip <strong>All-on-X</strong>,
              atunci când situația clinică o permite și planul protetic o
              recomandă.
            </p>

            <p>
              Dacă vrei să înțelegi mai bine când este indicată o lucrare fixă
              pe un număr redus de implanturi și când este nevoie de o abordare
              diferită, poți consulta și pagina noastră dedicată tratamentului
              All-on-X.
            </p>

            <div className="pt-2">
              <Link
                href="/all-on-x-buzau"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-white"
              >
                Vezi pagina All-on-X
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:pb-20">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white md:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ai o lucrare veche pe maxilar care îți creează probleme?
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Programează o consultație la Clinica Dr. Miu din Buzău pentru
            evaluare clinică, investigații și un plan personalizat de
            reabilitare pe implanturi.
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
