import React from 'react'
import Link from 'next/link'

type LogoProps = {
    minimal?: true,
    size?: 'lg' | 'xl',
    className?: any
    
}

const Logo = ({minimal, size, className}: LogoProps) => {

    return (
        <Link href="/" className='flex flex-row items-center w-32'>
            <img className='w-full' src='/logo.png'/>
        </Link>
    )
}

export default Logo