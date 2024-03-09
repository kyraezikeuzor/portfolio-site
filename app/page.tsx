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
    <main className="flex flex-col gap-20 px-[5vw] py-[15vh] ">
      <header className='flex flex-col gap-5 md:mx-[10vw]'>
        <h1 className='tracking-tighter'>Hi! I&apos;m Kyra Ezikeuzor, a student and developer.</h1>
        <p>
          Hey there, I&apos;m Kyra Ezikeuzor, a student and web developer. I got hooked on web design while tinkering with HTML and CSS, and since then, I&apos;ve been passionate about creating engaging websites. I&apos;m constantly learning and exploring new techniques to enhance user experiences. Let&apos;s collaborate and build something amazing!
        </p>
        <div className='flex flex-row gap-3 items-center'>
          <Button path="https://github.com/kyraezikeuzor">View my Github <Icon icon="Github" size="sm" color="white"/> <Icon icon="ArrowTopRight" size="sm" color="white"/></Button>
          <Link href='/hire-me' className='font-medium'>Hire Me ➝</Link>
        </div>
      </header>
      <section className="flex flex-col md:flex-row items-center justify-between gap-2 md:mx-[10vw]">
        <div className='w-full md:w-3/5 flex flex-col gap-5'>
          <h2>A Bit About Me. </h2>
          <ul className='w-full flex flex-col gap-1'>
            <li className='w-full flex flex-row gap-5'>
              <span>•</span>
              <p>
              Since childhood, I&apos;ve been fascinated by the diverse landscape of the web. Starting with basic HTML and CSS, I was drawn to the endless possibilities of design and functionality that web development offers.
              </p>
            </li>
            <li className='flex flex-row gap-5'>
              <span>•</span>
              <p>
              Web development quickly became more than just a hobby—it became a creative outlet for me. I loved experimenting with different designs and layouts, seeing how small changes in code could make a big impact on the user experience.
              </p>
            </li>
            <li className='flex flex-row gap-5'>
              <span>•</span>
              <p>
              With each project, I find myself eager to learn more. Whether it&apos;s diving into new programming languages or staying updated on the latest design trends, I thrive on the constant evolution of the web development field.
              </p>
            </li>
          </ul>
        </div>
        <div className='w-full md:w-2/5 items-center justify-center'>
          <img className='w-full h-auto rounded-full' src='https://www.pewtrusts.org/-/media/post-launch-images/2022/11/gettyimages1198849037jpgmaster/1x1_s.jpg'/>
        </div>
      </section>
      <section className='flex flex-col gap-5 md:mx-[10vw]'>
        <h2 className='tracking-tighter'>Tech Stack & Skills</h2>
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
      <section className='flex flex-col gap-5 md:mx-[10vw]'>
        <span>
          <h2 className='tracking-tighter'>My Portfolio</h2>
          <div>
            
          </div>
        </span>
        
        
        <div className='flex flex-col gap-2'>
            {/*<h3 className='tracking-tighter'>Apps</h3>*/}
            <div className='flex flex-col gap-2'>
              {APPS.map((item,index)=>(
                <PortfolioCard
                key={index}
                name={item.name}
                description={item.description}
                src={item.src}
                url={item.url}
                stack={item.stack}/>
              ))}
            </div>
        </div>

      </section>

    </main>
  );
}
