import React from "react";

export default function WorkCard({
  img,
  title,
  link,
}: {
  img: string;
  title: string;
  link: string;
}) {
  return (
    <a href={"/work/" + link}>
      <div className="work-card mx-2 w-fit relative inline-block ">
        <img className="h-[300px] rounded-sm md:h-[400px]" src={img} alt={title} />
        <span className="absolute left-3 bottom-3 z-10">{title}</span>
      </div>
    </a>
  );
}
