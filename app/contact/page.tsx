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
            
            <div className="whatsapp-contact-card">
              <div className="whatsapp-contact-badge">
                <span className="whatsapp-dot" /> Quick Trade Enquiries
              </div>
              <h3>Chat directly on WhatsApp</h3>
              <p>Connect with our sales &amp; product team instantly for catalogue, orders, or distribution questions.</p>
              <a
                href="https://wa.me/919645420727?text=Hello%20ARARA%20FOOD%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="button button-whatsapp"
                id="contact-whatsapp-direct"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm0 1.67c2.21 0 4.27.86 5.83 2.42 1.55 1.56 2.41 3.63 2.41 5.83 0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32c-.82-1.3-1.26-2.82-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24zm-3.1 3.66c-.22 0-.59.08-.89.41-.3.33-1.15 1.12-1.15 2.74 0 1.62 1.18 3.18 1.34 3.4.16.22 2.33 3.56 5.64 4.99.79.34 1.4.54 1.88.7.79.25 1.51.21 2.08.13.63-.1 1.95-.8 2.22-1.58.28-.78.28-1.44.2-1.58-.08-.14-.3-.22-.63-.39-.33-.17-1.96-.97-2.26-1.08-.3-.11-.52-.17-.74.16-.22.33-.85 1.09-1.04 1.31-.19.22-.38.24-.71.08-.33-.16-1.4-.51-2.67-1.64-.99-.88-1.66-1.97-1.85-2.3-.19-.33-.02-.51.15-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.02-.57-.08-.16-.71-1.7-.96-2.33-.25-.6-.51-.52-.7-.53-.18-.01-.4-.01-.62-.01z"/>
                </svg>
                <span>WhatsApp: +91 96454 20727</span>
              </a>
            </div>

            <div className="contact-details-box">
              <div className="contact-detail-row">
                <span className="contact-detail-label">Email Enquiries</span>
                <a href="mailto:ararafoodindustry@gmail.com" className="contact-detail-value contact-email-text">
                  ararafoodindustry@gmail.com
                </a>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-label">Phone &amp; WhatsApp</span>
                <a href="https://wa.me/919645420727" target="_blank" rel="noopener noreferrer" className="contact-detail-value">
                  +91 96454 20727
                </a>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-label">Factory Location</span>
                <address className="contact-detail-address">
                  Al Mubarak Factory Agency<br />
                  Building No. 2/20B, Panakkulam<br />
                  Rayaranghoth Post, Kerala
                </address>
              </div>
            </div>
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
              Browse our heritage sweets, brine-preserved vegetables and coastal anchovies (whole &amp; powder) to find what suits your needs.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link className="button button-gold" href="/sweets">View Sweets</Link>
              <Link className="button button-gold" href="/brine">View Brine &amp; Coastal</Link>
              <Link className="button button-gold" href="/about">About Us</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
