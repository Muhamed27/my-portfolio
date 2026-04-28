import { motion } from "framer-motion";
import { MessageCircle, Cpu, Rocket } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const ICONS = [MessageCircle, Cpu, Rocket];

export default function HowItWorksSection() {
  const { t } = useLang();

  return (
    <section id="how" className="py-20 px-4" dir={t.dir}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-bold text-sm mb-2">
            {t.how.tag}
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            {t.how.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.how.steps.map((step, i) => {
            const Icon = ICONS[i] || Cpu;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-card border border-border/50 rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="absolute -top-3 right-6 bg-primary text-white text-xs font-black px-3 py-1 rounded-full">
                  {step.number}
                </div>

                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mt-2 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-lg font-black text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}