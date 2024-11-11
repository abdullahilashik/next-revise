"use client"

import { LucideLoader2 } from 'lucide-react'
import React from 'react'

const LoadingPage = () => {  
  return (
    <section>
        <div className="container flex flex-col items-center justify-center h-screen overflow-y-clip">
            <h1 className='inline-flex gap-2'>
                <LucideLoader2 className='animate-spin' />
                <span>Please wait....</span>
            </h1>
        </div>
    </section>
  )
}

export default LoadingPage