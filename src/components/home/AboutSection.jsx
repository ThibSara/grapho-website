import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="container max-w-4xl mx-auto px-8 space-y-4">
      <div className="text-black text-base font-medium lg:text-lg space-y-6 ">
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/Stickers/highlighter.png"}
            height={80}
            width={80}
            alt="highlighter-sticker"
          />
          <div>
            <div className="text-4xl md:text-4xl text-secondary font-semibold py-3">
              Des difficultés
            </div>

            <p>
              Un enfant qui écrit mal, trop lentement ou avec difficulté peut
              rencontrer des obstacles dans son parcours scolaire. Par exemple,
              s'il n'arrive pas à copier assez rapidement ses leçons ou s'il se
              pose encore la question de savoir comment former une lettre, il
              perd un temps précieux et peut se retrouver en difficulté face à
              ses camarades. Ces défis peuvent également affecter sa confiance
              en lui, rendant l'apprentissage encore plus ardu.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Image
            src={"/images/Stickers/highlighter.png"}
            height={80}
            width={80}
            alt="highlighter-sticker"
          />
          <div>
            <div className="text-4xl md:text-4xl text-secondary font-semibold py-3">
              La graphothérapie comme solution
            </div>

            <p>
              C'est là qu'intervient la graphothérapeute. Spécialiste de
              l'écriture, elle évalue les besoins spécifiques de chaque enfant
              et met en place des exercices personnalisés pour améliorer la
              fluidité, la lisibilité et la rapidité de l’écriture. Grâce à un
              suivi attentif et des techniques adaptées, la graphothérapeute
              aide l'enfant à acquérir une écriture plus efficace et plus
              agréable, ce qui peut significativement améliorer sa confiance en
              lui et sa performance scolaire.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 ">
          <Image
            src={"/images/Stickers/highlighter.png"}
            height={80}
            width={80}
            alt="highlighter-sticker"
          />
          <div>
            <div className="text-4xl md:text-4xl text-secondary font-semibold py-3">
              Un petit plus
            </div>

            <p>
              La graphothérapie ne se limite pas à corriger l’écriture; elle
              vise aussi à renforcer la motricité fine, la concentration et la
              posture de l’enfant, contribuant ainsi à un bien-être global dans
              ses activités scolaires et quotidiennes.
            </p>
          </div>
        </div>

        <button className="text-white font-semibold py-4 px-4 bg-primary rounded-xl">
          Est ce que mon enfant en a besoin ?
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
