import {z} from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif"];

export const FileUploadSchema = z.object({
    image: z.instanceof(File)
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {message: 'jpeg, png or gif allowed'})
        .refine((file) => MAX_FILE_SIZE > file.size , {message: 'Exceeded allowd size 5MB'})
})