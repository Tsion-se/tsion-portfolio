import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 ${align === "center" ? "text-center mx-auto" : "text-left"} max-w-2xl`}
    >
      <p className="section-eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-section-sm sm:text-section text-text-primary">{title}</h2>
      {description && (
        <p className="mt-4 text-text-secondary text-base sm:text-body">{description}</p>
      )}
    </motion.div>
  );
}
