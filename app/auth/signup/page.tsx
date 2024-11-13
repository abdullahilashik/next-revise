import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'

import AuthLoginForm from '@/components/auth/auth-login-form';
import { Button } from '@/components/ui/button';
import { Facebook, Github, OctagonX } from 'lucide-react';
import Link from 'next/link';
import AuthSignUpForm from '@/components/auth/auth-register-form';

export const metadata = {
    title: 'Sign In'
};

const SignUpPage = () => {
    
  return (
    <section>
        <div className="container">
            <Card className='w-1/2 mx-auto'>
                <CardHeader>
                    <h1 className="font-bold text-2xl">Sign Up</h1>
                    <p>Use your email and password for traditional user authentication. Don't by shy, will ya?</p>
                </CardHeader>
                <CardContent>
                    <AuthSignUpForm />
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
                    <p>Already have an account?</p>
                    <Link href={'/auth/signin'} className='underline'>Login Now</Link>
                </CardFooter>
            </Card>
        </div>
    </section>
  )
}

export default SignUpPage