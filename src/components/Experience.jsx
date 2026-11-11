
import {
  BriefcaseBusiness,
  GraduationCap,
  Award,
  ExternalLink,
  CalendarDays,
} from "lucide-react";

import { SectionHeading } from "./SectionHeading";
import { portfolio } from "../data/portfolio";

export function Experience() {
  const certifications = [
    {
      title: "MERN Stack Development",
      category: "Full Stack Development",
      color: "purple",
    },
    {
      title: "Agentic AI",
      category: "Artificial Intelligence",
      color: "cyan",
    },
    {
      title: "Web Designing",
      category: "Web Development",
      color: "pink",
    },
    {
      title: "Internet of Things (IoT)",
      category: "Emerging Technology",
      color: "blue",
    },
    {
      title: "Cybersecurity",
      category: "Information Security",
      color: "green",
    },
    {
      title: "Networking Analysis",
      category: "Computer Networking",
      color: "orange",
    },
  ];

  return (
    <section className="section shell" id="experience">

      <SectionHeading
        number="03"
        eyebrow="MY PROFESSIONAL JOURNEY"
        title="Experience &"
        accent="education."
        description="My learning journey, professional experience, academic background and technical certifications."
      />

      {/* EXPERIENCE */}

      <div className="experience-heading">
        <span className="section-icon">
          <BriefcaseBusiness size={20} />
        </span>
        <div>
          <h3>Professional Experience</h3>
          <p>Where I have worked and grown</p>
        </div>
      </div>

      <div className="timeline">
        {portfolio.experience.map((item, index) => (
          <article className="timeline-item reveal" key={item.company}>
            <div className="timeline-marker">
              <BriefcaseBusiness size={17} />
            </div>

            <div className="timeline-content">
              <div className="timeline-meta">
                <span>
                  <CalendarDays size={14} />
                  {item.period}
                </span>
                <span>0{index + 1}</span>
              </div>

              <h3>{item.role}</h3>
              <h4>{item.company}</h4>

              <p>{item.description}</p>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* EDUCATION */}

      <div className="experience-heading education-heading">
        <span className="section-icon">
          <GraduationCap size={21} />
        </span>
        <div>
          <h3>Education</h3>
          <p>My academic background</p>
        </div>
      </div>

      <div className="education-card reveal">
        <div className="education-icon">
          <GraduationCap size={28} />
        </div>

        <div>
          <span className="education-label">
            GRADUATION
          </span>
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>Patna Women's College</p>
          <span className="education-description">
            Academic foundation in computer applications,
            programming and information technology.
          </span>
        </div>
      </div>

      {/* CERTIFICATIONS */}

      <div className="experience-heading certification-heading">
        <span className="section-icon">
          <Award size={20} />
        </span>
        <div>
          <h3>Certifications & Learning</h3>
          <p>Knowledge and technical learning areas</p>
        </div>
      </div>

      <div className="certification-grid">
        {certifications.map((item, index) => (
          <article
            className={`certification-card reveal ${item.color}`}
            key={item.title}
          >
            <div className="certificate-top">
              <span className="certificate-icon">
                <Award size={23} />
              </span>

              <span className="certificate-number">
                0{index + 1}
              </span>
            </div>

            <h3>{item.title}</h3>
            <p>{item.category}</p>

            <span className="certificate-link">
              Certificate link coming soon
              <ExternalLink size={14} />
            </span>
          </article>
        ))}
      </div>

    </section>
  );
}
