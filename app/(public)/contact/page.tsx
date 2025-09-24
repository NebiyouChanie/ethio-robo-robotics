'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { toast } from 'sonner'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().trim().min(1, 'Full Name is required'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  subject: z.string().trim().min(1, 'Subject is required').min(3, 'Subject must be at least 3 characters'),
  message: z.string().trim().min(1, 'Message is required').min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof schema>

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', subject: '', message: '' }
  })

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
      if (!res.ok) {
        let payload: any = {}
        try { payload = await res.json() } catch {}
        if (res.status === 400 && payload?.error) {
          toast.error(payload.error)
        } else {
          toast.error('Something went wrong')
          console.error('Contact form submit failed', { status: res.status, payload })
        }
        return
      }
      toast.success('Message sent! We will get back to you shortly.')
      reset()
    } finally {
      // no-op; isSubmitting is managed by react-hook-form if we return a promise
    }
  }
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
            <form className="bg-gray-800 p-8 rounded-xl border border-gray-700 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                  <input {...register('name')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white focus:outline-none focus:border-cyan-500 ${errors.name ? 'border-red-500' : 'border-gray-700'}`} />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input type="email" {...register('email')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white focus:outline-none focus:border-cyan-500 ${errors.email ? 'border-red-500' : 'border-gray-700'}`} />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Subject</label>
                 <input {...register('subject')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white focus:outline-none focus:border-cyan-500 ${errors.subject ? 'border-red-500' : 'border-gray-700'}`} />
                 {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>}
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                 <textarea rows={6} {...register('message')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white focus:outline-none focus:border-cyan-500 ${errors.message ? 'border-red-500' : 'border-gray-700'}`} />
                 {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 disabled:opacity-60 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}
