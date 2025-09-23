import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const regs = await prisma.registration.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(regs)
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch registrations' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { teamName, contactName, email, phone, school, city, country, division, teamSize, message } = body
    if (!teamName || !contactName || !email || !phone || !division) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    const reg = await prisma.registration.create({ data: { teamName, contactName, email, phone, school, city, country, division, teamSize, message } })
    return NextResponse.json(reg, { status: 201 })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to create registration' }, { status: 500 })
  }
}



