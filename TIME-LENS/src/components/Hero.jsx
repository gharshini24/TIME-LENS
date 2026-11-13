import SmartImage from './SmartImage.jsx';
import { useMuseum } from '../context/MuseumContext.jsx';

export default function Hero({ onExplore }) {
  const { civilizations } = useMuseum();
  const bg = civilizations[0]; // hero uses the first civilization's image
  return (
    <section id="home" className="hero">
      <SmartImage className="hero-bg" src={bg.image} alt="Ancient monuments at dusk" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="eyebrow rise d1">A journey through civilizations</span>
        <h1 className="rise d2">History is not lost.<br /><em>It is waiting to be rediscovered.</em></h1>
        <p className="rise d3">TIME LENS — a digital museum of ancient worlds.</p>
        <button className="btn rise d4" onClick={onExplore}>Explore the Museum</button>
      </div>
      <div className="scroll-ind" aria-hidden="true"><span /></div>
    </section>
  );
}
