import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/LegalPage";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Terms of Inquiries & Quotations",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Inquiries & Quotations">
      <p className="text-sm text-muted-foreground">Last updated: 27 November 2026</p>

      <h2>Inquiries</h2>
      <p>
        Submitting a quote request or sourcing request on this website is an invitation for {siteConfig.name} to
        provide a quotation. It is not an order and does not create a binding contract.
      </p>

      <h2>Quotations</h2>
      <ul>
        <li>Quotations are valid for the period stated on the quotation.</li>
        <li>Prices and availability are subject to change by manufacturers and suppliers until an order is confirmed.</li>
        <li>Lead times for imported goods are estimates and depend on suppliers, freight and customs clearance.</li>
      </ul>

      <h2>Orders and payment</h2>
      <ul>
        <li>
          An order is accepted when we confirm it in writing, subject to stock and supplier availability at that time.
        </li>
        <li>We accept purchase orders, bank transfer and letters of credit, and we issue GST invoices.</li>
        <li>Payment terms are those stated on the confirmed order or invoice.</li>
      </ul>

      <h2>Delivery</h2>
      <ul>
        <li>We deliver to the address you confirm in the order, anywhere in Pakistan.</li>
        <li>Risk in the goods passes to you on delivery; title passes on full payment unless we agree otherwise.</li>
        <li>Freight charges and any applicable duties or taxes are stated on the quotation or invoice.</li>
      </ul>

      <h2>Product information</h2>
      <p>
        Specifications, images and documents are provided for guidance. Please confirm critical specifications with us
        before ordering.
      </p>

      <h2>Liability</h2>
      <p>
        We are responsible for supplying goods that conform to the confirmed order. To the extent permitted by law, our
        total liability arising from an order is limited to the value of the goods concerned, and we are not liable for
        indirect or consequential loss, including loss of profit or loss of production. Nothing in these terms limits
        liability that cannot be limited under applicable law.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the Islamic Republic of Pakistan, and the courts at Karachi have
        exclusive jurisdiction over any dispute.
      </p>

      <h2>Trademarks</h2>
      <p>
        Brand names and logos shown on this website belong to their respective owners and are used only to identify the
        products we supply.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Message us on{" "}
        <a
          href={whatsappLink("Hello, I have a question about your terms of inquiries and quotations.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary underline"
        >
          <WhatsAppIcon width={16} height={16} className="text-whatsapp" />
          WhatsApp {siteConfig.contact.whatsappDisplay || siteConfig.contact.whatsapp}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        .
      </p>
    </LegalPage>
  );
}
