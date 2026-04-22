"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

type ServiceLink = {
  label: string;
  href: string;
};

const serviceLinks: ServiceLink[] = [
  { label: "Implant dentar", href: "/implant-dentar-buzau" },
  { label: "All-on-X", href: "/all-on-x-buzau" },
  { label: "Implantologie", href: "/implantologie-buzau" },
  {
    label: "Chirurgie dento-alveolară",
    href: "/chirurgie-dento-alveolara-buzau",
  },
  { label: "Sinus lift", href: "/sinus-lift-buzau" },
  { label: "Adiție osoasă", href: "/aditie-osoasa-buzau" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-slate-900"
          onClick={closeMobileMenu}
        >
          <Image
            src="/logo-premium.png"
            alt="Clinica Dr. Miu"
            width={28}
            height={28}
            className="rounded-sm"
            priority
          />
          <span>Clinica Dr. Miu</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
          <Link href="/" className="transition hover:text-blue-600">
            Acasă
          </Link>
          <Link href="/despre-dr-miu" className="transition hover:text-blue-600">
            Despre
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 transition hover:text-blue-600"
              aria-haspopup="menu"
            >
              Servicii
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="invisible absolute left-0 top-full mt-2 w-72 translate-y-1 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/cazuri" className="transition hover:text-blue-600">
            Cazuri clinice
          </Link>
          <Link href="/contact" className="transition hover:text-blue-600">
            Contact
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Programare
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Deschide meniul"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            <Link href="/" className="rounded-md px-2 py-2 hover:bg-slate-50" onClick={closeMobileMenu}>
              Acasă
            </Link>
            <Link
              href="/despre-dr-miu"
              className="rounded-md px-2 py-2 hover:bg-slate-50"
              onClick={closeMobileMenu}
            >
              Despre
            </Link>

            <button
              type="button"
              className="flex items-center justify-between rounded-md px-2 py-2 text-left hover:bg-slate-50"
              onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              aria-expanded={isMobileServicesOpen}
            >
              <span>Servicii</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  isMobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMobileServicesOpen && (
              <div className="ml-2 space-y-1 border-l border-slate-200 pl-3">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block rounded-md px-2 py-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                    onClick={closeMobileMenu}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/cazuri" className="rounded-md px-2 py-2 hover:bg-slate-50" onClick={closeMobileMenu}>
              Cazuri clinice
            </Link>
            <Link href="/contact" className="rounded-md px-2 py-2 hover:bg-slate-50" onClick={closeMobileMenu}>
              Contact
            </Link>

            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
              onClick={closeMobileMenu}
            >
              Programare
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
