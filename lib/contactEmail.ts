import 'server-only'
import { Resend } from 'resend'
import { SITE_EMAIL, SITE_EMAIL_RESEND_FROM } from './siteContact'

const NAME_MAX = 200
const MSG_MAX = 8000
const SUBJECT_MAX = 120

export type ContactPayload = {
  formType?: 'contact' | 'groupe'
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  consent: boolean
  typeOccasion?: string
  nombrePersonnes?: string
  date?: string
  menu?: string
}

export type SendContactResult =
  | { ok: true }
  | { ok: false; status: number; error: string }

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

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  if (!apiKey || apiKey === 're_placeholder') {
    return null
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || SITE_EMAIL
  const from = process.env.RESEND_FROM_EMAIL?.trim() || SITE_EMAIL_RESEND_FROM

  return { apiKey, to, from }
}

export async function sendContactEmail(
  body: Record<string, unknown>
): Promise<SendContactResult> {
  const config = getResendConfig()
  if (!config) {
    return { ok: false, status: 503, error: 'Service email non configuré' }
  }

  const { consent } = body
  if (consent !== true && consent !== 'true' && consent !== 1) {
    return { ok: false, status: 400, error: 'Consentement requis' }
  }

  const formType = body.formType === 'groupe' ? 'groupe' : 'contact'
  const nameStr = clampStr(body.name, NAME_MAX)
  const emailStr = clampStr(body.email, 254)
  const messageStr = clampStr(body.message, MSG_MAX)

  if (!nameStr || !emailStr || !messageStr) {
    return { ok: false, status: 400, error: 'Champs requis manquants' }
  }

  if (!isValidEmail(emailStr)) {
    return { ok: false, status: 400, error: 'Email invalide' }
  }

  const phoneStr =
    body.phone != null && body.phone !== ''
      ? clampStr(body.phone, 40)
      : 'Non renseigné'
  const subjectStr = clampStr(body.subject || 'Non renseigné', SUBJECT_MAX)

  const safeName = escapeHtml(nameStr)
  const safeEmail = escapeHtml(emailStr)
  const safePhone = escapeHtml(phoneStr)
  const safeSubject = escapeHtml(subjectStr)
  const safeMessage = escapeHtml(messageStr).replace(/\n/g, '<br/>')

  let html = `<p><strong>Nom :</strong> ${safeName}</p>
<p><strong>Email :</strong> ${safeEmail}</p>
<p><strong>Téléphone :</strong> ${safePhone}</p>
<p><strong>Sujet :</strong> ${safeSubject}</p>
<p><strong>Message :</strong></p><p>${safeMessage}</p>`

  let mailSubject = `[Contact Paillote] ${subjectStr || 'Nouvelle demande'} — ${nameStr}`

  if (formType === 'groupe') {
    const typeOccasion = escapeHtml(clampStr(body.typeOccasion, 80))
    const nombrePersonnes = escapeHtml(clampStr(body.nombrePersonnes, 40))
    const date = escapeHtml(clampStr(body.date, 20) || 'Non renseignée')
    const menu = escapeHtml(clampStr(body.menu, 80) || 'Non renseigné')

    mailSubject = `[Groupe / Privatisation] ${typeOccasion || 'Demande'} — ${nameStr}`
    html = `<p><strong>Formulaire :</strong> Demande de groupe / privatisation</p>
<p><strong>Nom :</strong> ${safeName}</p>
<p><strong>Email :</strong> ${safeEmail}</p>
<p><strong>Téléphone :</strong> ${safePhone}</p>
<p><strong>Type d'occasion :</strong> ${typeOccasion || '—'}</p>
<p><strong>Nombre de personnes :</strong> ${nombrePersonnes || '—'}</p>
<p><strong>Date souhaitée :</strong> ${date}</p>
<p><strong>Menu souhaité :</strong> ${menu}</p>
<p><strong>Message :</strong></p><p>${safeMessage}</p>`
  }

  try {
    const resend = new Resend(config.apiKey)
    const { error } = await resend.emails.send({
      from: config.from,
      to: config.to,
      replyTo: emailStr,
      subject: mailSubject,
      html,
    })

    if (error) {
      console.error('[Contact email]', error)
      const hint =
        typeof error.message === 'string' &&
        error.message.includes('domain')
          ? ' Domaine expéditeur non vérifié dans Resend.'
          : ''
      return {
        ok: false,
        status: 502,
        error: `Envoi email refusé par le fournisseur.${hint}`,
      }
    }

    return { ok: true }
  } catch (err) {
    console.error('[Contact email]', err)
    return { ok: false, status: 500, error: 'Erreur serveur' }
  }
}
