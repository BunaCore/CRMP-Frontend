"use client";

import {
  getUserById,
  getSubmittedProposals,
  getNeedsRevisionProposals,
} from "@/lib/mockData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Eye, Clock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function ApprovalsPage() {
  const submittedProposals = getSubmittedProposals();
  const needsRevisionProposals = getNeedsRevisionProposals();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-foreground">Review Queue</h2>
        <p className="text-muted-foreground mt-1">
          Proposals awaiting coordinator decisions
        </p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Submitted Proposals
            </CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {submittedProposals.length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              awaiting decision
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Awaiting Revisions
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {needsRevisionProposals.length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              pending student revisions
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Submitted Proposals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Submitted Proposals
          </CardTitle>
          <CardDescription>
            Proposals requiring coordinator decision
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submittedProposals.length === 0 ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <p className="text-muted-foreground">
                All submitted proposals have been reviewed!
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Researcher</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Advisor</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submittedProposals.map((proposal) => {
                  const researcher = getUserById(proposal.researcherId);
                  const advisor = proposal.advisorId
                    ? getUserById(proposal.advisorId)
                    : null;

                  return (
                    <TableRow key={proposal.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-foreground">
                            {proposal.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {proposal.id}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">
                        {researcher?.name}
                      </TableCell>
                      <TableCell className="text-sm">
                        {new Date(proposal.submissionDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-sm">
                        {advisor?.name || (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Link href={`/coordinator/projects/${proposal.id}`}>
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
          )}
        </CardContent>
      </Card>

      {/* Proposals Awaiting Revisions */}
      {needsRevisionProposals.length > 0 && (
        <Card className="border-yellow-200 dark:border-yellow-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              Awaiting Student Revisions
            </CardTitle>
            <CardDescription>
              Students have been asked to submit revisions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Researcher</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {needsRevisionProposals.map((proposal) => {
                  const researcher = getUserById(proposal.researcherId);

                  return (
                    <TableRow key={proposal.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-foreground">
                            {proposal.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {proposal.id}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">
                        {researcher?.name}
                      </TableCell>
                      <TableCell className="text-sm">
                        {proposal.revisionDeadline
                          ? new Date(
                              proposal.revisionDeadline,
                            ).toLocaleDateString()
                          : "—"}
                      </TableCell>
                      <TableCell className="text-right">
                        <Link href={`/coordinator/projects/${proposal.id}`}>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Eye className="w-4 h-4" />
                            View
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
