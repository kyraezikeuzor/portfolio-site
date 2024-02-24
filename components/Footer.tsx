'use client'
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css'

import Icon from './Icon'



function Footer() {
  return (
    <div className='px-[5vw] py-[8vh] flex flex-row justify-between items-center'>
        
        <div>
            <span className='font-medium'>Built with ❤️ by Kyra</span>
        </div>
        <div className='flex flex-row gap-1 '>
            <Link target="_blank" href="https://github.com/kyraezikeuzor" className=''> 
                <Icon icon="Github"/>
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/kyraezikeuzor/" > 
                <Icon icon="LinkedIn"/>
            </Link>
            <Link target="_blank" href="https://twitter.com/kyraoez" > 
                <Icon icon="Twitter"/>
            </Link>
        </div>

    </div>
  );
};

export default Footer;