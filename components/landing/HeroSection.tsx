'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { landingContent } from './constants';
import { FadeIn } from './motion';

export function HeroSection() {
  return (
    <section className="border-b border-border bg-slate-50 text-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:px-8 lg:py-24">
        <FadeIn className="grid gap-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {landingContent.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl md:leading-tight">
            Bring <span className="bg-primary px-2 font-bold text-slate-50">structure</span> <br />{' '}
            and trust to your research lifecycle
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/70 md:text-lg">
            {landingContent.hero.subtitle}
          </p>
        </FadeIn>

        <FadeIn className="flex flex-col gap-3 sm:flex-row" delay={0.08}>
          <Button asChild className="rounded-none shadow-none">
            <Link href={landingContent.hero.primaryActionHref}>
              {landingContent.hero.primaryActionLabel}
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="rounded-none border border-border text-foreground shadow-none hover:bg-muted-foreground/10"
          >
            <Link href={landingContent.hero.secondaryActionHref}>
              {landingContent.hero.secondaryActionLabel}
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
