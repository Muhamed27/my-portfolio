import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

function ProjectCard({ project, t }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-card border border-border/50 rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <Code2 className="w-10 h-10 text-muted-foreground/30" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {t.projects.viewSite}
            </a>
          )}

          {project.source_url && (
            <a
              href={project.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/30 text-white px-4 py-2.5 rounded-full text-sm hover:border-white transition-colors"
            >
              <Github className="w-4 h-4" />
              {t.projects.code}
            </a>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>

        {project.description && (
          <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
        )}

        {project.tech_stack?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({ projects = [], isLoading = false }) {
  const { t } = useLang();
  const [filter, setFilter] = useState("all");
  const [localProjects, setLocalProjects] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("projects");

    if (saved) {
      setLocalProjects(JSON.parse(saved));
    }
  }, []);

  const FILTERS = [
    { key: "all", label: t.projects.all },
    { key: "frontend", label: t.projects.frontend },
    { key: "fullstack", label: t.projects.fullstack },
    { key: "mobile", label: t.projects.mobile },
  ];

  const data = projects.length > 0 ? projects : localProjects;

  const filtered =
    filter === "all" ? data : data.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4" dir={t.dir}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="text-primary font-bold text-sm mb-2">
            {t.projects.tag}
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            {t.projects.title}
          </h2>

          <p className="text-white/60 max-w-xl mx-auto">{t.projects.sub}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10 mt-8"
        >
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === key
                  ? "bg-primary text-white shadow-[0_0_20px_hsl(265_85%_58%/0.3)]"
                  : "border border-border text-white/60 hover:border-primary/50 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-card border border-border/30 aspect-video animate-pulse"
              />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-white/40">
            {t.projects.noProjects}
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} t={t} />
              ))}
            </div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}