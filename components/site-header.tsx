"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { servicePages } from "@/lib/pages-data";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/logo.png"
            alt="Clinica Dr. Miu"
            className="h-10 w-10 rounded-xl object-contain sm:h-11 sm:w-11"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-950 sm:text-base">
              Clinica Dr. Miu
            </p>
            <p className="hidden text-[11px] uppercase tracking-[0.18em] text-slate-500 sm:block">
              Implantologie • Chirurgie
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-slate-600 xl:flex">
          <Link
            href="/despre-dr-miu"
            className="transition hover:text-slate-950"
          >
            Despre
          </Link>

          <Link href="/contact" className="transition hover:text-slate-950">
            Contact
          </Link>

          <Link
            href="/caz-clinic-fractura-incisiv-central"
            className="font-medium text-slate-900 transition hover:text-slate-950"
          >
            Caz clinic
          </Link>

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

        <div className="hidden xl:block">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Programează o consultație
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 xl:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col">
              <Link
                href="/despre-dr-miu"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-900 transition hover:bg-slate-50"
              >
                Despre
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-900 transition hover:bg-slate-50"
              >
                Contact
              </Link>

              <Link
                href="/caz-clinic-fractura-incisiv-central"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-900 transition hover:bg-slate-50"
              >
                Caz clinic
              </Link>

              <div className="my-3 h-px bg-slate-200" />

              <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Servicii
              </p>

              {servicePages.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-base text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                >
                  {item.navLabel}
                </Link>
              ))}

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+40750709716"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                >
                  <Phone className="h-4 w-4" />
                  Sună acum
                </a>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Programează-te
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
