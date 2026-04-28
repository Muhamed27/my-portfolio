import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, ZoomIn } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const DEGREE_IMAGE_URL = "/images/degree.png";

export default function AboutSection() {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState(false);

  return (
    <section id="about" className="py-20 px-4" dir={t.dir}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-bold text-sm mb-2">{t.about.tag}</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            {t.about.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-white/80 text-lg leading-relaxed">
              {t.about.bio1}
            </p>
            <p className="text-white/60 leading-relaxed">{t.about.bio2}</p>
            <p className="text-white/60 leading-relaxed whitespace-pre-line">
              {t.about.bio3}
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-card border border-primary/20 rounded-2xl p-5">
              <h4 className="text-white font-black text-base mb-2">
                {t.about.guaranteeTitle}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {t.about.guaranteeDesc}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>

              <div>
                <h3 className="text-white font-black text-lg">
                  {t.about.degreeTitle}
                </h3>
                <p className="text-white/50 text-sm">{t.about.degreeDesc}</p>
              </div>
            </div>

            <div
              className="relative rounded-2xl border border-border/50 overflow-hidden cursor-pointer group"
              style={{ aspectRatio: "3/4" }}
              onClick={() => setLightbox(true)}
            >
              <img
                src={DEGREE_IMAGE_URL}
                alt="Degree"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setLightbox(false)}
        >
          <img
            src={DEGREE_IMAGE_URL}
            alt="Degree"
            className="max-h-[90vh] max-w-full rounded-2xl"
          />
        </div>
      )}
    </section>
  );
}