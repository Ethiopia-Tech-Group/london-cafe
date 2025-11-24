'use client'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Search, 
  Filter, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MapPin, 
  Clock,
  ChevronDown,
  X,
  Star,
  Heart,
  Check,
  PersonStanding,
  Car
} from 'lucide-react'

interface MenuItem {
  id: string
  name: string
  category: string
  price: number
  description: string
  image: string
  ingredients: string[]
  preparationTime: number
  spicyLevel?: 0 | 1 | 2 | 3
  popular: boolean
  vegan: boolean
  glutenFree: boolean
  ethiopianSpecial: boolean
}

interface Branch {
  id: string
  name: string
  address: string
  phone: string
  hours: string
  distance: string
  rating: number
  popular: boolean
}

const menuItems: MenuItem[] = [
    // Coffee & Drinks
    {
      id: '1',
      name: 'Flat White',
      category: 'Coffee',
      price: 35,
      description: 'Smooth espresso with velvety steamed milk, a café classic.',
      image: '/images/flat-white.jpg',
      ingredients: ['Espresso', 'Steamed Milk'],
      preparationTime: 4,
      popular: true,
      vegan: false,
      glutenFree: true,
      ethiopianSpecial: false
    },
    {
      id: '2',
      name: 'Cappuccino',
      category: 'Coffee',
      price: 35,
      description: 'Espresso with steamed milk and a thick layer of frothy milk foam.',
      image: '/images/cappuccino.jpg',
      ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam'],
      preparationTime: 4,
      popular: true,
      vegan: false,
      glutenFree: true,
      ethiopianSpecial: false
    },
    {
      id: '3',
      name: 'Latte',
      category: 'Coffee',
      price: 35,
      description: 'Creamy espresso drink with steamed milk and a light foam topping.',
      image: '/images/latte.jpg',
      ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam'],
      preparationTime: 4,
      popular: true,
      vegan: false,
      glutenFree: true,
      ethiopianSpecial: false
    },
    {
      id: '4',
      name: 'Americano',
      category: 'Coffee',
      price: 30,
      description: 'Espresso diluted with hot water for a rich, smooth flavor.',
      image: '/images/americano.jpg',
      ingredients: ['Espresso', 'Hot Water'],
      preparationTime: 3,
      popular: true,
      vegan: true,
      glutenFree: true,
      ethiopianSpecial: false
    },
    {
      id: '5',
      name: 'Mocha',
      category: 'Coffee',
      price: 40,
      description: 'Espresso combined with chocolate syrup and steamed milk, topped with whipped cream.',
      image: '/images/mocha.jpg',
      ingredients: ['Espresso', 'Steamed Milk', 'Chocolate', 'Whipped Cream'],
      preparationTime: 5,
      popular: true,
      vegan: false,
      glutenFree: true,
      ethiopianSpecial: false
    },
  
    // Pastries & Snacks
    {
      id: '6',
      name: 'Croissant',
      category: 'Pastries',
      price: 30,
      description: 'Buttery, flaky French croissant baked fresh daily.',
      image: '/images/croissant.jpg',
      ingredients: ['Butter', 'Flour', 'Yeast', 'Milk'],
      preparationTime: 2,
      popular: true,
      vegan: false,
      glutenFree: false,
      ethiopianSpecial: false
    },
    {
      id: '7',
      name: 'Chocolate Muffin',
      category: 'Pastries',
      price: 25,
      description: 'Moist chocolate muffin with chocolate chips, perfect with coffee.',
      image: '/images/chocolate-muffin.jpg',
      ingredients: ['Flour', 'Cocoa', 'Sugar', 'Eggs', 'Butter'],
      preparationTime: 3,
      popular: true,
      vegan: false,
      glutenFree: false,
      ethiopianSpecial: false
    },
    {
      id: '8',
      name: 'Scone with Jam & Cream',
      category: 'Pastries',
      price: 30,
      description: 'Traditional British scone served with strawberry jam and clotted cream.',
      image: '/images/scone.jpg',
      ingredients: ['Flour', 'Butter', 'Eggs', 'Jam', 'Cream'],
      preparationTime: 5,
      popular: true,
      vegan: false,
      glutenFree: false,
      ethiopianSpecial: false
    },
    {
      id: '9',
      name: 'Cheese & Tomato Sandwich',
      category: 'Snacks',
      price: 35,
      description: 'Freshly made sandwich with cheddar cheese, tomato, and crisp lettuce.',
      image: '/images/cheese-tomato-sandwich.jpg',
      ingredients: ['Bread', 'Cheddar Cheese', 'Tomato', 'Lettuce', 'Butter'],
      preparationTime: 4,
      popular: true,
      vegan: false,
      glutenFree: false,
      ethiopianSpecial: false
    },
    {
      id: '10',
      name: 'Ham & Cheese Panini',
      category: 'Snacks',
      price: 40,
      description: 'Grilled panini with sliced ham, cheese, and a touch of mustard.',
      image: '/images/ham-cheese-panini.jpg',
      ingredients: ['Panini Bread', 'Ham', 'Cheese', 'Mustard'],
      preparationTime: 5,
      popular: true,
      vegan: false,
      glutenFree: false,
      ethiopianSpecial: false
    }
  ];
  
  const branches: Branch[] = [
    {
      id: 'bole-road',
      name: 'Bole Branch',
      address: 'Bole Road, Addis Ababa',
      phone: '+251 11 663 8115',
      hours: '7:00 AM - 10:00 PM',
      distance: '0.5 km',
      rating: 4.5,
      popular: true
    },
    {
      id: 'edna-mall',
      name: 'Morning Star Branch',
      address: 'Beside Morning Star, Bole, Addis Ababa',
      phone: '+251 96 957 1106',
      hours: '8:00 AM - 10:00 PM',
      distance: '1 km',
      rating: 4.4,
      popular: true
    },
    {
      id: 'bisrate-gabriel',
      name: 'Bisrate Gabriel Branch',
      address: 'South Africa Street, Bisrate Gabriel, Addis Ababa',
      phone: '+251 96 957 1107',
      hours: '7:30 AM - 9:00 PM',
      distance: '2 km',
      rating: 4.3,
      popular: true
    },
    {
      id: 'bole-airport',
      name: 'Bole International Airport Branch',
      address: 'Bole International Airport, Addis Ababa',
      phone: '+251 11 665 4321',
      hours: '6:00 AM - 11:00 PM',
      distance: '5 km',
      rating: 4.2,
      popular: true
    },
    {
      id: 'bole-medhanialem',
      name: 'Bole Medhanialem Branch',
      address: 'Bole Medhanialem, Addis Ababa',
      phone: '+251 11 661 2233',
      hours: '7:00 AM - 9:00 PM',
      distance: '1.2 km',
      rating: 4.3,
      popular: true
    },
    {
      id: 'alem-cinema',
      name: 'Bole  Alemenesh PlazaBranch',
      address: 'Bole  Alemenesh Plazaarea, Addis Ababa',
      phone: '+251 11 667 3344',
      hours: '7:00 AM - 9:00 PM',
      distance: '1.8 km',
      rating: 4.1,
      popular: true
    },
    {
      id: 'arada',
      name: 'Arada Branch',
      address: 'Arada area, Addis Ababa',
      phone: '+251 11 668 7788',
      hours: '7:00 AM - 9:00 PM',
      distance: '2.5 km',
      rating: 4.0,
      popular: true
    }
  ];
  

