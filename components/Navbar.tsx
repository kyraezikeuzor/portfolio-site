'use client'
import React from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import Theme from './Theme'
import Button from './Button'
import Logo from './Logo'

export default function Navbar() {

    const pathname = usePathname();

    return (
        <nav className='z-50 sticky top-0 flex flex-row justify-between items-center p-5 md:px-[10vw] lg:px-[20vw] py-2 shadow-sm backdrop-blur bg-[--clr-base]/50 border-y border-[--clr-base-accent]'>
            <ul className='flex flex-row items-center gap-2 font-medium'>
                <li>
                    <Logo/>
                </li>
                <li className={`${pathname === '/about-me' ? 'bg-[--clr-grey-light]' : ''}  border-2 border-[--clr-base-accent] px-4 py-1 rounded-lg`}>
                    <Link href='/about-me'>About</Link>
                </li>
                <li className={`${pathname === '/projects' ? 'bg-[--clr-grey-light]' : ''} border-2 border-[--clr-base-accent] px-4 py-1 rounded-lg`}>
                    <Link href='/projects'>Projects</Link>
                </li>
            </ul>
            <ul className='flex flex-row gap-2'>
                <li>
                    <Theme/>
                </li>
            </ul>
        </nav>
    )
}