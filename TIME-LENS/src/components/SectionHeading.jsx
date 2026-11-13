export default function SectionHeading({ label, title }) {
  return (
    <header className="section-heading reveal">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
    </header>
  );
}