const categories = [
  { id: 'all', name: 'All Items', count: menuItems.length },
  { id: 'Coffee', name: 'Coffee & Drinks', count: menuItems.filter(item => item.category === 'Coffee').length },
  { id: 'Snacks', name: 'Snacks', count: menuItems.filter(item => item.category === 'Snacks').length },
  { id: 'Pastries', name: 'Pastries', count: menuItems.filter(item => item.category === 'Pastries').length }
]

export default function ClientOrdering() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [cart, setCart] = useState<{[key: string]: number}>({})
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null)
  const [isBranchSelectorOpen, setIsBranchSelectorOpen] = useState(false)
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup')
  const [dietaryFilter, setDietaryFilter] = useState('all')
  const [isRedirectedFromBranches, setIsRedirectedFromBranches] = useState(false)
  // Handle redirected requests from other pages
  useEffect(() => {
    const branchId = searchParams.get('branch')
    const category = searchParams.get('category')
    const itemId = searchParams.get('item')
    const fromBranches = searchParams.get('from') === 'branches'


    // Set redirected flag for UI feedback
    if (fromBranches) {
        setIsRedirectedFromBranches(true)
      }
    if (branchId) {
        const branch = branches.find(b => b.id === branchId)
        if (branch) {
          setSelectedBranch(branch)
          
          // Show success message for branch selection
          if (fromBranches) {
            setTimeout(() => {
              setIsRedirectedFromBranches(false)
            }, 3000)
          }
        }
      }

    if (itemId) {
      const item = menuItems.find(m => m.id === itemId)
      if (item) {
        addToCart(item.id)
        // Scroll to the item
        setTimeout(() => {
          const element = document.getElementById(`item-${item.id}`)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      }
    }
  }, [searchParams])

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDietary = dietaryFilter === 'all' || 
                          (dietaryFilter === 'vegan' && item.vegan) ||
                          (dietaryFilter === 'glutenFree' && item.glutenFree) ||
                          (dietaryFilter === 'ethiopian' && item.ethiopianSpecial)

    return matchesCategory && matchesSearch && matchesDietary
  })

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }))
  }

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = { ...prev }
      if (newCart[itemId] > 1) {
        newCart[itemId]--
      } else {
        delete newCart[itemId]
      }
      return newCart
    })
  }

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find(m => m.id === itemId)
      return total + (item?.price || 0) * quantity
    }, 0)
  }

  const getSpicyLevel = (level: number) => {
    const peppers = ['🌶️', '🌶️🌶️', '🌶️🌶️🌶️']
    return level ? peppers[level - 1] : ''
  }

  const getCartItemCount = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)
  }

  const proceedToCheckout = () => {
    if (!selectedBranch) {
      alert('Please select a branch first')
      return
    }
    if (getCartItemCount() === 0) {
      alert('Please add items to your cart')
      return
    }

    // Store order data and redirect to checkout
    const orderData = {
      branch: selectedBranch,
      items: cart,
      total: getCartTotal(),
      type: orderType
    }
    
    localStorage.setItem('currentOrder', JSON.stringify(orderData))
    router.push('/checkout')
  }
  const clearBranchSelection = () => {
    setSelectedBranch(null)
    // Remove branch parameter from URL without refreshing
    const newParams = new URLSearchParams(searchParams.toString())
    newParams.delete('branch')
    newParams.delete('from')
    router.replace(`/ordering?${newParams.toString()}`, { scroll: false })
  }

  return (
    <div className="min-h-screen pt-5 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {isRedirectedFromBranches && selectedBranch && (
          <div className="mb-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-green-400 font-semibold">Branch Selected Successfully!</p>
                <p className="text-green-400 text-opacity-80 text-sm">
                  You're now ordering from {selectedBranch.name}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsRedirectedFromBranches(false)}
              className="text-green-400 hover:text-green-300"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Header with Branch Selection */}
        <div className="card mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Order Online</h1>
              <p className="text-gray-400">Get your favorite drinks and food delivered or ready for pickup</p>
            </div>
            
            {/* Branch Selector */}
            <div className="relative">
              <button
                onClick={() => setIsBranchSelectorOpen(!isBranchSelectorOpen)}
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors min-w-64"
              >
                <MapPin className="h-5 w-5 text-primary" />
                <div className="text-left flex-1">
                  <div className="text-sm text-gray-400">Ordering from</div>
                  <div className="font-semibold">
                    {selectedBranch ? selectedBranch.name : 'Select a branch'}
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${isBranchSelectorOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Branch Dropdown */}
              {isBranchSelectorOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-secondary border border-gray-700 rounded-lg shadow-2xl z-50">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white font-semibold">Select Branch</h3>
                      <button
                        onClick={() => setIsBranchSelectorOpen(false)}
                        className="text-gray-400 hover:text-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {branches.map(branch => (
                        <div
                          key={branch.id}
                          className={`p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedBranch?.id === branch.id
                              ? 'bg-primary bg-opacity-20 border border-primary'
                              : 'bg-gray-800 hover:bg-gray-750'
                          }`}
                          onClick={() => {
                            setSelectedBranch(branch)
                            setIsBranchSelectorOpen(false)
                            const newParams = new URLSearchParams(searchParams.toString())
                            newParams.set('branch', branch.id)
                            router.replace(`/ordering?${newParams.toString()}`, { scroll: false })
                          }}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-white font-semibold">{branch.name}</h4>
                            {branch.popular && (
                              <span className="bg-primary text-white text-xs px-2 py-1 rounded">Popular</span>
                            )}
                          </div>
                          <div className="text-gray-400 text-sm space-y-1">
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-3 w-3" />
                              <span>{branch.address}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-3 w-3" />
                              <span>{branch.hours}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>{branch.distance}</span>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                <span className="text-white text-sm">{branch.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Type Selector */}
          {selectedBranch && (
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="flex space-x-4">
                <button
                  onClick={() => setOrderType('pickup')}
                  className={`flex gap-4 flex-1 justify-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                    orderType === 'pickup'
                      ? 'bg-primary text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                 <PersonStanding /> Pickup from {selectedBranch.name}
                </button>
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`flex-1 flex justify-center gap-4 py-3 px-4 rounded-lg font-semibold transition-colors ${
                    orderType === 'delivery'
                      ? 'bg-primary text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Car /> Delivery to My Location
                </button>
              </div>
              
              {orderType === 'delivery' && (
                <div className="mt-4 p-4 bg-yellow-500 bg-opacity-20 border border-yellow-500 border-opacity-30 rounded-lg">
                  <p className="text-white   text-sm">
                    💡 Delivery available within 5km radius. Delivery fee: Birr25
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="card mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search menu items..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                {/* Dietary Filter */}
                <div>
                  <select
                    value={dietaryFilter}
                    onChange={(e) => setDietaryFilter(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                  >
                    <option value="all">All Dietary</option>
                    <option value="vegan">Vegan</option>
                    <option value="glutenFree">Gluten Free</option>
                    <option value="ethiopian">Ethiopian Specials</option>
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <select
                    onChange={(e) => {
                      // Sort functionality can be added here
                    }}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mt-6">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items Grid */}
            {!selectedBranch ? (
              <div className="card text-center py-12">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Select a Branch to Start Ordering</h3>
                <p className="text-gray-400 mb-6">Choose your preferred London Cafe location to view the menu</p>
                <button
                  onClick={() => setIsBranchSelectorOpen(true)}
                  className="btn-primary"
                >
                  Choose Branch
                </button>
              </div>
            ) : (
              <>
                {/* Branch Info Banner */}
                <div className="card bg-gradient-to-r from-primary to-accent text-white mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold">Ordering from {selectedBranch.name}</h3>
                      <p className="text-white text-opacity-90 text-sm">
                        {orderType === 'pickup' ? 'Pickup available' : 'Delivery available'} • {selectedBranch.hours}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{selectedBranch.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredItems.map(item => (
                    <div 
                      key={item.id} 
                      id={`item-${item.id}`}
                      className="card group hover:border-primary transition-all duration-300 relative"
                    >
                      {/* Popular Badge */}
                      {item.popular && (
                        <div className="absolute z-50 -top-2 -right-2 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-current" />
                          <span>Popular</span>
                        </div>
                      )}

                      {/* Ethiopian Special Badge */}
                      {item.ethiopianSpecial && (
                        <div className="absolute -top-2 left-2 z-10 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          🇪🇹 Ethiopian
                        </div>
                      )}

                      {/* Item Image */}
                      <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0  bg-opacity-20" />
                        <div className="relative z-10 text-center text-white">
                          <img src={item.image} alt="" />
                        </div>
                        
                        {/* Dietary Badges */}
                        <div className="absolute top-2 left-2 flex space-x-1">
                          {item.vegan && (
                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">Vegan</span>
                          )}
                          {item.glutenFree && (
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">GF</span>
                          )}
                        </div>

                        {/* Spicy Level */}
                        {item.spicyLevel && item.spicyLevel > 0 && (
                          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                            {getSpicyLevel(item.spicyLevel)}
                          </div>
                        )}
                      </div>
                      
                      {/* Item Details */}
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-primary font-bold text-lg">Birr{item.price}</span>
                      </div>
                      
                      <p className="text-gray-400 mb-4 line-clamp-2">{item.description}</p>
                      
                      {/* Preparation Time */}
                      <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
                        <Clock className="h-4 w-4" />
                        <span>{item.preparationTime} min preparation</span>
                      </div>

                      {/* Add to Cart */}
                      <div className="flex items-center justify-between">
                        {cart[item.id] ? (
                          <div className="flex items-center space-x-3">
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 bg-primary rounded-lg text-white hover:bg-accent transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="text-white font-semibold w-8 text-center">
                              {cart[item.id]}
                            </span>
                            <button 
                              onClick={() => addToCart(item.id)}
                              className="p-2 bg-primary rounded-lg text-white hover:bg-accent transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => addToCart(item.id)}
                            className="py-1 px-2 rounded-lg bg-primary flex items-center space-x-2"
                            disabled={!selectedBranch}
                          >
                            <Plus className="h-4 w-4" />
                            <span>Add to Cart</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {filteredItems.length === 0 && (
                  <div className="card text-center py-12">
                    <Search className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">No items found</h3>
                    <p className="text-gray-400">Try adjusting your search or filters</p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Your Order</span>
                {getCartItemCount() > 0 && (
                  <span className="bg-primary text-white text-sm px-2 py-1 rounded-full">
                    {getCartItemCount()}
                  </span>
                )}
              </h2>

              {!selectedBranch ? (
                <div className="text-center py-8">
                  <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">Select a branch to start ordering</p>
                </div>
              ) : getCartItemCount() === 0 ? (
                <div className="text-center py-8">
                  <ShoppingBag className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">Your cart is empty</p>
                  <p className="text-gray-500 text-sm mt-2">Add items from the menu</p>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-4 max-h-96 overflow-y-auto mb-4">
                    {Object.entries(cart).map(([itemId, quantity]) => {
                      const item = menuItems.find(m => m.id === itemId)
                      if (!item) return null
                      
                      return (
                        <div key={itemId} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                            <p className="text-primary font-semibold">Birr{item.price} x {quantity}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => removeFromCart(itemId)}
                              className="p-1 text-red-400 hover:bg-red-400 hover:bg-opacity-20 rounded transition-colors"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-white font-semibold w-6 text-center">{quantity}</span>
                            <button 
                              onClick={() => addToCart(itemId)}
                              className="p-1 text-green-400 hover:bg-green-400 hover:bg-opacity-20 rounded transition-colors"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Order Summary */}
                  <div className="border-t border-gray-700 pt-4 space-y-3">
                    <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>
                      <span>Birr{getCartTotal()}</span>
                    </div>
                    {orderType === 'delivery' && (
                      <div className="flex justify-between text-gray-400">
                        <span>Delivery Fee</span>
                        <span>Birr25</span>
                      </div>
                    )}
                    <div className="flex justify-between text-white font-bold text-lg border-t border-gray-700 pt-3">
                      <span>Total</span>
                      <span>Birr{getCartTotal() + (orderType === 'delivery' ? 25 : 0)}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={proceedToCheckout}
                    className="w-full bg-primary hover:bg-accent text-white font-semibold py-4 px-6 rounded-lg transition-colors mt-6 flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span>Proceed to Checkout</span>
                  </button>

                  {/* Quick Actions */}
                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={() => setCart({})}
                      className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 px-4 rounded text-sm transition-colors"
                    >
                      Clear Cart
                    </button>
                    <Link
                      href="/menu"
                      className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 px-4 rounded text-sm transition-colors text-center"
                    >
                      View Full Menu
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* Special Offer */}
            {/* <div className="card mt-6 bg-gradient-to-br from-orange-500 to-red-500 text-white">
              <div className="text-center">
                <Heart className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-bold mb-1">First Order?</h3>
                <p className="text-white text-opacity-90 text-sm">Get 15% off your first order with code: WELCOME15</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Mobile Cart Bar */}
      {getCartItemCount() > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-primary text-white p-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{getCartItemCount()} items • Birr{getCartTotal()}</p>
              <p className="text-white text-opacity-90 text-sm">
                {orderType === 'pickup' ? 'Pickup' : 'Delivery'} • {selectedBranch?.name}
              </p>
            </div>
            <button
              onClick={proceedToCheckout}
              className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}