"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoArrowDownCircle } from "react-icons/io5";

const HeroSection = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight -80, 
      behavior: 'smooth' 
    });
  };

  return (
    <main className="bg-background flex-col flex items-center min-h-screen justify-center px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}justify-center 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className=" max-w-3xl mx-auto place-self-center space-y-5 text-center">
          <div className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Graphotérapie
          </div>
          <div className="text-black text-base  sm:text-lg lg:text-xl font-semibold">
            Pour une écriture plus{" "}
            <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" />{" "}
            lisible{" "}
            <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" />{" "}
            rapide{" "}
            <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" />{" "}
            fluide{" "}
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/hero-image-2.png"
              alt="hero image"
              className="center"
              width={800}
              height={800}
            />
            
          </div>
          <div className="  text-black text-base sm:text-lg lg:text-xl sm:px-8 lg:px-12">
            {" "}
            La graphothérapie est une discipline qui vise à améliorer
            l’écriture, afin de la rendre plus lisible, rapide, soignée et
            agréable. Cette pratique s'adresse principalement aux enfants et aux
            adolescents dont l'écriture présente des difficultés, qu'elle soit
            peu lisible ou négligée.
          </div>
          
        </div>
        <motion.div
      className="flex flex-col items-center justify-center pt-20"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, y: [0, 10, 0] }}
      transition={{
        delay:2,
        duration: 0.5,
        ease: "easeOut",
        y: {
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }
      }}
    >
      <div className="text-sm text-secondary">En savoir plus</div>

      <IoArrowDownCircle
       size={40}
        color={"#F89BC0"}
        onClick={handleScroll} 
        style={{ cursor: "pointer" }}
        />
      </motion.div>
      </motion.div>

    </main>
  );
};

export default HeroSection;
