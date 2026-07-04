import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1.8,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className="font-display text-4xl sm:text-5xl font-bold text-gradient"
    >
      {display}
      {suffix}
    </motion.span>
  );
}
