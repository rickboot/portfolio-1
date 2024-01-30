'use client';
import React, { useContext } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useThemeContext } from '@/contexts/theme-context';

export default function ThemeSwitchButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className='fixed right-0 top-0 z-50 m-3 rounded-full bg-opacity-0 p-3 text-[1.2rem]  text-[--raven-black] transition-all hover:scale-110 dark:text-[--shadowfax-white]'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsMoon /> : <BsSun />}
    </button>
  );
}
