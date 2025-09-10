import { User, LoginForm, RegisterForm } from '@/types'
import { apiClient } from './apiClient'

class AuthService {
  private readonly TOKEN_KEY = 'teleconsultancy_token'
  private readonly USER_KEY = 'teleconsultancy_user'

  async login(credentials: LoginForm): Promise<User> {
    try {
      const response = await apiClient.post('/auth/login', credentials)
      const { user, token } = response.data

      // Store token and user data
      localStorage.setItem(this.TOKEN_KEY, token)
      localStorage.setItem(this.USER_KEY, JSON.stringify(user))

      // Set default authorization header
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`

      return user
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed')
    }
  }

  async register(userData: RegisterForm): Promise<User> {
    try {
      const response = await apiClient.post('/auth/register', userData)
      const { user, token } = response.data

      // Store token and user data
      localStorage.setItem(this.TOKEN_KEY, token)
      localStorage.setItem(this.USER_KEY, JSON.stringify(user))

      // Set default authorization header
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`

      return user
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Registration failed')
    }
  }

  async getCurrentUser(): Promise<User | null> {
    try {
      const token = this.getToken()
      if (!token) {
        return null
      }

      // Set authorization header
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`

      const response = await apiClient.get('/auth/me')
      return response.data.user
    } catch (error: any) {
      // If token is invalid, clear stored data
      this.logout()
      return null
    }
  }

  async updateProfile(userData: Partial<User>): Promise<User> {
    try {
      const response = await apiClient.put('/auth/profile', userData)
      const updatedUser = response.data.user

      // Update stored user data
      localStorage.setItem(this.USER_KEY, JSON.stringify(updatedUser))

      return updatedUser
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Profile update failed')
    }
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    try {
      await apiClient.put('/auth/change-password', {
        currentPassword,
        newPassword
      })
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Password change failed')
    }
  }

  async forgotPassword(email: string): Promise<void> {
    try {
      await apiClient.post('/auth/forgot-password', { email })
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Password reset request failed')
    }
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    try {
      await apiClient.post('/auth/reset-password', {
        token,
        newPassword
      })
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Password reset failed')
    }
  }

  logout(): void {
    // Clear stored data
    localStorage.removeItem(this.TOKEN_KEY)
    localStorage.removeItem(this.USER_KEY)

    // Remove authorization header
    delete apiClient.defaults.headers.common['Authorization']
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY)
  }

  isAuthenticated(): boolean {
    const token = this.getToken()
    return !!token
  }

  // Mock data for development
  async getMockUser(): Promise<User> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return {
      id: '1',
      email: 'demo@example.com',
      name: 'Demo User',
      role: 'patient',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      phone: '+1234567890',
      dateOfBirth: '1990-01-01',
      gender: 'other',
      address: '123 Main St, City, State',
      emergencyContact: '+0987654321',
      medicalHistory: [],
      allergies: [],
      currentMedications: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  }

  // Mock login for development
  async mockLogin(credentials: LoginForm): Promise<User> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock validation
    if (credentials.email === 'demo@example.com' && credentials.password === 'password') {
      const user = await this.getMockUser()
      
      // Store mock token
      const mockToken = 'mock-jwt-token-' + Date.now()
      localStorage.setItem(this.TOKEN_KEY, mockToken)
      localStorage.setItem(this.USER_KEY, JSON.stringify(user))

      return user
    } else {
      throw new Error('Invalid credentials')
    }
  }

  // Mock register for development
  async mockRegister(userData: RegisterForm): Promise<User> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const user: User = {
      id: Date.now().toString(),
      email: userData.email,
      name: userData.name,
      role: userData.role,
      phone: userData.phone,
      medicalHistory: [],
      allergies: [],
      currentMedications: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Store mock token
    const mockToken = 'mock-jwt-token-' + Date.now()
    localStorage.setItem(this.TOKEN_KEY, mockToken)
    localStorage.setItem(this.USER_KEY, JSON.stringify(user))

    return user
  }
}

export const authService = new AuthService()
