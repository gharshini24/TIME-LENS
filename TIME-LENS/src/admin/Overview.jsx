import { useMuseum } from '../context/MuseumContext.jsx';
import StatCard from './StatCard.jsx';
import SmartImage from '../components/SmartImage.jsx';

export default function Overview({ navigate }) {
  const { civilizations, exhibitions, artifacts, timeline } = useMuseum(); // SAME data as the homepage
  const today = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const recent = [...artifacts].reverse().slice(0, 3); // newest = last in the list

  return (
    <>
      <header className="welcome">
        <div>
          <span className="eyebrow">{today}</span>
          <h1>Welcome back, Administrator.</h1>
          <p>Here’s an overview of your digital museum.</p>
        </div>
        <button className="btn" onClick={() => navigate('/')}>Visit Museum</button>
      </header>

      {/* Numbers are .length of the shared arrays, never typed by hand */}
      <section className="stats">
        <StatCard label="Civilizations" value={civilizations.length} />
        <StatCard label="Exhibitions" value={exhibitions.length} />
        <StatCard label="Artifacts" value={artifacts.length} />
        <StatCard label="Timeline events" value={timeline.length} />
      </section>

      <section className="panels">
        <div className="panel">
          <h2>Featured exhibitions</h2>
          {exhibitions.map((e) => (
            <div className="row" key={e.id}><SmartImage src={e.image} alt={e.title} /><div><b>{e.title}</b><span>{e.theme}</span></div></div>
          ))}
        </div>
        <div className="panel">
          <h2>Recently added artifacts</h2>
          {recent.map((a) => (
            <div className="row" key={a.id}><SmartImage src={a.image} alt={a.name} /><div><b>{a.name}</b><span>{a.civilization}</span></div></div>
          ))}
        </div>
        <div className="panel">
          <h2>Civilizations</h2>
          <div className="chips">{civilizations.map((c) => <span key={c.id}>{c.name}</span>)}</div>
          <h2 className="mt">Recent updates <small>(sample content)</small></h2>
          <ul className="activity">
            <li>Artifact collection refreshed</li>
            <li>Exhibition descriptions reviewed</li>
            <li>Timeline milestones checked</li>
          </ul>
        </div>
      </section>

      <section className="actions">
        <button className="btn" onClick={() => navigate('/')}>View Public Website</button>
        <button className="btn ghost" onClick={() => window.open('/', '_blank')}>Preview Homepage</button>
      </section>
    </>
  );
}
