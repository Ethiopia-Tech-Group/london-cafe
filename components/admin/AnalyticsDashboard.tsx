'use client'
import { useState, useEffect } from 'react'
import { TrendingUp, Users, ShoppingBag, DollarSign, Coffee, Calendar, Star, ArrowUp, ArrowDown } from 'lucide-react'

interface AnalyticsData {
  revenue: {
    current: number
    previous: number
    trend: 'up' | 'down'
    change: number
  }
  orders: {
    current: number
    previous: number
    trend: 'up' | 'down'
    change: number
  }
  customers: {
    current: number
    previous: number
    trend: 'up' | 'down'
    change: number
  }
  averageOrder: {
    current: number
    previous: number
    trend: 'up' | 'down'
    change: number
  }
  popularItems: Array<{
    name: string
    orders: number
    revenue: number
    growth: number
  }>
  branchPerformance: Array<{
    branch: string
    revenue: number
    orders: number
    growth: number
  }>
  hourlySales: Array<{
    hour: string
    sales: number
    orders: number
  }>
}

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter'>('month')
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    revenue: { current: 0, previous: 0, trend: 'up', change: 0 },
    orders: { current: 0, previous: 0, trend: 'up', change: 0 },
    customers: { current: 0, previous: 0, trend: 'up', change: 0 },
    averageOrder: { current: 0, previous: 0, trend: 'up', change: 0 },
    popularItems: [],
    branchPerformance: [],
    hourlySales: []
  })

  useEffect(() => {
    const fetchAnalytics = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setAnalytics({
        revenue: {
          current: 45890,
          previous: 42480,
          trend: 'up',
          change: 8.02
        },
        orders: {
          current: 1247,
          previous: 1113,
          trend: 'up',
          change: 12.04
        },
        customers: {
          current: 892,
          previous: 849,
          trend: 'up',
          change: 5.06
        },
        averageOrder: {
          current: 36.82,
          previous: 38.17,
          trend: 'down',
          change: -3.54
        },
        popularItems: [
          { name: 'Flat White', orders: 342, revenue: 1197, growth: 12 },
          { name: 'Avocado Toast', orders: 287, revenue: 2439.5, growth: 8 },
          { name: 'Cappuccino', orders: 265, revenue: 848, growth: 15 },
          { name: 'Chocolate Croissant', orders: 198, revenue: 752.4, growth: 6 }
        ],
        branchPerformance: [
          { branch: 'Covent Garden', revenue: 15680, orders: 432, growth: 12 },
          { branch: 'Soho', revenue: 14230, orders: 398, growth: 8 },
          { branch: 'Shoreditch', revenue: 9870, orders: 275, growth: 15 },
          { branch: 'Notting Hill', revenue: 6110, orders: 142, growth: 5 }
        ],
        hourlySales: [
          { hour: '7 AM', sales: 420, orders: 15 },
          { hour: '8 AM', sales: 1280, orders: 42 },
          { hour: '9 AM', sales: 2150, orders: 68 },
          { hour: '10 AM', sales: 1890, orders: 59 },
          { hour: '11 AM', sales: 1670, orders: 52 },
          { hour: '12 PM', sales: 2430, orders: 76 },
          { hour: '1 PM', sales: 2980, orders: 93 },
          { hour: '2 PM', sales: 1870, orders: 58 },
          { hour: '3 PM', sales: 1640, orders: 51 },
          { hour: '4 PM', sales: 1980, orders: 62 },
          { hour: '5 PM', sales: 2230, orders: 70 },
          { hour: '6 PM', sales: 1890, orders: 59 }
        ]
      })
    }

    fetchAnalytics()
  }, [timeRange])

  const statCards = [
    {
      title: 'Total Revenue',
      value: `Br ${analytics.revenue.current.toLocaleString()}`,
      icon: DollarSign,
      change: analytics.revenue.change,
      trend: analytics.revenue.trend,
      description: `vs previous ${timeRange}`
    },
    {
      title: 'Total Orders',
      value: analytics.orders.current.toLocaleString(),
      icon: ShoppingBag,
      change: analytics.orders.change,
      trend: analytics.orders.trend,
      description: `vs previous ${timeRange}`
    },
    {
      title: 'Active Customers',
      value: analytics.customers.current.toLocaleString(),
      icon: Users,
      change: analytics.customers.change,
      trend: analytics.customers.trend,
      description: `vs previous ${timeRange}`
    },
    {
      title: 'Average Order',
      value: `Br ${analytics.averageOrder.current.toFixed(2)}`,
      icon: TrendingUp,
      change: analytics.averageOrder.change,
      trend: analytics.averageOrder.trend,
      description: `vs previous ${timeRange}`
    }
  ]

  const maxHourlySales = Math.max(...analytics.hourlySales.map(h => h.sales))

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
          <p className="text-gray-400">Business performance and insights</p>
        </div>
        <div className="flex space-x-2">
          {(['week', 'month', 'quarter'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg transition ${
                timeRange === range
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <div className="flex items-center space-x-2 mt-2">
                  {stat.trend === 'up' ? (
                    <ArrowUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500" />
                  )}
                  <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                    {stat.change > 0 ? '+' : ''}{stat.change}%
                  </span>
                  <span className="text-gray-400 text-xs">{stat.description}</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-primary bg-opacity-20">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Popular Items */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Hourly Sales */}
        <div className="xl:col-span-2 card">
          <h2 className="text-xl font-semibold text-white mb-6">Hourly Sales Performance</h2>
          <div className="space-y-4">
            {analytics.hourlySales.map((hour) => (
              <div key={hour.hour} className="flex items-center space-x-4">
                <span className="text-gray-300 w-16 text-sm">{hour.hour}</span>
                <div className="flex-1 flex items-center space-x-4">
                  <div className="flex-1 bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(hour.sales / maxHourlySales) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-right w-32">
                    <span className="text-white font-semibold">Br {hour.sales}</span>
                    <span className="text-gray-400 text-sm ml-2">({hour.orders} orders)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Items */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Popular Items</h2>
          <div className="space-y-4">
            {analytics.popularItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Coffee className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-gray-400 text-sm">{item.orders} orders</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">Br {item.revenue}</p>
                  <div className="flex items-center space-x-1 text-green-500 text-sm">
                    <ArrowUp className="h-3 w-3" />
                    <span>+{item.growth}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Branch Performance */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">Branch Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analytics.branchPerformance.map((branch, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">{branch.branch}</h3>
                <div className="flex items-center space-x-1 text-green-500 text-sm">
                  <ArrowUp className="h-3 w-3" />
                  <span>+{branch.growth}%</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Revenue</span>
                  <span className="text-white font-semibold">Br {branch.revenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Orders</span>
                  <span className="text-white">{branch.orders}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Avg. Order</span>
                  <span className="text-white">
                    Br {(branch.revenue / branch.orders).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Satisfaction */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Customer Satisfaction</h2>
          <div className="space-y-4">
            {[
              { rating: 5, count: 234, percentage: 68 },
              { rating: 4, count: 89, percentage: 26 },
              { rating: 3, count: 12, percentage: 4 },
              { rating: 2, count: 5, percentage: 1 },
              { rating: 1, count: 3, percentage: 1 }
            ].map((item) => (
              <div key={item.rating} className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 w-16">
                  {[1,2,3,4,5].map((star) => (
                    <Star
                      key={star}
                      className={`h-3 w-3 ${
                        star <= item.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex-1 bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-yellow-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="text-right w-20">
                  <span className="text-white text-sm">{item.percentage}%</span>
                  <span className="text-gray-400 text-xs ml-1">({item.count})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'New high score: Br 3,240 in hourly sales', time: '1 PM', type: 'revenue' },
              { action: 'Best performing item: Flat White', time: 'Today', type: 'menu' },
              { action: 'Covent Garden reached daily target', time: '12 PM', type: 'branch' },
              { action: '25 new customer registrations', time: 'Today', type: 'customers' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div>
                  <p className="text-white text-sm">{activity.action}</p>
                  <p className="text-gray-400 text-xs">{activity.time}</p>
                </div>
                <div className={`p-2 rounded ${
                  activity.type === 'revenue' ? 'bg-green-500  bg-opacity-20' :
                  activity.type === 'menu' ? 'bg-blue-500 bg-opacity-20' :
                  activity.type === 'branch' ? 'bg-purple-500 bg-opacity-20' :
                  'bg-orange-500 bg-opacity-20'
                }`}>
                  {activity.type === 'revenue' && <DollarSign className="h-4 w-4  text-white" />}
                  {activity.type === 'menu' && <Coffee className="h-4 w-4 text-primary" />}
                  {activity.type === 'branch' && <TrendingUp className="h-4 w-4 text-white" />}
                  {activity.type === 'customers' && <Users className="h-4 w-4 text-white" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}