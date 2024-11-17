import {z} from 'zod';

export const BillingSchema = z.object({
    card: z.string({required_error: 'You need to provide a card number'}).min(11, {message: 'Minimum of 11 characters required'}).max(16, {message: 'Maximum 16 characters'}),
    cvc: z.coerce.number({required_error: 'Provide a cvc number'}),
    exp: z.string({required_error: 'Experied month and year'}).min(5, {message: 'It should be at least 5'}).max(7, {message: 'Not more than 7 if you fill the year in full form'}),
    name: z.string({required_error: 'Display name on card is required'}).min(4, {message: 'Provide at least 4 characters'}).max(12, {message: 'That should be enough!'})
})