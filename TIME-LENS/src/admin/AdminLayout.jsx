// Separate layout for /admin: sidebar + main area.
export default function AdminLayout({ navigate, children }) {
  return (
    <div className="admin">
      <aside className="sidebar">
        <div className="logo">TIME<span>LENS</span></div>
        <span className="admin-badge">Admin Area</span>
        <nav>
          <a className="side-item active" aria-current="page">◈ Overview</a>
        </nav>
        <a href="/" className="side-back" onClick={(e) => { e.preventDefault(); navigate('/'); }}>← Back to Museum</a>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
