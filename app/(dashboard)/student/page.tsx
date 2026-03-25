'use client';

import { useAuthStore } from '@/store/auth/authStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function StudentDashboard() {
  const { user } = useAuthStore();

  return (
    <div className="p-8 space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome, {user?.fullName}!</h1>
        <p className="text-muted-foreground mt-2">Here&apos;s your student research dashboard</p>
      </div>

      {/* User Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
          <CardDescription>Account information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">University</p>
              <p className="font-medium">{user?.university || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Department</p>
              <p className="font-medium">{user?.department || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Roles</p>
              <div className="flex gap-2 flex-wrap mt-1">
                {user?.roles.map((role) => (
                  <Badge key={role} variant="secondary">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Get started with your research</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>📋 View your projects</p>
            <p>✍️ Submit new proposal</p>
            <p>💬 Check advisor feedback</p>
            <p>📊 View your grades</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
