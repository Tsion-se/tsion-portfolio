import { motion } from "framer-motion";
import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiTailwindcss, SiVite,
  SiMysql, SiFirebase, SiGit, SiGithub, SiFigma, SiExpress,
} from "react-icons/si";
import { SectionHeading } from "./ui/SectionHeading";

const techIcons: Record<string, { icon: any; color: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Node.js": { icon: SiNodedotjs, color: "#68A063" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  Vite: { icon: SiVite, color: "#BD34FE" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
};

export function Technologies() {
  const items = Object.entries(techIcons);

  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-section">
        <SectionHeading
          eyebrow="Technologies"
          title="The stack behind the work"
          align="center"
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5">
          {items.map(([name, { icon: Icon, color }], i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass rounded-2xl p-5 flex flex-col items-center justify-center gap-3 aspect-square animate-float group cursor-default"
              style={{ animationDelay: `${(i % 6) * 0.3}s` }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{ filter: `drop-shadow(0 0 10px ${color}66)` }}
              >
                <Icon size={30} color={color} />
              </div>
              <span className="text-xs text-text-secondary font-medium text-center group-hover:text-text-primary transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
