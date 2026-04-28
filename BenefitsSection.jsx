import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Smartphone,
  TrendingUp,
  Code2,
  Palette,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const ICONS = [Zap, Smartphone, Code2, Palette, Shield, TrendingUp];

export default function BenefitsSection() {
  const { t } = useLang();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 px-4" dir={t.dir}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            {t.benefits.sectionTitle}
          </h2>

          <p className="text-white/60 text-lg">
            {t.benefits.sectionSub}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.benefits.items.map((item, i) => {
            const Icon = ICONS[i] || Code2;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={scrollToContact}
            className="bg-primary text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-primary/90 hover:shadow-[0_0_40px_hsl(265_85%_58%/0.4)] transition-all duration-300"
          >
            {t.benefits.cta}
          </button>

          <p className="text-white/30 text-sm mt-3">
            {t.benefits.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}