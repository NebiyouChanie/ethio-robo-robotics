import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import PostsTableClient from '@/components/admin/PostsTableClient'

export default async function AdminPostsPage() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } })
  return (
    <div className="max-w-7xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Posts</h1>
        <Link href="/admin/post/add" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded">New Post</Link>
      </div>
      <PostsTableClient posts={posts as any[]} />
    </div>
  )
}

