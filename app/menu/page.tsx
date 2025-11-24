'use client'
import { useState } from 'react'
import { Search, Filter, Plus, Minus, ShoppingBag, Star, Clock, Zap, Heart } from 'lucide-react'

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

const menuItems: MenuItem[] = [
  // Coffee & Drinks
  {
    id: '1',
    name: 'Traditional Ethiopian Coffee',
    category: 'Coffee',
    price: 45,
    description: 'Authentic coffee ceremony brew served in traditional cups with incense and popcorn',
    image: '/images/ethiopian-coffee.jpg',
    ingredients: ['Yirgacheffe Beans', 'Traditional Jebena', 'Incense', 'Fresh Popcorn'],
    preparationTime: 15,
    popular: true,
    vegan: true,
    glutenFree: true,
    ethiopianSpecial: true
  },
  {
    id: '2',
    name: 'Macchiato',
    category: 'Coffee',
    price: 35,
    description: 'Rich espresso with a dollop of steamed milk foam',
    image: '/images/macchiato.jpg',
    ingredients: ['Espresso', 'Steamed Milk Foam'],
    preparationTime: 4,
    popular: true,
    vegan: false,
    glutenFree: true,
    ethiopianSpecial: false
  },
  {
    id: '3',
    name: 'Spiced Ethiopian Latte',
    category: 'Coffee',
    price: 40,
    description: 'Creamy latte infused with traditional Ethiopian spices - turmeric, cinnamon, and cardamom',
    image: '/images/spiced-latte.jpg',
    ingredients: ['Espresso', 'Steamed Milk', 'Turmeric', 'Cinnamon', 'Cardamom'],
    preparationTime: 5,
    popular: false,
    vegan: false,
    glutenFree: true,
    ethiopianSpecial: true
  },
  {
    id: '4',
    name: 'Sidamo Cold Brew',
    category: 'Coffee',
    price: 38,
    description: 'Smooth cold brew using single-origin Sidamo beans, served over ice',
    image: '/images/cold-brew.jpg',
    ingredients: ['Sidamo Coffee Beans', 'Ice'],
    preparationTime: 2,
    popular: false,
    vegan: true,
    glutenFree: true,
    ethiopianSpecial: true
  },
  {
    id: '5',
    name: 'Traditional Ethiopian Tea',
    category: 'Tea',
    price: 25,
    description: 'Aromatic black tea with fresh mint and spices',
    image: '/images/ethiopian-tea.jpg',
    ingredients: ['Black Tea', 'Fresh Mint', 'Cardamom', 'Cloves'],
    preparationTime: 5,
    popular: false,
    vegan: true,
    glutenFree: true,
    ethiopianSpecial: true
  },

  // Pastries & Snacks
  {
    id: '6',
    name: 'Injera Chips',
    category: 'Snacks',
    price: 35,
    description: 'Crispy injera triangles seasoned with berbere and served with yogurt dip',
    image: '/images/injera-chips.jpg',
    ingredients: ['Injera', 'Berbere Spice', 'Yogurt', 'Herbs'],
    preparationTime: 8,
    popular: true,
    vegan: false,
    glutenFree: false,
    ethiopianSpecial: true
  },
  {
    id: '7',
    name: 'Dabo Kolo',
    category: 'Snacks',
    price: 20,
    description: 'Traditional Ethiopian snack - small, crunchy bread pieces perfect with coffee',
    image: '/images/dabo-kolo.jpg',
    ingredients: ['Wheat Flour', 'Spices', 'Oil'],
    preparationTime: 3,
    spicyLevel: 1,
    popular: false,
    vegan: true,
    glutenFree: false,
    ethiopianSpecial: true
  },
  {
    id: '8',
    name: 'Croissant',
    category: 'Pastries',
    price: 30,
    description: 'Buttery, flaky French croissant baked fresh daily',
    image: '/images/croissant.jpg',
    ingredients: ['Butter', 'Flour', 'Yeast', 'Milk'],
    preparationTime: 2,
    popular: true,
    vegan: false,
    glutenFree: false,
    ethiopianSpecial: false
  },

  // Breakfast
  {
    id: '9',
    name: 'Ful Medames',
    category: 'Breakfast',
    price: 65,
    description: 'Traditional Ethiopian breakfast of mashed fava beans with olive oil, lemon, and spices',
    image: '/images/ful-medames.jpg',
    ingredients: ['Fava Beans', 'Olive Oil', 'Lemon', 'Onions', 'Spices'],
    preparationTime: 10,
    spicyLevel: 1,
    popular: true,
    vegan: true,
    glutenFree: true,
    ethiopianSpecial: true
  },
  {
    id: '10',
    name: 'Chechebsa',
    category: 'Breakfast',
    price: 55,
    description: 'Kita bread mixed with spiced butter and berbere, a classic Ethiopian breakfast',
    image: '/images/chechebsa.jpg',
    ingredients: ['Kita Bread', 'Spiced Butter', 'Berbere', 'Honey'],
    preparationTime: 8,
    spicyLevel: 2,
    popular: false,
    vegan: false,
    glutenFree: false,
    ethiopianSpecial: true
  },

  // Lunch & Main Courses
  {
    id: '11',
    name: 'Shiro Wet',
    category: 'Main Courses',
    price: 85,
    description: 'Flavorful chickpea stew served with injera - a vegetarian favorite',
    image: '/images/shiro.jpg',
    ingredients: ['Chickpea Flour', 'Onions', 'Garlic', 'Berbere', 'Injera'],
    preparationTime: 12,
    spicyLevel: 2,
    popular: true,
    vegan: true,
    glutenFree: false,
    ethiopianSpecial: true
  },
  {
    id: '12',
    name: 'Tibs',
    category: 'Main Courses',
    price: 120,
    description: 'Sautéed beef or lamb with onions, peppers, and Ethiopian spices',
    image: '/images/tibs.jpg',
    ingredients: ['Beef', 'Onions', 'Peppers', 'Ethiopian Spices', 'Injera'],
    preparationTime: 15,
    spicyLevel: 2,
    popular: true,
    vegan: false,
    glutenFree: false,
    ethiopianSpecial: true
  },
  {
    id: '13',
    name: 'Vegetarian Platter',
    category: 'Main Courses',
    price: 95,
    description: 'Sample 5 different vegetarian dishes including lentils, greens, and potatoes',
    image: '/images/vegetarian-platter.jpg',
    ingredients: ['Lentils', 'Collard Greens', 'Potatoes', 'Carrots', 'Injera'],
    preparationTime: 10,
    spicyLevel: 1,
    popular: false,
    vegan: true,
    glutenFree: false,
    ethiopianSpecial: true
  },

  // Desserts
  {
    id: '14',
    name: 'Tiramisu',
    category: 'Desserts',
    price: 45,
    description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone',
    image: '/images/tiramisu.jpg',
    ingredients: ['Mascarpone', 'Ladyfingers', 'Coffee', 'Cocoa'],
    preparationTime: 3,
    popular: true,
    vegan: false,
    glutenFree: false,
    ethiopianSpecial: false
  },
  {
    id: '15',
    name: 'Coffee Chocolate Mousse',
    category: 'Desserts',
    price: 40,
    description: 'Rich chocolate mousse infused with Ethiopian coffee',
    image: '/images/coffee-mousse.jpg',
    ingredients: ['Dark Chocolate', 'Ethiopian Coffee', 'Cream', 'Eggs'],
    preparationTime: 4,
    popular: false,
    vegan: false,
    glutenFree: true,
    ethiopianSpecial: true
  }
]

