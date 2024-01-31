import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import Finanseer from '@/public/Finanseer.png';
import unZwillingFrontend from '@/public/unZwilling-frontend-questions.png';
import unZwillingBackend from '@/public/unZwilling-backend-code.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Mobile Software Engineer, iOS/Android',
    location: 'San Francisco, CA',
    description:
      "I developed a mobile wellness app for iOS and Android using Flutter and Dart, with Google Firebase and Firestore for backend. Collaborated with a UI/UX designer and product manager to create a pixel-perfect app based on Figma mock-ups. In scrum meetings, worked with engineers and product managers to prioritize features, bugs, and tickets for weekly sprints. Led animation integration using Rive to enhance the user experience and improve the app's look and feel.",
    icon: React.createElement(CgWorkAlt),
    date: '2021',
  },
  {
    title: 'Hack Reactor - Coding Bootcamp',
    location: 'San Jose, CA',
    description:
      "After an 8-week pre-course to refresh my programming skills in HTML, CSS, and JavaScript, I attended Hack Reactor's Software Engineering Immersive. For over 11 hours a day, six days a week, for 3 months, I worked alongside other engineers under the guidance of senior software engineers. We utilized industry best practices with Git, Agile, Scrum, and testing, building full-stack apps using React, Node.js, PostgreSQL, MongoDB, and more.",
    icon: React.createElement(LuGraduationCap),
    date: '2020',
  },
  {
    title: 'Software Engineer - Freelance',
    location: 'SF Bay Area',
    description:
      'Conceptualized, designed and developed websites using HTML/CSS and JavaScript. Also, developed installation, configuration, and diagnostic software for PC hardware using C and assembly code.',
    icon: React.createElement(CgWorkAlt),
    date: '1991-1992, 2000',
  },
] as const;

export const projectsData = [
  {
    title: 'Finance Dashboard',
    subtitle: 'Full-Stack',
    description:
      'A sample finance dashboard web app. It shows word count, character count and social media post limits.',
    tags: [
      'Vite.js',
      'React',
      'TypeScript',
      'Material UI',
      'React-router',
      'Redux',
      'Recharts',
      'Emotion',
    ],
    imageUrl: Finanseer,
  },
  {
    title: 'Microservice for Questions',
    subtitle: 'Front-End',
    description: `
Designed and built a pixel-perfect clone of zwilling.com for Questions & Answers microservice using React, JavaScript ES6, HTML/CSS.
\nBuilt local mock back-end with Node.js, Express, MongoDB, and Faker to facilitate development.
\nUsed Figma to design wireframes to plan component hierarchy.`,
    tags: ['React', 'JavaScript ES6', 'HTML/CSS', 'CSS Modules', 'Figma'],
    imageUrl: unZwillingFrontend,
  },
  {
    title: 'Microservice for Reviews',
    subtitle: 'Back-End',
    description: `
Designed and developed REST API and database for handling user-generated product reviews.
\nReduced local response times under stress of 10 million records to over 5000 RPS, achieving response times under 20ms.
\nDeployed databases on AWS EC2 with NGINX load-balancing, surpassing goals by achieving over 2000 RPS under 1000 ms.
\nPackaged the service and deployed components as Docker containers using AWS.
      `,
    tags: [
      'Node.js',
      'JavaScript',
      'MongoDB',
      'Express',
      'AWS EC2',
      'Docker',
      'NGINX',
    ],
    imageUrl: unZwillingBackend,
  },
] as const;

export const skillsData = [
  'React',
  'Next.js',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Tailwind',
  'Git',
  'Prisma',
  'MongoDB',
  'PostgreSQL',
  'Redux',
  'Express',
  'Python',
  'Framer Motion',
  'Docker',
  'AWS',
] as const;
