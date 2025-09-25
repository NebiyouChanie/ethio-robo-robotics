import { prisma } from '@/lib/prisma'
import RegistrationForm from '@/components/admin/RegistrationForm'

export default async function AdminRegistrationEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: idParam } = await params
  const id = Number(idParam)
  const reg = await prisma.registration.findUnique({ where: { id } })
  if (!reg) return null
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-semibold mb-4">Edit Registration</h1>
      <RegistrationForm initial={{ ...reg }} />
    </div>
  )
}


