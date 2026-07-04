import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
  hover = true,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={`glass rounded-2xl shadow-premium ${
        hover ? "transition-all duration-300 hover:border-accent-primary/40 hover:shadow-glow" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
