'use client'
import { useState } from 'react'
import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Clock, 
  Wifi, 
  Coffee, 
  Users, 
  Car, 
  Zap, 
  Star, 
  Search,
  Filter,
  Navigation,
  ExternalLink
} from 'lucide-react'

interface Branch {
  id: string
  name: string
  address: string
  phone: string
  email: string
  hours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  coordinates: {
    lat: number
    lng: number
  }
  features: string[]
  description: string
  image: string
  rating: number
  reviewCount: number
  distance?: string
  popular: boolean
  seating: {
    indoor: number
    outdoor: number
  }
  special: string
}

const branches: Branch[] = [
    {
      id: 'bole-road',
      name: 'London Cafe - Bole Road',
      address: 'Bole Road, Addis Ababa, Ethiopia',
      phone: '+251 11 663 8115',
      email: 'bole@londoncafe.et',
      hours: {
        monday: '7:00 AM - 10:00 PM',
        tuesday: '7:00 AM - 10:00 PM',
        wednesday: '7:00 AM - 10:00 PM',
        thursday: '7:00 AM - 10:00 PM',
        friday: '7:00 AM - 11:00 PM',
        saturday: '8:00 AM - 11:00 PM',
        sunday: '8:00 AM - 9:00 PM'
      },
      coordinates: { lat: 8.9831, lng: 38.7967 },
      features: ['Coffee & Beverages', 'Outdoor Seating', 'Takeaway', 'Free WiFi'],
      description: 'Flagship branch offering high-quality coffee, comfortable seating, and a welcoming atmosphere for both quick visits and long stays.',
      image: '/images/london-cafe-bole.jpg',
      rating: 4.5,
      reviewCount: 210,
      distance: '0.5 km',
      popular: true,
      seating: {
        indoor: 45,
        outdoor: 20
      },
      special: 'Home to our master barista training program'
    },
    {
      id: 'edna-mall',
      name: 'London Cafe - Morning Star',
      address: 'Beside Morning Star, Bole, Addis Ababa, Ethiopia',
      phone: '+251 96 957 1106',
      email: 'morningstar@londoncafe.et',
      hours: {
        monday: '8:00 AM - 10:00 PM',
        tuesday: '8:00 AM - 10:00 PM',
        wednesday: '8:00 AM - 10:00 PM',
        thursday: '8:00 AM - 10:00 PM',
        friday: '8:00 AM - 11:00 PM',
        saturday: '8:00 AM - 11:00 PM',
        sunday: '8:00 AM - 9:00 PM'
      },
      coordinates: { lat: 8.9815, lng: 38.7912 },
      features: ['Coffee & Snacks', 'Student Discount', 'Takeaway', 'Free WiFi'],
      description: 'Modern branch next to Morning Star, perfect for casual coffee breaks and quick snacks.',
      image: '/images/london-cafe-edna.jpg',
      rating: 4.4,
      reviewCount: 180,
      distance: '1 km',
      popular: true,
      seating: {
        indoor: 35,
        outdoor: 15
      },
      special: 'Popular among students and shoppers'
    },
    {
      id: 'bisrate-gabriel',
      name: 'London Cafe - Bisrate Gabriel',
      address: 'South Africa Street, Bisrate Gabriel, Addis Ababa, Ethiopia',
      phone: '+251 96 957 1106',
      email: 'bisrate@londoncafe.et',
      hours: {
        monday: '7:30 AM - 9:00 PM',
        tuesday: '7:30 AM - 9:00 PM',
        wednesday: '7:30 AM - 9:00 PM',
        thursday: '7:30 AM - 9:00 PM',
        friday: '7:30 AM - 10:00 PM',
        saturday: '8:00 AM - 10:00 PM',
        sunday: '8:00 AM - 8:00 PM'
      },
      coordinates: { lat: 8.9850, lng: 38.7925 },
      features: ['Coffee & Breakfast', 'Takeaway', 'Free WiFi', 'Local Pastries'],
      description: 'Cozy neighborhood cafe known for its delicious breakfast options and freshly brewed coffee.',
      image: '/images/london-cafe-bisrate.jpg',
      rating: 4.3,
      reviewCount: 150,
      distance: '2 km',
      popular: true,
      seating: {
        indoor: 30,
        outdoor: 10
      },
      special: 'Famous for local pastries'
    },
    {
      id: 'bole-airport',
      name: 'London Cafe - Bole International Airport',
      address: 'Bole International Airport, Addis Ababa, Ethiopia',
      phone: '+251 11 665 4321',
      email: 'airport@londoncafe.et',
      hours: {
        monday: '6:00 AM - 11:00 PM',
        tuesday: '6:00 AM - 11:00 PM',
        wednesday: '6:00 AM - 11:00 PM',
        thursday: '6:00 AM - 11:00 PM',
        friday: '6:00 AM - 11:00 PM',
        saturday: '6:00 AM - 11:00 PM',
        sunday: '6:00 AM - 11:00 PM'
      },
      coordinates: { lat: 8.9770, lng: 38.7990 },
      features: ['Coffee & Beverages', 'Takeaway', 'Free WiFi', 'Quick Service'],
      description: 'Convenient airport branch for travelers seeking quick coffee and refreshments.',
      image: '/hero2.jpg',
      rating: 4.2,
      reviewCount: 120,
      distance: '5 km',
      popular: true,
      seating: {
        indoor: 25,
        outdoor: 5
      },
      special: 'Fast service for travelers'
    },
    {
      id: 'bole-medhanialem',
      name: 'London Cafe - Bole Medhanialem',
      address: 'Bole Medhanialem, Addis Ababa, Ethiopia',
      phone: '+251 11 661 2233',
      email: 'medhanialem@londoncafe.et',
      hours: {
        monday: '7:00 AM - 9:00 PM',
        tuesday: '7:00 AM - 9:00 PM',
        wednesday: '7:00 AM - 9:00 PM',
        thursday: '7:00 AM - 9:00 PM',
        friday: '7:00 AM - 10:00 PM',
        saturday: '8:00 AM - 10:00 PM',
        sunday: '8:00 AM - 8:00 PM'
      },
      coordinates: { lat: 8.9840, lng: 38.7940 },
      features: ['Coffee & Pastries', 'Takeaway', 'Free WiFi', 'Outdoor Seating'],
      description: 'Neighborhood favorite with a relaxing atmosphere, perfect for coffee breaks and casual meetings.',
      image: '/medhaniyalem.jpg',
      rating: 4.3,
      reviewCount: 140,
      distance: '1.2 km',
      popular: true,
      seating: {
        indoor: 30,
        outdoor: 12
      },
      special: 'Great for casual meetups and coffee breaks'
    }
  ];
  

