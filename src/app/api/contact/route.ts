import { NextResponse } from "next/server";
import { fail, makeReference, readSubmission, type SubmitResponse } from "@/lib/api";
import { buildContactEmails } from "@/lib/emails";
import { deliverToInbox } from "@/lib/inbox";
import { sendPair } from "@/lib/mail";
import { validateContactMessage } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const fd = await readSubmission(req);
  if (fd instanceof NextResponse) return fd;

  const result = validateContactMessage(fd);
  if (!result.ok) return fail(422, "Please check the highlighted fields.", result.errors);

  const reference = makeReference("MSG");
  const { contact, subject, message } = result.data;
  try {
    const inboxOk = await deliverToInbox({
      type: "contact",
      reference,
      fields: {
        name: contact.name,
        company: contact.company,
        email: contact.email,
        phone: contact.phone,
        country: contact.country,
        subject,
        message,
      },
    });
    await sendPair(buildContactEmails(reference, result.data)).catch((err) => {
      if (!inboxOk) throw err;
      console.error("[api/contact] email failed after inbox save", err);
    });
  } catch (err) {
    console.error("[api/contact] delivery failed", err);
    return fail(503, "We could not send your message right now. Please contact us on WhatsApp or by phone.");
  }
  return NextResponse.json<SubmitResponse>({ ok: true, reference });
}
