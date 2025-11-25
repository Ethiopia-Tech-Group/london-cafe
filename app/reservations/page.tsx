'use client'
import { useState } from 'react'
import { Calendar, Clock, Users, MapPin, CheckCircle, ChevronDown } from 'lucide-react'

interface ReservationForm {
  branch: string
  date: string
  time: string
  guests: number
  name: string
  email: string
  phone: string
  specialRequests: string
}

export default function ReservationsPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<ReservationForm>({
    branch: '',
    date: '',
    time: '',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  })
  const branches = [
    { id: '1', name: 'Bole Road', address: 'Bole Road, Addis Ababa, Ethiopia' },
    { id: '2', name: 'Morning Star', address: 'Morning Star, Bole, Addis Ababa, Ethiopia' },
    { id: '3', name: 'Bisrate Gabriel', address: 'South Africa Street, Bisrate Gabriel, Addis Ababa, Ethiopia' },
    { id: '4', name: 'Bole International Airport', address: 'Bole International Airport, Addis Ababa, Ethiopia' },
    { id: '5', name: 'Bole Medhanialem', address: 'Bole Medhanialem, Addis Ababa, Ethiopia' },
    { id: '6', name: 'Alem Cinema', address: 'Bole  Alemenesh Plazaarea, Addis Ababa, Ethiopia' },
    // { id: '7', name: 'Arada', address: 'Arada area, Addis Ababa, Ethiopia' }
  ];
  

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setStep(4) // Success step
  }

  const updateFormData = (field: keyof ReservationForm, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Select Branch</h2>
              
              {/* Mobile Dropdown (shown on small screens) */}
              <div className="md:hidden">
                <div className="relative">
                  <select
                    value={formData.branch}
                    onChange={(e) => updateFormData('branch', e.target.value)}
                    className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary appearance-none cursor-pointer"
                  >
                    <option value="">Choose a branch...</option>
                    {branches.map(branch => (
                      <option key={branch.id} value={branch.id}>
                        {branch.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
                
                {/* Selected Branch Details */}
                {formData.branch && (
                  <div className="mt-4 p-4 bg-gray-800 rounded-lg border-2 border-primary">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-semibold mb-1">
                          {branches.find(b => b.id === formData.branch)?.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {branches.find(b => b.id === formData.branch)?.address}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Desktop Grid (hidden on mobile) */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branches.map(branch => (
                  <div
                    key={branch.id}
                    className={`
                      card cursor-pointer transition-all transform rounded-xl p-4
                      bg-gray-800 hover:scale-105
                      ${formData.branch === branch.id ? 'border-2 border-primary shadow-2xl scale-105' : 'border border-gray-700'}
                    `}
                    onClick={() => updateFormData('branch', branch.id)}
                  >
                    <MapPin className="h-6 w-6 text-primary mb-3" />
                    <h3 className="text-lg font-semibold text-white">{branch.name}</h3>
                    <p className="text-gray-400 text-sm">{branch.address}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.branch}
                  className="bg-primary p-1 px-2 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          );
          

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Date & Time</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => updateFormData('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Number of Guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => updateFormData('guests', parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>
            </div>

            {formData.date && (
              <div>
                <label className="block text-gray-300 mb-2">Time</label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => updateFormData('time', slot)}
                      className={`p-3 rounded-lg border text-center transition ${
                        formData.time === slot
                          ? 'border-primary bg-primary bg-opacity-20 text-white'
                          : 'border-gray-700 text-gray-400 hover:border-primary'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-800 p-1 px-2 rounded cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!formData.date || !formData.time}
                className="bg-primary p-1 px-2 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Your Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Special Requests (Optional)</label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => updateFormData('specialRequests', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-gray-800 p-1 px-2 rounded cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-primary p-1 px-2 rounded cursor-pointer"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        )

      case 4:
        return (
          <div className="text-center space-y-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h2 className="text-2xl font-bold text-white">Reservation Confirmed!</h2>
            <div className="card text-left max-w-md mx-auto">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Branch:</span>
                  <span className="text-white">{branches.find(b => b.id === formData.branch)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date:</span>
                  <span className="text-white">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Time:</span>
                  <span className="text-white">{formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Guests:</span>
                  <span className="text-white">{formData.guests}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400">
              A confirmation email has been sent to {formData.email}
            </p>
            <button
              onClick={() => {
                setStep(1)
                setFormData({
                  branch: '',
                  date: '',
                  time: '',
                  guests: 2,
                  name: '',
                  email: '',
                  phone: '',
                  specialRequests: ''
                })
              }}
              className="bg-primary p-1 px-2 rounded cursor-pointer"
            >
              Make Another Reservation
            </button>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Table <span className="text-primary">Reservation</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Book your table at any of our London locations
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber ? 'bg-primary text-white' : 'bg-gray-700 text-gray-400'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div className={`w-12 h-1 ${step > stepNumber ? 'bg-primary' : 'bg-gray-700'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reservation Form */}
        <div className="card">
          {renderStep()}
        </div>
      </div>
    </div>
  )
}