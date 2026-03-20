import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TalksSection from "@/components/sections/TalksSection";
import AwardsSection from "@/components/sections/AwardsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => (
  <>
    <Sidebar />
    <main className="lg:ml-64">
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <ExperienceSection />
      <EducationSection />
      <TalksSection />
      <AwardsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  </>
);

export default Index;
