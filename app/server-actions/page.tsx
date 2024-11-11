import ProductCreateForm from '@/components/products/product-create-form'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import { PrismaClient } from '@/prisma/generated/client';

const prisma = new PrismaClient();

const ServerActionPage =  async () => {
    const products = await prisma.product.findMany({
        orderBy: {
            id: 'desc'
        }
    });
  return (
    <section>
        <div className="container">
            <div className="py-12">
                <h1>Server Actions</h1>
                <Card className='mt-5'>
                    <CardHeader>
                        <h1 className='text-lg font-bold'>Add a new product!</h1>
                    </CardHeader>
                    <CardContent>
                        <ProductCreateForm />
                    </CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-4 gap-4 pb-12">
                {
                    products.map(product=> (
                        <div className="rounded-lg shadow-md flex p-2 flex-col items-start justify-between bg-white h-[90px]" key={product.id}>
                            <h2 className='font-semibold'>{product.title}</h2>
                            <p className='text-[14px] mt-3 line-clamp-2'>{product.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ServerActionPage