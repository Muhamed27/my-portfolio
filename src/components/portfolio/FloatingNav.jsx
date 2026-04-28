import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useLang, TRANSLATIONS } from "@/context/LanguageContext";

export default function FloatingNav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const NAV_LINKS = [
    { label: t.nav.home, id: "hero" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.skills, id: "skills" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.contact, id: "contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      dir={t.dir}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/40 shadow-lg"
          : ""
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-extrabold text-white">
          {lang === "en" ? (
            <>
              Mohamed <span className="text-primary">Muhsen</span>
            </>
          ) : (
            <span className="flex flex-col leading-tight">
              <span>
                محمد<span className="text-primary"> محسن</span>
              </span>
              <span className="text-xs text-white/35 font-bold">
                מוחמד מוחסן
              </span>
            </span>
          )}
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium"
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => scrollTo("contact")}
            className="bg-primary text-white text-sm px-5 py-2 rounded-full font-bold hover:bg-primary/90 transition-colors"
          >
            {t.nav.cta}
          </button>
        </nav>

        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/60 text-white/70 hover:border-primary/50 hover:text-primary text-sm font-bold"
          >
            <Globe className="w-4 h-4" />
            {TRANSLATIONS[lang].name}
          </button>

          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute top-10 left-0 bg-card border rounded-xl overflow-hidden shadow-xl z-50"
              >
                {Object.entries(TRANSLATIONS).map(([code, val]) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLang(code);
                      setLangOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-sm text-white/70 hover:text-primary hover:bg-primary/10"
                  >
                    {val.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 
          زر الهامبرغر مخفي حاليًا حسب طلبك.
          لإرجاعه لاحقًا نعيد كود Menu / X هنا.
        */}
      </div>
    </motion.header>
  );
}