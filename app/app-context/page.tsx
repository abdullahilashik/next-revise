"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React, { createContext, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge';

const ThemeContext = createContext('');

const AppContext = () => {
    const [theme, setTheme] = useState<string>('dark');
  return (
    <section>
        <div className="container">
            <ThemeContext.Provider value={theme}>
                <ParentComp>
                    <ChildLevel1 />
                </ParentComp>
            </ThemeContext.Provider>
            <Button className='mt-3' onClick={e=> setTheme(theme == 'dark' ? 'light': 'dark')}>Toggle Theme</Button>
        </div>
    </section>
  )
}

export default AppContext


const ParentComp = ({children} : {children: React.ReactNode}) => {
    const context = useContext(ThemeContext);
  return (
    <Card>
        <CardContent className={
            twMerge(context == 'dark' ? 'bg-gray-950 text-white': 'bg-white text-black', 
                'rounded-md shadow-md p-2'
            )
        }>{children}</CardContent>
    </Card>
  )
}


const ChildLevel1 = () => {
    const context = useContext(ThemeContext);
  return (
    <div>
      <p>Demonstrates context api with shared value.</p>
      <p>Current Theem Active: 
        <span className='underline ml-4 uppercase font-bold'>{context}</span>
      </p>
    </div>
  )
}