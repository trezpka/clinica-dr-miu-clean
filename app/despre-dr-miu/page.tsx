import type { Metadata } from "next";
import { buildMetadata, dentistJsonLd } from "@/lib/seo";
import { clinic } from "@/lib/clinic";
import { SectionTitle } from "@/components/section-title";
import { BulletList } from "@/components/bullet-list";
import { Card, CardContent } from "@/components/ui/card";
import { ContactCTA } from "@/components/contact-cta";

export const metadata: Metadata = buildMetadata({
  title: "Dr. Miu Cosmin | Medic specialist implantologie și chirurgie dento-alveolară în Buzău",
  description:
    "Află mai multe despre Dr. Miu Cosmin, medic specialist în chirurgie dento-alveolară și implantologie în Buzău, cu experiență în cazuri simple și complexe.",
  path: "/despre-dr-miu",
});

const values = [
  "evaluare atentă și indicație corectă",
  "explicații clare, fără grabă",
  "decizii medicale orientate spre predictibilitate",
  "respect pentru confortul pacientului",
  "interes pentru rezultate stabile pe termen lung",
] as const;

export default function AboutPage() {
  const jsonLd = dentistJsonLd(metadata.description as string, "/despre-dr-miu");

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.85),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,250,252,1),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Despre Dr. Miu</div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Dr. Miu Cosmin – medic specialist în chirurgie dento-alveolară și implantologie
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                {clinic.doctor} este medic specialist în chirurgie dento-alveolară și implantologie, cu activitate concentrată pe tratamente care necesită precizie, planificare și o bună înțelegere a particularităților fiecărui caz.
              </p>
              <p>
                În cadrul {clinic.name} din {clinic.city}, tratează atât cazuri simple, cât și cazuri complexe, inclusiv situații în care pentru reabilitare sunt necesare adiții osoase, sinus lift, grefe gingivale sau sisteme All-on-X.
              </p>
            </div>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border-slate-200 shadow-xl shadow-slate-200/60">
            <CardContent className="p-0">
              <div className="aspect-[4/5] bg-[linear-gradient(180deg,#f8fafc_0%,#e2e8f0_100%)] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/70 bg-white/70 p-6 backdrop-blur">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Portret profesional</span>
                    <span>de înlocuit cu fotografia reală</span>
                  </div>
                  <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-slate-200 bg-slate-950 text-4xl font-semibold text-white shadow-lg">CM</div>
                  <div className="rounded-2xl bg-slate-950 p-5 text-white">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-300">{clinic.name}</p>
                    <p className="mt-2 text-2xl font-semibold">{clinic.doctor}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">Abordare calmă, clară și construită în jurul tratamentelor chirurgicale și implantologice bine planificate.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Abordare"
              title="Cum este construit tratamentul"
              description="Fiecare plan de tratament este stabilit în funcție de contextul clinic, de obiectivul pacientului și de predictibilitatea rezultatului pe termen lung."
            />
          </div>
          <Card className="rounded-[1.75rem] border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <BulletList items={values} />
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactCTA
        title="Programează o consultație la Clinica Dr. Miu"
        text="Dacă vrei să înțelegi ce soluții există în cazul tău și care este planul corect de tratament, te așteptăm la consultație."
      />
    </main>
  );
}
