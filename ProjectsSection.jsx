import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const PROJECTS = [
  {
    id: 1,
    title: "Brava Fashion",
    category: "frontend",
    image: "/images/brava.png",
    liveUrl: "https://vocal-kataifi-990aeb.netlify.app",
    tech: ["React", "Tailwind", "Responsive design", "UX/UI Optimization"],
    desc: {
      ar: "موقع ملابس احترافي لعرض منتجات الأزياء بطريقة جذابة وسهلة، مع تصميم عصري وتجربة تصفح مريحة تساعد الزائر على استكشاف المنتجات بسرعة.",
      he: "אתר אופנה מקצועי להצגת מוצרי לבוש בצורה מודרנית וברורה, עם חוויית משתמש נוחה ועיצוב שמבליט את המוצרים.",
      en: "A professional fashion website built to showcase clothing products with a modern design, smooth browsing experience, and clear product presentation.",
    },
  },
  {
    id: 2,
    title: "SasiCam",
    category: "frontend",
    image: "/images/sasicam.png",
    liveUrl: "https://sasicam.vercel.app",
    tech: ["React", "Tailwind", "Framer Motion", "WhatsApp integration", "UX/UI Optimization"],
    desc: {
      ar: "موقع احترافي لعرض وبيع كاميرات مراقبة ذكية، بتصميم يوحي بالأمان والثقة، وتجربة سهلة تقود الزائر للتواصل والشراء عبر واتساب.",
      he: "אתר מקצועי להצגת ומכירת מצלמות אבטחה חכמות, עם עיצוב שמשדר ביטחון ואמון וחוויית משתמש שמובילה ליצירת קשר בוואטסאפ.",
      en: "A professional website for showcasing and selling smart security cameras, designed to build trust and guide visitors toward contacting and buying through WhatsApp.",
    },
  },
  {
    id: 3,
    title: "Grillibox",
    category: "frontend",
    image: "/images/grillibox.png",
    liveUrl: "https://jovial-piroshki-571dbf.netlify.app",
    tech: ["React", "Tailwind", "Framer Motion", "Responsive design", "WhatsApp integration"],
    desc: {
      ar: "موقع Grillibox لطلب بوكسات مشاوي أونلاين بتجربة سريعة وسهلة. تصميم جذاب، سرعة عالية، وربط مباشر بالواتساب لزيادة الطلبات.",
      he: "אתר Grillibox להזמנת קופסאות גריל אונליין בצורה מהירה ונוחה, עם עיצוב מושך וחיבור ישיר לוואטסאפ להגדלת ההזמנות.",
      en: "Grillibox is an online ordering website for grill boxes, built with a fast and simple user experience, attractive design, and direct WhatsApp connection to increase orders.",
    },
  },
];

export default function ProjectsSection() {
  const { lang, t } = useLang();

  const getDescription = (project) => {
    return project.desc[lang] || project.desc.ar;
  };

  return (
    <section id="projects" className="py-20 px-4" dir={t.dir}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-bold text-sm mb-2">
            {t.projects.tag}
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            {t.projects.title}
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            {t.projects.sub}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="overflow-hidden rounded-3xl border border-primary/40 bg-card/70 shadow-[0_0_35px_rgba(124,58,237,0.12)]"
            >
              <div className="relative h-[300px] sm:h-[380px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-white font-black text-lg hover:bg-primary/90 hover:scale-105 transition-all">
                    {t.projects.viewSite}
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </a>
              </div>

              <div className="p-7 sm:p-9">
                <h3 className="text-3xl font-black text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  {getDescription(project)}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-primary text-sm font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}