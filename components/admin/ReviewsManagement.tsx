'use client'
import { useState, useEffect } from 'react'
import { Search, Star, User, Calendar, MessageSquare, ThumbsUp, ThumbsDown, Trash2, Filter, XCircle } from 'lucide-react'

interface Review {
  id: string
  customerName: string
  customerEmail: string
  rating: number
  comment: string
  branch: string
  date: string
  status: 'published' | 'pending' | 'rejected'
  helpful: number
  response?: string
}

export default function ReviewsManagement() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [ratingFilter, setRatingFilter] = useState('all')
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)
  const [responseText, setResponseText] = useState('')

  useEffect(() => {
    setReviews([
      {
        id: 'REV-001',
        customerName: 'Emma Wilson',
        customerEmail: 'emma.wilson@email.com',
        rating: 5,
        comment: 'The best coffee in London! The atmosphere is perfect for working or catching up with friends. The baristas are incredibly skilled and friendly.',
        branch: 'Covent Garden',
        date: '2024-01-15',
        status: 'published',
        helpful: 12,
        response: 'Thank you for your wonderful feedback, Emma! We\'re thrilled you enjoy our coffee and atmosphere.'
      },
      {
        id: 'REV-002',
        customerName: 'Michael Brown',
        customerEmail: 'michael.b@email.com',
        rating: 3,
        comment: 'Good coffee but the service was slow today. Had to wait 15 minutes for a simple cappuccino.',
        branch: 'Soho',
        date: '2024-01-14',
        status: 'pending',
        helpful: 3
      },
      {
        id: 'REV-003',
        customerName: 'Sarah Johnson',
        customerEmail: 'sarah.j@email.com',
        rating: 4,
        comment: 'Love their seasonal drinks and the loyalty program is fantastic! The avocado toast is amazing.',
        branch: 'Shoreditch',
        date: '2024-01-13',
        status: 'published',
        helpful: 8
      }
    ])
  }, [])

  const filteredReviews = reviews.filter(review =>
    (review.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
     review.comment.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === 'all' || review.status === statusFilter) &&
    (ratingFilter === 'all' || review.rating === parseInt(ratingFilter))
  )

  const updateReviewStatus = (id: string, status: Review['status']) => {
    setReviews(prev => prev.map(review =>
      review.id === id ? { ...review, status } : review
    ))
  }

  const addResponse = (id: string) => {
    if (responseText.trim()) {
      setReviews(prev => prev.map(review =>
        review.id === id ? { ...review, response: responseText, status: 'published' as const } : review
      ))
      setResponseText('')
      setSelectedReview(null)
    }
  }

  const deleteReview = (id: string) => {
    setReviews(prev => prev.filter(review => review.id !== id))
  }

  const getStatusColor = (status: Review['status']) => {
    switch (status) {
      case 'published': return 'bg-green-500 bg-opacity-20 text-green-400'
      case 'pending': return 'bg-yellow-500 bg-opacity-20 text-yellow-400'
      case 'rejected': return 'bg-red-500 bg-opacity-20 text-red-400'
    }
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Reviews Management</h1>
          <p className="text-gray-400">Manage customer reviews and responses</p>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search reviews..."
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
            <option value="published">Published</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div key={review.id} className="card hover:shadow-lg transition-shadow bg-gray-800 border border-gray-700 p-4">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{review.customerName}</h3>
                  <p className="text-gray-400 text-sm">{review.customerEmail}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className={`px-3 py-1 text-primary rounded-full text-xs font-semibold ${getStatusColor(review.status)}`}>
                  {review.status}
                </div>
                <div className="flex items-center space-x-1 text-gray-400 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(review.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  {renderStars(review.rating)}
                  <span className="text-gray-400 text-sm">{review.branch}</span>
                </div>
                <p className="text-gray-300">{review.comment}</p>
              </div>
            </div>

            {review.response && (
              <div className="bg-primary bg-opacity-10 border-l-4 border-primary p-4 rounded-r-lg mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span className="text-primary font-semibold">Owner Response</span>
                </div>
                <p className="text-white">{review.response}</p>
              </div>
            )}

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{review.helpful} people found this helpful</span>
                </div>
              </div>

              <div className="flex space-x-2">
                {review.status === 'pending' && (
                  <>
                    <button
                      onClick={() => updateReviewStatus(review.id, 'published')}
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm transition"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateReviewStatus(review.id, 'rejected')}
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm transition"
                    >
                      Reject
                    </button>
                  </>
                )}
                {!review.response && (
                  <button
                    onClick={() => setSelectedReview(review)}
                    className="px-3 py-1 bg-primary hover:bg-accent text-white rounded text-sm transition"
                  >
                    Respond
                  </button>
                )}
                <button
                  onClick={() => deleteReview(review.id)}
                  className="p-1 text-red-400 hover:bg-red-400 hover:bg-opacity-20 rounded transition"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Response Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-secondary rounded-xl p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Respond to Review</h2>
              <button
                onClick={() => {
                  setSelectedReview(null)
                  setResponseText('')
                }}
                className="text-gray-400 hover:text-white"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Review Details */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{selectedReview.customerName}</p>
                    <div className="flex items-center space-x-2">
                      {renderStars(selectedReview.rating)}
                      <span className="text-gray-400 text-sm">{selectedReview.branch}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">{selectedReview.comment}</p>
              </div>

              {/* Response Form */}
              <div>
                <label className="block text-gray-300 mb-2">Your Response</label>
                <textarea
                  value={responseText}
                  onChange={(e) => setResponseText(e.target.value)}
                  rows={4}
                  placeholder="Write your response to this review..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => {
                    setSelectedReview(null)
                    setResponseText('')
                  }}
                  className="bg-gray-800 rounded py-1 px-2"
                >
                  Cancel
                </button>
                <button
                  onClick={() => addResponse(selectedReview.id)}
                  disabled={!responseText.trim()}
                  className="bg-primary px-2 rounded  disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Publish Response
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}