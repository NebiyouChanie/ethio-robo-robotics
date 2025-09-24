import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

function buildWhere(searchParams: URLSearchParams) {
  const program = searchParams.get('program') || undefined
  const from = searchParams.get('from') || undefined
  const to = searchParams.get('to') || undefined
  const where: any = {}
  if (program) {
    const trimmed = program.trim()
    if (trimmed.toUpperCase() === 'ARC') {
      where.division = { startsWith: 'ARC -' }
    } else {
      where.division = trimmed
    }
  }
  if (from || to) {
    where.createdAt = {}
    if (from) where.createdAt.gte = new Date(from)
    if (to) where.createdAt.lte = new Date(to)
  }
  return where
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const where = buildWhere(searchParams)

    const regs = await prisma.registration.findMany({ where, orderBy: { createdAt: 'desc' } })

    const program = (searchParams.get('program') || '').toUpperCase()
    const isArc = program.includes('ARC')

    // Choose minimal columns required per program
    // ARC: core + teamSize + state + postalCode + availableOn + whatsapp
    // Learner (VEX IQ/VEX V5/Programming): core + age + gender + street + region + education + nearest
    const arcHeaders = ['id','teamName','contactName','email','phone','school','city','country','division','teamSize','state','postalCode','availableOn','whatsapp','createdAt']
    const learnerHeaders = ['id','teamName','contactName','email','phone','school','region','country','division','age','gender','street','region','education','nearest','createdAt']
    const headers = isArc ? arcHeaders : learnerHeaders
    const lines = [headers.join(',')]
    for (const r of regs as any[]) {
      const rowValues = isArc
        ? [
            r.id,
            r.teamName,
            r.contactName,
            r.email,
            r.phone,
            r.school ?? '',
            r.city ?? '',
            r.country ?? '',
            r.division,
            r.teamSize ?? '',
            r.state ?? '',
            r.postalCode ?? '',
            r.availableOn ?? '',
            r.whatsapp ?? '',
            new Date(r.createdAt).toISOString(),
          ]
        : [
            r.id,
            r.teamName,
            r.contactName,
            r.email,
            r.phone,
            r.school ?? '',
            r.region ?? r.city ?? '',
            r.country ?? '',
            r.division,
            r.age ?? '',
            r.gender ?? '',
            r.street ?? '',
            r.region ?? r.city ?? '',
            r.education ?? '',
            r.nearest ?? '',
            new Date(r.createdAt).toISOString(),
          ]

      const row = rowValues.map((v) => {
        const s = String(v ?? '')
        // Escape double quotes by doubling them and wrap field in quotes
        return '"' + s.replace(/"/g, '""') + '"'
      })
      lines.push(row.join(','))
    }

    const csv = lines.join('\n')
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="registrations_export_${Date.now()}.csv"`,
      },
    })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to export' }, { status: 500 })
  }
}


