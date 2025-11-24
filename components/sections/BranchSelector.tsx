'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Clock, Wifi, Coffee, Users, Car, Zap, ChevronDown, ChevronUp } from 'lucide-react'

const branches = [
    {
        id: '1',
        name: 'London Cafe - Bole Road',
        address: 'Bole Road, Addis Ababa, Ethiopia',
        phone: '+251 11 663 8115',
        hours: '7:00 AM - 10:00 PM',
        image: '/hero2.jpg',
        features: ['Coffee & Beverages', 'Outdoor Seating', 'Takeaway', 'Free WiFi'],
        distance: '0.5 km',
        rating: 4.5,
        popular: true
    },

    {
        id: '3',
        name: 'London Cafe - Bisrate Gabriel',
        address: 'South Africa Street, Bisrate Gabriel, Addis Ababa, Ethiopia',
        phone: '+251 96 957 1106',
        hours: '7:30 AM - 9:00 PM',
        image: '/bisrate-gebreal.jpg',
        features: ['Coffee & Breakfast', 'Takeaway', 'Free WiFi', 'Local Pastries'],
        distance: '2 km',
        rating: 4.3,
        popular: true
    },
    {
        id: '4',
        name: 'London Cafe - Bole International Airport',
        address: 'Bole International Airport, Addis Ababa, Ethiopia',
        phone: '+251 11 665 4321',
        hours: '6:00 AM - 11:00 PM',
        image: '/hero2.jpg',
        features: ['Coffee & Beverages', 'Takeaway', 'Free WiFi', 'Quick Service'],
        distance: '5 km',
        rating: 4.2,
        popular: true
    },
    {
        id: '5',
        name: 'London Cafe - Bole Medhanialem',
        address: 'Bole Medhanialem, Addis Ababa, Ethiopia',
        phone: '+251 11 661 2233',
        hours: '7:00 AM - 9:00 PM',
        image: '/medhaniyalem.jpg',
        features: ['Coffee & Pastries', 'Takeaway', 'Free WiFi', 'Outdoor Seating'],
        distance: '1.2 km',
        rating: 4.3,
        popular: true
    }
];


const featureIcons: { [key: string]: any } = {
    'Free WiFi': Wifi,
    'Outdoor Seating': Users,
    'Takeaway': Coffee,
    'Power Outlets': Zap,
    'Live Music': Users,
    'Art Exhibitions': Users,
    'Vegan Options': Coffee,
    'Student Discount': Users,
    'Co-working Space': Users,
    'Local Art': Users,
    'Specialty Brews': Coffee,
    'Weekend Brunch': Coffee
}

export default function BranchSelector() {
    const [selectedBranch, setSelectedBranch] = useState(branches[0])
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("hero.webp")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-primary">Popular Locations</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
                        Discover your perfect spot across our six carefully designed cafes in Addis Ababa
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Branch List */}
                    <div className="lg:col-span-1">
                        {/* Mobile Toggle Button */}
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="lg:hidden w-full mb-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-between"
                        >
                            <span className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>View All Branches ({branches.length})</span>
                            </span>
                            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </button>

                        {/* Branch List - Collapsible on mobile */}
                        <div className={`space-y-4 sm:space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
                        {branches.map((branch) => (
                            <div
                                key={branch.id}
                                className={`card cursor-pointer transition-all duration-500 group hover:scale-105 p-4 sm:p-6 ${selectedBranch.id === branch.id
                                        ? 'border-primary border p-2 rounded-lg shadow-primary shadow-2xl transform scale-105'
                                        : 'hover:border-gray-600'
                                    }`}
                                onClick={() => setSelectedBranch(branch)}
                            >
                                {branch.popular && (
                                    <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                        Popular
                                    </div>
                                )}

                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-white font-bold text-lg sm:text-xl group-hover:text-primary transition-colors">
                                        {branch.name}
                                    </h3>
                                    <div className="flex items-center space-x-1 bg-primary bg-opacity-20 px-2 py-1 rounded flex-shrink-0">
                                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                        <span className="text-white text-xs sm:text-sm">{branch.rating}</span>
                                    </div>
                                </div>

                                <div className="space-y-2 mb-3 sm:mb-4">
                                    <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                                        <span className="line-clamp-1">{branch.address}</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                                        <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                                        <span>{branch.phone}</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                                        <span>{branch.hours}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {branch.features.slice(0, 2).map((feature) => {
                                        const Icon = featureIcons[feature]
                                        return (
                                            <span
                                                key={feature}
                                                className="flex items-center space-x-1 px-2 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded"
                                            >
                                                {Icon && <Icon className="h-3 w-3" />}
                                                <span>{feature}</span>
                                            </span>
                                        )
                                    })}
                                    {branch.features.length > 2 && (
                                        <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded">
                                            +{branch.features.length - 2} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>

                    {/* Selected Branch Details */}
                    <div className="lg:col-span-2">
                        <div className="card group hover:shadow-2xl transition-all duration-500 p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                                <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedBranch.name}</h3>
                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <span className="text-gray-400 text-xs sm:text-sm">{selectedBranch.distance}</span>
                                    <div className="flex items-center space-x-1 bg-primary bg-opacity-20 px-2 sm:px-3 py-1 rounded-full">
                                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                                        <span className="text-white font-semibold text-sm sm:text-base">{selectedBranch.rating}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Branch Image */}
                            <div className="aspect-video bg-gradient-to-br from-primary to-accent rounded-2xl mb-4 sm:mb-6 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0  bg-opacity-20" />
                                <img
                                    src={selectedBranch.image} // dynamic branch image
                                    alt={selectedBranch.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="relative z-10 text-center text-white">
                                    <MapPin className="h-16 w-16 mx-auto mb-4 opacity-80" />
                                    <p className="text-xl font-semibold">Branch Preview</p>
                                    <p className="text-sm opacity-80">High-quality ambiance and seating</p>
                                </div>
                                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                                    Featured Location
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <div>
                                    <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Branch Information</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <Clock className="h-5 w-5 text-primary" />
                                                <span className="text-white">Opening Hours</span>
                                            </div>
                                            <span className="text-gray-300">{selectedBranch.hours}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <Phone className="h-5 w-5 text-primary" />
                                                <span className="text-white">Contact</span>
                                            </div>
                                            <span className="text-gray-300">{selectedBranch.phone}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <Car className="h-5 w-5 text-primary" />
                                                <span className="text-white">Distance</span>
                                            </div>
                                            <span className="text-gray-300">{selectedBranch.distance}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Features & Amenities</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                        {selectedBranch.features.map((feature) => {
                                            const Icon = featureIcons[feature]
                                            return (
                                                <div
                                                    key={feature}
                                                    className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
                                                >
                                                    {Icon && <Icon className="h-4 w-4 text-primary" />}
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
                                <Link
                                    href={`/branches?branch=${selectedBranch.id}`}
                                    className="flex-1 rounded-lg bg-primary text-center py-3"
                                >
                                    View Full Details
                                </Link>
                                <Link
                                    href="/reservations"
                                    className="flex-1 bg-gray-800 rounded-lg text-center py-3"
                                >
                                    Reserve Table
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/branches"
            className="inline-flex border border-primary p-2 sm:p-3 px-4 sm:px-5 rounded-xl items-center space-x-2 text-[#8D7A5D] hover:text-accent font-semibold transition-colors text-sm sm:text-base"
          >
            <span>View All Branches</span>
            <span>→</span>
          </Link>
        </div>
            </div>
        </section>
    )
}

// Star icon component
const Star = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
)