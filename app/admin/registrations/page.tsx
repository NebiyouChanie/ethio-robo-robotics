import { prisma } from '@/lib/prisma'

export default async function AdminRegistrationsPage() {
  const registrations = await prisma.registration.findMany({ 
    orderBy: { createdAt: 'desc' } 
  })

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-white">Team Registrations</h1>
        <div className="text-sm text-gray-400">
          Total: {registrations.length} registrations
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Team Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Contact</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Email</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Phone</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">School</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Division</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Team Size</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {registrations.map((reg) => (
                <tr key={reg.id} className="hover:bg-gray-700/50">
                  <td className="px-4 py-3 text-sm text-white font-medium">{reg.teamName}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.contactName}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.email}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.phone}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.school || 'N/A'}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.division}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{reg.teamSize || 'N/A'}</td>
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
      </div>
    </div>
  )
}
