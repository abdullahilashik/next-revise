"use client"

import { Button } from '@/components/ui/button'
import { decrement, increment, selectCounterValue } from '@/lib/features/couter/counterSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store'
import React from 'react'

const ReduxPage = () => {
  const counterValue = useAppSelector(selectCounterValue);
  const dispatch = useAppDispatch();
  const handleIncrease = () => {
    dispatch(increment());
  }

  const handleDecrease = () => {
    dispatch(decrement());
  }
  return (
    <section>
        <div className="container flex flex-col items-center justify-center h-screen overflow-y-clip">
            <h1 className='text-[120px] font-extrabold'>{counterValue}</h1>
            <div className="grid grid-cols-2 gap-4">
              <Button onClick={handleIncrease} size={'lg'} className='w-44 h-44'>Plus</Button>
              <Button onClick={handleDecrease} size={'lg'} className='w-44 h-44'>Minus</Button>
            </div>
        </div>
    </section>
  )
}

export default ReduxPage