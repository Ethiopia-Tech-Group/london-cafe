'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Star, Clock, Zap, Gift, Coffee, Timer } from 'lucide-react'

const offers = [
  {
    id: 1,
    title: 'Morning Bliss',
    description: 'Any coffee + pastry combo',
    discount: '20% OFF',
    originalPrice: '£8.00',
    newPrice: '£6.40',
    time: '7AM - 11AM',
    color: 'from-orange-500 to-red-500',
    icon: Coffee,
    popular: true,
    items: ['Any Coffee', 'Fresh Pastry'],
    timeLeft: '2 hours left'
  },
  {
    id: 2,
    title: 'Happy Hour',
    description: 'All iced beverages',
    discount: 'BUY 1 GET 1',
    originalPrice: '',
    newPrice: 'FREE',
    time: '2PM - 5PM',
    color: 'from-blue-500 to-purple-600',
    icon: Zap,
    popular: false,
    items: ['Iced Coffee', 'Cold Brew', 'Iced Tea'],
    timeLeft: '5 hours left'
  },
  {
    id: 3,
    title: 'Student Special',
    description: 'Show your student ID',
    discount: '15% OFF',
    originalPrice: '',
    newPrice: '',
    time: 'All Day',
    color: 'from-green-500 to-teal-500',
    icon: Gift,
    popular: true,
    items: ['All Items', 'Student ID Required'],
    timeLeft: 'Today only'
  }
]

export default function TodaysOffers() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute
    return () => clearInterval(timer)
  }, [])

  const isOfferActive = (offerTime: string) => {
    if (!offerTime || !offerTime.includes(" - ")) return false;
  
    const [start, end] = offerTime.split(" - ");
    if (!start || !end) return false;
  
    // Get hour (handles: "9AM", "9:00 AM", "09 PM", etc.)
    const parseHour = (time: string) => {
      let clean = time.replace(/\s+/g, ""); // remove spaces
      clean = clean.replace(/AM|PM/i, match => ` ${match.toUpperCase()}`); // ensure space before AM/PM
  
      const [hourStr] = clean.split(" ")[0].split(":");
      let hour = parseInt(hourStr);
  
      const isPM = clean.toUpperCase().includes("PM");
      const isAM = clean.toUpperCase().includes("AM");
  
      // Convert to 24-hour format
      if (isPM && hour !== 12) hour += 12;
      if (isAM && hour === 12) hour = 0;
  
      return hour;
    };
  
    const startHourNum = parseHour(start);
    const endHourNum = parseHour(end);
  
    const currentHour = new Date().getHours();
  
    return currentHour >= startHourNum && currentHour < endHourNum;
  };
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-secondary to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("/hero2.jpg")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary bg-opacity-20 text-primary px-4 sm:px-6 py-2 rounded-full mb-4">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-semibold text-sm sm:text-base">Limited Time Offers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Today's <span className="text-primary">Special Deals</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Don't miss out on these exclusive offers available for a limited time only
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {offers.map((offer) => {
            const isActive = isOfferActive(offer.time)
            const Icon = offer.icon
            
            return (
              <div
                key={offer.id}
                className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${
                  isActive ? 'animate-pulse-slow' : 'opacity-80'
                }`}
              >
                {/* Popular Badge */}
                {offer.popular && (
                  <div className="absolute -top-3 -right-3 z-20 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Main Card */}
                <div className={`bg-gradient-to-br ${offer.color} rounded-3xl p-6 sm:p-8 text-black relative overflow-hidden h-full`}>
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -ml-12 -mb-12"></div>

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="bg-black bg-opacity-20 p-2 rounded-xl">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold">{offer.title}</h3>
                          <p className="text-black text-opacity-80 text-sm sm:text-base">{offer.description}</p>
                        </div>
                      </div>
                      {isActive && (
                        <div className="flex items-center space-x-1 bg-white bg-opacity-20 px-2 py-1 rounded">
                          <Timer className="h-3 w-3" />
                          <span className="text-xs">LIVE</span>
                        </div>
                      )}
                    </div>

                    {/* Discount Badge */}
                    <div className="mb-4 sm:mb-6">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 text-center border border-white border-opacity-30">
                        <span className="text-2xl sm:text-3xl font-bold block mb-1">{offer.discount}</span>
                        {offer.originalPrice && (
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-sm line-through opacity-70">{offer.originalPrice}</span>
                            <span className="text-lg font-bold">{offer.newPrice}</span>
                          </div>
                        )}
                        {!offer.originalPrice && offer.newPrice && (
                          <span className="text-lg font-bold">{offer.newPrice}</span>
                        )}
                      </div>
                    </div>

                    {/* Items Included */}
                    <div className="mb-4 sm:mb-6 flex-1">
                      <p className="text-black text-opacity-80 text-xs sm:text-sm mb-2 sm:mb-3">Includes:</p>
                      <div className="space-y-2">
                        {offer.items.map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white border-opacity-20">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{offer.time}</span>
                      </div>
                      <div className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">
                        {offer.timeLeft}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-3xl"></div>
                </div>

                {/* Order Button */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <Link
                    href="/menu"
                    className="bg-white text-gray-900 font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
                  >
                    <span>Order Now</span>
                    <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Offers */}
        {/* <div className="text-center mt-12">
          <Link
            href="/offers"
            className="inline-flex items-center space-x-2 text-primary hover:text-accent font-semibold text-lg transition-colors"
          >
            <span>View All Ongoing Offers</span>
            <span>→</span>
          </Link>
        </div> */}
      </div>
    </section>
  )
}