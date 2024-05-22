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
      <div className="work-card m-2 w-fit relative inline-block ">
        <img className="rounded-sm " src={img} alt={title} />
        <span className="absolute left-3 bottom-3 z-10">{title}</span>
      </div>
    </a>
  );
}
