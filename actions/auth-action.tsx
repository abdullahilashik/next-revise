"use server"
import { signIn } from '@/auth';
import { SignInSchema } from '@/schema/signin-schema';
import {z} from 'zod';

export const handleLogin = async (values: z.infer<typeof SignInSchema>) => {
    try{
        const parsedValue = SignInSchema.safeParse(values);
        if(parsedValue.success){
            await signIn('credentials', {
                redirect: false,
                // redirectTo: '/auth',
                email: parsedValue.data?.email,
                password: parsedValue?.data?.password
            })
            return {
                success: true,
                message: 'Successfully logged in'
            }
        }else{
            return {
                success: false,
                message: 'Invalid credentials'
            }
        }
    }catch(error){
        return {
            message: 'Failed to sign in',
            success: false
        }
    }
}