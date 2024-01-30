'use client';
import React, { useRef } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeader from './SectionHeader';
import { useSectionInView } from '@/lib/hooks';
import { experiencesData } from '@/lib/data';

export default function Experience() {
  const ref = useRef(null);
  useSectionInView(ref, 'Experience', 0.4);

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 max-w-[68rem]'>
      <SectionHeader>Experience</SectionHeader>
      <VerticalTimeline lineColor='#788ca7'>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: '#788CA7',
                boxShadow: 'none',
                border: '1px solid #fff',
              }}
              date={experience.date}
              dateClassName={'verticalTimelineDate'}
              iconStyle={{ background: '#214F6F', color: '#fff' }}
              icon={experience.icon}
              contentArrowStyle={{
                borderRight: '9px solid #fff',
              }}
              visible={true}
            >
              <h3 className='font-bold capitalize text-xl text-white'>
                {experience.title}
              </h3>
              <p className='font-normal !mt-0 !text-sm text-white'>
                {experience.location}
              </p>
              <p className='!font-normal !text-sm text-black'>
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
