'use client';

import { landingContent } from './constants';
import { Stagger, StaggerItem } from './motion';

export function StatsStrip() {
  return (
    <section className="border-b border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <Stagger className="grid gap-0 md:grid-cols-3" delayChildren={0.02} staggerChildren={0.06}>
          {landingContent.stats.map((stat, index) => (
            <StaggerItem
              key={stat.value + index}
              className="border-b border-white/20 px-0 py-8 last:border-b-0 md:border-r md:border-b-0 md:px-6 md:last:border-r-0"
            >
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{stat.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
