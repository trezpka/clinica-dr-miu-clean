import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Te rugăm să introduci numele."),
  phone: z.string().min(7, "Te rugăm să introduci un număr de telefon valid."),
  message: z.string().min(10, "Te rugăm să descrii pe scurt solicitarea."),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
