import { DM_Sans, Barlow } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

/* =========================
   SEO METADATA (GLOBAL)
========================= */
export const metadata = {
  title: {
    default: "Pulau Bekantan Kalimantan",
    template: "%s | Pulau Bekantan Kalimantan",
  },

  description:
    "Website informasi dan wisata Pulau Bekantan Kalimantan Selatan yang menghadirkan sejarah, galeri, wisata alam, dan informasi kunjungan.",

  keywords: [
    "Pulau Bekantan",
    "Bekantan Kalimantan",
    "Wisata Kalimantan",
    "Wisata Banjarmasin",
    "Wisata Alam Kalimantan Selatan",
    "Bekantan",
    "Wisata Sungai",
    "Hutan Mangrove",
  ],

  authors: [{ name: "Pulau Bekantan Kalimantan" }],

  creator: "Pulau Bekantan Kalimantan",

  metadataBase: new URL("https://pulaubekantan.com"),

  openGraph: {
    title: "Pulau Bekantan Kalimantan",

    description:
      "Jelajahi wisata alam khas Kalimantan melalui Pulau Bekantan dengan panorama sungai, hutan mangrove, dan habitat bekantan.",

    url: "https://pulaubekantan.com",

    siteName: "Pulau Bekantan Kalimantan",

    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pulau Bekantan Kalimantan",
      },
    ],

    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Pulau Bekantan Kalimantan",

    description:
      "Wisata alam khas Kalimantan dengan panorama sungai dan habitat bekantan.",

    images: ["/assets/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`
          ${dmSans.variable}
          ${barlow.variable}
          antialiased
        `}
      >
        <LanguageProvider>
          <Header />

          {children}

          <Footer />
        </LanguageProvider>

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "TouristDestination",

              name: "Pulau Bekantan Kalimantan",

              description:
                "Destinasi wisata alam khas Kalimantan Selatan dengan habitat bekantan, wisata sungai, dan panorama alam.",

              url: "https://pulaubekantan.com",

              image:
                "https://pulaubekantan.com/assets/og-image.jpg",

              address: {
                "@type": "PostalAddress",
                addressLocality: "Banjarmasin",
                addressRegion: "Kalimantan Selatan",
                addressCountry: "ID",
              },

              geo: {
                "@type": "GeoCoordinates",
                latitude: "-3.3186",
                longitude: "114.5944",
              },

              sameAs: [
                "https://facebook.com",
                "https://instagram.com",
                "https://youtube.com",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}