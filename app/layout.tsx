import './globals.css';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import ThemeSwitch from '@/components/ThemeSwitch';
import ActiveSectionContextProvider from '@/contexts/active-section-context';
import ThemeContextProvider from '@/contexts/theme-context';

// fonts
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
        className={`${inter.className} bg-[#0F172A] text--950 dark:bg-slate-100 dark:text-slate-900  pt-24 sm:pt-32`}
      >
        {/* background tint */}
        <div className='bg-[#19334F]  absolute top-[-10rem] -z-10 right-[-20rem] h-[30rem] w-[2rem] rounded-full blur-[10rem] sm:w-[68.75rem] opacity-30'></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Nav />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
