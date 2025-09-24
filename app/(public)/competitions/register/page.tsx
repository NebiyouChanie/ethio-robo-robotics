"use client"

import { useState } from "react"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import { Plus, Trash2, Send } from "lucide-react"
import { toast } from 'sonner'

type Contestant = {
  name: string
  kit: string
  school: string
  email: string
  phone: string
  country: string
}

export default function ArcRegistrationPage() {
  const [teamName, setTeamName] = useState("")
  const [level, setLevel] = useState("VEX IQ")
  const [coach, setCoach] = useState("")
  const [teamLeader, setTeamLeader] = useState("")
  const [note, setNote] = useState("")
  const [contestants, setContestants] = useState<Contestant[]>([
    { name: "", kit: "", school: "", email: "", phone: "", country: "" },
  ])

  const addRow = () => {
    setContestants((prev) => [...prev, { name: "", kit: "", school: "", email: "", phone: "", country: "" }])
  }

  const removeRow = (idx: number) => {
    setContestants((prev) => prev.filter((_, i) => i !== idx))
  }

  const updateCell = (idx: number, key: keyof Contestant, value: string) => {
    setContestants((prev) => {
      const next = [...prev]
      next[idx] = { ...next[idx], [key]: value }
      return next
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const payload = { teamName, level, coach, teamLeader, note, contestants }
    // Placeholder: you can replace with an API call
    console.log("ARC Registration Payload", payload)
    toast.info("Registration captured locally. Connect an API to submit.")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header currentPage="competitions" />

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">
              African Robotics Championship <span className="text-cyan-400">Registration</span>
            </h1>
            <p className="text-gray-300">Season 2024-25</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Team info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <label className="block text-sm text-gray-400 mb-2">Name of the Team</label>
                <input
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="Enter team name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Level (Category)</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="VEX IQ">Elementary / Middle School (VEX IQ)</option>
                  <option value="VRC">High School (VRC)</option>
                  <option value="VEX U">College and University (VEX U)</option>
                </select>
              </div>
            </div>

            {/* Coach and Team Leader - group level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Coach</label>
                <input
                  value={coach}
                  onChange={(e) => setCoach(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="Coach full name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Team Leader</label>
                <input
                  value={teamLeader}
                  onChange={(e) => setTeamLeader(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="Team leader full name"
                />
              </div>
            </div>

            {/* Contestants table */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-gray-400">Contestants</label>
                <button type="button" onClick={addRow} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg">
                  <Plus className="w-4 h-4" /> Add Row
                </button>
              </div>

              <div className="overflow-auto border border-gray-700 rounded-lg">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-3 py-3 text-left border-b border-gray-700">No.</th>
                      <th className="px-3 py-3 text-left border-b border-gray-700">Name of the Contestant</th>
                      <th className="px-3 py-3 text-left border-b border-gray-700">ARC Robot Kit (VEX)</th>
                      <th className="px-3 py-3 text-left border-b border-gray-700">Name of the School</th>
                      <th className="px-3 py-3 text-left border-b border-gray-700">Email</th>
                      <th className="px-3 py-3 text-left border-b border-gray-700">Phone number</th>
                      <th className="px-3 py-3 text-left border-b border-gray-700">Country</th>
                      <th className="px-3 py-3 text-left border-b border-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contestants.map((c, idx) => (
                      <tr key={idx} className="odd:bg-gray-900 even:bg-gray-900/70">
                        <td className="px-3 py-3 align-top border-t border-gray-800">{idx + 1}</td>
                        <td className="px-3 py-2 align-top border-t border-gray-800">
                          <input value={c.name} onChange={(e) => updateCell(idx, "name", e.target.value)} className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded" placeholder="Full name" />
                        </td>
                        <td className="px-3 py-2 align-top border-t border-gray-800">
                          <input value={c.kit} onChange={(e) => updateCell(idx, "kit", e.target.value)} className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded" placeholder="VEX IQ / VRC / VEX U" />
                        </td>
                        <td className="px-3 py-2 align-top border-t border-gray-800">
                          <input value={c.school} onChange={(e) => updateCell(idx, "school", e.target.value)} className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded" placeholder="School name" />
                        </td>
                        <td className="px-3 py-2 align-top border-t border-gray-800">
                          <input type="email" value={c.email} onChange={(e) => updateCell(idx, "email", e.target.value)} className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded" placeholder="email@example.com" />
                        </td>
                        <td className="px-3 py-2 align-top border-t border-gray-800">
                          <input value={c.phone} onChange={(e) => updateCell(idx, "phone", e.target.value)} className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded" placeholder="Phone" />
                        </td>
                        <td className="px-3 py-2 align-top border-t border-gray-800">
                          <input value={c.country} onChange={(e) => updateCell(idx, "country", e.target.value)} className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded" placeholder="Country" />
                        </td>
                        <td className="px-3 py-2 align-top border-t border-gray-800">
                          <button type="button" onClick={() => removeRow(idx)} className="inline-flex items-center gap-1 text-red-400 hover:text-red-300">
                            <Trash2 className="w-4 h-4" /> Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Note</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                placeholder="Any additional information"
              />
            </div>

            {/* Submit */}
            <div className="flex items-center gap-3">
              <button type="submit" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <Send className="w-4 h-4" /> Submit Registration
              </button>
              <a href="/one.pdf" download className="text-cyan-400 hover:text-cyan-300">Download ARC PDF</a>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
