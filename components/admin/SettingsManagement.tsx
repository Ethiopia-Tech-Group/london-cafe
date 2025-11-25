'use client'
import { useState } from 'react'
import { Save, Mail, Bell, Shield, Coffee, Users, DollarSign, MapPin, Plus, Edit, Trash2 } from 'lucide-react'

interface Branch {
  id: string
  name: string
  address: string
  phone: string
  email: string
  manager: string
  status: 'active' | 'inactive'
}

interface Settings {
  general: {
    siteName: string
    siteDescription: string
    contactEmail: string
    phoneNumber: string
    address: string
  }
  notifications: {
    emailNotifications: boolean
    orderAlerts: boolean
    reservationAlerts: boolean
    reviewAlerts: boolean
    marketingEmails: boolean
  }
  business: {
    currency: string
    taxRate: number
    serviceCharge: number
    openingTime: string
    closingTime: string
  }
  loyalty: {
    pointsPerPound: number
    signupBonus: number
    birthdayBonus: number
    silverThreshold: number
    goldThreshold: number
    platinumThreshold: number
  }
  branches: Branch[]
}

export default function SettingsManagement() {
  const [settings, setSettings] = useState<Settings>({
    general: {
      siteName: 'London Cafe',
      siteDescription: 'Premium Coffee Experience Across London',
      contactEmail: 'hello@londoncafe.com',
      phoneNumber: '+44 20 7123 4567',
      address: '25 Long Acre, Covent Garden, London WC2E 9JS'
    },
    notifications: {
      emailNotifications: true,
      orderAlerts: true,
      reservationAlerts: true,
      reviewAlerts: true,
      marketingEmails: false
    },
    business: {
      currency: 'GBP',
      taxRate: 20,
      serviceCharge: 0,
      openingTime: '07:00',
      closingTime: '21:00'
    },
    loyalty: {
      pointsPerPound: 10,
      signupBonus: 100,
      birthdayBonus: 250,
      silverThreshold: 0,
      goldThreshold: 1000,
      platinumThreshold: 2500
    },
    branches: [
      {
        id: '1',
        name: 'London Cafe - Bole Road',
        address: 'Bole Road, Addis Ababa, Ethiopia',
        phone: '+251 11 663 8115',
        email: 'bole@londoncafe.et',
        manager: 'John Doe',
        status: 'active'
      },
      {
        id: '2',
        name: 'London Cafe - Bisrate Gabriel',
        address: 'South Africa Street, Bisrate Gabriel, Addis Ababa',
        phone: '+251 96 957 1106',
        email: 'bisrate@londoncafe.et',
        manager: 'Jane Smith',
        status: 'active'
      },
      {
        id: '3',
        name: 'London Cafe - Bole Airport',
        address: 'Bole International Airport, Addis Ababa',
        phone: '+251 11 665 4321',
        email: 'airport@londoncafe.et',
        manager: 'Mike Johnson',
        status: 'active'
      }
    ]
  })

  const [activeTab, setActiveTab] = useState<'general' | 'notifications' | 'business' | 'loyalty' | 'branches'>('general')
  const [isSaving, setIsSaving] = useState(false)
  const [isAddingBranch, setIsAddingBranch] = useState(false)
  const [editingBranch, setEditingBranch] = useState<Branch | null>(null)
  const [newBranch, setNewBranch] = useState<Partial<Branch>>({
    name: '',
    address: '',
    phone: '',
    email: '',
    manager: '',
    status: 'active'
  })

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSaving(false)
    // In real app, you would save to your backend here
  }

  const updateSettings = (category: keyof Settings, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }))
  }

  const addBranch = () => {
    if (newBranch.name && newBranch.address && newBranch.phone && newBranch.email) {
      const branch: Branch = {
        id: Date.now().toString(),
        name: newBranch.name!,
        address: newBranch.address!,
        phone: newBranch.phone!,
        email: newBranch.email!,
        manager: newBranch.manager!,
        status: newBranch.status as 'active' | 'inactive'
      }
      setSettings(prev => ({
        ...prev,
        branches: [...prev.branches, branch]
      }))
      setIsAddingBranch(false)
      setNewBranch({ name: '', address: '', phone: '', email: '', manager: '', status: 'active' })
    }
  }

  const updateBranch = () => {
    if (editingBranch) {
      setSettings(prev => ({
        ...prev,
        branches: prev.branches.map(b => b.id === editingBranch.id ? editingBranch : b)
      }))
      setEditingBranch(null)
    }
  }

  const deleteBranch = (id: string) => {
    setSettings(prev => ({
      ...prev,
      branches: prev.branches.filter(b => b.id !== id)
    }))
  }

  const tabs = [
    { id: 'general' as const, label: 'General', icon: Coffee },
    { id: 'notifications' as const, label: 'Notifications', icon: Bell },
    { id: 'business' as const, label: 'Business', icon: DollarSign },
    { id: 'loyalty' as const, label: 'Loyalty Program', icon: Users },
    { id: 'branches' as const, label: 'Branch Management', icon: MapPin }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-gray-400">Manage your cafe settings and preferences</p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-primary p-1 px-2 rounded-lg flex items-center space-x-2 disabled:opacity-50"
        >
          <Save className="h-4 w-4" />
          <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="card space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="card">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">General Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Site Name</label>
                    <input
                      type="text"
                      value={settings.general.siteName}
                      onChange={(e) => updateSettings('general', 'siteName', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Contact Email</label>
                    <input
                      type="email"
                      value={settings.general.contactEmail}
                      onChange={(e) => updateSettings('general', 'contactEmail', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-2">Site Description</label>
                    <textarea
                      value={settings.general.siteDescription}
                      onChange={(e) => updateSettings('general', 'siteDescription', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={settings.general.phoneNumber}
                      onChange={(e) => updateSettings('general', 'phoneNumber', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-2">Address</label>
                    <textarea
                      value={settings.general.address}
                      onChange={(e) => updateSettings('general', 'address', e.target.value)}
                      rows={2}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Notification Settings</h2>
                <div className="space-y-4">
                  {Object.entries(settings.notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                      <div>
                        <p className="text-white font-medium">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {key === 'emailNotifications' && 'Receive all email notifications'}
                          {key === 'orderAlerts' && 'Get notified for new orders'}
                          {key === 'reservationAlerts' && 'Get notified for new reservations'}
                          {key === 'reviewAlerts' && 'Get notified for new reviews'}
                          {key === 'marketingEmails' && 'Receive marketing and promotional emails'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" />

  <div
    className="w-11 h-6 bg-gray-700 rounded-full peer-focus:outline-none
    peer-checked:bg-blue-600
    after:content-[''] after:absolute after:top-[2px] after:left-[2px]
    after:bg-white after:border-gray-300 after:border after:rounded-full
    after:h-5 after:w-5 after:transition-all
    peer-checked:after:translate-x-full"
  ></div>
</label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Business Settings */}
            {activeTab === 'business' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Business Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Currency</label>
                    <select
                      value={settings.business.currency}
                      onChange={(e) => updateSettings('business', 'currency', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    >
                      <option value="GBP">GBP (Br )</option>
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Tax Rate (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={settings.business.taxRate}
                      onChange={(e) => updateSettings('business', 'taxRate', parseFloat(e.target.value))}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Service Charge (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={settings.business.serviceCharge}
                      onChange={(e) => updateSettings('business', 'serviceCharge', parseFloat(e.target.value))}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Opening Time</label>
                    <input
                      type="time"
                      value={settings.business.openingTime}
                      onChange={(e) => updateSettings('business', 'openingTime', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Closing Time</label>
                    <input
                      type="time"
                      value={settings.business.closingTime}
                      onChange={(e) => updateSettings('business', 'closingTime', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Loyalty Program Settings */}
            {activeTab === 'loyalty' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Loyalty Program Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Points per Pound</label>
                    <input
                      type="number"
                      value={settings.loyalty.pointsPerPound}
                      onChange={(e) => updateSettings('loyalty', 'pointsPerPound', parseInt(e.target.value))}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Sign-up Bonus Points</label>
                    <input
                      type="number"
                      value={settings.loyalty.signupBonus}
                      onChange={(e) => updateSettings('loyalty', 'signupBonus', parseInt(e.target.value))}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Birthday Bonus Points</label>
                    <input
                      type="number"
                      value={settings.loyalty.birthdayBonus}
                      onChange={(e) => updateSettings('loyalty', 'birthdayBonus', parseInt(e.target.value))}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Silver Tier Threshold</label>
                    <input
                      type="number"
                      value={settings.loyalty.silverThreshold}
                      onChange={(e) => updateSettings('loyalty', 'silverThreshold', parseInt(e.target.value))}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Gold Tier Threshold</label>
                    <input
                      type="number"
                      value={settings.loyalty.goldThreshold}
                      onChange={(e) => updateSettings('loyalty', 'goldThreshold', parseInt(e.target.value))}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Platinum Tier Threshold</label>
                    <input
                      type="number"
                      value={settings.loyalty.platinumThreshold}
                      onChange={(e) => updateSettings('loyalty', 'platinumThreshold', parseInt(e.target.value))}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                {/* Tier Benefits Preview */}
                <div className="mt-8 p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-4">Tier Benefits Preview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border border-gray-600 rounded-lg">
                      <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-white font-semibold">Silver</h4>
                      <p className="text-gray-400 text-sm">{settings.loyalty.silverThreshold}+ points</p>
                      <p className="text-gray-300 text-xs mt-2">5% off all orders + Birthday treat</p>
                    </div>
                    <div className="text-center p-4 border border-yellow-500 rounded-lg">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-white font-semibold">Gold</h4>
                      <p className="text-gray-400 text-sm">{settings.loyalty.goldThreshold}+ points</p>
                      <p className="text-gray-300 text-xs mt-2">10% off + Free birthday meal + Priority seating</p>
                    </div>
                    <div className="text-center p-4 border border-purple-500 rounded-lg">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-white font-semibold">Platinum</h4>
                      <p className="text-gray-400 text-sm">{settings.loyalty.platinumThreshold}+ points</p>
                      <p className="text-gray-300 text-xs mt-2">15% off + Exclusive events + Monthly free coffee</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Branch Management */}
            {activeTab === 'branches' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Branch Management</h2>
                  <button
                    onClick={() => setIsAddingBranch(true)}
                    className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Branch</span>
                  </button>
                </div>

                {/* Branches List */}
                <div className="space-y-4">
                  {settings.branches.map((branch) => (
                    <div key={branch.id} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-white font-semibold text-lg">{branch.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              branch.status === 'active' 
                                ? 'bg-green-500 bg-opacity-20 text-green-400'
                                : 'bg-red-500 bg-opacity-20 text-red-400'
                            }`}>
                              {branch.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span className="text-gray-300">{branch.address}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-primary" />
                              <span className="text-gray-300">{branch.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Shield className="h-4 w-4 text-primary" />
                              <span className="text-gray-300">Manager: {branch.manager}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Coffee className="h-4 w-4 text-primary" />
                              <span className="text-gray-300">{branch.phone}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => setEditingBranch(branch)}
                            className="p-2 text-blue-400 hover:bg-blue-400 hover:bg-opacity-20 rounded-lg transition"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteBranch(branch.id)}
                            className="p-2 text-red-400 hover:bg-red-400 hover:bg-opacity-20 rounded-lg transition"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add/Edit Branch Modal */}
      {(isAddingBranch || editingBranch) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-secondary rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {editingBranch ? 'Edit Branch' : 'Add New Branch'}
              </h2>
              <button
                onClick={() => {
                  setIsAddingBranch(false)
                  setEditingBranch(null)
                  setNewBranch({ name: '', address: '', phone: '', email: '', manager: '', status: 'active' })
                }}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2">Branch Name</label>
                <input
                  type="text"
                  value={editingBranch ? editingBranch.name : newBranch.name}
                  onChange={(e) => editingBranch
                    ? setEditingBranch({...editingBranch, name: e.target.value})
                    : setNewBranch({...newBranch, name: e.target.value})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                  placeholder="London Cafe - Location"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2">Address</label>
                <input
                  type="text"
                  value={editingBranch ? editingBranch.address : newBranch.address}
                  onChange={(e) => editingBranch
                    ? setEditingBranch({...editingBranch, address: e.target.value})
                    : setNewBranch({...newBranch, address: e.target.value})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                  placeholder="Street, City, Country"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  value={editingBranch ? editingBranch.phone : newBranch.phone}
                  onChange={(e) => editingBranch
                    ? setEditingBranch({...editingBranch, phone: e.target.value})
                    : setNewBranch({...newBranch, phone: e.target.value})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                  placeholder="+251 XX XXX XXXX"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={editingBranch ? editingBranch.email : newBranch.email}
                  onChange={(e) => editingBranch
                    ? setEditingBranch({...editingBranch, email: e.target.value})
                    : setNewBranch({...newBranch, email: e.target.value})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                  placeholder="branch@londoncafe.et"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Manager</label>
                <input
                  type="text"
                  value={editingBranch ? editingBranch.manager : newBranch.manager}
                  onChange={(e) => editingBranch
                    ? setEditingBranch({...editingBranch, manager: e.target.value})
                    : setNewBranch({...newBranch, manager: e.target.value})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                  placeholder="Manager Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Status</label>
                <select
                  value={editingBranch ? editingBranch.status : newBranch.status}
                  onChange={(e) => editingBranch
                    ? setEditingBranch({...editingBranch, status: e.target.value as 'active' | 'inactive'})
                    : setNewBranch({...newBranch, status: e.target.value as 'active' | 'inactive'})
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setIsAddingBranch(false)
                  setEditingBranch(null)
                  setNewBranch({ name: '', address: '', phone: '', email: '', manager: '', status: 'active' })
                }}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={editingBranch ? updateBranch : addBranch}
                className="px-4 py-2 bg-primary hover:bg-accent text-white rounded-lg transition flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>{editingBranch ? 'Update Branch' : 'Add Branch'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}