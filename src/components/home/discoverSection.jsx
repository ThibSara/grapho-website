import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const DiscoverSection = () => {
  const items = [
    {
      id: 1,
      image: "https://via.placeholder.com/400",
      title: "Les meilleurs stylos",
      description: "Les meilleurs stylos"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400",
      title: "La motricité fine",
      description: "This is the second item in the carousel."
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400",
      title: "Avant/Après",
      description: "This is the third item in the carousel."
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400",
      title: "Item Four",
      description: "This is the fourth item in the carousel."
    },
    {
      id: 5,
      image: "https://via.placeholder.com/400",
      title: "Item Five",
      description: "This is the fifth item in the carousel."
    }
  ];

  return (
    <div>
     <div className="text-4xl md:text-4xl  text-center text-secondary font-semibold py-3">
              Des difficultés
            </div>
    <div className=" flex justify-center items-center min-h-screen">
        
      <Carousel className="w-full max-w-6xl">
        <CarouselContent>
          {items.map(item => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3" >
              <div className="p-2">
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <img src={item.image} alt={item.title} className="mb-4 w-full h-64 object-cover" />
                    <h2 className="text-3xl font-semibold">{item.title}</h2>
                    <p className="text-center">{item.description}</p>
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
