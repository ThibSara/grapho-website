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

  const x = useTransform(baseX, (v) => `${wrap(-20, -80, v)}%`);

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
    <div className="mx-auto max-w-6xl container overflow-hidden items-center py-2">
      <motion.div
        className="text-4xl md:text-4xl text-secondary font-semibold whitespace-nowrap flex"
        style={{ x }}
      >
        {[...Array(4)].map((_, index) => (
          <span key={index} className="mr-4">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ParralaxHeader() {
  return (
    <main className="justify-center mt-20">
      <section className="w-full">
        <ParallaxText baseVelocity={-2}>
          <span className="text-primary">
            <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" />{" "}
            Une écriture{" "}
          </span>
          <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" />{" "}
          lente{" "}
          <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" />{" "}
          peu lisible{" "}
          <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" />{" "}
          irrégulière{" "}
        </ParallaxText>
        <ParallaxText baseVelocity={2}>
          <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" />{" "}
          Une écriture{" "}
          <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" />{" "}
          lente{" "}
          <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" />{" "}
          peu lisible{" "}
          <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" />{" "}
          irrégulière{" "}
        </ParallaxText>
      </section>
      <div className="text-black max-w-4xl mx-auto text-base sm:text-lg py-5 lg:text-xl flex justify-center text-center">
        Les situations dans lesquelles la graphothérapie est recommandée sont
        celles où l’écriture présente une ou plusieurs de ces caractéristiques.
      </div>
    </main>
  );
}
