"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Locale, Translations } from "../lib/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dir: "ltr" | "rtl";
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Load saved preference on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("arara_lang") as Locale | null;
      if (saved === "en" || saved === "ar") {
        setLocaleState(saved);
        document.documentElement.lang = saved;
        document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
      }
    } catch {
      // localStorage may fail in private mode
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("arara_lang", newLocale);
    } catch {
      // ignore
    }
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
  };

  const dir = locale === "ar" ? "rtl" : "ltr";
  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