const featureIcons: { [key: string]: any } = {
  'Free WiFi': Wifi,
  'Outdoor Seating': Users,
  'Power Outlets': Zap,
  'Takeaway': Coffee,
  'Vegan Options': Coffee,
  'Co-working Space': Users,
  'Live Music': Users,
  'Art Exhibitions': Users,
  'Student Discount': Users,
  'Gluten-Free Options': Coffee,
  'Weekend Brunch': Coffee,
  'Local Art': Users,
  'Specialty Brews': Coffee,
  'Weekend Workshops': Users,
  'Garden Seating': Users,
  'Family Friendly': Users,
  'Organic Options': Coffee,
  'Book Exchange': Users,
  'Weekend Markets': Users,
  'Alternative Vibes': Users,
  'Late Nights': Clock,
  'Luxury Interior': Star,
  'Premium Service': Star,
  'Afternoon Tea': Coffee,
  'Private Events': Users
}

export default function BranchesPage() {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFeature, setSelectedFeature] = useState('all')

  const allFeatures = Array.from(new Set(branches.flatMap(branch => branch.features)))
  
  const filteredBranches = branches.filter(branch =>
    branch.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedFeature === 'all' || branch.features.includes(selectedFeature))
  )

  const getDirectionsUrl = (branch: Branch) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates.lat},${branch.coordinates.lng}`
  }

  const getCurrentDay = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    return days[new Date().getDay()]
  }

  return (
    <div className="min-h-screen pt-5 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-primary">Branches</span>
          </h1>
          <p className="text-md text-gray-400 max-w-3xl mx-auto">
            Discover your perfect London Cafe experience across our six carefully designed locations. 
            Each branch offers unique ambiance, specialty brews, and the same commitment to exceptional coffee.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="card mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search branches by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="relative flex-1">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <select
                  value={selectedFeature}
                  onChange={(e) => setSelectedFeature(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary appearance-none"
                >
                  <option value="all">All Features</option>
                  {allFeatures.map(feature => (
                    <option key={feature} value={feature}>{feature}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Branches List */}
          <div className="lg:col-span-1 space-y-4">
            <div className="card">
              <h3 className="text-white font-semibold text-lg mb-4">
                Our Branches ({filteredBranches.length})
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredBranches.map((branch) => (
                  <div
                    key={branch.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 group ${
                      selectedBranch.id === branch.id
                        ? 'bg-primary bg-opacity-20 border-l-4 border-primary'
                        : 'bg-gray-800 hover:bg-gray-750'
                    }`}
                    onClick={() => setSelectedBranch(branch)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-semibold group-hover:text-primary transition-colors">
                        {branch.name}
                      </h4>
                      {branch.popular && (
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded">Popular</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
                      <MapPin className="h-3 w-3" />
                      <span className="truncate">{branch.distance}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{branch.rating}</span>
                        <span className="text-gray-400 text-sm">({branch.reviewCount})</span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {branch.seating.indoor + branch.seating.outdoor} seats
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Legend */}
            <div className="card">
              <h3 className="text-white font-semibold text-lg mb-4">Available Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {allFeatures.slice(0, 8).map(feature => {
                  const Icon = featureIcons[feature]
                  return (
                    <div key={feature} className="flex items-center space-x-2 p-2 bg-gray-800 rounded">
                      {Icon && <Icon className="h-3 w-3 text-primary" />}
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Selected Branch Details */}
          <div className="lg:col-span-3">
            <div className="card">
              {/* Branch Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <h2 className="text-3xl font-bold text-white">{selectedBranch.name}</h2>
                    {selectedBranch.popular && (
                      <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-lg">{selectedBranch.description}</p>
                </div>
                <div className="flex items-center space-x-2 mt-4 lg:mt-0">
                  <div className="flex items-center space-x-1 bg-primary bg-opacity-20 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{selectedBranch.rating}</span>
                    <span className="text-gray-400 text-sm">({selectedBranch.reviewCount})</span>
                  </div>
                </div>
              </div>

              {/* Branch Image and Key Info */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                  <div className="aspect-video bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-opacity-20" />
                    <img
    src={selectedBranch.image} // dynamic branch image
    alt={selectedBranch.name}
    className=" inset-0 w-full h-full object-cover"
  />
                    {/* <div className="relative z-10 text-center text-white">
                      <MapPin className="h-16 w-16 mx-auto mb-4 opacity-80" />
                      <p className="text-xl font-semibold">{selectedBranch.name} Branch</p>
                      <p className="text-sm opacity-80">High-quality ambiance and seating</p>
                    </div> */}
                    <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                      Featured Location
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Contact Info */}
                  <div className="bg-gray-800 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-gray-300 text-sm">{selectedBranch.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-gray-300 text-sm">{selectedBranch.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300 text-sm">
                          Today: {selectedBranch.hours[getCurrentDay() as keyof typeof selectedBranch.hours]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-2">
                    <a
                      href={getDirectionsUrl(selectedBranch)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary hover:bg-accent text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <Navigation className="h-4 w-4" />
                      <span>Get Directions</span>
                    </a>
                    <Link
                      href={`/reservations?branch=${selectedBranch.id}`}
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Reserve Table</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-white font-semibold text-xl mb-4">Features & Amenities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedBranch.features.map((feature) => {
                      const Icon = featureIcons[feature]
                      return (
                        <div
                          key={feature}
                          className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
                        >
                          {Icon && <Icon className="h-5 w-5 text-primary" />}
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Special Note */}
                  {selectedBranch.special && (
                    <div className="mt-6 p-4 bg-primary bg-opacity-20 border border-primary border-opacity-30 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-primary font-semibold">Special Feature</span>
                      </div>
                      <p className="text-white text-sm">{selectedBranch.special}</p>
                    </div>
                  )}
                </div>

                {/* Hours and Seating */}
                <div className="space-y-6">
                  {/* Opening Hours */}
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-4">Opening Hours</h3>
                    <div className="bg-gray-800 rounded-xl p-4">
                      {Object.entries(selectedBranch.hours).map(([day, hours]) => (
                        <div
                          key={day}
                          className={`flex justify-between py-2 ${
                            day === getCurrentDay()
                              ? 'text-primary font-semibold border-l-4 border-primary pl-3 -ml-1'
                              : 'text-gray-300'
                          }`}
                        >
                          <span className="capitalize">{day}</span>
                          <span>{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Seating Capacity */}
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-4">Seating Capacity</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800 rounded-xl p-4 text-center">
                        <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{selectedBranch.seating.indoor}</div>
                        <div className="text-gray-400 text-sm">Indoor Seats</div>
                      </div>
                      <div className="bg-gray-800 rounded-xl p-4 text-center">
                        <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{selectedBranch.seating.outdoor}</div>
                        <div className="text-gray-400 text-sm">Outdoor Seats</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-700">
                <Link
                  href={`/ordering?branch=${selectedBranch.id}`}
                  className="flex-1 bg-primary hover:bg-accent text-white font-semibold py-4 px-6 rounded-lg transition-colors text-center"
                >
                  Order from This Branch
                </Link>
                <Link
                  href={`/reservations?branch=${selectedBranch.id}`}
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-center"
                >
                  Reserve a Table
                </Link>
                <a
                  href={getDirectionsUrl(selectedBranch)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* All Branches Overview */}
            <div className="card mt-8">
              <h3 className="text-white font-semibold text-xl mb-6">All London Cafe Locations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {branches.map(branch => (
                  <div
                    key={branch.id}
                    className="bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition-colors cursor-pointer"
                    onClick={() => setSelectedBranch(branch)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold">{branch.name}</h4>
                      {branch.popular && (
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded">Popular</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
                      <MapPin className="h-3 w-3" />
                      <span>{branch.distance}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-white">{branch.rating}</span>
                      </div>
                      <span className="text-gray-400">{branch.seating.indoor + branch.seating.outdoor} seats</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Star icon component
// const Star = ({ className }: { className?: string }) => (
//   <svg className={className} viewBox="0 0 20 20" fill="currentColor">
//     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//   </svg>
// )