'use client';
import React, { useContext } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useThemeContext } from '@/contexts/theme-context';

export default function ThemeSwitchButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className=' dark:text-black dark:text-[1.2rem] fixed top-0 right-0 m-5 bg-opacity-0 text-white p-2 text-[1rem] rounded-full hover:scale-110 transition-all'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsMoon /> : <BsSun />}
    </button>
  );
}
