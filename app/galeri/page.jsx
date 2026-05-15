"use client";

import { useTranslation } from "@/components/LanguageProvider";

/** Image paths for gallery items — order matches translation items array. */
const GALLERY_IMAGES = [
  "/assets/gallery1.PNG",
  "/assets/gallery2.PNG",
  "/assets/gallery3.PNG",
  "/assets/gallery4.PNG",
  "/assets/gallery5.PNG",
  "/assets/gallery6.PNG",
];

export default function GalleryPage() {
  const t = useTranslation();
  const { galeri } = t;

  const galleryItems = galeri.items.map((item, i) => ({
    ...item,
    image: GALLERY_IMAGES[i],
  }));

  return (
    <main className="bg-background text-foreground overflow-hidden">

      {/* Hero */}
      <section className="bg-background-dark py-28 md:py-36">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="page-hero-title">{galeri.heroTitle}</h1>
          <p className="text-lg md:text-xl leading-relaxed">{galeri.heroDesc}</p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="
                  group bg-card rounded-[30px] overflow-hidden
                  shadow-xl border border-border
                  transition-all duration-500 hover:-translate-y-2
                "
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full h-[260px] object-cover
                      transition-all duration-700 group-hover:scale-110
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-secondary text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="leading-relaxed text-foreground/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* See more button */}
          <div className="flex justify-center mt-16">
            <a
              href="https://drive.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-10 h-14 rounded-2xl
                bg-primary hover:bg-primary-light
                text-white font-semibold text-lg
                transition-all duration-300
                flex items-center justify-center shadow-lg
              "
            >
              {galeri.seeMore}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}