import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Intro from '@/components/sections/Intro';
import Projects from '@/components/sections/Projects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />

      {/* <SectionDivider /> */}
      <About />

      {/* <SectionDivider /> */}
      <Projects />

      {/* <SectionDivider /> */}
      <Skills />

      {/* <SectionDivider /> */}
      <Experience />

      {/* <SectionDivider /> */}
      {/* <Contact /> */}
    </main>
  );
}
