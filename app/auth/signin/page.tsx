import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'

import AuthLoginForm from '@/components/auth/auth-login-form';
import { Button } from '@/components/ui/button';
import { Facebook, Github, OctagonX } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@/auth';

export const metadata = {
    title: 'Sign In'
};

const SignInPage = async () => {
    const session = await auth();
  return (
    <section>
        <div className="container">
            <Card className='w-1/2 mx-auto'>
                <CardHeader>
                    <h1 className="font-bold text-2xl">Sign In</h1>
                    <p>Use your email and password for traditional user authentication. Don't by shy, will ya?</p>
                </CardHeader>
                <CardContent>
                    <AuthLoginForm />
                    <div className="grid grid-cols-2 mt-3 gap-4">
                        <Button> 
                            <Github />
                            <span>Continue with Github</span>    
                        </Button>
                        <Button>
                            <Facebook />
                            <span>Continue with Facebook</span>
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className='flex flex-col items-center justify-center'>
                    <p>Don't have an account?</p>
                    <Link href={'/auth/signup'} className='underline'>Create account</Link>
                </CardFooter>
            </Card>
        </div>
    </section>
  )
}

export default SignInPage