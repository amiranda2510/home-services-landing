"use client";

import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
    {
        nombre: "Mariana R.",
        servicio: "Pintura interior y acabados",
        lugar: "Miraflores",
        puntaje: 5,
        texto:
            "El servicio fue puntual y muy ordenado. El acabado quedó limpio, parejo y con excelente detalle en esquinas y techos.",
    },
    {
        nombre: "Luis G.",
        servicio: "Instalación de puertas de madera",
        lugar: "San Isidro",
        puntaje: 5,
        texto:
            "Trabajo de gran calidad. Ajustaron cada puerta con precisión y dejaron todo funcionando perfecto desde el primer día.",
    },
    {
        nombre: "Patricia V.",
        servicio: "Colocación de piso laminado",
        lugar: "San Miguel",
        puntaje: 4,
        texto:
            "Muy buena atención y comunicación en todo el proceso. El piso quedó uniforme y el ambiente cambió completamente.",
    },
    {
        nombre: "Carlos M.",
        servicio: "Reja de seguridad a medida",
        lugar: "Pueblo Libre",
        puntaje: 5,
        texto:
            "Desde la visita técnica hasta la instalación, todo fue profesional. Materiales sólidos y excelente terminación.",
    },
];

function Stars({ value }: { value: number }) {
    return (
        <div className="flex items-center gap-1 text-[#bc7623]" aria-label={`Calificación ${value} de 5`}>
            {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-4" fill={i < value ? "currentColor" : "none"} />
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonios" className="w-full bg-[#f7f4ef] py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
                    <h2 className="text-3xl font-bold md:text-4xl">Testimonios de Clientes</h2>
                    <p className="mt-3 text-muted-foreground">
                        Opiniones reales sobre el servicio, la calidad del trabajo y el lugar donde se realizó cada proyecto.
                    </p>
                </div>

                <Carousel opts={{ align: "start", loop: true }} className="mx-auto w-full max-w-5xl">
                    <CarouselContent>
                        {testimonials.map((item) => (
                            <CarouselItem key={`${item.nombre}-${item.servicio}`} className="md:basis-1/2 lg:basis-1/3">
                                <Card className="h-full border-[#d6c8b8] bg-white/90 shadow-sm">
                                    <CardContent className="flex h-full flex-col gap-4 p-6">
                                        <Stars value={item.puntaje} />

                                        <p className="text-sm leading-relaxed text-[#1f2d3a]">"{item.texto}"</p>

                                        <div className="mt-auto space-y-1 border-t border-[#efe6db] pt-4 text-sm">
                                            <p className="font-semibold text-[#0b2a3b]">{item.nombre}</p>
                                            <p className="text-muted-foreground">Servicio: {item.servicio}</p>
                                            <p className="text-muted-foreground">Lugar: {item.lugar}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="-left-2 border-[#c9b9a6] bg-white text-[#0b2a3b] hover:bg-[#f6efe6] md:-left-12" />
                    <CarouselNext className="-right-2 border-[#c9b9a6] bg-white text-[#0b2a3b] hover:bg-[#f6efe6] md:-right-12" />
                </Carousel>
            </div>
        </section>
    );
}
