export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  department: string | null;
  phoneNumber: string | null;
  university: string | null;
  universityId: string | null;
  isExternal: boolean;
  accountStatus: string;
  createdAt: string;
  roles: string[];
  role: string;
}

export interface LoginResponse {
  access_token: string;
  user: AuthUser;
}

export interface SignUpResponse {
  access_token: string;
  user: AuthUser;
}

export interface ApiErrorType {
  message: string;
  code?: string;
  errors?: Record<string, string[]>;
}
