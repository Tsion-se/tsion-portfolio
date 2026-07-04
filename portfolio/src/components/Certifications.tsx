import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../constants/data";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 sm:py-36">
      <div className="container-section">
        <SectionHeading
          eyebrow="Certifications"
          title="Currently building toward"
          description="Certification cards, ready to be filled in as each one is completed."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
            >
              <GlassCard className="p-6 flex items-center gap-4 border-dashed" hover={false}>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-dashed border-borderc flex items-center justify-center shrink-0">
                  <Award size={20} className="text-accent-secondary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-text-primary">{cert.title}</p>
                  <p className="text-xs text-text-secondary uppercase tracking-wide mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
