'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Coffee, Clock, MapPin, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const heroSlides = [
  {
    id: 1,
    image: '/hero2.jpg',
    title: 'Artisan Coffee',
    subtitle: 'Handcrafted with passion, served with excellence',
    description: 'Experience the finest single-origin beans from sustainable farms around the world'
  },
  {
    id: 2,
    image: '/hero.webp',
    title: 'Fresh Pastries',
    subtitle: 'Baked fresh daily in-house',
    description: 'Our master bakers create delightful pastries that perfectly complement your coffee'
  },
  {
    id: 3,
    image: '/bisrate-gebreal.jpg',
    title: 'Perfect Ambiance',
    subtitle: 'Your ideal workspace or meeting spot',
    description: 'Designed for comfort with free WiFi and power outlets at every table'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
  <div
    key={slide.id}
    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
      index === currentSlide ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${slide.image}')`,
      }}
    />
    
    {/* Transparent overlay */}
    <div className="absolute inset-0 bg-black/60" />
  </div>
))}


      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10  bg-primary  bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-70'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo/Brand */}
          <div className="flex justify-center mb-6">
            <div className="bg-primary bg-opacity-20 backdrop-blur-sm rounded-full p-4 border border-white border-opacity-30">
              <Coffee className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl py-4 font-bold text-white mb-4 sm:mb-6">
            {/* London <span className="text-primary">Cafe</span> */}
          </h1>

          {/* Slide Content */}
          <div className="max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              {heroSlides[currentSlide].title}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-2 sm:mb-3">
              {heroSlides[currentSlide].subtitle}
            </p>
            <p className="text-base sm:text-lg text-gray-200">
              {heroSlides[currentSlide].description}
            </p>
          </div>

          {/* Info Badges */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <div className="flex items-center justify-center text-white bg-primary bg-opacity-20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white border-opacity-30 text-sm sm:text-base">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
              <span className="text-xs sm:text-base">Open 7AM - 9PM Daily</span>
            </div>
            <div className="flex items-center justify-center text-white bg-primary bg-opacity-20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white border-opacity-30 text-sm sm:text-base">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
              <span className="text-xs sm:text-base">6 Locations Across Ethiopia</span>
            </div>
            <div className="flex items-center justify-center text-white bg-primary bg-opacity-20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white border-opacity-30 text-sm sm:text-base">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
              <span className="text-xs sm:text-base">Rated 4.8/5 by Customers</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link 
              href="/menu" 
              className="bg-primary hover:bg-accent text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Order Online</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </Link>
            <Link 
              href="/reservations" 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-gray-600 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white border-opacity-30 flex items-center justify-center space-x-2"
            >
              <span>Reserve Table</span>
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white bg-opacity-50 rounded-full mt-2" />
            </div>
          </div> */}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}