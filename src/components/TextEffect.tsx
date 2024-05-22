"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum fugit perferendis modi, molestias adipisci suscipit eveniet beatae nam amet quisquam dolor inventore maiores et, tempora veniam mollitia obcaecati? Beatae, explicabo?";

export default function TextEffect() {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.6", "start"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);

  const words = text.split(" ");

  return (
    <p
      className="py-44 px-4 flex flex-wrap text-[50px] font-medium leading-none"
      ref={element}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: number[];
  progress: MotionValue;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mt-3 mr-3 relative">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} >
        {children}
      </motion.span>
    </span>
  );
};
