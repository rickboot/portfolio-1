'use client';
import React, { use, useRef } from 'react';
import SectionHeader from './SectionHeader';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Skills() {
  const ref = useRef(null);
  useSectionInView(ref, 'Skills', 1);

  const animationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.01 * index,
      },
    }),
  };

  return (
    <section id='skills' ref={ref} className='max-w-[40rem] scroll-mt-28'>
      <SectionHeader>Skills</SectionHeader>

      <ul className='flex flex-wrap justify-center gap-x-3 gap-y-4 mt-5'>
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className='bg-slate-200 text-[1rem] px-3 py-1 rounded-md tracking-wide'
            variants={animationVariants}
            initial='initial'
            whileInView='animate'
            custom={index}
            viewport={{ once: true }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
