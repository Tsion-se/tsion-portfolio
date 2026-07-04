import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personal } from "../constants/data";

export function Footer() {
  return (
    <footer className="relative border-t border-borderc py-10">
      <div className="container-section flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} {personal.name}. Built with React & Tailwind CSS.
        </p>
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
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent-primary/50 transition-all"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
