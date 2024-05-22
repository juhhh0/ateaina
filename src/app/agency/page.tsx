import TextEffect from "@/components/TextEffect";
import React from "react";

export default function page() {
  return (
    <main className="pt-24">
      <h2 className="px-8 xl:px-0 max-width">Agency</h2>
      <TextEffect text="Nous c'est Ateaina, formé par abel et hina, depuis 2020 on vous partage notre passions à travers des images poignantes dans nos réalisations" />
      <section className="max-width">
        <p className="display text-6xl font-bold py-4">
          D'abord une amitié
        </p>
        <div className="flex items-end gap-4">
          <img className="w-1/2 aspect-video object-cover object-top" src="/ateaina.png" alt="" />
          <p className="text-xl w-1/4">On s'est rencontré en 2019 lors de nos études Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, repellendus.</p>
        </div>
      </section>
      <section className="max-width mt-32">
        <p className="display text-6xl font-bold py-4 text-right">
         2020 premier documentaire
        </p>

      </section>
    </main>
  );
}
