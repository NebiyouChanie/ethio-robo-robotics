import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const published = searchParams.get('published')
    const where = published === 'true' ? { isPublished: true } : undefined
    const posts = await prisma.post.findMany({ where, orderBy: { createdAt: 'desc' }, include: { images: true } })
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, slug, body, imageUrl, images } = await req.json()
    if (!title || !slug || !body) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    const post = await prisma.post.create({ data: { title, slug, body, imageUrl, images: images && Array.isArray(images) ? { create: images.map((url: string) => ({ url })) } : undefined } })
    return NextResponse.json(post, { status: 201 })
  } catch (error: any) {
    console.error('POST /api/posts error:', error)
    if (error?.code === 'P2002') {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: error?.message || 'Failed to create post' }, { status: 500 })
  }
}


