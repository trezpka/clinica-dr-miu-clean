import type { Metadata } from "next";
    import { buildMetadata } from "@/lib/seo";
    import { Card, CardContent } from "@/components/ui/card";

    export const metadata: Metadata = buildMetadata({
      title: "Politica de confidențialitate | Clinica Dr. Miu",
      description: "Politica de confidențialitate a site-ului Clinica Dr. Miu privind prelucrarea datelor personale și utilizarea formularelor de contact.",
      path: "/politica-de-confidentialitate",
    });

    const sections = [
  {
    "title": "1. Cine suntem",
    "paragraphs": [
      "Site-ul clinicadrmiu.ro este operat de Clinica Dr. Miu, cu sediul în Buzău, Str. Penteleu, 16.",
      "Pentru întrebări legate de protecția datelor ne poți contacta la adresa contact@clinicadrmiu.ro sau la numărul 0750 709 716."
    ]
  },
  {
    "title": "2. Ce date colectăm",
    "paragraphs": [
      "Prin formularele de contact putem colecta numele, numărul de telefon și mesajul transmis voluntar de utilizator.",
      "Serverul poate colecta și date tehnice minime necesare pentru funcționarea și securitatea site-ului."
    ]
  },
  {
    "title": "3. Scopul prelucrării",
    "paragraphs": [
      "Datele sunt folosite pentru a răspunde solicitărilor trimise prin formular, pentru programări și pentru comunicări administrative legate de solicitarea ta.",
      "Nu folosim datele trimise prin formular pentru marketing agresiv sau pentru vânzarea către terți."
    ]
  },
  {
    "title": "4. Temeiul legal",
    "paragraphs": [
      "Prelucrarea datelor se realizează în baza consimțământului oferit prin trimiterea formularului și, după caz, pentru efectuarea demersurilor precontractuale solicitate de persoana vizată."
    ]
  },
  {
    "title": "5. Stocarea și securitatea datelor",
    "paragraphs": [
      "Luăm măsuri rezonabile pentru a proteja datele personale împotriva accesului neautorizat, pierderii sau divulgării.",
      "Datele sunt păstrate doar atât timp cât este necesar pentru gestionarea solicitării și pentru îndeplinirea obligațiilor legale aplicabile."
    ]
  },
  {
    "title": "6. Drepturile tale",
    "paragraphs": [
      "Poți solicita acces la datele tale, rectificarea lor, ștergerea, restricționarea prelucrării sau opoziția, în măsura permisă de lege.",
      "Pentru exercitarea drepturilor ne poți scrie la contact@clinicadrmiu.ro."
    ]
  },
  {
    "title": "7. Terți și furnizori",
    "paragraphs": [
      "Putem folosi furnizori tehnici pentru hosting, email sau securitate, strict în măsura necesară funcționării site-ului.",
      "Acești furnizori pot prelucra datele doar conform instrucțiunilor noastre și obligațiilor legale aplicabile."
    ]
  },
  {
    "title": "8. Modificări",
    "paragraphs": [
      "Ne rezervăm dreptul de a actualiza această politică atunci când este necesar. Versiunea publicată pe site este cea aplicabilă la momentul consultării."
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
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">Politica de confidențialitate</h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">Politica de confidențialitate a site-ului Clinica Dr. Miu privind prelucrarea datelor personale și utilizarea formularelor de contact.</p>
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
