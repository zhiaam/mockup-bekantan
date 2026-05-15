"use client";

import { useTranslation } from "./LanguageProvider";

const SectionOne = () => {
  const t = useTranslation();

  return (
    <section className="section bg-background">
      <div className="container-custom">
        <div className="grid xl:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Text content */}
          <div>
            <h2
              className="
                text-primary font-black leading-tight mb-6
                text-[38px] md:text-[48px] xl:text-[58px]
              "
            >
              {t.sectionOne.title}
            </h2>

            <p className="text-foreground text-base md:text-lg leading-relaxed">
              {t.sectionOne.desc}
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/assets/section1.gif"
              alt="Pulau Kembang"
              className="
                w-full h-[420px] xl:h-[500px]
                object-cover rounded-[32px] shadow-2xl
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;