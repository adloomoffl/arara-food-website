import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Vegetables in Brine & Anchovy Powder | ARARA FOOD",
  description: "ARARA FOOD vegetables in brine — mango, lemon, green chilli, red chilli — and coastal anchovy fish powder. Bright flavour, beautifully preserved.",
};

const brined = [
  {
    name: "Mango in Brine",
    note: "Tart · bright · juicy",
    description: "Firm mango wedges preserved for a vibrant, savoury tang. The tartness cuts through rich curries and pairs beautifully with rice.",
    image: "/products/mango-in-brine.png",
  },
  {
    name: "Lemon in Brine",
    note: "Citrusy · bold · aromatic",
    description: "Lemon wedges with a clean, concentrated citrus lift. A versatile condiment that brightens any meal with its aromatic punch.",
    image: "/products/lemon-in-brine.png",
  },
  {
    name: "Green Chilli in Brine",
    note: "Fresh · piquant · crisp",
    description: "Whole green chillies with lively heat and a bright finish. Preserved at peak freshness for a crisp, clean bite every time.",
    image: "/products/green-chilli-in-brine.png",
  },
  {
    name: "Red Chilli in Brine",
    note: "Fiery · rich · vibrant",
    description: "Red chillies preserved at peak colour for a deeper heat. Their rich, smoky warmth adds character to any dish.",
    image: "/products/red-chilli-in-brine.png",
  },
];

export default function BrinePage() {
  return (
    <main className="page-transition">
      {/* Page Hero */}
      <section className="page-hero page-hero--olive">
        <div className="page-hero-deco" aria-hidden="true" />
        <p className="eyebrow">VEGETABLES IN BRINE &amp; COASTAL PANTRY</p>
        <h1>Bright flavour, beautifully preserved.</h1>
        <p className="page-hero-sub">Glass-packed vegetables with vivid colour, honest texture and a clean savoury tang — alongside our coastal anchovy powder.</p>
      </section>

      {/* Marquee */}
      <div className="marquee-banner" aria-hidden="true">
        <div className="marquee-inner">
          <span>Mango in Brine</span><span>Lemon in Brine</span><span>Green Chilli</span><span>Red Chilli</span>
          <span>Anchovy Fish Powder</span><span>Glass Packed</span><span>Vivid Colour</span><span>Honest Texture</span>
          <span>Mango in Brine</span><span>Lemon in Brine</span><span>Green Chilli</span><span>Red Chilli</span>
          <span>Anchovy Fish Powder</span><span>Glass Packed</span><span>Vivid Colour</span><span>Honest Texture</span>
        </div>
      </div>

      {/* Brine Products */}
      <section className="product-section brine-section">
        <ScrollReveal>
          <div className="section-heading section-heading-light">
            <div>
              <p className="eyebrow">VEGETABLES IN BRINE</p>
              <h2>Preserved with pride.</h2>
            </div>
            <p>Glass-packed vegetables with vivid colour, honest texture and a clean savoury tang that elevates every meal.</p>
          </div>
        </ScrollReveal>

        <div className="brine-grid">
          {brined.map((product, index) => (
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

      {/* Anchovy Fish Powder */}
      <section className="fish-section">
        <ScrollReveal className="fish-visual">
          <Image src="/products/anchovy-fish-powder.png" alt="ARARA FOOD Anchovy Fish Powder" width={760} height={760} />
        </ScrollReveal>
        <ScrollReveal className="fish-copy" delay={2}>
          <p className="eyebrow">ANCHOVY FISH POWDER</p>
          <h2>A coastal depth for everyday dishes.</h2>
          <p>Finely milled anchovy powder brings concentrated savoury character to curries, rice, sauces and home-style recipes. A pinch transforms the ordinary into something memorable.</p>
          <div className="fish-points">
            <span>Finely milled</span>
            <span>Rich umami character</span>
            <span>Easy pantry format</span>
          </div>
          <Link className="button button-gold" href="/contact">Ask about this product</Link>
        </ScrollReveal>
      </section>

      {/* CTA Banner */}
      <section className="contact-section">
        <ScrollReveal>
          <div>
            <p className="eyebrow">TRADE &amp; PRODUCT ENQUIRIES</p>
            <h2>Bring bold flavours to your store or kitchen.</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="contact-card">
            <p>Tell us which products you&apos;re interested in — brine, anchovy powder, or the full range.</p>
            <Link className="button button-gold" href="/contact">Get in touch</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
