import { AuditTrailEntry, getUserById } from '@/lib/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, AlertCircle, UserCheck } from 'lucide-react';

const actionIcons = {
  submitted: <CheckCircle2 className="w-5 h-5 text-blue-500" />,
  approved: <CheckCircle2 className="w-5 h-5 text-green-500" />,
  rejected: <XCircle className="w-5 h-5 text-red-500" />,
  revision_requested: <AlertCircle className="w-5 h-5 text-yellow-500" />,
  advisor_assigned: <UserCheck className="w-5 h-5 text-purple-500" />,
};

const actionLabels = {
  submitted: 'Submitted',
  approved: 'Approved',
  rejected: 'Rejected',
  revision_requested: 'Revision Requested',
  advisor_assigned: 'Advisor Assigned',
};

export function AuditTrail({ entries }: { entries: AuditTrailEntry[] }) {
  if (entries.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Activity History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">No activity recorded yet</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity History</CardTitle>
        <CardDescription>{entries.length} action(s) recorded</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {entries.map((entry, index) => {
            const performer = getUserById(entry.performedBy);
            const actionDate = new Date(entry.timestamp);
            
            return (
              <div key={entry.id} className="flex gap-4">
                {/* Timeline line */}
                {index !== entries.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-12 bg-border" />
                )}
                
                {/* Icon */}
                <div className="mt-1 relative">
                  {actionIcons[entry.action]}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-foreground">
                      {actionLabels[entry.action]}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    by {performer?.name || 'Unknown'}
                  </p>
                  {entry.notes && (
                    <p className="text-sm text-foreground mt-1">{entry.notes}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    {actionDate.toLocaleDateString()} at {actionDate.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
