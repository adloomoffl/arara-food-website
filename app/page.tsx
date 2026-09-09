"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t, locale } = useLanguage();
  const isAr = locale === "ar";

  const sweetsPreview = t.sweets_list.slice(0, 2);
  const brinePreview = t.brine_list.slice(0, 2);

  return (
    <main className="page-transition">
      {/* ─── HERO ─── */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero_eyebrow}</p>
          <h1>{t.hero_title}</h1>
          <p className="hero-lede">{t.hero_lede}</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/sweets">{t.hero_cta_explore}</Link>
            <Link className="text-link" href="/about">
              {t.hero_cta_about} <span>{isAr ? "↖" : "↗"}</span>
            </Link>
          </div>
          <div className="hero-notes" aria-label="Product qualities">
            <span>{t.hero_note_natural}</span>
            <span>{t.hero_note_flavours}</span>
            <span>{t.hero_note_share}</span>
          </div>
        </div>
        <div className="hero-products" aria-label="Featured ARARA FOOD collection">
          <Image
            className="hero-showcase-img"
            src="/brand/hero-showcase.png"
            alt="ARARA FOOD collection — sweets, pickles in brine and coastal spices"
            width={1024}
            height={582}
            priority
          />
        </div>
      </section>

      {/* ─── CATEGORY STRIP ─── */}
      <section className="category-strip-container" aria-label="Product categories">
        <div className="category-strip">
          <Link href="/sweets" className="category-strip-item">
            <span className="cat-num">01</span>
            <div className="cat-info">
              <strong className="cat-title">{t.cat_sweets_title}</strong>
              <span className="cat-count">{t.cat_sweets_count}</span>
            </div>
            <span className="cat-arrow">{isAr ? "←" : "→"}</span>
          </Link>
          <div className="cat-divider" aria-hidden="true" />
          <Link href="/brine" className="category-strip-item">
            <span className="cat-num">02</span>
            <div className="cat-info">
              <strong className="cat-title">{t.cat_brine_title}</strong>
              <span className="cat-count">{t.cat_brine_count}</span>
            </div>
            <span className="cat-arrow">{isAr ? "←" : "→"}</span>
          </Link>
          <div className="cat-divider" aria-hidden="true" />
          <Link href="/brine" className="category-strip-item">
            <span className="cat-num">03</span>
            <div className="cat-info">
              <strong className="cat-title">{t.cat_coastal_title}</strong>
              <span className="cat-count">{t.cat_coastal_count}</span>
            </div>
            <span className="cat-arrow">{isAr ? "←" : "→"}</span>
          </Link>
        </div>
      </section>

      {/* ─── SWEETS SNIPPET ─── */}
      <section className="product-section sweets-section">
        <ScrollReveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark">{t.home_sweets_eyebrow}</p>
              <h2>{t.home_sweets_title}</h2>
            </div>
            <p>{t.home_sweets_desc}</p>
          </div>
        </ScrollReveal>
        <div className="product-grid product-grid--preview">
          {sweetsPreview.map((product, index) => (
            <ScrollReveal key={product.name} delay={index + 1}>
              <article className="product-card">
                <div className="product-number">0{index + 1}</div>
                <div className="product-image-wrap">
                  <Image src={product.image} alt={`ARARA FOOD ${product.name}`} width={560} height={560} />
                </div>
                <div className="product-card-copy">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link href="/sweets" aria-label={`View ${product.name}`}>
                    {t.view_btn} <span>{isAr ? "↖" : "↗"}</span>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={3}>
          <div className="snippet-cta">
            <Link className="button button-gold" href="/sweets">
              {t.home_sweets_cta} {isAr ? "←" : "→"}
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── BRINE SNIPPET ─── */}
      <section className="product-section brine-section">
        <ScrollReveal>
          <div className="section-heading section-heading-light">
            <div>
              <p className="eyebrow">{t.home_brine_eyebrow}</p>
              <h2>{t.home_brine_title}</h2>
            </div>
            <p>{t.home_brine_desc}</p>
          </div>
        </ScrollReveal>
        <div className="brine-grid brine-grid--preview">
          {brinePreview.map((product, index) => (
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
        <ScrollReveal delay={3}>
          <div className="snippet-cta">
            <Link className="button button-gold" href="/brine">
              {t.home_brine_cta} {isAr ? "←" : "→"}
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── ANCHOVY FISH DRY POWDER SNIPPET ─── */}
      <section className="fish-section" id="anchovy-fish-dry-powder">
        <ScrollReveal className="fish-visual">
          <Image src="/products/anchovy-fish-dry-powder.png" alt="ARARA FOOD Anchovy Fish Dry Powder" width={760} height={760} />
        </ScrollReveal>
        <ScrollReveal className="fish-copy" delay={2}>
          <p className="eyebrow">{t.home_anchovy_eyebrow}</p>
          <h2>{t.home_anchovy_title}</h2>
          <p>{t.home_anchovy_desc}</p>
          <div className="fish-points">
            {t.home_anchovy_points.map((point, i) => (
              <span key={i}>{point}</span>
            ))}
          </div>
          <Link className="button button-gold" href="/brine#anchovy-fish-dry-powder">
            {t.home_anchovy_cta} {isAr ? "←" : "→"}
          </Link>
        </ScrollReveal>
      </section>

      {/* ─── BRAND DIVIDER ─── */}
      <div className="fish-divider" aria-hidden="true">
        <span className="fish-divider-line" />
        <span className="fish-divider-badge">{t.home_divider_badge}</span>
        <span className="fish-divider-line" />
      </div>

      {/* ─── FISH SAUCE PRE-MIX SNIPPET ─── */}
      <section className="fish-section fish-section--reversed" id="fish-sauce-premix">
        <ScrollReveal className="fish-visual">
          <Image src="/products/fish-sauce-premix.png" alt="ARARA FOOD Fish Sauce Pre-Mix" width={760} height={760} />
        </ScrollReveal>
        <ScrollReveal className="fish-copy" delay={2}>
          <p className="eyebrow">{t.home_sauce_eyebrow}</p>
          <h2>{t.home_sauce_title}</h2>
          <p>{t.home_sauce_desc}</p>
          <div className="fish-points">
            {t.home_sauce_points.map((point, i) => (
              <span key={i}>{point}</span>
            ))}
          </div>
          <Link className="button button-gold" href="/brine#fish-sauce-premix">
            {t.home_sauce_cta} {isAr ? "←" : "→"}
          </Link>
        </ScrollReveal>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section className="story-section">
        <ScrollReveal>
          <div className="story-mark-wrap">
            <Image src="/brand/arara-logo.jpeg" alt="ARARA FOOD heritage seal" width={520} height={520} />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2} className="story-copy">
          <p className="eyebrow eyebrow-dark">{t.home_about_eyebrow}</p>
          <h2>{t.home_about_title}</h2>
          <p>{t.home_about_desc}</p>
          <div className="value-grid">
            <div>
              <strong>01</strong>
              <h3>{t.values_item1_title}</h3>
              <p>{t.values_item1_desc}</p>
            </div>
            <div>
              <strong>02</strong>
              <h3>{t.values_item2_title}</h3>
              <p>{t.values_item2_desc}</p>
            </div>
            <div>
              <strong>03</strong>
              <h3>{t.values_item3_title}</h3>
              <p>{t.values_item3_desc}</p>
            </div>
          </div>
          <div className="snippet-cta" style={{ marginTop: "36px" }}>
            <Link className="button button-gold" href="/about">
              {t.read_full_story} {isAr ? "←" : "→"}
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── CONTACT SNIPPET ─── */}
      <section className="contact-section">
        <ScrollReveal>
          <div>
            <p className="eyebrow">{t.home_contact_eyebrow}</p>
            <h2>{t.home_contact_title}</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="contact-card">
            <p>{t.home_contact_desc}</p>
            <Link className="button button-gold" href="/contact">{t.get_in_touch}</Link>
            <address>
              {t.contact_factory_address.map((line, i) => (
                <span key={i} style={{ display: "block" }}>{line}</span>
              ))}
              <a href="mailto:ararafoodindustry@gmail.com" style={{ color: "var(--gold)", textDecoration: "none", display: "inline-block", marginTop: "6px" }}>
                ararafoodindustry@gmail.com
              </a>
              <br />
              <a href="https://www.instagram.com/arara_bfood/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none", display: "inline-block", marginTop: "4px" }}>
                Instagram: @arara_bfood
              </a>
            </address>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
