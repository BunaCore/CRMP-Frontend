'use client';

import Image from 'next/image';

/**
 * LoadingScreen: Full-screen loader with logo and spinner
 * Used during app initialization (auth check, etc.)
 */
export function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <Image src="/crmp-c.svg" alt="CRMP Logo" width={80} height={80} className="w-20 h-20" />

        {/* Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-muted rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin" />
        </div>

        {/* Loading text */}
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
