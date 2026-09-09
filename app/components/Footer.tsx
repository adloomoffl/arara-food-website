"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer>
      <div className="footer-brand">
        <Image src="/brand/arara-logo.jpeg" alt="ARARA FOOD logo" width={56} height={56} />
        <strong>ARARA FOOD</strong>
      </div>
      <div className="footer-meta">
        <p className={locale === "ar" ? "lang-ar-font" : ""}>{t.tagline}</p>
        <div className="footer-links-row">
          <a href="mailto:ararafoodindustry@gmail.com" className="footer-email-link">ararafoodindustry@gmail.com</a>
          <span className="footer-dot-sep">·</span>
          <a href="https://www.instagram.com/arara_bfood/" target="_blank" rel="noopener noreferrer" className="footer-email-link">
            Instagram: @arara_bfood
          </a>
        </div>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/sweets">{t.nav_sweets}</Link>
        <Link href="/brine">{t.nav_brine}</Link>
        <Link href="/about">{t.nav_about}</Link>
        <Link href="/contact">{t.nav_contact}</Link>
      </nav>
    </footer>
  );
}
