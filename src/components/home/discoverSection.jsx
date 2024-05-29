import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const DiscoverSection = () => {
  const items = [
    {
      id: 1,
      image: "/images/carousel/stylos.jpg",
      title: "Les meilleurs stylos",
      description: "Ma selection des meilleurs stylos pour petits et grands.",
    },
    {
      id: 2,
      image: "/images/carousel/writing-child.jpg",
      title: "La motricité fine",
      description: "Ma selection des meilleurs stylos pour petits et grands.",
    },
    {
      id: 3,
      image: "/images/carousel/writing-child-2.jpg",
      title: "Avant/Après",
      description: "Ma selection des meilleurs stylos pour petits et grands.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400",
      title: "Item Four",
      description: "This is the fourth item in the carousel.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/400",
      title: "Item Five",
      description: "This is the fifth item in the carousel.",
    },
  ];

  return (
    <div className="py-20 px-4 md:px-8">
      <div className="text-4xl md:text-4xl pb-9 text-center text-secondary font-semibold py-3">
        Découvrir plus
      </div>
      <div className="flex justify-center items-center">
        <Carousel className="w-full max-w-6xl">
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 md:p-6">
                  <Card>
                    <CardContent className="flex flex-col  p-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mb-4 w-full h-64 object-cover rounded"
                      />
                      <h2 className="text-lg text-primary font-semibold  ">
                        {item.title}
                      </h2>
                      <p className="">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default DiscoverSection;
