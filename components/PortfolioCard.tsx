import React from 'react'
import Icon from './Icon'
import Link from 'next/link'

type PortfolioCardProps = {
    name:string;
    description:string;
    src:string;
    stack:string[],
    url:string
}


const PortfolioCard = ({name,description,src,stack,url}:PortfolioCardProps) => {

    return (
        <div className='flex flex-col gap-4 rounded-lg border border-[--clr-base-accent] shadow-sm px-2 py-2'>
            {/*<img src={src} className='w-full h-auto rounded-md shadow-sm border border-[--clr-base-accent]'/>*/}
            <div className='flex flex-col gap-2 px-3 py-2'>
                <h4>
                    <Link className='hover:text-[--clr-grey-base] hover:fill-[--clr-grey-base]' href={url}>{name} <Icon icon="ArrowTopRight" size='sm'/></Link>
                </h4>
                <p className='text-sm md:text-sm'>
                    {description}
                </p>
                <div className='flex flex-row gap-1 flex-wrap items-center'>
                    {stack.map((tag,index)=>(
                    <span className='bg-[--clr-grey-light] border border-[--clr-base-accent] rounded-xl px-2 text-sm'>
                        {tag}
                    </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard;