import { CtaSection } from './CtaSection';
import { FeaturesSection } from './FeaturesSection';
import { HeroSection } from './HeroSection';
import { LandingFooter } from './LandingFooter';
import { LandingNavbar } from './LandingNavbar';
import { RolesSection } from './RolesSection';
import { StatsStrip } from './StatsStrip';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingNavbar />
      <HeroSection />
      <StatsStrip />
      <FeaturesSection />
      <RolesSection />
      <CtaSection />
      <LandingFooter />
    </div>
  );
}
