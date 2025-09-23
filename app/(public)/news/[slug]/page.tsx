import ReactMarkdown from 'react-markdown'
import { prisma } from '@/lib/prisma'
import type { Post } from '@prisma/client'

async function getPost(slug: string): Promise<Post | null> {
  // @ts-expect-error Prisma client might be stale during dev; generated types will include isPublished
  return prisma.post.findFirst({ where: { slug, isPublished: true } })
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) {
    return (
      <div className="py-24 px-4 text-center text-gray-400">Post not found.</div>
    )
  }
  return (
    <article className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-medium mb-4">{post.title}</h1>
        <div className="text-gray-400 text-sm mb-6">{new Date(post.createdAt).toLocaleDateString()}</div>
        {post.imageUrl && (
          <img src={post.imageUrl} alt={post.title} className="w-full h-72 object-cover rounded-xl border border-gray-700 mb-8" />
        )}
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{post.body || ''}</ReactMarkdown>
        </div>
      </div>
    </article>
  )
}

