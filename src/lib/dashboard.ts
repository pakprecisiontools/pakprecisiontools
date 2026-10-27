/** Live dashboard. Env values on Vercel override these. */
const DEFAULT_INBOX_URL = "https://dashboard.homesupplies.ae/api/v1/submissions";
const DEFAULT_SITE_KEY = "site_pkpt_local_dev_key_change_me";

export function inboxUrl(): string {
  return process.env.INBOX_URL?.trim() || DEFAULT_INBOX_URL;
}

export function inboxSiteKey(): string {
  return process.env.INBOX_SITE_KEY?.trim() || DEFAULT_SITE_KEY;
}
