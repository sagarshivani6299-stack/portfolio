import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { portfolio } from "./data/portfolio";
// import { VoiceAssistant } from "./components/VoiceAssistant";
import { AssistantGuide } from "./components/AssistantGuide";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.9 });
    lenis.on("scroll", ScrollTrigger.update);
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.fromTo(element, { y: 34, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true }
        });
      });
    });

    const cursor = cursorRef.current;
    const move = (event) => {
      if (!cursor) return;
      gsap.to(cursor, { x: event.clientX, y: event.clientY, duration: 0.22, ease: "power2.out" });
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div className="custom-cursor" ref={cursorRef} aria-hidden="true" />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
         <AssistantGuide />
      </main>
      <Footer />
      {/* <VoiceAssistant /> */}
      <div className="availability"><span className="status-dot" /> Open to opportunities</div>
    </>
  );
}
