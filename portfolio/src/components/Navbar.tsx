import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "../constants/data";
import { useActiveSection } from "../hooks/useActiveSection";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-section">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-premium" : "bg-transparent"
          }`}
        >
          <button
            onClick={() => scrollTo("home")}
            className="font-display font-bold text-lg tracking-tight"
          >
            <span className="text-gradient">Tsion</span>
            <span className="text-text-primary">.dev</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-4 right-4 -bottom-0.5 h-[2px] bg-gradient-to-r from-accent-primary to-accent-highlight rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2.5 rounded-full text-sm font-display font-semibold bg-gradient-to-r from-accent-primary to-accent-highlight text-white shadow-glow hover:shadow-glow-lg transition-shadow"
            >
              Let's Talk
            </button>
          </div>

          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden mt-2"
            >
              <div className="glass rounded-2xl p-4 flex flex-col gap-1 shadow-premium">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeId === link.id
                        ? "text-text-primary bg-white/5"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={personal.resumeUrl}
                  download
                  className="mt-2 px-4 py-3 rounded-xl text-sm font-display font-semibold text-center bg-gradient-to-r from-accent-primary to-accent-highlight text-white"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
