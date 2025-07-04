"use client";

import Tag from "@/components/Tag";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { span } from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");
export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrenWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrenWord(latest);
    });
  }, [wordIndex]);
  return (
    <div id="Introduction" className="py-24 lg:py-48 min-h-screen pt-[130px]">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introduction Layers</Tag>
          </div>

          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Your Creative Process deserve better.</span>
            <span className="text-white/20">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge("transition duration-500 text-white/15",wordIndex < currentWord && "text-white")}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="text-lime-400 block">
              That&apos;s why we built
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </div>
  );
}
