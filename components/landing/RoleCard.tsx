import { Check } from 'lucide-react';

import type { RoleItem } from './types';

interface RoleCardProps {
  role: RoleItem;
}

export function RoleCard({ role }: RoleCardProps) {
  return (
    <article className="grid gap-5 border border-border p-6">
      <header className="grid gap-2">
        <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
        <p className="text-sm text-muted-foreground">{role.subtitle}</p>
      </header>

      <ul className="grid gap-3">
        {role.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
          >
            <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
