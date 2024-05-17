import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="bg-background font-urbanist flex-col flex items-center justify-center min-h-screen">
      <div className ="container mx-auto px-12 py-4" >
      <div className=" max-w-xl mx-auto  place-self-center space-y-4 text-center justify-self-start">
      <div className="text-primary text-4xl sm:text-7xl font-bold">
        Graphotérapie
      </div>
      <div className="text-black text-base  sm:text-lg lg:text-xl font-semibold">
        Pour une écriture{" "}
        <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" />{" "}
        plus{" "}
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
          width={600}
          height={600}
        />
      </div>
      <div className="  text-black text-base lg:text-lg">
        {" "}
        La graphothérapie est une discipline qui vise à améliorer l’écriture,
        afin de la rendre plus lisible, rapide, soignée et agréable. Cette
        pratique s'adresse principalement aux enfants et aux adolescents dont
        l'écriture présente des difficultés, qu'elle soit peu lisible ou
        négligée.
      </div>
    </div>
      </div>
 </main>
  );
};

export default HeroSection;
