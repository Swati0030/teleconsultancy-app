import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import { useEffect } from 'react'

// Pages
import LandingPage from '@/pages/LandingPage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import DashboardPage from '@/pages/DashboardPage'
import VideoCallPage from '@/pages/VideoCallPage'
import PatientDashboard from '@/pages/PatientDashboard'
import DoctorDashboard from '@/pages/DoctorDashboard'
import ConsultationHistory from '@/pages/ConsultationHistory'
import SettingsPage from '@/pages/SettingsPage'

// Components
import ProtectedRoute from '@/components/ProtectedRoute'
import LoadingSpinner from '@/components/LoadingSpinner'

function App() {
  const { user, isLoading, checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        
        <Route path="/patient-dashboard" element={
          <ProtectedRoute>
            <PatientDashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/doctor-dashboard" element={
          <ProtectedRoute>
            <DoctorDashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/video-call/:roomId" element={
          <ProtectedRoute>
            <VideoCallPage />
          </ProtectedRoute>
        } />
        
        <Route path="/consultation-history" element={
          <ProtectedRoute>
            <ConsultationHistory />
          </ProtectedRoute>
        } />
        
        <Route path="/settings" element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        } />
        
        {/* Redirect to dashboard if user is logged in, otherwise to landing */}
        <Route path="*" element={
          user ? <Navigate to="/dashboard" replace /> : <Navigate to="/" replace />
        } />
      </Routes>
    </div>
  )
}

export default App
