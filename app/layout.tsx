import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import ThemeSwitch from '@/components/ThemeSwitch';
import ActiveSectionContextProvider from '@/contexts/active-section-context';
import ThemeContextProvider from '@/contexts/theme-context';
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
    <html lang='en' className='dark scroll-smooth'>
      <body
        className={`${inter.className} bg-slate-100 pt-24 text-[--shadowfax-white] dark:bg-[--raven-black] sm:pt-32`}
      >
        {/* Ambient glow effect */}
        <div
          className='fixed right-[-11rem] top-[-10rem] -z-10 h-[30rem] w-[2rem] rounded-full bg-[#19334F] opacity-30 blur-[10rem] sm:right-[-20rem] sm:w-[68.75rem]'
          aria-hidden='true'
        />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Nav />
            {children}
            <Footer />
            <ThemeSwitch />
            <Toaster position='top-center' />
          </ActiveSectionContextProvider>
          <Analytics />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
