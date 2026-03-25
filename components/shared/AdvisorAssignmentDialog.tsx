'use client';

import { useState } from 'react';
import { mockUsers, User } from '@/lib/mockData';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const advisors = mockUsers.filter(u => u.role === 'advisor');

interface AdvisorAssignmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAssign: (advisorId: string, deadline?: string) => void;
  currentAdvisorId?: string;
}

export function AdvisorAssignmentDialog({
  open,
  onOpenChange,
  onAssign,
  currentAdvisorId,
}: AdvisorAssignmentDialogProps) {
  const [selectedAdvisorId, setSelectedAdvisorId] = useState<string>(currentAdvisorId || '');
  const [deadline, setDeadline] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAdvisors = advisors.filter(
    a => a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         a.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAssign = () => {
    if (selectedAdvisorId) {
      onAssign(selectedAdvisorId, deadline || undefined);
      setSelectedAdvisorId('');
      setDeadline('');
      setSearchTerm('');
      onOpenChange(false);
    }
  };

  const selectedAdvisor = advisors.find(a => a.id === selectedAdvisorId);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Assign Advisor</DialogTitle>
          <DialogDescription>
            Select an advisor and optionally set a revision deadline
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Search */}
          <div className="space-y-2">
            <Label htmlFor="advisor-search">Search Advisors</Label>
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                id="advisor-search"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Advisors List */}
          <div className="space-y-2">
            <Label>Available Advisors</Label>
            <div className="border border-border rounded-lg p-4 space-y-2 max-h-64 overflow-y-auto">
              {filteredAdvisors.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No advisors found
                </p>
              ) : (
                filteredAdvisors.map((advisor) => (
                  <div
                    key={advisor.id}
                    onClick={() => setSelectedAdvisorId(advisor.id)}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedAdvisorId === advisor.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{advisor.name}</p>
                        <p className="text-sm text-muted-foreground">{advisor.email}</p>
                        {advisor.department && (
                          <Badge variant="secondary" className="mt-2">
                            {advisor.department}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Revision Deadline */}
          <div className="space-y-2">
            <Label htmlFor="deadline">Revision Deadline (Optional)</Label>
            <Input
              id="deadline"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Set a deadline for advisor feedback
            </p>
          </div>

          {/* Selected Advisor Summary */}
          {selectedAdvisor && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Assigning to:</p>
              <p className="font-medium text-foreground">{selectedAdvisor.name}</p>
              {deadline && (
                <p className="text-sm text-muted-foreground mt-2">
                  Deadline: {new Date(deadline).toLocaleDateString()}
                </p>
              )}
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleAssign} disabled={!selectedAdvisorId}>
            Assign Advisor
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
