'use client';
import React, { use, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const ref = useRef(null);
  useSectionInView(ref, 'Home', 1);

  return (
    <header ref={ref} id='home' className='scroll-mt-32'>
      <div className='flex items-center justify-center'>
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
              className='h-32 w-32 rounded-full border-white border-[0.1rem] shadow-lg shadow-white/[0.2] object-cover'
              src='/rick.png'
              alt='Rick'
              width='100'
              height='100'
              quality='100'
              priority={true}
            />
          </motion.h1>
        </div>
      </div>

      <p className='text-gray-300 mt-12 px-48 text-[1.5rem] font-medium capitalize text-center'>
        Full-stack software developer in the SF Bay Area.
      </p>

      <motion.div
        className='flex flex-col mt-12 sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
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
          href='/CV.pdf'
          download='true'
          className='text-black px-6 py-2 bg-slate-100 rounded-full items-center
          outline-none focus:scale-110 focus:opacity-90 hover:scale-110 hover:opacity-90 transition'
        >
          Resume
        </a>

        <a
          href='mailto:rickallen@google.com'
          className='text-black px-6 py-2 bg-slate-100 rounded-full items-center
          outline-none focus:scale-110 focus:opacity-90 hover:scale-110 hover:opacity-90 transition'
        >
          Email Me
        </a>

        <a
          href='https://www.linkedin.com/in/rickallen7/'
          target='_blank'
          className='bg-white p-3 rounded-full items-center outline-none focus:scale-110 focus:opacity-90 hover:scale-110 hover:opacity-90 transition '
        >
          <BsLinkedin className='text-[1.2rem]' />
        </a>

        <a
          href='https://github.com/rickboot'
          target='_blank'
          className='bg-white p-3 rounded-full items-center outline-none focus:scale-110 focus:opacity-90 hover:scale-110 hover:opacity-90 transition '
        >
          <FaGithubSquare className='text-[1.2rem]' />
        </a>
      </motion.div>
    </header>
  );
}
