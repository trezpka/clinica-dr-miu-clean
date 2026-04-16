import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinica Dr. Miu | Implant dentar în Buzău",
  description:
    "Clinica Dr. Miu din Buzău oferă tratamente moderne de implant dentar, implantologie, sinus lift, adiție osoasă, All-on-X și chirurgie dento-alveolară.",
  alternates: {
    canonical: "https://clinicadrmiu.ro",
  },
  openGraph: {
    title: "Clinica Dr. Miu | Implant dentar în Buzău",
    description:
      "Tratament modern de implant dentar în Buzău, planificare digitală și reabilitări fixe pe implanturi.",
    url: "https://clinicadrmiu.ro",
    siteName: "Clinica Dr. Miu",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://clinicadrmiu.ro/dr-miu-portrait-v2.jpg",
        width: 1200,
        height: 1600,
        alt: "Clinica Dr. Miu",
      },
    ],
  },
};

const services = [
  {
    title: "Implant dentar Buzău",
    description:
      "Soluție modernă pentru înlocuirea dinților lipsă, cu accent pe funcție, estetică și predictibilitate.",
    href: "/implant-dentar-buzau",
  },
  {
    title: "Implantologie Buzău",
    description:
      "Planificare atentă și tratamente adaptate fiecărui pacient, pe baza evaluării clinice și imagistice.",
    href: "/implantologie-buzau",
  },
  {
    title: "Sinus lift Buzău",
    description:
      "Procedură indicată atunci când este necesară creșterea volumului osos pentru inserarea implanturilor.",
    href: "/sinus-lift-buzau",
  },
  {
    title: "Adiție osoasă Buzău",
    description:
      "Reconstrucție osoasă în cazurile în care volumul osos este insuficient pentru tratamentul implantar.",
    href: "/aditie-osoasa-buzau",
  },
  {
    title: "All-on-X Buzău",
    description:
      "Reabilitare fixă pe implanturi pentru cazurile extinse, atent analizate și planificate individual.",
    href: "/all-on-x-buzau",
  },
  {
    title: "Chirurgie dento-alveolară",
    description:
      "Tratament chirurgical modern pentru extracții complexe și alte proceduri necesare planului de reabilitare.",
    href: "/chirurgie-dento-alveolara-buzau",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Clinica Dr. Miu",
    url: "https://clinicadrmiu.ro",
    telephone: "+40 750 709 716",
    email: "contact@clinicadrmiu.ro",
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,245,249,0.95),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(226,232,240,0.8),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 shadow-sm sm:px-4 sm:text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-slate-900" />
              <span className="truncate">
                Implant dentar Buzău · Implantologie · Chirurgie
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
              Implant dentar în Buzău — tratamente moderne, planificate atent
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              La Clinica Dr. Miu, tratamentele de implant dentar și reabilitare
              orală sunt realizate pe baza unei evaluări clinice complete, a
              investigațiilor imagistice și a unei planificări orientate spre
              funcție, estetică și predictibilitate.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Fie că este vorba despre un singur dinte lipsă sau despre o
              reabilitare extinsă, fiecare caz este analizat individual pentru a
              alege soluția corectă.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white transition hover:bg-slate-800 sm:w-auto"
              >
                Programează o consultație
              </Link>

              <a
                href="tel:+40750709716"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-medium text-slate-900 transition hover:bg-slate-50 sm:w-auto"
              >
                Sună acum
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-950">
                  Evaluare completă
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Examinare clinică, CBCT și scanare digitală pentru un plan
                  corect.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-950">
                  Planificare predictibilă
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Accent pe stabilitate, funcție și integrare estetică.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2 xl:col-span-1">
                <p className="text-sm font-medium text-slate-950">
                  Cazuri simple și complexe
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  De la implant unic până la reabilitări extinse pe implanturi.
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-none">
            <div className="absolute -inset-3 rounded-[2rem] bg-slate-100 blur-2xl sm:-inset-4" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:rounded-[2rem]">
              <div className="relative aspect-[4/4.6] sm:aspect-[4/5]">
                <Image
                  src="/dr-miu-portrait-v2.jpg"
                  alt="Dr. Miu - Clinica Dr. Miu"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 45vw"
                />
              </div>

              <div className="border-t border-slate-200 bg-white p-4 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Clinica Dr. Miu
                    </p>
                    <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                      Implantologie și chirurgie dento-alveolară
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Abordare modernă, bazată pe evaluare atentă, tehnologie
                      digitală și soluții adaptate fiecărui pacient.
                    </p>
                  </div>

                  <div className="w-fit shrink-0 rounded-2xl bg-slate-950 px-4 py-3 text-left text-white shadow-sm sm:text-right">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                      Buzău
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      Clinica Dr. Miu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <p className="text-base font-semibold text-slate-950">
              Tehnologie modernă
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              CBCT, scanare intraorală și planificare digitală pentru cazurile
              care necesită precizie și predictibilitate.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <p className="text-base font-semibold text-slate-950">
              Soluții orientate pe pacient
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Obiectivul este tratamentul corect, nu doar intervenția în sine:
              confort, funcție și un zâmbet armonios.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <p className="text-base font-semibold text-slate-950">
              Reabilitări extinse
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Pentru cazurile complexe, planul de tratament poate include
              implanturi multiple și lucrări fixe pe implanturi.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Servicii
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Tratemente gândite pentru stabilitate, estetică și funcție
            </h2>
          </div>

          <div className="space-y-4 text-base leading-7 text-slate-600 sm:space-y-5 sm:leading-8">
            <p>
              Fiecare tratament este ales în funcție de situația clinică reală,
              de volumul osos existent și de obiectivele pacientului.
            </p>

            <p>
              De la implanturi dentare unice până la reabilitări extinse de tip
              All-on-X, abordarea noastră urmărește rezultate predictibile și
              confort pe termen lung.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
              <div className="mt-5 text-sm font-medium text-slate-900">
                Vezi pagina →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Cazuri clinice reale
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Tratament modern, rezultate reale
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:leading-8">
            Vezi modul în care abordăm cazurile clinice, de la implant dentar
            imediat în zona frontală până la reabilitări extinse ale maxilarului.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Link
            href="/caz-clinic-fractura-incisiv-central"
            className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:rounded-[2rem]"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src="/caz-fractura-incisiv-1.jpg"
                alt="Caz clinic fractură incisiv central și implant imediat"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Caz clinic
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                Implant dentar imediat după fractură de incisiv central
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Extracție, inserare implant și dinte provizoriu în aceeași
                ședință, cu planificare digitală și ghid chirurgical.
              </p>
              <div className="mt-5 text-sm font-medium text-slate-900">
                Vezi cazul clinic →
              </div>
            </div>
          </Link>

          <Link
            href="/reabilitare-maxilar-cu-6-implanturi"
            className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:rounded-[2rem]"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src="/caz-maxilar-1.jpg"
                alt="Caz clinic reabilitare maxilar cu 6 implanturi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Caz clinic
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                Reabilitare maxilar cu 6 implanturi dentare
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Pacient cu lucrare veche compromisă, evaluat imagistic și tratat
                printr-un plan de reabilitare fixă pe 6 implanturi maxilare.
              </p>
              <div className="mt-5 text-sm font-medium text-slate-900">
                Vezi cazul clinic →
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 sm:rounded-[2rem] sm:p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Reabilitări extinse
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                All-on-X și soluții fixe pe implanturi
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:leading-8">
                În anumite cazuri, pacienții cu pierderi dentare extinse sau cu
                lucrări vechi compromise pot beneficia de o reabilitare fixă pe
                implanturi. Indicația este stabilită după o evaluare atentă și
                nu este identică pentru toți pacienții.
              </p>
              <div className="mt-6">
                <Link
                  href="/all-on-x-buzau"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white transition hover:bg-slate-800 sm:w-auto"
                >
                  Vezi pagina All-on-X
                </Link>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm font-semibold text-slate-950">
                Ce analizăm înainte de tratament
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>• Volumul osos disponibil</li>
                <li>• Situația protetică existentă</li>
                <li>• Statusul gingival și igiena</li>
                <li>• Funcția masticatorie și ocluzia</li>
                <li>• Obiectivele funcționale și estetice ale pacientului</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 pb-14 sm:px-6 sm:py-10 lg:px-8 lg:pb-20">
        <div className="rounded-[1.75rem] bg-slate-950 px-5 py-8 text-white sm:rounded-[2rem] sm:px-8 sm:py-10 md:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Vrei să afli ce soluție este potrivită pentru cazul tău?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:leading-8">
                Programează o consultație la Clinica Dr. Miu din Buzău pentru
                evaluare clinică, investigații imagistice și un plan de
                tratament personalizat.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-slate-950 transition hover:bg-slate-100 sm:w-auto"
              >
                Programează o consultație
              </Link>

              <a
                href="tel:+40750709716"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
              >
                Sună acum
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
