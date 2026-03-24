'use client';

import { landingContent } from './constants';
import { FeatureCard } from './FeatureCard';
import { FadeIn, Stagger, StaggerItem } from './motion';

export function FeaturesSection() {
  return (
    <section id="features" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <FadeIn className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            {landingContent.featuresHeader.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {landingContent.featuresHeader.subtitle}
          </p>
        </FadeIn>

        <Stagger
          className="mt-10 grid gap-4 md:grid-cols-2"
          delayChildren={0.06}
          staggerChildren={0.08}
        >
          {landingContent.features.map((feature) => (
            <StaggerItem key={feature.title}>
              <FeatureCard item={feature} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
