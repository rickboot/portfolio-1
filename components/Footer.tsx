import React from "react";

export default function Footer() {
  return (
    <footer className="px-32 py-6 text-center text-[--daphne-blue]">
      <p className="mb-3 text-sm">
        {`Built with: \nReact, Next.js (App Router, Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email and Resend. Hosted on Vercel.`}
      </p>
      <small className="text-[--misty-gray]">
        &copy; 2024 Rick Allen. All rights reserved.
      </small>
    </footer>
  );
}
