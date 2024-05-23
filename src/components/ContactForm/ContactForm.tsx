"use client";

import { sendEmail } from "@/services/email";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const submitForm = async (data: any) => {
    const result = await sendEmail(data);

    if (result?.success) {
      setSuccess(true);
      return;
    } else {
      setError(true);
    }
  };

  if (success) return succesMessage();
  if (error) return errorMessage();

  return (
    <>
      <h3 className="text-3xl font-bold pt-10 pb-6">
        Envie de nous contacter?
      </h3>
      <p>
        Envoyer nous un message depuis le formulaire suivant ou directement par
        mail à l'adresse suivante:{" "}
        <a className="underline" href="mailto:contact@gmail.com">
          contact@ateaina.fr
        </a>
        .
      </p>
      <p className="pt-4">Nous vous répondrons dans les plus brefs délais.</p>
      <form
        className="flex flex-col gap-4 py-12"
        onSubmit={handleSubmit(submitForm)}
      >
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required {...register("email")} />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" required {...register("subject")} />

        <label htmlFor="message">Message</label>
        <textarea id="message" required {...register("message")} />

        <button
          className="w-fit font-bold"
          disabled={isSubmitting}
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </>
  );
}

const succesMessage = () => {
  return (
    <>
      <h2>Message envoyé !</h2>
      <p>
        On repondra dans les plus brefs délais, en attendant n'hésites pas à
        nous rejoindre sur Instagram pour être au courant de nos actualités !
      </p>
    </>
  );
};

const errorMessage = () => {
  return (
    <>
      <h2>Une erreur est survenue</h2>
      <p>
        Pas de panique, on y travaille, en attendant n'hésites pas à nous
        contacter directement par mail ou sur Instagram !
      </p>
    </>
  );
};
