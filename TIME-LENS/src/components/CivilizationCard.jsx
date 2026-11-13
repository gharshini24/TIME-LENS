import SmartImage from './SmartImage.jsx';

export default function CivilizationCard({ item, onOpen }) {
  return (
    <button className="civ-card reveal" onClick={() => onOpen(item)} aria-label={`Open ${item.name}`}>
      <SmartImage src={item.image} alt={item.name} />
      <div className="civ-shade" />
      <div className="civ-info">
        <span className="period">{item.period}</span>
        <h3>{item.name}</h3>
        <p className="hover-text">{item.tagline} <span className="arrow">→</span></p>
      </div>
    </button>
  );
}
