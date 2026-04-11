import type { Metadata } from "next";
import { buildMetadata, dentistJsonLd } from "@/lib/seo";
import { clinic } from "@/lib/clinic";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock3 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact Clinica Dr. Miu | Implantologie și chirurgie dento-alveolară în Buzău",
  description:
    "Contactează Clinica Dr. Miu din Buzău pentru programări și consultații de implant dentar, implantologie și chirurgie dento-alveolară.",
  path: "/contact",
});

export default function ContactPage() {
  const jsonLd = dentistJsonLd(metadata.description as string, "/contact");

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.85),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,250,252,1),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Contact
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Contact Clinica Dr. Miu
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Dacă ai nevoie de o evaluare pentru implant dentar în Buzău,
              tratamente de implantologie sau chirurgie dento-alveolară, ne poți
              contacta pentru programare.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="rounded-[2rem] border-slate-200 bg-slate-950 text-white shadow-xl">
            <CardContent className="space-y-5 p-8 text-sm md:p-10">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-slate-300" />
                <div>
                  <p className="font-medium text-white">Adresă</p>
                  <p className="mt-1 leading-7 text-slate-300">{clinic.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-slate-300" />
                <div>
                  <p className="font-medium text-white">Telefon</p>
                  <a
                    href={clinic.phoneHref}
                    className="mt-1 block leading-7 text-slate-300 hover:text-white"
                  >
                    {clinic.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-slate-300" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="mt-1 block leading-7 text-slate-300 hover:text-white"
                  >
                    {clinic.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 h-5 w-5 shrink-0 text-slate-300" />
                <div>
                  <p className="font-medium text-white">Program</p>
                  <p className="mt-1 leading-7 text-slate-300">{clinic.hours}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-slate-200 shadow-sm">
            <CardContent className="p-8 md:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Programare rapidă
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Pentru moment, programările se fac telefonic, pe WhatsApp sau prin email.
              </p>

              <div className="mt-8 grid gap-4">
                <a
                  href={clinic.phoneHref}
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white"
                >
                  Sună acum
                </a>
                <a
                  href={clinic.whatsappHref}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700"
                >
                  Contact pe WhatsApp
                </a>
                <a
                  href={`mailto:${clinic.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700"
                >
                  Trimite email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
