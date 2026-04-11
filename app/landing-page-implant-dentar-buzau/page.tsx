import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { clinic } from "@/lib/clinic";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, MapPin, BadgeCheck, ShieldCheck, Bone, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = buildMetadata({
  title: "Implant dentar Buzău | Consultație rapidă | Clinica Dr. Miu",
  description:
    "Landing page Google Ads pentru implant dentar în Buzău. Evaluare atentă, plan clar și abordare premium la Clinica Dr. Miu.",
  path: "/landing-page-implant-dentar-buzau",
});

const benefits = [
  "Medic specialist chirurgie dento-alveolară și implantologie",
  "Evaluare clară și plan etapizat de tratament",
  "Experiență în cazuri simple și complexe",
  "Soluții complementare: adiție osoasă, sinus lift, All-on-X",
];

const trust = [
  { title: "Implantologie premium", text: "Abordare calmă, clară și orientată spre predictibilitate.", icon: ShieldCheck },
  { title: "Cazuri complexe", text: "Planificare pentru situații care pot necesita etapizare suplimentară.", icon: Bone },
  { title: "Comunicare clară", text: "Explicăm simplu ce este indicat, de ce și care sunt etapele.", icon: Sparkles },
];

export default function LandingPageImplant() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.85),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,250,252,1),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <Badge className="mb-6 w-fit rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm hover:bg-white">
              <BadgeCheck className="mr-2 h-4 w-4" /> Implant dentar Buzău · Google Ads Landing Page
            </Badge>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Implant dentar în Buzău,
              <span className="block text-slate-600">cu evaluare atentă și plan clar de tratament</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              La {clinic.name}, tratamentele de implantologie sunt abordate într-un stil premium, calm și bine planificat, pentru pacienții care caută o soluție serioasă, nu doar o ofertă rapidă.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-7">
                <a href="#lead-form">Solicită consultație</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                <a href={clinic.phoneHref}>Sună acum</a>
              </Button>
            </div>

            <div className="mt-10 grid gap-3">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-slate-950" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="lead-form">
            <Card className="rounded-[2rem] border-slate-200 shadow-xl shadow-slate-200/60">
              <CardContent className="p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Programare rapidă</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Solicită o consultație</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Completează formularul și vei fi contactat pentru stabilirea unei consultații la Clinica Dr. Miu din Buzău.
                </p>
                <div className="mt-8">
                  <ContactForm submitLabel="Trimite solicitarea" />
                </div>
                <div className="mt-6 grid gap-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> {clinic.phoneDisplay}</div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {clinic.address}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {trust.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-[1.75rem] border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
