'use client'

import React, {useState, useEffect} from 'react'
import Icon from './Icon'

const ThemeButton = () => {
    const [showDarkMode, setShowDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
    const [systemMode, setSystemMode] = useState('')
    const [theme, setTheme] = useState()

    useEffect(()=>{
        
    })

    useEffect(()=>{
        
        if (window.matchMedia('(prefers-color-scheme: dark)').matches && showDarkMode == false) {
            document.documentElement.classList.toggle('dark', false);
        } else {
            document.documentElement.classList.toggle('dark', showDarkMode);
        }
        

    })


    useEffect(()=>{
        const data = window.localStorage.getItem('SCHOLARVINE_APP_THEME');
        if (data != null) setShowDarkMode(JSON.parse(data))
    }, [])


    useEffect(()=>{
        window.localStorage.setItem('SCHOLARVINE_APP_THEME', JSON.stringify(showDarkMode))
    }, [showDarkMode])

    const changeTheme = () => {
        setShowDarkMode(prevMode => !prevMode)
    }
    
    return (
        <Icon size='lg' icon={showDarkMode == true ? 'Sun' : 'Moon'} onClick={changeTheme} button={true}/>
        
    )
}

export default ThemeButton;