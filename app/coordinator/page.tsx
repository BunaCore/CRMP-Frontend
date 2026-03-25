"use client";

import { useApp } from "@/contexts/AppContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plus,
  AlertCircle,
  Users,
  FileText,
  CheckCircle2,
  Clock,
  Eye,
} from "lucide-react";
import Link from "next/link";
import {
  getSubmittedProposals,
  getNeedsRevisionProposals,
} from "@/lib/mockData";
import { StatusBadge } from "@/components/shared/StatusBadge";

export default function CoordinatorDashboard() {
  const { projects } = useApp();

  // Calculate statistics
  const stats = {
    totalProposals: projects.length,
    approved: projects.filter((p) => p.status === "approved").length,
    submitted: projects.filter((p) => p.status === "submitted").length,
    needsRevision: projects.filter((p) => p.status === "needs_revision").length,
    rejected: projects.filter((p) => p.status === "rejected").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">
            Undergraduate Proposals
          </h2>
          <p className="text-muted-foreground mt-1">
            Review and manage student research proposals
          </p>
        </div>
        <Link href="/coordinator/projects">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            View All Proposals
          </Button>
        </Link>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Proposals
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProposals}</div>
            <p className="text-xs text-muted-foreground mt-1">in system</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Submitted</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {stats.submitted}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              awaiting review
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Needs Revision
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {stats.needsRevision}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              pending student revisions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {stats.approved}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.totalProposals > 0
                ? ((stats.approved / stats.totalProposals) * 100).toFixed(0)
                : 0}
              % approval rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Submissions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Submissions</CardTitle>
          <CardDescription>Latest proposals requiring action</CardDescription>
        </CardHeader>
        <CardContent>
          {getSubmittedProposals().length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">
              No submitted proposals
            </p>
          ) : (
            <div className="space-y-3">
              {getSubmittedProposals()
                .slice(0, 5)
                .map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Submitted{" "}
                        {new Date(project.submissionDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <StatusBadge status={project.status} />
                      <Link href={`/coordinator/projects/${project.id}`}>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Eye className="w-4 h-4" />
                          Review
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Needs Revision */}
      {stats.needsRevision > 0 && (
        <Card className="border-yellow-200 dark:border-yellow-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              Proposals Awaiting Student Revisions
            </CardTitle>
            <CardDescription>
              Students have been asked to revise their proposals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {getNeedsRevisionProposals().map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-4 border border-yellow-200 dark:border-yellow-800 rounded-lg bg-yellow-50/50 dark:bg-yellow-950/20 hover:bg-yellow-100/50 dark:hover:bg-yellow-950/40 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">
                      {project.title}
                    </h3>
                    {project.revisionDeadline && (
                      <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                        Revision deadline:{" "}
                        {new Date(
                          project.revisionDeadline,
                        ).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusBadge status={project.status} />
                    <Link href={`/coordinator/projects/${project.id}`}>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common coordinator tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/coordinator/projects">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                View All Proposals
              </Button>
            </Link>
            <Link href="/coordinator/approvals">
              <Button variant="outline" className="w-full justify-start">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Review Approvals
              </Button>
            </Link>
            <Link href="/coordinator/users">
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Manage Users
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
