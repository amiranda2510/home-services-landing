"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  ReactCompareSlider,
} from "react-compare-slider";

const projects = [
  {
    title: "Remodelación de baño",
    location: "San Miguel",
    before: "/assets/hero3.jpg",
    after: "/assets/hero4.jpg",
  },
  {
    title: "Instalación de cocina",
    location: "Pueblo Libre",
    before: "/assets/hero-bg.jpg",
    after: "/assets/hero1.jpg",
  },
];

export default function BeforeAfterCarousel() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Proyectos Realizados</h2>
        <Carousel className="relative w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div className="space-y-6">

                  {/* Título */}
                  <div className="text-center space-y-1">
                    <h4 className="text-xl md:text-2xl font-semibold">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {project.location}
                    </p>
                  </div>

                  {/* Slider */}
                  <div className="relative max-w-4xl mx-auto">

                    {/* Hint */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      ← Desliza para ver el cambio →
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <ReactCompareSlider
                        itemOne={
                          <div className="relative w-full aspect-4/3">
                            <Image
                              src={project.before}
                              alt="Antes"
                              fill
                              className="object-cover"
                            />
                          </div>
                        }
                        itemTwo={
                          <div className="relative w-full aspect-4/3">
                            <Image
                              src={project.after}
                              alt="Después"
                              fill
                              className="object-cover"
                            />
                          </div>
                        }
                      />
                    </div>
                  </div>

                  {/* Descripción opcional */}
                  <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
                    Trabajo realizado con materiales de alta calidad y acabado profesional.
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Flechas */}
          <CarouselPrevious className="left-2 md:left-6 bg-white shadow-md hover:bg-primary hover:text-white transition" />
          <CarouselNext className="right-2 md:right-6 bg-white shadow-md hover:bg-primary hover:text-white transition" />
        </Carousel>
      </div>
    </section>
  );
}