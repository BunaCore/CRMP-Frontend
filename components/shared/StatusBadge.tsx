import { ProposalStatus } from '@/lib/mockData';
import { Badge } from '@/components/ui/badge';

const statusConfig: Record<ProposalStatus, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
  'submitted': { label: 'Submitted', variant: 'secondary' },
  'approved': { label: 'Approved', variant: 'default' },
  'rejected': { label: 'Rejected', variant: 'destructive' },
  'needs_revision': { label: 'Needs Revision', variant: 'outline' },
};

export function StatusBadge({ status }: { status: ProposalStatus }) {
  const config = statusConfig[status];
  
  return (
    <Badge variant={config.variant}>
      {config.label}
    </Badge>
  );
}
