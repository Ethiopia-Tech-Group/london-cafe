import Link from 'next/link'
import { 
  Coffee, 
  Heart, 
  Users, 
  Award, 
  Star,
  MapPin,
  Clock,
  Phone,
  Mail,
  CheckCircle,
  Shield,
  TrendingUp
} from 'lucide-react'

const teamMembers = [
  {
    name: 'Meron Tesfaye',
    role: 'Founder & CEO',
    image: '/images/meron.jpg',
    description: 'Visionary leader dedicated to creating exceptional café experiences that blend quality, comfort, and innovation.',
    expertise: 'Brand Strategy & Customer Experience'
  },
  {
    name: 'Kaleb Assefa',
    role: 'Head of Operations',
    image: '/images/kaleb.jpg',
    description: 'Ensures consistent quality and service standards across all London Cafe branches.',
    expertise: 'Operations & Quality Control'
  },
  {
    name: 'Sofia Girma',
    role: 'Head Barista & Trainer',
    image: '/images/sofia.jpg',
    description: 'Leads our barista team in delivering perfect coffee experiences with every cup.',
    expertise: 'Coffee Excellence & Team Training'
  },
  {
    name: 'Daniel Haile',
    role: 'Customer Experience Manager',
    image: '/images/daniel.jpg',
    description: 'Dedicated to creating memorable experiences for every customer who walks through our doors.',
    expertise: 'Customer Service & Hospitality'
  }
]

const differentiators = [
  {
    icon: CheckCircle,
    title: 'Consistency Across Branches',
    description: 'The same high-quality service, food, and atmosphere at every London Cafe location'
  },
  {
    icon: Award,
    title: 'Premium Café Experience',
    description: 'Modern, stylish, and comfortable environment ideal for social and professional gatherings'
  },
  {
    icon: Star,
    title: 'Quality-Driven Menu',
    description: 'Carefully prepared meals and drinks with exceptional attention to taste and presentation'
  },
  {
    icon: Shield,
    title: 'Strong Brand Identity',
    description: 'Professional, recognizable, and upscale branding that customers trust and love'
  },
  {
    icon: Users,
    title: 'Customer-Centered Service',
    description: 'Friendly, efficient, and personalized service that makes every visit special'
  },
  {
    icon: MapPin,
    title: 'Strategic Locations',
    description: 'Easily accessible branches catering to diverse customers across the city'
  },
  {
    icon: TrendingUp,
    title: 'Innovation-Oriented Vision',
    description: 'Commitment to digital transformation and future-ready services for modern customers'
  }
]

const milestones = [
  { year: '2015', event: 'First London Cafe opens with a vision for premium café experiences' },
  { year: '2016', event: 'Establishes consistent quality standards across all operations' },
  { year: '2017', event: 'Expands to multiple strategic locations across the city' },
  { year: '2018', event: 'Wins "Best Café Experience" award for exceptional service' },
  { year: '2019', event: 'Launches comprehensive staff training program' },
  { year: '2020', event: 'Implements digital ordering and reservation systems' },
  { year: '2023', event: 'Recognized as a leading lifestyle destination for professionals and families' }
]

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-primary">London Cafe</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              A trusted café brand known for quality service, welcoming atmosphere, and consistent 
              customer experience across all branches
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu" className="btn-primary text-lg px-8 py-4">
                Explore Our Menu
              </Link>
              <Link href="/branches" className="btn-secondary text-lg px-8 py-4">
                Visit Our Cafes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  London Cafe is a well-established and trusted café brand with several branches, 
                  known for its quality service, welcoming atmosphere, and consistent customer experience. 
                  We have built a strong reputation as a preferred destination for families, professionals, 
                  and young people who value comfort, quality food, and a modern café environment.
                </p>
                <p className="leading-relaxed">
                  With our growing customer base and recognizable brand identity, London Cafe represents 
                  a perfect blend of style, taste, and hospitality. We continue to evolve to meet the 
                  expectations of today's customers by embracing innovation and enhancing our service 
                  standards, positioning ourselves as one of the forward-thinking café brands in the market.
                </p>
                <p className="leading-relaxed">
                  In simple terms, London Cafe combines quality, consistency, comfort, trust, and modern 
                  vision—making us more than just a café; we are a preferred lifestyle space where 
                  memories are made and moments are cherished.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                <div className="text-center">
                  <Coffee className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    Every visit to London Cafe delivers a consistent premium experience—the same 
                    exceptional quality, warm service, and comfortable atmosphere that our customers 
                    have come to trust and love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Makes <span className="text-primary">London Cafe</span> Different
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We stand out in the market by delivering a complete experience that combines 
              quality, consistency, and atmosphere across all our branches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-background rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-primary">
                  <div className="bg-primary bg-opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-primary">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The passionate professionals dedicated to maintaining London Cafe's standards 
              of excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-secondary rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.description}</p>
                <div className="bg-gray-800 rounded-lg p-3">
                  <p className="text-primary text-sm font-semibold">Focus Area</p>
                  <p className="text-gray-300 text-sm">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-gray-400">
              From a single café to a trusted multi-branch brand loved by families and professionals
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-background rounded-xl p-6 shadow-lg border border-gray-700">
                      <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                      <p className="text-white">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-primary">Brand Values</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary bg-opacity-20 p-2 rounded-lg mt-1">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Quality Excellence</h3>
                    <p className="text-gray-400">
                      We never compromise on the quality of our ingredients, preparation methods, 
                      or service delivery. Every cup of coffee and every meal meets our exacting standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary bg-opacity-20 p-2 rounded-lg mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Consistent Experience</h3>
                    <p className="text-gray-400">
                      Whether you visit our first branch or our newest location, you'll experience 
                      the same warm welcome, excellent service, and premium quality that defines London Cafe.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary bg-opacity-20 p-2 rounded-lg mt-1">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Continuous Innovation</h3>
                    <p className="text-gray-400">
                      We embrace new technologies and evolving customer preferences to ensure 
                      London Cafe remains a forward-thinking and modern café brand.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary bg-opacity-20 p-2 rounded-lg mt-1">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Customer First</h3>
                    <p className="text-gray-400">
                      Our customers are at the heart of everything we do. We listen, adapt, 
                      and strive to exceed expectations with every interaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision for the Future</h3>
                <p className="mb-4 leading-relaxed">
                  To remain the preferred lifestyle destination where quality, comfort, and innovation 
                  come together to create exceptional everyday experiences for our diverse community of customers.
                </p>
                <div className="flex items-center space-x-2 text-white text-opacity-90">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">Continuing to set standards in the café industry</span>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Join Our Community</h3>
                <p className="text-gray-400 mb-4">
                  Experience why families, professionals, and young people choose London Cafe as their preferred destination.
                </p>
                <Link href="/branches" className="text-primary hover:text-accent font-semibold inline-flex items-center space-x-1">
                  <span>Find Your Nearest Cafe</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the <span className="text-primary">London Cafe</span> Difference
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover why we're more than just a café—we're a trusted brand, a comfortable space, 
            and a consistent experience that keeps customers coming back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/branches" className="btn-primary text-lg px-8 py-4">
              Visit Our Cafes
            </Link>
            <Link href="/menu" className="btn-secondary text-lg px-8 py-4">
              View Our Menu
            </Link>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-700">
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Multiple Strategic Locations</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <Phone className="h-5 w-5 text-primary" />
              <span>+251 11 123 4567</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <Mail className="h-5 w-5 text-primary" />
              <span>experience@londoncafeet.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}