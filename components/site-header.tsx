import Link from "next/link";
import { servicePages } from "@/lib/pages-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Clinica Dr. Miu"
            className="h-11 w-11 rounded-xl object-contain"
          />
          <div>
            <p className="text-base font-semibold text-slate-950">
              Clinica Dr. Miu
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Implantologie • Chirurgie
            </p>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-6 text-sm text-slate-600 xl:flex">
          <Link
            href="/despre-dr-miu"
            className="transition hover:text-slate-950"
          >
            Despre
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-slate-950"
          >
            Contact
          </Link>

          {/* 🔥 CAZ CLINIC - ADĂUGAT */}
          <Link
            href="/caz-clinic-fractura-incisiv-central"
            className="font-medium text-slate-900 transition hover:text-slate-950"
          >
            Caz clinic
          </Link>

          {/* SERVICII DINAMICE */}
          {servicePages.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="transition hover:text-slate-950"
            >
              {item.navLabel}
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <Link
          href="/contact"
          className="inline-flex h-10 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Programează o consultație
        </Link>
      </div>
    </header>
  );
}
