import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mobile Software Engineer, iOS/Android",
    location: "San Francisco, CA",
    description:
      "I developed a mobile wellness app for iOS and Android using Flutter and Dart, with Google Firebase and Firestore for backend. Collaborated with a UI/UX designer and product manager to create a pixel-perfect app based on Figma mock-ups. In scrum meetings, worked with engineers and product managers to prioritize features, bugs, and tickets for weekly sprints. Led animation integration using Rive to enhance the user experience and improve the app's look and feel.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Hack Reactor - Coding Bootcamp",
    location: "San Jose, CA",
    description:
      "After an 8-week pre-course to refresh my programming skills in HTML, CSS, and JavaScript, I attended Hack Reactor's Software Engineering Immersive. For over 11 hours a day, six days a week, for 3 months, I worked alongside other engineers under the guidance of senior software engineers. We utilized industry best practices with Git, Agile, Scrum, and testing, building full-stack apps using React, Node.js, PostgreSQL, MongoDB, and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Software Engineer - Contractor",
    location: "SF Bay Area",
    description:
      "Conceptualized, designed and developed websites using HTML/CSS and JavaScript. Also, developed installation, configuration, and diagnostic software for PC hardware using C and assembly code.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "Git",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
  "Docker",
  "AWS",
] as const;

/*
Cross-platform mobile software engineer
Revery Labs
San Francisco, CA
2021
Developed a mobile wellness application for iOS/Android using Flutter/Dart with Google Firebase and Firestore for backend authorization and storage.
Collaborated with a UI/UX designer and product manager to create a pixel-perfect mobile application based on Figma mock-ups.
Worked with engineers and product managers via scrum meetings to prioritize features, bugs, and tickets to drive weekly sprints.
Led animation integration using Rive that enhanced the user experience and improved the app's overall look and feel.

I developed a mobile wellness app for iOS and Android using Flutter and Dart, with Google Firebase and Firestore for backend. Collaborated with a UI/UX designer and product manager to create a pixel-perfect app based on Figma mock-ups. In scrum meetings, worked with engineers and product managers to prioritize features, bugs, and tickets for weekly sprints. Led animation integration using Rive to enhance the user experience and improve the app's look and feel.


Software Engineer
Freelance (August 1991 - January 2000)
Designed and developed websites using HTML/CSS and JavaScript.
Developed user installation, configuration and diagnostic software for PC hardware using C and x86 assembly code.


Director of Marketing, Deep Learning - Lambda Labs
San Francisco (July 2021 - June 2022)
Orchestrated marketing initiatives for Lambda's technologically advanced deep learning infrastructure and initiated the company's first full-scale product launch, integrating product marketing, PR, advertising, and partner marketing.
Managed a $3 million annual digital advertising budget, driving lead generation and supporting the sales team.

Head of Product - Tensyr Inc
Palo Alto (March 2018 - August 2019)
Spearheaded the management and marketing of HALO, a comprehensive software development framework for the integration of autonomous vehicles and edge computing.
Collaborated with engineering and business development teams to productize the framework's API, SDK, documentation, tools, and runtime.
Created partner technical marketing tools, license agreements, proposals and presentations.

Director of Product Development - Uplister
Oakland (February 2000 - November 2002)
Led functional design and development of consumer music web portal that pioneered music discovery, recommendation, and community building.
Oversaw efforts of graphics and UX designers, emphasizing user-centered design principles.
Personally designed and developed the company's corporate website using HTML/CSS/JavaScript and hired and managed a team for redesign.


*/
