"use client";

import { createContext, useContext, useState } from "react";
import { translations } from "@/lib/language";

const LanguageContext = createContext();

/**
 * Provides the active language state to the component tree.
 * Wrap your root layout with this provider.
 */
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ID");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Returns the current language code and setter.
 * @returns {{ language: "ID" | "EN", setLanguage: Function }}
 */
export const useLanguage = () => useContext(LanguageContext);

/**
 * Returns the translation object for the active language.
 * Shorthand for: const { language } = useLanguage(); translations[language]
 * @returns {object} Translation namespace object for the current language.
 */
export const useTranslation = () => {
  const { language } = useLanguage();
  return translations[language];
};