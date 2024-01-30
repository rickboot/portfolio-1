"use client";

import React, { use, useRef } from "react";
import SectionHeader from "../SectionHeader";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-hot-toast";
import { getErrorMessage } from "@/lib/utils";

export default function Contact() {
  const ref = useRef(null);
  useSectionInView(ref, "Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <SectionHeader>Contact</SectionHeader>

      <div className="mb-36 rounded-lg border border-[--misty-gray] px-10 py-8 sm:w-[32rem]">
        <p className="text-[0.9rem] text-[--shadowfax-white] dark:text-[--raven-black]">
          You may contact me using this form or at{" "}
          <a href="mailto:rickallen@gmail.com" className="underline">
            rickallen@gmail.com
          </a>
        </p>

        <form
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(getErrorMessage(error));
              return;
            }

            toast.success("Email sent!");
          }}
          className="mt-6 flex flex-col"
        >
          <label
            htmlFor="email"
            className="mb-2 mt-4 px-1 text-[0.8rem] text-[--shadowfax-white] dark:text-[--raven-black]"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address..."
            autoComplete="email"
            required
            maxLength={50}
            className="h-10 rounded-lg border border-[--misty-gray] bg-slate-200 px-2 py-1 text-sm text-[--raven-black]"
          />

          <label
            htmlFor="message"
            className="mb-2 mt-4 px-1 text-[0.8rem] text-[--shadowfax-white] dark:text-[--raven-black]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="h-40 rounded-lg border border-slate-500 bg-slate-200 px-3 py-2 text-sm text-[--raven-black]"
            placeholder="Enter message here..."
            maxLength={1000}
          />

          <button
            name="submit"
            type="submit"
            className="m-auto mt-7 w-[8rem] rounded-lg bg-[--daphne-blue] p-2 text-[--raven-black] outline-none
            duration-200 ease-in-out hover:scale-105 hover:opacity-80 hover:transition"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.section>
  );
}
