import CompetitionSection from "@/components/public/CompetitionSection";
import HeroSection from "@/components/public/HeroSection";
import NewsSection from "@/components/public/NewsSection";
import PartnersSection from "@/components/public/PartnersSection";
import ProgramsSection from "@/components/public/ProgramsSection";
import ServicesSection from "@/components/public/ServicesSection";
import StoriesSection from "@/components/public/StoriesSection";
import WhoWeAreSection from "@/components/public/WhoWeAre";
import ShopTeaser from "@/components/public/ShopTeaser";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <ProgramsSection />
      <CompetitionSection />
      <ShopTeaser />
      <PartnersSection />
      <StoriesSection />
      <NewsSection />
    </div>
  );
}
