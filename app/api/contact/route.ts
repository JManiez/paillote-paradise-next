import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message, consent } = body
    if (!name || !email || !message || !consent) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }
    await resend.emails.send({
      from: 'contact@pailloteparadise.fr',
      to: 'contact@pailloteparadise.fr',
      replyTo: email,
      subject: `[Contact Paillote] ${subject || 'Nouvelle demande'} — ${name}`,
      html: `<p><strong>Nom :</strong> ${name}</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
             <p><strong>Sujet :</strong> ${subject || 'Non renseigné'}</p>
             <p><strong>Message :</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API]', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
