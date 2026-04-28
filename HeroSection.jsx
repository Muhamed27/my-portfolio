import { useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLang();

  const stars = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 2}s`,
      delay: `${Math.random() * 3}s`,
    }));
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden"
      dir={t.dir}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />

        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: star.top,
              left: star.left,
              animation: `pulse ${star.duration} ease-in-out infinite`,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-sm px-4 py-1.5 rounded-full mb-6"
        >
          <Star className="w-4 h-4 fill-primary" />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4"
        >
          {t.hero.title1}
          <br />
          <span className="text-primary">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg text-white/70 mb-4 leading-relaxed whitespace-pre-line"
        >
          {t.hero.sub}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-sm text-white/40 mb-10 whitespace-pre-line"
        >
          {t.hero.note}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="bg-primary text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(265_85%_58%/0.4)] transition-all duration-300"
          >
            {t.hero.btnProjects}
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="border border-white/20 text-white text-lg font-bold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-300"
          >
            {t.hero.btnContact}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 text-white/40 text-sm"
        >
          {t.hero.tagline}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("projects")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/30 hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}