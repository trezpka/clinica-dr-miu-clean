import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactFormSchema.safeParse(json);

    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      return NextResponse.json({ message: issue?.message || "Datele trimise nu sunt valide." }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      return NextResponse.json(
        { message: "Formularul nu este configurat complet. Lipsesc variabilele de mediu pentru email." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const { name, phone, message } = parsed.data;

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: CONTACT_FROM_EMAIL,
      subject: `Cerere nouă de programare – ${name}`,
      text: [
        `Nume: ${name}`,
        `Telefon: ${phone}`,
        "",
        "Mesaj:",
        message,
      ].join("
"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>Cerere nouă de programare</h2>
          <p><strong>Nume:</strong> ${escapeHtml(name)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Mesaj:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Mesajul a fost trimis. Te vom contacta cât mai curând." });
  } catch {
    return NextResponse.json(
      { message: "A apărut o eroare la trimiterea mesajului. Încearcă din nou sau sună-ne direct." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
