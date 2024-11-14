import { ThemeContext } from '@/app/app-context/page'
import React, { useContext } from 'react'

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

export default ChildLevel1