import { Resend } from 'resend';

/**
 * Función serverless de Vercel para el formulario de contacto.
 * La API key vive solo en el servidor (variable RESEND_API_KEY en Vercel),
 * nunca en el bundle del navegador.
 */

interface Req {
  method?: string;
  body?: unknown;
}
interface Res {
  status: (code: number) => Res;
  json: (body: unknown) => void;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export default async function handler(req: Req, res: Res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body: Record<string, unknown>;
  try {
    body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body ?? {}) as Record<string, unknown>;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' });
  }
  const name = String(body.name ?? '').trim().slice(0, 100);
  const email = String(body.email ?? '').trim().slice(0, 200);
  const message = String(body.message ?? '').trim().slice(0, 5000);

  // Honeypot: los bots rellenan el campo oculto. Respondemos OK sin enviar nada.
  if (body.company) return res.status(200).json({ ok: true });

  if (!name || !message || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Email service not configured' });

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL ?? 'eestrabao46@gmail.com',
    replyTo: email,
    subject: `Nuevo mensaje de ${name} (portfolio)`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0f766e;">Nuevo mensaje desde el portfolio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="white-space: pre-line; background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">${escapeHtml(message)}</p>
      </div>
    `,
  });

  if (error) {
    console.error(error);
    return res.status(502).json({ error: 'Email provider error' });
  }
  return res.status(200).json({ ok: true });
}
