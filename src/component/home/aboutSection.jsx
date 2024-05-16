import React from "react";
import Image from "next/image";


const AboutSection = () => {
  return (
    <div className=" max-w-xl mx-auto  place-self-center space-y-4 text-center justify-self-start">
        <Image
            src="/images/stickers/board.png"
            alt="hero image"
            className="center"
            width={100}
            height={100}
        />
        <Image
            src="/images/stickers/pencil.png"
            alt="hero image"
            className="center"
            width={100}
            height={100}
        />
        <Image
            src="/images/stickers/rubber.png"
            alt="hero image"
            className="center"
            width={100}
            height={100}
        />
        <Image
            src="/images/stickers/highlighter.png"
            alt="hero image"
            className="center"
            width={100}
            height={100}
        />
    <div>En savoir plus</div>
    <div>Un enfant qui écrit mal, trop lentement ou avec difficulté peut rencontrer des obstacles dans son parcours scolaire. Par exemple, s'il n'arrive pas à copier assez rapidement ses leçons ou s'il se pose encore la question de savoir comment former une lettre, il perd un temps précieux et peut se retrouver en difficulté face à ses camarades.

C'est là qu'intervient la graphothérapeute. Spécialiste de l'écriture, elle évalue les besoins spécifiques de chaque enfant et met en place des exercices personnalisés pour améliorer la fluidité, la lisibilité et la rapidité de l’écriture. Grâce à un suivi attentif et des techniques adaptées, la graphothérapeute aide l'enfant à acquérir une écriture plus efficace et plus agréable, ce qui peut significativement améliorer sa confiance en lui et sa performance scolaire.

La graphothérapie ne se limite pas à corriger l’écriture; elle vise aussi à renforcer la motricité fine, la concentration et la posture de l’enfant, contribuant ainsi à un bien-être global dans ses activités scolaires et quotidiennes.
</div>
<button>Est ce que mon enfant en à besoin ?</button>

    </div>
  );
};

export default AboutSection;
