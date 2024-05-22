import React from "react";
import WorkCard from "./WorkCard";
import "./WorksSlider.css";
import { getWorks } from "@/data/loaders";
import { getStrapiURL } from "@/lib/utils";
import { Work } from "@/lib/types";

export default async function WorksSlider() {
  const { data } = await getWorks();
  const strapiUrl = getStrapiURL();

  return (
    <section className="">
      <div className="pb-32s overflow-hidden">
        <div className="works-slider-inner whitespace-nowrap w-max">
          {data.map((work: Work, i: number) => (
            <WorkCard key={i} img={strapiUrl + work.cover.url} title={work.title} link={work.slug} />
          ))}
          {data.map((work: Work, i: number) => (
            <WorkCard key={i} img={strapiUrl + work.cover.url} title={work.title} link={work.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
