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
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.className} pt-24 transition-colors duration-200`}
      >
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
