import Link from 'next/link'
import { FileText, Scale, AlertTriangle, CreditCard, Coffee, User } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary bg-opacity-20 p-4 rounded-2xl">
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-400">
            Last updated: December 15, 2024
          </p>
        </div>

        <div className="card space-y-8">
          {/* Important Notice */}
          <div className="bg-yellow-500 bg-opacity-20 border border-yellow-500 border-opacity-30 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-yellow-400 font-bold text-lg mb-2">Important Notice</h3>
                <p className="text-yellow-400 text-opacity-90">
                  Please read these Terms of Service carefully before using our website, mobile application, 
                  or services. By accessing or using our services, you agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Agreement */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300">
              By accessing or using London Cafe's services, including our website, mobile application, 
              and in-cafe services, you agree to be bound by these Terms of Service and our Privacy Policy. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Coffee className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">What We Offer</h3>
                  <p className="text-gray-300">
                    London Cafe provides premium coffee, food, and related services through:
                  </p>
                  <ul className="text-gray-300 list-disc list-inside space-y-1 mt-2">
                    <li>Online ordering and delivery services</li>
                    <li>In-cafe dining and takeaway services</li>
                    <li>Mobile application for orders and rewards</li>
                    <li>Catering and event services</li>
                    <li>Loyalty and rewards program</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <User className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-lg font-semibold text-white">Account Responsibilities</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• You must be at least 18 years old to create an account</li>
                <li>• You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>• You agree to provide accurate and complete information</li>
                <li>• You are responsible for all activities that occur under your account</li>
                <li>• We reserve the right to suspend or terminate accounts that violate these terms</li>
              </ul>
            </div>
          </section>

          {/* Orders and Payments */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Orders and Payments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <CreditCard className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold text-white">Order Process</h3>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Orders are subject to availability and confirmation</li>
                  <li>• We reserve the right to refuse or cancel any order</li>
                  <li>• Prices are subject to change without notice</li>
                  <li>• Delivery times are estimates and not guaranteed</li>
                  <li>• You must review your order before completion</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Scale className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold text-white">Payment Terms</h3>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• All payments are processed in Ethiopian Birr</li>
                  <li>• We accept major credit cards and mobile payments</li>
                  <li>• Payment is required at time of order</li>
                  <li>• Refunds are processed according to our refund policy</li>
                  <li>• Delivery fees may apply based on location</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cancellations and Refunds */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cancellations and Refunds</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Order Cancellations</h3>
                <p className="text-gray-300 text-sm">
                  Orders can be cancelled within 15 minutes of placement. Once preparation has begun, 
                  cancellations may not be possible. For delivery orders, cancellations must be made 
                  before the driver is dispatched.
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Refund Policy</h3>
                <p className="text-gray-300 text-sm">
                  Refunds are provided for incorrect orders, quality issues, or undelivered orders. 
                  Refund requests must be made within 24 hours of order completion. Refunds will be 
                  processed to the original payment method within 5-7 business days.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All content included on our services, including text, graphics, logos, images, and software, 
              is the property of London Cafe or its content suppliers and protected by copyright laws.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-300 text-sm">
                You may not reproduce, distribute, modify, or create derivative works of any content 
                without our express written permission. The London Cafe name and logo are registered 
                trademarks and may not be used without authorization.
              </p>
            </div>
          </section>

          {/* User Conduct */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. User Conduct</h2>
            <p className="text-gray-300 mb-4">You agree not to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Use our services for any illegal purpose",
                "Harass, abuse, or harm other users or our staff",
                "Impersonate any person or entity",
                "Interfere with or disrupt our services",
                "Attempt to gain unauthorized access to our systems",
                "Use automated systems to access our services",
                "Share false or misleading information",
                "Violate any applicable laws or regulations"
              ].map((prohibition, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">{prohibition}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                To the fullest extent permitted by law, London Cafe shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including:
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li>Loss of profits, data, or use</li>
                <li>Personal injury or property damage</li>
                <li>Third-party claims</li>
                <li>Service interruptions or delays</li>
                <li>Errors or omissions in content</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-500 bg-opacity-20 rounded-lg">
                <p className="text-blue-400 text-sm">
                  Our total liability to you for all claims arising from these terms or your use of our 
                  services shall not exceed the amount you paid to us in the past six months.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
            <p className="text-gray-300">
              These Terms of Service shall be governed by and construed in accordance with the laws of 
              the Federal Democratic Republic of Ethiopia. Any disputes arising from these terms or your 
              use of our services shall be subject to the exclusive jurisdiction of the courts of Addis Ababa.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms of Service at any time. We will notify you of 
              significant changes by posting the new terms on our website and updating the "Last updated" 
              date. Your continued use of our services after such changes constitutes your acceptance 
              of the new terms.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-300">
                    <strong>Email:</strong> legal@londoncafeet.com
                  </p>
                  <p className="text-gray-300">
                    <strong>Phone:</strong> +251 11 123 4567
                  </p>
                </div>
                <div>
                  <p className="text-gray-300">
                    <strong>Address:</strong> Bole Road, Addis Ababa
                  </p>
                  <p className="text-gray-300">
                    <strong>Hours:</strong> Mon-Sun, 7:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-700">
            <Link href="/privacy" className="btn-secondary text-center">
              Privacy Policy
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