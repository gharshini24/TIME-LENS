import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { MuseumProvider } from './context/MuseumContext.jsx';
import './styles/global.css';
import './styles/website.css';
import './styles/admin.css';

createRoot(document.getElementById('root')).render(
  <MuseumProvider>
    <App />
  </MuseumProvider>
);
