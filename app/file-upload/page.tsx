"use client"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FileUploadSchema } from '@/schema/file-upload-schema';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { uploadImage } from '@/actions/actions'
import Dropzone from '@/components/dropzone'

const FileUploadPage = () => {
    const form = useForm<z.infer<typeof FileUploadSchema>>({
        resolver: zodResolver(FileUploadSchema)
    });

    const handleFileUpload = async (file : z.infer<typeof FileUploadSchema>) => {
        console.log('File upload: ', file);
        if(file){
            await uploadImage(file);
        }
    }
  return (
    <section>
        <div className="container">
            <h1>Upload File</h1>
            <div className="mt-3">
                <Card>
                    <CardHeader>
                        <h1>Simple form validation</h1>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleFileUpload)} className='flex flex-col gap-4'>
                                <FormItem>
                                    <FormLabel>Upload an image</FormLabel>
                                    <Controller name='image' control={form.control} render={({field})=>(
                                        <div>
                                            <Input type='file' onChange={(e) => field.onChange(e.target.files?.[0] || null)} />
                                        </div>
                                    )}>
                                        
                                    </Controller>
                                    {
                                        form.formState.errors.image && 
                                        <span className='text-red-600 font-light'>{form.formState.errors.image.message}</span>
                                    }
                                </FormItem>
                                <Button className='mr-auto' type='submit'>Upload Image</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
            <div className="mt-3">
                <Card>
                    <CardContent>
                        <Dropzone className='mt-10 border border-neutral-200 p-16' />
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default FileUploadPage