import React from 'react'
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "About Me",
    description: "About me.",
  };


export default function AboutMe() {

    return (
        <main className='flex flex-col gap-5 p-5 md:mx-[10vw] lg:mx-[20vw] py-[15vh] py-[15vh]'>
            
            <h1 className='text-5xl md:text-6xl font-bold tracking-tight'>About me</h1>

            <p className='text-base md:text-lg'>
            Since childhood, I&apos;ve been fascinated by the diverse landscape of the web. Starting with basic HTML and CSS, I was drawn to the endless possibilities of design and functionality that web development offers.
            </p>

            <p className='text-base md:text-lg'>
            With each project, I find myself eager to learn more. Whether it&apos;s diving into new programming languages or staying updated on the latest design trends, I thrive on the constant evolution of the web development field.
            </p>


        </main>
    )
}