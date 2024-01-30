import React from 'react';

export default function Footer() {
  return (
    <footer className='text-slate-400 text-center px-32 py-6'>
      <p className='text-sm mb-3'>
        {`Built with: \nReact, Next.js (App Router, Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email and Resend. Hosted on Vercel.`}
      </p>
      <small>&copy; 2024 Rick Allen. All rights reserved.</small>
    </footer>
  );
}
