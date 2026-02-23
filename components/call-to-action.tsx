import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="bg-[#f0f0f0] py-16 md:py-32">
  <div className="mx-auto max-w-6xl px-6">
    <div className="flex flex-col gap-12 lg:flex-row items-center">

      {/* TÍTULO */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl font-semibold lg:text-5xl leading-tight">
          Solicita tu cotización <br /> hoy mismo.
        </h2>
      </div>

      {/* TEXTO + BOTÓN */}
      <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
        <p className="text-muted-foreground mb-6 px-8 lg:px-0">
          Escríbenos por WhatsApp y cuéntanos qué necesitas.
          Te responderemos rápidamente con una cotización clara
          y sin compromiso.
        </p>

        <Button asChild size="lg">
          <Link href="/">
            Cotizar por WhatsApp
          </Link>
        </Button>
      </div>

    </div>
  </div>
</section>
    )
}
