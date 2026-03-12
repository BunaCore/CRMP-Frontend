'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  User,
  Project,
  Notification,
  UserRole,
  mockUsers,
  mockProjects,
  mockNotifications,
  getUserNotifications,
} from '@/lib/mockData';

interface AppContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => void;
  markNotificationAsRead: (notificationId: string) => void;
  clearNotifications: (userId: string) => void;
  updateProject: (projectId: string, updates: Partial<Project>) => void;
  createProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void;
  deleteProject: (projectId: string) => void;
  getUserProjectCount: (userId: string, role: UserRole) => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(mockUsers[0]); // Default to coordinator
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'createdAt'>) => {
    const newNotification: Notification = {
      ...notification,
      id: `notif-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setNotifications(prev => [newNotification, ...prev]);
  }, []);

  const markNotificationAsRead = useCallback((notificationId: string) => {
    setNotifications(prev =>
      prev.map(n =>
        n.id === notificationId ? { ...n, read: true } : n
      )
    );
  }, []);

  const clearNotifications = useCallback((userId: string) => {
    setNotifications(prev => prev.filter(n => n.userId !== userId));
  }, []);

  const updateProject = useCallback((projectId: string, updates: Partial<Project>) => {
    setProjects(prev =>
      prev.map(p =>
        p.id === projectId
          ? { ...p, ...updates, updatedAt: new Date().toISOString() }
          : p
      )
    );
  }, []);

  const createProject = useCallback((project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProject: Project = {
      ...project,
      id: `proj-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setProjects(prev => [newProject, ...prev]);
  }, []);

  const deleteProject = useCallback((projectId: string) => {
    setProjects(prev => prev.filter(p => p.id !== projectId));
  }, []);

  const getUserProjectCount = useCallback((userId: string, role: UserRole) => {
    if (role === 'researcher') {
      return projects.filter(p => p.researcherId === userId).length;
    }
    if (role === 'examiner') {
      return projects.filter(p => p.examinerIds.includes(userId)).length;
    }
    if (role === 'advisor') {
      return projects.filter(p => p.advisorIds.includes(userId)).length;
    }
    return projects.length; // coordinator
  }, [projects]);

  const value: AppContextType = {
    currentUser,
    setCurrentUser,
    projects,
    setProjects,
    notifications,
    addNotification,
    markNotificationAsRead,
    clearNotifications,
    updateProject,
    createProject,
    deleteProject,
    getUserProjectCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
