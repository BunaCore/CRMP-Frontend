import { z } from 'zod';

/**
 * Auth API Response Schemas
 */

export const authResponseSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  fullName: z.string().optional(),
  token: z.string(),
  refreshToken: z.string().optional(),
  expiresIn: z.number().optional(),
});

export type AuthResponse = z.infer<typeof authResponseSchema>;

export const signUpResponseSchema = authResponseSchema.extend({
  createdAt: z.string(),
  role: z.enum(['researcher', 'supervisor', 'admin']).optional(),
});

export type SignUpResponse = z.infer<typeof signUpResponseSchema>;

export const signInResponseSchema = authResponseSchema;

export type SignInResponse = z.infer<typeof signInResponseSchema>;

/**
 * Error response schemas
 */
export const apiErrorSchema = z.object({
  message: z.string(),
  code: z.string().optional(),
  errors: z.record(z.string(), z.array(z.string())).optional(),
});

export type ApiErrorType = z.infer<typeof apiErrorSchema>;
