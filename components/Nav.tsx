'use client';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import clsx from 'clsx';
import Link from 'next/link';
import { useActiveSectionContext } from '@/contexts/active-section-context';

export default function Nav() {
  const { activeSection, setActiveSection, setLastTimeActiveSectionChanged } =
    useActiveSectionContext();

  return (
    <div className='relative z-10'>
      <motion.div
        className='sm:rounded-md; fixed left-1/2 top-0 h-[4.5rem] w-full 
        rounded-none bg-[--daphne-blue] 
        bg-opacity-70 shadow-lg 
        shadow-black/[0.03] backdrop-blur-[0.5rem] 
        sm:top-5 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-md'
        initial={{ x: '-50%', y: -100, opacity: 0 }}
        animate={{ x: '-50%', y: 0, opacity: 1 }}
      ></motion.div>
      <nav className='fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-6 sm:h-[initial] sm:py-0'>
        <ul className='relative flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map((link) => {
            return (
              <motion.li
                className='relative flex h-3/4 items-center justify-center'
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setLastTimeActiveSectionChanged(Date.now());
                  }}
                  className={clsx(
                    'flex w-full items-center justify-center px-3 py-3 transition hover:text-white',
                    { 'text-white': activeSection === link.name },
                  )}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <span className='absolute inset-0 -z-10 rounded-sm bg-black/20'></span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
