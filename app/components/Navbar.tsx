"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/sweets", label: "Sweets" },
  { href: "/brine", label: "In Brine" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="site-header">
      <Link className="brand-lockup" href="/" aria-label="ARARA FOOD home">
        <Image className="brand-mark" src="/brand/arara-logo.jpeg" alt="ARARA FOOD logo" width={52} height={52} priority />
        <span><strong>ARARA FOOD</strong><small>Good food. Warm memories.</small></span>
      </Link>

      {/* Desktop nav */}
      <nav className="desktop-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={pathname === link.href ? "nav-active" : ""}>
            {link.label}
          </Link>
        ))}
        <Link className={`nav-cta${pathname === "/contact" ? " nav-active" : ""}`} href="/contact">Get in touch</Link>
      </nav>

      {/* Hamburger button */}
      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile nav drawer */}
      <nav className={`mobile-nav${menuOpen ? " open" : ""}`} aria-label="Mobile navigation">
        <Link href="/" className={pathname === "/" ? "nav-active" : ""}>Home</Link>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={pathname === link.href ? "nav-active" : ""}>
            {link.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/contact">Get in touch</Link>
      </nav>
    </header>
  );
}
