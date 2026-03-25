import { Notification } from './mockData';

export function formatNotificationTime(createdAt: string): string {
  const date = new Date(createdAt);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;

  return date.toLocaleDateString();
}

export function getNotificationTypeLabel(type: Notification['type']): string {
  const labels: Record<Notification['type'], string> = {
    info: 'Information',
    success: 'Success',
    warning: 'Warning',
    error: 'Error',
    'email-sent': 'Email Sent',
  };
  return labels[type];
}

export function sendEmailNotification(
  recipientEmail: string,
  subject: string,
  message: string
): void {

  console.log(`[Email] To: ${recipientEmail}`);
  console.log(`[Email] Subject: ${subject}`);
  console.log(`[Email] Body: ${message}`);
}
