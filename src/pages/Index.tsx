import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
