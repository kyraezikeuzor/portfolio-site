'use client'
import React, {useState} from 'react'

import TECHSTACK from '@/assets/stack.json'
import WEBSITES from '@/assets/websites.json'
import APPS from '@/assets/apps.json'



export default function Portfolio() {

    const [view, setView] = useState('')

    let showPage = APPS
    if (view === 'Apps') {
        showPage = APPS
    } else if (view === 'Website') {
        showPage = WEBSITES
    }

    return (
        <main className='flex flex-col gap-20 px-[5vw] py-[15vh] '>
            
            <section className='flex flex-col gap-5 md:mx-[10vw]'>

                <h1 className=''>Portfolio</h1>

                <section className='flex flex-col '>
                    <div className='flex flex-row gap-2 bg-[--clr-grey-light] p-3'>
                        <span onClick={() => setView('Website')}
                        className={`${view === 'Website' ? 'bg-[--clr-grey-base]': ''}`}
                        >Website</span>

                        <span onClick={() => setView('Apps')}
                        className={`${view === 'Apps' ? 'bg-[--clr-grey-base]': ''}`}
                        >Apps</span>
                    </div>
                    
                    <section className='grid grid-cols-2 gap-5 bg-[--clr-grey-light] p-3 rounded-lg'>
                        {showPage.map((item,index)=>(
                            <div className='flex flex-col gap-4 bg-[--clr-base] rounded-lg border border-[--clr-base-accent] shadow-sm px-2 py-2'>
                                <img src={item.src} className='w-full h-auto rounded-md shadow-sm border border-[--clr-base-accent]'/>
        
                                <div className='flex flex-col gap-2 px-3 py-2'>
                                    <h4>{item.name}</h4>
                                    <p className='text-sm md:text-sm'>
                                        {item.description}
                                    </p>
                                    <div className='flex flex-row gap-1 flex-wrap items-center'>
                                        {item.stack.map((tag,index)=>(
                                        <span className='bg-[--clr-grey-light] border border-[--clr-base-accent] rounded-xl px-2 text-sm'>
                                            {tag}
                                        </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </section>
                
                
            </section>
        </main>
    )
}