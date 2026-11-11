
import { useEffect, useState } from "react";
import {
  Bot,
  Play,
  Pause,
  Square,
  X,
  Volume2,
  MessageCircle,
} from "lucide-react";
import "./VoiceAssistant.css";

const guideMessages = {
  home: "Hi! Welcome to Shivani's portfolio. I'm your AI guide. Let me show you around.",
  about: "Welcome to the About section. Here you can learn about Shivani, her background and journey.",
  skills: "Let's explore Shivani's technical skills and technologies.",
  experience: "Here you can learn about Shivani's internship and practical experience.",
  projects: "Welcome to the projects section. Explore the applications Shivani has developed.",
  contact: "Interested in connecting with Shivani? You can find her contact details here.",
};

const sectionIds = Object.keys(guideMessages);

export function VoiceAssistant() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [language, setLanguage] = useState("en-IN");

  const currentMessage =
    guideMessages[activeSection] || guideMessages.home;

  useEffect(() => {
    const sections = sectionIds
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

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => window.speechSynthesis.cancel();
  }, []);

  const getCurrentSectionText = () => {
    const element = document.getElementById(activeSection);

    return element?.innerText || currentMessage;
  };

  const speak = () => {
    window.speechSynthesis.cancel();

    const text = `${currentMessage}. ${getCurrentSectionText()}`;

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = language;
    utterance.rate = 0.92;
    utterance.pitch = 1.08;

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

  const pause = () => {
    window.speechSynthesis.pause();
    setPaused(true);
  };

  const resume = () => {
    window.speechSynthesis.resume();
    setPaused(false);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setPaused(false);
  };

  const handleClose = () => {
    stop();
    setOpen(false);
  };

  return (
    <div className="voice-assistant">

      {open && (
        <div className="voice-panel">

          <div className="voice-header">
            <div className="voice-profile">
              <div className="voice-avatar-small">
                <Bot size={23} />
              </div>

              <div>
                <strong>Nova AI Guide</strong>
                <span>
                  <i /> Online Assistant
                </span>
              </div>
            </div>

            <button
              className="voice-close"
              onClick={handleClose}
            >
              <X size={19} />
            </button>
          </div>

          <div className="voice-welcome">
            <div className="voice-robot-mini">
              <Bot size={32} />
            </div>

            <div>
              <span className="voice-section-label">
                EXPLORING {activeSection.toUpperCase()}
              </span>

              <h3>{currentMessage}</h3>
            </div>
          </div>

          <p className="voice-description">
            I'm Nova, your personal portfolio guide.
            I can explain the section you're currently viewing.
          </p>

          <label className="voice-language-label">
            Choose voice language
          </label>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            disabled={speaking && !paused}
          >
            <option value="en-IN">English</option>
            <option value="hi-IN">Hindi</option>
          </select>

          <div className="voice-controls">
            <button
              onClick={speak}
              title="Play"
              className="voice-play"
            >
              <Play size={19} />
            </button>

            <button
              onClick={paused ? resume : pause}
              disabled={!speaking}
              title={paused ? "Resume" : "Pause"}
            >
              {paused ? <Play size={18} /> : <Pause size={18} />}
            </button>

            <button
              onClick={stop}
              disabled={!speaking}
              title="Stop"
            >
              <Square size={17} />
            </button>
          </div>

          <div className="voice-status">
            <span className={speaking ? "status-active" : ""} />
            {speaking
              ? paused
                ? "Voice paused"
                : "Nova is speaking..."
              : "Ready to guide you"}
          </div>

        </div>
      )}

      <div className="voice-floating-wrapper">

        {!open && (
          <button
            className="voice-tooltip"
            onClick={() => setOpen(true)}
          >
            <MessageCircle size={14} />
            Hey! Need a guide?
          </button>
        )}

        <button
          className={`voice-floating-button ${
            speaking ? "robot-speaking" : ""
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Open Nova AI Guide"
        >
          <span className="robot-ring" />
          <Bot size={35} strokeWidth={1.7} />
          <span className="robot-dot" />
        </button>

      </div>
    </div>
  );
}
