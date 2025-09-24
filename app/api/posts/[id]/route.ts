import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    const body = await req.json()
    const { title, slug, body: postBody, images, isPublished, isDraft } = body
    const data: any = {}
    if (title !== undefined) data.title = title
    if (slug !== undefined) data.slug = slug
    if (postBody !== undefined) data.body = postBody
    if (isPublished !== undefined) data.isPublished = !!isPublished
    if (isDraft !== undefined) data.isDraft = !!isDraft
    
    if (images && Array.isArray(images)) {
      // Get the featured image URL from the first image in the array
      const featuredImageUrl = images.length > 0 ? images[0] : null
      data.imageUrl = featuredImageUrl
      
      data.images = {
        deleteMany: {},
        create: images.map((url: string) => ({ 
          url
        })),
      }
    }
    const post = await prisma.post.update({ where: { id }, data, include: { images: true } })
    
    // Add featuredImageIndex (always 0 since first image is featured)
    return NextResponse.json({ ...post, featuredImageIndex: 0 })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to update post' }, { status: 500 })
  }
}

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    const post = await prisma.post.findUnique({ where: { id }, include: { images: true } })
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    
    // Add featuredImageIndex (always 0 since first image is featured)
    return NextResponse.json({ ...post, featuredImageIndex: 0 })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to fetch post' }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    await prisma.post.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to delete post' }, { status: 500 })
  }
}


