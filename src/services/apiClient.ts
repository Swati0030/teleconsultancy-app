import axios from 'axios'
import toast from 'react-hot-toast'

// Create axios instance
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('teleconsultancy_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - clear auth data
      localStorage.removeItem('teleconsultancy_token')
      localStorage.removeItem('teleconsultancy_user')
      window.location.href = '/login'
    } else if (error.response?.status === 403) {
      toast.error('Access denied')
    } else if (error.response?.status === 404) {
      toast.error('Resource not found')
    } else if (error.response?.status >= 500) {
      toast.error('Server error. Please try again later.')
    } else if (error.code === 'NETWORK_ERROR') {
      toast.error('Network error. Please check your connection.')
    }

    return Promise.reject(error)
  }
)

// Mock API client for development
export const mockApiClient = {
  get: async (url: string) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    return { data: { success: true, data: [] } }
  },
  post: async (url: string, data: any) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    return { data: { success: true, data } }
  },
  put: async (url: string, data: any) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    return { data: { success: true, data } }
  },
  delete: async (url: string) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    return { data: { success: true } }
  }
}
