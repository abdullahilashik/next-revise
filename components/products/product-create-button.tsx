"use client"
import React from 'react'
import { Button } from '@/components/ui/button';

const ProductCreateButton = ({pending} : {pending: boolean}) => {    
  return (
    <Button disabled={pending}>
        {pending ? 'Please wait...' : 'Add Product'}
    </Button>
  )
}

export default ProductCreateButton