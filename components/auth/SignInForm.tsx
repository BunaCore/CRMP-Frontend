'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { signInSchema, type SignInFormData } from '@/types/auth';
import { useSignIn } from '@/lib/api/auth/mutations';

export function SignInForm() {
  const router = useRouter();
  const { mutate: signIn, isPending, error } = useSignIn();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Display error if mutation fails
  useEffect(() => {
    if (error) {
      form.setError('email', {
        type: 'manual',
        message: error instanceof Error ? error.message : 'Sign in failed',
      });
    }
  }, [error, form]);

  function onSubmit(data: SignInFormData) {
    signIn(data, {
      onSuccess: () => {
        // Redirect to dashboard on successful sign in
        router.push('/dashboard');
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                  className="rounded-none border-border"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel className="text-sm font-medium">Password</FormLabel>
                <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <FormControl>
                <PasswordInput
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Enter your password"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isPending}
          className="w-full rounded-none bg-primary hover:bg-primary/90 text-white font-medium"
        >
          {isPending ? 'Signing in...' : 'Sign In'}
        </Button>

        {/* Sign Up Link */}
        <div className="text-center text-sm">
          <span className="text-muted-foreground">Don&apos;t have an account? </span>
          <Link href="/signup" className="font-medium text-primary hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </Form>
  );
}
