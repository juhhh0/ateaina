import ContactForm from "@/components/ContactForm/ContactForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Ateaina - Contact',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan accumsan mollis.',
  }

export default function Page() {
  return (
    <main className="pt-24 max-width px-8 xl:px-0">
      <h2>Contact</h2>
     
      <ContactForm />
    </main>
  );
}
