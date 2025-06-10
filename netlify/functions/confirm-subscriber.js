import { createClient } from '@supabase/supabase-js'

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Supabase environment variables are not set')
}
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const { token } = JSON.parse(event.body || '{}')
  if (!token) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Token required' }) }
  }

  const { data, error } = await supabase
    .from('subscribers')
    .update({ confirmed: true })
    .eq('confirmation_token', token)
    .select('id')

  if (error) {
    return { statusCode: 400, body: JSON.stringify({ error: error.message }) }
  }
  if (!data || data.length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid token' }) }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  }
}
