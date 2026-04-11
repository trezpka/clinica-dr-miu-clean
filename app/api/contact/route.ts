import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Numele este prea scurt."),
  phone: z.string().min(7, "Numărul de telefon este invalid."),
  message: z.string().min(10, "Mesajul este prea scurt."),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Datele trimise nu sunt valide.",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { name, phone, message } = parsed.data;

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
    const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

    if (
      !SMTP_HOST ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !CONTACT_TO_EMAIL ||
      !CONTACT_FROM_EMAIL
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Lipsesc variabilele de mediu pentru trimiterea emailului.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

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
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>Cerere nouă de programare</h2>
          <p><strong>Nume:</strong> ${escapeHtml(name)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Mesaj:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Mesajul a fost trimis. Te vom contacta cât mai curând.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "A apărut o eroare la trimiterea mesajului.",
      },
      { status: 500 }
    );
  }
}
