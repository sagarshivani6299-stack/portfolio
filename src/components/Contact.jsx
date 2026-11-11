import { ArrowUpRight, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { portfolio } from "../data/portfolio";

export function Contact() {
  return (
    <section className="section shell contact-section" id="contact">
      <SectionHeading number="05" eyebrow="HAVE A PROJECT IN MIND?" title="Let's make something" accent="meaningful." description="Interested in an opportunity, collaboration or just want to say hello? My inbox is open." />
      <div className="contact-panel reveal">
        <div><span className="about-label">LET'S CONNECT</span><h3>Have a good idea?<br /><span className="gradient-text">Let's talk about it.</span></h3><a className="button button-primary" href={`mailto:${portfolio.email}`}>Say hello <ArrowUpRight size={17} /></a></div>
        <div className="contact-details">
          <a href={`mailto:${portfolio.email}`}><Mail size={17} /><span>{portfolio.email}</span><ArrowUpRight size={15} /></a>
          <a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /><span>LinkedIn profile</span><ArrowUpRight size={15} /></a>
          <a href={portfolio.github} target="_blank" rel="noreferrer"><Github size={17} /><span>GitHub profile</span><ArrowUpRight size={15} /></a>
          <div><MapPin size={17} /><span>{portfolio.location}</span></div>
        </div>
      </div>
    </section>
  );
}
