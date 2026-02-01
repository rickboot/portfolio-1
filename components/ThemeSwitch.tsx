'use client';
import React, { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeSwitchButton() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const isDarkStored = localStorage.getItem('darkMode') === 'true';
      setIsDark(isDarkStored);
      document.documentElement.classList.toggle('dark', isDarkStored);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', String(newIsDark));
      document.documentElement.classList.toggle('dark', newIsDark);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label='Toggle theme'
      className='bg-opacity-0 fixed top-0 right-0 z-50 m-3 rounded-full p-3 text-[1.2rem] text-[var(--foreground)] transition-all hover:scale-110 hover:bg-gray-100 focus:ring-[var(--accent)] focus:ring-offset-2 focus:outline-none dark:text-[var(--foreground)] dark:hover:bg-gray-800'
      onClick={toggleTheme}
    >
      {isDark ? <BsSun /> : <BsMoon />}
    </button>
  );
}
