import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/sendEmail'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name) return NextResponse.json({ error: 'Full Name is required' }, { status: 400 })
    if (!email) return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    if (!subject) return NextResponse.json({ error: 'Subject is required' }, { status: 400 })
    if (!message) return NextResponse.json({ error: 'Message is required' }, { status: 400 })

    const to = process.env.EMAIL_TO || process.env.EMAIL_USER
    if (!to) {
      console.error('EMAIL_TO/EMAIL_USER not configured')
      return NextResponse.json({ error: 'Internal error' }, { status: 500 })
    }

    const safeSubject = String(subject).slice(0, 200)
    const plainText = `From: ${name} <${email}>
Subject: ${safeSubject}

${message}`
    const html = `
      <div>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <div style="margin-top:12px; white-space:pre-wrap">${String(message)}</div>
      </div>
    `

    await sendEmail(to, `Contact Form: ${safeSubject}`, plainText, html)
    return NextResponse.json({ ok: true })
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}


