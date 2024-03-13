import Image from "next/image";
import type { Metadata } from "next";
import Link from 'next/link'

import Button from '@/components/Button'
import Icon from '@/components/Icon'
import PortfolioCard from '@/components/PortfolioCard'

import TECHSTACK from '@/assets/stack.json'
import APPS from '@/assets/apps.json'

export const metadata: Metadata = {
  title: "Kyra's Portfolio",
  description: "My personal website.",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-20 p-5 md:mx-[10vw] lg:mx-[20vw] py-[15vh] ">

      <header className='flex flex-col gap-5'>

        <h1 className='tracking-tighter font-bold text-5xl md:text-6xl'>
          Hey! I&apos;m Kyra.
        </h1>

        <p className='text-base md:text-lg'>
          I'm a junior in high school and developer who makes open-source projects focused on student life, medicine, and science. Welcome to my digital garden. 🌱
        </p>

        <div className='flex flex-row gap-3 items-center'>
          <Button path="https://github.com/kyraezikeuzor">Github <Icon icon="Github" size="sm" color="white"/> <Icon icon="ArrowTopRight" size="sm" color="white"/></Button>
          <Link href='/hire-me' className='font-medium'>Hire Me ➝</Link>
        </div>

      </header>
      
      <section className='flex flex-col gap-5'>

        <h2 className='text-2xl md:text-3xl tracking-tight'>
          Tech Stack & Skills
        </h2>
        
        <div className='flex flex-row flex-wrap gap-2'>
          {TECHSTACK.map((item,index)=>(
            <div key={index} className='flex flex-col gap-2 items-center rounded-2xl border border-[--clr-base-accent] px-4 py-4'>
              <img src={item.src} className='w-auto h-16'/>
              <div className='font-medium'>
                {item.name}
              </div>
            </div>
          ))}
        </div>

      </section>

      <section className='flex flex-col gap-5 '>

        <h2 className='text-2xl md:text-3xl tracking-tight'>
          Projects
        </h2>
         
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
  );
}
