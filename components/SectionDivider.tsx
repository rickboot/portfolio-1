"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-4 hidden h-16 w-[2px] rounded-full bg-[--misty-gray] sm:block"
    ></motion.div>
  );
}
