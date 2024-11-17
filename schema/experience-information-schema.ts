import {z} from 'zod';

export const ExperienceSchema = z.object({
    language: z.string({message: 'Language is required'}).min(3, {message: 'Minimum of 3 characters'}),
    age: z.coerce.number({message: 'Age is required'}).min(18, {message: 'Minimum age is 18'}).max(72, {message: 'You are too old'}),
    education: z.string({message: 'Education is required'}).min(2, {message: 'Minimum 2 character required'}).max(12, {message: 'Maximum 12 characters required'})
})