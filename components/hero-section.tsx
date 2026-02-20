import { Mail, SendHorizonal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import { LogoCloud } from './logo-cloud'

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

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
        <section className="relative bg-white  overflow-hidden">

          {/* Contenedor general
          <div className="mx-auto "> */}

            {/* Marco blanco */}

            {/* Hero con imagen */}
            <div
              style={{
                backgroundImage: "url('/assets/hero-bg.jpg')",
              }}
              className="bg-cover bg-center"
            >

                <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">

                  <div className="relative mx-auto max-w-4xl text-center">

                    <TextEffect
                      preset="fade-in-blur"
                      speedSegment={0.3}
                      as="h1"
                      className="text-balance text-5xl font-medium md:text-6xl text-white"
                    >
                      Soluciones confiables para tu hogar
                    </TextEffect>

                    <TextEffect
                      per="line"
                      preset="fade-in-blur"
                      speedSegment={0.3}
                      delay={0.5}
                      as="p"
                      className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/90"
                    >
                      Reparaciones, mantenimiento y remodelaciones. Trabajos garantizados y atención personalizada en todo Lima
                    </TextEffect>

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
                      className="mt-12"
                    >
                      <form
                        action=""
                        className="mx-auto max-w-sm"
                      >
                        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">

                          <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

                          <input
                            placeholder="Your mail address"
                            className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                            type="email"
                          />

                          <div className="md:pr-1.5 lg:pr-0">
                            <Button
                              aria-label="submit"
                              size="sm"
                              className="rounded-(--radius)"
                            >
                              <span className="hidden md:block">
                                Get Started
                              </span>

                              <SendHorizonal
                                className="relative mx-auto size-5 md:hidden"
                                strokeWidth={2}
                              />
                            </Button>
                          </div>

                        </div>
                      </form>

                      {/* Cards / Mockups */}
                      <div
                        aria-hidden
                        className="bg-radial from-primary/50 dark:from-primary/25 relative mx-auto mt-32 max-w-2xl to-transparent to-55% text-left">
                        <div className="bg-background border-border/50 absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                          <div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] before:opacity-50"></div>
                        </div>
                        <div className="bg-muted dark:bg-background/50 border-border/50 mx-auto w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
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

        <LogoCloud />
      </main >
    </>
  )
}

const AppComponent = () => {
  return (
    <div className="relative space-y-4 rounded-[1rem] bg-[#0f172a] p-4 text-sm">
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
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-zinc-700 px-4 py-2 text-white">
            Sí! ¿el servicio incluye materiales?
          </div>
        </div>

        {/* Profesional */}
        <div className="flex justify-end">
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

