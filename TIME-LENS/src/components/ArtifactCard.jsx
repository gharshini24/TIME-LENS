import SmartImage from './SmartImage.jsx';

export default function ArtifactCard({ item, onOpen }) {
  return (
    <button className="art-card reveal" onClick={() => onOpen(item)} aria-label={`Open ${item.name}`}>
      <div className="art-frame"><SmartImage src={item.image} alt={item.name} /></div>
      <h3>{item.name}</h3>
      <span className="period">{item.civilization} · {item.period}</span>
    </button>
  );
}
