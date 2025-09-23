"use client"

import { useState } from 'react'

export default function RegisterPage() {
  const [form, setForm] = useState({
    teamName: '',
    contactName: '',
    email: '',
    phone: '',
    school: '',
    city: '',
    country: '',
    division: '',
    teamSize: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const onChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = async (e: any) => {
    e.preventDefault()
    if (!form.division) { alert('Please select a program/division'); return }
    setSubmitting(true)
    try {
      const payload = { ...form, teamSize: form.teamSize ? Number(form.teamSize) : undefined }
      const res = await fetch('/api/registrations', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) {
        const err = await res.json().catch(() => ({} as any))
        alert(err?.error || 'Failed to register')
        return
      }
      alert('Registered successfully!')
      setForm({ teamName: '', contactName: '', email: '', phone: '', school: '', city: '', country: '', division: '', teamSize: '', message: '' })
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-medium">Register Your Team</h1>
          <p className="text-gray-300">Complete the form to register for our competitions and programs.</p>
        </div>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 bg-gray-900/40 border border-cyan-500/20 rounded-xl p-6">
          <input name="teamName" value={form.teamName} onChange={onChange} placeholder="Team Name" className="px-3 py-2 rounded border bg-gray-900/40 border-cyan-500/40 focus:border-cyan-500 outline-none" required />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="contactName" value={form.contactName} onChange={onChange} placeholder="Contact Name" className="px-3 py-2 rounded border bg-gray-900/40 border-cyan-500/40 focus:border-cyan-500 outline-none" required />
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="px-3 py-2 rounded border bg-gray-900/40 border-cyan-500/40 focus:border-cyan-500 outline-none" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="px-3 py-2 rounded border bg-gray-900/40 border-cyan-500/40 focus:border-cyan-500 outline-none" required />
            <input name="school" value={form.school} onChange={onChange} placeholder="School (optional)" className="px-3 py-2 rounded border bg-gray-900/40 border-cyan-500/40 focus:border-cyan-500 outline-none" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input name="city" value={form.city} onChange={onChange} placeholder="City" className="px-3 py-2 rounded border bg-gray-900/40 border-cyan-500/40 focus:border-cyan-500 outline-none" />
            <input name="country" value={form.country} onChange={onChange} placeholder="Country" className="px-3 py-2 rounded border bg-gray-900/40 border-cyan-500/40 focus:border-cyan-500 outline-none" />
            <input name="teamSize" type="number" min="1" value={form.teamSize} onChange={onChange} placeholder="Team Size" className="px-3 py-2 rounded border bg-gray-900/40 border-cyan-500/40 focus:border-cyan-500 outline-none" />
          </div>

          {/* Program selection cards */}
          <div className="mt-2">
            <div className="text-sm text-gray-400 mb-2">Select Program / Division</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'VEX IQ', desc: 'Elementary & Middle', value: 'VEX IQ' },
                { label: 'VEX V5', desc: 'High School', value: 'VEX V5' },
                { label: 'VEX U', desc: 'College & University', value: 'VEX U' },
              ].map((p) => {
                const active = form.division === p.value
                return (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setForm({ ...form, division: p.value })}
                    className={`text-left rounded-lg p-4 border transition-colors ${active ? 'border-cyan-500 bg-cyan-500/10' : 'border-cyan-500/30 hover:border-cyan-500/60'}`}
                  >
                    <div className="text-white font-medium">{p.label}</div>
                    <div className="text-sm text-gray-400">{p.desc}</div>
                  </button>
                )
              })}
            </div>
          </div>
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Additional Details" rows={4} className="px-3 py-2 rounded border bg-gray-900/40 border-cyan-500/40 focus:border-cyan-500 outline-none" />
          <button type="submit" disabled={submitting} className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded disabled:opacity-50">
            {submitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </div>
    </section>
  )
}


