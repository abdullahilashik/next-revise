import ProductCreateForm from '@/components/products/product-create-form'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

const ServerActionPage = () => {
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
        </div>
    </section>
  )
}

export default ServerActionPage