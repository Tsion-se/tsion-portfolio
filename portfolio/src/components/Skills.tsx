import { motion } from "framer-motion";
import { skillGroups } from "../constants/data";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-section relative z-10">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and concepts I build with"
          description="A working set of languages, frameworks, and engineering principles I reach for across the stack."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <GlassCard className="p-6 animated-border h-full">
                <h3 className="font-display font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-highlight" />
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-lg bg-white/5 border border-borderc text-text-secondary hover:text-text-primary hover:border-accent-primary/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
