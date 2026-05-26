import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/contactEmail'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = await sendContactEmail(body)

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: result.status })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API]', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
