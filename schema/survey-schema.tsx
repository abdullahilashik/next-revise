import {z} from 'zod';

export const SurveySchema = z.object({
    name: z.string({required_error: 'You need to provide a name'}).min(4, {message: 'Minimum 4 character is required'}),
    age: z.coerce.number({required_error: 'Age is required'}).min(18, {message: 'You are not an adult!'}).max(50, {message: 'Too old for the club!'}),
    email: z.string({required_error: 'Email is required'}).min(5, {message: 'Minimum of 5 characters required'}).email({message: 'Not a vaid email'}),
    message: z.string({required_error: 'At least say hello'}).min(5, {message: 'Minimum of 5 character is required'})
})