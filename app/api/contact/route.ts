import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey === 're_placeholder') {
    return NextResponse.json({ error: 'Service non configuré' }, { status: 503 })
  }

  try {
    const resend = new Resend(apiKey)
    const body = await req.json()
    const { name, email, phone, subject, message, consent } = body
    if (!name || !email || !message || !consent) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }
    const safeName = escapeHtml(String(name))
    const safeEmail = escapeHtml(String(email))
    const safePhone = escapeHtml(String(phone ?? 'Non renseigné'))
    const safeSubject = escapeHtml(String(subject || 'Non renseigné'))
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, '<br/>')

    await resend.emails.send({
      from: 'contact@pailloteparadise.fr',
      to: 'contact@pailloteparadise.fr',
      replyTo: email,
      subject: `[Contact Paillote] ${subject || 'Nouvelle demande'} — ${name}`,
      html: `<p><strong>Nom :</strong> ${safeName}</p>
             <p><strong>Email :</strong> ${safeEmail}</p>
             <p><strong>Téléphone :</strong> ${safePhone}</p>
             <p><strong>Sujet :</strong> ${safeSubject}</p>
             <p><strong>Message :</strong></p><p>${safeMessage}</p>`,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API]', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
