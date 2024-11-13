import {z} from 'zod';

export const SignInSchema = z.object({
    email: z.string().min(5, {message: 'Be a good lad and enter more than 5 characters'}).email({message: 'Not a valid email mate!'}),
    password: z.string({required_error: 'With a key only theives tries to enter!'}).min(1, {message: 'At least say hello'}).max(32, {message: 'HOld your horses! Not more than 32 characters.'})
})

export const SignUpSchema = z.object({
    email: z.string().min(5, {message: 'Be a good lad and enter more than 5 characters'}).email({message: 'Not a valid email mate!'}),
    password: z.string({required_error: 'With a key only theives tries to enter!'}).min(1, {message: 'At least say hello'}).max(32, {message: 'HOld your horses! Not more than 32 characters.'}),
    confirmPassword: z.string({required_error: 'Can not be left empty'})
}).superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password is not the same as confirm password',
        path: ['confirmPassword'],
      })
    }
  })