import { prisma } from '@/lib/prisma'
import PostForm from '@/components/admin/PostForm'

export default async function AdminPostEditPage({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const post = await prisma.post.findUnique({ where: { id }, include: { images: true } })
  if (!post) return null
  const initial = {
    id: post.id,
    title: post.title,
    slug: post.slug,
    body: post.body,
    imageUrl: post.imageUrl,
    images: (post.images || []).map((i) => i.url),
  }
  return <PostForm initial={initial as any} />
}



