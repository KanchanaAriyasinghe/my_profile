import type { Service } from '../types';

/* Aligned with the "Technical Skills" and experience sections of the CV. */
export const services: Service[] = [
  {
    title: 'Frontend Development',
    description:
      'Responsive, accessible interfaces built from Figma designs with reusable React components, clean TypeScript, and maintainable styling.',
    icon: 'layout',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Full-Stack & API Development',
    description:
      'End-to-end web applications on MERN and PERN stacks — REST APIs, database design, and integrations with ERP and other external services.',
    icon: 'database',
    tags: ['Node.js', 'Express.js', 'Spring Boot', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Authentication & Security',
    description:
      'Secure sign-in, user management, and role-based access control so the right people see the right data.',
    icon: 'shield',
    tags: ['JWT', 'OAuth 2.0', 'Clerk', 'RBAC', 'Supabase'],
  },
  {
    title: 'DevOps & Cloud Deployment',
    description:
      'Containerised, repeatable environments and automated pipelines that take applications from repository to production.',
    icon: 'cloud',
    tags: ['Docker', 'Jenkins', 'GitLab CI', 'AWS EC2', 'Nginx', 'Vercel'],
  },
  {
    title: 'QA & Software Testing',
    description:
      'Structured functional testing and automated test suites that catch bugs early and validate behaviour across scenarios.',
    icon: 'check-square',
    tags: ['Selenium', 'TestNG', 'Functional Testing', 'Postman', 'SonarQube'],
  },
  {
    title: 'Machine Learning & Computer Vision',
    description:
      'Real-time detection and classification models — from image preprocessing to optimised, edge-deployable deep learning.',
    icon: 'brain',
    tags: ['TensorFlow', 'Keras', 'YOLOv8', 'MobileNetV2', 'NumPy'],
  },
];
