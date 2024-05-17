"use client";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import HeroCopy from "./stickerSection/HeroCopy";
import StickerPlanes from "./stickerSection/StickerPlanes";

export default function StickerSection() {
  const [MouseMovement, setMouseMovement] = useState(0);
  const HeroRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <main
      onMouseMove={(e) => {
        setMouseMovement(e);
      }}
      className="w-full flex flex-col px-[5.5rem] h-[350vh]"
    >
      <section
        ref={HeroRef}
        className="relative flex flex-col items-center justify-center w-full h-screen"
      >
        <HeroCopy />
        <StickerPlanes MouseMovement={MouseMovement} />
      </section>
      <section className="relative flex flex-col justify-between w-full h-screen"></section>
    </main>
  );
}
