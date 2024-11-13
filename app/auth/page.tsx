import { auth } from '@/auth'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Authentication with Auth5'
}

const AuthPage = async () => {
    const session = await auth();
  return (
    <section>
        <div className="container">
            <div className="flex flex-col">
                <h1 className='font-bold text-xl'>NextJS Authentication</h1>
                <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, veritatis.</p>
            </div>
            {
                !session && (
                    <div className="mt-3 flex gap-4">
                        <Link className={buttonVariants({'variant': 'default'})} href={'/auth/signin'}>Sign In</Link>
                        <Link className={buttonVariants({'variant': 'secondary'})} href={'/auth/signup'}>Sign Up</Link>
                    </div>
                )
            }
            {
                session && (
                    <div className="mt-3 flex gap-4">
                        <p>Logged in as <strong>{session?.user?.name}</strong></p>
                        <Link className={buttonVariants({'variant': 'secondary'})} href={'/api/auth/signout'}>Sign Out</Link>
                    </div>
                )
            }
        </div>
    </section>
  )
}

export default AuthPage