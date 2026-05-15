"use client";

import { useTranslation } from "./LanguageProvider";

const SectionTwo = () => {
  const t = useTranslation();

  return (
    <section className="section bg-primary overflow-hidden">
      <div className="container-custom">
        <div className="grid xl:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Image */}
          <div className="relative order-2 xl:order-1">
            <img
              src="/assets/section2.gif"
              alt="Wisata Pulau Kembang"
              className="
                w-full h-[420px] xl:h-[500px]
                object-cover rounded-[32px] shadow-2xl
              "
            />
          </div>

          {/* Text content */}
          <div className="order-1 xl:order-2">
            <h2
              className="
                text-white font-black leading-tight mb-6
                text-[38px] md:text-[48px] xl:text-[58px]
              "
            >
              {t.sectionTwo.title}
            </h2>

            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              {t.sectionTwo.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;