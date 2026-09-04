import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <Image src="/brand/arara-logo.jpeg" alt="" width={56} height={56} />
        <strong>ARARA FOOD</strong>
      </div>
      <div className="footer-meta">
        <p>Good food. Warm memories.</p>
        <div className="footer-links-row">
          <a href="mailto:ararafoodindustry@gmail.com" className="footer-email-link">ararafoodindustry@gmail.com</a>
          <span className="footer-dot-sep">·</span>
          <a href="https://www.instagram.com/arara_bfood/" target="_blank" rel="noopener noreferrer" className="footer-email-link">
            Instagram: @arara_bfood
          </a>
        </div>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/sweets">Sweets</Link>
        <Link href="/brine">In Brine</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Get in touch</Link>
      </nav>
    </footer>
  );
}
