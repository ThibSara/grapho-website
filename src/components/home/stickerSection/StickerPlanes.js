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
    <div className="absolute top-0 w-full h-screen pointer-events-none -z-2">
      <div
        ref={plane1}
        id="StickerOneLayer"
        className="absolute top-0 w-full h-screen pointer-events-none "
      >
        <ImageWrapper
          className={"-right-[5%] w-[10vh] lg:w-[18vh] top-[20%]"}
          custom={1.4}
        >
          <Image
            className="inline-block w-full h-full"
            src={"/images/Stickers/board.png"}
            height={300}
            width={300}
            alt="board-sticker"
          />
        </ImageWrapper>
        <ImageWrapper
          className={"left-[15%] top-[14%] w-[8vh] lg:w-[12vh]"}
          custom={2.8}
        >
          <Image
            className="inline-block align-middle"
            src={"/images/Stickers/calculator.png"}
            height={300}
            width={300}
            alt="calculator-sticker"
          />
        </ImageWrapper>
        <ImageWrapper
          className={"right-[20%] bottom-[20%] w-[8vh] lg:w-[12vh]"}
          custom={4.4}
        >
          <Image
            className="inline-block align-middle"
            src={"/images/Stickers/highlighter.png"}
            height={300}
            width={300}
            alt="highlighter-sticker"
          />
        </ImageWrapper>
        <ImageWrapper
          className={"left-[0%] bottom-[20%] w-[10vh] lg:w-[15vh]"}
          custom={3.5}
        >
          <Image
            className="inline-block align-middle"
            src={"/images/Stickers/pot-pencil.png"}
            height={300}
            width={300}
            alt="pot-pencil-sticker"
          />
        </ImageWrapper>
      </div>
      <div
        ref={plane2}
        id="StickerTwoLayer"
        className="absolute top-0 w-full h-screen pointer-events-none"
      >
        <ImageWrapper
          className={"-left-[4%] top-[22%] w-[9vh] lg:w-[14vh]"}
          custom={2}
        >
          <Image
            className="w-full h-full "
            src={"/images/Stickers/pencil.png"}
            height={300}
            width={300}
            alt="pencil-sticker"
          />
        </ImageWrapper>
        <ImageWrapper
          className={"bottom-[10%] left-[22%]  w-[8vh] lg:w-[12vh]"}
          custom={4}
        >
          <Image
            className="inline-block align-middle"
            src={"/images/Stickers/rule.png"}
            height={300}
            width={300}
            alt="rule-sticker"
          />
        </ImageWrapper>

        <ImageWrapper
          className={"bottom-[20%] right-[0%] w-[9vh] lg:w-[14vh]"}
          custom={1}
        >
          <Image
            className="inline-block align-middle"
            src={"/images/Stickers/rubber.png"}
            height={300}
            width={300}
            alt="rubber-sticker"
          />
        </ImageWrapper>

        <ImageWrapper
          className={"top-[20%] right-[10%] w-[8vh] lg:w-[12vh]"}
          custom={3}
        >
          <Image
            className="inline-block align-middle"
            src={"/images/Stickers/notebook.png"}
            height={300}
            width={300}
            alt="notebook-sticker"
          />
        </ImageWrapper>
      </div>
    </div>
  );
}