import type { Metadata } from "next";
import { buildMetadata, dentistJsonLd, faqJsonLd } from "@/lib/seo";
import { clinic } from "@/lib/clinic";
import { servicePages } from "@/lib/pages-data";
import { SectionTitle } from "@/components/section-title";

import { BlogList } from "@/components/blog-list";
import { blogPosts } from "@/lib/blog-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, Clock3, Mail, MapPin, Phone, ChevronRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Clinica Dr. Miu | Implant dentar Buzău, implantologie și chirurgie dento-alveolară",
  description:
    "Clinica Dr. Miu din Buzău este specializată în implant dentar, implantologie, chirurgie dento-alveolară, adiție osoasă, sinus lift, grefe gingivale și All-on-X.",
  path: "/",
});

const faq = [
  {
    q: "Când este recomandat un implant dentar?",
    a: "Implantul dentar poate fi recomandat atunci când lipsește unul sau mai mulți dinți și există indicație pentru o soluție fixă, stabilă și funcțională.",
  },
  {
    q: "Este dureroasă intervenția?",
    a: "Intervențiile sunt realizate cu anestezie locală, iar protocolul este gândit pentru confort și control bun al disconfortului post-operator.",
  },
  {
    q: "Se poate face implant dacă nu mai am os?",
    a: "În multe situații, da. Atunci când suportul osos este insuficient, se poate lua în calcul o adiție osoasă sau un sinus lift, în funcție de particularitățile cazului.",
  },
];

export default function HomePage() {
  const dentist = dentistJsonLd(metadata.description as string, "/");
  const faqLd = faqJsonLd(faq);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentist) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.85),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,250,252,1),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <Badge className="mb-6 w-fit bg-white px-4 py-2 text-slate-700 shadow-sm hover:bg-white">
              <BadgeCheck className="mr-2 h-4 w-4" /> Medic specialist · Buzău · Abordare premium
            </Badge>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Implant dentar în Buzău, implantologie și chirurgie dento-alveolară
              <span className="block text-slate-600">la standard premium, cu accent pe siguranță și claritate.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Clinica Dr. Miu este o clinică stomatologică din Buzău axată pe implant dentar, implantologie și tratamentul cazurilor simple sau complexe care pot necesita adiție osoasă, sinus lift, grefe gingivale sau All-on-X.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-7 text-base font-medium text-white transition hover:bg-slate-800">Programează o consultație</a>
              <a href="/implant-dentar-buzau" className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-base font-medium text-slate-900 transition hover:border-slate-950">Vezi serviciile</a>
            </div>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border-slate-200 shadow-xl shadow-slate-200/60">
            <CardContent className="p-0">
              <div className="aspect-[4/5] bg-[linear-gradient(180deg,#f8fafc_0%,#e2e8f0_100%)] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/70 bg-white/70 p-6 backdrop-blur">
                  <div className="flex items-center justify-between text-sm text-slate-500"><span>Fotografie principală</span><span>de înlocuit cu portret profesional</span></div>
                  <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-slate-200 bg-slate-950 text-4xl font-semibold text-white shadow-lg">CM</div>
                  <div className="rounded-2xl bg-slate-950 p-5 text-white"><p className="text-sm uppercase tracking-[0.24em] text-slate-300">Dr. Miu Cosmin</p><p className="mt-2 text-2xl font-semibold">Medic specialist</p><p className="mt-2 text-sm leading-6 text-slate-300">Chirurgie dento-alveolară și implantologie, cu experiență în reabilitări de la cazuri simple la cazuri complexe.</p></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle eyebrow="Servicii principale" title="Implantologie și chirurgie dento-alveolară în Buzău" description="Fiecare serviciu important are propria pagină dedicată pentru claritate și SEO local mai bun." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicePages.map((service) => (
              <Card key={service.path} className="rounded-[1.75rem] border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <h3 className="text-lg font-semibold text-slate-950">{service.shortTitle}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{service.description}</p>
                  <a href={service.path} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-950">
                    Vezi pagina dedicată <ChevronRight className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Blog"
          title="Articole utile pentru pacienți"
          description="Un blog medical bine structurat poate susține SEO local și poate crește încrederea pacienților care caută informații clare înainte de programare."
        />
        <div className="mt-12">
          <BlogList posts={blogPosts} />
        </div>
      </section>

      <section id="contact" className="pb-20 pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="rounded-[2rem] border-slate-200 bg-slate-950 text-white shadow-xl">
              <CardContent className="p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">Programează o consultație la Clinica Dr. Miu</h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">Dacă ești în căutarea unei clinici de implantologie în Buzău sau ai nevoie de o evaluare pentru un implant dentar, te așteptăm pentru stabilirea unui plan corect de tratament.</p>
                <div className="mt-8 space-y-5 text-sm">
                  <div className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-slate-300" /><div><p className="font-medium text-white">Adresă</p><p className="mt-1 leading-7 text-slate-300">{clinic.address}</p></div></div>
                  <div className="flex items-start gap-3"><Phone className="mt-1 h-5 w-5 shrink-0 text-slate-300" /><div><p className="font-medium text-white">Telefon</p><a href={clinic.phoneHref} className="mt-1 block leading-7 text-slate-300 hover:text-white">{clinic.phoneDisplay}</a></div></div>
                  <div className="flex items-start gap-3"><Mail className="mt-1 h-5 w-5 shrink-0 text-slate-300" /><div><p className="font-medium text-white">Email</p><a href={`mailto:${clinic.email}`} className="mt-1 block leading-7 text-slate-300 hover:text-white">{clinic.email}</a></div></div>
                  <div className="flex items-start gap-3"><Clock3 className="mt-1 h-5 w-5 shrink-0 text-slate-300" /><div><p className="font-medium text-white">Program</p><p className="mt-1 leading-7 text-slate-300">{clinic.hours}</p></div></div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-[2rem] border-slate-200 shadow-sm"><CardContent className="p-8 md:p-10"><h3 className="text-2xl font-semibold tracking-tight text-slate-950">Programare rapidă</h3><form className="mt-8 grid gap-4"><input aria-label="Nume" name="name" placeholder="Nume" className="h-12 rounded-xl border border-slate-200 px-4 outline-none transition focus:border-slate-950" /><input aria-label="Telefon" name="phone" placeholder="Telefon" className="h-12 rounded-xl border border-slate-200 px-4 outline-none transition focus:border-slate-950" /><textarea aria-label="Mesaj" name="message" placeholder="Cu ce te putem ajuta?" className="min-h-[140px] rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-950" /><button type="submit" className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-white transition hover:bg-slate-800">Solicită programare</button></form></CardContent></Card>
          </div>
        </div>
      </section>
    </main>
  );
}
