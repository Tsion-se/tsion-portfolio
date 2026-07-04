import { motion } from "framer-motion";
import { Download, Mail, ArrowRight } from "lucide-react";
import {
  SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiNodedotjs, SiFirebase,
} from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import portrait from "../assets/images/portrait.jpg";
import { personal } from "../constants/data";
import { MagneticButton } from "./ui/MagneticButton";
import { useEffect, useState } from "react";

const floatingIcons = [
  { Icon: SiReact, color: "#61DAFB", top: "6%", left: "4%", delay: 0 },
  { Icon: SiTypescript, color: "#3178C6", top: "18%", left: "88%", delay: 0.4 },
  { Icon: SiTailwindcss, color: "#06B6D4", top: "72%", left: "88%", delay: 0.8 },
  { Icon: SiJavascript, color: "#F7DF1E", top: "82%", left: "6%", delay: 1.2 },
  { Icon: SiNodedotjs, color: "#68A063", top: "4%", left: "72%", delay: 1.6 },
  { Icon: SiFirebase, color: "#FFCA28", top: "50%", left: "-2%", delay: 2 },
];

function TypedTagline() {
  const words = personal.taglineParts;
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = deleting ? 35 : 65;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return (
    <span className="text-gradient">
      {text}
      <span className="inline-block w-[2px] h-[0.9em] bg-accent-secondary ml-1 align-middle animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Ambient background grid + glow */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-accent-highlight/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-section grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-eyebrow mb-5">Welcome to my portfolio</p>
          <h1 className="text-hero-sm sm:text-hero text-text-primary mb-4">
            {personal.name}
          </h1>
          <div className="font-display text-xl sm:text-2xl h-8 mb-6">
            <TypedTagline />
          </div>
          <p className="text-text-secondary text-base sm:text-body max-w-xl mb-9">
            {personal.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <MagneticButton href={personal.resumeUrl} download icon={<Download size={18} />}>
              Download Resume
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              icon={<ArrowRight size={18} />}
            >
              View Projects
            </MagneticButton>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: FaGithub, href: personal.github, label: "GitHub" },
              { icon: FaLinkedin, href: personal.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent-primary/50 hover:shadow-glow transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-md aspect-square"
        >
          {/* Glass card behind */}
          <div className="absolute inset-6 glass rounded-full shadow-premium" />

          {/* Animated glowing ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-accent-primary via-accent-secondary to-accent-highlight opacity-70 blur-md animate-pulse-glow" />
          <div className="absolute inset-0 rounded-full border-2 border-accent-primary/40 animate-spin-slow" />

          {/* Particles */}
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-accent-secondary/70 animate-float-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}

          {/* Portrait */}
          <div className="absolute inset-4 rounded-full overflow-hidden shadow-glow-lg">
            <img
              src={portrait}
              alt="Portrait of Tsion Asrat"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Floating tech icons */}
          {floatingIcons.map(({ Icon, color, top, left, delay }, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 rounded-2xl glass flex items-center justify-center shadow-premium animate-float"
              style={{ top, left, animationDelay: `${delay}s` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + delay * 0.2, duration: 0.5 }}
            >
              <Icon size={22} color={color} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
