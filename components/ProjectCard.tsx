'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '@/lib/data';

type ProjectCardProps = (typeof projectsData)[number];

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', '1.3 1'],
  });

  const opacityValue = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityValue,
        scale: scaleValue,
      }}
      className='group'
    >
      <section
        className='bg-slate-800 max-w-[40rem] border border-slate-500 rounded-lg overflow-hidden relative px-8 py-6 
      hover:brightness-110 hover:scale-[1.02] transition'
      >
        <div
          className='flex flex-col
        ml-[20rem]
        group-even:ml-0
        group-even:pr-[20rem]
      '
        >
          <h3 className='text-[1.2rem] text-white font-semibold'>{title}</h3>
          <p className='mt-1 text-[1rem] text-slate-400'>{description}</p>

          <ul className='flex flex-wrap gap-x-3 gap-y-2 mt-5'>
            {tags.map((tag) => (
              <li
                key={tag}
                className='bg-slate-200 text-[0.75rem] px-3 py-1 rounded-md tracking-wide'
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          className='absolute top-8 rounded-lg transition duration-200
        right-[22rem]
        group-even:left-[22rem]
        group-hover:rotate-[2deg]
        group-hover:group-even:rotate-[-2deg]
        group-hover:scale-105
        '
          src={imageUrl}
          alt={title}
          quality={95}
        />
      </section>
    </motion.div>
  );
}
