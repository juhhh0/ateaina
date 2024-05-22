import Slick from "@/components/SlickSlider";
import { getWork } from "@/data/loaders";
import { getStrapiURL } from "@/lib/utils";
import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getWork(params.slug);
  const strapiUrl = getStrapiURL();

  if (!data) {
    return <>No Work Found</>;
  }

  return (
    <main>
      <section
        className="h-screen relative bg-cover bg-center"
        style={{ backgroundImage: `url(${strapiUrl + data.cover.url})` }}
      >
        <div className="absolute opacity-50 bg-black h-full w-full"></div>
        <div className="absolute h-full w-full flex flex-col justify-center items-center">
          <h2 className="mx-auto text-8xl">{data.title}</h2>
        </div>
      </section>
      <section className="max-width py-16 px-8 xl:px-0">
        <div className="flex flex-wrap gap-4">
          {data.expertise.data &&
            data.expertise.data.map((expertise: any, i: number) => (
              <span className="text-3xl font-bold text-nowrap" key={i}>
                / {expertise.title}
              </span>
            ))}
        </div>
        <h2 className="text-7xl font-bold py-6">
          {data.name} - {data.title}
        </h2>
        <p className="text-2xl opacity-75">{data.subtitle}</p>
        <p>{data.description}</p>
      </section>
      <Slick data={data.pictures.data} />
      <section className="max-width py-16 px-8 xl:px-0">
        <p className="text-2xl">Regardez dès maintenant les épisodes:</p>
        <ul className="pt-6 flex flex-col gap-4">
          {data.Episodes &&
            data.Episodes.map((episode: any, i: number) => (
              <li className="flex flex-col gap-2" key={i}>
                <a href={episode.url}>{episode.Label}</a>
              </li>
            ))}
        </ul>
      </section>
      <div className="max-width flex gap-2 items-center justify-end py-16 px-8 xl:px-0">
        <span>Next Work</span>
        <img src="/icons/arrow.svg" alt="" />
      </div>
    </main>
  );
}
