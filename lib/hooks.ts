'use client';
import { useActiveSectionContext } from '@/contexts/active-section-context';
import { UseInViewOptions, useInView } from 'framer-motion';
import { links } from '@/lib/constants';
import { useEffect, useState } from 'react';

export function useSectionInView(
  ref: React.RefObject<HTMLElement | null>,
  sectionName: (typeof links)[number]['name'],
  amountInView: UseInViewOptions['amount'],
): void {
  const inView = useInView(ref, { amount: amountInView });
  const [hasScrolled, setHasScrolled] = useState(false);

  const {
    setActiveSection,
    lastTimeActiveSectionChanged,
    setLastTimeActiveSectionChanged,
  } = useActiveSectionContext();

  // Set up scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  // Handle section activation
  useEffect(() => {
    if (inView && Date.now() - lastTimeActiveSectionChanged > 50) {
      // Only allow non-Home sections to become active after scroll
      if (sectionName === 'Home' || hasScrolled) {
        setActiveSection(sectionName);
        setLastTimeActiveSectionChanged(Date.now());
      }
    }
  }, [
    inView,
    sectionName,
    setActiveSection,
    lastTimeActiveSectionChanged,
    setLastTimeActiveSectionChanged,
    hasScrolled,
  ]);
}
