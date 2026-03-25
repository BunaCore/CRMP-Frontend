'use client';

import { useAuthStore } from '@/store/auth/authStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AdminDashboard() {
  const { user } = useAuthStore();

  const getRoleTitle = () => {
    if (user?.roles.includes('ADMIN')) return 'Administrator';
    if (user?.roles.includes('EVALUATOR')) return 'Evaluator';
    if (user?.roles.includes('PI')) return 'Principal Investigator';
    if (user?.roles.includes('SUPERVISOR')) return 'Supervisor';
    return 'User';
  };

  return (
    <div className="p-8 space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user?.fullName}!</h1>
        <p className="text-muted-foreground mt-2">
          You&apos;re logged in as <span className="font-medium">{getRoleTitle()}</span>
        </p>
      </div>

      {/* User Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>Your profile and permissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <p className="font-medium capitalize">{user?.accountStatus || 'Active'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">University</p>
              <p className="font-medium">{user?.university || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Department</p>
              <p className="font-medium">{user?.department || 'Not specified'}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Roles & Permissions</p>
            <div className="flex gap-2 flex-wrap">
              {user?.roles.map((role) => (
                <Badge key={role} variant="default">
                  {role}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dashboard Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your workspace overview</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            {user?.roles.includes('ADMIN') && (
              <>
                <p className="flex items-center gap-2">
                  <span className="text-lg">⚙️</span> System administration tools available
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-lg">👥</span> User management console active
                </p>
              </>
            )}
            {user?.roles.includes('SUPERVISOR') && (
              <>
                <p className="flex items-center gap-2">
                  <span className="text-lg">👨‍🎓</span> Manage assigned students
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-lg">📝</span> Review proposals and submissions
                </p>
              </>
            )}
            {user?.roles.includes('EVALUATOR') && (
              <>
                <p className="flex items-center gap-2">
                  <span className="text-lg">📋</span> Evaluation rubrics available
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-lg">⭐</span> Grade assigned projects
                </p>
              </>
            )}
            {user?.roles.includes('PI') && (
              <>
                <p className="flex items-center gap-2">
                  <span className="text-lg">🔬</span> Research portfolio access
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-lg">📊</span> Analytics dashboard
                </p>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
