import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ThemeSwitch from "@/components/ThemeSwitch";
import ActiveSectionContextProvider from "@/contexts/active-section-context";
import ThemeContextProvider from "@/contexts/theme-context";
import { Toaster } from "react-hot-toast";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rick Allen - Portfolio",
  description:
    "Rick Allen is a full-stack software developer based in the United States.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} dark:[--raven-black]sm:pt-32 bg-[--raven-black] pt-24 text-[--shadowfax-white]  dark:bg-slate-100`}
      >
        {/* background tint */}
        <div className="absolute right-[-20rem] top-[-10rem] -z-10 h-[30rem] w-[2rem] rounded-full bg-[#19334F] opacity-30 blur-[10rem] sm:w-[68.75rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Nav />
            {children}
            <Footer />
            {/* <ThemeSwitch /> */}
            <Toaster position="top-center" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
