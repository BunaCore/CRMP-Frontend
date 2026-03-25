import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AppProvider } from '@/contexts/AppContext';
import { QueryProvider } from '@/contexts/QueryProvider';
import { AuthInitializer } from '@/contexts/AuthInitializer';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CRMP',
  description: 'CRMP | Comprehensive Research Management Platform for Research',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryProvider>
          <AppProvider>
            <AuthInitializer>
              <TooltipProvider>{children}</TooltipProvider>
            </AuthInitializer>
          </AppProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
