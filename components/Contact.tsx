'use client';

import React, { use, useRef } from 'react';
import SectionHeader from './SectionHeader';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import { toast } from 'react-hot-toast';
import { getErrorMessage } from '@/lib/utils';

export default function Contact() {
  const ref = useRef(null);
  useSectionInView(ref, 'Contact', 0.5);

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
      <div className='w-[32rem] border rounded-lg px-10 py-8 mb-48'>
        <p className='text-slate-300 text-[0.9rem]'>
          You may contact me using this form or at{' '}
          <a href='mailto:rickallen@gmail.com' className='underline'>
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

            toast.success('Email sent!');
          }}
          className='mt-6 flex flex-col'
        >
          <label
            htmlFor='email'
            className='text-slate-300 px-1 mb-2 text-[0.8rem]'
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
            className='h-10 rounded-lg bg-slate-200 border border-slate-500 px-2 py-1 text-sm'
          />

          <label
            htmlFor='message'
            className='text-slate-300 px-1 mt-4 mb-2 text-[0.8rem]'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            className='h-40 rounded-lg bg-slate-200 border border-slate-500 px-3 py-2 text-sm'
            placeholder='Enter message here...'
            maxLength={1000}
          />

          <button
            name='submit'
            type='submit'
            className='bg-slate-500 text-white rounded-lg outline-none m-auto w-[8rem] p-2 mt-6
            hover:bg-slate-400 hover:transition duration-200 ease-in-out hover:scale-105'
          >
            Submit
          </button>
        </form>
      </div>
    </motion.section>
  );
}
