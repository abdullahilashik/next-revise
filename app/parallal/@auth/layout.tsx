import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const UserLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <Card className='col-span-2'>
        <CardHeader>
            <div className="flex items-center justify-between">
                <h1>User Authentication</h1>
                <div className="inline-flex gap-4 items-center">
                    <Link href={'/parallal-intercept/login'}>Login</Link>
                    <Link href={'/parallal-intercept/register'}>Register</Link>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
  )
}

export default UserLayout