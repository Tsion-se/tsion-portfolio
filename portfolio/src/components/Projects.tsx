import { projects } from "../constants/data";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-accent-highlight/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-section relative z-10">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've shipped"
          description="Real, deployed products — built end to end, from interface to interaction."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
