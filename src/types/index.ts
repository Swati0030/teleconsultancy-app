// User Types
export interface User {
  id: string
  email: string
  name: string
  role: 'patient' | 'doctor' | 'admin'
  avatar?: string
  phone?: string
  dateOfBirth?: string
  gender?: 'male' | 'female' | 'other'
  address?: string
  emergencyContact?: string
  medicalHistory?: string[]
  allergies?: string[]
  currentMedications?: string[]
  createdAt: string
  updatedAt: string
}

export interface Doctor extends User {
  role: 'doctor'
  specialization: string
  licenseNumber: string
  experience: number
  education: string[]
  languages: string[]
  consultationFee: number
  availability: DoctorAvailability[]
  rating: number
  totalConsultations: number
}

export interface Patient extends User {
  role: 'patient'
  insuranceProvider?: string
  insuranceNumber?: string
  primaryCarePhysician?: string
}

// Availability Types
export interface DoctorAvailability {
  dayOfWeek: number // 0-6 (Sunday-Saturday)
  startTime: string // HH:MM format
  endTime: string // HH:MM format
  isAvailable: boolean
}

// Consultation Types
export interface Consultation {
  id: string
  patientId: string
  doctorId: string
  patient: Patient
  doctor: Doctor
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled'
  scheduledAt: string
  startedAt?: string
  endedAt?: string
  duration?: number // in minutes
  roomId: string
  symptoms: string[]
  diagnosis?: string
  prescription?: Prescription[]
  notes?: string
  recordingUrl?: string
  transcript?: string
  aiInsights?: AIInsights
  followUpRequired?: boolean
  followUpDate?: string
  createdAt: string
  updatedAt: string
}

// Prescription Types
export interface Prescription {
  id: string
  medicationName: string
  dosage: string
  frequency: string
  duration: string
  instructions: string
  quantity: number
}

// AI Insights Types
export interface AIInsights {
  id: string
  consultationId: string
  symptoms: string[]
  concerns: string[]
  recommendations: string[]
  riskLevel: 'low' | 'medium' | 'high'
  summary: string
  keyPoints: string[]
  followUpSuggestions: string[]
  medicationMentions: string[]
  vitalSigns?: VitalSigns
  createdAt: string
}

// Vital Signs Types
export interface VitalSigns {
  bloodPressure?: string
  heartRate?: number
  temperature?: number
  oxygenSaturation?: number
  weight?: number
  height?: number
  bmi?: number
}

// Video Call Types
export interface VideoCallState {
  isConnected: boolean
  isMuted: boolean
  isVideoEnabled: boolean
  isScreenSharing: boolean
  participants: Participant[]
  localStream?: MediaStream
  remoteStream?: MediaStream
}

export interface Participant {
  id: string
  name: string
  role: 'patient' | 'doctor'
  isMuted: boolean
  isVideoEnabled: boolean
  stream?: MediaStream
}

// Speech Recognition Types
export interface SpeechRecognitionState {
  isListening: boolean
  isSupported: boolean
  transcript: string
  interimTranscript: string
  confidence: number
  language: string
}

// Chat Types
export interface ChatMessage {
  id: string
  consultationId: string
  senderId: string
  senderName: string
  senderRole: 'patient' | 'doctor'
  message: string
  timestamp: string
  type: 'text' | 'image' | 'file'
  isRead: boolean
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  type: 'consultation' | 'prescription' | 'reminder' | 'system'
  title: string
  message: string
  isRead: boolean
  data?: any
  createdAt: string
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Form Types
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  name: string
  email: string
  password: string
  confirmPassword: string
  role: 'patient' | 'doctor'
  phone?: string
  specialization?: string
  licenseNumber?: string
}

export interface ConsultationForm {
  doctorId: string
  scheduledAt: string
  symptoms: string[]
  description: string
  urgency: 'low' | 'medium' | 'high'
}

// Store Types
export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface ConsultationState {
  consultations: Consultation[]
  currentConsultation: Consultation | null
  isLoading: boolean
  error: string | null
}

// WebRTC Types
export interface WebRTCConfig {
  iceServers: RTCIceServer[]
  sdpSemantics: 'unified-plan' | 'plan-b'
}

export interface SignalingMessage {
  type: 'offer' | 'answer' | 'ice-candidate' | 'user-joined' | 'user-left'
  data: any
  from: string
  to?: string
  roomId: string
}
