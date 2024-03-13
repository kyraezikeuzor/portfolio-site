import React from 'react'
import Icon from './Icon'
import Link from 'next/link'

type PortfolioCardProps = {
    name:string;
    description:string;
    stack:string[],
    url:string
}


const PortfolioCard = ({name,description,stack,url}:PortfolioCardProps) => {

    return (
        <div className='flex flex-col gap-4 rounded-lg border-2 border-[--clr-base-accent] shadow-sm px-2 py-2'>
            
            <div className='flex flex-col gap-2 px-3 py-2'>
                <h4 className='text-lg'>
                    <Link target='_blank' className='hover:text-[--clr-grey-base] hover:fill-[--clr-grey-base]' href={url}>{name} <Icon icon="ArrowTopRight" size='sm'/></Link>
                </h4>
                <p className='text-sm md:text-sm'>
                    {description}
                </p>
                <div className='flex flex-row gap-1 flex-wrap items-center'>
                    {stack.map((tag,index)=>(
                    <span key={index} className='bg-[--clr-grey-light] border border-[--clr-base-accent] rounded-xl px-2 text-sm'>
                        {tag}
                    </span>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default PortfolioCard;