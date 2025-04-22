import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
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
    title: 'Full-Stack Developer & Product Owner, ShadowForge',
    location: 'Remote',
    description:
      'Built a Next.js 15 web app that converts D&D 5e content to Shadowdark RPG format using OpenAI. Implemented chunk-based input logic, markdown rendering, token tracking, and roadmap tooling.',
    icon: React.createElement(CgWorkAlt),
    date: '2024 – Present',
  },
  {
    title: 'Product Owner / Strategy Lead, Solver AI',
    location: 'Sunnyvale, CA',
    description:
      'Led development of AI ad generation MVP using OpenAI and Stable Diffusion. Built brand scrapers, designed prompt workflows, and owned GTM planning and product roadmap.',
    icon: React.createElement(CgWorkAlt),
    date: '2024',
  },
  {
    title: 'Mobile Software Engineer, Revery Labs',
    location: 'San Francisco, CA',
    description:
      'Shipped a cross-platform wellness app using Flutter and Firebase. Implemented UI from Figma designs, added animation via Rive, and contributed to early product roadmap.',
    icon: React.createElement(CgWorkAlt),
    date: '2021',
  },
  {
    title: 'Microservices Engineer (Capstone), Hack Reactor',
    location: 'Remote',
    description:
      'Designed and deployed a backend service using Node.js, MongoDB, and Docker. Load-tested to 5K RPS with NGINX. Built supporting frontend and dev tooling.',
    icon: React.createElement(CgWorkAlt),
    date: '2023',
  },
  {
    title: 'Hack Reactor – Advanced Software Engineering',
    location: 'San Jose, CA',
    description:
      'Completed full-time immersive focused on full-stack JavaScript, React, Node.js, and modern software development best practices.',
    icon: React.createElement(LuGraduationCap),
    date: '2020',
  },
] as const;

export const projectsData = [
  {
    title: 'ShadowForge',
    subtitle: 'AI-assisted 5e to Shadowdark RPG converter',
    description:
      'ShadowForge converts D&D 5e adventures into Shadowdark RPG format using OpenAI. Built with Next.js, Tailwind v4, and TypeScript, it features token-aware chunking, markdown output, and client-side token tracking. Designed for future support of prompt routing and memory-aware AI refinement.',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS v4',
      'OpenAI',
      'LLM',
      'Markdown',
    ],
    imageUrl: '/shadowforge.png',
    siteUrl: 'https://shadowforge.vercel.app',
  },
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
    siteUrl: 'https://fin-dashboard.vercel.app',
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
    siteUrl: '#',
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
    siteUrl: '#',
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
