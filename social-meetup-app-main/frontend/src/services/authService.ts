import api from './api';

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  city: string;
  languages: string[];
  avatar?: string;
  images?: string[];
  bio?: string;
  age?: number;
  dateOfBirth?: string;
  gender?: string;
  occupation?: string;
  education?: string;
  interests?: string[];
  phoneNumber?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
  lookingFor?: string[];
  relationshipStatus?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  images?: string[];
  bio: string;
  city: string;
  languages: string[];
  age?: number;
  dateOfBirth?: string;
  gender?: string;
  occupation?: string;
  education?: string;
  interests?: string[];
  phoneNumber?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
  lookingFor?: string[];
  relationshipStatus?: string;
  isEmailVerified: boolean;
  likedBy?: string[];
  likesCount?: number;
  hostedEventsCount?: number;
  joinedEventsCount?: number;
  createdAt: string;
  lastActive: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

class AuthService {
  private extractBody(response: any) {
    return response?.data ? response.data : response;
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    const body = this.extractBody(await api.post('/auth/register', data));

    if (body?.data?.token) {
      localStorage.setItem('token', body.data.token);
      localStorage.setItem('user', JSON.stringify(body.data.user));
    }

    return body as AuthResponse;
  }

  async login(data: LoginData): Promise<AuthResponse> {
    const body = this.extractBody(await api.post('/auth/login', data));

    if (body?.data?.token) {
      localStorage.setItem('token', body.data.token);
      localStorage.setItem('user', JSON.stringify(body.data.user));
    }

    return body as AuthResponse;
  }

  async sendVerificationEmail() {
    return api.post('/auth/send-verification-email');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

  async getMe(): Promise<User> {
    const body = this.extractBody(await api.get('/auth/me'));
    return body.data || body;
  }

  async updateProfile(data: Partial<User>): Promise<User> {
    const body = this.extractBody(await api.put('/auth/profile', data));
    const user = body.data || body;
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }

  async changePassword(currentPassword: string, newPassword: string) {
    return await api.put('/auth/password', { currentPassword, newPassword });
  }

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

export default new AuthService();
