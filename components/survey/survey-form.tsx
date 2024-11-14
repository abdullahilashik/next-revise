"use client"

import React from 'react'
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import { SurveySchema } from '@/schema/survey-schema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

const SurveyForm = () => {
    const form = useForm<z.infer<typeof SurveySchema>>({
        resolver: zodResolver(SurveySchema),
        defaultValues: {
            name: '',
            email: '',
            age: 0,
            message: ''
        }
    });

    const handleSurveySubmit = (values: z.infer<typeof SurveySchema>) => {
        console.log('Survey data: ', values);
    };
  return (
    <>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSurveySubmit)} className='flex flex-col gap-4'>
                <FormField 
                    name='name'
                    control={form.control}
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} type='text' placeholder='Let us know your full name' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    name='email'
                    control={form.control}
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} type='email' placeholder='Provide an email where we can query' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name='age'
                    control={form.control}
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>Age</FormLabel>
                            <FormControl>
                                <Input {...field} type='number' placeholder='How old are you?' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    name='message'
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea {...field} placeholder='Say something you mean' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button>Submit Survey</Button>
            </form>
        </Form>
    </>
  )
}

export default SurveyForm