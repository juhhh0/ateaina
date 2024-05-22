"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinkType, NavbarType } from "@/lib/types";

export default function Navbar({ data }: { data: NavbarType }) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const resize = () => {
      const width = window.innerWidth;
      if (width > 768) {
        setOpen(false);
      }
    };

    scroll();
    window.addEventListener("scroll", scroll);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-20 px-8 h-16 flex items-center justify-between transition-colors ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-width w-full flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo-small.svg"
            alt="Ateaina Logo"
            width={30}
            height={30}
            priority
          />
        </Link>
        <ul className="hidden md:flex gap-4 uppercase font-bold">
          {renderLinks(data.Links)}
        </ul>
        <span
          className={`md:hidden z-20 uppercase font-medium`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "Fermer" : "Menu"}
        </span>
        {open && <MobileMenu data={data.Links} />}
      </div>
    </nav>
  );
}

const MobileMenu = ({ data }: { data: LinkType[] }) => {
  return (
    <div className="fixed flex flex-col items-center justify-center w-screen left-0 top-0 h-screen dark-backdrop">
      <ul className="flex flex-col gap-4 items-center text-2xl uppercase font-bold">
        {renderLinks(data)}
      </ul>
    </div>
  );
};

const renderLinks = (data: LinkType[]) => {
  return (
    <>
      {data.map((link: LinkType, i: number) => (
        <li key={i}>
          <Link href={link.url}>{link.Label}</Link>
        </li>
      ))}
    </>
  );
};
