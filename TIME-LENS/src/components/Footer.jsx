export default function Footer({ scrollTo }) {
  const links = [['Discover', 'discover'], ['Exhibitions', 'exhibitions'], ['Timeline', 'timeline'], ['About', 'about']];
  return (
    <footer className="footer">
      <div>
        <div className="logo">TIME<span>LENS</span></div>
        <p>A digital museum of human civilization.</p>
      </div>
      <ul>{links.map(([t, id]) => <li key={id}><button onClick={() => scrollTo(id)}>{t}</button></li>)}</ul>
      <button className="to-top" onClick={() => scrollTo('home')}>Back to top ↑</button>
      <small>© {new Date().getFullYear()} TIME LENS. College project.</small>
    </footer>
  );
}
