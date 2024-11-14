"use client"

import ChildLevel1 from '@/components/app-context/child-level-1';
import ParentComp from '@/components/app-context/parent';
import { Button } from '@/components/ui/button';
import React, { createContext, useState } from 'react'

export const ThemeContext = createContext('');

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