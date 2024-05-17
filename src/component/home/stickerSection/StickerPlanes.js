"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ImageWrapper from "./ImageWrapper";

export default function StickerPlanes({ MouseMovement }) {
  const plane1 = useRef(null);
  const plane2 = useRef(null);

  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.008;

  useEffect(() => {
    manageMouseMove(MouseMovement);
  }, [MouseMovement]);

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.3}`,
      y: `+=${yForce * 0.3}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <div className="absolute w-full bg-primary h-screen pointer-events-none -z-2">
      <div
        ref={plane1}
        id="StickerOneLayer"
        >
        <ImageWrapper
          className={"w-[8vh] lg:w-[12vh]"}
          custom={4.4}
        >
          <Image
            className="inline-block  align-middle"
            src={"/StickersWithColor/Apron Sticker.png"}
            height={150}
            width={150}
            alt="apron-sticker"
          />
        </ImageWrapper>
        </div>
      </div>
  );
}
