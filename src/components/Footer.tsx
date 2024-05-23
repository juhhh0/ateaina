import { getFooter } from "@/services/data/loaders";
import { LinkType } from "@/lib/types";
import Link from "next/link";
import React from "react";

export default async function Footer() {
  const data = await getFooter();

  return (
    <footer className="border-t-2 mt-10 py-16 md:px-10 flex flex-col gap-12 ">
      <div className="max-width w-full flex flex-col-reverse md:flex-row justify-center items-center md:justify-between gap-5">
        <ul className="md:flex-row font-medium flex flex-col gap-3 items-center">
          {data.Links.map((link: LinkType, i: number) => (
            <li key={i}>
              <Link href={link.url}>{link.Label}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-3">
          <li>
            <a href={data.Linkedin}>
              <img className="w-8" src="/icons/linkedin.svg" alt="" />
            </a>
          </li>
          <li>
            <a href={data.Instagram}>
              <img className="w-8" src="/icons/instagram.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <p className="font-medium text-xs max-width md:w-full">© 2024 Ateaina. All Rights Reserved</p>
    </footer>
  );
}
