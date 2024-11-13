"use server"

import { v2 as cloudinary } from 'cloudinary';
import { ProductSchema } from '@/schema/product-schema';
import {string, z} from 'zod';
import { PrismaClient } from '@/prisma/generated/client';
import { revalidatePath } from 'next/cache';
import { FileUploadSchema } from '@/schema/file-upload-schema';
import path, { join } from 'path'
import { writeFile } from 'fs/promises'

const prisma = new PrismaClient();

export async function productCreateAction(formData : z.infer<typeof ProductSchema>){
    try{        
        const parsed = ProductSchema.safeParse(formData);
        console.log('Safely parsed: ', parsed.data);
        await prisma.product.create({
            data: {                
                title: parsed?.data?.title || '',
                description: parsed?.data?.description || ''                
            }
        });
        revalidatePath('/','layout');                
    }catch(error){
        console.log('Error in server action: ', error);
    }
}

export async function uploadImage (file: z.infer<typeof FileUploadSchema>){
    try{
        const bytes = await file.image.arrayBuffer();
        const buffer =  Buffer.from(bytes);
        // const tmp = path.resolve(__dirname,'public', file.image.name);
        // await writeFile(tmp, buffer);

    }catch(error){
        console.log('Failed to upload file: ', error);
    }
}

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
})

export async function getSignature() {
  const timestamp = Math.round(new Date().getTime() / 1000)

  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: 'next' },
    cloudinaryConfig.api_secret
  )

  return { timestamp, signature }
}

export async function saveToDatabase({ public_id, version, signature }) {
  // verify the data
  const expectedSignature = cloudinary.utils.api_sign_request(
    { public_id, version },
    cloudinaryConfig.api_secret
  )

  if (expectedSignature === signature) {
    // safe to write to database
    console.log({ public_id })
  }
}