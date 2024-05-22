"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
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
          {renderLinks()}
        </ul>
        <span
          className={`md:hidden z-20 uppercase font-medium`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "Fermer" : "Menu"}
        </span>
        {open && <MobileMenu />}
      </div>
    </nav>
  );
}

const MobileMenu = () => {
  return (
    <div className="fixed flex flex-col items-center justify-center w-screen left-0 top-0 h-screen backdrop-brightness-[0.1]">
      <ul className="flex flex-col gap-4 items-center text-2xl uppercase font-bold">
        {renderLinks()}
      </ul>
    </div>
  );
};

const renderLinks = () => {
  return (
    <>
      <li>
        <Link href="/agency">Agency</Link>
      </li>
      <li>
        <Link href="/works">Works</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );
};
