// All museum content lives here. Change an `image` value to swap any picture.
// Wikimedia Commons "Special:FilePath" links redirect to the real file.
const W = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=1400`;

const civilizations = [
  { id: 'egypt', name: 'Ancient Egypt', period: '3100 – 30 BCE', image: W('All_Gizah_Pyramids.jpg'),
    tagline: 'Gods, pharaohs and the Nile.',
    description: 'A civilization along the Nile that built monumental pyramids and temples and developed hieroglyphic writing.',
    facts: ['The Great Pyramid stood as the tallest structure for about 3,800 years.', 'Hieroglyphs were deciphered in 1822 using the Rosetta Stone.', 'Annual Nile floods made farming possible in the desert.'] },
  { id: 'greece', name: 'Ancient Greece', period: '800 – 146 BCE', image: W('The_Parthenon_in_Athens.jpg'),
    tagline: 'Where democracy was born.',
    description: 'City-states such as Athens and Sparta shaped philosophy, theatre, science and early democracy.',
    facts: ['The first Olympic Games were held in 776 BCE.', 'The Parthenon was completed in 432 BCE.', 'Athens introduced a form of direct democracy.'] },
  { id: 'rome', name: 'Roman Empire', period: '27 BCE – 476 CE', image: W('Colosseo_2020.jpg'),
    tagline: 'Roads, law and legions.',
    description: 'From a city on the Tiber to an empire around the Mediterranean, Rome left a lasting legacy in law, engineering and language.',
    facts: ['The Colosseum could hold around 50,000 spectators.', 'Roman roads stretched over 80,000 km.', 'Latin evolved into French, Spanish and Italian.'] },
  { id: 'indus', name: 'Indus Valley Civilization', period: '3300 – 1300 BCE', image: W('Mohenjo-daro_Great_Bath.jpg'),
    tagline: 'Cities planned in brick.',
    description: 'One of the first urban cultures, with grid-planned cities, drainage systems and a script that is still undeciphered.',
    facts: ['Mohenjo-daro had covered drains in its streets.', 'Standard-sized bricks were used across the cities.', 'Its script has not yet been deciphered.'] },
  { id: 'mesopotamia', name: 'Mesopotamia', period: '3500 – 539 BCE', image: W('Ziggurat_of_Ur_good_condition.jpg'),
    tagline: 'The land between two rivers.',
    description: 'Home of Sumer, Babylon and Assyria, where cities, cuneiform writing and written law first appeared.',
    facts: ['Cuneiform is among the earliest writing systems.', 'Hammurabi’s Code was carved around 1754 BCE.', 'The wheel appeared here around 3500 BCE.'] },
];

const exhibitions = [
  { id: 'pharaohs', title: 'The Age of Pharaohs', theme: 'Ancient Egypt', image: W('Great_Sphinx_of_Giza_-_20080716a.jpg'),
    blurb: 'Power, gold and eternity.',
    details: 'Step into the world of divine kings, their tombs and the rituals meant to carry them into the afterlife.',
    facts: ['Royal tombs, masks and jewellery', 'Writing and the scribes', 'Life along the Nile'] },
  { id: 'architecture', title: 'Empire and Architecture', theme: 'Greece & Rome', image: W('Colosseo_2020.jpg'),
    blurb: 'Stone that outlived empires.',
    details: 'From Greek temples to Roman arenas, see how columns, arches and concrete shaped the ancient skyline.',
    facts: ['Classical orders of columns', 'The Roman arch and dome', 'Aqueducts and roads'] },
  { id: 'cities', title: 'The Forgotten Cities', theme: 'Indus & Mesopotamia', image: W('Ziggurat_of_Ur_good_condition.jpg'),
    blurb: 'Cities lost to sand and time.',
    details: 'Explore the first planned cities and towering ziggurats, rediscovered by archaeologists after millennia.',
    facts: ['Grid-planned streets', 'Ziggurats and temples', 'Trade across river valleys'] },
];

const artifacts = [
  { id: 'rosetta', name: 'Rosetta Stone', civilization: 'Ancient Egypt', period: '196 BCE', image: W('Rosetta_Stone.JPG'),
    blurb: 'The key to hieroglyphs.',
    details: 'A decree carved in three scripts, which let scholars finally read Egyptian hieroglyphs.',
    facts: ['Found in 1799', 'Kept at the British Museum', 'Written in three scripts'] },
  { id: 'hammurabi', name: 'Code of Hammurabi', civilization: 'Mesopotamia', period: 'c. 1754 BCE', image: W('Milkau_Oberer_Teil_der_Stele_mit_dem_Text_von_Hammurapis_Gesetzescode_369-2.jpg'),
    blurb: 'Law carved in stone.',
    details: 'A basalt stele inscribed with nearly 300 laws, among the oldest written legal codes.',
    facts: ['Cuneiform script', 'About 2.25 m tall', 'Displayed at the Louvre'] },
  { id: 'pashupati', name: 'Pashupati Seal', civilization: 'Indus Valley', period: 'c. 2500 BCE', image: W('Pashupati_seal.jpg'),
    blurb: 'A figure among animals.',
    details: 'A steatite seal from Mohenjo-daro showing a seated figure surrounded by animals, still debated by historians.',
    facts: ['Carved from steatite', 'Found at Mohenjo-daro', 'Meaning still debated'] },
  { id: 'mask', name: 'Mask of Tutankhamun', civilization: 'Ancient Egypt', period: 'c. 1323 BCE', image: W('Tutankhamun_Mask.jpg'),
    blurb: 'Gold of the boy king.',
    details: 'The golden funerary mask found on the mummy of Tutankhamun, discovered by Howard Carter in 1922.',
    facts: ['Solid gold with lapis and glass', 'Weighs about 10 kg', 'Found in 1922'] },
];

const timeline = [
  { id: 't1', date: '3500 BCE', title: 'Mesopotamia', text: 'Cities, the wheel and cuneiform appear in Sumer.', facts: ['Uruk is among the first cities', 'Writing begins on clay'] },
  { id: 't2', date: '2600 BCE', title: 'Indus Valley', text: 'Planned brick cities rise along the Indus river.', facts: ['Mohenjo-daro and Harappa', 'Advanced drainage'] },
  { id: 't3', date: '2560 BCE', title: 'Ancient Egypt', text: 'The Great Pyramid of Giza is raised for Pharaoh Khufu.', facts: ['Built over roughly 20 years', 'Hieroglyphic writing'] },
  { id: 't4', date: '480 BCE', title: 'Classical Greece', text: 'Athens flourishes in philosophy, theatre and democracy.', facts: ['Parthenon built 447–432 BCE', 'Socrates, Plato, Aristotle'] },
  { id: 't5', date: '27 BCE', title: 'Roman Empire', text: 'Augustus becomes the first emperor of Rome.', facts: ['Colosseum opened in 80 CE', 'Empire spans the Mediterranean'] },
];

export default { civilizations, exhibitions, artifacts, timeline };
