'use client'
import { useState } from 'react'
import { Star, Gift, Coffee, Crown, Zap, Target } from 'lucide-react'

export default function RewardsPage() {
  const [userPoints, setUserPoints] = useState(1250)
  const [userTier, setUserTier] = useState<'silver' | 'gold' | 'platinum'>('gold')

  const rewards = [
    {
      id: 1,
      name: 'Free Coffee',
      points: 500,
      description: 'Redeem for any regular coffee',
      icon: Coffee
    },
    {
      id: 2,
      name: 'Pastry Combo',
      points: 800,
      description: 'Coffee + pastry of your choice',
      icon: Star
    },
    {
      id: 3,
      name: 'Brunch for Two',
      points: 1500,
      description: 'Full brunch experience for two',
      icon: Gift
    }
  ]

  const tiers = [
    {
      name: 'Silver',
      icon: Star,
      points: 0,
      benefits: ['5% off all orders', 'Birthday treat'],
      color: 'text-gray-400'
    },
    {
      name: 'Gold',
      icon: Crown,
      points: 1000,
      benefits: ['10% off all orders', 'Free birthday meal', 'Priority seating'],
      color: 'text-yellow-500'
    },
    {
      name: 'Platinum',
      icon: Zap,
      points: 2500,
      benefits: ['15% off all orders', 'Exclusive events', 'Barista training session', 'Monthly free coffee'],
      color: 'text-purple-500'
    }
  ]

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loyalty & <span className="text-primary">Rewards</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Earn points with every purchase and unlock exclusive benefits
          </p>
        </div>

        {/* Points Summary */}
        <div className="card text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-8 w-8 text-yellow-500 fill-current" />
            <span className="text-3xl font-bold text-white">{userPoints}</span>
          </div>
          <p className="text-gray-400 mb-6">Available Points</p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
            <div 
              className="bg-primary h-4 rounded-full transition-all duration-500"
              style={{ width: `${(userPoints / 2500) * 100}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm">
            {2500 - userPoints} points until Platinum tier
          </p>
        </div>

        {/* Current Tier */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Your Current Tier</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Crown className="h-12 w-12 text-yellow-500" />
              <div>
                <h3 className="text-xl font-semibold text-white">Gold Member</h3>
                <p className="text-gray-400">Enjoy exclusive Gold tier benefits</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-primary font-semibold">10% off all orders</p>
              <p className="text-gray-400 text-sm">Plus other benefits</p>
            </div>
          </div>
        </div>

        {/* Available Rewards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Available Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rewards.map(reward => (
              <div key={reward.id} className="card text-center group hover:border-primary transition-all duration-300">
                <reward.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{reward.name}</h3>
                <p className="text-gray-400 mb-4">{reward.description}</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-white font-semibold">{reward.points} points</span>
                </div>
                <button
                  disabled={userPoints < reward.points}
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    userPoints >= reward.points
                      ? 'btn-primary'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {userPoints >= reward.points ? 'Redeem Now' : 'Not Enough Points'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tier Benefits */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Tier Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map(tier => (
              <div key={tier.name} className={`card ${
                userTier === tier.name.toLowerCase() ? 'border-primary' : ''
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  <tier.icon className={`h-6 w-6 ${tier.color}`} />
                  <h3 className={`text-lg font-semibold ${tier.color}`}>{tier.name}</h3>
                </div>
                <div className="space-y-2">
                  {tier.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                {tier.points > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-gray-400 text-sm">
                      {tier.points} points required
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}