import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-4 mt-8 text-center text-[1.8rem] font-medium capitalize text-[--daphne-blue]">
      {children}
    </h2>
  );
}
