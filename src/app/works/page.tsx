import WorkCard from "@/components/WorksSlider/WorkCard";
import { getWorks } from "@/data/loaders";
import { WorkType } from "@/lib/types";
import { getStrapiURL } from "@/lib/utils";
import React from "react";

export default async function page() {

  const { data } = await getWorks();
  const strapiUrl = getStrapiURL();

  return (
    <main className="pt-24">
      <h2 className="px-8 xl:px-0 max-width">Works</h2>
      <section className="flex flex-wrap justify-center works-page max-w-[1350px] mx-auto">
      {data.map((work: WorkType, i: number) => (
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
