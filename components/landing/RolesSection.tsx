'use client';

import { landingContent } from './constants';
import { FadeIn, Stagger, StaggerItem } from './motion';
import { RoleCard } from './RoleCard';

export function RolesSection() {
  return (
    <section id="roles" className="border-b border-border bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <FadeIn className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            {landingContent.rolesHeader.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {landingContent.rolesHeader.subtitle}
          </p>
        </FadeIn>

        <Stagger
          className="mt-10 grid gap-4 lg:grid-cols-3"
          delayChildren={0.06}
          staggerChildren={0.08}
        >
          {landingContent.roles.map((role) => (
            <StaggerItem key={role.title}>
              <RoleCard role={role} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
