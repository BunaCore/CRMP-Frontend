import Link from 'next/link';

import { landingContent } from './constants';

export function LandingFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl border-x border-border px-6 py-10 lg:px-8">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-sm font-medium text-foreground">{landingContent.brandName}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {landingContent.footer.statement}
            </p>
          </div>

          <nav className="md:col-span-5 md:justify-self-end" aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:grid-cols-3">
              {landingContent.footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
          {landingContent.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
