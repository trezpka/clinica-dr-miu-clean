"use client";

import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import { trackBooking, trackCall } from "@/lib/gtag";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        
        {/* CALL */}
        <a
          href="tel:+40750709716"
          onClick={() => trackCall("mobile_call_bar")}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          <Phone className="h-4 w-4" />
          Sună acum
        </a>

        {/* BOOKING */}
        <Link
          href="/contact"
          onClick={() => trackBooking("mobile_booking_bar")}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
        >
          <CalendarDays className="h-4 w-4" />
          Programează-te
        </Link>

      </div>
    </div>
  );
}
