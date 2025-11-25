'use client'
import { useState, useEffect } from 'react'
import { Search, Plus, Edit, Trash2, Tag, Calendar, Percent, PoundSterling, CheckCircle, XCircle } from 'lucide-react'

interface Promotion {
  id: string
  title: string
  description: string
  type: 'percentage' | 'fixed' | 'bogo'
  value: number
  code: string
  startDate: string
  endDate: string
  status: 'active' | 'inactive' | 'expired'
  usageLimit?: number
  usedCount: number
  minOrderAmount?: number
  applicableBranches: string[]
}

export default function PromotionsManagement() {
  const [promotions, setPromotions] = useState<Promotion[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingPromotion, setEditingPromotion] = useState<Promotion | null>(null)
  const [newPromotion, setNewPromotion] = useState<Partial<Promotion>>({
    title: '',
    description: '',
    type: 'percentage',
    value: 10,
    code: '',
    startDate: '',
    endDate: '',
    status: 'active',
    usageLimit: 100,
    usedCount: 0,
    minOrderAmount: 0,
    applicableBranches: ['all']
  })

  const branches = ['Covent Garden', 'Soho', 'Shoreditch', 'Notting Hill', 'Camden', 'Chelsea']

  useEffect(() => {
    setPromotions([
      {
        id: 'PROMO-001',
        title: 'Winter Warmers',
        description: '50% off all hot chocolate and seasonal drinks',
        type: 'percentage',
        value: 50,
        code: 'WINTER50',
        startDate: '2024-01-01',
        endDate: '2024-01-31',
        status: 'active',
        usageLimit: 500,
        usedCount: 234,
        minOrderAmount: 0,
        applicableBranches: ['all']
      },
      {
        id: 'PROMO-002',
        title: 'Student Mondays',
        description: '20% off for students every Monday',
        type: 'percentage',
        value: 20,
        code: 'STUDENT20',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        status: 'active',
        usedCount: 89,
        minOrderAmount: 5,
        applicableBranches: ['all']
      }
    ])
  }, [])

  const filteredPromotions = promotions.filter(promo =>
    promo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    promo.code.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const addPromotion = () => {
    if (newPromotion.title && newPromotion.code) {
      const promotion: Promotion = {
        id: `PROMO-${Date.now().toString().slice(-4)}`,
        title: newPromotion.title!,
        description: newPromotion.description!,
        type: newPromotion.type!,
        value: newPromotion.value!,
        code: newPromotion.code!,
        startDate: newPromotion.startDate!,
        endDate: newPromotion.endDate!,
        status: newPromotion.status!,
        usageLimit: newPromotion.usageLimit,
        usedCount: 0,
        minOrderAmount: newPromotion.minOrderAmount,
        applicableBranches: newPromotion.applicableBranches!
      }
      setPromotions(prev => [...prev, promotion])
      setIsAddModalOpen(false)
      resetNewPromotion()
    }
  }

  const updatePromotion = () => {
    if (editingPromotion) {
      setPromotions(prev => prev.map(promo =>
        promo.id === editingPromotion.id ? editingPromotion : promo
      ))
      setEditingPromotion(null)
    }
  }

  const deletePromotion = (id: string) => {
    setPromotions(prev => prev.filter(promo => promo.id !== id))
  }

  const togglePromotionStatus = (id: string) => {
    setPromotions(prev => prev.map(promo =>
      promo.id === id ? {
        ...promo,
        status: promo.status === 'active' ? 'inactive' : 'active'
      } : promo
    ))
  }

  const resetNewPromotion = () => {
    setNewPromotion({
      title: '',
      description: '',
      type: 'percentage',
      value: 10,
      code: '',
      startDate: '',
      endDate: '',
      status: 'active',
      usageLimit: 100,
      usedCount: 0,
      minOrderAmount: 0,
      applicableBranches: ['all']
    })
  }

  const getStatusColor = (status: Promotion['status']) => {
    switch (status) {
      case 'active': return 'bg-green-500 bg-opacity-20 text-green-400'
      case 'inactive': return 'bg-gray-500 bg-opacity-20 text-gray-400'
      case 'expired': return 'bg-red-500 bg-opacity-20 text-red-400'
    }
  }

  const getTypeIcon = (type: Promotion['type']) => {
    switch (type) {
      case 'percentage': return <Percent className="h-4 w-4" />
      case 'fixed': return <PoundSterling className="h-4 w-4" />
      case 'bogo': return <Tag className="h-4 w-4" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Promotions Management</h1>
          <p className="text-gray-400">Create and manage discount codes and promotions</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Create Promotion</span>
        </button>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search promotions..."
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
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="expired">Expired</option>
          </select>
        </div>
      </div>

      {/* Promotions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredPromotions.map((promotion) => (
          <div key={promotion.id} className="card hover:shadow-lg transition-shadow border border-gray-700 bg-gray-800 p-4 rounded-lg">
            {/* Promotion Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-white font-semibold text-lg">{promotion.title}</h3>
                <p className="text-gray-400 text-sm">{promotion.id}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs text-primary font-semibold flex items-center space-x-1 ${getStatusColor(promotion.status)}`}>
                {promotion.status === 'active' ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                <span className="capitalize">{promotion.status}</span>
              </div>
            </div>

            {/* Promotion Details */}
            <div className="space-y-3 mb-4">
              <p className="text-gray-300 text-sm">{promotion.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(promotion.type)}
                  <span className="text-white font-semibold">
                    {promotion.type === 'percentage' ? `${promotion.value}%` : 
                     promotion.type === 'fixed' ? `Br ${promotion.value}` : 'BOGO'}
                  </span>
                </div>
                <div className="bg-primary bg-opacity-20 text-primary px-3 py-1 rounded text-sm font-mono">
                  {promotion.code}
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(promotion.startDate).toLocaleDateString()} - {new Date(promotion.endDate).toLocaleDateString()}
                </span>
              </div>

              {promotion.usageLimit && (
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(promotion.usedCount / promotion.usageLimit) * 100}%` }}
                  ></div>
                </div>
              )}

              <div className="flex justify-between text-xs text-gray-400">
                <span>
                  {promotion.usedCount} / {promotion.usageLimit || '∞'} used
                </span>
                <span>
                  {promotion.minOrderAmount ? `Min. order: Br ${promotion.minOrderAmount}` : 'No minimum'}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button
                onClick={() => setEditingPromotion(promotion)}
                className="flex-1 btn-secondary flex items-center justify-center space-x-2 py-2"
              >
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => togglePromotionStatus(promotion.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                  promotion.status === 'active' 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {promotion.status === 'active' ? 'Deactivate' : 'Activate'}
              </button>
              <button 
                onClick={() => deletePromotion(promotion.id)}
                className="p-2 text-red-400 hover:bg-red-400 hover:bg-opacity-20 rounded-lg transition"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {(isAddModalOpen || editingPromotion) && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-secondary rounded-xl p-6 w-full max-w-2xl max-h-[90vh] bg-black overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {editingPromotion ? 'Edit Promotion' : 'Create New Promotion'}
              </h2>
              <button
                onClick={() => {
                  setIsAddModalOpen(false)
                  setEditingPromotion(null)
                  resetNewPromotion()
                }}
                className="text-gray-400 hover:text-white"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-300 mb-2">Promotion Title</label>
                <input
                  type="text"
                  value={editingPromotion ? editingPromotion.title : newPromotion.title}
                  onChange={(e) => editingPromotion
                    ? setEditingPromotion({...editingPromotion, title: e.target.value})
                    : setNewPromotion({...newPromotion, title: e.target.value})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Promotion Code</label>
                <input
                  type="text"
                  value={editingPromotion ? editingPromotion.code : newPromotion.code}
                  onChange={(e) => editingPromotion
                    ? setEditingPromotion({...editingPromotion, code: e.target.value.toUpperCase()})
                    : setNewPromotion({...newPromotion, code: e.target.value.toUpperCase()})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary font-mono"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Promotion Type</label>
                <select
                  value={editingPromotion ? editingPromotion.type : newPromotion.type}
                  onChange={(e) => editingPromotion
                    ? setEditingPromotion({...editingPromotion, type: e.target.value as Promotion['type']})
                    : setNewPromotion({...newPromotion, type: e.target.value as Promotion['type']})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                >
                  <option value="percentage">Percentage Discount</option>
                  <option value="fixed">Fixed Amount</option>
                  <option value="bogo">Buy One Get One</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">
                  {editingPromotion?.type === 'percentage' || newPromotion.type === 'percentage' ? 'Discount Percentage' :
                   editingPromotion?.type === 'fixed' || newPromotion.type === 'fixed' ? 'Discount Amount' : 'Value'}
                </label>
                <input
                  type="number"
                  value={editingPromotion ? editingPromotion.value : newPromotion.value}
                  onChange={(e) => editingPromotion
                    ? setEditingPromotion({...editingPromotion, value: parseFloat(e.target.value)})
                    : setNewPromotion({...newPromotion, value: parseFloat(e.target.value)})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Start Date</label>
                <input
                  type="date"
                  value={editingPromotion ? editingPromotion.startDate : newPromotion.startDate}
                  onChange={(e) => editingPromotion
                    ? setEditingPromotion({...editingPromotion, startDate: e.target.value})
                    : setNewPromotion({...newPromotion, startDate: e.target.value})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">End Date</label>
                <input
                  type="date"
                  value={editingPromotion ? editingPromotion.endDate : newPromotion.endDate}
                  onChange={(e) => editingPromotion
                    ? setEditingPromotion({...editingPromotion, endDate: e.target.value})
                    : setNewPromotion({...newPromotion, endDate: e.target.value})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Usage Limit</label>
                <input
                  type="number"
                  value={editingPromotion ? editingPromotion.usageLimit : newPromotion.usageLimit}
                  onChange={(e) => editingPromotion
                    ? setEditingPromotion({...editingPromotion, usageLimit: parseInt(e.target.value)})
                    : setNewPromotion({...newPromotion, usageLimit: parseInt(e.target.value)})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Minimum Order Amount</label>
                <input
                  type="number"
                  step="0.01"
                  value={editingPromotion ? editingPromotion.minOrderAmount : newPromotion.minOrderAmount}
                  onChange={(e) => editingPromotion
                    ? setEditingPromotion({...editingPromotion, minOrderAmount: parseFloat(e.target.value)})
                    : setNewPromotion({...newPromotion, minOrderAmount: parseFloat(e.target.value)})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                value={editingPromotion ? editingPromotion.description : newPromotion.description}
                onChange={(e) => editingPromotion
                  ? setEditingPromotion({...editingPromotion, description: e.target.value})
                  : setNewPromotion({...newPromotion, description: e.target.value})
                }
                rows={3}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary resize-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Applicable Branches</label>
              <div className="flex flex-wrap gap-2">
                {branches.map(branch => (
                  <label key={branch} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={(editingPromotion ? editingPromotion.applicableBranches : newPromotion.applicableBranches)?.includes(branch)}
                      onChange={(e) => {
                        const updateBranches = (currentBranches: string[]) => {
                          if (e.target.checked) {
                            return [...currentBranches, branch]
                          } else {
                            return currentBranches.filter(b => b !== branch)
                          }
                        }
                        
                        if (editingPromotion) {
                          setEditingPromotion({
                            ...editingPromotion,
                            applicableBranches: updateBranches(editingPromotion.applicableBranches)
                          })
                        } else {
                          setNewPromotion({
                            ...newPromotion,
                            applicableBranches: updateBranches(newPromotion.applicableBranches || [])
                          })
                        }
                      }}
                      className="rounded border-gray-700 bg-gray-800 text-primary focus:ring-primary"
                    />
                    <span className="text-gray-300 text-sm">{branch}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setIsAddModalOpen(false)
                  setEditingPromotion(null)
                  resetNewPromotion()
                }}
                className=""
              >
                Cancel
              </button>
              <button
                onClick={editingPromotion ? updatePromotion : addPromotion}
                className="bg-primary"
              >
                {editingPromotion ? 'Update Promotion' : 'Create Promotion'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}