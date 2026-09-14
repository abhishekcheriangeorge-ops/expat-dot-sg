import { NextResponse } from "next/server";
import { LeadInquirySchema } from "@/lib/content/schemas";
import { createLead, getStorageBackend } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = LeadInquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    const lead = await createLead(parsed.data);
    return NextResponse.json({
      ok: true,
      id: lead.id,
      backend: lead.backend,
      storage: getStorageBackend(),
    });
  } catch (err) {
    console.error("[api/leads]", err);
    return NextResponse.json(
      { error: "Could not store inquiry" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    storage: getStorageBackend(),
    message: "POST advertise inquiries to this endpoint.",
  });
}
