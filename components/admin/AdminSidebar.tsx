'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Coffee, 
  Users, 
  ShoppingBag, 
  Calendar,
  BarChart,
  Settings,
  Menu,
  X,
  Tag,
  MessageSquare,
  Award
} from 'lucide-react'

const menuItems = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/menu', icon: Coffee, label: 'Menu Management' },
  { href: '/admin/orders', icon: ShoppingBag, label: 'Orders' },
  { href: '/admin/reservations', icon: Calendar, label: 'Reservations' },
  { href: '/admin/customers', icon: Users, label: 'Customers' },
  { href: '/admin/promotions', icon: Tag, label: 'Promotions' },
  { href: '/admin/reviews', icon: MessageSquare, label: 'Reviews' },
  { href: '/admin/analytics', icon: BarChart, label: 'Analytics' },
  { href: '/admin/settings', icon: Settings, label: 'Settings' },
]

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-primary p-2 rounded-lg text-white"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-40
        w-64 bg-secondary border-r border-gray-700
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 transition-transform duration-300 ease-in-out
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center py-4  border-b border-gray-700 px-4">
            <div className="flex flex-col items-center space-x-2">
              {/* <Award className="h-6 w-6 text-primary" />
               */}
               <img src='/logo.png' className='w-14' alt='' />
              <h1 className="text-lg font-bold text-white">London Cafe Admin</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-2 text-sm rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">Admin User</p>
                <p className="text-gray-400 text-xs truncate">admin@londoncafe.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}