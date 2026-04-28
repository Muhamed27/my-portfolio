import { useEffect, useState } from "react";
import { LanguageProvider, useLang } from "@/context/LanguageContext";
import HeroSection from "@/components/portfolio/HeroSection";
import BenefitsSection from "@/components/portfolio/BenefitsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import HowItWorksSection from "@/components/portfolio/HowItWorksSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import FloatingNav from "@/components/portfolio/FloatingNav";
import IntroAnimation from "@/components/portfolio/IntroAnimation";
import AccessibilityWidget from "@/components/portfolio/AccessibilityWidget";

const projects = [];

function PortfolioContent() {
  const { t } = useLang();
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "M") {
        e.preventDefault();
        window.location.href = "/admin";
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      dir={t.dir}
    >
      {!introDone && <IntroAnimation onDone={() => setIntroDone(true)} />}

      <FloatingNav />
      <HeroSection />
      <BenefitsSection />
      <ProjectsSection projects={projects} isLoading={false} />
      <HowItWorksSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <AccessibilityWidget />

      <footer className="py-6 text-center border-t border-border/30">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()}{" "}
          {t.dir === "ltr" ? "Mohamed Muhsen" : "محمد محسن"} — {t.footer}
        </p>
      </footer>
    </div>
  );
}

export default function Portfolio() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}