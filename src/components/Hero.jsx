import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Scene3D } from "./Scene3D";
import { portfolio } from "../data/portfolio";

export function Hero() {
  return (
    <section className="hero shell" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
        <p className="hero-kicker">HELLO, I'M</p>
        <h1>Shivani<br /><span className="gradient-text">Sagar.</span></h1>
        <div className="hero-role"><span /> FRONTEND DEVELOPER <i>·</i> CREATIVE CODER</div>
        <p className="hero-description">{portfolio.tagline}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
          <a className="button button-ghost" href="#contact">Get in touch</a>
        </div>
        <div className="hero-socials">
          <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <span className="social-rule" /> <span>BASED IN {portfolio.location.toUpperCase()}</span>
        </div>
      </div>
      <div className="hero-visual"><Scene3D /><div className="orbit-label orbit-label-one">CREATIVE<br />DEVELOPMENT</div><div className="orbit-label orbit-label-two">REACT × THREE.JS</div></div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      <div className="hero-index">01 / 06</div>
    </section>
  );
}