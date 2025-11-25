'use client'
import { useState, useEffect } from 'react'
import { Search, Filter, Eye, Truck, CheckCircle, Clock, XCircle } from 'lucide-react'

interface Order {
  id: string
  customerName: string
  customerEmail: string
  items: OrderItem[]
  total: number
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled'
  branch: string
  type: 'pickup' | 'dine-in'
  createdAt: string
  estimatedReady: string
}

interface OrderItem {
  name: string
  quantity: number
  price: number
}

export default function OrdersManagement() {
  const [orders, setOrders] = useState<Order[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  useEffect(() => {
    setOrders([
      {
        id: 'ORD-001',
        customerName: 'John Smith',
        customerEmail: 'john.smith@email.com',
        items: [
          { name: 'Flat White', quantity: 2, price: 3.50 },
          { name: 'Chocolate Croissant', quantity: 1, price: 3.80 }
        ],
        total: 10.80,
        status: 'preparing',
        branch: 'Covent Garden',
        type: 'pickup',
        createdAt: '2024-01-15T10:30:00Z',
        estimatedReady: '2024-01-15T10:45:00Z'
      },
      {
        id: 'ORD-002',
        customerName: 'Sarah Johnson',
        customerEmail: 'sarah.j@email.com',
        items: [
          { name: 'Cappuccino', quantity: 1, price: 3.20 },
          { name: 'Avocado Toast', quantity: 1, price: 8.50 }
        ],
        total: 11.70,
        status: 'ready',
        branch: 'Soho',
        type: 'dine-in',
        createdAt: '2024-01-15T09:15:00Z',
        estimatedReady: '2024-01-15T09:30:00Z'
      }
    ])
  }, [])

  const filteredOrders = orders.filter(order => 
    (order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
     order.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === 'all' || order.status === statusFilter)
  )

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4 text-white" />
      case 'preparing': return <Truck className="h-4 w-4 text-white" />
      case 'ready': return <CheckCircle className="h-4 w-4 text-white" />
      case 'completed': return <CheckCircle className="h-4 w-4 text-white" />
      case 'cancelled': return <XCircle className="h-4 w-4 text-white" />
    }
  }

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500 bg-opacity-20 text-yellow-400'
      case 'preparing': return 'bg-blue-500 bg-opacity-20 text-blue-400'
      case 'ready': return 'bg-green-500 bg-opacity-20 text-green-400'
      case 'completed': return 'bg-gray-500 bg-opacity-20 text-gray-400'
      case 'cancelled': return 'bg-red-500 bg-opacity-20 text-red-400'
    }
  }

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Orders Management</h1>
          <p className="text-gray-400 text-sm sm:text-base">Manage and track customer orders</p>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search orders by customer or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="preparing">Preparing</option>
            <option value="ready">Ready</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {filteredOrders.map((order) => (
          <div key={order.id} className="card hover:shadow-lg transition-shadow bg-gray-800 p-4 rounded-lg border border-gray-700">
            {/* Order Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-white font-semibold">{order.id}</h3>
                <p className="text-gray-400 text-sm">{order.customerName}</p>
              </div>
              <div className={`px-3 py-1 text-primary rounded-full text-xs font-semibold flex items-center space-x-1 ${getStatusColor(order.status)}`}>
                {getStatusIcon(order.status)}
                <span className="capitalize">{order.status}</span>
              </div>
            </div>

            {/* Order Details */}
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Branch:</span>
                <span className="text-white">{order.branch}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Type:</span>
                <span className="text-white capitalize">{order.type}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total:</span>
                <span className="text-white font-semibold">Br {order.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Order Items */}
            <div className="border-t border-gray-700 pt-3 mb-4">
              <h4 className="text-gray-400 text-sm font-semibold mb-2">Items:</h4>
              <div className="space-y-1">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-300">
                      {item.quantity}x {item.name}
                    </span>
                    <span className="text-gray-400">Br {(item.quantity * item.price).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedOrder(order)}
                className="flex-1 bg-primary   rounded-lg btn-secondary flex items-center justify-center space-x-2 py-2"
              >
                <Eye className="h-4 w-4" />
                <span>View</span>
              </button>
              
              {order.status === 'pending' && (
                <button
                  onClick={() => updateOrderStatus(order.id, 'preparing')}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-sm transition"
                >
                  Start
                </button>
              )}
              {order.status === 'preparing' && (
                <button
                  onClick={() => updateOrderStatus(order.id, 'ready')}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-sm transition"
                >
                  Ready
                </button>
              )}
              {order.status === 'ready' && (
                <button
                  onClick={() => updateOrderStatus(order.id, 'completed')}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-3 rounded-lg text-sm transition"
                >
                  Complete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-secondary rounded-xl p-6 w-full max-w-2xl bg-black">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Order Details - {selectedOrder.id}</h2>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-white"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-gray-400 text-sm">Customer</h3>
                  <p className="text-white">{selectedOrder.customerName}</p>
                  <p className="text-gray-400 text-sm">{selectedOrder.customerEmail}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Order Info</h3>
                  <p className="text-white">{selectedOrder.branch} - {selectedOrder.type}</p>
                  <p className="text-gray-400 text-sm">
                    {new Date(selectedOrder.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm mb-2">Items</h3>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{item.name}</p>
                        <p className="text-gray-400 text-sm">Br {item.price.toFixed(2)} each</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white">x{item.quantity}</p>
                        <p className="text-primary font-semibold">
                          Br {(item.quantity * item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <span className="text-xl font-bold text-white">Total: Br {selectedOrder.total.toFixed(2)}</span>
                <div className={`px-3 py-1 rounded-full text-sm text-primary font-semibold flex items-center space-x-1 ${getStatusColor(selectedOrder.status)}`}>
                  {getStatusIcon(selectedOrder.status)}
                  <span className="capitalize">{selectedOrder.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}