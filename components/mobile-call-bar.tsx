"use client";

import { Phone } from "lucide-react";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
      <a
        href="tel:+40750709716"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-slate-800"
      >
        <Phone className="h-4 w-4" />
        Sună acum
      </a>
    </div>
  );
}
