import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Intro from '@/components/sections/Intro';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
// import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
