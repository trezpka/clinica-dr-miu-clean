import type { Metadata } from "next";
    import { buildMetadata } from "@/lib/seo";
    import { Card, CardContent } from "@/components/ui/card";

    export const metadata: Metadata = buildMetadata({
      title: "Termeni și condiții | Clinica Dr. Miu",
      description: "Termeni și condiții de utilizare pentru site-ul Clinica Dr. Miu.",
      path: "/termeni-si-conditii",
    });

    const sections = [
  {
    "title": "1. Acceptarea termenilor",
    "paragraphs": [
      "Prin utilizarea acestui site accepți acești termeni și condiții. Dacă nu ești de acord cu ei, te rugăm să nu folosești site-ul."
    ]
  },
  {
    "title": "2. Scopul informațiilor de pe site",
    "paragraphs": [
      "Informațiile publicate au caracter informativ general și nu înlocuiesc consultația medicală, evaluarea clinică sau planul de tratament personalizat."
    ]
  },
  {
    "title": "3. Programări și formulare",
    "paragraphs": [
      "Trimiterea unui formular nu garantează automat o programare confirmată.",
      "Programarea este considerată valabilă doar după confirmarea explicită din partea clinicii."
    ]
  },
  {
    "title": "4. Proprietate intelectuală",
    "paragraphs": [
      "Textele, imaginile, elementele grafice și identitatea vizuală de pe acest site aparțin Clinicii Dr. Miu sau sunt utilizate legal.",
      "Copierea, distribuirea sau reutilizarea lor fără acord este interzisă."
    ]
  },
  {
    "title": "5. Limitarea răspunderii",
    "paragraphs": [
      "Depunem eforturi pentru ca informațiile publicate să fie corecte și actualizate, însă nu garantăm absența tuturor erorilor sau omisiunilor.",
      "Clinica nu răspunde pentru decizii luate exclusiv pe baza informațiilor de pe site, fără evaluare medicală."
    ]
  },
  {
    "title": "6. Linkuri către terți",
    "paragraphs": [
      "Site-ul poate conține linkuri către servicii externe. Nu controlăm politicile și conținutul acelor site-uri."
    ]
  },
  {
    "title": "7. Modificări",
    "paragraphs": [
      "Ne rezervăm dreptul de a modifica acești termeni în orice moment, fără notificare prealabilă. Versiunea publicată pe site este cea aplicabilă."
    ]
  }
];

    export default function LegalPage() {
      return (
        <main>
          <section className="relative overflow-hidden border-b border-slate-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.85),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,250,252,1),transparent_32%)]" />
            <div className="relative mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Informații legale</div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">Termeni și condiții</h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">Termeni și condiții de utilizare pentru site-ul Clinica Dr. Miu.</p>
            </div>
          </section>

          <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
            <div className="grid gap-6">
              {sections.map((section) => (
                <Card key={section.title} className="rounded-[1.75rem] border-slate-200 shadow-sm">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{section.title}</h2>
                    <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      );
    }
