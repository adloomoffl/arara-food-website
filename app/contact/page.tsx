import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Get In Touch | ARARA FOOD",
  description: "Contact ARARA FOOD for trade and product enquiries. Bring our sweets, brine-packed vegetables and anchovy powder to your table or store.",
};

export default function ContactPage() {
  return (
    <main className="page-transition">
      {/* Page Hero */}
      <section className="page-hero page-hero--dark">
        <div className="page-hero-deco" aria-hidden="true" />
        <p className="eyebrow">TRADE &amp; PRODUCT ENQUIRIES</p>
        <h1>Bring ARARA FOOD to your table or store.</h1>
        <p className="page-hero-sub">
          Whether you&apos;re a retailer, distributor or food lover — we&apos;d love to hear from you. Fill in the form and we&apos;ll get back to you.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section contact-form-section">
        <ScrollReveal>
          <div>
            <p className="eyebrow">START AN ENQUIRY</p>
            <h2>Tell us about yourself.</h2>
            <address>
              Al Mubarak Factory Agency<br />
              Building No. 2/20B, Panakkulam<br />
              Rayaranghoth Post, Kerala
            </address>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="contact-card">
            <ContactForm />
          </div>
        </ScrollReveal>
      </section>

      {/* Product links */}
      <section className="product-section sweets-section" style={{ paddingTop: "70px", paddingBottom: "90px", textAlign: "center" }}>
        <ScrollReveal>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <p className="eyebrow eyebrow-dark">NOT SURE WHERE TO START?</p>
            <h2 style={{ color: "var(--navy)", font: "700 clamp(34px, 4vw, 54px)/1.05 Georgia, serif", letterSpacing: "-.03em", margin: "0 0 18px" }}>
              Explore our full range first.
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.7, margin: "0 0 32px" }}>
              Browse our heritage sweets, brine-preserved vegetables and anchovy powder to find what suits your needs.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link className="button button-gold" href="/sweets">View Sweets</Link>
              <Link className="button button-gold" href="/brine">View Brine &amp; Powder</Link>
              <Link className="button button-gold" href="/about">About Us</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
