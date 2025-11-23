'use client'
import { useState, useEffect } from 'react'
import { 
  Users, 
  ShoppingBag, 
  Calendar, 
  TrendingUp,
  Coffee,
  Star,
  MessageSquare,
  DollarSign
} from 'lucide-react'

interface Stats {
  totalOrders: number
  totalRevenue: number
  activeCustomers: number
  pendingReservations: number
  newReviews: number
  popularItems: Array<{ name: string; count: number }>
  revenueData: Array<{ month: string; revenue: number }>
}

export default function DashboardContent() {
  const [stats, setStats] = useState<Stats>({
    totalOrders: 0,
    totalRevenue: 0,
    activeCustomers: 0,
    pendingReservations: 0,
    newReviews: 0,
    popularItems: [],
    revenueData: []
  })

  useEffect(() => {
    const fetchStats = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStats({
        totalOrders: 1247,
        totalRevenue: 45890,
        activeCustomers: 892,
        pendingReservations: 23,
        newReviews: 15,
        popularItems: [
          { name: 'Flat White', count: 342 },
          { name: 'Avocado Toast', count: 287 },
          { name: 'Cappuccino', count: 265 },
          { name: 'Chocolate Croissant', count: 198 }
        ],
        revenueData: [
          { month: 'Jan', revenue: 12500 },
          { month: 'Feb', revenue: 13200 },
          { month: 'Mar', revenue: 14100 },
          { month: 'Apr', revenue: 15800 },
          { month: 'May', revenue: 14900 },
          { month: 'Jun', revenue: 16200 }
        ]
      })
    }

    fetchStats()
  }, [])

  const statCards = [
    {
      title: 'Total Orders',
      value: stats.totalOrders.toLocaleString(),
      icon: ShoppingBag,
      color: 'text-blue-500',
      change: '+12%',
      description: 'This month'
    },
    {
      title: 'Total Revenue',
      value: `£${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-green-500',
      change: '+8%',
      description: 'This month'
    },
    {
      title: 'Active Customers',
      value: stats.activeCustomers.toLocaleString(),
      icon: Users,
      color: 'text-purple-500',
      change: '+5%',
      description: 'Registered users'
    },
    {
      title: 'Pending Reservations',
      value: stats.pendingReservations,
      icon: Calendar,
      color: 'text-orange-500',
      change: '+3',
      description: 'Need confirmation'
    },
    {
      title: 'New Reviews',
      value: stats.newReviews,
      icon: MessageSquare,
      color: 'text-yellow-500',
      change: '+7',
      description: 'This week'
    }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
          <p className="text-gray-400">Welcome back, here's what's happening today</p>
        </div>
        <div className="text-gray-400 text-sm">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                  <span className="text-gray-400 text-xs">{stat.description}</span>
                </div>
              </div>
              <div className={`p-3 rounded-full bg-opacity-20 ${stat.color.replace('text', 'bg')}`}>
                <stat.icon className={`h-6 w-6 text-white`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Popular Items */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="xl:col-span-2 card">
          <h2 className="text-xl font-semibold text-white mb-6">Revenue Overview</h2>
          <div className="space-y-4">
            {stats.revenueData.map((item, index) => (
              <div key={index} className="flex items-center justify-between space-x-4">
                <span className="text-gray-300 font-medium">{item.month}</span>
                <div className="flex items-center space-x-4 flex-1 ">
                  <div className="flex-1 bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(item.revenue / 20000) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-semibold w-20 text-right">
                    £{item.revenue.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Items */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Popular Items</h2>
          <div className="space-y-4">
            {stats.popularItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Coffee className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-gray-400 text-sm">{item.count} orders</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-yellow-500 text-sm font-medium">
                    {Math.round((item.count / stats.totalOrders) * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { action: 'New order #1248', time: '2 min ago', type: 'order', branch: 'Covent Garden' },
            { action: 'Table reservation', time: '15 min ago', type: 'reservation', branch: 'Soho' },
            { action: 'New customer registered', time: '1 hour ago', type: 'customer', branch: 'All' },
            { action: 'Menu item updated', time: '2 hours ago', type: 'menu', branch: 'All' }
          ].map((activity, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-sm font-medium">{activity.action}</span>
                <span className="text-primary text-xs bg-primary bg-opacity-20 px-2 py-1 rounded">
                  {activity.branch}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">{activity.time}</span>
                <span className={`text-xs px-2 py-1 rounded ${
                  activity.type === 'order' ? 'bg-blue-500 bg-opacity-20 text-white' :
                  activity.type === 'reservation' ? 'bg-green-500 bg-opacity-20 text-white' :
                  activity.type === 'customer' ? 'bg-purple-500 bg-opacity-20 text-white' :
                  'bg-orange-500 bg-opacity-20 text-white'
                }`}>
                  {activity.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}