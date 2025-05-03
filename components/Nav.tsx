'use client';
import { motion } from 'framer-motion';
import { links } from '@/lib/constants';
import clsx from 'clsx';
import Link from 'next/link';
import { useActiveSectionContext } from '@/contexts/active-section-context';

export default function Nav() {
  const { activeSection, setActiveSection, setLastTimeActiveSectionChanged } =
    useActiveSectionContext();

  return (
    <div className='relative z-10'>
      <motion.div
        className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none bg-[var(--daphne-blue)] shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-5 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-lg dark:text-black'
        initial={{ x: '-50%', y: -100, opacity: 0 }}
        animate={{ x: '-50%', y: 0, opacity: 1 }}
      ></motion.div>
      <nav className='fixed top-[0.15rem] left-1/2 flex h-12 -translate-x-1/2 py-2 sm:top-6 sm:h-[initial] sm:py-0'>
        <ul className='dark: relative flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-[var(--raven-black)] sm:w-[initial] sm:flex-nowrap sm:gap-5'>
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
                    'flex w-full items-center justify-center px-3 py-3 transition duration-200 ease-in-out hover:opacity-80',
                    { 'text-[var(--foreground)]': activeSection === link.name },
                  )}
                >
                  <span className='text-[var(--raven-black)] transition duration-200 ease-in-out hover:scale-110'>
                    {link.name}
                  </span>
                  {link.name === activeSection && (
                    <span className='absolute inset-0 -z-10 rounded-md bg-black/10'></span>
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
