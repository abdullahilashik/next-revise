import {z} from 'zod';

export const FormValidationSchema = z.object({
    firstName: z.string({required_error: 'First name is required'}).min(2, {message: 'At least 2 character is required'}),
    lastName: z.string({required_error: 'Last name is required'}).min(2, {message: 'At least provide 2 characters'}),
    email: z.coerce.string({required_error: 'Valid Email is required'}).email().min(8, {message: 'Minimum 8 character required'}),
    // age: z.number({required_error: 'Unborn yet, eh?'}).min(18, {message: '18 years and above allowed'}).max(72, {message: 'You are too old for the club mate!'}),
    age: z.coerce.number().min(18, {message: '18 years or above'}).max(52, {message: 'You are too old to join!'}),
    gender: z.string({required_error: 'Are you an alien?'}).min(1, {message: 'Gender confused? Select Confused at least!'}),
    address: z.object({
        city: z.string({required_error: 'You are from somewhere, right?'}).min(1, {message: 'You are from somewhere, right?'}),
        state: z.string({required_error: 'State is required'}).min(1, {message: 'State is required'}),
        zipCode: z.string({required_error: 'Add some zip too'}).min(1, {message: 'Add some zip too.'})
    }) ,//{city: '', state: ''},    
    hobbies: z.array(z.object({
        name: z.string({required_error: 'You must put something in it!'}).min(1, {message: 'Oops! forgot to put something?'})
    })).min(1, { message: 'You must have at least some hobby, right?' }),
    startDate: z.date({required_error: 'When did you started?'}), // new Date(),
    subscribe: z.boolean().default(false), //false,
    hasReferral: z.boolean().default(false),
    referral: z.string().min(5, {message: 'At least 1 character is required'}).url({message: 'Not a valid url'})

})