import { Calendar, Clock, MapPin, Users, Tag } from 'lucide-react'

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  branch: string
  image: string
  type: 'workshop' | 'tasting' | 'live-music' | 'special'
  price: number
  capacity: number
}

export default function EventsPage() {
  const events: Event[] = [
    {
      id: '1',
      title: 'Latte Art Workshop',
      description: 'Learn the art of perfect latte designs with our expert baristas. Perfect for beginners and enthusiasts alike.',
      date: '2024-12-15',
      time: '14:00 - 16:00',
      branch: 'Covent Garden',
      image: '/images/latte-art.jpg',
      type: 'workshop',
      price: 35,
      capacity: 12
    },
    {
      id: '2',
      title: 'Coffee Tasting Evening',
      description: 'Join us for an exclusive tasting of single-origin coffees from Ethiopia, Colombia, and Sumatra.',
      date: '2024-12-18',
      time: '19:00 - 21:00',
      branch: 'Soho',
      image: '/images/tasting.jpg',
      type: 'tasting',
      price: 25,
      capacity: 20
    },
    {
      id: '3',
      title: 'Live Jazz Night',
      description: 'Enjoy smooth jazz performances while sipping your favorite coffee creations.',
      date: '2024-12-20',
      time: '20:00 - 23:00',
      branch: 'Shoreditch',
      image: '/images/jazz.jpg',
      type: 'live-music',
      price: 0,
      capacity: 40
    }
  ]

  const promotions = [
    {
      id: '1',
      title: 'Winter Warmers',
      description: '50% off all hot chocolate and seasonal drinks',
      validUntil: '2024-12-31',
      code: 'WINTER50'
    },
    {
      id: '2',
      title: 'Student Mondays',
      description: '20% off for students every Monday',
      validUntil: 'Ongoing',
      code: 'STUDENT20'
    },
    {
      id: '3',
      title: 'Early Bird Special',
      description: 'Free pastry with any coffee before 9 AM',
      validUntil: '2024-12-25',
      code: 'EARLYBIRD'
    }
  ]

  const getEventTypeColor = (type: string) => {
    const colors = {
      workshop: 'bg-blue-500',
      tasting: 'bg-green-500',
      'live-music': 'bg-purple-500',
      special: 'bg-orange-500'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-500'
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Events & <span className="text-primary">Promotions</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Discover upcoming events and exclusive offers
          </p>
        </div>

        {/* Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {events.map(event => (
              <div key={event.id} className="card group hover:border-primary transition-all duration-300">
                <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center relative">
                  <span className="text-gray-500">Event Image</span>
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded text-xs text-white ${getEventTypeColor(event.type)}`}>
                    {event.type.replace('-', ' ')}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-gray-400 mb-4">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-3" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-3" />
                    <span>{event.branch}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="h-4 w-4 mr-3" />
                    <span>{event.capacity} spots available</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">
                    {event.price === 0 ? 'FREE' : `£${event.price}`}
                  </span>
                  <button className="btn-primary text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Promotions Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Current Promotions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotions.map(promo => (
              <div key={promo.id} className="card bg-gradient-to-br from-primary to-accent text-white">
                <Tag className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="mb-4 opacity-90">{promo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-80">Use code: <strong>{promo.code}</strong></span>
                  <span className="text-xs opacity-70">Valid until {promo.validUntil}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}