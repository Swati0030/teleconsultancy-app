import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Video, 
  Mic, 
  Brain, 
  Shield, 
  Clock, 
  Users,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

export default function LandingPage() {
  const features = [
    {
      icon: Video,
      title: 'HD Video Consultations',
      description: 'Crystal clear video calls with doctors from anywhere'
    },
    {
      icon: Mic,
      title: 'Real-time Speech-to-Text',
      description: 'Automatic transcription of your consultation'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent analysis of your health concerns'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'HIPAA-compliant platform with end-to-end encryption'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access healthcare professionals anytime, anywhere'
    },
    {
      icon: Users,
      title: 'Expert Doctors',
      description: 'Connect with qualified healthcare professionals'
    }
  ]

  const benefits = [
    'No waiting in long queues',
    'Access to specialists worldwide',
    'Prescription delivery to your door',
    'Health records in one place',
    'AI-powered health insights',
    'Secure video consultations'
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'The AI insights helped me understand my symptoms better. The doctor was very professional and the video quality was excellent.',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Cardiologist',
      content: 'This platform has revolutionized how I provide consultations. The speech-to-text feature saves so much time.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient',
      content: 'I was able to get a consultation at 2 AM when I had severe pain. The AI analysis was spot on!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary-600">TeleConsultancy</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AI-Powered
              <span className="text-primary-600"> Healthcare</span>
              <br />
              at Your Fingertips
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect with qualified doctors through HD video calls, get real-time speech-to-text transcription, 
              and receive AI-powered health insights - all in one secure platform.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/register"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-medium flex items-center justify-center"
              >
                Start Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/login"
                className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg text-lg font-medium"
              >
                Sign In
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TeleConsultancy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of healthcare with our cutting-edge technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Healthcare Experience
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI-powered platform makes healthcare more accessible, efficient, and personalized than ever before.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-secondary-600 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI-Powered Insights
                </h3>
                <p className="text-gray-600 mb-6">
                  Our advanced AI analyzes your consultation to provide:
                </p>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Symptom analysis and recommendations</li>
                  <li>• Medication interaction checks</li>
                  <li>• Follow-up care suggestions</li>
                  <li>• Health trend monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied patients and doctors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Future of Healthcare?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of patients and doctors who trust TeleConsultancy for their healthcare needs.
          </p>
          <Link
            to="/register"
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-medium inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TeleConsultancy</h3>
              <p className="text-gray-400">
                AI-powered healthcare platform connecting patients with qualified doctors.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Patients</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/register" className="hover:text-white">Sign Up</Link></li>
                <li><Link to="/login" className="hover:text-white">Sign In</Link></li>
                <li><Link to="/patient-dashboard" className="hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Doctors</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/register" className="hover:text-white">Join as Doctor</Link></li>
                <li><Link to="/doctor-dashboard" className="hover:text-white">Doctor Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TeleConsultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
