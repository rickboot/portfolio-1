"use client";
import { useActiveSectionContext } from "@/contexts/active-section-context";
import { UseInViewOptions, useInView } from "framer-motion";
import { links } from "@/lib/data";
import { useEffect } from "react";

export function useSectionInView(
  ref: React.RefObject<HTMLElement>,
  sectionName: (typeof links)[number]["name"],
  amountInView: UseInViewOptions["amount"],
): void {
  const inView = useInView(ref, { amount: amountInView });

  const {
    setActiveSection,
    lastTimeActiveSectionChanged,
    setLastTimeActiveSectionChanged,
  } = useActiveSectionContext();

  // useEffect needed to avoid rendering during setState changes
  useEffect(() => {
    if (inView && Date.now() - lastTimeActiveSectionChanged > 50) {
      setActiveSection(sectionName);
      setLastTimeActiveSectionChanged(Date.now());
    }
  }, [
    inView,
    sectionName,
    setActiveSection,
    lastTimeActiveSectionChanged,
    setLastTimeActiveSectionChanged,
  ]);
}
