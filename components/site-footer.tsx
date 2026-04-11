import Link from "next/link";
import { clinic } from "@/lib/clinic";
import { servicePages } from "@/lib/pages-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 text-sm text-slate-600 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-semibold text-slate-950">{clinic.name}</p>
          <p className="mt-2 leading-7">
            Clinică stomatologică din Buzău, axată pe implantologie, chirurgie dento-alveolară și reabilitări complexe.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-950">Pagini servicii</p>
          <div className="mt-2 space-y-1 leading-7">
            {servicePages.map((item) => (
              <div key={item.path}>
                <Link href={item.path} className="hover:text-slate-950">
                  {item.shortTitle}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-slate-950">Informații legale</p>
          <div className="mt-2 space-y-1 leading-7">
            <div><Link href="/politica-de-confidentialitate" className="hover:text-slate-950">Politica de confidențialitate</Link></div>
            <div><Link href="/politica-de-cookies" className="hover:text-slate-950">Politica de cookies</Link></div>
            <div><Link href="/termeni-si-conditii" className="hover:text-slate-950">Termeni și condiții</Link></div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-slate-950">Contact</p>
          <p className="mt-2 leading-7">{clinic.address}</p>
          <p className="leading-7">{clinic.phoneDisplay}</p>
          <p className="leading-7">{clinic.email}</p>
        </div>
      </div>
    </footer>
  );
}
