import { useState, useEffect } from 'react';
import Home from './pages/Home.jsx';
import AdminLayout from './admin/AdminLayout.jsx';
import Overview from './admin/Overview.jsx';

// Tiny router: the URL path decides which interface shows.
// navigate() uses the History API (no React Router needed);
// the popstate listener keeps browser back/forward working.
export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo(0, 0);
  };

  if (path.startsWith('/admin')) {
    return (
      <AdminLayout navigate={navigate}>
        <Overview navigate={navigate} />
      </AdminLayout>
    );
  }
  return <Home navigate={navigate} />;
}
