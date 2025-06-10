import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid'

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, DOMAIN_NAME } = process.env

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !RESEND_API_KEY || !DOMAIN_NAME) {
  throw new Error('Required environment variables are not set')
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const { name = '', email } = JSON.parse(event.body || '{}')
  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Email required' }) }
  }

  const token = uuidv4()
  const { error } = await supabase
    .from('subscribers')
    .insert({ name, email, confirmation_token: token })

  if (error) {
    if (error.code === '23505') {
      return { statusCode: 409, body: JSON.stringify({ error: 'Already subscribed' }) }
    }
    return { statusCode: 400, body: JSON.stringify({ error: error.message }) }
  }

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: `The NextTech Brief <noreply@${DOMAIN_NAME}>`,
      to: email,
      subject: 'Please confirm your subscription to The NextTech Brief',
      html: `<p>Hi ${name || 'there'}, please confirm your subscription.</p><p><a href="https://${DOMAIN_NAME}/confirm?token=${token}">Confirm Subscription</a></p>`
    })
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  }
}
