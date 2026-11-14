import { asset } from '../lib/asset';
import { monthsBetween } from '../lib/dates';
import type { SocialLink, Stat } from '../types';
import { experience } from './resume';

export const profile = {
  firstName: 'Kanchana',
  fullName: 'Kanchana Ariyasinghe',
  location: 'Matale, Sri Lanka',
  degree: 'B.Sc.Eng (Hons) Computer Engineering',
  university: 'University of Jaffna',
  /** Hero headline: `before` + gradient `highlight` + `after`. */
  headline: {
    before: 'Software engineer building ',
    highlight: 'full-stack web apps',
    after: ', AI-powered systems and reliable, well-tested software.',
  },
  roles: ['Software Engineer', 'Full-Stack Developer', 'QA Engineer'],
  bio:
    'Computer Engineering professional with a strong interest in Software Engineering and Full-Stack Development. ' +
    'Hands-on experience in full-stack web development, AI-powered systems, and scalable application development. ' +
    'Experienced in REST API integration, database management, functional testing, Selenium, and TestNG. ' +
    'A proactive, rapid learner dedicated to building clean, maintainable codebases, and solving high-impact technical problems.',
  photo: asset('assets/photo2.jpg'),
  email: 'ariyasinghekanchana@gmail.com',
  openToWork: true,
  /** Set to true to show "View / Download Resume" buttons in the hero. */
  showResumeButtons: false,
  resumeUrl: asset('assets/Kanchana Ariyasinghe CV.pdf'),
};

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: 'https://web.facebook.com/kanchana.ariyasinghe.12', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/kanchi_gayathree', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kanchana-ariyasinghe-ba76622b5', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/KanchanaAriyasinghe', icon: 'github' },
];

/** Total months across visible roles — stays correct as time passes. */
const industryMonths = experience.filter((e) => !e.hidden).reduce((sum, e) => sum + monthsBetween(e.start, e.end), 0);

/** The role without an end date, if any (shown in the hero). */
export const currentRole = experience.find((e) => !e.hidden && !e.end);

export const stats: Stat[] = [
  { value: 13, suffix: '+', label: 'Projects Completed', icon: 'check-square' },
  { value: industryMonths, suffix: '+', label: 'Months Industry Experience', icon: 'users' },
  { value: 4, suffix: '+', label: 'Certifications', icon: 'cert' },
  { value: 10, suffix: '+', label: 'Technologies', icon: 'code' },
  { value: 90, suffix: '%', label: 'Research Accuracy', icon: 'graduation' },
];
