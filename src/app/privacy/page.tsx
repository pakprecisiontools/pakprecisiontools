import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  const address = [...siteConfig.address.lines, siteConfig.address.city, siteConfig.address.country]
    .filter(Boolean)
    .join(", ");

  return (
    <LegalPage title="Privacy Policy">
      <p className="text-sm text-muted-foreground">Last updated: 27 November 2026</p>
      <p>
        This policy explains how {siteConfig.name} collects, uses and protects personal information submitted through
        this website.
      </p>

      <h2>Who we are</h2>
      <p>
        {siteConfig.name}, {address}. For any question about this policy or your information, email{" "}
        <a href={`mailto:${siteConfig.contact.publicEmail}`} className="text-primary underline">
          {siteConfig.contact.publicEmail}
        </a>
        .
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          Contact details you provide in quote, sourcing and contact forms (name, company, email, phone, country and
          subject).
        </li>
        <li>
          The products, quantities and messages you submit, including any drawings, datasheets or photographs you attach
          to a sourcing request.
        </li>
        <li>Your quote basket, which is stored only in your browser until you submit it.</li>
      </ul>

      <h2>Cookies and analytics</h2>
      <p>
        We use Google Analytics 4 to understand how visitors use the site. It sets first-party cookies ({"_ga"} and{" "}
        {"_ga_<container-id>"}, typically for up to two years) that hold a randomly generated identifier. These cookies do
        not tell us who you are and we do not use them to show you advertising.
      </p>
      <p>
        Google processes this data on our behalf and may store it outside Pakistan. You can block or delete these cookies
        in your browser settings, or install Google&rsquo;s{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary underline">
          Analytics opt-out add-on
        </a>
        . Blocking them does not affect quotes or enquiries.
      </p>

      <h2>How we use it</h2>
      <p>
        We use this information to respond to your inquiry, prepare quotations, source products and arrange delivery, and
        to keep the records required for tax and accounting. We send you a confirmation email for each request.
      </p>

      <h2>Sharing</h2>
      <p>
        We share request details only as far as needed to answer your inquiry: with manufacturers, suppliers and freight
        partners when sourcing or shipping goods, and with the providers that run this website and our email. We do not
        sell personal information.
      </p>

      <h2>Retention</h2>
      <p>
        Quote and sourcing requests are kept while we handle your inquiry, and afterwards for as long as tax and
        accounting rules require. When that period ends, or sooner if you ask us, the information is deleted.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        You can ask us to access, correct or delete your information, or to stop using it for a particular purpose, at
        any time by emailing the address above. We respond within a reasonable period.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, we update the date at the top of this page, and material changes appear here before they
        take effect.
      </p>
    </LegalPage>
  );
}
