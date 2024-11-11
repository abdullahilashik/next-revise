"use client"

import { productCreateAction } from "@/actions/actions";
import React from "react";
import ProductCreateButton from "./product-create-button";
import { useForm } from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { ProductSchema } from "@/schema/product-schema";

const ProductCreateForm = () => {
    const {handleSubmit, register, formState: {errors, isSubmitting, isSubmitSuccessful}} = useForm<z.infer<typeof ProductSchema>>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            title: '',
            description: ''
        }
    });
  return (
    <form onSubmit={handleSubmit(productCreateAction)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Product Title</label>
        <input
          {...register('title')}
          type="text"
          placeholder="Give your product some name at least"
          className="px-4 py-2 rounded shadow"
        />
        {errors.title && <span className="text-red-600 text-sm font-semibold">{errors.title.message}</span>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Description</label>
        <textarea
          {...register('description')}
          placeholder="Give your product some name at least"
          className="px-4 py-2 rounded shadow"
        ></textarea>
        {errors.description && <span className="text-red-600 text-sm font-semibold">{errors.description.message}</span>}
      </div>
      <ProductCreateButton pending={isSubmitting} />
      {isSubmitSuccessful && <span className="p-2 rounded mt-3 bg-green-500 text-white text-sm font-semibold">Product Created</span>}
    </form>
  );
};

export default ProductCreateForm;
