'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      // transition={{
      //   type: 'spring',
      //   stiffness: 80,
      //   delay: 0.3,
      //   duration: 1,
      // }}
      className='bg-slate-500 my-10 h-16 w-[2px] rounded-full hidden sm:block'
    ></motion.div>
  );
}
