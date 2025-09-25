import ReactMarkdown from 'react-markdown'
import { prisma } from '@/lib/prisma'
import type { Post } from '@prisma/client'
import { SimpleCarousel } from '@/components/ui/simple-carousel'

async function getPost(slug: string): Promise<(Post & { images: { url: string }[] }) | null> {
  return prisma.post.findFirst({ where: { slug, isPublished: true }, include: { images: true } }) as Promise<(Post & { images: { url: string }[] }) | null>
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) {
    return (
      <div className="py-24 px-4 text-center text-gray-400">Post not found.</div>
    )
  }
  const imageUrls = (post.images?.map((i) => i.url) || []).length > 0 ? post.images.map((i) => i.url) : (post.imageUrl ? [post.imageUrl] : [])
  return (
    <article className="py-20 px-4 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-medium mb-4">{post.title}</h1>
        <div className="text-gray-400 text-sm mb-6">{new Date(post.createdAt).toLocaleDateString()}</div>
        {imageUrls.length > 0 && (
          <div className="mb-8">
            <SimpleCarousel images={imageUrls} alt={post.title} heightClass="h-72" />
          </div>
        )}
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{post.body || ''}</ReactMarkdown>
        </div>
      </div>
    </article>
  )
}

