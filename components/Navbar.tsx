'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-premium.png"
            alt="Clinica Dr. Miu - Implantologie Buzău"
            width={180}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-700 transition-colors">Acasă</Link>
          <Link href="/despre" className="hover:text-blue-700 transition-colors">Despre Dr. Miu</Link>
          <Link href="/servicii" className="hover:text-blue-700 transition-colors">Servicii</Link>
          <Link href="/cazuri" className="hover:text-blue-700 transition-colors">Cazuri clinice</Link>
          <Link href="/contact" className="hover:text-blue-700 transition-colors">Contact</Link>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+40XXXXXXXXX"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
          >
            📞 Sună acum
          </a>
          <a
            href="#programare"
            className="bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Programare
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meniu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>Acasă</Link>
          <Link href="/despre" onClick={() => setMenuOpen(false)}>Despre Dr. Miu</Link>
          <Link href="/servicii" onClick={() => setMenuOpen(false)}>Servicii</Link>
          <Link href="/cazuri" onClick={() => setMenuOpen(false)}>Cazuri clinice</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a
            href="#programare"
            className="bg-blue-700 text-white text-center font-semibold px-4 py-2 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Programare
          </a>
        </div>
      )}
    </header>
  )
}
