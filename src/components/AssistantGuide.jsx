
import { useEffect, useState } from "react";
import {
  Bot,
  Volume2,
  Pause,
  Play,
  Square,
  X,
  MessageCircle,
} from "lucide-react";
import "./AssistantGuide.css";

const guides = {
  home: {
    title: "Welcome!",
    message:
      "Hi! I'm your AI guide. Welcome to Shivani's portfolio. Let me show you around!",
  },
  about: {
    title: "About Shivani",
    message:
      "Here you can learn about Shivani, her background, education and development journey.",
  },
  skills: {
    title: "Technical Skills",
    message:
      "Let's explore Shivani's technical skills, including React, JavaScript, Redux Toolkit and more.",
  },
  experience: {
    title: "Experience",
    message:
      "Here you can explore Shivani's internship experience and practical learning journey.",
  },
  projects: {
    title: "Projects",
    message:
      "This is the exciting part! Explore the applications and projects Shivani has built.",
  },
  contact: {
    title: "Let's Connect",
    message:
      "Interested in working together? You can connect with Shivani through the contact section.",
  },
};

export function AssistantGuide() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);

  const currentGuide = guides[activeSection] || guides.home;

  useEffect(() => {
    const sections = Object.keys(guides)
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => window.speechSynthesis.cancel();
  }, []);

  const speakMessage = () => {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(
      currentGuide.message
    );

    utterance.lang = "en-IN";
    utterance.rate = 0.95;
    utterance.pitch = 1.1;

    utterance.onstart = () => {
      setSpeaking(true);
      setPaused(false);
    };

    utterance.onend = () => {
      setSpeaking(false);
      setPaused(false);
    };

    utterance.onerror = () => {
      setSpeaking(false);
      setPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const pauseSpeech = () => {
    window.speechSynthesis.pause();
    setPaused(true);
  };

  const resumeSpeech = () => {
    window.speechSynthesis.resume();
    setPaused(false);
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setPaused(false);
  };

  return (
    <div className="assistant-guide">
      {isOpen && (
        <div className="assistant-panel">
          <div className="assistant-header">
            <div className="assistant-status">
              <Bot size={21} />
              <div>
                <h3>Shivani's AI Guide</h3>
                <span>
                  <i /> Online · Portfolio Assistant
                </span>
              </div>
            </div>

            <button
              className="assistant-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
            >
              <X size={19} />
            </button>
          </div>

          <div className="assistant-message">
            <div className="assistant-small-robot">
              <Bot size={28} />
            </div>

            <div>
              <span className="assistant-label">
                {currentGuide.title}
              </span>
              <p>{currentGuide.message}</p>
            </div>
          </div>

          <div className="assistant-controls">
            <button onClick={speakMessage}>
              <Volume2 size={17} />
              Speak
            </button>

            {speaking && (
              <>
                <button
                  onClick={paused ? resumeSpeech : pauseSpeech}
                >
                  {paused ? <Play size={17} /> : <Pause size={17} />}
                  {paused ? "Resume" : "Pause"}
                </button>

                <button onClick={stopSpeech}>
                  <Square size={16} />
                  Stop
                </button>
              </>
            )}
          </div>

          <div className="assistant-footer">
            <span>
              Currently exploring: {activeSection}
            </span>
          </div>
        </div>
      )}

      <button
        className={`assistant-robot ${isOpen ? "robot-active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI portfolio guide"
      >
        <span className="robot-glow" />
        <Bot size={36} strokeWidth={1.7} />
        <span className="robot-online" />
      </button>

      {!isOpen && (
        <button
          className="assistant-hint"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle size={14} />
          Need a guide?
        </button>
      )}
    </div>
  );
}
