'use client'


import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Hero */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-5xl font-medium mb-6">
            Contact <span className="text-cyan-400">Us</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Have questions or want to get started? Reach out and our team will get back to you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-400 text-sm">ethiorobo@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-400 text-sm">+251-911675401</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-gray-400 text-sm">Mon - Fri: 8:30 AM - 5:30 PM</div>
                  <div className="text-gray-400 text-sm">Sat: 8:30 AM - 12:00 AM</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <div className="font-semibold">Main Office</div>
                  <div className="text-gray-400 text-sm">Bole Reality Plaza, 12th Floor</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <div className="font-semibold">CMC</div>
                    <div className="text-gray-400 text-sm">Addis International Convention Center</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <div className="font-semibold">Bole TK Building</div>
                    <div className="text-gray-400 text-sm">1st Floor</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <div className="font-semibold">Bisrate Gabriel</div>
                    <div className="text-gray-400 text-sm">International Tennis Club, 3rd Floor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 pb-16">
            <form className="bg-gray-800 p-8 rounded-xl border border-gray-700 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                  <input className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Subject</label>
                <input className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea rows={6} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
              </div>
              <button type="button" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}
