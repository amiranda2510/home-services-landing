import Image from 'next/image';

export const LogoHeader = () => {
    return (
        <Image src="/logo-header.svg" alt="Alex Servicios" width={100} height={80} className='lg:w-[150px] lg:h-auto' />
    )
}

export const LogoFooter = () => {
    return (
        <Image src="/logo-footer.svg" alt="Alex Servicios" width={130} height={130} className='lg:w-[130px] lg:h-auto' />
    )
}
