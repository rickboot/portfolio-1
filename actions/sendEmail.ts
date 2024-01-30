'use server';

import { getErrorMessage, isValidString } from '@/lib/utils';
import { Resend } from 'resend';

export const sendEmail = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!isValidString(email, 50)) {
    return { error: 'sendEmail: invalid email' };
  }

  if (!isValidString(message, 500)) {
    return { error: 'sendEmail: invalid message' };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const data = await resend.emails.send({
    from: "Rick's Portfolio <onboarding@resend.dev>",
    to: 'rickallen@gmail.com',
    subject: 'Contact form message',
    text: `From: ${email}\n\n${message}`,
  });

  return data;
};
