export type UserRole = 'coordinator' | 'researcher' | 'examiner' | 'advisor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  avatar?: string;
}

export type ProposalStatus = 'submitted' | 'approved' | 'rejected' | 'needs_revision';

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProposalStatus;
  researcherId: string;
  advisorId?: string;
  submissionDate: string;
  approvalDate?: string;
  revisionDeadline?: string;
  documentUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuditTrailEntry {
  id: string;
  proposalId: string;
  action: 'submitted' | 'approved' | 'rejected' | 'revision_requested' | 'advisor_assigned';
  performedBy: string;
  timestamp: string;
  notes?: string;
}



export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'email-sent';
  read: boolean;
  createdAt: string;
  projectId?: string;
}

export interface Feedback {
  id: string;
  projectId: string;
  examinerId: string;
  score: number;
  comments: string;
  submittedAt: string;
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    role: 'coordinator',
    department: 'Academic Affairs',
  },
  {
    id: 'user-2',
    name: 'James Chen',
    email: 'j.chen@university.edu',
    role: 'researcher',
    department: 'Computer Science',
  },
  {
    id: 'user-3',
    name: 'Emily Rodriguez',
    email: 'e.rodriguez@university.edu',
    role: 'researcher',
    department: 'Physics',
  },
  {
    id: 'user-4',
    name: 'Prof. Michael Adams',
    email: 'm.adams@university.edu',
    role: 'examiner',
    department: 'Computer Science',
  },
  {
    id: 'user-5',
    name: 'Dr. Lisa Wang',
    email: 'l.wang@university.edu',
    role: 'examiner',
    department: 'Physics',
  },
  {
    id: 'user-6',
    name: 'Prof. David Brown',
    email: 'd.brown@university.edu',
    role: 'advisor',
    department: 'Computer Science',
  },
  {
    id: 'user-7',
    name: 'Dr. Patricia Miller',
    email: 'p.miller@university.edu',
    role: 'advisor',
    department: 'Physics',
  },
];

// Mock Projects (Undergraduate Proposals)
export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Machine Learning Optimization Techniques',
    description: 'A comprehensive study of modern optimization algorithms in deep learning.',
    status: 'submitted',
    researcherId: 'user-2',
    advisorId: 'user-6',
    submissionDate: '2024-02-15',
    createdAt: '2024-01-10',
    updatedAt: '2024-03-05',
  },
  {
    id: 'proj-2',
    title: 'Quantum Computing Applications',
    description: 'Exploring practical applications of quantum computing in cryptography.',
    status: 'needs_revision',
    researcherId: 'user-3',
    advisorId: 'user-7',
    submissionDate: '2024-03-01',
    revisionDeadline: '2024-03-20',
    createdAt: '2024-02-01',
    updatedAt: '2024-03-08',
  },
  {
    id: 'proj-3',
    title: 'Data Privacy in Cloud Computing',
    description: 'Methods for ensuring data privacy in distributed cloud environments.',
    status: 'approved',
    researcherId: 'user-2',
    advisorId: 'user-6',
    submissionDate: '2024-01-20',
    approvalDate: '2024-02-25',
    createdAt: '2024-01-05',
    updatedAt: '2024-02-25',
  },
  {
    id: 'proj-4',
    title: 'Neural Network Architecture Design',
    description: 'Novel approaches to designing efficient neural network architectures.',
    status: 'submitted',
    researcherId: 'user-3',
    advisorId: 'user-7',
    submissionDate: '2024-03-05',
    createdAt: '2024-03-01',
    updatedAt: '2024-03-05',
  },
  {
    id: 'proj-5',
    title: 'Renewable Energy Storage Systems',
    description: 'Investigating novel battery technologies for sustainable energy storage.',
    status: 'rejected',
    researcherId: 'user-3',
    submissionDate: '2024-02-10',
    createdAt: '2024-01-20',
    updatedAt: '2024-03-02',
  },
];

// Mock Audit Trail
export const mockAuditTrail: AuditTrailEntry[] = [
  {
    id: 'audit-1',
    proposalId: 'proj-1',
    action: 'submitted',
    performedBy: 'user-2',
    timestamp: '2024-02-15T10:30:00Z',
    notes: 'Initial proposal submission',
  },
  {
    id: 'audit-2',
    proposalId: 'proj-1',
    action: 'advisor_assigned',
    performedBy: 'user-1',
    timestamp: '2024-02-16T09:00:00Z',
    notes: 'Assigned to Prof. David Brown',
  },
  {
    id: 'audit-3',
    proposalId: 'proj-3',
    action: 'approved',
    performedBy: 'user-1',
    timestamp: '2024-02-25T14:30:00Z',
    notes: 'Proposal approved by coordinator',
  },
  {
    id: 'audit-4',
    proposalId: 'proj-2',
    action: 'revision_requested',
    performedBy: 'user-1',
    timestamp: '2024-03-08T11:15:00Z',
    notes: 'Revisions needed: Strengthen methodology section',
  },
  {
    id: 'audit-5',
    proposalId: 'proj-5',
    action: 'rejected',
    performedBy: 'user-1',
    timestamp: '2024-03-02T16:00:00Z',
    notes: 'Proposal rejected: Out of scope for current cycle',
  },
];

// Mock Feedbacks
export const mockFeedbacks: Feedback[] = [
  {
    id: 'fb-1',
    projectId: 'proj-3',
    examinerId: 'user-4',
    score: 92,
    comments: 'Excellent work on the cloud privacy framework. Well-researched and innovative.',
    submittedAt: '2024-02-25',
  },
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    userId: 'user-4',
    title: 'New Project Submission',
    message: 'Project "Machine Learning Optimization Techniques" requires your review',
    type: 'info',
    read: false,
    createdAt: '2024-03-05T10:30:00Z',
    projectId: 'proj-1',
  },
  {
    id: 'notif-2',
    userId: 'user-2',
    title: 'Project Status Updated',
    message: 'Your project "Data Privacy in Cloud Computing" has been approved',
    type: 'success',
    read: true,
    createdAt: '2024-02-25T14:00:00Z',
    projectId: 'proj-3',
  },
  {
    id: 'notif-3',
    userId: 'user-1',
    title: 'Email Notification Sent',
    message: 'Notification email sent to examiner regarding project submission',
    type: 'email-sent',
    read: true,
    createdAt: '2024-03-05T10:35:00Z',
    projectId: 'proj-1',
  },
];

// Helper functions
export const getUserById = (id: string): User | undefined => {
  return mockUsers.find(user => user.id === id);
};

export const getProjectById = (id: string): Project | undefined => {
  return mockProjects.find(project => project.id === id);
};

export const getProjectsByUserId = (userId: string, role: UserRole): Project[] => {
  if (role === 'researcher') {
    return mockProjects.filter(p => p.researcherId === userId);
  }
  if (role === 'examiner') {
    return mockProjects.filter(p => p.examinerIds.includes(userId));
  }
  if (role === 'advisor') {
    return mockProjects.filter(p => p.advisorIds.includes(userId));
  }
  return mockProjects; // coordinator sees all
};

export const getProposalAuditTrail = (proposalId: string): AuditTrailEntry[] => {
  return mockAuditTrail.filter(entry => entry.proposalId === proposalId).sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
};

export const getSubmittedProposals = (): Project[] => {
  return mockProjects.filter(p => p.status === 'submitted');
};

export const getNeedsRevisionProposals = (): Project[] => {
  return mockProjects.filter(p => p.status === 'needs_revision');
};

export const getUserNotifications = (userId: string): Notification[] => {
  return mockNotifications.filter(n => n.userId === userId);
};
