'use client';

import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Plus, Search, Eye, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ProposalStatus, getUserById } from '@/lib/mockData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function ProjectsPage() {
  const { projects } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<ProposalStatus | 'all'>('all');

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statuses: (ProposalStatus | 'all')[] = ['all', 'submitted', 'approved', 'rejected', 'needs_revision'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Undergraduate Proposals</h2>
          <p className="text-muted-foreground mt-1">Review and manage student research proposals</p>
        </div>
       
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search proposals by title, ID, or researcher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Status Filter */}
            <div className="flex flex-wrap gap-2">
              {statuses.map(status => (
                <Button
                  key={status}
                  variant={statusFilter === status ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setStatusFilter(status as ProjectStatus | 'all')}
                  className="capitalize"
                >
                  {status === 'all' ? 'All Status' : status.replace('-', ' ')}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Proposals Table */}
<Card className="w-full scale-95">
  <CardHeader>
    <CardTitle>Proposals List</CardTitle>
    <CardDescription>{filteredProjects.length} proposal(s) found</CardDescription>
  </CardHeader>

  <CardContent className="w-full overflow-hidden">
    {filteredProjects.length === 0 ? (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No projects found</p>
      </div>
    ) : (
      <div className="w-full overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Researcher</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Advisor</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredProjects.map((project) => {
              const researcher = getUserById(project.researcherId);
              const advisor = project.advisorId ? getUserById(project.advisorId) : null;

              return (
                <TableRow key={project.id}>
                  <TableCell className="max-w-[250px] truncate">
                    <div>
                      <p className="font-medium text-foreground truncate">{project.title}</p>
                      <p className="text-xs text-muted-foreground">{project.id}</p>
                    </div>
                  </TableCell>

                  <TableCell className="text-sm">
                    {researcher?.name || 'Unknown'}
                  </TableCell>

                  <TableCell>
                    <StatusBadge status={project.status} />
                  </TableCell>

                  <TableCell className="text-sm">
                    {new Date(project.submissionDate).toLocaleDateString()}
                  </TableCell>

                  <TableCell className="text-sm">
                    {advisor ? advisor.name : <span className="text-muted-foreground">—</span>}
                  </TableCell>

                  <TableCell className="text-right">
                    <Link href={`/coordinator/projects/${project.id}`}>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="w-4 h-4" />
                        Review
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    )}
  </CardContent>
</Card>
    </div>
  );
}
