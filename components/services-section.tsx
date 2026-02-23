import { Card } from '@/components/ui/card'
import * as React from 'react'
import {
  LuWrench,
  LuZap,
  LuHammer,
  LuRuler,
  LuHouse,
  LuPlug,
} from "react-icons/lu";

export default function IntegrationsSection() {
    return (
        <section>
            <div className="py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Soluciones para tu hogar</h2>
                        <p className="text-muted-foreground mt-6">Reparaciones, mejoras y mantenimiento con responsabilidad y buen acabado.</p>
                    </div>

                    <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        <IntegrationCard
                            title="Gasfitería"
                            description="Reparación de fugas, cambio de griferías, instalación de sanitarios y mantenimiento general.">
                             <LuWrench className="text-[#9a9468]" size={28} />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Electricidad"
                            description="Instalación de luminarias, tomacorrientes, interruptores y solución de fallas eléctricas.">
                            <LuZap className="text-yellow-500" size={28} />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Remodelaciones"
                            description="Trabajos en drywall, pintura, enchapes y mejoras para renovar tus espacios.">
                            <LuRuler className='text-[#07627c]' size={28} />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Carpintería"
                            description="Reparación e instalación de puertas, muebles, repisas y estructuras en madera.">
                            <LuHammer className='text-[#bc7623]' size={28} />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Instalación de accesorios"
                            description="Colocación de cortinas, espejos, racks de TV, repisas y más.">
                            <LuPlug className='text-[#64644f]' size={28} />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Trabajos personalizados"
                            description="Cuéntanos tu necesidad y te brindamos una solución a medida.">
                            <LuHouse className='text-[#943832]' size={28} />
                        </IntegrationCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ title, description, children }: { title: string; description: string; children: React.ReactNode; link?: string }) => {
    return (
        <Card className="p-6">
            <div className="relative">
                <div className="*:size-10">{children}</div>

                <div className="space-y-2 py-6">
                    <h3 className="text-base font-medium">{title}</h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
                </div>

            </div>
        </Card>
    )
}
