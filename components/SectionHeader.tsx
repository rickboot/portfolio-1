import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: SectionHeadingProps) {
  return (
    <h2 className='text-2xl text-[#00BCEE] font-medium capitalize mb-8 text-center'>
      {children}
    </h2>
  );
}
