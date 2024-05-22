import React from "react";
import WorkCard from "./WorkCard";
import "./WorksSlider.css";

export default function WorksSlider() {
  return (
    <section className="">
      <h3 className="display text-5xl pb-5 px-4">Découvrez</h3>
      <div className="pb-32s overflow-hidden">
        <div className="works-slider-inner whitespace-nowrap w-max">
          <WorkCard img="/images/basket.jpg" title="USBD Drancy" />
          <WorkCard img="/images/bmx.jpg" title="Bmx Media" />
          <WorkCard img="/images/ballerine.jpeg" title="CER Blanc Mesnil" />
          <WorkCard img="/images/judo.jpg" title="Judo Bobigny" />
          <WorkCard img="/images/basket.jpg" title="USBD Drancy" />
          <WorkCard img="/images/bmx.jpg" title="Bmx Media" />
          <WorkCard img="/images/ballerine.jpeg" title="CER Blanc Mesnil" />
          <WorkCard img="/images/judo.jpg" title="Judo Bobigny" />
        </div>
      </div>
    </section>
  );
}
