import React from "react";
import WorkCard from "./WorkCard";
import { getWorks } from "@/services/data/loaders";
import { getStrapiURL } from "@/lib/utils";
import { WorkType } from "@/lib/types";

export default async function WorksSlider() {
  const { data } = await getWorks();
  const strapiUrl = getStrapiURL();

  return (
    <section>
      <div className="pb-32s overflow-hidden">
        <div className="works-slider-inner whitespace-nowrap w-max">
          {data.map((work: WorkType, i: number) => (
            <WorkCard key={i} img={strapiUrl + work.cover.url} title={work.name} link={work.slug} />
          ))}
          {data.map((work: WorkType, i: number) => (
            <WorkCard key={i} img={strapiUrl + work.cover.url} title={work.name} link={work.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
