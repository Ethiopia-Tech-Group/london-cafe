'use client'
import { useState, useEffect } from 'react'
import { Star, Quote, Award, Heart } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Ate here 2 times staff were super good cheapest food prices in the whole airport u don’t feel ripped off must try agian Garry is a really good bar joe has been very helpful to me have a pleasant experience',
    role: 'Regular Customer',
    avatar: '/images/avatar-1.jpg',
    date: '2 days ago',
    helpful: 12
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    comment: 'It was amazing i was seting near ethiopian traditional coffee ther was served me woineshet and mr wondwosen terefe and also i recomend to everyone visit this london cafe.    ',
    branch: 'Soho',
    role: 'Food Blogger',
    avatar: '/images/avatar-2.jpg',
    date: '1 week ago',
    helpful: 8
  },
  {
    id: 3,
    name: 'Emma Davis',
    rating: 4,
    comment: 'We had an amazing time at London cafe . Exceptional customer service from Mike and food was amazing. I was traveling with a 4 year old and made it easy, played with her. Thank you for your service',
    branch: 'Shoreditch',
    role: 'Student',
    avatar: '/images/avatar-3.jpg',
    date: '3 days ago',
    helpful: 15
  }
]

export default function ReviewsPreview() {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Quote className="h-32 w-32 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Award className="h-32 w-32 text-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary bg-opacity-20 text-primary px-6 py-2 rounded-full mb-4">
            <Heart className="h-5 w-5" />
            <span className="font-semibold">Customer Love</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our customers have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Review Carousel */}
          <div className="relative">
            <div className="bg-secondary rounded-3xl p-8 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary opacity-20">
                <Quote className="h-16 w-16" />
              </div>

              {/* Review Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < reviews[currentReview].rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-2xl text-white mb-8 leading-relaxed">
                  "{reviews[currentReview].comment}"
                </blockquote>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {reviews[currentReview].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{reviews[currentReview].name}</h4>
                    <p className="text-primary">{reviews[currentReview].role}</p>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm mt-1">
                      <span>{reviews[currentReview].branch}</span>
                      <span>•</span>
                      <span>{reviews[currentReview].date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentReview 
                        ? 'bg-primary scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.filter((_, idx) => idx !== currentReview).map((review, index) => (
              <div 
                key={review.id}
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300 group cursor-pointer"
                onClick={() => setCurrentReview(reviews.findIndex(r => r.id === review.id))}
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Excerpt */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-white transition-colors">
                  "{review.comment}"
                </p>

                {/* Reviewer */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-primary text-xs">{review.branch}</p>
                  </div>
                  <div className="text-gray-400 text-xs">
                    {review.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-700">
          {[
            { number: '4.8/5', label: 'Average Rating' },
            { number: '2,500+', label: 'Reviews' },
            { number: '95%', label: 'Would Recommend' },
            { number: '98%', label: 'Service Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-accent text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  )
}