import React from 'react'
import Link from 'next/link'
import Icon from '@/components/Icon'

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Hire Me",
    description: "Hire me.",
  };

export default function HireMe() {

    return (
        <main className="min-h-screen flex flex-col gap-20 p-5 md:mx-[10vw] lg:mx-[20vw] py-[15vh]">

            <section className='flex flex-col gap-5'>
                <h1 className='tracking-tighter font-bold text-5xl md:text-6xl'>Hire me!</h1>
                <p className='text-base md:text-lg'>
                    Hire me to build your websites or web apps or other software projects. I have 3+ years of extensive experience in web development. 
                    Along with other projects, I&apos;ve built websites for nonprofits and other institutions.
                </p>
                <p className='text-base md:text-lg'>
                    Contact me at <Link  className='font-semibold' target="_top" href='mailto:kyraezikeuzor@gmail.com'>kyraezikeuzor@gmail.com</Link>
                </p>
            </section>

            

        </main>
    )
}