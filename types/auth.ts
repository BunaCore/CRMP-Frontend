import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z.email('Email must be a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    passwordConfirm: z.string().min(8, 'Password confirmation is required'),
    fullName: z.string().optional().or(z.literal('')),
    department: z.string().optional().or(z.literal('')),
    phoneNumber: z.string().optional().or(z.literal('')),
    university: z.string().optional().or(z.literal('')),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords do not match',
    path: ['passwordConfirm'],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Email must be a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export type SignInFormData = z.infer<typeof signInSchema>;

export interface RegisterDto {
  email: string;
  password: string;
  fullName?: string;
  department?: string;
  phoneNumber?: string;
  university?: string;
  universityId?: string;
}
