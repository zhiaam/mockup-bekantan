import HeroSection from "@/components/HeroSection";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <ContactSection />
    </main>
  );
}