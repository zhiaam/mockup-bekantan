"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import { useLanguage, useTranslation } from "./LanguageProvider";

/** Navigation link definitions — path is the route, key maps to t.nav[key]. */
const NAV_LINKS = [
  { key: "home", path: "/" },
  { key: "sejarah", path: "/sejarah" },
  { key: "galeri", path: "/galeri" },
  { key: "faq", path: "/faq" },
  { key: "kontak", path: "/kontak" },
];

const Header = () => {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const transparentMode = isHome && !scrolled;

  /* ── Derived class strings ── */
  const headerClass = transparentMode
    ? "bg-transparent"
    : "bg-secondary/95 shadow-lg backdrop-blur";

  const getLinkClass = (isActive) =>
    [
      "px-4 py-2 rounded-lg text-sm uppercase font-primary font-medium",
      "tracking-[1.2px] transition-all duration-300",
      transparentMode
        ? isActive
          ? "text-white drop-shadow-[0_0_8px_white]"
          : "text-secondary hover:text-white hover:drop-shadow-[0_0_8px_white]"
        : isActive
        ? "bg-secondary-light text-white"
        : "text-white hover:bg-secondary-light",
    ].join(" ");

  const langBtnClass = [
    "px-4 py-2 rounded-lg border text-sm font-semibold transition-all duration-300",
    transparentMode
      ? "border-secondary text-secondary hover:text-white hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.45)]"
      : "border-white text-white hover:bg-secondary-light",
  ].join(" ");

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-[80px]">

          {/* LEFT: Logo + Navigation */}
          <div className="flex items-center gap-12">
            <Logo />

            <nav className="hidden xl:flex items-center" aria-label="Main navigation">
              <ul className="flex items-center gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <li key={link.key}>
                      <Link href={link.path} className={getLinkClass(isActive)}>
                        {t.nav[link.key]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* RIGHT: Language toggle */}
          <button
            onClick={() => setLanguage(language === "ID" ? "EN" : "ID")}
            aria-label={`Switch language to ${language === "ID" ? "English" : "Indonesian"}`}
            className={langBtnClass}
          >
            {language}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;