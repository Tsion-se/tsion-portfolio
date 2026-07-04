import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { type MouseEvent } from "react";
import { GlassCard } from "./ui/GlassCard";

type Project = {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  github: string;
  live: string;
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <GlassCard className="animated-border overflow-hidden group" hover>
          {/* Screenshot placeholder — replace with real project screenshots */}
          <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-accent-primary/20 via-bg-secondary to-accent-highlight/20 flex items-center justify-center">
            <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-40" />
            <span className="relative font-display text-2xl sm:text-3xl font-bold text-text-primary/25 tracking-tight px-6 text-center">
              {project.title}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent" />
          </div>

          <div className="p-7" style={{ transform: "translateZ(30px)" }}>
            <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.features.slice(0, 4).map((f) => (
                <span
                  key={f}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-borderc text-text-secondary"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-accent-primary/15 to-accent-highlight/15 text-accent-secondary border border-accent-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full glass text-sm font-medium text-text-primary hover:border-accent-primary/50 hover:shadow-glow transition-all"
              >
                <FaGithub size={16} /> Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-highlight text-sm font-display font-semibold text-white shadow-glow hover:shadow-glow-lg transition-shadow"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
