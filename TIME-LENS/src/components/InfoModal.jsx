import { useEffect } from 'react';
import SmartImage from './SmartImage.jsx';

// Reusable modal. Receives a normalised item: { title, meta, image, text, facts[] }.
export default function InfoModal({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden'; // stop page scrolling behind the modal
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <article className="modal" role="dialog" aria-modal="true" aria-label={item.title} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-img"><SmartImage src={item.image} alt={item.title} /></div>
        <div className="modal-body">
          <span className="period">{item.meta}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <ul>{item.facts.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
      </article>
    </div>
  );
}
