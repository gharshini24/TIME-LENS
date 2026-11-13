import SmartImage from './SmartImage.jsx';

export default function ExhibitionCard({ item, onOpen }) {
  return (
    <button className="exh-card reveal" onClick={() => onOpen(item)} aria-label={`Open exhibition ${item.title}`}>
      <SmartImage src={item.image} alt={item.title} />
      <div className="exh-shade" />
      <div className="exh-info">
        <span className="period">{item.theme}</span>
        <h3>{item.title}</h3>
        <p>{item.blurb}</p>
      </div>
    </button>
  );
}
