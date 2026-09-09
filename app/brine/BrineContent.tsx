"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export default function BrineContent() {
  const { t, locale } = useLanguage();
  const isAr = locale === "ar";

  return (
    <main className="page-transition">
      {/* Page Hero */}
      <section className="page-hero page-hero--olive">
        <div className="page-hero-deco" aria-hidden="true" />
        <p className="eyebrow">{t.brine_page_eyebrow}</p>
        <h1>{t.brine_page_title}</h1>
        <p className="page-hero-sub">{t.brine_page_sub}</p>
      </section>

      {/* Marquee */}
      <div className="marquee-banner" aria-hidden="true">
        <div className="marquee-inner">
          {t.brine_marquee.concat(t.brine_marquee).map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* Brine Products */}
      <section className="product-section brine-section">
        <ScrollReveal>
          <div className="section-heading section-heading-light">
            <div>
              <p className="eyebrow">{t.brine_collection_eyebrow}</p>
              <h2>{t.brine_collection_title}</h2>
            </div>
            <p>{t.brine_collection_desc}</p>
          </div>
        </ScrollReveal>

        <div className="brine-grid">
          {t.brine_list.map((product, index) => (
            <ScrollReveal key={product.name} delay={index + 1}>
              <article className="brine-card">
                <div className="brine-card-top">
                  <span>0{index + 1}</span><small>{product.note}</small>
                </div>
                <div className="brine-image-wrap">
                  <Image src={product.image} alt={`ARARA FOOD ${product.name}`} width={560} height={560} />
                </div>
                <div className="brine-card-copy">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Anchovy Fish Dry Powder */}
      <section className="fish-section" id="anchovy-fish-dry-powder">
        <ScrollReveal className="fish-visual">
          <Image src="/products/anchovy-fish-dry-powder.png" alt="ARARA FOOD Anchovy Fish Dry Powder" width={760} height={760} />
        </ScrollReveal>
        <ScrollReveal className="fish-copy" delay={2}>
          <p className="eyebrow">{t.home_anchovy_eyebrow}</p>
          <h2>{t.brine_anchovy_title}</h2>
          <p>{t.brine_anchovy_desc}</p>
          <div className="fish-points">
            {t.brine_anchovy_points.map((point, i) => (
              <span key={i}>{point}</span>
            ))}
          </div>
          <Link className="button button-gold" href="/contact">
            {t.brine_anchovy_cta} {isAr ? "←" : "→"}
          </Link>
        </ScrollReveal>
      </section>

      {/* Brand Divider */}
      <div className="fish-divider" aria-hidden="true">
        <span className="fish-divider-line" />
        <span className="fish-divider-badge">{t.home_divider_badge}</span>
        <span className="fish-divider-line" />
      </div>

      {/* Fish Sauce Pre-Mix */}
      <section className="fish-section fish-section--reversed" id="fish-sauce-premix">
        <ScrollReveal className="fish-visual">
          <Image src="/products/fish-sauce-premix.png" alt="ARARA FOOD Fish Sauce Pre-Mix" width={760} height={760} />
        </ScrollReveal>
        <ScrollReveal className="fish-copy" delay={2}>
          <p className="eyebrow">{t.home_sauce_eyebrow}</p>
          <h2>{t.brine_sauce_title}</h2>
          <p>{t.brine_sauce_desc}</p>
          <div className="fish-points">
            {t.brine_sauce_points.map((point, i) => (
              <span key={i}>{point}</span>
            ))}
          </div>
          <Link className="button button-gold" href="/contact">
            {t.brine_sauce_cta} {isAr ? "←" : "→"}
          </Link>
        </ScrollReveal>
      </section>

      {/* CTA Banner */}
      <section className="contact-section">
        <ScrollReveal>
          <div>
            <p className="eyebrow">{t.brine_cta_eyebrow}</p>
            <h2>{t.brine_cta_title}</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="contact-card">
            <p>{t.brine_cta_desc}</p>
            <Link className="button button-gold" href="/contact">{t.get_in_touch}</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
