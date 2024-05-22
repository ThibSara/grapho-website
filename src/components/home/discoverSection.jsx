"use client";
import Image from "next/image";
import { useState } from "react";


const DiscoverSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      imgSrc: "/images/stickers/rubber.png",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imgSrc: "/images/stickers/rubber.png",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imgSrc: "/images/stickers/rubber.png",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
        imgSrc: "/images/stickers/rubber.png",
        title: "Noteworthy technology acquisitions 2021",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      },
    
    
  ];

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="container max-w-5xl mx-auto py-24 px-8 justify-center">
      <div className="text-4xl md:text-4xl text-center text-secondary font-semibold py-3">
        Découvrir plus
      </div>
      <div className="relative flex items-center">
        <button
          onClick={prevCard}
          className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md"
        >
          {"<"}
        </button>
        <div className="flex overflow-hidden w-full justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`transition-transform duration-500 transform ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ minWidth: "300px" }}
            >
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src={card.imgSrc}
                    width={300}
                    height={300}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {card.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {card.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextCard}
          className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default DiscoverSection;
