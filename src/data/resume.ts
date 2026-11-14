import type { Achievement, TimelineEntry } from '../types';

/* Content mirrors the CV. Newest first. */

export const education: TimelineEntry[] = [
  {
    title: 'B.Sc.Eng (Hons) in Computer Engineering',
    organisation: 'University of Jaffna, Sri Lanka',
    icon: 'graduation',
    start: '2022-04',
    end: '2026-08',
    note: 'Cumulative GPA: 3.36 / 4.00',
    description:
      'Engineering degree focused on software engineering, full-stack development, and quality assurance, with additional work in machine learning, computer vision, and embedded systems. ' +
      'Final-year research: real-time pothole detection using a YOLOv8m + MobileNetV2 ensemble (90.90% accuracy).',
    tags: ['Software Engineering', 'Full-Stack Development', 'Machine Learning', 'Computer Vision', 'Embedded Systems'],
  },
  {
    title: 'G.C.E. Advanced Level — Physical Science Stream',
    organisation: 'Vijaya National College, Matale',
    icon: 'building',
    start: '2012',
    end: '2019',
    description:
      'Completed the GCE Advanced Level examination in the Physical Science stream with strong results in Combined Mathematics, Physics, and Chemistry.',
    tags: ['Combined Mathematics: A', 'Physics: B', 'Chemistry: B'],
  },
];

export const experience: TimelineEntry[] = [
  {
    title: 'Associate Software Engineer',
    organisation: 'Seren IT Services',
    icon: 'building',
    start: '2026-09',
    showDuration: true,
    description:
      'Building responsive, production web applications with React and TypeScript — from Figma designs to integrated, authenticated, containerised features.',
    highlights: [
      {
        label: 'Frontend Development',
        text: 'Develop responsive, user-friendly interfaces with React.js, TypeScript, and JavaScript, focusing on reusable components and maintainable code.',
      },
      {
        label: 'API Integration',
        text: 'Integrate RESTful APIs with frontend applications for seamless communication between components and backend services.',
      },
      {
        label: 'Third-Party Integration',
        text: 'Integrate Clerk authentication and user management to support secure authentication and access control.',
      },
      {
        label: 'Database Management',
        text: 'Work with PostgreSQL databases, handling data management and supporting application requirements through database integration.',
      },
      {
        label: 'Containerization',
        text: 'Use Docker to containerise application components for consistent development and deployment environments.',
      },
      {
        label: 'Application Development',
        text: 'Implement frontend features, integrate external services, and troubleshoot technical issues to improve application functionality.',
      },
    ],
    tags: ['React', 'TypeScript', 'JavaScript', 'REST APIs', 'FastAPI', 'Clerk', 'PostgreSQL', 'Docker', 'Figma'],
  },
  {
    title: 'Software Engineer Intern',
    organisation: 'Sri Lanka Telecom PLC',
    icon: 'building',
    start: '2025-11',
    end: '2026-05',
    showDuration: true,
    description:
      'Contributed to enterprise systems — the Business Continuity Management System (BCMS) and Learning Path Management System (LPMS) — using the MERN and PERN stacks.',
    highlights: [
      {
        label: 'Full-Stack Development',
        text: 'Developed and integrated end-to-end features using MERN and PERN technologies across frontend, backend, API, and database components.',
      },
      {
        label: 'API Integration',
        text: 'Integrated RESTful APIs and managed data exchange between frontend, backend, and external ERP services.',
      },
      {
        label: 'Database Management',
        text: 'Managed and integrated MongoDB and PostgreSQL databases for application features and efficient data handling.',
      },
      {
        label: 'Feature Development',
        text: 'Designed and implemented features with proper integration between user interfaces, backend services, APIs, and databases.',
      },
      {
        label: 'Repository & Team Management',
        text: 'Managed Bitbucket and GitHub repositories, coordinated development tasks, and led the development team.',
      },
      {
        label: 'Production Integration & Debugging',
        text: 'Integrated features into the hosted production environment, investigated integration issues, and resolved critical bugs.',
      },
      {
        label: 'Problem Analysis & Troubleshooting',
        text: 'Identified and resolved technical issues across frontend, backend, API integration, and database layers.',
      },
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'JWT', 'REST APIs', 'ERP Integration', 'GitHub', 'Bitbucket'],
  },
  {
    // Not on the current CV — hidden, but kept so it can be re-enabled.
    title: 'Internship Trainee',
    organisation: "People's Bank — Rattota Branch",
    icon: 'bank',
    start: '2021-01',
    end: '2022-01',
    showDuration: true,
    description: 'Gained well-rounded experience in the workplace.',
    tags: ['Front-Office Operations', 'Back-Office Operations', 'Cash Management', 'Customer Service'],
    hidden: true,
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
