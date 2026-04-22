import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Acasă", href: "/" },
  { label: "Despre", href: "#despre-medic" },
  { label: "Servicii", href: "#servicii" },
  { label: "Cazuri", href: "#cazuri" },
  { label: "Contact", href: "#programare" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
          <Image
            src="/logo-premium.png"
            alt="Clinica Dr. Miu"
            width={28}
            height={28}
            className="rounded-sm"
          />
          <span>Clinica Dr. Miu</span>
        </Link>

        <ul className="flex items-center gap-5 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.href === "/" ? (
                <Link href={item.href} className="transition hover:text-blue-600">
                  {item.label}
                </Link>
              ) : (
                <a href={item.href} className="transition hover:text-blue-600">
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
