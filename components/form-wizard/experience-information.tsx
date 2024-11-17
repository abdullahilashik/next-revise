"use form"

import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { useForm } from 'react-hook-form'
import {z} from 'zod';
import { ExperienceSchema } from '@/schema/experience-information-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { ArrowRight, FileDiff } from 'lucide-react';
import { Input } from '../ui/input';
import SubmitButton from './submit-button';
import { useDispatch } from 'react-redux';
import { nextActiveTab, selectExperienceInfo, updateExperienceInfo } from '@/lib/features/mutlipage/multiPageSlice';
import { useSelector } from 'react-redux';

const ExperienceInformation = () => {
    const dispatch = useDispatch();
    const experienceInfo = useSelector(selectExperienceInfo);
    const form = useForm<z.infer<typeof ExperienceSchema>>({
        resolver: zodResolver(ExperienceSchema),
        defaultValues: {
            language: experienceInfo.language || '',
            age: experienceInfo.age || 0,
            education: experienceInfo.education || ''
        }
    });
    const handleFormSubmit = (values : z.infer<typeof ExperienceSchema>) => {
        dispatch(updateExperienceInfo({...values}));
        dispatch(nextActiveTab());
    }
  return (
    <Card>
        <CardHeader>
            <h1>Experience Information</h1>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleFormSubmit)} className='flex flex-col gap-4'>
                    <FormField 
                        name='language'
                        control={form.control}
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Language</FormLabel>
                                <FormControl>
                                    <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your language!" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='bengali'>Bengali</SelectItem>
                                            <SelectItem value='english'>English</SelectItem>
                                            <SelectItem value='arabic'>Arabic</SelectItem>
                                            <SelectItem value='hindi'>Hindi</SelectItem>
                                        </SelectContent>
                                    </Select>
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
                                    <Input type='number' placeholder='Let us know your age' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField 
                        name='education'
                        control={form.control}
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Education</FormLabel>
                                <FormControl>
                                    <Select {...field} defaultValue={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Level of your education"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='psc'>Primary School Certificate</SelectItem>
                                            <SelectItem value='jsc'>Junior School Certificate</SelectItem>
                                            <SelectItem value='ssc'>Secondary School Certificate</SelectItem>
                                            <SelectItem value='hsc'>Higher School Certificate</SelectItem>
                                            <SelectItem value='bsc'>Bachelor of Hons.</SelectItem>
                                            <SelectItem value='msc'>Masters</SelectItem>
                                            <SelectItem value='phd'>Doctorate</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <SubmitButton hasPrevious={true} />
                </form>
            </Form>
        </CardContent>
    </Card>
  )
}

export default ExperienceInformation