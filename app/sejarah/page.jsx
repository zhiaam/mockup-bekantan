"use client";

import { useTranslation } from "@/components/LanguageProvider";

export default function SejarahPage() {
  const t = useTranslation();
  const { sejarah } = t;

  return (
    <main className="bg-background text-foreground overflow-hidden">

      {/* Hero */}
      <section className="bg-background-dark py-28 md:py-36">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="page-hero-title">{sejarah.heroTitle}</h1>
          <p className="text-lg md:text-xl leading-relaxed">{sejarah.heroDesc}</p>
        </div>
      </section>

      {/* Origin section */}
      <section className="section">
        <div className="container-custom grid md:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <div>
            <h2 className="h2 text-secondary mb-6">{sejarah.originTitle}</h2>
            <p className="text-lg leading-relaxed mb-5">{sejarah.originP1}</p>
            <p className="text-lg leading-relaxed">{sejarah.originP2}</p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/assets/sejarah1.png"
              alt="Sejarah Pulau Kembang"
              className="w-full h-[420px] object-cover rounded-[32px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Conservation section */}
      <section className="section bg-secondary">
        <div className="container-custom">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-white text-[38px] md:text-[52px] font-black mb-5">
              {sejarah.conservationTitle}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              {sejarah.conservationDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sejarah.conservationItems.map((item, i) => (
              <div
                key={i}
                className="
                  bg-white/10 border border-white/10
                  backdrop-blur-sm rounded-[28px] p-8
                "
              >
                <h3 className="text-white text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development section */}
      <section className="section">
        <div className="container-custom grid md:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div>
            <img
              src="/assets/sejarah2.png"
              alt="Wisata Pulau Kembang"
              className="w-full h-[420px] object-cover rounded-[32px] shadow-2xl"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="h2 text-secondary mb-6">{sejarah.developmentTitle}</h2>
            <p className="text-lg leading-relaxed mb-5">{sejarah.developmentP1}</p>
            <p className="text-lg leading-relaxed">{sejarah.developmentP2}</p>
          </div>
        </div>
      </section>

      {/* Closing section */}
      <section className="section bg-background-dark">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-primary text-[38px] md:text-[52px] font-black mb-6">
            {sejarah.closingTitle}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            {sejarah.closingDesc}
          </p>
        </div>
      </section>
    </main>
  );
}