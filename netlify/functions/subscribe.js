import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import crypto from 'node:crypto';

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
    const { name, email } = JSON.parse(event.body ?? '{}');
    if (!name || !email) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing name or email' }) };
    }

    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const confirmation_token = crypto.randomUUID();

    const { error } = await supabase.from('subscribers').insert({ name, email, confirmed: false, confirmation_token });
    if (error) {
      if (error.code === '23505') {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Email already subscribed' }) };
      }
      console.error('Supabase insert error:', error);
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Failed to subscribe' }) };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const confirmUrl = `${process.env.DOMAIN_URL}/confirm?token=${confirmation_token}`;
    await resend.emails.send({
      from: 'NextTech Brief <noreply@nexttechbrief.com>',
      to: email,
      subject: 'Confirm your subscription',
      html: `<p>Hello ${name},</p><p>Confirm your subscription by clicking <a href="${confirmUrl}">here</a>.</p>`,
    });

    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error('Subscribe error', err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal Server Error' }) };
  }
}
