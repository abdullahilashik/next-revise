"use server"

import { ProductSchema } from '@/schema/product-schema';
import {z} from 'zod';
import { PrismaClient } from '@/prisma/generated/client';
import { revalidatePath } from 'next/cache';

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