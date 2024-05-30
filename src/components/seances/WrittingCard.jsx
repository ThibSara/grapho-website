"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const WrittingCard = ({
  beforeImg = "/images/carousel/writing-child.jpg",
  afterImg = "/images/carousel/writing-child-2.jpg",
  ChildName = "Natacha CE1",
}) => {
  const [imageSrc, setImageSrc] = useState(beforeImg);

  const handleMouseEnter = () => {
    if (imageSrc === beforeImg) setImageSrc(afterImg);
    else setImageSrc(beforeImg);
  };

  return (
    <div className="px-6">
      <div
        className="relative w-80 h-80 shadow-lg hover:shadow-xl"
        onMouseEnter={handleMouseEnter}
      >
        <AnimatePresence>
          <motion.div
            key={imageSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Image
              src={imageSrc}
              alt="hero image"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 w-full bg-white backdrop-blur-sm bg-opacity-50 p-4 rounded-b-lg">
          <h2 className="text-lg text-primary text-center font-semibold">
            {ChildName}
          </h2>
          <p className="text-center">
            {imageSrc === beforeImg ? "Avant" : "Après"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WrittingCard;
