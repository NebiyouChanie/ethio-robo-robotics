import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: idParam } = await params
    const id = Number(idParam)
    const reg = await prisma.registration.findUnique({ where: { id } })
    if (!reg) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(reg)
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: idParam } = await params
    const id = Number(idParam)
    const body = await req.json()
    const data: any = {}
    // Whitelist known fields
    const allowed = ['teamName','contactName','email','phone','school','city','country','division','teamSize','message','age','gender','street','region','education','nearest','state','postalCode','availableOn','whatsapp']
    for (const k of allowed) if (k in body) data[k] = body[k]
    const reg = await prisma.registration.update({ where: { id }, data })
    return NextResponse.json(reg)
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to update' }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: idParam } = await params
    const id = Number(idParam)
    await prisma.registration.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to delete' }, { status: 500 })
  }
}


