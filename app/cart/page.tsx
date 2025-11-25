'use client'
import { useState } from 'react'
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  notes?: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Flat White',
      price: 3.50,
      quantity: 2,
      image: '/images/flat-white.jpg',
      notes: 'Extra hot'
    },
    {
      id: '2',
      name: 'Chocolate Croissant',
      price: 3.80,
      quantity: 1,
      image: '/images/croissant.jpg'
    }
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const serviceFee = 0.50
  const total = subtotal + serviceFee

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="h-24 w-24 text-gray-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">Your cart is empty</h1>
          <p className="text-gray-400 mb-8">Add some delicious items from our menu</p>
          <Link href="/menu" className="btn-primary">
            Browse Menu
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Link href="/menu" className="flex items-center text-primary hover:text-accent transition">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-white mb-6">Your Order</h1>
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="card flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                      {/* <span className="text-gray-500 text-xs">IMG</span> */}
                      <img src={item.image}  className='h-16 w-16 rounded'/>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{item.name}</h3>
                      <p className="text-primary font-semibold">Br {item.price.toFixed(2)}</p>
                      {item.notes && (
                        <p className="text-gray-400 text-sm">Note: {item.notes}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 bg-gray-700 rounded text-white hover:bg-gray-600 transition"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="text-white font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 bg-gray-700 rounded text-white hover:bg-gray-600 transition"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-400 hover:bg-red-400 hover:bg-opacity-20 rounded transition"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card sticky top-6">
              <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>Br {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Service Fee</span>
                  <span>Br {serviceFee.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <div className="flex justify-between text-white font-bold text-lg">
                    <span>Total</span>
                    <span>Br {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary">
                  <option value="">Select Branch</option>
                  <option value="covent-garden">Covent Garden</option>
                  <option value="soho">Soho</option>
                  <option value="shoreditch">Shoreditch</option>
                </select>

                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary">
                  <option value="">Order Type</option>
                  <option value="pickup">Pickup</option>
                  <option value="dine-in">Dine In</option>
                </select>

                <button className="btn-primary w-full py-4 text-lg">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}