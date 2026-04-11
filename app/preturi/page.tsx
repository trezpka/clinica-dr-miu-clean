import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionTitle } from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { ContactCTA } from "@/components/contact-cta";

export const metadata: Metadata = buildMetadata({
  title: "Prețuri | Implant dentar și tratamente asociate | Clinica Dr. Miu",
  description:
    "Pagina de prețuri orientativă pentru implant dentar, implantologie și tratamente asociate în Buzău. Costul final se stabilește după evaluare și plan corect de tratament.",
  path: "/preturi",
});

const priceCards = [
  {
    title: "Consultație și plan de tratament",
    price: "de la 250 lei",
    text: "Include evaluare clinică, discuție asupra cazului și orientarea către investigațiile necesare.",
  },
  {
    title: "Implant dentar",
    price: "de la 2.900 lei",
    text: "Cost orientativ pentru etapa implantară. Restaurarea protetică și eventualele proceduri suplimentare se calculează separat.",
  },
  {
    title: "Coroană pe implant",
    price: "de la 1.800 lei",
    text: "Valoarea depinde de material, contextul protetic și planul de reabilitare ales.",
  },
  {
    title: "Sinus lift",
    price: "de la 3.500 lei",
    text: "Indicat doar când suportul osos este insuficient în zona laterală a maxilarului superior.",
  },
  {
    title: "Adiție osoasă",
    price: "de la 2.500 lei",
    text: "Prețul depinde de amploarea reconstrucției osoase și de integrarea în planul general de tratament.",
  },
  {
    title: "All-on-X",
    price: "de la 18.000 lei / arcadă",
    text: "Cost orientativ pentru reabilitări complete pe implanturi. Se stabilește după diagnostic și etapizare.",
  },
];

export default function PreturiPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.85),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,250,252,1),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionTitle
            eyebrow="Prețuri"
            title="Prețuri orientative pentru implant dentar și tratamente asociate"
            description="În medicina dentară, costul corect depinde de contextul clinic, de etapele necesare și de obiectivul final al tratamentului. Valorile de mai jos sunt orientative și nu înlocuiesc consultația."
          />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {priceCards.map((item) => (
              <Card key={item.title} className="rounded-[1.75rem] border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{item.price}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-sm">
            <p>
              <strong>Important:</strong> costul final poate varia în funcție de investigații, suportul osos, procedurile suplimentare necesare și etapa protetică.
            </p>
            <p className="mt-3">
              Pentru un plan realist și corect, recomandarea este evaluarea clinică și imagistică înainte de orice estimare finală.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Solicită o estimare corectă după consultație"
        text="Dacă ai nevoie de un plan de tratament și o estimare clară a costurilor, te așteptăm la consultație. Acolo se stabilește ce este potrivit și realist pentru cazul tău."
      />
    </main>
  );
}
