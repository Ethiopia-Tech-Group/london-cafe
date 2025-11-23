'use client'
import { useState, useEffect } from 'react'
import { Search, Filter, Calendar, Clock, User, Phone, Mail, CheckCircle, XCircle, Edit, Trash2, Plus } from 'lucide-react'

interface Reservation {
  id: string
  customerName: string
  customerEmail: string
  customerPhone: string
  branch: string
  date: string
  time: string
  guests: number
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed'
  specialRequests?: string
  createdAt: string
}

export default function ReservationsManagement() {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [branchFilter, setBranchFilter] = useState('all')
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [newReservation, setNewReservation] = useState<Partial<Reservation>>({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    branch: 'Covent Garden',
    date: '',
    time: '',
    guests: 2,
    status: 'pending',
    specialRequests: ''
  })

  const branches = ['Covent Garden', 'Soho', 'Shoreditch', 'Notting Hill', 'Camden', 'Chelsea']
  const timeSlots = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30']

  useEffect(() => {
    setReservations([
      {
        id: 'RES-001',
        customerName: 'Emma Wilson',
        customerEmail: 'emma.wilson@email.com',
        customerPhone: '+44 7123 456789',
        branch: 'Covent Garden',
        date: '2024-01-20',
        time: '19:00',
        guests: 4,
        status: 'confirmed',
        specialRequests: 'Window seat preferred',
        createdAt: '2024-01-15T14:30:00Z'
      },
      {
        id: 'RES-002',
        customerName: 'Michael Brown',
        customerEmail: 'michael.b@email.com',
        customerPhone: '+44 7123 456790',
        branch: 'Soho',
        date: '2024-01-18',
        time: '12:30',
        guests: 2,
        status: 'pending',
        specialRequests: 'Allergy: nuts',
        createdAt: '2024-01-15T16:45:00Z'
      }
    ])
  }, [])

  const filteredReservations = reservations.filter(reservation =>
    (reservation.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
     reservation.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === 'all' || reservation.status === statusFilter) &&
    (branchFilter === 'all' || reservation.branch === branchFilter)
  )

  const updateReservationStatus = (id: string, status: Reservation['status']) => {
    setReservations(prev => prev.map(res =>
      res.id === id ? { ...res, status } : res
    ))
  }

  const deleteReservation = (id: string) => {
    setReservations(prev => prev.filter(res => res.id !== id))
  }

  const addReservation = () => {
    if (newReservation.customerName && newReservation.date && newReservation.time) {
      const reservation: Reservation = {
        id: `RES-${Date.now().toString().slice(-4)}`,
        customerName: newReservation.customerName!,
        customerEmail: newReservation.customerEmail!,
        customerPhone: newReservation.customerPhone!,
        branch: newReservation.branch!,
        date: newReservation.date!,
        time: newReservation.time!,
        guests: newReservation.guests!,
        status: newReservation.status!,
        specialRequests: newReservation.specialRequests,
        createdAt: new Date().toISOString()
      }
      setReservations(prev => [...prev, reservation])
      setIsAddModalOpen(false)
      setNewReservation({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        branch: 'Covent Garden',
        date: '',
        time: '',
        guests: 2,
        status: 'pending',
        specialRequests: ''
      })
    }
  }

  const getStatusColor = (status: Reservation['status']) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500 bg-opacity-20 text-white'
      case 'pending': return 'bg-yellow-500 bg-opacity-20 text-white'
      case 'cancelled': return 'bg-red-500 bg-opacity-20 text-white'
      case 'completed': return 'bg-blue-500 bg-opacity-20 text-white'
    }
  }

  const getStatusIcon = (status: Reservation['status']) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="h-4 w-4" />
      case 'pending': return <Clock className="h-4 w-4" />
      case 'cancelled': return <XCircle className="h-4 w-4" />
      case 'completed': return <CheckCircle className="h-4 w-4" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Reservations Management</h1>
          <p className="text-gray-400">Manage table bookings and reservations</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Add Reservation</span>
        </button>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search reservations..."
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
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <select
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
          >
            <option value="all">All Branches</option>
            {branches.map(branch => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Reservations Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 text-gray-400 font-semibold">Reservation</th>
                <th className="text-left py-4 text-gray-400 font-semibold">Customer</th>
                <th className="text-left py-4 text-gray-400 font-semibold">Date & Time</th>
                <th className="text-left py-4 text-gray-400 font-semibold">Branch</th>
                <th className="text-left py-4 text-gray-400 font-semibold">Guests</th>
                <th className="text-left py-4 text-gray-400 font-semibold">Status</th>
                <th className="text-left py-4 text-gray-400 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReservations.map((reservation) => (
                <tr key={reservation.id} className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                  <td className="py-4">
                    <div>
                      <p className="text-white font-semibold">{reservation.id}</p>
                      <p className="text-gray-400 text-sm">
                        {new Date(reservation.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </td>
                  <td className="py-4">
                    <div>
                      <p className="text-white font-medium">{reservation.customerName}</p>
                      <p className="text-gray-400 text-sm">{reservation.customerEmail}</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-white">{new Date(reservation.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-gray-400">{reservation.time}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="text-white">{reservation.branch}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-white font-semibold">{reservation.guests} people</span>
                  </td>
                  <td className="py-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 w-fit ${getStatusColor(reservation.status)}`}>
                      {getStatusIcon(reservation.status)}
                      <span className="capitalize">{reservation.status}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedReservation(reservation)}
                        className="p-2 hover:text-white text-blue-400 hover:bg-blue-400 hover:bg-opacity-20 rounded-lg transition"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      {reservation.status === 'pending' && (
                        <>
                          <button 
                            onClick={() => updateReservationStatus(reservation.id, 'confirmed')}
                            className="p-2  hover:text-white text-green-400 hover:bg-green-400 hover:bg-opacity-20 rounded-lg transition"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => updateReservationStatus(reservation.id, 'cancelled')}
                            className="p-2  hover:text-white text-red-400 hover:bg-red-400 hover:bg-opacity-20 rounded-lg transition"
                          >
                            <XCircle className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      <button 
                        onClick={() => deleteReservation(reservation.id)}
                        className="p-2  hover:text-white text-red-400 hover:bg-red-400 hover:bg-opacity-20 rounded-lg transition"
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

      {/* Add Reservation Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-secondary rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Add New Reservation</h2>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-300 mb-2">Customer Name</label>
                <input
                  type="text"
                  value={newReservation.customerName}
                  onChange={(e) => setNewReservation({...newReservation, customerName: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Customer Email</label>
                <input
                  type="email"
                  value={newReservation.customerEmail}
                  onChange={(e) => setNewReservation({...newReservation, customerEmail: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={newReservation.customerPhone}
                  onChange={(e) => setNewReservation({...newReservation, customerPhone: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Branch</label>
                <select
                  value={newReservation.branch}
                  onChange={(e) => setNewReservation({...newReservation, branch: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                >
                  {branches.map(branch => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Date</label>
                <input
                  type="date"
                  value={newReservation.date}
                  onChange={(e) => setNewReservation({...newReservation, date: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Time</label>
                <select
                  value={newReservation.time}
                  onChange={(e) => setNewReservation({...newReservation, time: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                >
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Number of Guests</label>
                <select
                  value={newReservation.guests}
                  onChange={(e) => setNewReservation({...newReservation, guests: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Status</label>
                <select
                  value={newReservation.status}
                  onChange={(e) => setNewReservation({...newReservation, status: e.target.value as Reservation['status']})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Special Requests</label>
              <textarea
                value={newReservation.specialRequests}
                onChange={(e) => setNewReservation({...newReservation, specialRequests: e.target.value})}
                rows={3}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary resize-none"
                placeholder="Any special requirements or requests..."
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={addReservation}
                className="btn-primary"
              >
                Create Reservation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reservation Detail Modal */}
      {selectedReservation && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-secondary rounded-xl p-6 w-full max-w-2xl bg-black">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Reservation Details</h2>
              <button
                onClick={() => setSelectedReservation(null)}
                className="text-gray-400 hover:text-white"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Reservation ID</h3>
                  <p className="text-white font-semibold">{selectedReservation.id}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Status</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 w-fit ${getStatusColor(selectedReservation.status)}`}>
                    {getStatusIcon(selectedReservation.status)}
                    <span className="capitalize">{selectedReservation.status}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Customer Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-primary" />
                      <span className="text-white">{selectedReservation.customerName}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-white">{selectedReservation.customerEmail}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-white">{selectedReservation.customerPhone}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Reservation Details</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-white">
                        {new Date(selectedReservation.date).toLocaleDateString()} at {selectedReservation.time}
                      </span>
                    </div>
                    <div className="text-white">
                      <strong>{selectedReservation.guests}</strong> guests at <strong>{selectedReservation.branch}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {selectedReservation.specialRequests && (
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Special Requests</h3>
                  <p className="text-white bg-gray-800 p-3 rounded-lg">
                    {selectedReservation.specialRequests}
                  </p>
                </div>
              )}

              <div className="flex space-x-3 pt-4 border-t border-gray-700">
                {selectedReservation.status === 'pending' && (
                  <>
                    <button
                      onClick={() => {
                        updateReservationStatus(selectedReservation.id, 'confirmed')
                        setSelectedReservation(null)
                      }}
                      className="btn-primary flex-1"
                    >
                      Confirm Reservation
                    </button>
                    <button
                      onClick={() => {
                        updateReservationStatus(selectedReservation.id, 'cancelled')
                        setSelectedReservation(null)
                      }}
                      className="btn-secondary flex-1"
                    >
                      Cancel Reservation
                    </button>
                  </>
                )}
                <button
                  onClick={() => setSelectedReservation(null)}
                  className="btn-secondary flex-1"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}