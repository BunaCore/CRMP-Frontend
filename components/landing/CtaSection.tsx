'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { landingContent } from './constants';
import { FadeIn } from './motion';

export function CtaSection() {
  return (
    <section id="contact" className="border-b border-border bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <FadeIn className="grid gap-6">
          <h2 className="max-w-4xl text-2xl font-semibold leading-tight md:text-3xl">
            {landingContent.cta.title}
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
            {landingContent.cta.subtitle}
          </p>

          <div>
            <Button
              asChild
              className="rounded-none bg-white text-blue-600 shadow-none hover:bg-white/90"
            >
              <Link href={landingContent.cta.actionHref}>{landingContent.cta.actionLabel}</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
