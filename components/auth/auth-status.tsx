import React from 'react'
import {BadgeCheck, OctagonX, X} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const AuthStatus = ({message, error} : {message: string, error: boolean}) => {
  if(!message){
    return null;
  }
  return (
    <div className={twMerge(
      `px-4 py-2 rounded-md font-semibold text-sm mt-3 inline-flex gap-2 w-full items-center`,
      error ? 'bg-red-600/20 text-red-600' : 'bg-green-600/20 text-green-600'
    )}>
        { error ? <OctagonX /> : <BadgeCheck /> }
        {message}
    </div>
  )
}

export default AuthStatus