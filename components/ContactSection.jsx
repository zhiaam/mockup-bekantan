"use client";

import { useTranslation } from "./LanguageProvider";

const ContactSection = () => {
  const t = useTranslation();
  const { contactSection } = t;

  const whatsappHref = `https://wa.me/6281234567890?text=${encodeURIComponent(contactSection.message)}`;

  return (
    <section className="section bg-background-dark overflow-hidden">
      <div className="container-custom">
        <div
          className="
            max-w-3xl mx-auto bg-card rounded-[32px] shadow-2xl p-8 md:p-10
          "
        >
          {/* Title */}
          <div className="text-center mb-8">
            <h2
              className="
                text-primary font-black mb-3
                text-[34px] md:text-[44px]
              "
            >
              {contactSection.title}
            </h2>

            <p className="text-foreground text-base md:text-lg">
              {contactSection.desc}
            </p>
          </div>

          {/* WhatsApp box */}
          <div className="flex flex-col md:flex-row gap-4">

            {/* Pre-filled message preview */}
            <div
              className="
                flex-1 h-14 flex items-center px-5
                rounded-2xl border border-border bg-background
                text-secondary font-medium
              "
            >
              {contactSection.message}
            </div>

            {/* WhatsApp button */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="
                h-14 px-7 rounded-2xl
                bg-primary hover:bg-primary-light
                text-white font-semibold
                transition-all duration-300
                flex items-center justify-center gap-3
                whitespace-nowrap
              "
            >
              <span className="text-xl" aria-hidden="true">💬</span>
              {contactSection.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;