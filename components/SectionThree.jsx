"use client";

import { useTranslation } from "./LanguageProvider";

const SectionThree = () => {
  const t = useTranslation();

  return (
    <section className="section bg-background overflow-hidden">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">

          {/* Image */}
          <div className="relative">
            <img
              src="/assets/section3.gif"
              alt="Panorama Pulau Kembang"
              className="
                w-full h-[320px] md:h-[420px] xl:h-[520px]
                object-cover rounded-[36px] shadow-2xl
              "
            />
          </div>

          {/* Text */}
          <div className="text-center mt-12 max-w-4xl mx-auto">
            <h2
              className="
                text-primary font-black leading-tight mb-6
                text-[38px] md:text-[48px] xl:text-[58px]
              "
            >
              {t.sectionThree.title}
            </h2>

            <p className="text-foreground text-base md:text-lg leading-relaxed">
              {t.sectionThree.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;