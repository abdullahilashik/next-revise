import { LucideLoader } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='inline-flex gap-2'>
      <LucideLoader className='animate-spin'/>
      <span>Loading. Please wait....</span>
    </div>
  )
}

export default Loading