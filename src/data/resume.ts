import type { Achievement, TimelineEntry } from '../types';

export const education: TimelineEntry[] = [
  {
    title: 'BSc. (Hons) in Computer Engineering',
    organisation: 'University of Jaffna, Sri Lanka',
    icon: 'building',
    period: 'April 2022 – August 2026',
    status: 'completed',
    description:
      'Computer Engineering graduate with hands-on experience in full-stack development, software engineering, and quality assurance, with additional experience in machine learning and embedded systems.',
    tags: ['Computer Engineering', 'Machine Learning', 'Full-Stack Development'],
  },
  {
    title: 'Secondary Education — G.C.E. Advanced Level',
    organisation: 'Mt. Vijaya National College, Matale',
    icon: 'building',
    period: '2012 – 2019',
    status: 'completed',
    description:
      'Completed GCE Advanced Level in the Physical Science stream with strong results in Combined Mathematics, Physics, and Chemistry.',
    tags: ['Combined Mathematics: A', 'Physics: B', 'Chemistry: B'],
  },
];

export const experience: TimelineEntry[] = [
  {
    title: 'Software Engineer Intern',
    organisation: 'Sri Lanka Telecom PLC',
    icon: 'building',
    period: 'Nov 2025 – May 2026 · 6 months',
    status: 'completed',
    description:
      'Developed and integrated end-to-end features for enterprise applications using MERN and PERN stacks, covering frontend, backend, RESTful APIs, and database components. ' +
      'Contributed to the Business Continuity Management System (BCMS) and Learning Path Management System (LPMS), including ERP integration, database management, production debugging, and technical troubleshooting. ' +
      'Managed Bitbucket and GitHub repositories, coordinated development tasks, and led the development team to support effective collaboration and version control.',
    tags: ['MongoDB', 'PostgreSQL', 'Express.js', 'React', 'Node.js', 'REST APIs', 'ERP Integration', 'GitHub', 'Bitbucket'],
  },
  {
    title: 'Internship Trainee',
    organisation: "People's Bank — Rattota Branch",
    icon: 'bank',
    period: 'Jan 2021 – Jan 2022 · 1 year',
    status: 'completed',
    description: 'Gained well-rounded experience in the workplace.',
    tags: ['Front-Office Operations', 'Back-Office Operations', 'Cash Management', 'Customer Service'],
  },
];

export const certifications: Achievement[] = [
  {
    label: 'Java Programming Internship',
    href: 'https://www.linkedin.com/posts/kanchana-ariyasinghe-ba76622b5_codsoft-javaprogramming-certificate-activity-7261024337569148928-Da7w',
    pill: 'Codesoft',
  },
  {
    label: 'AlgoXplore 1.0 — Algorithm & CTF',
    href: 'https://www.linkedin.com/posts/kanchana-ariyasinghe-ba76622b5_algoxplore-ctfchallenges-teamwork-activity-7281009431574638592-cqr5',
    pill: 'NSBM',
  },
  {
    label: 'MoraXtreme 9.0 — 12h Coding Marathon',
    href: 'https://www.linkedin.com/posts/kanchana-ariyasinghe-ba76622b5_moraxtreme-ieee-universityofmoratuwa-activity-7261020108511236096-aozi',
    pill: 'IEEE UOM',
  },
  { label: 'TECHNOVATION 2025 — AI Innovation Challenge', pill: 'Finalist', pillVariant: 'green' },
];

export const memberships: Achievement[] = [
  { label: 'IESL Student Chapter — University of Jaffna', pill: 'S-29763' },
  { label: 'IEEE Student Member', pill: '100411452' },
];
