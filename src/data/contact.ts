import type { ContactMethod, Reference } from '../types';
import { profile } from './profile';

export const references: Reference[] = [
  {
    name: 'Eng. (Mr.) Uditha Gamage',
    title: 'Senior Business Continuity Manager',
    subtitle: 'Business Continuity Consultant & Corporate Trainer',
    type: 'industry',
    organisation: 'Sri Lanka Telecom, Head Office, Sri Lanka',
    email: 'udithag@slt.com.lk',
    linkedin: 'https://www.linkedin.com/in/uditha-gamage-95139038',
  },
  {
    name: 'Dr. (Mrs.) J. Jananie',
    title: 'Senior Lecturer Grade II',
    subtitle: 'Department of Computer Engineering, Faculty of Engineering',
    type: 'academic',
    organisation: 'University of Jaffna, Sri Lanka',
    email: 'jananie@eng.jfn.ac.lk',
    linkedin: 'https://www.linkedin.com/in/jananie-jarachanthan-694b9772',
  },
];

export const contactMethods: ContactMethod[] = [
  {
    label: 'Location',
    value: 'Matale, Sri Lanka',
    icon: 'map-pin',
    href: 'https://www.google.com/maps/search/Matale,+Sri+Lanka',
    hint: 'View on Google Maps ↗',
  },
  { label: 'Email', value: profile.email, icon: 'mail', href: `mailto:${profile.email}` },
  { label: 'WhatsApp', value: '+94 76 025 1767', icon: 'whatsapp', href: 'https://wa.me/94760251767' },
  { label: 'Telephone', value: '+94 72 236 7866', icon: 'phone', href: 'tel:+94722367866' },
  {
    label: 'LinkedIn',
    value: profile.fullName,
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/kanchana-ariyasinghe-ba76622b5',
  },
  { label: 'GitHub', value: 'KanchanaAriyasinghe', icon: 'github', href: 'https://github.com/KanchanaAriyasinghe' },
  {
    label: 'Facebook',
    value: profile.fullName,
    icon: 'facebook',
    href: 'https://web.facebook.com/kanchana.ariyasinghe.12',
  },
];
