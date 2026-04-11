"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function onSubmit(formData: FormData) {
    setState({ status: "loading", message: "Trimitem mesajul..." });

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "A apărut o eroare la trimiterea formularului.");
      }

      setState({
        status: "success",
        message: data.message || "Mesajul a fost trimis. Te vom contacta cât mai curând.",
      });

      const form = document.getElementById("contact-form") as HTMLFormElement | null;
      form?.reset();
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "A apărut o eroare la trimiterea formularului.",
      });
    }
  }

  return (
    <form
      id="contact-form"
      className="mt-8 grid gap-4"
      action={onSubmit}
    >
      <input
        aria-label="Nume"
        name="name"
        placeholder="Nume"
        required
        minLength={2}
        className="h-12 rounded-xl border border-slate-200 px-4 outline-none transition focus:border-slate-950"
      />
      <input
        aria-label="Telefon"
        name="phone"
        placeholder="Telefon"
        required
        minLength={7}
        className="h-12 rounded-xl border border-slate-200 px-4 outline-none transition focus:border-slate-950"
      />
      <textarea
        aria-label="Mesaj"
        name="message"
        placeholder="Cu ce te putem ajuta?"
        required
        minLength={10}
        className="min-h-[140px] rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-950"
      />
      <Button type="submit" disabled={state.status === "loading"} className="h-12 rounded-full">
        {state.status === "loading" ? "Se trimite..." : "Solicită programare"}
      </Button>
      {state.status !== "idle" ? (
        <p
          className={`text-sm leading-7 ${
            state.status === "success" ? "text-emerald-700" : state.status === "error" ? "text-red-700" : "text-slate-600"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
