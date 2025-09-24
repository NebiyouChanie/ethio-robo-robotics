import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const page = Math.max(1, Number(searchParams.get('page') || '1'))
    const pageSize = Math.min(100, Math.max(1, Number(searchParams.get('pageSize') || '10')))
    const program = searchParams.get('program') || undefined
    const from = searchParams.get('from')
    const to = searchParams.get('to')

    const where: any = {}
    if (program) {
      const trimmed = program.trim()
      if (trimmed.toUpperCase() === 'ARC') {
        // Only ARC registrations of any subtype
        where.division = { startsWith: 'ARC -' }
      } else {
        // Exact match for a specific program or ARC subtype, e.g. 'VEX IQ' or 'ARC - VEX IQ'
        where.division = trimmed
      }
    }
    if (from || to) {
      where.createdAt = {}
      if (from) where.createdAt.gte = new Date(from)
      if (to) where.createdAt.lte = new Date(to)
    }

    const [total, regs] = await Promise.all([
      prisma.registration.count({ where }),
      prisma.registration.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
    ])
    return NextResponse.json({ items: regs, total, page, pageSize })
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch registrations' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { teamName, contactName, email, phone, school, city, country, division, teamSize, message,
      age, gender, street, region, education, nearest, state, postalCode, availableOn, whatsapp } = body
    if (!teamName || !contactName || !email || !phone || !division) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    const reg = await prisma.registration.create({ data: { teamName, contactName, email, phone, school, city, country, division, teamSize, message,
      age, gender, street, region, education, nearest, state, postalCode, availableOn, whatsapp } })
    return NextResponse.json(reg, { status: 201 })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to create registration' }, { status: 500 })
  }
}



