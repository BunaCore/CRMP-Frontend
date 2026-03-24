import { AxiosError } from 'axios';
import { ZodError } from 'zod';

/**
 * Standard error shape for API responses
 */
export interface ApiErrorResponse {
  message: string;
  code?: string;
  errors?: Record<string, string[]>;
}

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public errorData: ApiErrorResponse,
    public originalError?: AxiosError,
  ) {
    super(errorData.message);
    this.name = 'ApiError';
  }
}

/**
 * Handle AxiosError and extract meaningful error info
 */
export function handleApiError(error: unknown): never {
  if (error instanceof AxiosError) {
    const statusCode = error.response?.status || 500;
    const errorData = (error.response?.data || {
      message: 'An unexpected error occurred',
    }) as ApiErrorResponse;

    throw new ApiError(statusCode, errorData, error);
  }

  if (error instanceof ZodError) {
    const fieldErrors = error.flatten().fieldErrors;
    throw new ApiError(400, {
      message: 'Validation failed',
      code: 'VALIDATION_ERROR',
      errors: fieldErrors as Record<string, string[]>,
    });
  }

  throw new ApiError(500, {
    message: error instanceof Error ? error.message : 'Unknown error',
  });
}

/**
 * Check if error is auth-related (401/403)
 */
export function isAuthError(error: ApiError): boolean {
  return error.statusCode === 401 || error.statusCode === 403;
}

/**
 * Extract field errors from API response for form display
 */
export function getFieldErrors(error: ApiError): Record<string, string> {
  const result: Record<string, string> = {};

  if (error.errorData.errors) {
    Object.entries(error.errorData.errors).forEach(([field, messages]) => {
      result[field] = messages[0] || 'An error occurred';
    });
  }

  return result;
}
