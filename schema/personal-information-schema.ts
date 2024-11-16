import {z} from 'zod';

export const PersonalInformationSchema = z.object({
    name: z.string({required_error: 'Name is required'}).min(1, {message: 'What kind of name is that?'}),
    email: z.string({required_error: 'Email is required'}).min(5, {message: 'Minimum 5 characters required'}).email({message: 'Not a valid email'}),
    website: z.string({required_error: 'Website address required'}).url({message: "not a valid website"})
})