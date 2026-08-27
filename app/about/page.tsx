import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | ARARA FOOD",
  description: "The story behind ARARA FOOD — food that brings out the inner child. Learn about our values, heritage and commitment to honest ingredients.",
};

export default function AboutPage() {
  return (
    <main className="page-transition">
      {/* Page Hero */}
      <section className="page-hero page-hero--cream">
        <div className="page-hero-deco" aria-hidden="true" />
        <p className="eyebrow eyebrow-dark">OUR STORY</p>
        <h1>Food that brings out the inner child.</h1>
        <p className="page-hero-sub" style={{ color: "var(--muted)" }}>
          ARARA FOOD brings familiar flavours into a confident new presentation — warm enough to feel nostalgic, polished enough to feel special.
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
          <p className="eyebrow eyebrow-dark">WHO WE ARE</p>
          <h2>Where tradition meets today.</h2>
          <p>
            Born from a love of honest, homemade food, ARARA FOOD started with a simple idea: the recipes
            we grew up with deserve a bigger stage. We take heritage sweets, bright vegetables in brine
            and coastal anchovy powder, then present them with the care and quality they&apos;ve always deserved.
          </p>
          <p>
            Every product carries a piece of home — the crunch of a freshly made peanut bar, the tang
            of perfectly brined mango, the deep umami of sun-dried anchovy. We believe great food
            doesn&apos;t need to be complicated. It just needs to be made with heart.
          </p>
        </ScrollReveal>
      </section>

      {/* Values Grid */}
      <section className="product-section sweets-section" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
        <ScrollReveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark">OUR VALUES</p>
              <h2>What we stand for.</h2>
            </div>
            <p>Three principles guide everything we make — from sourcing to packaging to the moment you open the product.</p>
          </div>
        </ScrollReveal>

        <div className="value-grid" style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <ScrollReveal delay={1}>
            <div style={{ paddingTop: "21px", borderTop: "1px solid var(--gold)" }}>
              <strong>01</strong>
              <h3>Ingredient first</h3>
              <p>Let the real food, colour and texture lead every product. No shortcuts, no fillers — just the ingredients you&apos;d use at home, sourced with care.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div style={{ paddingTop: "21px", borderTop: "1px solid var(--gold)" }}>
              <strong>02</strong>
              <h3>Made with care</h3>
              <p>Thoughtful formats that feel reliable, generous and easy to enjoy. Every batch is checked, every package is sealed with pride.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <div style={{ paddingTop: "21px", borderTop: "1px solid var(--gold)" }}>
              <strong>03</strong>
              <h3>Proudly distinctive</h3>
              <p>A bold navy-and-gold identity that stands apart on every shelf. We believe heritage food deserves a premium presentation.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Range Teaser */}
      <section className="contact-section">
        <ScrollReveal>
          <div>
            <p className="eyebrow">EXPLORE OUR RANGE</p>
            <h2>Discover what we make.</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="contact-card">
            <p>From heritage sweets to vibrant brine-packed vegetables and coastal anchovy powder — there&apos;s something for every kitchen.</p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link className="button button-gold" href="/sweets">View Sweets</Link>
              <Link className="button button-gold" href="/brine">View Brine &amp; Powder</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
