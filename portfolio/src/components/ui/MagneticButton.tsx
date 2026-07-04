import { motion } from "framer-motion";
import { type ReactNode, useRef, useState } from "react";

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  icon,
  download,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  icon?: ReactNode;
  download?: boolean | string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-display font-semibold text-sm sm:text-base transition-colors duration-300 select-none";
  const variants: Record<string, string> = {
    primary:
      "bg-gradient-to-r from-accent-primary to-accent-highlight text-white shadow-glow hover:shadow-glow-lg",
    secondary: "glass text-text-primary hover:border-accent-primary/50",
    ghost: "text-text-secondary hover:text-text-primary",
  };

  const Comp = href ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="inline-block"
    >
      <Comp
        href={href}
        target={href && !download ? "_blank" : undefined}
        rel={href && !download ? "noopener noreferrer" : undefined}
        download={download}
        type={!href ? type : undefined}
        onClick={onClick}
        whileTap={{ scale: 0.95 }}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {icon}
        {children}
      </Comp>
    </motion.div>
  );
}
