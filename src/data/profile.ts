import { asset } from '../lib/asset';
import type { NavItem, SocialLink, Stat } from '../types';

export const profile = {
  firstName: 'Kanchana',
  fullName: 'Kanchana Ariyasinghe',
  degree: 'Computer Engineering',
  university: 'UOJ',
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

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'references', label: 'References' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: 'https://web.facebook.com/kanchana.ariyasinghe.12', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/kanchi_gayathree', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kanchana-ariyasinghe-ba76622b5', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/KanchanaAriyasinghe', icon: 'github' },
];

export const stats: Stat[] = [
  { value: 13, suffix: '+', label: 'Projects Completed', icon: 'check-square' },
  { value: 6, label: 'Months Industrial Work Experience', icon: 'users' },
  { value: 4, suffix: '+', label: 'Certifications', icon: 'cert' },
  { value: 10, suffix: '+', label: 'Technologies', icon: 'code' },
  { value: 90, suffix: '%', label: 'Research Accuracy', icon: 'graduation' },
];
