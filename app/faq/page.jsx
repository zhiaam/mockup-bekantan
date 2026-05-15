"use client";

import { useState } from "react";
import { useTranslation } from "@/components/LanguageProvider";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const t = useTranslation();
  const { faq } = t;

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-background text-foreground overflow-hidden">

      {/* Hero */}
      <section className="bg-background-dark py-28 md:py-36">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="page-hero-title">{faq.heroTitle}</h1>
          <p className="text-lg md:text-xl leading-relaxed">{faq.heroDesc}</p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="space-y-5">
            {faq.items.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-[26px] overflow-hidden shadow-lg"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={activeIndex === index}
                  className="
                    w-full flex justify-between items-center text-left
                    px-7 py-6 transition-all duration-300 hover:bg-background-dark
                  "
                >
                  <span className="text-secondary text-lg md:text-xl font-semibold pr-5">
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`
                      text-secondary text-lg transition-transform duration-300
                      ${activeIndex === index ? "rotate-180" : ""}
                    `}
                  >
                    ▼
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${activeIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-7 pb-6">
                    <p className="text-foreground/80 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA block */}
          <div className="mt-16 bg-primary-light rounded-[32px] p-10 text-center">
            <h2 className="text-white text-3xl font-bold mb-4">{faq.ctaTitle}</h2>

            <p className="text-white/80 text-lg mb-7 leading-relaxed">{faq.ctaDesc}</p>

            <a
              href="/kontak"
              className="
                inline-flex items-center justify-center
                px-8 h-14 rounded-2xl
                bg-secondary hover:bg-secondary-light
                text-white font-semibold transition-all duration-300
              "
            >
              {faq.ctaButton}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}