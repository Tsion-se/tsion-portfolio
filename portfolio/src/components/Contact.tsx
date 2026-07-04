import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Mail, Phone, MapPin, Send as SendIcon, CheckCircle2, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { personal } from "../constants/data";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { db, isFirebaseConfigured } from "../lib/firebase";

const schema = z.object({
  name: z.string().min(2, "Enter your full name").max(80),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Add a short subject").max(120),
  message: z.string().min(10, "Message should be at least 10 characters").max(5000),
  // honeypot — real users never fill this in
  company: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

const contactCards = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
  { icon: MapPin, label: "Location", value: personal.location, href: undefined },
  { icon: FaGithub, label: "GitHub", value: "Tsion-se", href: personal.github },
  { icon: FaLinkedin, label: "LinkedIn", value: "Tsion Asrat", href: personal.linkedin },
  { icon: FaTelegram, label: "Telegram", value: "@Kiyu1y", href: personal.telegram },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const mountedAt = useRef(Date.now());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Simple time-based spam guard — bots submit near-instantly
    if (Date.now() - mountedAt.current < 1500) return;
    if (data.company) return; // honeypot tripped

    setStatus("sending");
    try {
      if (!isFirebaseConfigured || !db) {
        // Firebase not yet configured — surface a clear message rather than
        // silently pretending it worked.
        throw new Error("not-configured");
      }
      await addDoc(collection(db, "messages"), {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        timestamp: serverTimestamp(),
      });
      setStatus("success");
      reset();
      mountedAt.current = Date.now();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-primary/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="container-section relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project, an opportunity, or just want to say hello? My inbox is open."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: contact cards */}
          <div className="grid sm:grid-cols-2 gap-5 content-start">
            {contactCards.map((card, i) => {
              const content = (
                <GlassCard className="p-5 h-full flex items-start gap-4" hover>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-primary to-accent-highlight flex items-center justify-center shrink-0 shadow-glow">
                    <card.icon size={18} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">
                      {card.label}
                    </p>
                    <p className="text-text-primary text-sm font-medium truncate">{card.value}</p>
                  </div>
                </GlassCard>
              );
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  {card.href ? (
                    <a href={card.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-7 sm:p-8" hover={false}>
              <h3 className="font-display text-xl font-semibold mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* honeypot field — hidden from real users */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("company")}
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm text-text-secondary mb-1.5 block">
                      Full Name
                    </label>
                    <input
                      id="name"
                      {...register("name")}
                      className="w-full bg-white/5 border border-borderc rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-primary outline-none transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm text-text-secondary mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full bg-white/5 border border-borderc rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-primary outline-none transition-colors"
                      placeholder="you@email.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm text-text-secondary mb-1.5 block">
                    Subject
                  </label>
                  <input
                    id="subject"
                    {...register("subject")}
                    className="w-full bg-white/5 border border-borderc rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-primary outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1.5">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-text-secondary mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className="w-full bg-white/5 border border-borderc rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-primary outline-none transition-colors resize-none"
                    placeholder="Tell me a bit about what you have in mind..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1.5">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileTap={{ scale: 0.97 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-display font-semibold bg-gradient-to-r from-accent-primary to-accent-highlight text-white shadow-glow hover:shadow-glow-lg transition-shadow disabled:opacity-60"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      <SendIcon size={18} /> Send Message
                    </>
                  )}
                </motion.button>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-sm text-accent-secondary bg-accent-secondary/10 border border-accent-secondary/30 rounded-xl px-4 py-3"
                    >
                      <CheckCircle2 size={18} /> Message sent — thank you! I'll get back to you soon.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-sm text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded-xl px-4 py-3"
                    >
                      <AlertCircle size={18} />
                      {isFirebaseConfigured
                        ? "Something went wrong sending your message — please try again or email me directly."
                        : `Contact form isn't connected yet — please email me directly at ${personal.email}.`}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
