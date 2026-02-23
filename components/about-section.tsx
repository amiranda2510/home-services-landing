"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Más de 10 años construyendo confianza
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Con más de 10 años de experiencia en trabajos del hogar y construcción,
              he ayudado a cientos de familias a mejorar y mantener sus espacios.
              He colaborado con constructoras reconocidas como Casa Ideal y Terrazul,
              participando en proyectos residenciales y remodelaciones completas.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Mi compromiso es ofrecer soluciones bien hechas, responsables y
              duraderas, cuidando cada detalle como si fuera mi propio hogar.
            </p>

            {/* Logos */}
            <div className="pt-6">
              <p className="text-sm font-medium mb-4 text-muted-foreground">
                Experiencia trabajando con:
              </p>

              <div className="flex flex-wrap items-center gap-6 opacity-70">
                <Image
                  src="/logos/casa-ideal.png"
                  alt="Casa Ideal"
                  width={120}
                  height={40}
                  className="object-contain"
                />

                <Image
                  src="/logos/terrazul.png"
                  alt="Terrazul"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0">
            <Image
              src="/assets/profile.jpg"
              alt="Contratista"
              fill
              className="object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}