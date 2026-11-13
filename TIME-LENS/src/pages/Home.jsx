import { useState, useEffect } from 'react';
import { useMuseum } from '../context/MuseumContext.jsx';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CivilizationCard from '../components/CivilizationCard.jsx';
import ExhibitionCard from '../components/ExhibitionCard.jsx';
import ArtifactCard from '../components/ArtifactCard.jsx';
import Timeline from '../components/Timeline.jsx';
import InfoModal from '../components/InfoModal.jsx';
import SmartImage from '../components/SmartImage.jsx';
import Footer from '../components/Footer.jsx';

// Converts any item type into the one shape InfoModal understands.
const toModal = (kind, x) => ({
  civ: { title: x.name, meta: x.period, image: x.image, text: x.description, facts: x.facts },
  exh: { title: x.title, meta: x.theme, image: x.image, text: x.details, facts: x.facts },
  art: { title: x.name, meta: `${x.civilization} · ${x.period}`, image: x.image, text: x.details, facts: x.facts },
}[kind]);

export default function Home({ navigate }) {
  const { civilizations, exhibitions, artifacts, timeline } = useMuseum(); // shared data
  const [modal, setModal] = useState(null);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const open = (kind) => (x) => setModal(toModal(kind, x));

  // Fade sections in as they scroll into view.
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="site">
      <Navbar navigate={navigate} scrollTo={scrollTo} onPick={(k, x) => open(k)(x)} />
      <Hero onExplore={() => scrollTo('intro')} />

      <section id="intro" className="intro">
        <div className="intro-img reveal"><SmartImage src={exhibitions[0].image} alt="The Great Sphinx of Giza" /></div>
        <div className="intro-text reveal">
          <span className="eyebrow">Welcome</span>
          <h2>Beyond the pages of <em>history.</em></h2>
          <p>TIME LENS is a digital museum that brings together the stories, cultures and creations that shaped human civilization.</p>
        </div>
      </section>

      <section id="discover" className="section">
        <SectionHeading label="Discover" title="Five worlds. One lens." />
        <div className="civ-grid">
          {civilizations.map((c) => <CivilizationCard key={c.id} item={c} onOpen={open('civ')} />)}
        </div>
      </section>

      <section id="exhibitions" className="section dark">
        <SectionHeading label="Exhibitions" title="Now showing" />
        <div className="exh-grid">
          {exhibitions.map((e) => <ExhibitionCard key={e.id} item={e} onOpen={open('exh')} />)}
        </div>
      </section>

      <section id="timeline" className="section">
        <SectionHeading label="Timeline" title="Journey through time" />
        <Timeline events={timeline} />
      </section>

      <section className="section dark">
        <SectionHeading label="Collection" title="Featured artifacts" />
        <div className="art-grid">
          {artifacts.map((a) => <ArtifactCard key={a.id} item={a} onOpen={open('art')} />)}
        </div>
      </section>

      <section id="about" className="about reveal">
        <span className="eyebrow">About</span>
        <h2>History, made visible.</h2>
        <p>TIME LENS is a student-built digital museum that makes ancient civilizations easy to explore, one image at a time.</p>
      </section>

      <Footer scrollTo={scrollTo} />
      {modal && <InfoModal item={modal} onClose={() => setModal(null)} />}
    </div>
  );
}
