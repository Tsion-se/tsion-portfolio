import { motion } from "framer-motion";
import { journey } from "../constants/data";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";

export function Journey() {
  return (
    <section id="journey" className="relative py-28 sm:py-36">
      <div className="container-section">
        <SectionHeading
          eyebrow="Personal Development Journey"
          title="I don't have a resume of jobs yet — I have a record of building"
          description="Since starting my degree, growth has come from projects, not job titles. Here's the path so far."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[15px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-highlight sm:-translate-x-1/2" />

          <div className="space-y-10">
            {journey.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex sm:items-center gap-6 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-1.5 sm:top-1/2 sm:-translate-y-1/2 w-8 h-8 rounded-full bg-bg-primary border-2 border-accent-primary flex items-center justify-center shadow-glow z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-accent-primary to-accent-highlight" />
                </div>

                <div className="ml-14 sm:ml-0 sm:w-1/2" />

                <div className="ml-14 sm:ml-0 sm:w-1/2">
                  <GlassCard className="p-6" hover={false}>
                    <h3 className="font-display font-semibold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
