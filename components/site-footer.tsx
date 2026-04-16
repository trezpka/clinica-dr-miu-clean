import Link from "next/link";
import { clinic } from "@/lib/clinic";
import { servicePages } from "@/lib/pages-data";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* CTA */}
        <div className="mb-10 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Programează o consultație
          </h2>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            Contactează-ne pentru evaluare și plan de tratament personalizat.
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+40750709716"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              <Phone className="h-4 w-4" />
              Sună acum
            </a>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Programează-te
            </Link>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-8 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* BRAND */}
          <div>
            <p className="font-semibold text-slate-950">
              {clinic.name}
            </p>
            <p className="mt-2 leading-7">
              Clinică stomatologică din Buzău, axată pe implantologie, chirurgie dento-alveolară și reabilitări complexe.
            </p>
          </div>

          {/* SERVICII */}
          <div>
            <p className="font-semibold text-slate-950">
              Servicii
            </p>
            <div className="mt-3 space-y-2 leading-7">
              {servicePages.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block transition hover:text-slate-950"
                >
                  {item.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <p className="font-semibold text-slate-950">
              Informații legale
            </p>
            <div className="mt-3 space-y-2 leading-7">
              <Link href="/politica-de-confidentialitate" className="block hover:text-slate-950">
                Politica de confidențialitate
              </Link>
              <Link href="/politica-de-cookies" className="block hover:text-slate-950">
                Politica de cookies
              </Link>
              <Link href="/termeni-si-conditii" className="block hover:text-slate-950">
                Termeni și condiții
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="font-semibold text-slate-950">
              Contact
            </p>

            <div className="mt-3 space-y-3">
              
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 text-slate-500" />
                <span>{clinic.address}</span>
              </div>

              <a
                href="tel:+40750709716"
                className="flex items-center gap-2 hover:text-slate-950"
              >
                <Phone className="h-4 w-4" />
                {clinic.phoneDisplay}
              </a>

              <a
                href={`mailto:${clinic.email}`}
                className="flex items-center gap-2 hover:text-slate-950"
              >
                <Mail className="h-4 w-4" />
                {clinic.email}
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {clinic.name}. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
