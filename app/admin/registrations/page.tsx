import Link from 'next/link'
import { headers } from 'next/headers'

function getBaseUrl() {
  const h = headers()
  const host = h.get('x-forwarded-host') || h.get('host') || 'localhost:3000'
  const proto = h.get('x-forwarded-proto') || 'http'
  return `${proto}://${host}`
}

async function fetchRegs(query: string) {
  const base = getBaseUrl()
  try {
    const res = await fetch(`${base}/api/registrations?${query}`, { cache: 'no-store' })
    const data = await res.json()
    if (!res.ok) return { items: [], total: 0, page: 1, pageSize: 10 }
    return {
      items: Array.isArray(data?.items) ? data.items : [],
      total: Number(data?.total || 0),
      page: Number(data?.page || 1),
      pageSize: Number(data?.pageSize || 10),
    }
  } catch {
    return { items: [], total: 0, page: 1, pageSize: 10 }
  }
}

export default async function AdminRegistrationsPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const page = Number(searchParams.page || '1')
  const pageSize = Number(searchParams.pageSize || '10')
  const program = String(searchParams.program || '')
  const from = String(searchParams.from || '')
  const to = String(searchParams.to || '')

  const qs = new URLSearchParams()
  qs.set('page', String(page))
  qs.set('pageSize', String(pageSize))
  if (program) qs.set('program', program)
  if (from) qs.set('from', from)
  if (to) qs.set('to', to)
  const { items: registrations = [], total = 0 } = await fetchRegs(qs.toString())

  return (
    <div className="w-full mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-white">Team Registrations</h1>
        <div className="text-sm text-gray-400">
          Total: {Number(total)} registrations
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <form className="p-4 border-b border-gray-700 grid grid-cols-1 md:grid-cols-5 gap-3" action="/admin/registrations" method="get">
          <input type="hidden" name="page" value="1" />
          <select name="program" defaultValue={program} className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white">
            <option value="">Filter by program</option>
            <option value="VEX IQ">VEX IQ</option>
            <option value="VEX V5">VEX V5</option>
            <option value="Programming">Programming</option>
            <option value="ARC - VEX IQ">ARC - VEX IQ</option>
            <option value="ARC - VEX V5">ARC - VEX V5</option>
          </select>
          <input type="date" name="from" defaultValue={from} placeholder="From" className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white" />
          <input type="date" name="to" defaultValue={to} placeholder="To" className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white" />
          <select name="pageSize" defaultValue={String(pageSize)} className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white">
            <option value="10">10 / page</option>
            <option value="20">20 / page</option>
            <option value="50">50 / page</option>
          </select>
          <div className="flex items-center gap-2 md:justify-end">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded px-4 py-2">Apply</button>
            <a href="/admin/registrations" className="border border-gray-600 rounded px-4 py-2 hover:bg-gray-700">Reset</a>
          </div>
        </form>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Team Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Contact</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Email</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Phone</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">School/Org</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Division</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Team Size</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">City</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Country</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {registrations.map((reg: any) => (
                <tr key={reg.id} className="hover:bg-gray-700/50">
                  <td className="px-4 py-3 text-sm text-white font-medium">{reg.teamName}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.contactName}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.email}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.phone}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.school || 'N/A'}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.division}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.teamSize || 'N/A'}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.city || '—'}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.country || '—'}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">
                    {new Date(reg.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {registrations.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No registrations found
          </div>
        )}
        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-gray-700 text-sm text-gray-300">
          <div>Page {page} of {Math.max(1, Math.ceil((total || 0) / pageSize))} • {total} total</div>
          <div className="flex items-center gap-2">
            <Link href={`/admin/registrations?${new URLSearchParams({ page: String(Math.max(1, page - 1)), pageSize: String(pageSize), program, from, to }).toString()}`} className={`px-3 py-1 rounded border ${page <= 1 ? 'pointer-events-none opacity-50 border-gray-700' : 'border-gray-600 hover:bg-gray-700'}`}>Prev</Link>
            <Link href={`/admin/registrations?${new URLSearchParams({ page: String(page + 1), pageSize: String(pageSize), program, from, to }).toString()}`} className={`px-3 py-1 rounded border ${(page * pageSize) >= (total || 0) ? 'pointer-events-none opacity-50 border-gray-700' : 'border-gray-600 hover:bg-gray-700'}`}>Next</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
