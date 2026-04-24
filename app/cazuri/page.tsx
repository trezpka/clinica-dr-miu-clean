import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cazuri clinice | Implant dentar și chirurgie | Clinica Dr. Miu Buzău",
  description:
    "Vezi cazuri clinice reale tratate la Clinica Dr. Miu din Buzău: implant dentar imediat, chirurgie dento-alveolară și reabilitare orală cu planificare digitală.",
  alternates: {
    canonical: "https://www.clinicadrmiu.ro/cazuri",
  },
  openGraph: {
    title: "Cazuri clinice reale | Clinica Dr. Miu Buzău",
    description:
      "Galerie cu cazuri clinice de implantologie și chirurgie dento-alveolară tratate la Clinica Dr. Miu.",
    url: "https://www.clinicadrmiu.ro/cazuri",
    siteName: "Clinica Dr. Miu",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://www.clinicadrmiu.ro/copie3.jpeg",
        width: 1200,
        height: 900,
        alt: "Caz clinic real - extracție incisivi inferiori și implant imediat",
      },
    ],
  },
};

const featuredCases = [
  {
    title: "Extracție 4 incisivi inferiori, 2 implanturi cu ghid chirurgical și 4 coroane temporare în aceeași ședință",
    description:
      "Pacientul s-a prezentat pentru extracția celor 4 incisivi inferiori cu mobilitate. După analiza CT, s-a decis extracția, inserarea a 2 implanturi cu ghid chirurgical și aplicarea a 4 coroane temporare în aceeași ședință.",
    href: "/reabilitare-incisivi-inferiori-implant",
    image: "/copie3.jpeg",
    badge: "Caz nou · Implant imediat",
  },
  {
    title: "Fractură incisiv central — implant dentar imediat",
    description:
      "Extracție, inserare implant și provizoriu în aceeași ședință, cu planificare digitală și ghid chirurgical.",
    href: "/caz-clinic-fractura-incisiv-central",
    image: "/caz-fractura-incisiv-1.jpg",
    badge: "Caz clinic complet",
  },
  {
    title: "Reabilitare maxilar — caz cu multiple implanturi",
    description:
      "Exemplu de reabilitare orală extinsă, cu accent pe evaluare corectă și rezultate stabile pe termen lung.",
    href: "/reabilitare-maxilar-cu-6-implanturi",
    image: "/caz-maxilar-1.jpg",
    badge: "Reabilitare extinsă",
  },
] as const;

const gallery = [
  {
    src: "/copie1.jpeg",
    alt: "Starea inițială - incisivi inferiori cu mobilitate avansată",
    caption: "Incisivi inferiori — stare inițială",
  },
  {
    src: "/copie2.jpeg",
    alt: "Inserarea implanturilor cu ghid chirurgical",
    caption: "Inserare implanturi cu ghid chirurgical",
  },
  {
    src: "/copie3.jpeg",
    alt: "Rezultat final cu coroane temporare în aceeași ședință",
    caption: "Coroane temporare — aceeași ședință",
  },
  {
    src: "/caz-fractura-incisiv-1.jpg",
    alt: "Situație inițială înainte de implant dentar imediat",
    caption: "Înainte de tratament",
  },
  {
    src: "/caz-fractura-incisiv-2.jpg",
    alt: "Planificare digitală și ghid chirurgical",
    caption: "Planificare digitală",
  },
  {
    src: "/caz-fractura-incisiv-3.jpg",
    alt: "Rezultat imediat după inserarea implantului dentar",
    caption: "Rezultat imediat",
  },
  {
    src: "/caz-maxilar-1.jpg",
    alt: "Caz clinic maxilar - etapă de tratament",
    caption: "Caz maxilar — etapă inițială",
  },
  {
    src: "/caz-maxilar-2.jpg",
    alt: "Caz clinic maxilar - evoluție post-tratament",
    caption: "Caz maxilar — evoluție",
  },
  {
    src: "/implant-caz.jpg",
    alt: "Medic specialist în clinică, prezentare caz implant dentar",
    caption: "Caz documentat în clinică",
  },
] as const;

export default function CazuriPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Cazuri clinice",
    description:
      "Colecție de cazuri clinice reale cu tratamente de implantologie și chirurgie dento-alveolară.",
    url: "https://www.clinicadrmiu.ro/cazuri",
  };

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Cazuri clinice
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Rezultate reale obținute prin evaluare corectă și planificare atentă
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Fiecare caz este diferit. În această pagină găsești exemple reale din
            activitatea clinicii, cu accent pe decizie medicală corectă,
            predictibilitate și confortul pacientului.
          </p>
        </div>
      </section>

      {/* CAZURI FEATURED */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCases.map((item) => (
            <article
              key={item.href}
              className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-4 p-6">
                <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {item.badge}
                </span>
                <h2 className="text-xl font-semibold tracking-tight text-slate-950 leading-snug">
                  {item.title}
                </h2>
                <p className="text-sm leading-7 text-slate-600">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-700"
                >
                  Vezi cazul →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALERIE */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
          Galerie imagini din cazuri reale
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          Imaginile sunt din cazuri tratate în clinică și ilustrează etape de
          diagnostic, planificare și rezultat.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((img) => (
            <figure
              key={img.src + img.caption}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-slate-600">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
