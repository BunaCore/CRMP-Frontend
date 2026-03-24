import type { LandingContent } from './types';

export const landingContent: LandingContent = {
  brandName: 'CRMP',
  navLinks: [
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#features' },
    { label: 'Roles', href: '#roles' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Structured Academic Research Operations',
    title: 'A trusted digital workflow for institutional research management',
    subtitle:
      'Centralize proposal submission, supervision, collaboration, evaluation, and funding oversight in one clear and accountable system.',
    primaryActionLabel: 'Get Started',
    primaryActionHref: '#contact',
    secondaryActionLabel: 'Explore the Workflow',
    secondaryActionHref: '#features',
  },
  stats: [
    {
      value: '98%',
      description: 'Reduction in proposal processing time through workflow automation',
    },
    {
      value: '15+',
      description: 'Academic departments aligned in one institutional repository',
    },
    {
      value: 'AI-Assisted',
      description: 'Collaborator discovery integrated into research planning',
    },
  ],
  featuresHeader: {
    title: 'Core Research Workflow Pillars',
    subtitle:
      'Designed for academic governance, traceability, and interdisciplinary collaboration.',
  },
  features: [
    {
      icon: 'Workflow',
      title: 'Automated Routing',
      description: 'Smart sequential workflow for departmental and institutional approval stages.',
    },
    {
      icon: 'UsersRound',
      title: 'Smart Matching',
      description: 'Graph-based recommendations for interdisciplinary research teams and advisors.',
    },
    {
      icon: 'WalletCards',
      title: 'Budget Oversight',
      description:
        'Tiered financial tracking and monitoring for grants, milestones, and fund releases.',
    },
    {
      icon: 'FolderArchive',
      title: 'Unified Archive',
      description:
        'Version-controlled document repository that preserves institutional research knowledge.',
    },
  ],
  rolesHeader: {
    title: 'Designed for Every Academic Role',
    subtitle:
      'A clear and role-aware interface for research execution, evaluation, and administration.',
  },
  roles: [
    {
      title: 'Researcher / Principal Investigator',
      subtitle: 'Plan, submit, and execute research with end-to-end visibility.',
      bullets: [
        'Submit research proposals and track milestone approvals',
        'Discover collaborators across departments using AI',
        'Request and monitor budget allocations',
        'Publish and validate research outputs',
      ],
    },
    {
      title: 'Supervisor / Examiner',
      subtitle: 'Provide structured guidance and complete transparent evaluations.',
      bullets: [
        'Review proposals with structured feedback forms',
        'Track research progress against milestones',
        'Score and finalize evaluations online',
        'Advise undergraduate and postgraduate researchers',
      ],
    },
    {
      title: 'Administrator',
      subtitle: 'Coordinate governance, compliance, and institutional oversight.',
      bullets: [
        'Manage approval chains and assigned evaluators',
        'Oversee budgets and scheduled fund releases',
        'Monitor all active research from a central dashboard',
        'Ensure ethical compliance and policy adherence',
      ],
    },
  ],
  cta: {
    title: 'Bring structure to your research lifecycle',
    subtitle:
      'Adopt a calm, accountable platform that supports academic excellence from proposal to publication.',
    actionLabel: 'Start Onboarding',
    actionHref: '#contact',
  },
  footerLinks: [
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#features' },
    { label: 'Roles', href: '#roles' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
  footer: {
    statement:
      'Built for universities seeking reliable and policy-aligned research management workflows.',
    copyright: '© 2026 Research Management Platform. All rights reserved.',
  },
  a11y: {
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    primaryNavigation: 'Primary navigation',
  },
};
