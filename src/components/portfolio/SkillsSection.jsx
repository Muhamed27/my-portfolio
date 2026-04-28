import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "SQL",
  "PostgreSQL",
  "Firebase",
  "MongoDB",
  "Framer Motion",
  "Tailwind CSS",
  "Docker",
  "Git",
  "AWS/GCP",
  "REST APIs",
];

export default function SkillsSection() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-20 px-4" dir={t.dir}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-bold text-sm mb-2">
            {t.skills.tag}
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            {t.skills.title}
          </h2>

          <p className="text-white/60">{t.skills.sub}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="px-5 py-2.5 bg-card border border-border/60 rounded-full text-sm font-bold text-white/80 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}