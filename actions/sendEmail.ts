'use server';

import { Resend } from 'resend';

export const sendEmail = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  console.log('running on server!');
  console.log(email);
  console.log(message);
  console.log('API', process.env.RESEND_API_KE);

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "Rick's Portfolio <onboarding@resend.dev>",
    to: [email],
    subject: 'Hello world',
    text: message,
  });
};
