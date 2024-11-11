import {z} from 'zod';

export const ProductSchema = z.object({
    title: z.string({
        required_error: 'You need to provide a title for the product'
    }).min(1, {message: 'Wait a sec! did you left it empty?'}),
    description: z.string({
        required_error: 'Without a description product is meaningless'
    }).min(1, {message: 'At least put something!'})
});