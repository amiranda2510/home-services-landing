"use client";

import Image from "next/image";
import { motion } from "motion/react";

const photos = [
  { src: "/assets/portfolio/piso.jpg", label: "Piso laminado", location: "San Miguel", span: 2 },
  { src: "/assets/portfolio/reja_after.png", label: "Reja de seguridad", location: "Pueblo Libre", span: 2 },
  { src: "/assets/portfolio/puerta_after.jpg", label: "Puertas de madera", location: "San Isidro", span: 1 },
  { src: "/assets/portfolio/wall_after.jpg", label: "Pintura interior", location: "Miraflores", span: 1 },
  { src: "/assets/portfolio/remodelacion.jpg", label: "Remodelación de puertas", location: "Surco", span: 2 },
];

export default function ProjectsGrid() {
  return (
    <section
      className="relative w-full scroll-mt-24 bg-cover bg-center py-16"
      id="proyectos"
      style={{ backgroundImage: "url('/assets/project-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/55" aria-hidden></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold md:text-4xl text-center mb-4 text-white">
          Proyectos Realizados
        </h1>
        <h3 className="text-center text-[#f0f0f0] font-semibold mb-15">Algunos de nuestros trabajos recientes</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={[
                "group relative h-56 overflow-hidden cursor-pointer md:h-72",
                "transition-all duration-300 hover:shadow-2xl",
                photo.span === 2 ? "md:col-span-2" : "md:col-span-1",
              ].join(" ")}
            >
              <Image
                src={photo.src}
                alt={`${photo.label} en ${photo.location}`}
                fill
                className="object-cover transition-transform duration-500 group-active:scale-105 md:group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />
              <motion.div
                initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ type: "spring", bounce: 0.3, duration: 1, delay: i * 0.08 }}
                viewport={{ once: false, amount: 0.45 }}
                className="absolute bottom-0 left-0 right-0 p-3 translate-y-0 transition-transform duration-300 md:translate-y-full md:group-hover:translate-y-0"
              >
                <span className="mb-1 inline-block rounded-full bg-[#03466e] px-2 py-0.5 text-xs font-semibold text-white">
                  Proyecto realizado
                </span>
                <p className="text-white text-sm font-semibold leading-tight">{photo.label}</p>
                <p className="text-white/70 text-xs">{photo.location}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}