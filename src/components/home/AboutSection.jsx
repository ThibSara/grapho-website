"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const AboutSection = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const paragraphVariants = {
    initial: { y: 50, opacity: 0 },
    animate: (delay) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay },
    }),
  };

  const imageVariants = {
    bounce: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.9,
        yoyo: Infinity,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
    move: {
      y: [0, -10, 0],
      transition: {
        duration: 0.9,
        yoyo: Infinity,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div className="container max-w-6xl mx-auto px-8 flex justify-center">
      <div className="text-black text-base font-medium lg:text-lg space-y-16">
        <motion.div
  className="flex items-start space-x-6" // Adjust spacing between text and image
  ref={ref1}
  initial="initial"
  animate={isInView1 ? "animate" : "initial"}
  variants={paragraphVariants}
  custom={0.2}
>
  <div className="text-left max-w-2xl">
    <div className="text-3xl md:text-3xl text-secondary font-semibold py-3">
      Des difficultés
    </div>
    
    <p className=""> 
      Un enfant qui écrit mal, trop lentement ou avec difficulté peut
      rencontrer des obstacles dans son parcours scolaire. Par exemple,
      s'il n'arrive pas à copier assez rapidement ses leçons ou s'il se
      pose encore la question de savoir comment former une lettre, il
      perd un temps précieux et peut se retrouver en difficulté face à
      ses camarades. Ces défis peuvent également affecter sa confiance
      en lui, rendant l'apprentissage encore plus ardu.
    </p>
  </div>
  <Image
    src="/images/ink.png"
    alt="Picture of the author"
    width={250}
    height={250}
    className="rounded-2xl"
  />
</motion.div>

<motion.div
  className="flex items-start space-x-6" // Adjust spacing between text and image
  ref={ref1}
  initial="initial"
  animate={isInView1 ? "animate" : "initial"}
  variants={paragraphVariants}
  custom={1}
>
<Image
    src="/images/ink.png"
    alt="Picture of the author"
    width={250}
    height={250}
    className="rounded-2xl"
  />
  <div className="text-left max-w-2xl ">
    <div className="text-3xl md:text-3xl text-secondary text-right font-semibold py-3">
    La graphothérapie comme solution
    </div>
    
    <p className="text-right"> 
    C'est là qu'intervient la graphothérapeute. Spécialiste de
        l'écriture, elle évalue les besoins spécifiques de chaque enfant
        et met en place des exercices personnalisés pour améliorer la
        fluidité, la lisibilité et la rapidité de l’écriture.<br></br> Grâce à un
        suivi attentif et des techniques adaptées, la graphothérapeute
        aide l'enfant à acquérir une écriture plus efficace et plus
        agréable, ce qui peut significativement améliorer sa confiance en
        lui et sa performance scolaire.
    </p>
  </div>
 
</motion.div>
<motion.div
  className="flex items-center bg-[#FFF5F9] space-x-6 p-6 rounded-2xl"
  ref={ref1}
  initial="initial"
  animate={isInView1 ? "animate" : "initial"}
  variants={paragraphVariants}
  custom={1.5}
>
  <div className="text-left max-w-2xl">
    <div className="text-3xl md:text-3xl text-primary font-semibold py-3">
      Un petit plus
    </div>
    
    <p className="pb-3">
      La graphothérapie ne se limite pas à corriger l’écriture,
      elle vise aussi à renforcer la motricité fine, la concentration et la
      posture de l’enfant, contribuant ainsi à un bien-être global dans
      ses activités scolaires et quotidiennes.
    </p>
    <motion.button
  className="text-white font-semibold py-2 px-3 bg-primary rounded-3xl flex items-center"
  whileHover={{ x: 5 }}
>
<Link
            href="/seances">En savoir plus</Link>

  <FaArrowRight size={16} className="ml-2 text-sm" />
</motion.button>
  </div>
  <motion.div whileHover="move" variants={imageVariants} className="flex justify-center items-center flex-grow">
    <Image
      src="/images/stickers/board.png"
      alt="Picture of the author"
      width={100}
      height={100}
      className="rounded-2xl"
    />
  </motion.div>
</motion.div>

      </div>
    </div>
        
  );
};

export default AboutSection;
