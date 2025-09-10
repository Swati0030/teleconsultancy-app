import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User, LoginForm, RegisterForm, AuthState } from '@/types'
import { authService } from '@/services/authService'
import toast from 'react-hot-toast'

interface AuthStore extends AuthState {
  // Actions
  login: (credentials: LoginForm) => Promise<void>
  register: (userData: RegisterForm) => Promise<void>
  logout: () => void
  checkAuth: () => Promise<void>
  updateProfile: (userData: Partial<User>) => Promise<void>
  clearError: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: async (credentials: LoginForm) => {
        set({ isLoading: true, error: null })
        try {
          const user = await authService.login(credentials)
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false,
            error: null 
          })
          toast.success('Login successful!')
        } catch (error: any) {
          const errorMessage = error.message || 'Login failed'
          set({ 
            error: errorMessage, 
            isLoading: false,
            isAuthenticated: false,
            user: null
          })
          toast.error(errorMessage)
          throw error
        }
      },

      register: async (userData: RegisterForm) => {
        set({ isLoading: true, error: null })
        try {
          const user = await authService.register(userData)
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false,
            error: null 
          })
          toast.success('Registration successful!')
        } catch (error: any) {
          const errorMessage = error.message || 'Registration failed'
          set({ 
            error: errorMessage, 
            isLoading: false,
            isAuthenticated: false,
            user: null
          })
          toast.error(errorMessage)
          throw error
        }
      },

      logout: () => {
        authService.logout()
        set({ 
          user: null, 
          isAuthenticated: false, 
          error: null,
          isLoading: false
        })
        toast.success('Logged out successfully')
      },

      checkAuth: async () => {
        set({ isLoading: true })
        try {
          const user = await authService.getCurrentUser()
          if (user) {
            set({ 
              user, 
              isAuthenticated: true, 
              isLoading: false,
              error: null
            })
          } else {
            set({ 
              user: null, 
              isAuthenticated: false, 
              isLoading: false,
              error: null
            })
          }
        } catch (error: any) {
          set({ 
            user: null, 
            isAuthenticated: false, 
            isLoading: false,
            error: error.message || 'Authentication check failed'
          })
        }
      },

      updateProfile: async (userData: Partial<User>) => {
        set({ isLoading: true, error: null })
        try {
          const updatedUser = await authService.updateProfile(userData)
          set({ 
            user: updatedUser, 
            isLoading: false,
            error: null 
          })
          toast.success('Profile updated successfully!')
        } catch (error: any) {
          const errorMessage = error.message || 'Profile update failed'
          set({ 
            error: errorMessage, 
            isLoading: false
          })
          toast.error(errorMessage)
          throw error
        }
      },

      clearError: () => {
        set({ error: null })
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
)
