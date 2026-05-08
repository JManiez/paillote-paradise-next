import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const NAME_MAX = 200
const MSG_MAX = 8000
const SUBJECT_MAX = 120

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function isValidEmail(s: string) {
  return /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/.test(s) && s.length <= 254
}

function clampStr(v: unknown, max: number): string {
  const s = typeof v === 'string' ? v.trim() : String(v ?? '').trim()
  return s.length > max ? s.slice(0, max) : s
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

    if (consent !== true && consent !== 'true' && consent !== 1) {
      return NextResponse.json({ error: 'Consentement requis' }, { status: 400 })
    }

    const nameStr = clampStr(name, NAME_MAX)
    const emailStr = clampStr(email, 254)
    const messageStr = clampStr(message, MSG_MAX)

    if (!nameStr || !emailStr || !messageStr) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }

    if (!isValidEmail(emailStr)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const phoneStr = phone != null && phone !== '' ? clampStr(phone, 40) : 'Non renseigné'
    const subjectStr = clampStr(subject || 'Non renseigné', SUBJECT_MAX)

    const safeName = escapeHtml(nameStr)
    const safeEmail = escapeHtml(emailStr)
    const safePhone = escapeHtml(phoneStr)
    const safeSubject = escapeHtml(subjectStr)
    const safeMessage = escapeHtml(messageStr).replace(/\n/g, '<br/>')

    await resend.emails.send({
      from: 'contact@pailloteparadise.fr',
      to: 'contact@pailloteparadise.fr',
      replyTo: emailStr,
      subject: `[Contact Paillote] ${subjectStr || 'Nouvelle demande'} — ${nameStr}`,
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
