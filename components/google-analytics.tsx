"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  pageview,
  trackBooking,
  trackCall,
  trackWhatsapp,
  trackContactFormSubmit,
} from "@/lib/gtag";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    pageview(url);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");

      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const label =
        link.getAttribute("data-track-location") ?? window.location.pathname;

      if (href.startsWith("tel:")) {
        trackCall(label);
        return;
      }

      if (
        href.includes("wa.me") ||
        href.includes("whatsapp.com") ||
        href.includes("api.whatsapp.com")
      ) {
        trackWhatsapp(label);
        return;
      }

      if (href === "/contact" || href.startsWith("/contact?")) {
        trackBooking(label);
      }
    };

    const handleSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement | null;
      if (!form) return;

      const formId = form.getAttribute("id") ?? "";
      const formTrack = form.getAttribute("data-track-form") ?? "";

      if (formId === "contact-form" || formTrack === "contact-form") {
        trackContactFormSubmit(window.location.pathname);
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}
