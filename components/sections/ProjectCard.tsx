'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '@/lib/data';

type ProjectCardProps = (typeof projectsData)[number];

export function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  imageUrl,
  siteUrl,
  repoUrl,
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
      style={{ opacity: opacityValue, scale: scaleValue }}
      className='group'
    >
      <section className='relative overflow-hidden rounded-lg border border-slate-500 bg-slate-800 px-8 py-6 transition hover:scale-[1.02] hover:brightness-110 sm:max-w-[40rem]'>
        <div className='flex flex-col sm:ml-[20rem] sm:group-even:ml-0 sm:group-even:pr-[20rem]'>
          <h3 className='text-[1.2rem] font-semibold text-white'>{title}</h3>
          <h4 className='text-[1rem] font-semibold text-white'>{subtitle}</h4>
          <p className='mt-1 text-[.7rem] tracking-wide whitespace-break-spaces text-[var(--shadowfax-white)]'>
            {description}
          </p>

          <div className='flex gap-4'>
            {repoUrl && repoUrl !== '#' && (
              <a
                href={repoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-3 text-[.8rem] text-[var(--accent)] underline'
              >
                Github
              </a>
            )}
            {siteUrl && siteUrl !== '#' && (
              <a
                href={siteUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-3 text-[.8rem] text-[var(--accent)] underline'
              >
                See it!
              </a>
            )}
          </div>

          <ul className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <li
                key={tag}
                className='rounded-md bg-[var(--shadowfax-white)] px-2 py-1 text-[0.8rem] tracking-wide text-[var(--raven-black)]'
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          className='absolute top-8 right-[22rem] hidden rounded-lg transition duration-200 group-even:left-[22rem] group-hover:scale-105 group-hover:rotate-[2deg] group-hover:group-even:rotate-[-2deg] sm:block'
          src={imageUrl}
          alt={`${title} project screenshot`}
          quality={95}
          width={300}
          height={200}
        />
      </section>
    </motion.div>
  );
}
