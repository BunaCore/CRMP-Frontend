'use client';

import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Bell, X, Mail, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatNotificationTime } from '@/lib/notifications';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function NotificationCenter() {
  const { currentUser, notifications, markNotificationAsRead } = useApp();
  const [open, setOpen] = useState(false);

  if (!currentUser) return null;

  const userNotifications = notifications.filter(n => n.userId === currentUser.id);
  const unreadCount = userNotifications.filter(n => !n.read).length;

  const handleNotificationClick = (notificationId: string) => {
    markNotificationAsRead(notificationId);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
        >
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-96">
        <div className="p-4 border-b">
          <h3 className="font-semibold text-sm">Notifications</h3>
          {unreadCount > 0 && (
            <p className="text-xs text-muted-foreground">
              {unreadCount} unread
            </p>
          )}
        </div>

        <div className="max-h-96 overflow-y-auto">
          {userNotifications.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-sm text-muted-foreground">
                No notifications yet
              </p>
            </div>
          ) : (
            userNotifications.map((notification) => (
              <button
                key={notification.id}
                onClick={() => handleNotificationClick(notification.id)}
                className={cn(
                  'w-full text-left px-4 py-3 border-b last:border-b-0 hover:bg-muted transition-colors',
                  !notification.read && 'bg-muted/50'
                )}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {notification.type === 'email-sent' && (
                      <Mail className="w-4 h-4 text-blue-500" />
                    )}
                    {notification.type === 'success' && (
                      <div className="w-4 h-4 rounded-full bg-green-500" />
                    )}
                    {notification.type === 'error' && (
                      <AlertCircle className="w-4 h-4 text-destructive" />
                    )}
                    {notification.type === 'warning' && (
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                    )}
                    {notification.type === 'info' && (
                      <div className="w-4 h-4 rounded-full bg-blue-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {notification.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {formatNotificationTime(notification.createdAt)}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                  )}
                </div>
              </button>
            ))
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
