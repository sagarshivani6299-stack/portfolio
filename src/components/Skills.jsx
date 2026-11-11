import { Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { portfolio } from "../data/portfolio";

export function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="shell">
        <SectionHeading number="02" eyebrow="MY TOOLKIT" title="Tools I use to" accent="make things happen." description="Technologies and concepts I've worked with across learning and project development." />
        <div className="skills-grid">
          {portfolio.skills.map((group, index) => (
            <article className="skill-card reveal" key={group.title}>
              <div className="skill-card-top"><span>0{index + 1}</span><div className="skill-decoration" /></div>
              <h3>{group.title}</h3>
              <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="exploring-card reveal">
          <div className="exploring-title"><Sparkles size={18} /><div><span className="about-label">IN PROGRESS</span><h3>Currently exploring</h3></div></div>
          <div className="skill-tags">{portfolio.exploring.map((item) => <span className="tag-glow" key={item}>{item}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
