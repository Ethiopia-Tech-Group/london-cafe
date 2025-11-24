import Link from 'next/link'
import { 
  Coffee, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  Award
} from 'lucide-react'

export default function StickyFooter() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Our Menu', href: '/menu' },
    { name: 'Locations', href: '/branches' },
    { name: 'About Us', href: '/about' },
    { name: 'Rewards', href: '/rewards' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Branches', href: '/branches' },
  ]

  const customerService = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Delivery Info', href: '/delivery' },
    { name: 'Returns', href: '/returns' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Youtube, href: '#', name: 'YouTube' },
  ]

  const branches = [
    'Bole Branch',
    'Edna Mall Branch',
    'Bisrate Gabriel Branch',
    'Bole International Airport ',
    'Bole Medhanialem Branch',
    'Alem Cinema Branch',
  ];
  
  return (
    <footer className="bg-secondary border-t border-gray-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className=" p-2 rounded-lg">
                {/* <Coffee className="h-6 w-6 text-white" /> */}
                <img src='/logo.png'  className='w-10'/>
              </div>
              <div>
                <span className="text-xl font-bold text-white">London Cafe</span>
                <p className="text-gray-400 text-sm">Premium Coffee Experience</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
    Serving premium coffee and delicious treats across our 6 Addis Ababa locations. 
    Committed to quality, sustainability, and creating memorable experiences for every guest.
  </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+251 11 663 8115</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@londoncafe.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>Open Daily: 7:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          {/* <div>
            <h3 className="text-white font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3">
              {customerService.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Awards & Certifications */}
            {/* <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="h-4 w-4 text-yellow-500" />
                <span className="text-white text-sm font-semibold">Award Winning</span>
              </div>
              <p className="text-gray-400 text-xs">
                Best Coffee Shop in London 2023 • Sustainable Business Award
              </p>
            </div>
          </div>  */}

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Stay Connected</h3>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-3">
                Subscribe for exclusive offers and updates
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary"
                />
                <button className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Join
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-3">Follow Us</p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* App Download */}
            {/* <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-white text-sm font-semibold mb-2">Get Our App</p>
              <div className="flex space-x-2">
                <button className="flex-1 bg-black hover:bg-gray-900 text-white text-xs py-2 px-3 rounded transition-colors">
                  App Store
                </button>
                <button className="flex-1 bg-black hover:bg-gray-900 text-white text-xs py-2 px-3 rounded transition-colors">
                  Google Play
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Branches Grid */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-white font-semibold text-lg mb-4 text-center">Our London Locations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {branches.map((branch) => (
              <div key={branch} className="text-center group">
                <div className="bg-gray-800 rounded-lg p-3 group-hover:bg-gray-750 transition-colors">
                  <MapPin className="h-4 w-4 text-primary mx-auto mb-2" />
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {branch}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} London Cafe. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-primary transition-colors">
                Sitemap
              </Link>
              <div className="text-gray-400">
                Powered by Ethiopia Tech Group
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Order Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-primary text-white p-4 shadow-2xl">
        <div className="flex space-x-3">
          <Link 
            href="/ordering" 
            className="flex-1 bg-white text-gray-900 font-semibold py-3 px-4 rounded-lg text-center transition-colors hover:bg-gray-100"
          >
            Order Now
          </Link>
          <Link 
            href="/reservations" 
            className="flex-1 bg-transparent border-2 border-white text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors hover:bg-white hover:bg-opacity-10"
          >
            Reserve Table
          </Link>
        </div>
      </div>
    </footer>
  )
}