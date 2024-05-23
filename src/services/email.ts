"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail(data: any) {
  if (!data.email || !data.subject || !data.message) {
    return { success: false, error: "Please fill out all fields" };
  }

  try {
    const res = await resend.emails.send({
      from: "no-reply@juhh.fr",
      to: "joris.mansion.dev@gmail.com",
      reply_to: data.email,
      subject: data.subject,
      text: data.email + " - " + data.message,
    });
    return { success: true, res };
  } catch (error) {
    return { success: false, error };
  }
}
