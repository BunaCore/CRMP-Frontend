# API Integration Guide

Use this guide when implementing features that fetch data from the backend.

## Quick Start

### 1. Define Response Type

Create TypeScript types for backend responses. No Zod validation needed - backend is trusted.

```typescript
// lib/api/student/types.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  advisor: {
    id: string;
    fullName: string;
    email: string;
  };
  createdAt: string;
}

export interface ProjectListResponse {
  projects: Project[];
  total: number;
}
```

### 2. Create Query Hook

Use TanStack React Query to fetch data.

```typescript
// lib/api/student/queries.ts
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api/client';
import { ProjectListResponse } from './types';

export function useProjectList() {
  return useQuery({
    queryKey: ['student', 'projects'],
    queryFn: async (): Promise<ProjectListResponse> => {
      const response = await apiClient.get('/student/projects');
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
```

### 3. Create Mutation Hook (if needed)

For POST/PUT/DELETE operations.

```typescript
// lib/api/student/mutations.ts
import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@/lib/api/client';

export interface CreateProjectInput {
  title: string;
  description: string;
}

export function useCreateProject() {
  return useMutation({
    mutationFn: async (data: CreateProjectInput) => {
      const response = await apiClient.post('/student/projects', data);
      return response.data;
    },
    onError: (error) => {
      handleApiError(error); // Centralized error handling
    },
  });
}
```

### 4. Use in Component

```typescript
// components/StudentProjects.tsx
'use client';

import { useProjectList, useCreateProject } from '@/lib/api/student/queries';

export function StudentProjects() {
  const { data, isLoading, error } = useProjectList();
  const { mutate: createProject, isPending } = useCreateProject();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.projects.map((project) => (
        <div key={project.id}>{project.title}</div>
      ))}
      <button
        onClick={() => createProject({ title: 'New', description: 'Desc' })}
        disabled={isPending}
      >
        Create
      </button>
    </div>
  );
}
```

## File Organization

### Feature: Student Projects

```
lib/api/
├── student/
│   ├── types.ts          # Response types & request DTOs
│   ├── queries.ts        # Read operations (GET)
│   ├── mutations.ts      # Write operations (POST/PUT/DELETE)
│   └── index.ts          # Export all (optional)
```

### Feature: Admin Users

```
lib/api/
├── admin/
│   ├── users/
│   │   ├── types.ts
│   │   ├── queries.ts
│   │   └── mutations.ts
│   └── departments/
│       ├── types.ts
│       ├── queries.ts
│       └── mutations.ts
```

## API Client Setup

Token is automatically added to all requests:

```typescript
// lib/api/client.ts (already configured)
apiClient.interceptors.request.use((config) => {
  const { access_token } = useAuthStore.getState();
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});
```

### Base URL

Set in `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

All requests automatically use this base URL.

## Query Configuration

### Common Options

```typescript
useQuery({
  queryKey: ['feature', 'action'], // Unique cache key
  queryFn: () => apiClient.get('/endpoint'), // Fetch function
  staleTime: 5 * 60 * 1000, // Cache duration
  retry: 1, // Retry on error
  enabled: !!userId, // Conditional fetch
});
```

### Key Best Practices

- **queryKey:** Keep it descriptive for debugging
- **staleTime:** Set based on data freshness needs
- **retry:** Use 1 or 2 for GET, 0 for POST (be idempotent)
- **enabled:** Gate queries that depend on user state

## Mutation Configuration

### Common Patterns

```typescript
// Simple mutation
useMutation({
  mutationFn: (data) => apiClient.post('/endpoint', data),
  onSuccess: () => {
    // Invalidate related queries
    queryClient.invalidateQueries({ queryKey: ['list'] });
  },
  onError: handleApiError,
});
```

```typescript
// With optimistic updates
useMutation({
  mutationFn: (data) => apiClient.put('/item/1', data),
  onMutate: async (newData) => {
    await queryClient.cancelQueries({ queryKey: ['item', '1'] });
    const prev = queryClient.getQueryData(['item', '1']);
    queryClient.setQueryData(['item', '1'], newData);
    return { prev };
  },
  onError: (_err, _newData, context) => {
    if (context?.prev) {
      queryClient.setQueryData(['item', '1'], context.prev);
    }
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['item', '1'] });
  },
});
```

## Error Handling

### Centralized Error Handler

```typescript
// lib/api/errors.ts (already exists)
export function handleApiError(error: unknown): void {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message || 'Request failed';
    console.error(`API Error: ${message}`);
    // Show toast, log to monitoring, etc.
  }
}
```

### In Components

```typescript
const { error } = useQuery({...});
const { mutate, error: mutationError } = useMutation({...});

