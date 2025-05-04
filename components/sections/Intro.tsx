'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { SOCIAL_LINKS } from '../../lib/constants';

const fadeInScale = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 80,
    delay: 0.1,
    duration: 0.5,
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    type: 'spring',
    stiffness: 80,
    delay: 0.2,
    duration: 0.5,
  },
};

const actionButtonClasses =
  'items-center rounded-full bg-[var(--accent)] px-4 py-1 text-[.9rem] text-[var(--raven-black)] transition outline-none hover:scale-110 hover:opacity-90 focus:scale-110 focus:opacity-90';
const iconButtonClasses =
  'items-center rounded-full bg-[var(--accent)] p-2 text-[var(--raven-black)] transition outline-none hover:scale-110 hover:opacity-90 focus:scale-110 focus:opacity-90';

export default function Intro() {
  const ref = useRef<HTMLElement>(null);
  useSectionInView(ref, 'Home', 1);

  return (
    <header ref={ref} id='home' className='mt-8 mb-8 scroll-mt-32'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div {...fadeInScale}>
            <Image
              className='h-48 w-48 rounded-full border-1 border-[var(--accent)] object-cover shadow-[var(--foreground)]/[0.2] shadow-lg'
              src='/rick.png'
              alt='Rick Allen - Full Stack Developer'
              width={128}
              height={128}
              quality={85}
              priority
            />
          </motion.div>
        </div>
      </div>

      <h1 className='mt-10 px-4 text-center text-[2rem] font-medium text-[var(--foreground)] sm:px-16 lg:px-48'>
        Full-Stack Software Developer
      </h1>

      <motion.div
        className='mt-10 flex items-center justify-center gap-4 px-4 text-lg font-medium'
        {...fadeInUp}
      >
        <a
          href={SOCIAL_LINKS.RESUME}
          download='rick-allen-resume.pdf'
          className={actionButtonClasses}
        >
          Resume
        </a>

        <a
          href={`mailto:${SOCIAL_LINKS.EMAIL}`}
          className={actionButtonClasses}
        >
          Email Me
        </a>

        <a
          href={SOCIAL_LINKS.LINKEDIN}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Visit Rick Allen LinkedIn profile'
          className={iconButtonClasses}
        >
          <BsLinkedin className='text-[1.2rem]' />
        </a>

        <a
          href={SOCIAL_LINKS.GITHUB}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Visit Rick Allen GitHub profile'
          className={iconButtonClasses}
        >
          <FaGithubSquare className='text-[1.2rem]' />
        </a>
      </motion.div>
    </header>
  );
}
