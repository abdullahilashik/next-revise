import {z} from 'zod';

export const AccountInformationSchema = z.object({
    bank: z.string({required_error: 'Bank name is required'}),
    phone: z.string({required_error: 'You need to provide a phone number'})
})