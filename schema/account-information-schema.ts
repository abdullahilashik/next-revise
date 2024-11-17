import {z} from 'zod';

export const AccountInformationSchema = z.object({
    bank: z.string({required_error: 'Bank name is required'}).min(1, {message: 'At least 1 character is required'}),
    phone: z.string({required_error: 'You need to provide a phone number'}).min(11, {message: 'At least 11 characters are required'})
})