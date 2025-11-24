import Link from 'next/link'
import { Map, Coffee, Users, Calendar, Gift, FileText, Mail, Phone } from 'lucide-react'

const siteSections = [
  {
    title: "Main Navigation",
    icon: Map,
    pages: [
      { name: "Home", href: "/", description: "Welcome to London Cafe - Premium Ethiopian Coffee Experience" },
      { name: "About Us", href: "/about", description: "Our story, values, and commitment to Ethiopian coffee culture" },
      { name: "Menu", href: "/menu", description: "Explore our authentic Ethiopian coffee and food offerings" },
      { name: "Order Online", href: "/ordering", description: "Order your favorite drinks and food for pickup or delivery" },
    ]
  },
  {
    title: "Our Services",
    icon: Coffee,
    pages: [
      { name: "Branches", href: "/branches", description: "Find our 6 locations across Addis Ababa" },
      { name: "Table Reservations", href: "/reservations", description: "Book a table at your preferred branch" },
      { name: "Loyalty & Rewards", href: "/rewards", description: "Join our loyalty program and earn rewards" },
      { name: "Events & Promotions", href: "/events", description: "Upcoming events and special offers" },
    ]
  },
  {
    title: "Content & Information",
    icon: FileText,
    pages: [
      { name: "Blog", href: "/blog", description: "Coffee stories, recipes, and updates from London Cafe" },
      { name: "Contact Us", href: "/contact", description: "Get in touch with our team" },
      { name: "FAQ", href: "/faq", description: "Frequently asked questions" },
      { name: "Careers", href: "/careers", description: "Join the London Cafe team" },
    ]
  },
  {
    title: "Customer Service",
    icon: Users,
    pages: [
      { name: "Delivery Information", href: "/delivery", description: "Delivery areas, times, and fees" },
      { name: "Catering Services", href: "/catering", description: "Event catering and bulk orders" },
      { name: "Gift Cards", href: "/gift-cards", description: "Purchase and redeem gift cards" },
      { name: "Feedback", href: "/feedback", description: "Share your experience with us" },
    ]
  },
  {
    title: "Legal & Policies",
    icon: FileText,
    pages: [
      { name: "Privacy Policy", href: "/privacy", description: "How we protect and use your information" },
      { name: "Terms of Service", href: "/terms", description: "Terms and conditions for using our services" },
      { name: "Cookie Policy", href: "/cookies", description: "How we use cookies and tracking technologies" },
      { name: "Accessibility", href: "/accessibility", description: "Our commitment to accessibility" },
    ]
  },
  {
    title: "Additional Resources",
    icon: Gift,
    pages: [
      { name: "Coffee Ceremony", href: "/coffee-ceremony", description: "Traditional Ethiopian coffee ceremony experience" },
      { name: "Roastery Tours", href: "/roastery-tours", description: "Visit our coffee roastery" },
      { name: "Barista Training", href: "/barista-training", description: "Coffee preparation workshops" },
      { name: "Wholesale", href: "/wholesale", description: "Coffee beans and products for businesses" },
    ]
  }
]

const quickLinks = [
  { name: "Order Coffee Online", href: "/ordering", icon: Coffee },
  { name: "Find Nearest Branch", href: "/branches", icon: Map },
  { name: "Book a Table", href: "/reservations", icon: Calendar },
  { name: "Join Rewards", href: "/rewards", icon: Gift },
  { name: "Contact Support", href: "/contact", icon: Mail },
  { name: "View Full Menu", href: "/menu", icon: FileText },
]

export default function Sitemap() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary bg-opacity-20 p-4 rounded-2xl">
              <Map className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sitemap
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore all pages and services available on London Cafe website. 
            Find exactly what you're looking for with our comprehensive site navigation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-gray-800 hover:bg-gray-750 p-4 rounded-lg text-center group transition-colors"
              >
                <link.icon className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-white text-sm font-medium group-hover:text-primary transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Main Sitemap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {siteSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary bg-opacity-20 p-2 rounded-lg">
                  <section.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>

              <div className="space-y-4">
                {section.pages.map((page, pageIndex) => (
                  <Link
                    key={pageIndex}
                    href={page.href}
                    className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-semibold group-hover:text-primary transition-colors">
                        {page.name}
                      </h3>
                      <span className="text-gray-400 group-hover:text-primary transition-colors">→</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {page.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="card mt-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Need Help Finding Something?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-gray-400">support@londoncafeet.com</p>
              <p className="text-gray-400 text-sm mt-2">We typically respond within 2 hours</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-gray-400">+251 11 123 4567</p>
              <p className="text-gray-400 text-sm mt-2">Mon-Sun, 7:00 AM - 9:00 PM</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-8 border-t border-gray-700">
            <Link href="/contact" className="btn-primary text-center">
              Contact Us
            </Link>
            <Link href="/faq" className="btn-secondary text-center">
              Visit FAQ
            </Link>
          </div>
        </div>

        {/* SEO Information */}
        <div className="card mt-8 bg-gradient-to-r from-primary to-accent text-white">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Website Last Updated</h3>
            <p className="text-white text-opacity-90">
              This sitemap was last updated on December 15, 2024. 
              We regularly update our website with new content and features.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-white text-opacity-80 text-sm">
              <span>• 45+ Pages</span>
              <span>• 6 Cafe Locations</span>
              <span>• 50+ Menu Items</span>
              <span>• Mobile Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}