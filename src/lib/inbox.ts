/**
 * Forwards a validated form to the Laravel inbox.
 * Set INBOX_URL and INBOX_SITE_KEY on the Vercel project.
 */
export async function deliverToInbox(input: {
  type: "contact" | "sourcing" | "inquiry";
  reference: string;
  fields: Record<string, string | number | undefined | null>;
  items?: unknown;
  files?: File[];
}): Promise<boolean> {
  const url = process.env.INBOX_URL;
  const key = process.env.INBOX_SITE_KEY;
  if (!url || !key) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("Inbox is not configured. Set INBOX_URL and INBOX_SITE_KEY.");
    }
    console.info("[inbox] skipped (INBOX_URL / INBOX_SITE_KEY not set)");
    return false;
  }

  const fd = new FormData();
  fd.set("type", input.type);
  fd.set("reference", input.reference);
  for (const [name, value] of Object.entries(input.fields)) {
    if (value !== undefined && value !== null && String(value) !== "") {
      fd.set(name, String(value));
    }
  }
  if (input.items) fd.set("items", JSON.stringify(input.items));
  for (const file of input.files ?? []) fd.append("files", file);

  const res = await fetch(url, {
    method: "POST",
    headers: { "X-Site-Key": key, Accept: "application/json" },
    body: fd,
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Inbox rejected the submission (${res.status}): ${body}`);
  }
  return true;
}
