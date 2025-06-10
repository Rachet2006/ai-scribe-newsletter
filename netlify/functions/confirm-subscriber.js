import { createClient } from '@supabase/supabase-js';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' };
  }

  try {
    const { token } = JSON.parse(event.body ?? '{}');
    if (!token) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Token required' }) };
    }

    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const { data, error } = await supabase
      .from('subscribers')
      .update({ confirmed: true })
      .eq('confirmation_token', token)
      .select();

    if (error) {
      console.error('Supabase update error:', error);
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Could not confirm subscriber' }) };
    }

    if (!data || data.length === 0) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid token' }) };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error('Confirm error', err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal Server Error' }) };
  }
}
