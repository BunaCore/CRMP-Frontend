'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CaretDown } from 'phosphor-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { landingContent } from './constants';
import { ArrowRight } from 'lucide-react';

export function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm" id="overview">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-4 px-6 py-4 lg:px-8">
        <div className="col-span-8 md:col-span-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/crmp-logo.svg"
              alt="CRMP"
              width={24}
              height={24}
              className="text-blue-600"
            />
            {/* <span className="text-sm font-semibold tracking-wide text-foreground">CRMP</span> */}
          </Link>
        </div>

        <nav
          className="col-span-6 hidden items-center justify-center gap-8 md:flex"
          aria-label={landingContent.a11y.primaryNavigation}
        >
          {landingContent.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="col-span-3 hidden justify-end md:flex">
          <Button variant={'ghost'} asChild className="rounded-none shadow-none">
            <Link href={landingContent.hero.primaryActionHref}>
              {landingContent.hero.primaryActionLabel}
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="col-span-4 flex justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label={landingContent.a11y.openMenu}
                className="rounded-none"
              >
                <CaretDown className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[86%] rounded-none border-l border-border p-0 shadow-none"
              aria-describedby={undefined}
            >
              <SheetHeader className="border-b border-border p-6">
                <SheetTitle className="text-left text-sm font-semibold">
                  {landingContent.brandName}
                </SheetTitle>
              </SheetHeader>

              <nav className="grid gap-2 p-6" aria-label={landingContent.a11y.primaryNavigation}>
                {landingContent.navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="border border-border px-4 py-3 text-sm text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="p-6 pt-0">
                <Button variant={'ghost'} asChild className="w-full rounded-none shadow-none">
                  <Link href={landingContent.hero.primaryActionHref}>
                    {landingContent.hero.primaryActionLabel}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
