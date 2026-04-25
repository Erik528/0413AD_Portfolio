import { BrandExperienceSection } from "../components/BrandExperienceSection";
import { FeaturedWorkSection } from "../components/FeaturedWorkSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ResumeSection } from "../components/ResumeSection";
import { StatementSection } from "../components/StatementSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col pb-24">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <FeaturedWorkSection />
        <StatementSection />
        <BrandExperienceSection />
        <ResumeSection />
      </main>
    </div>
  );
}
