import { useState } from 'react';
import { useMuseum } from '../context/MuseumContext.jsx';

const LINKS = [['Home', 'home'], ['Discover', 'discover'], ['Exhibitions', 'exhibitions'], ['Timeline', 'timeline'], ['About', 'about']];

export default function Navbar({ navigate, onPick, scrollTo }) {
  const { civilizations, exhibitions, artifacts } = useMuseum();
  const [menu, setMenu] = useState(false);
  const [searching, setSearching] = useState(false);
  const [q, setQ] = useState('');

  // Search runs over the shared data: name/title + kind.
  const all = [
    ...civilizations.map((i) => ({ kind: 'civ', i, label: i.name })),
    ...exhibitions.map((i) => ({ kind: 'exh', i, label: i.title })),
    ...artifacts.map((i) => ({ kind: 'art', i, label: i.name })),
  ];
  const results = q.trim() ? all.filter((r) => r.label.toLowerCase().includes(q.toLowerCase())).slice(0, 5) : [];

  const go = (id) => { setMenu(false); scrollTo(id); };

  return (
    <nav className="nav">
      <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); go('home'); }}>TIME<span>LENS</span></a>
      <ul className={`nav-links ${menu ? 'open' : ''}`}>
        {LINKS.map(([t, id]) => (
          <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>{t}</a></li>
        ))}
        <li><a href="/admin" className="admin-link" onClick={(e) => { e.preventDefault(); navigate('/admin'); }}>Admin</a></li>
      </ul>
      <div className="nav-tools">
        <button className="icon-btn" aria-label="Search" onClick={() => setSearching(!searching)}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
        </button>
        <button className="icon-btn burger" aria-label="Menu" onClick={() => setMenu(!menu)}>{menu ? '✕' : '☰'}</button>
      </div>
      {searching && (
        <div className="search-box">
          <input autoFocus placeholder="Search civilizations, exhibitions, artifacts…" value={q} onChange={(e) => setQ(e.target.value)} />
          {results.map((r) => (
            <button key={r.kind + r.i.id} onClick={() => { onPick(r.kind, r.i); setSearching(false); setQ(''); }}>{r.label}</button>
          ))}
        </div>
      )}
    </nav>
  );
}
