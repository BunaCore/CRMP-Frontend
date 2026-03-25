import type { ComponentType } from 'react';
import { FolderPlus, Gear, Money, UsersThree } from 'phosphor-react';

import type { FeatureIconKey, FeatureItem } from './types';

const iconMap: Record<FeatureIconKey, ComponentType<{ size: number; className: string }>> = {
  Workflow: Gear,
  UsersRound: UsersThree,
  WalletCards: Money,
  FolderArchive: FolderPlus,
};

interface FeatureCardProps {
  item: FeatureItem;
}

export function FeatureCard({ item }: FeatureCardProps) {
  const Icon = iconMap[item.icon];

  return (
    <article className="grid gap-4 border border-border p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center border border-border">
        <Icon size={20} className="text-foreground" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
    </article>
  );
}
