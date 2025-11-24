'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    branch: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const branches = [
    { id: 'general', name: 'General Inquiry' },
    { id: 'bole-road', name: 'London Cafe - Bole Road' },
    { id: 'bisrate-gabriel', name: 'London Cafe - Bisrate Gabriel' },
    { id: 'bole-airport', name: 'London Cafe - Bole Airport' },
    { id: 'medhanialem', name: 'London Cafe - Bole Medhanialem' },
    { id: 'morning-star', name: 'London Cafe - Morning Star' }
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+251 11 663 8115',
      subdetails: 'Mon-Fri: 7AM - 9PM',
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@londoncafe.et',
      subdetails: 'We reply within 24 hours',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '6 Locations Across Addis Ababa',
      subdetails: 'See our branches page',
      color: 'text-orange-500'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: 'Daily: 7AM - 9PM',
      subdetails: 'All branches',
      color: 'text-purple-500'
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        branch: 'general'
      })
      setSubmitStatus('idle')
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen pt-5 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a question or feedback? We'd love to hear from you. 
            Our team is here to help and will get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="card text-center group hover:shadow-2xl transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{info.title}</h3>
              <p className="text-primary font-medium mb-1">{info.details}</p>
              <p className="text-gray-400 text-sm">{info.subdetails}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                        placeholder="+251 XX XXX XXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Branch Location</label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    >
                      {branches.map(branch => (
                        <option key={branch.id} value={branch.id}>{branch.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-500 bg-opacity-20 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-accent text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            {/* FAQ Link */}
            <div className="card">
              <h3 className="text-white font-semibold text-lg mb-4">Quick Help</h3>
              <p className="text-gray-400 text-sm mb-4">
                Looking for quick answers? Check out our frequently asked questions.
              </p>
              <a
                href="/faq"
                className="block w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition text-center"
              >
                Visit FAQ
              </a>
            </div>

            {/* Social Media */}
            <div className="card">
              <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
              <p className="text-gray-400 text-sm mb-4">
                Stay connected with us on social media for updates and offers.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition text-center text-sm">
                  Facebook
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition text-center text-sm">
                  Instagram
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition text-center text-sm">
                  Twitter
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition text-center text-sm">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="card bg-primary bg-opacity-20 border border-primary border-opacity-30">
              <h3 className="text-white font-semibold text-lg mb-2">Emergency Contact</h3>
              <p className="text-gray-300 text-sm mb-3">
                For urgent matters, call us directly:
              </p>
              <a href="tel:+251116638115" className="text-primary font-bold text-xl">
                +251 11 663 8115
              </a>
              <p className="text-gray-400 text-xs mt-2">Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="card mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Visit Our Main Branch</h2>
          <div className="aspect-video bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="relative z-10 text-center text-white">
              <MapPin className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <p className="text-xl font-semibold">London Cafe - Bole Road</p>
              <p className="text-sm opacity-80">Bole Road, Addis Ababa, Ethiopia</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-white text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
