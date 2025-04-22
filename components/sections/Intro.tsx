'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const ref = useRef(null);
  useSectionInView(ref, 'Home', 1);

  return (
    <header ref={ref} id='home' className='mb-16 mt-8 scroll-mt-32'>
      <div className='flex items-center justify-center'>
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            delay: 0.1,
            duration: 1,
          }}
        >
          <Image
            className='h-32 w-32 rounded-full border-[0.1rem] border-[--shadowfax-white] object-cover shadow-lg shadow-white/[0.2]'
            src='/rick.png'
            alt='Rick'
            width='100'
            height='100'
            quality='100'
            priority={true}
          />
        </motion.h1>
      </div>

      <p className='mt-10 px-4 text-center text-[2rem] font-medium text-[--raven-black] dark:text-[--shadowfax-white] sm:px-16 lg:px-48'>
        Full-Stack Software Developer
      </p>

      <motion.div
        className='mt-10 flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 80,
          delay: 0.2,
          duration: 1,
        }}
      >
        <a
          href='https://drive.google.com/file/d/17BbUlqIwkmL7JTemTS8xkmhlOEqedeq0/view?usp=drive_link'
          download='true'
          className='items-center rounded-full bg-[--daphne-blue] px-4 py-1 text-[.9rem] text-[--raven-black]
          outline-none transition hover:scale-110 hover:opacity-90 focus:scale-110 focus:opacity-90'
        >
          Resume
        </a>

        <a
          href='mailto:rickallen@google.com'
          className='items-center rounded-full bg-[--daphne-blue] px-4 py-1 text-[.9rem]
          text-[--raven-black] outline-none transition hover:scale-110 hover:opacity-90 focus:scale-110 focus:opacity-90'
        >
          Email Me
        </a>

        <a
          href='https://www.linkedin.com/in/rickallen7/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='items-center rounded-full bg-[--daphne-blue]  p-2 text-[--raven-black] outline-none transition hover:scale-110 hover:opacity-90 focus:scale-110 focus:opacity-90 '
        >
          <BsLinkedin className='text-[1.2rem]' />
        </a>

        <a
          href='https://github.com/rickboot'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Github'
          className='items-center rounded-full bg-[--daphne-blue]  p-2 text-[--raven-black] outline-none transition hover:scale-110 hover:opacity-90 focus:scale-110 focus:opacity-90 '
        >
          <FaGithubSquare className='text-[1.2rem]' />
        </a>
      </motion.div>
    </header>
  );
}
