"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, locale } = useLanguage();

  const navLinks = [
    { href: "/sweets", label: t.nav_sweets },
    { href: "/brine", label: t.nav_brine },
    { href: "/about", label: t.nav_about },
  ];

  // Scroll listener for fixed navbar effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <Link className="brand-lockup" href="/" aria-label="ARARA FOOD home">
        <div className="brand-mark-wrapper">
          <span className="brand-mark-ring" aria-hidden="true" />
          <Image className="brand-mark" src="/brand/arara-logo.jpeg" alt="ARARA FOOD logo" width={52} height={52} priority />
        </div>
        <span>
          <strong>ARARA FOOD</strong>
          <small className={locale === "ar" ? "lang-ar-font" : ""}>{t.tagline}</small>
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="desktop-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={pathname === link.href ? "nav-active" : ""}>
            {link.label}
          </Link>
        ))}
        <Link className={`nav-cta${pathname === "/contact" ? " nav-active" : ""}`} href="/contact">
          {t.nav_contact}
        </Link>
      </nav>

      {/* Header actions: Language switcher + Hamburger menu */}
      <div className="header-actions">
        <LanguageSelector />

        {/* Hamburger button */}
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile nav drawer */}
      <nav className={`mobile-nav${menuOpen ? " open" : ""}`} aria-label="Mobile navigation">
        <Link href="/" className={pathname === "/" ? "nav-active" : ""}>{t.nav_home}</Link>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={pathname === link.href ? "nav-active" : ""}>
            {link.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/contact">{t.nav_contact}</Link>

        {/* Language selector inside mobile drawer */}
        <div className="mobile-drawer-lang">
          <span className="mobile-drawer-lang-label">{t.select_language}:</span>
          <LanguageSelector className="mobile-drawer-lang-selector" />
        </div>
      </nav>
    </header>
  );
}
