'use client'

import Link from 'next/link'

export default function PostsTableClient({ posts }: { posts: any[] }) {
  const togglePublish = async (p: any) => {
    await fetch(`/api/posts/${p.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isPublished: !p.isPublished, isDraft: p.isPublished }),
    })
    location.reload()
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
                <Link href={`/admin/post/edit/${p.id}`} className="px-3 py-1 rounded border border-gray-700 hover:bg-gray-800">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}