if (error) {
  return <div>Error: {error.message}</div>;
}

if (mutationError) {
  return <div>Failed to save: {mutationError.message}</div>;
}
```

## Form + Mutation Integration

Common pattern for submitting forms:

```typescript
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createProjectSchema } from '@/lib/schemas';
import { useCreateProject } from '@/lib/api/student/mutations';

export function CreateProjectForm() {
  const form = useForm({
    resolver: zodResolver(createProjectSchema),
  });

  const { mutate: createProject, isPending } = useCreateProject();

  function onSubmit(data) {
    createProject(data, {
      onSuccess: () => {
        form.reset(); // Clear form
        // Toast: "Project created!"
      },
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields */}
      <button disabled={isPending}>
        {isPending ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
}
```

## Testing API Integration

### Mock Data for Development

```typescript
// lib/mockData/student.ts
export const MOCK_PROJECTS = [
  {
    id: '1',
    title: 'AI Research',
    description: 'Machine learning...',
    status: 'approved' as const,
  },
];
```

### E2E Testing

When implementing, consider:

- Does the query update when data changes?
- Does the mutation handle errors gracefully?
- Is loading state shown to user?
- Does success redirect/toast appear?

## Debugging API Calls

### Check Network Tab

1. Open DevTools → Network
2. Filter by XHR/Fetch
3. Look for:
   - Status code (200 = success, 4xx = client error, 5xx = server error)
   - Authorization header present
   - Response body matches type definitions

### Check React Query DevTools

```typescript
// Already setup in contexts/QueryProvider.tsx
// Open: DevTools tab in React DevTools when local dev running
// Shows: All queries, cache states, timings
```

### Log Queries

```typescript
const { data, status } = useQuery({
  queryKey: ['projects'],
  queryFn: () => apiClient.get('/projects'),
  select: (data) => {
    console.log('Query successful:', data);
    return data;
  },
});
```

## Performance Tips

### 1. Use queryKey arrays for dependency tracking

```typescript
// Bad
{
  queryKey: ['user-' + userId];
}

// Good
{
  queryKey: ['user', userId];
}
```

### 2. Set appropriate staleTime

```typescript
// Static data (rarely changes)
staleTime: 10 * 60 * 1000,

// Dynamic data (updates frequently)
staleTime: 1 * 60 * 1000,

// Real-time data
staleTime: 0,
```

### 3. Invalidate only what's needed

```typescript
// Bad: Invalidates everything
queryClient.clear();

// Good: Invalidates specific queries
queryClient.invalidateQueries({
  queryKey: ['projects'],
});
```

## Checklist for New Feature

- [ ] Created TypeScript types in `lib/api/feature/types.ts`
- [ ] Created query hook in `lib/api/feature/queries.ts`
- [ ] Created mutation hook in `lib/api/feature/mutations.ts` (if needed)
- [ ] Used hooks in component with proper loading/error states
- [ ] Tested Network tab - Authorization header present
- [ ] Tested React Query DevTools - state correct
- [ ] Handled async cases (loading, error, empty)
- [ ] Set reasonable staleTime based on data
- [ ] Added error UI for failures
- [ ] Lint passes: `npm run lint`

## Questions?

- **Types not aligning?** Check backend response in Network tab
- **Mutations not triggering?** Check if data changed depends on queryKey
- **Performance slow?** Check DevTools for excessive refetching
- **Token missing?** Verify `.env.local` and restart dev server

See `docs/AUTHENTICATION.md` for auth-specific API details.
