'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import { toast } from 'sonner'

export default function PostsTableClient({ posts }: { posts: any[] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [toDelete, setToDelete] = useState<any | null>(null)

  const togglePublish = async (p: any) => {
    const res = await fetch(`/api/posts/${p.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isPublished: !p.isPublished, isDraft: p.isPublished }),
    })
    if (!res.ok) {
      toast.error('Failed to update status')
      return
    }
    toast.success(p.isPublished ? 'Post unpublished' : 'Post published')
    router.refresh()
  }

  const deletePost = async (p: any) => {
    const res = await fetch(`/api/posts/${p.id}`, { method: 'DELETE' })
    if (!res.ok) {
      toast.error('Failed to delete post')
      return
    }
    toast.success('Post deleted')
    setOpen(false)
    setToDelete(null)
    router.refresh()
  }

  return (
    <div className="overflow-x-auto border border-gray-800 rounded-lg">
      <table className="w-full text-sm">
        <thead className="bg-gray-800/60">
          <tr className="text-left">
            <th className="p-3 border-b border-gray-800">Title</th>
            <th className="p-3 border-b border-gray-800">Slug</th>
            <th className="p-3 border-b border-gray-800">Published</th>
            <th className="p-3 border-b border-gray-800">Updated</th>
            <th className="p-3 border-b border-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id} className="odd:bg-gray-900/40">
              <td className="p-3 align-top">{p.title}</td>
              <td className="p-3 align-top text-gray-400">{p.slug}</td>
              <td className="p-3 align-top">{p.isPublished ? 'Yes' : 'No'}</td>
              <td className="p-3 align-top text-gray-400">{new Date(p.updatedAt).toLocaleString()}</td>
              <td className="p-3 align-top">
                <button
                  className="px-3 py-1 rounded border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 mr-2"
                  onClick={() => togglePublish(p)}
                >
                  {p.isPublished ? 'Unpublish' : 'Publish'}
                </button>
                <Link href={`/admin/post/edit/${p.id}`} className="px-3 py-1 rounded border border-gray-700 hover:bg-gray-800 mr-2">Edit</Link>
                <Dialog.Root open={open && toDelete?.id === p.id} onOpenChange={(o)=>{ if(!o) setToDelete(null); setOpen(o) }}>
                  <Dialog.Trigger asChild>
                    <button onClick={() => { setToDelete(p); setOpen(true) }} className="px-3 py-1 rounded border border-red-600 text-red-400 hover:bg-red-600/10">Delete</button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/60" />
                    <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md rounded-lg border border-gray-700 bg-gray-900 p-5 text-white shadow-xl">
                      <Dialog.Title className="text-lg font-medium mb-2">Delete post?</Dialog.Title>
                      <Dialog.Description className="text-sm text-gray-400 mb-4">
                        This action cannot be undone. The post "{p.title}" will be permanently removed.
                      </Dialog.Description>
                      <div className="flex justify-end gap-2">
                        <Dialog.Close asChild>
                          <button className="px-4 py-2 rounded border border-gray-700 hover:bg-gray-800">Cancel</button>
                        </Dialog.Close>
                        <button onClick={() => deletePost(p)} className="px-4 py-2 rounded border border-red-600 text-red-400 hover:bg-red-600/10">Delete</button>
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



