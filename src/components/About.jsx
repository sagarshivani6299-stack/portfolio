import { ArrowUpRight, Code2, GraduationCap, Layers3 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { portfolio } from "../data/portfolio";

export function About() {
  return (
    <section className="section shell" id="about">
      <SectionHeading number="01" eyebrow="A LITTLE INTRODUCTION" title="Curious mind." accent="Builder's heart." description="A little about the person behind the pixels." />
      <div className="about-grid">
        <div className="about-main reveal">
          <div className="about-label">01 — WHO I AM</div>
          <p className="about-lead">{portfolio.profile}</p>
          <div className="about-quote">“Good interfaces don't just look good. They make complex things feel simple.”</div>
        </div>
        <div className="about-side">
          <article className="info-card reveal">
            <div className="info-icon"><GraduationCap /></div>
            <div className="about-label">EDUCATION</div>
            <h3>{portfolio.education.degree}</h3>
            <p>{portfolio.education.institute}</p>
            <span>{portfolio.education.period}</span>
          </article>
          <article className="info-card reveal">
            <div className="info-icon"><Code2 /></div>
            <div className="about-label">WHAT I ENJOY</div>
            <h3>Building for the web</h3>
            <p>Responsive interfaces, reusable components, API integrations and thoughtful user experiences.</p>
          </article>
        </div>
      </div>
      <div className="about-stats reveal">
        <div><strong>10<span>+</span></strong><small>COMPLETED PROJECTS</small></div>
        <div><strong>React</strong><small>CORE FRONTEND</small></div>
        <div><strong>Full-stack</strong><small>PROJECT EXPOSURE</small></div>
        <div><strong><Layers3 size={25} /></strong><small>ALWAYS LEARNING</small></div>
      </div>
    </section>
  );
}
