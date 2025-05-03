'use client';

import React, { useState, createContext, useContext } from 'react';
import { links } from '@/lib/constants';

// types
type SectionName = (typeof links)[number]['name'] | '';

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  lastTimeActiveSectionChanged: number;
  setLastTimeActiveSectionChanged: React.Dispatch<React.SetStateAction<number>>;
};

// context
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

// provider
type ActiveSectionContextProps = {
  children: React.ReactNode;
};

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [lastTimeActiveSectionChanged, setLastTimeActiveSectionChanged] =
    useState<number>(Date.now());

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        lastTimeActiveSectionChanged,
        setLastTimeActiveSectionChanged,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      'useActiveSection must be used within an ActiveSectionContextProvider',
    );
  }
  return context;
}
