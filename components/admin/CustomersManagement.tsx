'use client'
import { useState, useEffect } from 'react'
import { Search, Mail, Phone, Calendar, Star, Award, Edit, Trash2, Eye, CircleX } from 'lucide-react'

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  joinDate: string
  totalOrders: number
  totalSpent: number
  loyaltyPoints: number
  tier: 'silver' | 'gold' | 'platinum'
  lastOrder: string
}

export default function CustomersManagement() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [tierFilter, setTierFilter] = useState('all')
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)

  useEffect(() => {
    setCustomers([
      {
        id: 'CUST-001',
        name: 'Emma Wilson',
        email: 'emma.wilson@email.com',
        phone: '+44 7123 456789',
        joinDate: '2023-05-15',
        totalOrders: 24,
        totalSpent: 286.50,
        loyaltyPoints: 1250,
        tier: 'gold',
        lastOrder: '2024-01-15'
      },
      {
        id: 'CUST-002',
        name: 'Michael Brown',
        email: 'michael.b@email.com',
        phone: '+44 7123 456790',
        joinDate: '2023-08-22',
        totalOrders: 12,
        totalSpent: 142.80,
        loyaltyPoints: 720,
        tier: 'silver',
        lastOrder: '2024-01-14'
      },
      {
        id: 'CUST-003',
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        phone: '+44 7123 456791',
        joinDate: '2023-11-05',
        totalOrders: 8,
        totalSpent: 95.20,
        loyaltyPoints: 480,
        tier: 'silver',
        lastOrder: '2024-01-13'
      }
    ])
  }, [])

  const filteredCustomers = customers.filter(customer =>
    (customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     customer.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (tierFilter === 'all' || customer.tier === tierFilter)
  )

  const getTierColor = (tier: Customer['tier']) => {
    switch (tier) {
      case 'silver': return 'text-gray-400 bg-gray-400 bg-opacity-20'
      case 'gold': return 'text-yellow-500 bg-yellow-500 bg-opacity-20'
      case 'platinum': return 'text-purple-500 bg-purple-500 bg-opacity-20'
    }
  }

  const getTierIcon = (tier: Customer['tier']) => {
    switch (tier) {
      case 'silver': return <Star className="h-4 w-4" />
      case 'gold': return <Award className="h-4 w-4" />
      case 'platinum': return <Award className="h-4 w-4" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Customers Management</h1>
          <p className="text-gray-400">Manage customer profiles and loyalty programs</p>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search customers by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
            />
          </div>
          <select
            value={tierFilter}
            onChange={(e) => setTierFilter(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
          >
            <option value="all">All Tiers</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
          </select>
        </div>
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="card bg-gray-800 p-4 border-gray-700 border rounded hover:shadow-lg transition-shadow">
            {/* Customer Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-white font-semibold text-lg">{customer.name}</h3>
                <p className="text-gray-400 text-sm">{customer.id}</p>
              </div>
              <div className={`px-3 py-1 text-primary rounded-full text-xs font-semibold flex items-center space-x-1 ${getTierColor(customer.tier)}`}>
                {getTierIcon(customer.tier)}
                <span className="capitalize">{customer.tier}</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300">{customer.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">{customer.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-gray-300">
                  Joined {new Date(customer.joinDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-800 rounded-lg">
              <div className="text-center">
                <p className="text-white font-bold">{customer.totalOrders}</p>
                <p className="text-gray-400 text-xs">Orders</p>
              </div>
              <div className="text-center">
                <p className="text-white font-bold">£{customer.totalSpent}</p>
                <p className="text-gray-400 text-xs">Spent</p>
              </div>
              <div className="text-center">
                <p className="text-white font-bold">{customer.loyaltyPoints}</p>
                <p className="text-gray-400 text-xs">Points</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedCustomer(customer)}
                className="flex-1 bg-primary rounded-lg flex items-center justify-center space-x-2 py-2"
              >
                <Eye className="h-4 w-4" />
                <span>View</span>
              </button>
              <button className="p-2 text-blue-400 hover:bg-blue-400 hover:bg-opacity-20 rounded-lg transition">
                <Edit className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Customer Detail Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-secondary rounded-xl p-6 w-full max-w-2xl bg-black">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Customer Details</h2>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="text-gray-400 hover:text-white"
              >
                <CircleX className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-gray-400 text-sm mb-2">Personal Information</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-400 text-xs">Full Name</p>
                      <p className="text-white font-semibold">{selectedCustomer.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Email</p>
                      <p className="text-white">{selectedCustomer.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Phone</p>
                      <p className="text-white">{selectedCustomer.phone}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-gray-400 text-sm mb-2">Loyalty Information</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-400 text-xs">Tier</p>
                      <div className={`px-3 py-1 text-primary rounded-full text-xs font-semibold flex items-center space-x-1 w-fit ${getTierColor(selectedCustomer.tier)}`}>
                        {getTierIcon(selectedCustomer.tier)}
                        <span className="capitalize">{selectedCustomer.tier}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Loyalty Points</p>
                      <p className="text-white font-semibold">{selectedCustomer.loyaltyPoints} points</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Member Since</p>
                      <p className="text-white">{new Date(selectedCustomer.joinDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Statistics */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-gray-400 text-sm mb-4">Order Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-white">{selectedCustomer.totalOrders}</p>
                    <p className="text-gray-400 text-sm">Total Orders</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-white">£{selectedCustomer.totalSpent}</p>
                    <p className="text-gray-400 text-sm">Total Spent</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-white">
                      £{(selectedCustomer.totalSpent / selectedCustomer.totalOrders).toFixed(2)}
                    </p>
                    <p className="text-gray-400 text-sm">Avg. Order</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-white">
                      {new Date(selectedCustomer.lastOrder).toLocaleDateString()}
                    </p>
                    <p className="text-gray-400 text-sm">Last Order</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-700">
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="btn-secondary"
                >
                  Close
                </button>
                <button className="btn-primary">
                  Send Promotion
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}