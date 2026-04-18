import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Star, MapPin, Award, ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Implant Dentar Buzău | Dr. Cosmin Miu | Soluții Moderne și Predictibile",
  description:
    "Cauți implant dentar în Buzău? Dr. Cosmin Miu oferă tratamente cu planificare digitală, ghid chirurgical și estetică de excepție. Peste 500 de implanturi inserate cu succes.",
  alternates: {
    canonical: "https://www.clinicadrmiu.ro/implant-dentar-buzau",
  },
  openGraph: {
    title: "Implant Dentar Buzău | Clinica Dr. Miu",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
    },
  };

  const reviews = [
    {
      name: "Codruta Sofia Ionita",
      text: "Am ales Clinica Dr. Miu pentru un implant dentar și nu am regretat nicio clipă. Dr. Miu este un medic excepțional — profesionist, atent și răbdător.",
    },
    {
      name: "Adrian Chirita",
      text: "Recomand cu toată încrederea! Am venit pentru un implant dentar și am fost impresionat de profesionalismul Dr. Miu. Intervenția a decurs fără probleme.",
    },
    {
        name: "Roxana Clinciu",
        text: "O clinica foarte curată, echipamente noi și o experiență fara durere. Dr Miu este un profesionist care îți explică tot ce ai nevoie sa știi.",
    }
  ];

  const steps = [
    { title: "Consultație & CBCT", desc: "Evaluăm osul prin tomografie computerizată 3D pentru o precizie maximă." },
    { title: "Planificare Digitală", desc: "Simulăm poziția implantului pe computer înainte de intervenție." },
    { title: "Ghid Chirurgical", desc: "Inserăm implantul printr-un ghid printat 3D pentru eroare zero." },
    { title: "Restaurare Finală", desc: "Fixăm coroana definitivă care arată și se simte ca un dinte natural." },
  ];

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                Specialist în Implantologie & Chirurgie
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                Implant dentar în Buzău — <span className="text-slate-600">Planificare digitală, rezultat predictibil</span>
              </h1>
              <p className="mt-8 text-lg leading-8 text-slate-600">
                La Clinica Dr. Miu, nu lăsăm nimic la voia întâmplării. Folosim tehnologie de ultimă oră pentru ca tu să primești un zâmbet estetic, funcțional și durabil. <strong>Fără durere, fără compromisuri.</strong>
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all">
                  Programează o consultație
                </Link>
                <a href="tel:+40750709716" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 hover:bg-slate-50 transition-all">
                  <Phone className="h-4 w-4" /> Sună acum
                </a>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-slate-400" /> Peste 500 implanturi
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-slate-400" /> Tehnologie 3D
                </div>
              </div>
            </div>

            {/* Imaginea ta cu Dr. Miu (bazată pe captura ta) */}
            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl">
                <Image
                  src="/implant-caz.jpg" // Folosim imaginea din GitHub-ul tău
                  alt="Dr. Cosmin Miu în cabinet"
                  width={600}
                  height={800}
                  className="w-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-slate-950/90 p-6 text-white backdrop-blur-sm">
                   <p className="text-xs font-medium uppercase tracking-widest text-slate-400">Caz Clinic Real</p>
                   <p className="mt-1 text-lg font-semibold">Implant Dentar în Zona Frontală</p>
                   <Link href="/caz-clinic-fractura-incisiv-central" className="mt-3 inline-block text-sm font-medium text-slate-300 underline underline-offset-4 hover:text-white">
                     Vezi detaliile cazului complete →
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALORI & BENEFICII ── */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-slate-600">De ce să ne alegi?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Standardul de excelență în implantologie</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: "Planificare pe computer",
                  desc: "Utilizăm CBCT și scanări intraorale pentru a vizualiza viitorul implant în 3D, înainte de a atinge dintele.",
                  icon: ShieldCheck,
                },
                {
                  title: "Ghid Chirurgical 3D",
                  desc: "Garanția unei inserări precise. Ghidul elimină eroarea umană și reduce timpul de intervenție.",
                  icon: MapPin,
                },
                {
                  title: "Estetică Naturală",
                  desc: "Nu doar punem un implant, reconstruim un zâmbet care se armonizează perfect cu restul dinților.",
                  icon: Award,
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-slate-950">
                    <item.icon className="h-6 w-6 text-slate-600" />
                    {item.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">{item.desc}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── ETAPELE TRATAMENTULUI ── */}
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Călătoria către noul tău zâmbet</h2>
              <p className="mt-6 text-lg text-slate-600">
                Fiecare pacient este unic. La Clinica Dr. Miu, urmăm un protocol strict de 4 etape pentru a asigura succesul pe termen lung al implantului tău.
              </p>
              <div className="mt-10 space-y-8">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-950">{step.title}</h4>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-slate-200">
               <Image 
                src="/clinic-interior.jpg" 
                alt="Cabinet stomatologic modern Buzău" 
                fill 
                className="object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENZII ── */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-950">Ce spun pacienții noștri</h2>
            <div className="mt-4 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="mt-2 text-slate-500 text-sm">Rating 5.0 pe Google Reviews</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                <p className="text-slate-600 italic">"{r.text}"</p>
                <p className="mt-6 font-semibold text-slate-950">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-950">Întrebări frecvente</h2>
          <div className="mt-12 space-y-8">
            <div>
              <h4 className="font-semibold text-slate-950">Cât durează intervenția de inserare a unui implant?</h4>
              <p className="mt-2 text-slate-600">Datorită ghidului chirurgical, etapa chirurgicală durează de cele mai multe ori între 15 și 30 de minute per implant.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-950">Este procedura dureroasă?</h4>
              <p className="mt-2 text-slate-600">Absolut nu. Se lucrează sub anestezie locală profundă, iar majoritatea pacienților noștri declară că nu simt niciun disconfort în timpul sau după intervenție.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-950">Cât costă un implant dentar în Buzău?</h4>
              <p className="mt-2 text-slate-600">Prețul variază în funcție de tipul implantului ales (standard sau premium) și necesitatea adițiilor osoase. Costul corect poate fi stabilit doar în urma unei consultații cu CBCT.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-24">
        <div className="relative isolate overflow-hidden bg-slate-950 px-6 py-24 text-center shadow-2xl rounded-[3rem] sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recuperează-ți zâmbetul și funcția masticatorie astăzi
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Nu lăsa lipsa dinților să îți afecteze sănătatea generală și încrederea în sine. Programează o evaluare digitală.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact" className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 shadow-sm hover:bg-slate-100 transition-all">
              Programează o consultație
            </Link>
            <a href="tel:+40750709716" className="text-sm font-semibold leading-6 text-white hover:text-slate-300">
              Sună la +40 750 709 716 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
