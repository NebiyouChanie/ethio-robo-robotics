import Link from 'next/link'
import RegistrationsTableClient from '@/components/admin/RegistrationsTableClient'
import { prisma } from '@/lib/prisma'

export default async function AdminRegistrationsPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const page = Number(searchParams.page || '1')
  const pageSize = Number(searchParams.pageSize || '10')
  const program = String(searchParams.program || '')
  const from = String(searchParams.from || '')
  const to = String(searchParams.to || '')

  // Build where clause (same logic as API)
  const where: any = {}
  if (program) {
    const trimmed = program.trim()
    if (trimmed.toUpperCase() === 'ARC') {
      where.division = { startsWith: 'ARC -' }
    } else {
      where.division = trimmed
    }
  }
  if (from || to) {
    where.createdAt = {}
    if (from) where.createdAt.gte = new Date(from)
    if (to) where.createdAt.lte = new Date(to)
  }

  const [total, registrations] = await Promise.all([
    prisma.registration.count({ where }),
    prisma.registration.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    })
  ])

  return (
    <div className="max-w-7xl mx-auto pr-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-white">Team Registrations</h1>
        <div className="text-sm text-gray-400">
          Total: {Number(total)} registrations
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <form className="p-4 border-b border-gray-700 grid grid-cols-1 lg:grid-cols-6 gap-3 items-center" action="/admin/registrations" method="get">
          <input type="hidden" name="page" value="1" />
          <select name="program" defaultValue={program} className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white min-w-0">
            <option value="">Filter by program</option>
            <option value="VEX IQ">VEX IQ</option>
            <option value="VEX V5">VEX V5</option>
            <option value="Programming">Programming</option>
            <option value="ARC - VEX IQ">ARC - VEX IQ</option>
            <option value="ARC - VEX V5">ARC - VEX V5</option>
          </select>
          <input type="date" name="from" defaultValue={from} placeholder="From" className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white min-w-0" />
          <input type="date" name="to" defaultValue={to} placeholder="To" className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white min-w-0" />
          <select name="pageSize" defaultValue={String(pageSize)} className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white min-w-0">
            <option value="10">10 / page</option>
            <option value="20">20 / page</option>
            <option value="50">50 / page</option>
          </select>
          <div className="flex items-center gap-2 col-span-1 lg:col-span-2">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded px-4 py-2">Apply</button>
            <a href={`/api/registrations/export?${new URLSearchParams({ program, from, to }).toString()}`} className="border border-gray-600 rounded px-4 py-2 hover:bg-gray-700" target="_blank" rel="noopener noreferrer">Export CSV</a>
            <a href="/admin/registrations" className="border border-gray-600 rounded px-4 py-2 hover:bg-gray-700">Reset</a>
          </div>
        </form>
        <div className="">
          <RegistrationsTableClient items={registrations} program={program} />
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