const categories = [
  { id: 'all', name: 'All Items', count: menuItems.length },
  { id: 'Coffee', name: 'Coffee & Drinks', count: menuItems.filter(item => item.category === 'Coffee' || item.category === 'Tea').length },
  { id: 'Snacks', name: 'Snacks', count: menuItems.filter(item => item.category === 'Snacks').length },
  { id: 'Pastries', name: 'Pastries', count: menuItems.filter(item => item.category === 'Pastries').length },
  { id: 'Breakfast', name: 'Breakfast', count: menuItems.filter(item => item.category === 'Breakfast').length },
  { id: 'Main Courses', name: 'Main Courses', count: menuItems.filter(item => item.category === 'Main Courses').length },
  { id: 'Desserts', name: 'Desserts', count: menuItems.filter(item => item.category === 'Desserts').length }
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [cart, setCart] = useState<{[key: string]: number}>({})
  const [dietaryFilter, setDietaryFilter] = useState('all')
  const [sortBy, setSortBy] = useState('name')

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

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'prep-time':
        return a.preparationTime - b.preparationTime
      case 'popular':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0)
      default:
        return a.name.localeCompare(b.name)
    }
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

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the authentic flavors of Ethiopia alongside international favorites. 
            From traditional coffee ceremonies to modern fusion dishes.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="card mb-8">
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
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="prep-time">Preparation Time</option>
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

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sortedItems.map(item => (
            <div key={item.id} className="card group hover:border-primary transition-all duration-300 relative">
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute -top-2 -right-2 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
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
                <div className="absolute inset-0 bg-black bg-opacity-20" />
                <div className="relative z-10 text-center text-white">
                  <span className="text-lg font-semibold">Item Image</span>
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

              {/* Ingredients */}
              <div className="flex flex-wrap gap-1 mb-4">
                {item.ingredients.slice(0, 3).map(ingredient => (
                  <span key={ingredient} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
                    {ingredient}
                  </span>
                ))}
                {item.ingredients.length > 3 && (
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
                    +{item.ingredients.length - 3} more
                  </span>
                )}
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
                    className="btn-primary flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                )}

                {/* Quick Info */}
                <div className="flex items-center space-x-2 text-gray-400">
                  {item.ethiopianSpecial && (
                    <span className="text-xs">🇪🇹</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Banner */}
        <div className="card bg-gradient-to-r from-primary to-accent text-white mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Traditional Coffee Ceremony Experience</h3>
              <p className="text-white text-opacity-90">
                Book our authentic Ethiopian coffee ceremony - a 45-minute cultural experience with traditional brewing, incense, and snacks
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Book Experience - Birr150
              </button>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        {Object.keys(cart).length > 0 && (
          <div className="fixed bottom-6 right-6 bg-primary text-white p-6 rounded-2xl shadow-2xl z-50">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <p className="font-semibold">Cart Total: Birr{getCartTotal()}</p>
                <p className="text-sm opacity-90">
                  {Object.values(cart).reduce((a, b) => a + b, 0)} items
                </p>
              </div>
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Checkout</span>
              </button>
            </div>
          </div>
        )}

        {/* Menu Legend */}
        <div className="card mt-8">
          <h3 className="text-white font-semibold text-lg mb-4">Menu Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-gray-400 text-sm">Popular Items</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 text-sm">🇪🇹</span>
              <span className="text-gray-400 text-sm">Ethiopian Special</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 text-sm">Vegan</span>
              <span className="text-gray-400 text-sm">Plant-based</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 text-sm">GF</span>
              <span className="text-gray-400 text-sm">Gluten Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}