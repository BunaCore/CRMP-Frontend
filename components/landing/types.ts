export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
}

export interface CtaContent {
  title: string;
  subtitle: string;
  actionLabel: string;
  actionHref: string;
}

export interface StatItem {
  value: string;
  description: string;
}

export type FeatureIconKey = 'Workflow' | 'UsersRound' | 'WalletCards' | 'FolderArchive';

export interface FeatureItem {
  icon: FeatureIconKey;
  title: string;
  description: string;
}

export interface RoleItem {
  title: string;
  subtitle: string;
  bullets: string[];
}

export interface FooterContent {
  statement: string;
  copyright: string;
}

export interface SectionHeader {
  title: string;
  subtitle: string;
}

export interface LandingContent {
  brandName: string;
  navLinks: NavLink[];
  hero: HeroContent;
  stats: StatItem[];
  featuresHeader: SectionHeader;
  features: FeatureItem[];
  rolesHeader: SectionHeader;
  roles: RoleItem[];
  cta: CtaContent;
  footerLinks: NavLink[];
  footer: FooterContent;
  a11y: {
    openMenu: string;
    closeMenu: string;
    primaryNavigation: string;
  };
}
