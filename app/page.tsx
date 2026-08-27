import Image from "next/image";

const sweets = [
  {
    name: "Peanut Bar",
    description: "Roasted peanuts bound into a crisp, golden bar.",
    image: "/products/peanut-bar.png",
  },
  {
    name: "Peanut Balls",
    description: "Crunchy peanut clusters shaped for a satisfying bite.",
    image: "/products/peanut-balls.png",
  },
  {
    name: "Sesame Bar",
    description: "Toasted sesame seeds in a delicate, nutty crunch.",
    image: "/products/sesame-bar.png",
  },
  {
    name: "Sesame & Peanut Bar",
    description: "Sesame, peanuts and chocolate bites in one joyful bar.",
    image: "/products/sesame-peanut-bar.png",
  },
];

const brined = [
  {
    name: "Mango in Brine",
    note: "Tart · bright · juicy",
    description: "Firm mango wedges preserved for a vibrant, savoury tang.",
    image: "/products/mango-in-brine.png",
  },
  {
    name: "Lemon in Brine",
    note: "Citrusy · bold · aromatic",
    description: "Lemon wedges with a clean, concentrated citrus lift.",
    image: "/products/lemon-in-brine.png",
  },
  {
    name: "Green Chilli in Brine",
    note: "Fresh · piquant · crisp",
    description: "Whole green chillies with lively heat and a bright finish.",
    image: "/products/green-chilli-in-brine.png",
  },
  {
    name: "Red Chilli in Brine",
    note: "Fiery · rich · vibrant",
    description: "Red chillies preserved at peak colour for a deeper heat.",
    image: "/products/red-chilli-in-brine.png",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="ARARA FOOD home">
          <Image className="brand-mark" src="/brand/arara-logo.jpeg" alt="ARARA FOOD logo" width={52} height={52} priority />
          <span><strong>ARARA FOOD</strong><small>Good food. Warm memories.</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#sweets">Sweets</a><a href="#brined">In Brine</a><a href="#fish">Fish Powder</a><a className="nav-cta" href="#contact">Get in touch</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">EST. 2024 · HONEST INGREDIENTS</p>
          <h1>Tradition, packed for today.</h1>
          <p className="hero-lede">Familiar sweets, vibrant vegetables in brine and coastal anchovy powder - prepared with care and presented with pride.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#sweets">Explore our range</a>
            <a className="text-link" href="#story">Discover ARARA FOOD <span>↗</span></a>
          </div>
          <div className="hero-notes" aria-label="Product qualities"><span>Natural ingredients</span><span>Distinctive flavours</span><span>Made to share</span></div>
        </div>

        <div className="hero-products" aria-label="Featured ARARA FOOD products">
          <div className="sun-disc" aria-hidden="true" />
          <Image className="hero-pack hero-pack-left" src="/products/peanut-bar.png" alt="ARARA FOOD Peanut Bar package" width={430} height={430} priority />
          <Image className="hero-pack hero-pack-main" src="/products/sesame-peanut-bar.png" alt="ARARA FOOD Sesame and Peanut Bar package" width={520} height={520} priority />
          <Image className="hero-pack hero-pack-right" src="/products/peanut-balls.png" alt="ARARA FOOD Peanut Balls package" width={430} height={430} priority />
        </div>
      </section>

      <section className="category-strip" aria-label="Product categories">
        <a href="#sweets"><span>01</span> Heritage sweets <b>4 products</b></a>
        <a href="#brined"><span>02</span> Vegetables in brine <b>4 products</b></a>
        <a href="#fish"><span>03</span> Coastal pantry <b>1 product</b></a>
      </section>

      <section className="product-section sweets-section" id="sweets">
        <div className="section-heading">
          <div><p className="eyebrow eyebrow-dark">THE SWEET SECTION</p><h2>Crunch, comfort and a little joy.</h2></div>
          <p>Familiar nut and seed sweets, polished into premium everyday treats.</p>
        </div>
        <div className="product-grid">
          {sweets.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className="product-number">0{index + 1}</div>
              <div className="product-image-wrap"><Image src={product.image} alt={`ARARA FOOD ${product.name}`} width={560} height={560} /></div>
              <div className="product-card-copy">
                <h3>{product.name}</h3><p>{product.description}</p>
                <a href="#contact" aria-label={`Enquire about ${product.name}`}>Enquire <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section brine-section" id="brined">
        <div className="section-heading section-heading-light">
          <div><p className="eyebrow">VEGETABLES IN BRINE</p><h2>Bright flavour, beautifully preserved.</h2></div>
          <p>Glass-packed vegetables with vivid colour, honest texture and a clean savoury tang.</p>
        </div>
        <div className="brine-grid">
          {brined.map((product, index) => (
            <article className="brine-card" key={product.name}>
              <div className="brine-card-top">
                <span>0{index + 1}</span><small>{product.note}</small>
              </div>
              <div className="brine-image-wrap">
                <Image src={product.image} alt={`ARARA FOOD ${product.name}`} width={560} height={560} />
              </div>
              <div className="brine-card-copy">
                <h3>{product.name}</h3><p>{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="fish-section" id="fish">
        <div className="fish-visual">
          <div className="fish-orbit" aria-hidden="true"><span>COASTAL PANTRY · UMAMI · EVERYDAY COOKING · </span></div>
          <Image src="/products/anchovy-fish-powder.png" alt="ARARA FOOD Anchovy Fish Powder" width={760} height={760} />
        </div>
        <div className="fish-copy">
          <p className="eyebrow">ANCHOVY FISH POWDER</p>
          <h2>A coastal depth for everyday dishes.</h2>
          <p>Finely milled anchovy powder brings concentrated savoury character to curries, rice, sauces and home-style recipes.</p>
          <div className="fish-points"><span>Finely milled</span><span>Rich umami character</span><span>Easy pantry format</span></div>
          <a className="button button-gold" href="#contact">Ask about this product</a>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-mark-wrap">
          <Image src="/brand/arara-logo.jpeg" alt="ARARA FOOD heritage seal" width={520} height={520} />
        </div>
        <div className="story-copy">
          <p className="eyebrow eyebrow-dark">OUR STORY</p>
          <h2>Food that brings out the inner child.</h2>
          <p>ARARA FOOD brings familiar flavours into a confident new presentation - warm enough to feel nostalgic, polished enough to feel special.</p>
          <div className="value-grid">
            <div><strong>01</strong><h3>Ingredient first</h3><p>Let the real food, colour and texture lead every product.</p></div>
            <div><strong>02</strong><h3>Made with care</h3><p>Thoughtful formats that feel reliable, generous and easy to enjoy.</p></div>
            <div><strong>03</strong><h3>Proudly distinctive</h3><p>A bold navy-and-gold identity that stands apart on every shelf.</p></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">TRADE & PRODUCT ENQUIRIES</p>
          <h2>Bring ARARA FOOD to your table or store.</h2>
        </div>
        <div className="contact-card">
          <p>Tell us which products you are interested in and how we can help.</p>
          <a className="button button-gold" href="mailto:hello@ararafood.com">Start an enquiry</a>
          <address>Al Mubarak Factory Agency<br />Building No. 2/20B, Panakkulam<br />Rayaranghoth Post, Kerala</address>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><Image src="/brand/arara-logo.jpeg" alt="" width={56} height={56} /><strong>ARARA FOOD</strong></div>
        <p>Good food. Warm memories.</p>
        <nav aria-label="Footer navigation"><a href="#sweets">Sweets</a><a href="#brined">In Brine</a><a href="#fish">Fish Powder</a><a href="#top">Back to top ↑</a></nav>
      </footer>
    </main>
  );
}
