'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useApp } from '@/contexts/AppContext';
import { getProjectById, getUserById, getProposalAuditTrail, mockAuditTrail } from '@/lib/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { AuditTrail } from '@/components/AuditTrail';
import { AdvisorAssignmentDialog } from '@/components/shared/AdvisorAssignmentDialog';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, User, FileText } from 'lucide-react';
import Link from 'next/link';

export default function ProposalDetailPage() {
  const params = useParams();
  const proposalId = params.id as string;
  const { updateProject, addNotification } = useApp();
  const [assignDialogOpen, setAssignDialogOpen] = useState(false);
  const [decisionDialogOpen, setDecisionDialogOpen] = useState<'approve' | 'reject' | 'revision' | null>(null);
  const [notes, setNotes] = useState('');

  const project = getProjectById(proposalId);
  const researcher = project ? getUserById(project.researcherId) : null;
  const advisor = project && project.advisorId ? getUserById(project.advisorId) : null;
  const auditEntries = project ? getProposalAuditTrail(project.id) : [];

  if (!project || !researcher) {
    return (
      <div className="space-y-6">
        <Link href="/coordinator/projects">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Proposals
          </Button>
        </Link>
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">Proposal not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleApprove = () => {
    updateProject(project.id, { status: 'approved', approvalDate: new Date().toISOString() });
    
    mockAuditTrail.push({
      id: `audit-${Date.now()}`,
      proposalId: project.id,
      action: 'approved',
      performedBy: 'user-1',
      timestamp: new Date().toISOString(),
      notes: notes || 'Proposal approved',
    });

    addNotification({
      userId: researcher.id,
      title: 'Proposal Approved',
      message: `Your proposal "${project.title}" has been approved!`,
      type: 'success',
      read: false,
      projectId: project.id,
    });

    setDecisionDialogOpen(null);
    setNotes('');
  };

  const handleReject = () => {
    updateProject(project.id, { status: 'rejected' });
    
    mockAuditTrail.push({
      id: `audit-${Date.now()}`,
      proposalId: project.id,
      action: 'rejected',
      performedBy: 'user-1',
      timestamp: new Date().toISOString(),
      notes: notes || 'Proposal rejected',
    });

    addNotification({
      userId: researcher.id,
      title: 'Proposal Rejected',
      message: `Your proposal "${project.title}" has been rejected. ${notes ? `Reason: ${notes}` : ''}`,
      type: 'error',
      read: false,
      projectId: project.id,
    });

    setDecisionDialogOpen(null);
    setNotes('');
  };

  const handleRevision = () => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 14);

    updateProject(project.id, { 
      status: 'needs_revision',
      revisionDeadline: deadline.toISOString(),
    });

    mockAuditTrail.push({
      id: `audit-${Date.now()}`,
      proposalId: project.id,
      action: 'revision_requested',
      performedBy: 'user-1',
      timestamp: new Date().toISOString(),
      notes: notes || 'Revisions requested',
    });

    addNotification({
      userId: researcher.id,
      title: 'Revisions Requested',
      message: `Your proposal "${project.title}" needs revisions. Please resubmit by ${deadline.toLocaleDateString()}. ${notes ? `Comments: ${notes}` : ''}`,
      type: 'warning',
      read: false,
      projectId: project.id,
    });

    setDecisionDialogOpen(null);
    setNotes('');
  };

  const handleAdvisorAssign = (advisorId: string, deadline?: string) => {
    updateProject(project.id, { advisorId });

    const assignedAdvisor = getUserById(advisorId);
    
    mockAuditTrail.push({
      id: `audit-${Date.now()}`,
      proposalId: project.id,
      action: 'advisor_assigned',
      performedBy: 'user-1',
      timestamp: new Date().toISOString(),
      notes: `Assigned to ${assignedAdvisor?.name}`,
    });

    addNotification({
      userId: advisorId,
      title: 'New Proposal Assignment',
      message: `You have been assigned as advisor for proposal "${project.title}" by ${researcher.name}`,
      type: 'info',
      read: false,
      projectId: project.id,
    });

    setAssignDialogOpen(false);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/coordinator/projects">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{project.title}</h1>
            <p className="text-muted-foreground mt-1">{project.description}</p>
          </div>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Proposal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Proposal Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Proposal ID</p>
                  <p className="font-medium text-foreground">{project.id}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Submission Date</p>
                  <p className="font-medium text-foreground">
                    {new Date(project.submissionDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Created</p>
                  <p className="font-medium text-foreground">
                    {new Date(project.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Updated</p>
                  <p className="font-medium text-foreground">
                    {new Date(project.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {project.approvalDate && (
                <div className="p-4 bg-green-50/50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Approved on {new Date(project.approvalDate).toLocaleDateString()}
                  </p>
                </div>
              )}

              {project.revisionDeadline && project.status === 'needs_revision' && (
                <div className="p-4 bg-yellow-50/50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Revision deadline: {new Date(project.revisionDeadline).toLocaleDateString()}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Document */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Proposal Document
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">Proposal document viewer</p>
                <Button variant="outline" disabled>View Document</Button>
              </div>
            </CardContent>
          </Card>

          {/* Activity Timeline */}
          <AuditTrail entries={auditEntries} />
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Researcher Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <User className="w-5 h-5" />
                Researcher
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium text-foreground">{researcher.name}</p>
                <p className="text-sm text-muted-foreground">{researcher.email}</p>
                {researcher.department && (
                  <Badge variant="secondary" className="mt-2">
                    {researcher.department}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Advisor Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <User className="w-5 h-5" />
                Advisor
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {advisor ? (
                <div>
                  <p className="font-medium text-foreground">{advisor.name}</p>
                  <p className="text-sm text-muted-foreground">{advisor.email}</p>
                  {advisor.department && (
                    <Badge variant="secondary" className="mt-2">
                      {advisor.department}
                    </Badge>
                  )}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No advisor assigned</p>
              )}
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => setAssignDialogOpen(true)}
              >
                {advisor ? 'Change Advisor' : 'Assign Advisor'}
              </Button>
            </CardContent>
          </Card>

          {/* Decision Actions */}
          {project.status === 'submitted' && (
            <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
              <CardHeader>
                <CardTitle className="text-base">Review Actions</CardTitle>
                <CardDescription>Make a decision on this proposal</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  className="w-full gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setDecisionDialogOpen('approve')}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Approve
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  onClick={() => setDecisionDialogOpen('revision')}
                >
                  <AlertCircle className="w-4 h-4" />
                  Request Revisions
                </Button>
                <Button 
                  variant="destructive" 
                  className="w-full gap-2"
                  onClick={() => setDecisionDialogOpen('reject')}
                >
                  <XCircle className="w-4 h-4" />
                  Reject
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Decision Dialogs */}
      {decisionDialogOpen && (
        <Dialog open={!!decisionDialogOpen} onOpenChange={() => setDecisionDialogOpen(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {decisionDialogOpen === 'approve' && 'Approve Proposal'}
                {decisionDialogOpen === 'reject' && 'Reject Proposal'}
                {decisionDialogOpen === 'revision' && 'Request Revisions'}
              </DialogTitle>
              <DialogDescription>
                {decisionDialogOpen === 'approve' && 'Add optional notes about the approval'}
                {decisionDialogOpen === 'reject' && 'Provide a reason for rejection'}
                {decisionDialogOpen === 'revision' && 'Specify what revisions are needed'}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label htmlFor="decision-notes">Notes</Label>
                <Textarea 
                  id="decision-notes"
                  placeholder={
                    decisionDialogOpen === 'approve' ? 'Optional: Add any comments...' :
                    decisionDialogOpen === 'reject' ? 'Please explain why this proposal is being rejected...' :
                    'Please specify what revisions are needed...'
                  }
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setDecisionDialogOpen(null)}>
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  if (decisionDialogOpen === 'approve') handleApprove();
                  if (decisionDialogOpen === 'reject') handleReject();
                  if (decisionDialogOpen === 'revision') handleRevision();
                }}
                className={decisionDialogOpen === 'reject' ? 'bg-red-600 hover:bg-red-700' : ''}
              >
                {decisionDialogOpen === 'approve' && 'Approve'}
                {decisionDialogOpen === 'reject' && 'Reject'}
                {decisionDialogOpen === 'revision' && 'Request Revisions'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Advisor Assignment Dialog */}
      <AdvisorAssignmentDialog
        open={assignDialogOpen}
        onOpenChange={setAssignDialogOpen}
        onAssign={handleAdvisorAssign}
        currentAdvisorId={project.advisorId}
      />
    </div>
  );
}
