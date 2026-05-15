"use client";

import { useTranslation } from "@/components/LanguageProvider";

export default function ContactPage() {
  const t = useTranslation();
  const { kontak } = t;

  return (
    <main className="bg-background text-foreground overflow-hidden">

      {/* Hero */}
      <section className="bg-background-dark py-28 md:py-36">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="page-hero-title">{kontak.heroTitle}</h1>
          <p className="text-lg md:text-xl leading-relaxed">{kontak.heroDesc}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-14 items-start">

            {/* Left — Contact details */}
            <div className="space-y-10">

              {/* Contact info */}
              <div>
                <h3 className="text-secondary text-3xl font-bold mb-5">
                  {kontak.contactTitle}
                </h3>
                <ul className="space-y-4 text-lg leading-relaxed">
                  <li>
                    <span className="font-semibold text-secondary">Email:</span>{" "}
                    template@gmail.com
                  </li>
                  <li>
                    <span className="font-semibold text-secondary">{kontak.phone}</span>{" "}
                    +62 xxx xxxx
                  </li>
                  <li>
                    <span className="font-semibold text-secondary">WhatsApp:</span>{" "}
                    +62 xx xxxx xxxx 
                  </li>
                </ul>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-secondary text-3xl font-bold mb-5">
                  {kontak.locationTitle}
                </h3>
                <p className="text-lg leading-relaxed">
                  Pulau Kembang<br />
                  Sungai Barito<br />
                  Barito Kuala<br />
                  Kalimantan Selatan<br />
                  Indonesia
                </p>
              </div>

              {/* Operating hours */}
              <div>
                <h3 className="text-secondary text-3xl font-bold mb-5">
                  {kontak.hoursTitle}
                </h3>
                <p className="text-lg leading-relaxed">
                  {kontak.hoursValue}<br />
                  08.00 – 17.00 WITA
                </p>
              </div>

              {/* Quote */}
              <blockquote
                className="
                  bg-background-dark border border-border
                  rounded-[28px] p-7
                "
              >
                <p className="italic text-lg leading-relaxed text-secondary">
                  {kontak.quote}
                </p>
              </blockquote>
            </div>

            {/* Right — Map */}
            <div
              className="
                w-full h-[500px] rounded-[32px] overflow-hidden
                shadow-2xl border border-border
              "
            >
              <iframe
                title="Google Maps Pulau Kembang"
                src="https://www.google.com/maps?q=Pulau+Kembang+Barito+Kuala&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}