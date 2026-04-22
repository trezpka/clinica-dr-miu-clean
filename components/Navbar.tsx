"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        width: "100%",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image
            src="/logo-premium.png"
            alt="Clinica Dr. Miu — Implantologie Buzău"
            width={200}
            height={64}
            priority
            style={{ height: "48px", width: "auto", objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            fontSize: "0.92rem",
            fontWeight: 600,
            color: "#374151",
          }}
          className="desktop-nav"
        >
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>Acasă</Link>
          <Link href="/despre" style={{ textDecoration: "none", color: "inherit" }}>Despre Dr. Miu</Link>
          <Link href="/servicii" style={{ textDecoration: "none", color: "inherit" }}>Servicii</Link>
          <Link href="/cazuri" style={{ textDecoration: "none", color: "inherit" }}>Cazuri clinice</Link>
          <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>Contact</Link>
        </nav>

        {/* CTA Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="desktop-cta">
          <a
            href="tel:+40750709716"
            style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1d4ed8", textDecoration: "none" }}
          >
            📞 0750 709 716
          </a>
          <a
            href="#programare"
            style={{
              background: "#1d4ed8",
              color: "#ffffff",
              fontSize: "0.9rem",
              fontWeight: 700,
              padding: "10px 20px",
              borderRadius: "999px",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(29,78,216,0.25)",
            }}
          >
            Programare
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meniu"
          className="hamburger"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
        >
          <span style={{ display: "block", width: "24px", height: "2px", background: "#0f172a", borderRadius: "2px", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "#0f172a", borderRadius: "2px", transition: "all 0.2s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "#0f172a", borderRadius: "2px", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "#ffffff",
            borderTop: "1px solid #e5e7eb",
            padding: "16px 20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            fontSize: "1rem",
            fontWeight: 600,
          }}
          className="mobile-menu"
        >
          {[
            { href: "/", label: "Acasă" },
            { href: "/despre", label: "Despre Dr. Miu" },
            { href: "/servicii", label: "Servicii" },
            { href: "/cazuri", label: "Cazuri clinice" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ textDecoration: "none", color: "#0f172a" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#programare"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "#1d4ed8",
              color: "#ffffff",
              textAlign: "center",
              padding: "13px 20px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
              marginTop: "8px",
            }}
          >
            Programare
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
