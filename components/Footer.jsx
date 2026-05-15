"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { useTranslation } from "@/components/LanguageProvider";

/** Social media links — icon and destination URL. */
const SOCIAL_LINKS = [
  { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
  { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
  { icon: <FaYoutube />, url: "https://youtube.com", label: "YouTube" },
  { icon: <FaWhatsapp />, url: "https://wa.me/6281234567890", label: "WhatsApp" },
];

const Footer = () => {
  const t = useTranslation();
  const f = t.footer;

  return (
    <footer aria-label="Site footer" className="bg-secondary text-white pt-16 pb-8 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Column 1 — Brand + Social */}
          <div>
            <h4 className="text-2xl text-white font-bold mb-5 uppercase tracking-wide">
              Pulau Kembang
            </h4>

            <p className="text-white/80 leading-relaxed mb-6">
              {f.tagline}
            </p>

            <div className="flex gap-4" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    w-11 h-11 flex items-center justify-center
                    rounded-full border border-white/30 text-white
                    hover:bg-secondary-light hover:scale-110
                    transition-all duration-300
                  "
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Contact info */}
          <div>
            <h4 className="text-2xl text-white font-bold mb-5 uppercase tracking-wide">
              {f.infoTitle}
            </h4>

            <ul className="space-y-4 text-white/80 leading-relaxed">
              <li>Email: template@gmail.com</li>
              <li>{f.phone}: +62 xxx xxxx</li>
              <li>{f.location}</li>
              <li>{f.hours}</li>
            </ul>
          </div>

          {/* Column 3 — Newsletter */}
          <div>
            <h4 className="text-2xl text-white font-bold mb-5 uppercase tracking-wide">
              {f.newsletterTitle}
            </h4>

            <p className="text-white/80 mb-6 leading-relaxed">
              {f.newsletterDesc}
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={f.emailPlaceholder}
                className="
                  flex-1 h-12 px-4 rounded-xl
                  bg-transparent border border-white/25
                  text-white placeholder-white/50 outline-none
                  focus:border-white transition-all
                "
              />
              <button
                type="submit"
                className="
                  h-12 px-6 rounded-xl
                  bg-transparent border border-white text-white font-semibold
                  transition-all duration-300
                  hover:shadow-[0_0_18px_rgba(255,255,255,0.55)] hover:bg-white/10
                "
              >
                {f.send}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 mt-14 pt-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Template {f.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;