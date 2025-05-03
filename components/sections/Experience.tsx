'use client';
import React, { useRef } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeader from '../SectionHeader';
import { useSectionInView } from '@/lib/hooks';
import { experiencesData } from '@/lib/data';

export default function Experience() {
  const ref = useRef(null);
  useSectionInView(ref, 'Experience', 0.4);

  return (
    <section id='experience' ref={ref} className='max-w-[68rem] scroll-mt-28'>
      <SectionHeader>Experience</SectionHeader>
      <VerticalTimeline
        lineColor='var(--daphne-blue)'
        className='vertical-timeline-custom-line'
      >
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index.toString + experience.title}>
            <VerticalTimelineElement
              contentStyle={{
                background: '#1e293b',
                boxShadow: 'none',
                border: '1px solid #dee4e5',
              }}
              date={experience.date}
              dateClassName={'verticalTimelineDate'}
              iconStyle={{
                width: '41px',
                height: '41px',
                left: '50%',
                transform: 'translate(8px, 11px)',
                background: '#214F6F',
                color: '#dee4e5',
                boxShadow: 'none',
              }}
              icon={experience.icon}
              contentArrowStyle={{
                visibility: 'hidden',
              }}
              visible={true}
            >
              <h3 className='text-xl font-bold text-white capitalize'>
                {experience.title}
              </h3>
              <p className='!mt-0 !text-sm font-normal text-white'>
                {experience.location}
              </p>
              <p className='!text-sm !font-normal text-[var(--shadowfax-white)]'>
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
