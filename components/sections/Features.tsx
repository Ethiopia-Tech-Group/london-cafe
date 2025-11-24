'use client'
import { Coffee, Truck, Clock, Award, Heart, Users, Shield, Zap } from 'lucide-react'
import { useRouter } from 'next/navigation'

const features = [
  {
    icon: Coffee,
    title: 'Premium Coffee',
    description: 'Sourced from the finest single-origin beans and roasted to perfection',
    color: 'text-orange-500'
  },
  {
    icon: Clock,
    title: 'Fast Service',
    description: 'Quick preparation without compromising on quality and taste',
    color: 'text-blue-500'
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Quick and reliable delivery within 3 miles of any branch',
    color: 'text-green-500'
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: 'We stand behind the quality of every drink we serve',
    color: 'text-yellow-500'
  },
  {
    icon: Heart,
    title: 'Eco-Friendly',
    description: 'Committed to sustainable practices and compostable packaging',
    color: 'text-red-500'
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Supporting local artists, musicians, and community events',
    color: 'text-purple-500'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Stringent hygiene protocols and contactless payment options',
    color: 'text-indigo-500'
  },
  {
    icon: Zap,
    title: 'Loyalty Rewards',
    description: 'Earn points with every purchase and unlock exclusive benefits',
    color: 'text-pink-500'
  }
]

export default function Features() {
    const router = useRouter()
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238F7A5D' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-primary">London Cafe</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the difference that quality, passion, and attention to detail make in every cup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-3xl bg-secondary hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-primary"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-white text-opacity-90 mb-6">
              Join thousands of satisfied customers who have made London Cafe their daily ritual
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => (router.push("/ordering"))} className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
                Order Now
              </button>
              <button onClick={() => (router.push("/branches"))} className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full cursor-pointer hover:bg-opacity-10 transition-colors">
                Find a Branch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}