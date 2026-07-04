import { motion } from "framer-motion";
import { GraduationCap, Target, Rocket } from "lucide-react";
import { personal, education, statistics } from "../constants/data";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { AnimatedCounter } from "./ui/AnimatedCounter";

const storyPoints = [
  {
    icon: GraduationCap,
    label: "Foundation",
    title: "Two Degrees, One Direction",
    body: "Studying Software Engineering and Management side by side, so every system I design is built with both technical rigor and business sense.",
  },
  {
    icon: Rocket,
    label: "Current Focus",
    title: "Shipping Real Products",
    body: "Building and deploying full-stack applications — from a marketing site to a restaurant ordering platform — to turn coursework into production experience.",
  },
  {
    icon: Target,
    label: "Future Vision",
    title: "Engineering With Purpose",
    body: "Working toward becoming an engineer who can design scalable, secure systems that create measurable value for the people who use them.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-section">
        <SectionHeading
          eyebrow="About Me"
          title="Grounded in engineering. Driven by purpose."
          description={personal.careerGoal}
        />

        {/* Story timeline */}
        <div className="relative grid md:grid-cols-3 gap-6 mb-20">
          <div className="hidden md:block absolute top-10 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-accent-primary/40 via-accent-secondary/40 to-accent-highlight/40" />
          {storyPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <GlassCard className="p-7 h-full relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-highlight flex items-center justify-center mb-5 shadow-glow">
                  <point.icon size={22} className="text-white" />
                </div>
                <p className="section-eyebrow mb-2 text-xs">{point.label}</p>
                <h3 className="font-display text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{point.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* About text + personality */}
        <div className="grid lg:grid-cols-5 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-4"
          >
            {personal.about.map((p, i) => (
              <p key={i} className="text-text-secondary text-base leading-relaxed">
                {p}
              </p>
            ))}

            <div className="pt-4 space-y-4">
              {education.map((edu) => (
                <GlassCard key={edu.id} className="p-5" hover={false}>
                  <p className="font-display font-semibold text-text-primary">{edu.program}</p>
                  <p className="text-text-secondary text-sm mb-3">{edu.school}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.focus.slice(0, 5).map((f) => (
                      <span
                        key={f}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-borderc text-text-secondary"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-7 h-full" hover={false}>
              <p className="section-eyebrow mb-4 text-xs">How I Work</p>
              <div className="flex flex-wrap gap-2">
                {personal.personality.map((trait) => (
                  <span
                    key={trait}
                    className="text-sm px-3.5 py-1.5 rounded-full glass text-text-primary hover:border-accent-primary/50 hover:shadow-glow transition-all"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {statistics.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 text-center" hover={false}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-text-secondary text-xs sm:text-sm mt-2 uppercase tracking-wide">
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
