'use client';
import React, { use, useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const ref = useRef(null);
  useSectionInView(ref, 'About', 1);

  return (
    <section
      ref={ref}
      id='about'
      className='max-w-[40rem] text-white text-center leading-8 scroll-mt-28 sm:mb-3'
    >
      <SectionHeader>About Me</SectionHeader>

      <p className='text-slate-300 text-md mb-3 text-center font-light text-[1rem]'>
        I am a problem solver who loves to code. My tools of choice are React
        and Next.js, backed by a strong knowledge of HTML5/CSS3, JavaScript, and
        TypeScript. With over two decades of diverse tech experience in startups
        and Fortune 500 companies as a programmer, product manager, UI design
        leader, and marketing guy, I bring a unique perspective and a wealth of
        expertise to front-end roles. These experiences have made me passionate
        about creating the best user product experiences with clean, intuitive
        design and obsessive about crafting clean, logical code.
      </p>
    </section>
  );
}
