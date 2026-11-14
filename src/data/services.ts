import type { Service } from '../types';

export const services: Service[] = [
  {
    title: 'Full-Stack Web Development',
    description:
      'Building scalable web applications, from modern web interfaces to enterprise-level platforms with authentication, APIs, and real-time features.',
    icon: 'globe',
    tags: ['React', 'Node.js', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Machine Learning & AI',
    description:
      'Developing intelligent models for classification, object detection, and natural language understanding, with experience in AI-driven research and computer vision systems.',
    icon: 'brain',
    tags: ['TensorFlow', 'PyTorch', 'YOLOv8', 'Python'],
  },
  {
    title: 'Computer Vision Systems',
    description:
      'Developing real-time detection and analysis systems using deep learning, image preprocessing, and edge-deployable AI techniques.',
    icon: 'eye',
    tags: ['YOLOv8m', 'MobileNetV2', 'CycleGAN', 'OpenCV'],
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly, accessible, and modern interfaces with a strong focus on UX and responsive design.',
    icon: 'pen',
    tags: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    title: 'QA & Software Testing',
    description:
      'Ensuring software quality through structured functional testing and automated test suites, identifying bugs early and validating application behaviour across scenarios.',
    icon: 'check-square',
    tags: ['Selenium', 'TestNG', 'Functional Testing', 'Test Automation'],
  },
  {
    title: 'API & Backend',
    description:
      'Building scalable backend systems with APIs, ERP integrations, and database management using MySQL, MongoDB, and PostgreSQL.',
    icon: 'database',
    tags: ['Express.js', 'Spring Boot', 'MySQL', 'Strapi'],
    hidden: true,
  },
];
