import Link from 'next/link'
import { 
  Coffee, 
  Heart, 
  Users, 
  Award, 
  Leaf, 
  Globe, 
  Star,
  MapPin,
  Clock,
  Phone,
  Mail
} from 'lucide-react'

const teamMembers = [
  {
    name: 'Meron Tesfaye',
    role: 'Founder & Head Roaster',
    image: '/images/meron.jpg',
    description: 'Passionate about Ethiopian coffee heritage, Meron started London Cafe to share the authentic taste of Ethiopian coffee with the world.',
    expertise: 'Coffee Roasting & Blending'
  },
  {
    name: 'Kaleb Assefa',
    role: 'Executive Chef',
    image: '/images/kaleb.jpg',
    description: 'With 15 years of international experience, Kaleb creates fusion pastries that blend traditional Ethiopian flavors with modern techniques.',
    expertise: 'Pastry Arts & Recipe Development'
  },
  {
    name: 'Sofia Girma',
    role: 'Head Barista',
    image: '/images/sofia.jpg',
    description: 'National barista champion who trains our team in the art of perfect espresso and traditional Ethiopian coffee ceremony.',
    expertise: 'Coffee Preparation & Training'
  },
  {
    name: 'Daniel Haile',
    role: 'Operations Manager',
    image: '/images/daniel.jpg',
    description: 'Ensures every customer experiences the warm Ethiopian hospitality that makes London Cafe special.',
    expertise: 'Customer Experience & Operations'
  }
]

const values = [
  {
    icon: Coffee,
    title: 'Authentic Ethiopian Coffee',
    description: 'We source directly from local Ethiopian farmers, preserving traditional brewing methods while innovating for modern tastes.'
  },
  {
    icon: Heart,
    title: 'Community First',
    description: 'We\'re deeply rooted in Addis Ababa, supporting local artists, musicians, and community initiatives.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    description: 'From compostable packaging to water conservation, we\'re committed to environmental stewardship.'
  },
  {
    icon: Globe,
    title: 'Cultural Bridge',
    description: 'We celebrate Ethiopian coffee culture while creating a space where locals and visitors connect.'
  }
]

const milestones = [
  { year: '2015', event: 'Founded in Bole, Addis Ababa with a vision to redefine coffee culture' },
  { year: '2016', event: 'Launched direct trade partnerships with local coffee farmers' },
  { year: '2017', event: 'Opened our second location in Kazanchis' },
  { year: '2018', event: 'Won Best Coffee Shop in Addis Ababa award' },
  { year: '2019', event: 'Introduced Ethiopian coffee ceremony experiences' },
  { year: '2020', event: 'Expanded to 6 locations across Addis Ababa' },
  { year: '2023', event: 'Launched community barista training program' }
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
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Where Ethiopian Coffee Heritage Meets Modern Excellence in the Heart of Addis Ababa
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

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Ethiopian <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  Founded in 2015 in the vibrant heart of Addis Ababa, London Cafe was born from a simple yet powerful vision: 
                  to share the rich, authentic flavors of Ethiopian coffee with the world while creating modern spaces where 
                  community thrives.
                </p>
                <p>
                  While our name might suggest British origins, we chose "London Cafe" as a tribute to the global appreciation 
                  for quality coffee and our aspiration to set international standards right here in the birthplace of coffee.
                </p>
                <p>
                  We work directly with local farmers across Ethiopia's renowned coffee regions—Yirgacheffe, Sidamo, Harrar, 
                  and Limu—ensuring fair trade practices and preserving traditional cultivation methods that have been passed 
                  down through generations.
                </p>
                <p>
                  Today, with six locations across Addis Ababa, we've become more than just a coffee shop. We're a cultural 
                  hub where the ancient Ethiopian coffee ceremony meets contemporary cafe culture, where students study, 
                  professionals work, friends gather, and visitors experience genuine Ethiopian hospitality.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                <div className="text-center">
                  <Coffee className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Coffee Born in Ethiopia</h3>
                  <p className="text-white text-opacity-90">
                    Serving the world's finest coffee from its birthplace, prepared with respect for tradition 
                    and passion for innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do at London Cafe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary bg-opacity-20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
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
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The passionate individuals behind London Cafe's exceptional experience
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
                <p className="text-gray-400 text-sm mb-4">{member.description}</p>
                <div className="bg-gray-800 rounded-lg p-3">
                  <p className="text-primary text-sm font-semibold">Expertise</p>
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
              From a single cafe in Bole to Addis Ababa's favorite coffee destination
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
                    <div className="bg-background rounded-xl p-6 shadow-lg">
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

      {/* Coffee Sourcing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ethiopian <span className="text-primary">Coffee Heritage</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  Ethiopia is the birthplace of coffee, and we honor this legacy by sourcing only the finest beans 
                  from across the country's diverse coffee-growing regions.
                </p>
                <p>
                  Our direct relationships with farmers in Yirgacheffe, Sidamo, Harrar, and Limu ensure that we receive 
                  the highest quality beans while supporting sustainable farming practices and fair compensation for 
                  the hardworking farmers.
                </p>
                <p>
                  We celebrate the traditional Ethiopian coffee ceremony—a cornerstone of our culture—by offering 
                  authentic ceremonies at all our locations, complete with incense, traditional seating, and the 
                  rhythmic pouring that makes this experience so special.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-400">Ethiopian Coffee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-400">Local Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-gray-400">Growing Regions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-gray-400">Ceremonies Monthly</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Traditional Coffee Ceremony</h3>
                <p className="mb-4">
                  Experience the authentic Ethiopian coffee ceremony at any of our locations. 
                  Watch as green coffee beans are roasted, ground, and brewed right before your eyes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>Fresh roasting with incense</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>Traditional Jebena brewing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>Three rounds of service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>Accompanied by popcorn or snacks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Visit Our Roastery</h3>
                <p className="text-gray-400 mb-4">
                  Tour our on-site roastery in Bole and learn about the journey from bean to cup.
                </p>
                <Link href="/contact" className="text-primary hover:text-accent font-semibold">
                  Schedule a Tour →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Community <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building a better Addis Ababa, one cup at a time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary bg-opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Barista Training</h3>
              <p className="text-gray-400">
                Free barista training program for underprivileged youth in Addis Ababa, creating career opportunities in the coffee industry.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary bg-opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Local Artists</h3>
              <p className="text-gray-400">
                We showcase and sell artwork from local Ethiopian artists, with 100% of proceeds going directly to the artists.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary bg-opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Environmental Care</h3>
              <p className="text-gray-400">
                Tree planting initiatives and waste reduction programs to keep Addis Ababa green and clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience Ethiopian <span className="text-primary">Coffee Culture</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Visit any of our six locations in Addis Ababa and discover why we're more than just a coffee shop—we're a celebration of Ethiopian heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/branches" className="btn-primary text-lg px-8 py-4">
              Find a Location
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Get In Touch
            </Link>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-700">
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <MapPin className="h-5 w-5 text-primary" />
              <span>6 Locations in Addis Ababa</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <Phone className="h-5 w-5 text-primary" />
              <span>+251 11 123 4567</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <Mail className="h-5 w-5 text-primary" />
              <span>hello@londoncafeet.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}