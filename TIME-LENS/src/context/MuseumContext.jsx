import { createContext, useContext, useState } from 'react';
import initialData from '../data/initialData.js';

// ONE source of truth: the visitor site and the admin dashboard both read from here.
const MuseumContext = createContext(null);

export function MuseumProvider({ children }) {
  const [museum] = useState(initialData); // read-only for version 1
  return <MuseumContext.Provider value={museum}>{children}</MuseumContext.Provider>;
}

export const useMuseum = () => useContext(MuseumContext);
