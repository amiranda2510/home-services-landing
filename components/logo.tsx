import Image from 'next/image';

export const LogoHeader = () => {
    return (
        <Image src="/alexlogo.svg" alt="Alex Servicios" width={200} height={80} className='w-28 h-auto md:w-32 lg:w-36' />
    )
}

export const LogoFooter = () => {
    return (
        <Image src="/alexlogo.svg" alt="Alex Servicios" width={180} height={180} className='w-28 h-auto md:w-32 lg:w-54' />
    )
}
