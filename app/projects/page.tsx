import React from 'react'

import PortfolioCard from '@/components/PortfolioCard'
import APPS from '@/assets/apps.json'

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Projects",
    description: "My projects.",
  };

export default function Project() {

    return (
        <main className="flex flex-col gap-20 p-5 md:mx-[10vw] lg:mx-[20vw] py-[15vh]" >
            <section className='flex flex-col gap-5 '>

                <h1 className='tracking-tighter font-bold text-5xl md:text-6xl'>
                    Projects
                </h1>
                
                <div className='flex flex-col gap-2'>
                    {APPS.map((item,index)=>(
                    <PortfolioCard
                    key={index}
                    name={item.name}
                    description={item.description}
                    url={item.url}
                    stack={item.stack}/>
                    ))}
                </div>

            </section>
        </main>
    )
}
