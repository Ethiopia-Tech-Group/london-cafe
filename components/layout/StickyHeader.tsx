'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Coffee, 
  Menu, 
  X, 
  ShoppingBag, 
  User, 
  Search,
  Phone,
  MapPin
} from 'lucide-react'

export default function StickyHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    // { name: 'Order Online', href: '/ordering' },
    { name: 'Branches', href: '/branches' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Rewards', href: '/rewards' },
    { name: 'Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span className="hidden sm:inline">+251 11 663 8115</span>
                <span className="sm:hidden">Call Us</span>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>6 Locations Across Ethiopia</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
              <span className="hidden sm:inline">Open 7AM - 9PM Daily</span>
              <Link href="/rewards" className="hover:text-gray-200 transition hidden lg:inline">
                Loyalty Rewards
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className={`fixed  left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background shadow-2xl top-0 border-b border-gray-800' 
          : 'bg-transparent top-10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-12 sm:h-14 lg:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div >
                {/* <Coffee className="h-6 w-6 text-white" /> */}
                <img src='/logo.png' className='w-8 sm:w-10' />
              </div>
              <div>
                <span className={`text-base sm:text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}>
                  London Cafe
                </span>
                {!isScrolled && (
                  <p className="hidden sm:block text-xs text-gray-300">Premium Coffee Experience</p>
                )}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive(item.href)
                      ? 'text-primary bg-primary bg-opacity-20'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-1 sm:space-x-2 ">
              {/* Shopping Cart */}
              <Link 
                href="/cart" 
                className={`relative p-1.5 sm:p-2 rounded-lg transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] sm:text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  3
                </span>
              </Link>

              {/* Order Now Button */}
              {/* <Link 
                href="/ordering" 
                className={`px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-[11px] sm:text-xs lg:text-sm transition-all duration-200 ${
                  isScrolled
                    ? 'bg-primary hover:bg-accent text-white'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Order Now
              </Link> */}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-1.5 sm:p-2 rounded-lg transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-gray-800 border-t border-gray-800 shadow-2xl">
            <div className="px-4 py-4 ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary  bg-primary bg-opacity-20 border-l-4 border-primary'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-gray-800 space-y-3">
                <Link
                  href="/ordering"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-primary hover:bg-accent text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Order Online
                </Link>
                <Link
                  href="/reservations"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-gray-800 hover:bg-gray-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Reserve Table
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}