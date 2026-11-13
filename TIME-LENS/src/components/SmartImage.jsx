import { useState } from 'react';

// Shows an image; if it fails to load, shows a bronze gradient so layouts never break.
export default function SmartImage({ src, alt, className = '' }) {
  const [bad, setBad] = useState(false);
  if (bad) return <div className={`img-fallback ${className}`} role="img" aria-label={alt} />;
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setBad(true)} />;
}
