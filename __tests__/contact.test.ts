import { contactFormSchema } from "@/lib/contact";

describe("contactFormSchema", () => {
  it("accepts valid payload", () => {
    const result = contactFormSchema.safeParse({
      name: "Miu Cosmin",
      phone: "0750709716",
      message: "Bună ziua, doresc o programare pentru implant dentar.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects too short message", () => {
    const result = contactFormSchema.safeParse({
      name: "Miu Cosmin",
      phone: "0750709716",
      message: "Salut",
    });

    expect(result.success).toBe(false);
  });
});
