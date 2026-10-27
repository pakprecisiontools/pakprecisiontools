import { inboxSiteKey, inboxUrl } from "./dashboard";

/**
 * Forwards a validated form to the Laravel inbox.
 * INBOX_URL and INBOX_SITE_KEY on Vercel override the live dashboard defaults.
 */

export async function deliverToInbox(input: {
  type: "contact" | "sourcing" | "inquiry";
  reference: string;
  fields: Record<string, string | number | undefined | null>;
  items?: unknown;
  files?: File[];
}): Promise<boolean> {
  const url = inboxUrl();
  const key = inboxSiteKey();

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
