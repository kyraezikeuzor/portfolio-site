import React from 'react'
import Link from 'next/link'
import Theme from './Theme'
import Button from './Button'
import Logo from './Logo'

export default function Navbar() {

    return (
        <nav className='flex z-50 sticky top-5 flex-row justify-between items-center px-[5vw] py-4 shadow-sm backdrop-blur bg-[--clr-base]/50 border-y border-[--clr-base-accent]'>
            <Logo/>
            <ul className='flex flex-row items-center gap-2 font-medium'>
                {/*<li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link href='/hire-me'>Hire Me</Link>
                </li>*/}
            </ul>
            <ul className='flex flex-row gap-2'>
                {/*<li>
                    <Button>Contact</Button>
                    </li>*/}
                <li>
                    <Theme/>
                </li>
            </ul>
        </nav>
    )
}