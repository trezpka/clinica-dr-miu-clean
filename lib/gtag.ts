export const GA_MEASUREMENT_ID = "G-BN8R5LYNDK";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (
      command: "config" | "event" | "js",
      target: string | Date,
      params?: EventParams,
    ) => void;
  }
}

export function pageview(url: string) {
  window.gtag?.("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export function event(action: string, params?: EventParams) {
  window.gtag?.("event", action, params);
}

export function trackCall(location: string) {
  event("click_call", {
    event_category: "contact",
    event_label: location,
  });
}

export function trackWhatsapp(location: string) {
  event("click_whatsapp", {
    event_category: "contact",
    event_label: location,
  });
}

export function trackBooking(location: string) {
  event("click_booking", {
    event_category: "lead",
    event_label: location,
  });
}

export function trackContactFormSubmit(location: string) {
  event("submit_contact_form", {
    event_category: "lead",
    event_label: location,
  });
}
