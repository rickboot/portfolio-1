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
      <VerticalTimeline lineColor='#788ca7'>
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
                background: '#214F6F',
                color: '#dee4e5',
              }}
              icon={experience.icon}
              contentArrowStyle={{
                borderRight: '9px solid #fff',
              }}
              visible={true}
            >
              <h3 className='text-xl font-bold capitalize text-white'>
                {experience.title}
              </h3>
              <p className='!mt-0 !text-sm font-normal text-white'>
                {experience.location}
              </p>
              <p className='!text-sm !font-normal text-[--shadowfax-white]'>
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
