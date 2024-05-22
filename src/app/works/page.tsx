import WorkCard from "@/components/WorksSlider/WorkCard";
import { getWorks } from "@/data/loaders";
import { getStrapiURL } from "@/lib/utils";
import React from "react";

export default async function page() {
  
  const { data } = await getWorks();
  const strapiUrl = getStrapiURL();

  return (
    <main className="pt-24">
      <h1 className="px-8 display text-5xl">Works</h1>
      <section className="flex flex-wrap justify-center works-page">
      {data.map((work: any, i: number) => (
          <WorkCard
          key={i}
          img={strapiUrl + work.cover.url}
          title={work.title}
          link={work.slug}
          />
        ))}
        </section>
    </main>
  );
}
