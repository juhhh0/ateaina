import { getStrapiURL } from "@/lib/utils";
import React from "react";
import { ExpertiseType } from "@/lib/types";

export default function Expertises({ data }: { data: ExpertiseType[] }) {
  const strapiUrl = getStrapiURL();

  return (
    <section className="pb-20">
      {data.map((expertise: ExpertiseType, i: number) => (
        <article
          key={i}
          className="bg-black sticky top-[10dvh] border-t-2 py-8 px-8"
        >
          <div className="max-width">
            <h3 className="text-[50px] leading-none display mb-6">
              {expertise.title}
            </h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <img
                className="md:h-96 h-60 aspect-video md:aspect-auto object-cover"
                src={strapiUrl + expertise.cover.url}
                alt=""
              />
              <p className="md:w-1/2 text-2xl md:text-4xl md:text-right font-medium">
                {expertise.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
