import type { SkillGroup } from '../types';

/* Mirrors the "Technical Skills" section of the CV. */
export const skillGroups: SkillGroup[] = [
  { title: 'Languages', icon: 'terminal', items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'PHP'] },
  { title: 'Frontend', icon: 'layout', items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { title: 'Backend', icon: 'server', items: ['Node.js', 'Express.js', 'Spring Boot', '.NET MVC', 'REST APIs'] },
  { title: 'Databases', icon: 'database', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase'] },
  {
    title: 'DevOps & Cloud',
    icon: 'cloud',
    items: ['Docker', 'Jenkins', 'Maven', 'GitLab CI', 'AWS EC2', 'Nginx', 'Cloudflare', 'Vercel', 'Render', 'Railway'],
  },
  { title: 'Testing & Quality', icon: 'check-square', items: ['Functional Testing', 'Selenium', 'TestNG', 'SonarQube', 'Postman'] },
  { title: 'Security & Auth', icon: 'shield', items: ['JWT', 'OAuth 2.0', 'Clerk', 'RBAC'] },
  { title: 'ML & Computer Vision', icon: 'brain', items: ['TensorFlow', 'Keras', 'NumPy', 'YOLOv8', 'MobileNetV2'] },
  { title: 'Tools & Workflow', icon: 'tool', items: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Agile', 'Figma', 'XAMPP'] },
];
