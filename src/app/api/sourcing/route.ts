import { NextResponse } from "next/server";
import { fail, makeReference, readSubmission, type SubmitResponse } from "@/lib/api";
import { buildSourcingEmails } from "@/lib/emails";
import { deliverToInbox } from "@/lib/inbox";
import { sendPair } from "@/lib/mail";
import { validateSourcing } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const fd = await readSubmission(req);
  if (fd instanceof NextResponse) return fd;

  const result = validateSourcing(fd);
  if (!result.ok) return fail(422, "Please check the highlighted fields.", result.errors);

  const reference = makeReference("SRC");
  const data = result.data;
  try {
    const inboxOk = await deliverToInbox({
      type: "sourcing",
      reference,
      fields: {
        name: data.contact.name,
        company: data.contact.company,
        email: data.contact.email,
        phone: data.contact.phone,
        country: data.contact.country,
        part_name: data.partName,
        brand: data.brand,
        part_number: data.partNumber,
        quantity: data.quantity,
        deadline: data.deadline,
        details: data.details,
      },
      files: data.files,
    });
    await sendPair(await buildSourcingEmails(reference, data)).catch((err) => {
      if (!inboxOk) throw err;
      console.error("[api/sourcing] email failed after inbox save", err);
    });
  } catch (err) {
    console.error("[api/sourcing] delivery failed", err);
    return fail(503, "We could not send your request right now. Please contact us on WhatsApp or by phone.");
  }
  return NextResponse.json<SubmitResponse>({ ok: true, reference });
}
