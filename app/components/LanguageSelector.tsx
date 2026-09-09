"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Locale } from "../lib/translations";

interface LanguageSelectorProps {
  className?: string;
}

export default function LanguageSelector({ className = "" }: LanguageSelectorProps) {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (lang: Locale) => {
    setLocale(lang);
    setIsOpen(false);
  };

  return (
    <div className={`lang-selector-wrap ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className={`lang-trigger-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t.select_language}
        title={t.select_language}
        id="language-selector-button"
      >
        {/* Globe icon */}
        <svg
          className="lang-globe-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>

        {/* Down Chevron */}
        <svg
          className={`lang-chevron-icon ${isOpen ? "rotated" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="lang-dropdown-menu" role="menu" aria-orientation="vertical">
          <button
            type="button"
            className={`lang-dropdown-item ${locale === "en" ? "selected" : ""}`}
            onClick={() => handleSelect("en")}
            role="menuitem"
          >
            <span className="lang-item-name">English</span>
            {locale === "en" && (
              <svg className="lang-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className={`lang-dropdown-item ${locale === "ar" ? "selected" : ""}`}
            onClick={() => handleSelect("ar")}
            role="menuitem"
          >
            <span className="lang-item-name lang-ar-font">العربية</span>
            {locale === "ar" && (
              <svg className="lang-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
