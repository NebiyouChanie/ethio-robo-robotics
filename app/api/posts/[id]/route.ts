import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    const body = await req.json()
    const { title, slug, imageUrl, isPublished, isDraft, images } = body
    const data: any = {}
    if (title !== undefined) data.title = title
    if (slug !== undefined) data.slug = slug
    if (imageUrl !== undefined) data.imageUrl = imageUrl
    if (isPublished !== undefined) data.isPublished = !!isPublished
    if (isDraft !== undefined) data.isDraft = !!isDraft
    if (images && Array.isArray(images)) {
      data.images = {
        deleteMany: {},
        create: images.map((url: string) => ({ url })),
      }
    }
    const post = await prisma.post.update({ where: { id }, data })
    return NextResponse.json(post)
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to update post' }, { status: 500 })
  }
}

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    const post = await prisma.post.findUnique({ where: { id } })
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(post)
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to fetch post' }, { status: 500 })
  }
}


