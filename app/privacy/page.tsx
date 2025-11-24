import Link from 'next/link'
import { Shield, Lock, Eye, User, Mail, Phone } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary bg-opacity-20 p-4 rounded-2xl">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-400">
            Last updated: December 15, 2024
          </p>
        </div>

        <div className="card space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Welcome to London Cafe ("we," "our," or "us"). We are committed to protecting your privacy 
              and ensuring the security of your personal information. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you visit our website, use our 
              mobile application, or visit our cafes in Addis Ababa.
            </p>
            <p className="text-gray-300">
              By accessing or using our services, you agree to the terms of this Privacy Policy. 
              If you do not agree with the terms, please do not access our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                  <User className="h-5 w-5 text-primary mr-2" />
                  Personal Information
                </h3>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  <li>Name and contact details (email, phone number)</li>
                  <li>Delivery address for orders</li>
                  <li>Payment information (processed securely through our partners)</li>
                  <li>Date of birth for birthday rewards</li>
                  <li>Preferences and dietary requirements</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                  <Eye className="h-5 w-5 text-primary mr-2" />
                  Usage Information
                </h3>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Order history and preferences</li>
                  <li>Device information and location data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: Mail,
                  title: "Order Processing",
                  description: "Process and fulfill your orders, send order confirmations, and provide customer support"
                },
                {
                  icon: User,
                  title: "Personalization",
                  description: "Personalize your experience and recommend products based on your preferences"
                },
                {
                  icon: Phone,
                  title: "Communication",
                  description: "Send promotional offers, updates, and important service announcements"
                },
                {
                  icon: Shield,
                  title: "Security",
                  description: "Protect against fraud and ensure the security of our services"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <item.icon className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following circumstances:
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>
                <strong>Service Providers:</strong> We share information with trusted third parties who 
                assist us in operating our website, conducting our business, or serving our customers.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information when required by law 
                or to protect our rights, property, or safety.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with any merger, sale of company assets, 
                or acquisition.
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <div className="flex items-start space-x-3 bg-gray-800 p-4 rounded-lg">
              <Lock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  These measures include:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-1 mt-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure payment processing through certified partners</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p className="text-gray-300 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Right to access your personal information",
                "Right to correct inaccurate data",
                "Right to delete your personal information",
                "Right to restrict processing",
                "Right to data portability",
                "Right to object to processing",
                "Right to withdraw consent",
                "Right to lodge complaints"
              ].map((right, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-300">{right}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              Cookies are small files stored on your device that help us:
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>Remember your preferences and login information</li>
              <li>Understand how you use our website</li>
              <li>Provide personalized content and advertisements</li>
              <li>Analyze website traffic and performance</li>
            </ul>
            <div className="mt-4 p-4 bg-yellow-500 bg-opacity-20 border border-yellow-500 border-opacity-30 rounded-lg">
              <p className="text-yellow-400 text-sm">
                You can control cookies through your browser settings. However, disabling cookies may 
                affect your ability to use certain features of our website.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@londoncafeet.com
                </p>
                <p className="text-gray-300">
                  <strong>Phone:</strong> +251 11 123 4567
                </p>
                <p className="text-gray-300">
                  <strong>Address:</strong> Bole Road, Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date. 
              We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* Bottom Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-700">
            <Link href="/terms" className="btn-secondary text-center">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="btn-secondary text-center">
              Sitemap
            </Link>
            <Link href="/contact" className="btn-primary text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}