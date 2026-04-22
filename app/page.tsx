import Image from "next/image";

const reviews = [
  {
    name: "Andrei C.",
    text: "Totul a fost clar explicat, fără grabă. Intervenția a decurs foarte bine și recuperarea a fost mai ușoară decât mă așteptam.",
  },
  {
    name: "Elena M.",
    text: "Mi-a plăcut că tratamentul a fost planificat digital și am știut exact pașii. Rezultatul este natural și stabil.",
  },
  {
    name: "Mihai D.",
    text: "Am venit pentru o situație complexă și am primit soluție completă. Echipă atentă, comunicare excelentă.",
  },
];

const services = [
  "Implant dentar imediat",
  "Implantologie avansată",
  "Chirurgie dento-alveolară",
  "Sinus lift",
  "Reabilitare maxilară",
  "Consultație + planificare digitală",
];

const faqs = [
  {
    q: "Este dureroasă intervenția de implant dentar?",
    a: "Procedura se realizează cu anestezie locală, iar disconfortul post-operator este de regulă moderat și controlabil.",
  },
  {
    q: "Cât durează tratamentul complet?",
    a: "Durata diferă în funcție de caz. La consultație primești un plan clar cu etape și intervale realiste.",
  },
  {
    q: "Se poate face implant imediat după extracție?",
    a: "În anumite situații, da. Decizia se ia pe baza evaluării clinice și a investigațiilor imagistice.",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-blue-700">Clinica Dr. Miu · Buzău</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-6xl">
            Implant dentar în Buzău — fără durere, cu planificare atentă și rezultate stabile
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Tratament modern pentru înlocuirea dinților lipsă, bazat pe evaluare completă, imagistică
            și o abordare predictibilă pentru confort și estetică.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#programare"
              className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Programează consultația
            </a>
            <a
              href="tel:+40750709716"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Sună acum
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Image
            src="/dr-miu-portrait-v2.jpg"
            alt="Dr. Miu în clinică"
            width={700}
            height={860}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      <section id="despre-medic" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold">Dr. Miu</h2>
        <p className="mt-4 max-w-4xl text-slate-600">
          Practică orientată spre diagnostic corect, planificare digitală și tratament personalizat.
          Accent pe soluții funcționale și estetice, cu monitorizare atentă pe termen lung.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold">Recenzii</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-slate-700">“{review.text}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="cazuri" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold">Cazuri clinice</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <figure className="rounded-2xl border border-slate-200 bg-white p-3">
            <Image
              src="/caz-maxilar-2.jpg"
              alt="Situație inițială caz clinic"
              width={900}
              height={700}
              className="h-auto w-full rounded-xl"
            />
            <figcaption className="mt-2 text-sm text-slate-600">Înainte de tratament</figcaption>
          </figure>
          <figure className="rounded-2xl border border-slate-200 bg-white p-3">
            <Image
              src="/caz-maxilar-1.jpg"
              alt="Rezultat după tratament"
              width={900}
              height={700}
              className="h-auto w-full rounded-xl"
            />
            <figcaption className="mt-2 text-sm text-slate-600">După tratament</figcaption>
          </figure>
        </div>
      </section>

      <section id="servicii" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold">Servicii</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-2 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="programare" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-3 text-slate-600">
            Pentru evaluare și plan de tratament personalizat, ne poți suna sau ne poți scrie.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+40750709716"
              className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              📞 0750 709 716
            </a>
            <a
              href="mailto:contact@clinicadrmiu.ro"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              contact@clinicadrmiu.ro
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
