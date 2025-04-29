'use client';

import React, { useRef } from 'react';
import SectionHeader from '../SectionHeader';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import { toast } from 'react-hot-toast';
import { getErrorMessage } from '@/lib/utils';

export default function Contact() {
  const ref = useRef(null);
  useSectionInView(ref, 'Contact', 0.5);

  async function handleSubmit(formData: FormData) {
    const { error } = await sendEmail(formData);
    if (error) {
      toast.error(getErrorMessage(error));
    } else {
      toast.success('Email sent!');
    }
  }

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='scroll-mt-28'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <SectionHeader>Contact</SectionHeader>

      <div className='mb-36 rounded-lg border border-[--misty-gray] px-10 py-8 sm:w-[32rem]'>
        <p className='text-[0.9rem] text-[--raven-black] dark:text-[--shadowfax-white]'>
          You may contact me using this form or at{' '}
          <a href='mailto:rickallen@gmail.com' className='underline'>
            rickallen@gmail.com
          </a>
        </p>

        <form action={handleSubmit} className='mt-6 flex flex-col'>
          <label
            htmlFor='email'
            className='mb-2 mt-4 px-1 text-[0.8rem] text-[--raven-black] dark:text-[--shadowfax-white]'
          >
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Enter email address...'
            autoComplete='email'
            required
            maxLength={50}
            className='h-10 rounded-lg border border-[--misty-gray] bg-slate-200 px-2 py-1 text-sm text-[--raven-black]'
          />

          <label
            htmlFor='message'
            className='mb-2 mt-4 px-1 text-[0.8rem] text-[--raven-black] dark:text-[--shadowfax-white]'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            placeholder='Enter message here...'
            maxLength={1000}
            className='h-40 rounded-lg border border-[--misty-gray] bg-slate-200 px-3 py-2 text-sm text-[--raven-black]'
          />

          <button
            name='submit'
            type='submit'
            className='m-auto mt-7 w-[8rem] rounded-lg bg-[--daphne-blue] p-2 text-[--raven-black] outline-none transition hover:scale-105 hover:opacity-90'
            aria-label='Submit contact form'
          >
            Submit
          </button>
        </form>
      </div>
    </motion.section>
  );
}
