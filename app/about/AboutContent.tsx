"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <main className="page-transition">
      {/* Page Hero */}
      <section className="page-hero page-hero--cream">
        <div className="page-hero-deco" aria-hidden="true" />
        <p className="eyebrow eyebrow-dark">{t.about_page_eyebrow}</p>
        <h1>{t.about_page_title}</h1>
        <p className="page-hero-sub" style={{ color: "var(--muted)" }}>
          {t.about_page_sub}
        </p>
      </section>

      {/* Brand Story Section */}
      <section className="story-section">
        <ScrollReveal>
          <div className="story-mark-wrap">
            <Image src="/brand/arara-logo.jpeg" alt="ARARA FOOD heritage seal" width={520} height={520} />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2} className="story-copy">
          <p className="eyebrow eyebrow-dark">{t.about_who_eyebrow}</p>
          <h2>{t.about_who_title}</h2>
          <p>{t.about_who_p1}</p>
          <p>{t.about_who_p2}</p>
        </ScrollReveal>
      </section>

      {/* Values Grid */}
      <section className="product-section sweets-section" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
        <ScrollReveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark">{t.about_values_eyebrow}</p>
              <h2>{t.about_values_title}</h2>
            </div>
            <p>{t.about_values_desc}</p>
          </div>
        </ScrollReveal>

        <div className="value-grid" style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <ScrollReveal delay={1}>
            <div style={{ paddingTop: "21px", borderTop: "1px solid var(--gold)" }}>
              <strong>01</strong>
              <h3>{t.about_val1_title}</h3>
              <p>{t.about_val1_desc}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div style={{ paddingTop: "21px", borderTop: "1px solid var(--gold)" }}>
              <strong>02</strong>
              <h3>{t.about_val2_title}</h3>
              <p>{t.about_val2_desc}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <div style={{ paddingTop: "21px", borderTop: "1px solid var(--gold)" }}>
              <strong>03</strong>
              <h3>{t.about_val3_title}</h3>
              <p>{t.about_val3_desc}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Range Teaser */}
      <section className="contact-section">
        <ScrollReveal>
          <div>
            <p className="eyebrow">{t.about_teaser_eyebrow}</p>
            <h2>{t.about_teaser_title}</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="contact-card">
            <p>{t.about_teaser_desc}</p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link className="button button-gold" href="/sweets">{t.about_view_sweets}</Link>
              <Link className="button button-gold" href="/brine">{t.about_view_brine}</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
