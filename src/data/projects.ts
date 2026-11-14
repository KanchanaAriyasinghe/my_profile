import { asset } from '../lib/asset';
import type { Project } from '../types';

const GH = 'https://github.com/KanchanaAriyasinghe';
const LI = 'https://www.linkedin.com/posts/kanchana-ariyasinghe-ba76622b5';

export const projects: Project[] = [
  {
    title: 'AI-Powered Video Learning Assistant',
    description:
      'Full-stack AI learning platform that transforms educational videos into structured study materials. Includes video input handling, transcript processing, AI-generated summaries, quiz generation, semantic search, and personalized learning tracking.',
    image: asset('assets/AI-Powered Video Learning Assistant.jpg'),
    date: 'April 2026 – Present',
    tags: ['Next.js', 'Strapi', 'PostgreSQL', 'OpenAI API'],
    category: 'AI / ML',
    link: `${GH}/smart-learning-assistant`,
    repo: `${GH}/smart-learning-assistant`,
    ongoing: true,
    hidden: true,
  },
  {
    title: 'E-Commerce Web Application',
    description:
      'Full-stack e-commerce platform for managing and purchasing computer products. Features product search, cart, checkout, order placement, profile management, and an admin panel for products, users, orders, and reviews.',
    image: asset('assets/project9.png'),
    date: 'January 2026',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    category: 'Full-Stack',
    link: `${GH}/i-computers`,
    repo: `${GH}/i-computers`,
    demo: 'https://i-computers-six.vercel.app/',
  },
  {
    title: 'Luxury Hotel Management',
    description:
      'Full-stack MERN system with roles for customers, receptionists, housekeeping, and admin — covering bookings, room management, and operations.',
    image: asset('assets/project8.png'),
    date: 'November 2025',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Full-Stack',
    link: `${GH}/hotel-system`,
    repo: `${GH}/hotel-system`,
  },
  {
    title: 'Computer Lab Booking & Equipment Borrowing',
    description: 'Full-stack MERN system for booking labs and borrowing equipment with real-time availability tracking.',
    image: asset('assets/project1.png'),
    date: 'January 2025',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Full-Stack',
    link: `${LI}_mern-fullstackdevelopment-softwareengineering-activity-7338531798404018176-_Mb4`,
    repo: `${GH}/Computer-Lab-booking-and-equipments-borrowing`,
    post: `${LI}_mern-fullstackdevelopment-softwareengineering-activity-7338531798404018176-_Mb4`,
  },
  {
    title: 'Smart Medicine Reminder Box',
    description:
      'IoT-based device for automated medication tracking with real-time scheduling via Firebase-powered web interface.',
    image: asset('assets/project2.png'),
    date: 'January 2025',
    tags: ['IoT', 'ESP32', 'Firebase'],
    category: 'IoT',
    link: `${LI}_iotinnovation-embeddedsolutions-esp32projects-activity-7323374191620091904-0H45`,
    repo: 'https://github.com/BuddhiniNavoda/smart-medical-reminder-box-EC6020',
    post: `${LI}_iotinnovation-embeddedsolutions-esp32projects-activity-7323374191620091904-0H45`,
  },
  {
    title: 'Research AI Chatbot',
    description:
      'Intelligent assistant combining PDF analysis, academic paper discovery, and conversational AI for researchers.',
    image: asset('assets/project7.png'),
    date: 'November 2025',
    tags: ['Python', 'Flask', 'Groq API'],
    category: 'AI / ML',
    link: `${GH}/research_chatbot`,
    repo: `${GH}/research_chatbot`,
    post: `${LI}_ai-machinelearning-nlp-activity-7395024416532955136--301`,
  },
  {
    title: 'Movie Finder',
    description: 'A clean web application for discovering movies, browsing details, and exploring genres via the TMDB API.',
    image: asset('assets/project4.png'),
    date: 'June 2025',
    tags: ['React', 'TMDB API', 'JavaScript'],
    category: 'Frontend',
    link: `${GH}/movie-website`,
    repo: `${GH}/movie-website`,
  },
  {
    title: 'Smart Currency Converter',
    description: 'Convert currencies using real-time and historical exchange rate data with a clean, intuitive interface.',
    image: asset('assets/project3.png'),
    date: 'June 2025',
    tags: ['React', 'Node.js', 'Exchange Rates API'],
    category: 'Full-Stack',
    link: `${GH}/currency_app`,
    repo: `${GH}/currency_app`,
  },
  {
    title: 'Student Feedback Management',
    description: 'System to collect and manage course and lecturer feedback within the faculty with admin reporting.',
    image: asset('assets/project5.png'),
    date: 'January 2024',
    tags: ['PHP', 'MySQL', 'HTML/CSS'],
    category: 'Full-Stack',
    link: `${LI}_php-html-css-activity-7244577750760456192-DG5l`,
    post: `${LI}_php-html-css-activity-7244577750760456192-DG5l`,
  },
  {
    title: 'Food Recipe App',
    description: 'Platform for discovering, creating, and sharing recipes with a full-stack React and Node.js architecture.',
    image: asset('assets/project6.png'),
    date: 'November 2025',
    tags: ['React', 'Node.js', 'JavaScript'],
    category: 'Full-Stack',
    link: `${GH}/food_recipe_app`,
    repo: `${GH}/food_recipe_app`,
  },
];
