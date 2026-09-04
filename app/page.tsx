import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";

const sweetsPreview = [
  { name: "Peanut Bar", description: "Roasted peanuts bound into a crisp, golden bar.", image: "/products/peanut-bar.png" },
  { name: "Sesame Bar", description: "Toasted sesame seeds in a delicate, nutty crunch.", image: "/products/sesame-bar.png" },
];

const brinePreview = [
  { name: "Mango in Brine", note: "Tart · bright · juicy", description: "Firm mango wedges preserved for a vibrant, savoury tang.", image: "/products/mango-in-brine.png" },
  { name: "Green Chilli in Brine", note: "Fresh · piquant · crisp", description: "Whole green chillies with lively heat and a bright finish.", image: "/products/green-chilli-in-brine.png" },
];

export default function Home() {
  return (
    <main className="page-transition">
      {/* ─── HERO ─── */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">EST. 2024 · HONEST INGREDIENTS</p>
          <h1>Tradition, packed for today.</h1>
          <p className="hero-lede">Familiar sweets, vibrant vegetables in brine, and coastal pantry seasonings — prepared with care and presented with pride.</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/sweets">Explore our range</Link>
            <Link className="text-link" href="/about">Discover ARARA FOOD <span>↗</span></Link>
          </div>
          <div className="hero-notes" aria-label="Product qualities"><span>Natural ingredients</span><span>Distinctive flavours</span><span>Made to share</span></div>
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
              <strong className="cat-title">Heritage Sweets</strong>
              <span className="cat-count">4 Products</span>
            </div>
            <span className="cat-arrow">→</span>
          </Link>
          <div className="cat-divider" aria-hidden="true" />
          <Link href="/brine" className="category-strip-item">
            <span className="cat-num">02</span>
            <div className="cat-info">
              <strong className="cat-title">Vegetables in Brine</strong>
              <span className="cat-count">4 Products</span>
            </div>
            <span className="cat-arrow">→</span>
          </Link>
          <div className="cat-divider" aria-hidden="true" />
          <Link href="/brine" className="category-strip-item">
            <span className="cat-num">03</span>
            <div className="cat-info">
              <strong className="cat-title">Coastal Pantry</strong>
              <span className="cat-count">2 Products</span>
            </div>
            <span className="cat-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* ─── SWEETS SNIPPET ─── */}
      <section className="product-section sweets-section">
        <ScrollReveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark">THE SWEET SECTION</p>
              <h2>Crunch, comfort and a little joy.</h2>
            </div>
            <p>Familiar nut and seed sweets, polished into premium everyday treats.</p>
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
                  <Link href="/sweets" aria-label={`View ${product.name}`}>View <span>↗</span></Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={3}>
          <div className="snippet-cta">
            <Link className="button button-gold" href="/sweets">View all sweets →</Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── BRINE SNIPPET ─── */}
      <section className="product-section brine-section">
        <ScrollReveal>
          <div className="section-heading section-heading-light">
            <div>
              <p className="eyebrow">VEGETABLES IN BRINE</p>
              <h2>Bright flavour, beautifully preserved.</h2>
            </div>
            <p>Glass-packed vegetables with vivid colour, honest texture and a clean savoury tang.</p>
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
            <Link className="button button-gold" href="/brine">View all brine products →</Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── ANCHOVY FISH DRY POWDER SNIPPET ─── */}
      <section className="fish-section" id="anchovy-fish-dry-powder">
        <ScrollReveal className="fish-visual">
          <Image src="/products/anchovy-fish-dry-powder.png" alt="ARARA FOOD Anchovy Fish Dry Powder" width={760} height={760} />
        </ScrollReveal>
        <ScrollReveal className="fish-copy" delay={2}>
          <p className="eyebrow">COASTAL PANTRY · DRY POWDER</p>
          <h2>Anchovy fish dry powder for deep savoury warmth.</h2>
          <p>Carefully dehydrated and finely milled anchovy dry powder, capturing authentic coastal umami without fuss. An effortless pantry essential for elevating curries, sambars, roasts, and rice.</p>
          <div className="fish-points"><span>100% pure anchovy essence</span><span>Rich coastal umami</span><span>Aroma-sealed pouch</span></div>
          <Link className="button button-gold" href="/brine#anchovy-fish-dry-powder">Explore dry powder →</Link>
        </ScrollReveal>
      </section>

      {/* ─── BRAND DIVIDER ─── */}
      <div className="fish-divider" aria-hidden="true">
        <span className="fish-divider-line" />
        <span className="fish-divider-badge">✦ COASTAL PANTRY COLLECTION ✦</span>
        <span className="fish-divider-line" />
      </div>

      {/* ─── FISH SAUCE PRE-MIX SNIPPET ─── */}
      <section className="fish-section fish-section--reversed" id="fish-sauce-premix">
        <ScrollReveal className="fish-visual">
          <Image src="/products/fish-sauce-premix.png" alt="ARARA FOOD Fish Sauce Pre-Mix" width={760} height={760} />
        </ScrollReveal>
        <ScrollReveal className="fish-copy" delay={2}>
          <p className="eyebrow">COASTAL PANTRY · SAUCE PRE-MIX</p>
          <h2>Fish sauce pre-mix with balanced coastal richness.</h2>
          <p>A masterfully crafted pre-mix blend delivering the rich, savoury complexity of traditional fish sauce with effortless convenience. Simply stir into stir-fries, marinades, curries, and broths.</p>
          <div className="fish-points"><span>Instant gourmet umami</span><span>Perfect savoury balance</span><span>Versatile cooking pre-mix</span></div>
          <Link className="button button-gold" href="/brine#fish-sauce-premix">Explore sauce pre-mix →</Link>
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
          <p className="eyebrow eyebrow-dark">OUR STORY</p>
          <h2>Food that brings out the inner child.</h2>
          <p>ARARA FOOD brings familiar flavours into a confident new presentation — warm enough to feel nostalgic, polished enough to feel special.</p>
          <div className="value-grid">
            <div><strong>01</strong><h3>Ingredient first</h3><p>Let the real food, colour and texture lead every product.</p></div>
            <div><strong>02</strong><h3>Made with care</h3><p>Thoughtful formats that feel reliable, generous and easy to enjoy.</p></div>
            <div><strong>03</strong><h3>Proudly distinctive</h3><p>A bold navy-and-gold identity that stands apart on every shelf.</p></div>
          </div>
          <div className="snippet-cta" style={{ marginTop: "36px" }}>
            <Link className="button button-gold" href="/about">Read our full story →</Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── CONTACT SNIPPET ─── */}
      <section className="contact-section">
        <ScrollReveal>
          <div>
            <p className="eyebrow">TRADE &amp; PRODUCT ENQUIRIES</p>
            <h2>Bring ARARA FOOD to your table or store.</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="contact-card">
            <p>Tell us which products you are interested in and how we can help.</p>
            <Link className="button button-gold" href="/contact">Get in touch</Link>
            <address>
              Al Mubarak Factory Agency<br />
              Building No. 2/20B, Panakkulam<br />
              Rayaranghoth Post, Kerala<br />
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
