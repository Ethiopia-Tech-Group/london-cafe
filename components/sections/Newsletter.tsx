'use client'
import { useState } from 'react'
import { Mail, Gift, Coffee } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Coffee className="h-24 w-24" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Gift className="h-24 w-24" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header */}
        <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 text-white px-6 py-2 rounded-full mb-6">
          <Gift className="h-5 w-5" />
          <span className="font-semibold">Exclusive Offers</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Stay in the <span className="text-background">Loop</span>
        </h2>
        
        <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new menu items, 
          special events, and exclusive member-only offers.
        </p>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-4 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full text-white placeholder-gray-200 focus:outline-none focus:border-white focus:bg-opacity-30 transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-background hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Subscribe
            </button>
          </div>
        </form>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Gift, text: 'Exclusive member discounts' },
            { icon: Coffee, text: 'First access to new menu items' },
            { icon: Mail, text: 'Weekly coffee tips & recipes' }
          ].map((benefit, index) => (
            <div key={index} className="flex items-center justify-center space-x-3 text-white text-opacity-90">
              <benefit.icon className="h-6 w-6" />
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}