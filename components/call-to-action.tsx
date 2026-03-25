import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="bg-[#f0f0f0] py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row items-center">

          {/* TÍTULO */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-semibold lg:text-4xl leading-tight">
              Solicita tu cotización <br /> hoy mismo.
            </h2>
          </div>

          {/* TEXTO + BOTÓN */}
          <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
            <p className="text-muted-foreground mb-6 px-8 lg:px-0 text-lg">
              Escríbenos por WhatsApp y cuéntanos qué necesitas.
              Te responderemos rápidamente con una cotización clara
              y sin compromiso.
            </p>


            <Button
              asChild
              size="lg"
              className="px-5 text-base text-zinc-50 transition-all duration-300 ease-out hover:scale-105 hover:text-zinc-50 hover:shadow-[0_12px_30px_rgba(30,140,70,0.45)] focus-visible:scale-105 focus-visible:text-zinc-50 focus-visible:shadow-[0_0_0_3px_rgba(255,255,255,0.25)] active:scale-100"
              aria-label="Cotiza ahora"
              style={{ backgroundColor: '#1EA851' }}
            >
              <Link href="https://wa.me/51929287749?text=Hola,%20quiero%20cotizar%20un%20servicio" target="_blank" rel="noopener noreferrer">
                <span className="text-nowrap">👉    Cotiza ahora</span>
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
