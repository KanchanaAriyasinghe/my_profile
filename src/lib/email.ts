import emailjs from '@emailjs/browser';
import { profile } from '../data/profile';

export interface ContactMessage {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const config = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() ?? '',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() ?? '',
};

export const isEmailServiceConfigured = Boolean(config.publicKey && config.serviceId && config.templateId);

const fullName = (m: ContactMessage) => `${m.firstName} ${m.lastName}`.trim();

export async function sendContactMessage(m: ContactMessage): Promise<void> {
  await emailjs.send(
    config.serviceId,
    config.templateId,
    {
      from_name: fullName(m),
      from_email: m.email,
      subject: m.subject || 'No subject',
      message: m.message,
      reply_to: m.email,
    },
    { publicKey: config.publicKey },
  );
}

/** Fallback when EmailJS isn't configured: a pre-filled mailto link. */
export function buildMailtoLink(m: ContactMessage): string {
  const subject = encodeURIComponent(m.subject || `Portfolio Contact from ${fullName(m)}`);
  const body = encodeURIComponent(`Name: ${fullName(m)}\nEmail: ${m.email}\n\nMessage:\n${m.message}`);
  return `mailto:${profile.email}?subject=${subject}&body=${body}`;
}
