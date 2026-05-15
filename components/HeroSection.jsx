"use client";

import { useTranslation } from "./LanguageProvider";

const HeroSection = () => {
  const t = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero.gif"
          alt="Panorama Pulau Kembang"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center">
          <h1
            className="
              text-white uppercase font-black leading-none tracking-[4px]
              text-[64px] md:text-[90px] xl:text-[140px]
              drop-shadow-2xl
            "
          >
            {t.hero.title}
          </h1>

          <p
            className="
              mt-5 text-white uppercase tracking-[6px] font-light drop-shadow-lg
              text-sm md:text-lg xl:text-2xl
            "
          >
            {t.hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;