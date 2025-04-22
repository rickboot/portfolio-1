'use client';
import React, { useRef } from 'react';
import SectionHeader from '../SectionHeader';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const ref = useRef(null);
  useSectionInView(ref, 'About', 1);

  return (
    <section
      ref={ref}
      id='about'
      className='max-w-[40rem] scroll-mt-28 sm:mb-3'
    >
      <SectionHeader>About Me</SectionHeader>

      <p className='mb-3 text-center text-[1rem] font-light leading-8 text-[--raven-black] dark:text-[--shadowfax-white]'>
        I’m a <strong>problem solver</strong> who loves to code. My tools of
        choice are <strong>React</strong> and <strong>Next.js</strong>, backed
        by a strong knowledge of <strong>HTML5/CSS3</strong>,{' '}
        <strong>JavaScript</strong>, and <strong>TypeScript</strong>.
      </p>

      <p className='mb-3 text-center text-[1rem] font-light leading-8 text-[--raven-black] dark:text-[--shadowfax-white]'>
        With over two decades of experience across startups and Fortune 500s,
        I’ve worn many hats: <strong>programmer</strong>,{' '}
        <strong>product manager</strong>,<strong>UI design lead</strong>, and{' '}
        <strong>marketing strategist</strong>. This gives me a unique
        perspective on how to build software that delights users.
      </p>

      <p className='text-center text-[1rem] font-light leading-8 text-[--raven-black] dark:text-[--shadowfax-white]'>
        I care about <strong>clean code</strong>,{' '}
        <strong>intuitive design</strong>, and creating experiences people
        enjoy.
      </p>
    </section>
  );
}
