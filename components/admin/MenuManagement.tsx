'use client'
import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Search, Filter, Save, X, Image } from 'lucide-react'

interface MenuItem {
  id: string
  name: string
  category: string
  price: number
  available: boolean
  description: string
  image: string
  ingredients: string[]
  preparationTime: number
  calories?: number
}

export default function MenuManagement() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null)
  const [newItem, setNewItem] = useState<Partial<MenuItem>>({
    name: '',
    category: 'Coffee',
    price: 0,
    available: true,
    description: '',
    image: '',
    ingredients: [],
    preparationTime: 5
  })

  const categories = ['all', 'Coffee', 'Tea', 'Pastries', 'Sandwiches', 'Salads', 'Desserts', 'Breakfast']

  useEffect(() => {
    // Load initial data
    setMenuItems([
      {
        id: '1',
        name: 'Flat White',
        category: 'Coffee',
        price: 3.50,
        available: true,
        description: 'Smooth espresso with velvety steamed milk',
        image: '/images/flat-white.jpg',
        ingredients: ['Espresso', 'Steamed Milk'],
        preparationTime: 3,
        calories: 120
      },
      {
        id: '2',
        name: 'Cappuccino',
        category: 'Coffee',
        price: 3.20,
        available: true,
        description: 'Classic espresso with thick foam',
        image: '/images/cappuccino.jpg',
        ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
        preparationTime: 4,
        calories: 110
      },
      {
        id: '3',
        name: 'Avocado Toast',
        category: 'Breakfast',
        price: 8.50,
        available: true,
        description: 'Sourdough bread with smashed avocado and cherry tomatoes',
        image: '/images/avocado-toast.jpg',
        ingredients: ['Sourdough', 'Avocado', 'Cherry Tomatoes', 'Microgreens'],
        preparationTime: 8,
        calories: 320
      }
    ])
  }, [])

  const filteredItems = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || item.category === selectedCategory)
  )

  const addItem = () => {
    if (newItem.name && newItem.price) {
      const item: MenuItem = {
        id: Date.now().toString(),
        name: newItem.name!,
        category: newItem.category!,
        price: newItem.price!,
        available: newItem.available!,
        description: newItem.description!,
        image: newItem.image!,
        ingredients: newItem.ingredients!,
        preparationTime: newItem.preparationTime!
      }
      setMenuItems(prev => [...prev, item])
      setIsAddModalOpen(false)
      resetNewItem()
    }
  }

  const updateItem = () => {
    if (editingItem) {
      setMenuItems(prev => prev.map(item => 
        item.id === editingItem.id ? { ...editingItem } : item
      ))
      setEditingItem(null)
    }
  }

  const deleteItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id))
  }

  const toggleAvailability = (id: string) => {
    setMenuItems(prev => prev.map(item => 
      item.id === id ? { ...item, available: !item.available } : item
    ))
  }

  const resetNewItem = () => {
    setNewItem({
      name: '',
      category: 'Coffee',
      price: 0,
      available: true,
      description: '',
      image: '',
      ingredients: [],
      preparationTime: 5
    })
  }

  const startEdit = (item: MenuItem) => {
    setEditingItem({ ...item })
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Menu Management</h1>
          <p className="text-gray-400">Manage your menu items and categories</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Item</span>
        </button>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Menu Items Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 text-gray-400 font-semibold">Item</th>
                <th className="text-left py-4 text-gray-400 font-semibold">Category</th>
                <th className="text-left py-4 text-gray-400 font-semibold">Price</th>
                <th className="text-left py-4 text-gray-400 font-semibold">Prep Time</th>
                <th className="text-left py-4 text-gray-400 font-semibold">Status</th>
                <th className="text-left py-4 text-gray-400 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Image className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{item.name}</p>
                        <p className="text-gray-400 text-sm line-clamp-1">{item.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-primary bg-opacity-20 text-primary text-sm rounded">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-white font-semibold">£{item.price.toFixed(2)}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-gray-300">{item.preparationTime} min</span>
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => toggleAvailability(item.id)}
                      className={`px-3 py-1 rounded-full text-primary text-xs font-semibold transition ${
                        item.available 
                          ? 'bg-green-500 bg-opacity-20  text-green-400 hover:bg-green-600' 
                          : 'bg-red-500 bg-opacity-20 text-red-400 hover:bg-red-600'
                      }`}
                    >
                      {item.available ? 'Available' : 'Unavailable'}
                    </button>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => startEdit(item)}
                        className="p-2 text-blue-400 hover:text-white hover:bg-blue-400 hover:bg-opacity-20 rounded-lg transition"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => deleteItem(item.id)}
                        className="p-2 hover:text-white text-red-400 hover:bg-red-400 hover:bg-opacity-20 rounded-lg transition"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {(isAddModalOpen || editingItem) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-secondary rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
              </h2>
              <button
                onClick={() => {
                  setIsAddModalOpen(false)
                  setEditingItem(null)
                  resetNewItem()
                }}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-300 mb-2">Item Name</label>
                <input
                  type="text"
                  value={editingItem ? editingItem.name : newItem.name}
                  onChange={(e) => editingItem 
                    ? setEditingItem({...editingItem, name: e.target.value})
                    : setNewItem({...newItem, name: e.target.value})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Category</label>
                <select
                  value={editingItem ? editingItem.category : newItem.category}
                  onChange={(e) => editingItem
                    ? setEditingItem({...editingItem, category: e.target.value})
                    : setNewItem({...newItem, category: e.target.value})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                >
                  {categories.filter(cat => cat !== 'all').map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Price (£)</label>
                <input
                  type="number"
                  step="0.01"
                  value={editingItem ? editingItem.price : newItem.price}
                  onChange={(e) => editingItem
                    ? setEditingItem({...editingItem, price: parseFloat(e.target.value)})
                    : setNewItem({...newItem, price: parseFloat(e.target.value)})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Preparation Time (min)</label>
                <input
                  type="number"
                  value={editingItem ? editingItem.preparationTime : newItem.preparationTime}
                  onChange={(e) => editingItem
                    ? setEditingItem({...editingItem, preparationTime: parseInt(e.target.value)})
                    : setNewItem({...newItem, preparationTime: parseInt(e.target.value)})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                value={editingItem ? editingItem.description : newItem.description}
                onChange={(e) => editingItem
                  ? setEditingItem({...editingItem, description: e.target.value})
                  : setNewItem({...newItem, description: e.target.value})
                }
                rows={3}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary resize-none"
              />
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={editingItem ? editingItem.available : newItem.available}
                  onChange={(e) => editingItem
                    ? setEditingItem({...editingItem, available: e.target.checked})
                    : setNewItem({...newItem, available: e.target.checked})
                  }
                  className="rounded border-gray-700 bg-gray-800 text-primary focus:ring-primary"
                />
                <span className="text-gray-300">Available for order</span>
              </label>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setIsAddModalOpen(false)
                  setEditingItem(null)
                  resetNewItem()
                }}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={editingItem ? updateItem : addItem}
                className="btn-primary flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>{editingItem ? 'Update Item' : 'Add Item'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}