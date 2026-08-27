import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Heritage Sweets | ARARA FOOD",
  description: "Explore ARARA FOOD's range of heritage sweets — peanut bars, peanut balls, sesame bars and more. Crunch, comfort and a little joy.",
};

const sweets = [
  {
    name: "Peanut Bar",
    description: "Roasted peanuts bound into a crisp, golden bar. A satisfying crunch in every bite that brings back the warmth of simple, honest snacking.",
    image: "/products/peanut-bar.png",
  },
  {
    name: "Peanut Balls",
    description: "Crunchy peanut clusters shaped for a satisfying bite. Hand-rolled rounds of roasted peanut goodness that melt into rich, nutty flavour.",
    image: "/products/peanut-balls.png",
  },
  {
    name: "Sesame Bar",
    description: "Toasted sesame seeds in a delicate, nutty crunch. Each bar captures the ancient craft of slow-toasting for a clean, aromatic finish.",
    image: "/products/sesame-bar.png",
  },
  {
    name: "Sesame & Peanut Bar",
    description: "Sesame, peanuts and chocolate bites in one joyful bar. The best of two worlds, combined into a layered treat that surprises with every bite.",
    image: "/products/sesame-peanut-pack.png",
  },
];

export default function SweetsPage() {
  return (
    <main className="page-transition">
      {/* Page Hero */}
      <section className="page-hero page-hero--navy">
        <div className="page-hero-deco" aria-hidden="true" />
        <p className="eyebrow">THE SWEET SECTION</p>
        <h1>Crunch, comfort and a little joy.</h1>
        <p className="page-hero-sub">Familiar nut and seed sweets, polished into premium everyday treats. Every bar and ball carries the warmth of tradition.</p>
      </section>

      {/* Marquee */}
      <div className="marquee-banner" aria-hidden="true">
        <div className="marquee-inner">
          <span>Peanut Bar</span><span>Peanut Balls</span><span>Sesame Bar</span><span>Sesame &amp; Peanut Bar</span>
          <span>Natural Ingredients</span><span>Heritage Recipes</span><span>Made with Care</span><span>Distinctive Flavours</span>
          <span>Peanut Bar</span><span>Peanut Balls</span><span>Sesame Bar</span><span>Sesame &amp; Peanut Bar</span>
          <span>Natural Ingredients</span><span>Heritage Recipes</span><span>Made with Care</span><span>Distinctive Flavours</span>
        </div>
      </div>

      {/* Product Grid */}
      <section className="product-section sweets-section">
        <ScrollReveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark">OUR COLLECTION</p>
              <h2>Four treats. One tradition.</h2>
            </div>
            <p>Each product is crafted from carefully selected nuts and seeds, using time-honoured methods that let the natural flavours speak for themselves.</p>
          </div>
        </ScrollReveal>

        <div className="product-grid">
          {sweets.map((product, index) => (
            <ScrollReveal key={product.name} delay={index + 1}>
              <article className="product-card">
                <div className="product-number">0{index + 1}</div>
                <div className="product-image-wrap">
                  <Image src={product.image} alt={`ARARA FOOD ${product.name}`} width={560} height={560} />
                </div>
                <div className="product-card-copy">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link href="/contact" aria-label={`Enquire about ${product.name}`}>Enquire <span>↗</span></Link>
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
            <p className="eyebrow">INTERESTED IN OUR SWEETS?</p>
            <h2>Let&apos;s bring these treats to your table.</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="contact-card">
            <p>Tell us which sweets you&apos;re interested in and we&apos;ll help you get started.</p>
            <Link className="button button-gold" href="/contact">Get in touch</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
