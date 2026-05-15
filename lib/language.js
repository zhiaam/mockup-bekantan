/**
 * Master translation file for Pulau Kembang / Bekantan website.
 *
 * Structure:
 *   translations[language][namespace][key]
 *
 * Supported languages: "ID" (Indonesian) | "EN" (English)
 * Usage: import { useTranslation } from "@/components/LanguageProvider";
 *        const t = useTranslation();
 *        t.nav.home  →  "Beranda" | "Home"
 */

export const translations = {
  /* ─────────────────────────────────────────
     INDONESIAN
  ───────────────────────────────────────── */
  ID: {
    nav: {
      home: "Beranda",
      sejarah: "Sejarah",
      galeri: "Galeri",
      faq: "FAQ",
      kontak: "Kontak",
    },

    hero: {
      title: "Bekantan",
      subtitle: "Wisata Kalimantan",
    },

    sectionOne: {
      title: "Keindahan Alam Pulau Kembang",
      desc: "Pulau Kembang menghadirkan suasana wisata alam khas Kalimantan dengan hamparan sungai, vegetasi hijau, dan habitat satwa yang menjadi ikon unik kawasan ini. Pengunjung dapat menikmati perjalanan menyusuri sungai sambil merasakan pengalaman wisata alam yang tenang dan autentik.",
    },

    sectionTwo: {
      title: "Pengalaman Wisata yang Berkesan",
      desc: "Nikmati pengalaman menyusuri sungai khas Kalimantan di kawasan Pulau Kembang dengan panorama alam yang memukau, udara segar, serta suasana tenang yang menghadirkan kedekatan dengan alam. Tempat ini menjadi destinasi ideal untuk wisata keluarga, fotografi alam, hingga eksplorasi budaya dan konservasi lingkungan.",
    },

    sectionThree: {
      title: "Destinasi Alam Ikonik Kalimantan",
      desc: "Pulau Kembang menawarkan perpaduan keindahan alam sungai, vegetasi hijau, dan kehidupan satwa khas Kalimantan yang sulit ditemukan di tempat lain. Dengan suasana yang tenang dan alami, destinasi ini menjadi tempat sempurna untuk menikmati wisata alam, edukasi konservasi, dan pengalaman yang berkesan.",
    },

    contactSection: {
      title: "Hubungi Kami",
      desc: "Tertarik mengunjungi Pulau Kembang? Hubungi kami langsung melalui WhatsApp.",
      message: "Halo, saya berminat mengunjungi Pulau Kembang!",
      button: "Kirim WhatsApp",
    },

    footer: {
      tagline:
        "Destinasi wisata alam khas Kalimantan yang menghadirkan pengalaman menyusuri sungai, menikmati panorama alam, dan mengenal habitat bekantan secara lebih dekat.",
      infoTitle: "Informasi",
      phone: "Telepon",
      location: "Lokasi: Pulau Kembang, Kalimantan Selatan, Indonesia",
      hours: "Jam Operasional: 08.00 - 17.00 WITA",
      newsletterTitle: "Dapatkan Informasi",
      newsletterDesc:
        "Ikuti informasi terbaru mengenai wisata, kegiatan, dan keindahan alam Pulau Kembang.",
      emailPlaceholder: "Alamat email Anda",
      send: "Kirim",
      copyright: "Seluruh hak cipta dilindungi.",
    },

    galeri: {
      heroTitle: "Galeri Pulau Kembang",
      heroDesc:
        "Kumpulan suasana alam, panorama sungai, dan keindahan wisata khas Pulau Kembang.",
      seeMore: "Lihat Lebih Banyak",
      items: [
        {
          title: "Keindahan Sungai",
          desc: "Panorama sungai khas Kalimantan dengan suasana alami dan tenang.",
        },
        {
          title: "Habitat Satwa",
          desc: "Pulau Kembang menjadi habitat berbagai satwa khas Kalimantan.",
        },
        {
          title: "Wisata Perahu",
          desc: "Pengunjung dapat menikmati perjalanan menyusuri sungai.",
        },
        {
          title: "Vegetasi Hijau",
          desc: "Vegetasi hijau alami menjadi bagian penting kawasan wisata.",
        },
        {
          title: "Panorama Senja",
          desc: "Pemandangan matahari terbenam yang memukau di kawasan sungai.",
        },
        {
          title: "Wisata Alam",
          desc: "Pengalaman menikmati suasana khas alam Kalimantan Selatan.",
        },
      ],
    },

    faq: {
      heroTitle: "Pertanyaan Umum",
      heroDesc:
        "Temukan jawaban atas pertanyaan yang sering diajukan mengenai wisata Pulau Kembang dan informasi kunjungan.",
      ctaTitle: "Masih Punya Pertanyaan?",
      ctaDesc:
        "Hubungi kami untuk mendapatkan informasi lebih lanjut mengenai wisata Pulau Kembang.",
      ctaButton: "Hubungi Kami",
      items: [
        {
          question: "Apa itu Pulau Kembang?",
          answer:
            "Pulau Kembang merupakan destinasi wisata alam di Kalimantan Selatan yang dikenal sebagai habitat bekantan dan kera ekor panjang di kawasan sungai Barito.",
        },
        {
          question: "Di mana lokasi Pulau Kembang?",
          answer:
            "Pulau Kembang berada di Sungai Barito, Kabupaten Barito Kuala, Kalimantan Selatan, dan dapat diakses menggunakan perahu dari Banjarmasin.",
        },
        {
          question: "Apa daya tarik utama wisata ini?",
          answer:
            "Wisata ini menawarkan pengalaman menyusuri sungai, melihat bekantan secara langsung, suasana hutan alami, serta budaya wisata sungai khas Kalimantan.",
        },
        {
          question: "Kapan waktu terbaik untuk berkunjung?",
          answer:
            "Waktu terbaik biasanya pagi atau sore hari karena cuaca lebih sejuk dan satwa lebih aktif terlihat.",
        },
        {
          question: "Apakah cocok untuk wisata keluarga?",
          answer:
            "Ya, Pulau Kembang cocok untuk wisata keluarga, edukasi lingkungan, fotografi alam, dan wisata santai menikmati alam Kalimantan.",
        },
        {
          question: "Apakah tersedia pemandu wisata?",
          answer:
            "Beberapa operator wisata sungai menyediakan layanan pemandu untuk membantu pengunjung mengenal kawasan lebih jauh.",
        },
        {
          question: "Apakah pengunjung boleh memberi makan satwa?",
          answer:
            "Pengunjung disarankan mengikuti aturan kawasan wisata dan tidak memberi makanan sembarangan demi menjaga kesehatan satwa.",
        },
      ],
    },

    sejarah: {
      heroTitle: "Sejarah Pulau Kembang",
      heroDesc:
        "Pulau Kembang merupakan salah satu destinasi wisata terkenal di Kalimantan Selatan yang dikenal melalui wisata sungai, habitat satwa, dan suasana alam khas Kalimantan.",
      originTitle: "Awal Mula Pulau Kembang",
      originP1:
        "Pulau Kembang telah lama dikenal sebagai kawasan wisata sungai yang berada di sekitar Sungai Barito, Kalimantan Selatan. Kawasan ini menjadi tempat singgah wisatawan yang ingin menikmati suasana alam dan kehidupan satwa liar.",
      originP2:
        "Nama Pulau Kembang dipercaya berasal dari keindahan kawasan pulau yang dipenuhi vegetasi hijau dan suasana alami yang berkembang di tengah aliran sungai.",
      conservationTitle: "Konservasi dan Wisata Alam",
      conservationDesc:
        "Pulau Kembang tidak hanya menjadi destinasi wisata, tetapi juga bagian penting dari ekosistem sungai dan habitat satwa khas Kalimantan.",
      conservationItems: [
        {
          title: "Habitat Satwa",
          desc: "Pulau Kembang dikenal sebagai habitat berbagai satwa khas Kalimantan, terutama kera ekor panjang yang hidup di kawasan pulau.",
        },
        {
          title: "Wisata Sungai",
          desc: "Perjalanan menuju Pulau Kembang memberikan pengalaman menyusuri sungai khas Kalimantan dengan panorama alam yang menenangkan.",
        },
        {
          title: "Pelestarian Alam",
          desc: "Kawasan ini menjadi bagian penting dalam menjaga keseimbangan ekosistem sungai dan vegetasi alami di Kalimantan Selatan.",
        },
      ],
      developmentTitle: "Perkembangan Wisata",
      developmentP1:
        "Seiring berkembangnya wisata alam di Kalimantan Selatan, Pulau Kembang semakin dikenal sebagai destinasi wisata sungai yang menghadirkan pengalaman alam dan budaya lokal.",
      developmentP2:
        "Keindahan sungai, vegetasi hijau, dan kehidupan satwa menjadi daya tarik utama bagi wisatawan lokal maupun mancanegara.",
      closingTitle: "Ikon Wisata Alam Kalimantan",
      closingDesc:
        "Dengan perpaduan wisata sungai, kehidupan satwa, dan panorama alam, Pulau Kembang menjadi salah satu destinasi yang merepresentasikan kekayaan alam Kalimantan Selatan sekaligus pentingnya menjaga kelestarian lingkungan.",
    },

    kontak: {
      heroTitle: "Hubungi Kami",
      heroDesc:
        "Informasi kontak dan lokasi wisata Pulau Kembang untuk membantu perjalanan dan kunjungan Anda.",
      contactTitle: "Kontak",
      phone: "Telepon:",
      locationTitle: "Lokasi",
      hoursTitle: "Jam Operasional",
      hoursValue: "Senin – Minggu",
      quote:
        "\u201cNikmati pengalaman wisata alam khas Kalimantan dengan suasana sungai tropis, habitat bekantan, dan perjalanan menyusuri Sungai Barito.\u201d",
    },
  },

  /* ─────────────────────────────────────────
     ENGLISH
  ───────────────────────────────────────── */
  EN: {
    nav: {
      home: "Home",
      sejarah: "History",
      galeri: "Gallery",
      faq: "FAQ",
      kontak: "Contact",
    },

    hero: {
      title: "Bekantan",
      subtitle: "Kalimantan Tourism",
    },

    sectionOne: {
      title: "The Natural Beauty of Pulau Kembang",
      desc: "Pulau Kembang offers a unique Kalimantan nature tourism experience with rivers, lush vegetation, and wildlife habitats that define the character of the area. Visitors can enjoy river journeys while experiencing a peaceful and authentic natural atmosphere.",
    },

    sectionTwo: {
      title: "A Memorable Tourism Experience",
      desc: "Enjoy a unique river journey through the Pulau Kembang area with breathtaking natural scenery, fresh air, and a peaceful atmosphere that brings visitors closer to nature. This destination is ideal for family tourism, nature photography, cultural exploration, and environmental conservation experiences.",
    },

    sectionThree: {
      title: "An Iconic Natural Destination of Kalimantan",
      desc: "Pulau Kembang offers a combination of river landscapes, lush vegetation, and unique Kalimantan wildlife rarely found elsewhere. With its peaceful and natural atmosphere, this destination is perfect for nature tourism, conservation education, and memorable travel experiences.",
    },

    contactSection: {
      title: "Contact Us",
      desc: "Interested in visiting Pulau Kembang? Contact us directly through WhatsApp.",
      message: "Hello, I am interested in visiting Pulau Kembang!",
      button: "Send WhatsApp",
    },

    footer: {
      tagline:
        "A unique nature tourism destination in Kalimantan offering river exploration, beautiful natural scenery, and close encounters with proboscis monkey habitats.",
      infoTitle: "Information",
      phone: "Phone",
      location: "Location: Pulau Kembang, South Kalimantan, Indonesia",
      hours: "Operating Hours: 08.00 - 17.00 WITA",
      newsletterTitle: "Get Information",
      newsletterDesc:
        "Stay updated with the latest tourism information, activities, and natural beauty of Pulau Kembang.",
      emailPlaceholder: "Your email address",
      send: "Send",
      copyright: "All rights reserved.",
    },

    galeri: {
      heroTitle: "Pulau Kembang Gallery",
      heroDesc:
        "A collection of natural scenery, river panoramas, and the beauty of Pulau Kembang tourism.",
      seeMore: "See More",
      items: [
        {
          title: "River Scenery",
          desc: "Beautiful Kalimantan river scenery with a peaceful natural atmosphere.",
        },
        {
          title: "Wildlife Habitat",
          desc: "Pulau Kembang is home to various unique wildlife species of Kalimantan.",
        },
        {
          title: "Boat Tourism",
          desc: "Visitors can enjoy a relaxing river boat journey.",
        },
        {
          title: "Green Vegetation",
          desc: "Natural green vegetation forms an important part of the tourism area.",
        },
        {
          title: "Sunset Panorama",
          desc: "Beautiful sunset views across the river landscape.",
        },
        {
          title: "Nature Tourism",
          desc: "Experience the authentic natural atmosphere of South Kalimantan.",
        },
      ],
    },

    faq: {
      heroTitle: "Frequently Asked Questions",
      heroDesc:
        "Find answers to frequently asked questions about Pulau Kembang tourism and visitor information.",
      ctaTitle: "Still Have Questions?",
      ctaDesc: "Contact us for more information about Pulau Kembang tourism.",
      ctaButton: "Contact Us",
      items: [
        {
          question: "What is Pulau Kembang?",
          answer:
            "Pulau Kembang is a nature tourism destination in South Kalimantan known as the habitat of proboscis monkeys and long-tailed macaques along the Barito River.",
        },
        {
          question: "Where is Pulau Kembang located?",
          answer:
            "Pulau Kembang is located on the Barito River in Barito Kuala Regency, South Kalimantan, and can be reached by boat from Banjarmasin.",
        },
        {
          question: "What are the main attractions?",
          answer:
            "Visitors can enjoy river tours, see proboscis monkeys directly, experience natural forest scenery, and explore Kalimantan river culture.",
        },
        {
          question: "When is the best time to visit?",
          answer:
            "The best time to visit is usually in the morning or afternoon when the weather is cooler and wildlife is more active.",
        },
        {
          question: "Is it suitable for family trips?",
          answer:
            "Yes, Pulau Kembang is suitable for family trips, environmental education, nature photography, and relaxing tourism.",
        },
        {
          question: "Are tour guides available?",
          answer:
            "Some river tour operators provide guides to help visitors learn more about the area.",
        },
        {
          question: "Can visitors feed the animals?",
          answer:
            "Visitors are advised to follow local regulations and avoid feeding animals carelessly to protect wildlife health.",
        },
      ],
    },

    sejarah: {
      heroTitle: "History of Pulau Kembang",
      heroDesc:
        "Pulau Kembang is one of the well-known tourist destinations in South Kalimantan, famous for its river tourism, wildlife habitat, and authentic Kalimantan natural atmosphere.",
      originTitle: "The Origin of Pulau Kembang",
      originP1:
        "Pulau Kembang has long been known as a river tourism area located around the Barito River in South Kalimantan. The island became a destination for visitors seeking natural scenery and wildlife experiences.",
      originP2:
        "The name Pulau Kembang is believed to come from the island's lush vegetation and the natural beauty growing in the middle of the river flow.",
      conservationTitle: "Conservation and Nature Tourism",
      conservationDesc:
        "Pulau Kembang is not only a tourist destination but also an important part of the river ecosystem and wildlife habitat of Kalimantan.",
      conservationItems: [
        {
          title: "Wildlife Habitat",
          desc: "Pulau Kembang is known as a habitat for various Kalimantan wildlife, especially long-tailed macaques living around the island.",
        },
        {
          title: "River Tourism",
          desc: "The journey to Pulau Kembang offers a unique river travel experience with calming natural scenery.",
        },
        {
          title: "Nature Preservation",
          desc: "This area plays an important role in preserving river ecosystems and natural vegetation in South Kalimantan.",
        },
      ],
      developmentTitle: "Tourism Development",
      developmentP1:
        "As nature tourism in South Kalimantan continues to grow, Pulau Kembang has become increasingly recognized as a river tourism destination offering natural and cultural experiences.",
      developmentP2:
        "The beauty of the river, lush vegetation, and wildlife attractions make it appealing for both local and international tourists.",
      closingTitle: "An Iconic Natural Destination of Kalimantan",
      closingDesc:
        "With its combination of river tourism, wildlife, and natural scenery, Pulau Kembang represents the rich natural beauty of South Kalimantan while highlighting the importance of environmental preservation.",
    },

    kontak: {
      heroTitle: "Contact Us",
      heroDesc:
        "Contact information and location details of Pulau Kembang tourism to assist your visit and travel.",
      contactTitle: "Contact",
      phone: "Phone:",
      locationTitle: "Location",
      hoursTitle: "Operating Hours",
      hoursValue: "Monday \u2013 Sunday",
      quote:
        "\u201cEnjoy the unique nature tourism experience of Kalimantan with tropical rivers, proboscis monkey habitats, and river exploration along the Barito River.\u201d",
    },
  },
};