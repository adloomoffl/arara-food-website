import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <Image src="/brand/arara-logo.jpeg" alt="" width={56} height={56} />
        <strong>ARARA FOOD</strong>
      </div>
      <p>Good food. Warm memories.</p>
      <nav aria-label="Footer navigation">
        <Link href="/sweets">Sweets</Link>
        <Link href="/brine">In Brine</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Get in touch</Link>
      </nav>
    </footer>
  );
}
