'use client';
import React, { useRef } from 'react';
import SectionHeader from '../SectionHeader';
import { projectsData } from '@/lib/data';
import { ProjectCard } from './ProjectCard';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const ref = useRef(null);
  useSectionInView(ref, 'Projects', 0.4);

  return (
    <section ref={ref} id='projects' className='mb-8 scroll-mt-28'>
      <SectionHeader>My Projects</SectionHeader>
      <div className='flex flex-col gap-y-8'>
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
