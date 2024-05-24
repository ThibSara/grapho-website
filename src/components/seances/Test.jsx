"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className=" mx-auto max-w-6xl  container overflow-hidden items-center">
      <motion.div
        className="text-4xl md:text-4xl text-secondary font-semibold whitespace-nowrap flex justify-center"
        style={{ x }}
      >
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        
      </motion.div>
    </div>
  );
}

export default function Test() {
  return (
    <main className="justify-center">
      <section className="w-full">
      <ParallaxText baseVelocity={-2}>
      <span className="text-primary">
      <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" /> {" "}
            {" "}Une écriture {" "}
            </span>
            <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" /> {" "}
            {" "}lente{" "}
            <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" /> {" "}
            {" "}peu lisible{" "}
            <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" /> {" "}
            {" "}irrégulière{" "}
      </ParallaxText>
      <ParallaxText baseVelocity={2}>Scroll velocity</ParallaxText>
      </section>
    </main>
  );
}
