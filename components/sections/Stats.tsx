import { Coffee, Users, Star, Award } from 'lucide-react'

const stats = [
  {
    icon: Coffee,
    number: '50K+',
    label: 'Cups Served Monthly',
    description: 'Across all our London locations'
  },
  {
    icon: Users,
    number: '10K+',
    label: 'Happy Customers',
    description: 'Join our growing community'
  },
  {
    icon: Star,
    number: '4.8/5',
    label: 'Customer Rating',
    description: 'Based on 2,500+ reviews'
  },
  {
    icon: Award,
    number: '6',
    label: 'Branches',
    description: 'Conveniently located across the city'
  }
]

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
                  +
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-lg font-semibold text-primary mb-2">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}