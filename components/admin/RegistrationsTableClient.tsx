'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { toast } from 'sonner'

export default function RegistrationsTableClient({ items, program }: { items: any[]; program?: string }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [target, setTarget] = useState<any | null>(null)
  const isArc = !!program && program.toUpperCase().includes('ARC')
  const isLearner = !!program && ['VEX IQ','VEX V5','PROGRAMMING'].includes(program.toUpperCase())

  const onDelete = async (id: number) => {
    const res = await fetch(`/api/registrations/${id}`, { method: 'DELETE' })
    if (!res.ok) { toast.error('Failed to delete registration'); return }
    toast.success('Registration deleted')
    setOpen(false); setTarget(null)
    router.refresh()
  }

  return (
    <div className="overflow-x-auto w-full max-w-full">
      <table className="w-full text-sm">
        <thead className="bg-gray-800/60">
          <tr className="text-left">
            <th className="p-3">Team</th>
            <th className="p-3">Contact</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">School/Org</th>
            <th className="p-3">Division</th>
            {!program || isArc ? <th className="p-3">Team Size</th> : null}
            {!program || isLearner ? <th className="p-3">Age</th> : null}
            {!program || isLearner ? <th className="p-3">Gender</th> : null}
            {!program || isLearner ? <th className="p-3">Street</th> : null}
            {!program || isLearner ? <th className="p-3">Region</th> : null}
            {!program || isLearner ? <th className="p-3">Education</th> : null}
            {!program || isLearner ? <th className="p-3">Nearest</th> : null}
            {!program || isArc ? <th className="p-3">State</th> : null}
            {!program || isArc ? <th className="p-3">Postal</th> : null}
            {!program || isArc ? <th className="p-3">Available On</th> : null}
            {!program || isArc ? <th className="p-3">WhatsApp</th> : null}
            <th className="p-3">City</th>
            <th className="p-3">Country</th>
            <th className="p-3">Date</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((r) => (
            <tr key={r.id} className="odd:bg-gray-900/40">
              <td className="p-3">{r.teamName}</td>
              <td className="p-3">{r.contactName}</td>
              <td className="p-3 text-gray-300">{r.email}</td>
              <td className="p-3">{r.phone}</td>
              <td className="p-3">{r.school || 'N/A'}</td>
              <td className="p-3">{r.division}</td>
              {!program || isArc ? <td className="p-3">{r.teamSize ?? '-'}</td> : null}
              {!program || isLearner ? <td className="p-3">{r.age ?? '-'}</td> : null}
              {!program || isLearner ? <td className="p-3">{r.gender ?? '-'}</td> : null}
              {!program || isLearner ? <td className="p-3">{r.street ?? '-'}</td> : null}
              {!program || isLearner ? <td className="p-3">{r.region ?? '-'}</td> : null}
              {!program || isLearner ? <td className="p-3">{r.education ?? '-'}</td> : null}
              {!program || isLearner ? <td className="p-3">{r.nearest ?? '-'}</td> : null}
              {!program || isArc ? <td className="p-3">{r.state ?? '-'}</td> : null}
              {!program || isArc ? <td className="p-3">{r.postalCode ?? '-'}</td> : null}
              {!program || isArc ? <td className="p-3">{r.availableOn ?? '-'}</td> : null}
              {!program || isArc ? <td className="p-3">{r.whatsapp ?? '-'}</td> : null}
              <td className="p-3">{r.city || '—'}</td>
              <td className="p-3">{r.country || '—'}</td>
              <td className="p-3 text-gray-400">{new Date(r.createdAt).toLocaleDateString()}</td>
              <td className="p-3 whitespace-nowrap">
                <Link href={`/admin/registrations/edit/${r.id}`} className="px-2 py-1 rounded border border-gray-700 hover:bg-gray-800 mr-2">Edit</Link>
                <Dialog.Root open={open && target?.id === r.id} onOpenChange={(o)=>{ if(!o) setTarget(null); setOpen(o) }}>
                  <Dialog.Trigger asChild>
                    <button onClick={()=>{ setTarget(r); setOpen(true) }} className="px-2 py-1 rounded border border-red-600 text-red-400 hover:bg-red-600/10">Delete</button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/60" />
                    <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md rounded-lg border border-gray-700 bg-gray-900 p-5 text-white shadow-xl">
                      <Dialog.Title className="text-lg font-medium mb-2">Delete registration?</Dialog.Title>
                      <Dialog.Description className="text-sm text-gray-400 mb-4">This action cannot be undone.</Dialog.Description>
                      <div className="flex justify-end gap-2">
                        <Dialog.Close asChild>
                          <button className="px-4 py-2 rounded border border-gray-700 hover:bg-gray-800">Cancel</button>
                        </Dialog.Close>
                        <button onClick={()=>onDelete(r.id)} className="px-4 py-2 rounded border border-red-600 text-red-400 hover:bg-red-600/10">Delete</button>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


