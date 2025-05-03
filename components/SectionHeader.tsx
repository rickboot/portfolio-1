import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: SectionHeadingProps) {
  return (
    <h2 className='mt-8 mb-4 text-center text-[1.8rem] font-medium capitalize dark:text-[var(--daphne-blue)]'>
      {children}
    </h2>
  );
}
