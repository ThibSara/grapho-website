"use client";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import StickerPlanes from "./stickerSection/StickerPlanes";
import AboutSection from "./AboutSection";

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
      className="flex flex-col"
    >
      <section
        ref={HeroRef}
        className="relative flex flex-col items-center justify-center w-full h-screen "
      >
        <AboutSection />
        <StickerPlanes MouseMovement={MouseMovement} />
      </section>
    </main>
  );
}
