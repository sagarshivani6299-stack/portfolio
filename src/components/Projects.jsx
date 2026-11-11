import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/portfolio";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "E-commerce", "API / React", "Full-stack / Real-time", "Performance", "Creative Development", "State Management", "Food / React", "Media / API"];
  const visible = useMemo(() => filter === "All" ? projects : projects.filter((p) => p.category === filter), [filter]);
  return (
    <section className="section section-alt" id="projects">
      <div className="shell">
        <SectionHeading number="04" eyebrow="SELECTED WORK" title="Things I've" accent="built." description="A collection of projects exploring frontend development, state management, APIs, performance and full-stack workflows." />
        <div className="project-toolbar reveal">
          <span>{String(visible.length).padStart(2, "0")} PROJECTS</span>
          <div className="filter-list">
            {filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
        </div>
        <div className="projects-grid">{visible.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
        <div className="projects-footnote"><span>MORE EXPERIMENTS COMING SOON</span><ArrowUpRight size={16} /></div>
      </div>
    </section>
  );
}
