import { useState } from 'react';

// Horizontal on desktop, vertical on mobile (see website.css).
export default function Timeline({ events }) {
  const [selected, setSelected] = useState(events[0].id);
  const current = events.find((e) => e.id === selected);

  return (
    <div className="timeline">
      <ol className="tl-track">
        {events.map((e) => (
          <li key={e.id}>
            <button className={`tl-node ${e.id === selected ? 'active' : ''}`} onClick={() => setSelected(e.id)} aria-pressed={e.id === selected}>
              <span className="tl-dot" />
              <span className="tl-date">{e.date}</span>
              <span className="tl-title">{e.title}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="tl-panel" key={current.id}>
        <h3>{current.title} <small>{current.date}</small></h3>
        <p>{current.text}</p>
        <ul>{current.facts.map((f) => <li key={f}>{f}</li>)}</ul>
      </div>
    </div>
  );
}
