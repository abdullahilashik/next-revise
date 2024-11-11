"use server"

import { ProductSchema } from '@/schema/product-schema';
import {z} from 'zod';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function productCreateAction(formData : z.infer<typeof ProductSchema>){
    try{        
        return new Promise((resolve) => {
            setTimeout(async()=>{
                const parsed = ProductSchema.safeParse(formData);
                console.log('Safely parsed: ', parsed.data);
                await prisma.product.create({
                    data: {                
                        title: parsed?.data?.title || '',
                        description: parsed?.data?.description || ''                
                    }
                });
                return resolve(true);
            }, 3000);
        })
        
    }catch(error: any){
        console.log('Error in server action: ', error);
    }
}