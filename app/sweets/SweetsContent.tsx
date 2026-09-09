"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export default function SweetsContent() {
  const { t, locale } = useLanguage();
  const isAr = locale === "ar";

  return (
    <main className="page-transition">
      {/* Page Hero */}
      <section className="page-hero page-hero--navy">
        <div className="page-hero-deco" aria-hidden="true" />
        <p className="eyebrow">{t.sweets_page_eyebrow}</p>
        <h1>{t.sweets_page_title}</h1>
        <p className="page-hero-sub">{t.sweets_page_sub}</p>
      </section>

      {/* Marquee */}
      <div className="marquee-banner" aria-hidden="true">
        <div className="marquee-inner">
          {t.sweets_marquee.concat(t.sweets_marquee).map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <section className="product-section sweets-section">
        <ScrollReveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark">{t.sweets_collection_eyebrow}</p>
              <h2>{t.sweets_collection_title}</h2>
            </div>
            <p>{t.sweets_collection_desc}</p>
          </div>
        </ScrollReveal>

        <div className="product-grid">
          {t.sweets_list.map((product, index) => (
            <ScrollReveal key={product.name} delay={index + 1}>
              <article className="product-card">
                <div className="product-number">0{index + 1}</div>
                <div className="product-image-wrap">
                  <Image src={product.image} alt={`ARARA FOOD ${product.name}`} width={560} height={560} />
                </div>
                <div className="product-card-copy">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link href="/contact" aria-label={`Enquire about ${product.name}`}>
                    {t.enquire} <span>{isAr ? "↖" : "↗"}</span>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="contact-section">
        <ScrollReveal>
          <div>
            <p className="eyebrow">{t.sweets_cta_eyebrow}</p>
            <h2>{t.sweets_cta_title}</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="contact-card">
            <p>{t.sweets_cta_desc}</p>
            <Link className="button button-gold" href="/contact">{t.get_in_touch}</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
