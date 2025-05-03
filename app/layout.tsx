import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import ThemeSwitch from '@/components/ThemeSwitch';
import ActiveSectionContextProvider from '@/contexts/active-section-context';
import { Toaster } from 'react-hot-toast';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rick Allen - Portfolio',
  description:
    'Rick Allen is a full-stack software developer based in the United States.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth bg-[var(--background)]'>
      <body
        className={`${inter.className} bg-[var(--background)] pt-24 text-[var(--foreground)] transition-colors duration-200 sm:pt-32`}
      >
        {/* Ambient glow effect */}
        <div
          className='fixed top-[-10rem] right-[-11rem] -z-10 h-[30rem] w-[2rem] rounded-full bg-[#19334F] opacity-40 blur-[10rem] sm:right-[-20rem] sm:w-[68.75rem]'
          aria-hidden='true'
        />

        <ActiveSectionContextProvider>
          <Nav />
          {children}
          <Footer />
          <ThemeSwitch />
          <Toaster position='top-center' />
        </ActiveSectionContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
