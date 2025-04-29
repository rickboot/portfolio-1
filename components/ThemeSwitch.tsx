'use client';
import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useThemeContext } from '@/contexts/theme-context';

export default function ThemeSwitchButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      aria-label='Toggle theme'
      className='fixed right-0 top-0 z-50 m-3 rounded-full bg-opacity-0 p-3 text-[1.2rem] text-[--raven-black] transition-all hover:scale-110 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[--daphne-blue] focus:ring-offset-2 dark:text-[--raven-black] dark:hover:bg-gray-800 sm:dark:text-[--shadowfax-white]'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsMoon /> : <BsSun />}
    </button>
  );
}
