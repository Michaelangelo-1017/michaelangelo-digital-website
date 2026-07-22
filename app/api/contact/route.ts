import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const MAX_FIELD = 500;
const MAX_MESSAGE = 5000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  business?: unknown;
  message?: unknown;
  submittedAt?: unknown;
};

function asTrimmedString(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= MAX_FIELD;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 503 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = asTrimmedString(body.name, MAX_FIELD);
  const email = asTrimmedString(body.email, MAX_FIELD);
  const business = asTrimmedString(body.business, MAX_FIELD);
  const message = asTrimmedString(body.message, MAX_MESSAGE);
  const phoneRaw = typeof body.phone === "string" ? body.phone.trim() : "";
  const phone = phoneRaw && phoneRaw.length <= MAX_FIELD ? phoneRaw : "";

  if (!name || !email || !business || !message || !isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid form fields." }, { status: 400 });
  }

  const payload = {
    name,
    email,
    phone,
    business,
    message,
    submittedAt:
      typeof body.submittedAt === "string" && body.submittedAt
        ? body.submittedAt
        : new Date().toISOString(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to deliver message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to deliver message." },
      { status: 502 },
    );
  }
}
