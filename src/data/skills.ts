import type { Skill } from '../types';

/** Displayed in two columns; order within each column is preserved. */
export const skillColumns: Skill[][] = [
  [
    { name: 'JavaScript / HTML / CSS', level: 92 },
    { name: 'React & Next.js', level: 90 },
    { name: 'Node.js / Express.js', level: 85 },
    { name: 'Python', level: 82 },
    { name: 'TensorFlow / PyTorch (ML)', level: 78 },
    { name: 'TypeScript / PHP / C#', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Security: JWT / OAuth 2.0', level: 78 },
  ],
  [
    { name: 'React Native', level: 80 },
    { name: 'MySQL / MongoDB / PostgreSQL', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'Spring Boot / Strapi / .NET MVC', level: 72 },
    { name: 'Git / Jira / BitBucket', level: 88 },
    { name: 'Cloud: Vercel / Render / Railway', level: 80 },
    { name: 'Tools: Postman / Figma / XAMPP', level: 82 },
    { name: 'Testing: Selenium / TestNG', level: 72 },
  ],
];

/** Show the numeric percentage next to each bar. */
export const SHOW_SKILL_PERCENT = false;
