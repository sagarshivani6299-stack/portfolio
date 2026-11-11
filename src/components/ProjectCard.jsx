import { ArrowUpRight, Github, Layers3 } from "lucide-react";

export function ProjectCard({ project }) {
  return (
    <article className={`project-card reveal ${project.featured ? "project-featured" : ""}`}>
      <div className="project-topline"><span>{project.number} / 11</span><span>{project.ongoing ? "IN PROGRESS" : "COMPLETED"}</span></div>
      <div className="project-art">
        <div className="project-art-orbit orbit-a" />
        <div className="project-art-orbit orbit-b" />
        <div className="project-art-core"><Layers3 size={31} /></div>
        <span className="project-art-label">{project.category.toUpperCase()}</span>
      </div>
      <div className="project-content">
        <div className="project-title-row"><h3>{project.name}</h3>{project.ongoing && <span className="live-pill">BUILDING</span>}</div>
        <p>{project.description}</p>
        <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="project-links">
          {project.url ? <a href={project.url} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={15} /></a> : <span className="demo-unavailable">Demo link not provided</span>}
        </div>
      </div>
    </article>
  );
}
