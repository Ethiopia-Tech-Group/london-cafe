import { Calendar, User, Clock, ArrowRight } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  readTime: string
  category: string
  image: string
  tags: string[]
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Art of Perfect Espresso',
      excerpt: 'Discover the secrets behind pulling the perfect shot of espresso and what makes our coffee special.',
      content: '',
      author: 'Sarah Chen',
      publishDate: '2024-11-15',
      readTime: '5 min read',
      category: 'Coffee Guide',
      image: '/images/espresso.jpg',
      tags: ['espresso', 'coffee', 'barista']
    },
    {
      id: '2',
      title: 'Sustainable Coffee Farming',
      excerpt: 'How we partner with ethical farms to bring you the finest coffee while supporting communities.',
      content: '',
      author: 'James Wilson',
      publishDate: '2024-11-08',
      readTime: '7 min read',
      category: 'Sustainability',
      image: '/images/farming.jpg',
      tags: ['sustainability', 'farming', 'ethical']
    },
    {
      id: '3',
      title: 'Meet Our Head Barista',
      excerpt: 'Get to know Maria Rodriguez and her journey to becoming London Cafe\'s head barista.',
      content: '',
      author: 'David Thompson',
      publishDate: '2024-11-01',
      readTime: '4 min read',
      category: 'Team Spotlight',
      image: '/images/barista.jpg',
      tags: ['team', 'barista', 'interview']
    }
  ]

  const categories = ['All', 'Coffee Guide', 'Sustainability', 'Team Spotlight', 'Events', 'Recipes']

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            London Cafe <span className="text-primary">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stories from our coffee journey, team spotlights, and expert guides
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(category => (
            <button
              key={category}
              className="px-4 py-2 bg-secondary text-gray-300 rounded-lg hover:bg-primary hover:text-white transition"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="card group hover:border-primary transition-all duration-300">
              <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Blog Image</span>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                <span className="px-2 py-1 bg-primary bg-opacity-20 text-primary rounded">
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(post.publishDate).toLocaleDateString()}
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>

              <p className="text-gray-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center space-x-1 text-primary hover:text-accent transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  )
}