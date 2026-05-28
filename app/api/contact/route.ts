import { NextRequest, NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  email: string
  company?: string
  phone?: string
  service: string
  message?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload

    // ── Basic validation ────────────────────────────────────────────
    if (!body.name?.trim())            return NextResponse.json({ error: 'Name is required.' },            { status: 400 })
    if (!body.email?.trim())           return NextResponse.json({ error: 'Email is required.' },           { status: 400 })
    if (!isValidEmail(body.email))     return NextResponse.json({ error: 'Invalid email address.' },       { status: 400 })
    if (!body.service?.trim())         return NextResponse.json({ error: 'Please select a service.' },     { status: 400 })

    const apiKey = process.env.RESEND_API_KEY

    // ── Dev / staging: log only ─────────────────────────────────────
    if (!apiKey) {
      console.log('[AccounTech Contact] No RESEND_API_KEY — logging submission:')
      console.log(JSON.stringify(body, null, 2))
      // Still return success so the UI works during development
      return NextResponse.json({ ok: true })
    }

    // ── Production: send via Resend ─────────────────────────────────
    const res = await fetch('https://api.resend.com/emails', {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:  `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from:    'AccounTech Website <no-reply@accountech.com>',
        to:      ['team@accountech.com'],
        replyTo: body.email,
        subject: `New consultation request — ${body.name} (${body.service})`,
        html: `
          <h2 style="font-family:sans-serif;color:#1a1a2e;">New Contact Form Submission</h2>
          <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
            <tr><td style="padding:8px 0;color:#666;width:120px"><strong>Name</strong></td><td style="padding:8px 0">${body.name}</td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Email</strong></td><td style="padding:8px 0"><a href="mailto:${body.email}">${body.email}</a></td></tr>
            ${body.company ? `<tr><td style="padding:8px 0;color:#666"><strong>Company</strong></td><td style="padding:8px 0">${body.company}</td></tr>` : ''}
            ${body.phone   ? `<tr><td style="padding:8px 0;color:#666"><strong>Phone</strong></td><td style="padding:8px 0">${body.phone}</td></tr>`   : ''}
            <tr><td style="padding:8px 0;color:#666"><strong>Service</strong></td><td style="padding:8px 0">${body.service}</td></tr>
            ${body.message ? `<tr><td style="padding:8px 0;color:#666;vertical-align:top"><strong>Message</strong></td><td style="padding:8px 0;white-space:pre-line">${body.message}</td></tr>` : ''}
          </table>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('[AccounTech Contact] Resend error:', err)
      return NextResponse.json({ error: 'Failed to send message. Please email us directly.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })

  } catch (err) {
    console.error('[AccounTech Contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Unexpected error. Please try again.' }, { status: 500 })
  }
}
