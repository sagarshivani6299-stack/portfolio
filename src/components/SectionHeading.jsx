export function SectionHeading({ number, eyebrow, title, accent, description }) {
  return (
    <div className="section-heading reveal">
      <div className="section-eyebrow"><span>{number}</span> {eyebrow}</div>
      <h2>{title} <span className="gradient-text">{accent}</span></h2>
      {description && <p>{description}</p>}
    </div>
  );
}
