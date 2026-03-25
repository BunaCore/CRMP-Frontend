'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SignInForm } from './SignInForm';
import { ScrollArea } from '@/components/ui/scroll-area';

export function SignInPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Form Panel with Scroll */}
      <ScrollArea className="h-screen w-full">
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 lg:px-12">
          <div className="w-full max-w-md space-y-8">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Image src="/crmp-c.svg" alt="CRMP Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-sm font-semibold text-foreground">CRMP</span>
            </Link>

            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign In</h1>
              <p className="text-sm text-muted-foreground">
                Welcome back to your research management platform
              </p>
            </div>

            {/* Form */}
            <SignInForm />
          </div>
        </div>
      </ScrollArea>

      {/* Right Side - Image Panel (Sticky, no scroll) */}
      <div
        className="hidden lg:flex flex-col items-center justify-center relative overflow-hidden sticky top-0 h-screen w-full"
        style={{
          backgroundImage: 'url(/single-building.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-black/90 to-black/80" />

        {/* Content */}
        <div className="relative z-10 max-w-md space-y-8 text-left text-white">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Welcome Back</h2>
              <p className="mt-4 text-lg text-white/40 leading-relaxed">
                Access your research projects and continue your work with our platform.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="pt-8 space-y-3">
              <div className="text-sm text-white/80">✓ Manage your research portfolio</div>
              <div className="text-sm text-white/80">✓ Track project progress</div>
              <div className="text-sm text-white/80">✓ Collaborate with your team</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
