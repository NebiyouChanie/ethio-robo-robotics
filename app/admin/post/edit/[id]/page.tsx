import { prisma } from '@/lib/prisma'
import PostForm from '@/components/admin/PostForm'

export default async function AdminPostEditPage({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const post = await prisma.post.findUnique({ where: { id } })
  return <PostForm initial={post || undefined} />
}



