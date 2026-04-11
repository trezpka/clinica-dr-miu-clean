import type { Metadata } from "next";
    import { buildMetadata } from "@/lib/seo";
    import { Card, CardContent } from "@/components/ui/card";

    export const metadata: Metadata = buildMetadata({
      title: "Politica de cookies | Clinica Dr. Miu",
      description: "Informații despre utilizarea cookie-urilor și tehnologiilor similare pe site-ul Clinica Dr. Miu.",
      path: "/politica-de-cookies",
    });

    const sections = [
  {
    "title": "1. Ce sunt cookie-urile",
    "paragraphs": [
      "Cookie-urile sunt fișiere mici stocate pe dispozitivul tău atunci când vizitezi un site.",
      "Acestea ajută la funcționarea corectă a site-ului și la înțelegerea modului în care este utilizat."
    ]
  },
  {
    "title": "2. Ce tipuri de cookie-uri putem folosi",
    "paragraphs": [
      "Cookie-uri strict necesare pentru funcționarea tehnică a site-ului.",
      "Cookie-uri de analiză, dacă sunt activate instrumente precum Google Analytics.",
      "Cookie-uri de preferințe, dacă sunt implementate funcționalități care memorează alegerile utilizatorului."
    ]
  },
  {
    "title": "3. Scopul utilizării",
    "paragraphs": [
      "Cookie-urile pot fi folosite pentru securitate, performanță, măsurarea traficului și îmbunătățirea experienței utilizatorului."
    ]
  },
  {
    "title": "4. Gestionarea preferințelor",
    "paragraphs": [
      "Poți controla sau șterge cookie-urile din setările browserului tău.",
      "Blocarea anumitor cookie-uri poate afecta funcționarea corectă a site-ului."
    ]
  },
  {
    "title": "5. Cookie-uri terțe",
    "paragraphs": [
      "Dacă integrăm servicii precum hărți, analytics sau conținut extern, furnizorii respectivi pot seta propriile cookie-uri conform politicilor lor."
    ]
  },
  {
    "title": "6. Actualizări",
    "paragraphs": [
      "Această politică poate fi actualizată periodic pentru a reflecta modificări tehnice sau legale."
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
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">Politica de cookies</h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">Informații despre utilizarea cookie-urilor și tehnologiilor similare pe site-ul Clinica Dr. Miu.</p>
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
