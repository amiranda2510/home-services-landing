import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { HeroHeader } from './header'
import { AnimatedGroup } from './ui/animated-group'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export default function HeroSection2() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div
            style={{
              backgroundImage: "url('/assets/hero4.jpg')",
            }}
            className="bg-cover bg-center"
          >
            <div className="pb-24 pt-12 md:pb-22 lg:pb-36 lg:pt-15">
              <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center lg:gap-12">
                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                  <h1 className="mt-24 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-10 xl:text-7xl">Soluciones confiables para tu hogar</h1>
                  <p className="mt-8 max-w-2xl text-pretty text-lg">Reparaciones, mantenimiento y remodelaciones. Trabajos garantizados y atención personalizada en todo Lima</p>

                  <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                    <Button
                      asChild
                      size="lg"
                      className="px-5 text-base">
                      <Link href="#link">
                        <span className="text-nowrap">Cotiza ahora</span>
                      </Link>
                    </Button>
                    <Button
                      key={2}
                      asChild
                      size="lg"
                      variant="ghost"
                      className="px-5 text-base">
                      <Link href="#link">
                        <span className="text-nowrap">Solicita una visita</span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                >

                  {/* Cards / Mockups */}
                  <div
                    aria-hidden
                    className="bg-radial from-primary/50 dark:from-primary/25 relative mx-auto mt-32 max-w-2xl to-transparent to-55% text-left">

                    <div className="bg-muted dark:bg-background/50 border-border/50 mx-auto w-64 sm:w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
                      <div className="bg-background space-y-2 overflow-hidden rounded-[1.5rem] border p-2 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                        <AppComponent />

                        <div className="bg-muted rounded-[1rem] p-4 pb-16 dark:bg-white/5"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-5"></div>
                  </div>

                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const AppComponent = () => {
  return (
    <div className="relative space-y-4 rounded-3xl bg-[#0f172a] p-4 text-sm">
      {/* Header tipo WhatsApp */}
      <div className="flex items-center gap-3 border-b border-white/10 pb-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white font-semibold">
          AS
        </div>
        <div>
          <p className="text-white font-medium leading-none">
            Alex Soluciones
          </p>
          <p className="text-xs text-green-400">En línea</p>
        </div>
      </div>

      {/* Chat */}
      <div className="space-y-3 pt-2">
        {/* Cliente */}
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-zinc-700 px-4 py-2 text-white">
            Hola 👋 necesito una cotización para pintar mi sala.
          </div>
        </div>

        {/* Profesional */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-green-600 px-4 py-2 text-white">
            ¡Claro! 😊 ¿Te gustaría agendar una visita?
          </div>
        </div>

        {/* Cliente */}
        <div className=" justify-start hidden sm:flex">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-zinc-700 px-4 py-2 text-white">
            Sí! ¿el servicio incluye materiales?
          </div>
        </div>

        {/* Profesional */}
        <div className="justify-end hidden sm:flex">
          <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-green-600 px-4 py-2 text-white">
            Sí 🙌 Incluye pintura, protección de muebles y limpieza final
          </div>
        </div>

      </div>

      {/* Input fake */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-zinc-400 text-xs">
          Escribe un mensaje...
        </div>
      </div>
    </div>
  );
};
