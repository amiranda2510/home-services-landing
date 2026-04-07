import { ArrowRight, MessageCircleMore } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function CallToAction() {
  const whatsappUrl = 'https://wa.me/51929287749?text=Hola,%20quiero%20cotizar%20un%20servicio'

  return (
    <section className="bg-[#f7f4ef] py-16 md:pt-20 md:pb-10">
      <div className="w-full bg-[#bc7623] py-4 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] md:text-sm">
            Atención rápida por WhatsApp • Servicio personalizado • Cotizaciones sin compromiso
          </span>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid items-center gap-8 py-10 md:gap-10 md:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-14">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-[#0b2a3b] md:text-4xl">
              Solicita tu cotización hoy mismo.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Cuéntanos qué necesitas y te responderemos con una propuesta clara, tiempos estimados y una atención directa para tu servicio.
            </p>
          </div>

          <div className="border-t border-[#e4d8ca] pt-6 text-center lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0 lg:text-left">
            <div className="mb-4 flex justify-center lg:justify-start">
              <div className="flex size-12 items-center justify-center rounded-full bg-[#e7f6ec] text-[#1EA851]">
                <MessageCircleMore className="size-6" />
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#425466]">
              Ideal para consultas rápidas, coordinaciones y cotizaciones sin compromiso.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-6 h-11 rounded-xl bg-[#1EA851] px-5 text-base font-semibold text-white shadow-[0_14px_30px_rgba(30,168,81,0.24)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#179247] hover:text-white"
              aria-label="Cotiza ahora"
            >
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <span className="text-nowrap">Cotiza ahora</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
