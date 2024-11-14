import { ThemeContext } from '@/app/app-context/page';
import React, { useContext } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card';
import { twMerge } from 'tailwind-merge';

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

export default ParentComp