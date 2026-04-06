import Image from 'next/image';

export const LogoHeader = () => {
    return (
        <Image src="/alexlogo.svg" alt="Alex Servicios" width={200} height={150} className='lg:w-[150px] lg:h-auto' />
    )
}

export const LogoFooter = () => {
    return (
        <Image src="/logo-footer.svg" alt="Alex Servicios" width={130} height={130} className='lg:w-[130px] lg:h-auto' />
    )
}
