import React from "react";
import Image from "next/image";

const Data = [
  {
    title: "Déroulé d’une séance",
    text: [
      "Un enfant qui écrit mal, trop lentement ou avec difficulté peut rencontrer des obstacles dans son parcours scolaire. Par exemple, s'il n'arrive pas à copier assez rapidement ses leçons ou s'il se pose encore la question de savoir comment former une lettre, il perd un temps précieux et peut se retrouver en difficulté face à ses camarades.",
      "C'est là qu'intervient la graphothérapeute. Spécialiste de l'écriture, elle évalue les besoins spécifiques de chaque enfant et met en place des exercices personnalisés pour améliorer la fluidité, la lisibilité et la rapidité de l’écriture. Grâce à un suivi attentif et des techniques adaptées, la graphothérapeute aide l'enfant à acquérir une écriture plus efficace et plus agréable, ce qui peut significativement améliorer sa confiance en lui et sa performance scolaire."
    ],
    image: "/images/carousel/writing-child-2.jpg",
    tarification:"Tarification de la séance",
    price: 50,
    secondPrice: 0,
  },
  {
    title: "Déroulé d'un bilan",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti facere quam iusto sequi nulla animi autem maiores! Ducimus accusantium consectetur alias laboriosam exercitationem, modi quos praesentium minus in reprehenderit.",
      "Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque."
    ],    image: "/images/carousel/writing-child.jpg",
    tarification:"Tarification du bilan",

    price: 50,
    secondPrice: 150,
  },
];

const PriceCard = () => {
  return (
    <div>
      {Data.map((item, index) => (
        <div className=" flex flex-col items-center rounded-lg shadow-lg hover:shadow-xl max-w-6xl mx-auto w-full">

        <div key={index} className="w-full">
          
          <div className="flex items-center p-8  border-b border-secondary w-full">
            <div className="w-full">
            <h1 className="text-primary text-3xl md:text-3xl font-semibold pb-4">{item.title}</h1>

              <p className="font-medium lg:text-lg pr-8">{item.text}</p>
            </div>
            <Image
              src={item.image}
              alt="Picture of the author"
              width={300}
              height={250}
              className="rounded-lg"
            />
          </div>
          <div className="w-full flex items-center py-3 justify-between px-8">
            <p className="mr-2 text-lg font-semibold">{item.tarification}</p>
            <div className="bg-secondary hover:bg-secondary/60 rounded-lg p-3 px-6 text-white font-semibold text-2xl">
              {item.price}€
            </div>
          </div>
          {item.secondPrice > 0 && (
            <div className="border-t border-secondary">
            <div className="w-full flex  items-center mt-3 justify-between px-8">
            <p className="mr-2 text-lg  font-medium">Tarification du bilan - plus de 15 ans</p>
              <div className="bg-secondary hover:bg-secondary/60 rounded-lg p-3 px-6 text-white font-semibold text-2xl ml-4">
                {item.secondPrice}€
              </div>
            </div>
            </div>
            )}
        </div>
      </div>
      ))}
    </div>
  );
};

export default PriceCard;
