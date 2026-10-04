/**
 * All portfolio content lives here and is taken from Resume.docx.
 * Edit this file to update text, links, the photo path or the CV path.
 */

export interface Profile {
  name: string;
  initials: string;
  headline: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  /** Path inside /public. Replace public/images/profile.png (or change this path) to update the photo. */
  photo: string;
  /** Path inside /public. Place the CV PDF at public/cv/Anam-Shaikh-CV.pdf. */
  cv: string;
}

export interface FocusArea {
  icon: string;
  title: string;
  text: string;
  tags: string[];
}

export interface SkillGroup {
  icon: string;
  title: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
}

export type ProjectCategory = 'dotnet' | 'ai' | 'live';

export interface ProjectFeature {
  icon: string;
  title: string;
  text: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  icon: string;
  primary?: boolean;
}

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  subtitle?: string;
  summary: string;
  highlights?: string[];
  features?: ProjectFeature[];
  tech: string[];
  links: ProjectLink[];
  diagram?: 'ecommerce' | 'rag';
  /** Live websites: domain shown in the browser-frame preview. */
  domain?: string;
  /** Optional screenshot path inside /public, e.g. 'images/projects/ecosphere-ai.png'. */
  image?: string;
  imageAlt?: string;
  wide?: boolean;
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  location: string;
  period: string;
  status?: string;
  note?: string;
}

export const PROFILE: Profile = {
  name: 'Anam Shaikh',
  initials: 'AS',
  headline: '.NET Developer | Full-Stack Developer | AI & Python',
  tagline:
    'Developing scalable web applications, backend services, responsive user interfaces, and AI/ML-enabled software solutions.',
  summary:
    '.NET and Full-Stack Developer with hands-on experience in C#, ASP.NET Core, Angular, Python, REST APIs, and database-driven applications. Skilled in developing scalable web applications, backend services, responsive user interfaces, and AI/ML-enabled software solutions. Experienced in API integration, database management, software deployment, and collaborative agile development. Master’s graduate in Computer Science in Germany, with a focus on Artificial Intelligence, Machine Learning, Deep Learning, and Information Retrieval.',
  location: 'Cottbus, Germany',
  email: 'anamshaih199@gmail.com',
  github: 'https://github.com/AnamShaikh19/',
  linkedin: 'https://www.linkedin.com/in/anam-shaikhh',
  photo: 'images/profile.png',
  cv: 'cv/Anam-Shaikh-CV.pdf',
};

export const FOCUS_AREAS: FocusArea[] = [
  {
    icon: 'server',
    title: '.NET Backend',
    text: 'Enterprise web applications and RESTful APIs with ASP.NET Core, applying Clean Architecture, Repository Pattern, Dependency Injection, and SOLID principles.',
    tags: ['C#', 'ASP.NET Core', 'Entity Framework', 'Web APIs'],
  },
  {
    icon: 'layout',
    title: 'Full-Stack Development',
    text: 'Responsive user interfaces with Angular and TypeScript, integrated with REST APIs and SQL databases, deployed to production on Microsoft Azure.',
    tags: ['Angular', 'TypeScript', 'SQL Server', 'Azure'],
  },
  {
    icon: 'sparkles',
    title: 'AI & Python',
    text: 'RAG pipelines and AI agents built in Python, backed by a Master’s focus on Artificial Intelligence, Machine Learning, Deep Learning, and Information Retrieval.',
    tags: ['Python', 'RAG', 'LLMs', 'ChromaDB'],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: 'code',
    title: 'Core Development',
    items: ['C#', 'Python', 'Java', 'SQL', '.NET Core', 'ASP.NET Core', 'ASP.NET MVC', 'Entity Framework', 'LINQ'],
  },
  {
    icon: 'layout',
    title: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap 5', 'jQuery'],
  },
  {
    icon: 'server',
    title: 'Backend & APIs',
    items: ['RESTful APIs', 'Web APIs', 'JWT', 'OAuth2', 'Microservices', 'API Integration', 'FastAPI'],
  },
  {
    icon: 'sparkles',
    title: 'AI & Data',
    items: ['Machine Learning', 'Deep Learning', 'Information Retrieval', 'Data Mining', 'Vector Databases (ChromaDB)'],
  },
  {
    icon: 'database',
    title: 'Databases',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Oracle Database'],
  },
  {
    icon: 'layers',
    title: 'Architecture',
    items: ['Clean Architecture', 'N-Tier Architecture', 'Repository Pattern', 'Unit of Work', 'Dependency Injection', 'SOLID'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    items: ['Microsoft Azure', 'Docker', 'Git', 'GitHub', 'Jenkins', 'GitHub Actions', 'CI/CD'],
  },
  {
    icon: 'wrench',
    title: 'Web Administration',
    items: ['WordPress', 'Plesk', 'Deployment', 'Maintenance', 'Backups', 'Security', 'Domain & DNS Management'],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'IT Specialist',
    company: 'ACB Job Agentur',
    location: 'Germany',
    period: '09/2025 – Present',
    current: true,
    bullets: [
      'Manage and maintain production WordPress websites, ensuring availability, security, performance, and reliable access to organizational data.',
      'Develop and maintain structured digital workflows for employer, student, and company information, supporting accurate and consistent data management.',
      'Configure and integrate website plugins, forms, and backend functionality to automate content and data-processing workflows.',
      'Administer production environments through Plesk, including deployment, hosting configuration, backups, monitoring, and routine maintenance.',
      'Analyze website performance and technical issues and implement data-driven performance, security, and usability improvements.',
      'Maintain structured website content and data to support automation, analytics, and efficient digital workflows.',
      'Perform website testing, deployment, domain configuration, and troubleshooting across production environments.',
      'Collaborate with internal teams to identify opportunities for process automation and improve digital workflows and user experience.',
    ],
    tags: ['WordPress', 'Plesk', 'Deployment', 'Backups', 'Domain & DNS'],
  },
  {
    role: 'Junior Developer',
    company: 'Soft Cygnus LLC',
    period: '02/2023 – 02/2025',
    bullets: [
      'Developed and maintained enterprise web applications using ASP.NET Core, ASP.NET MVC, C#, and Entity Framework, delivering scalable and high-performance solutions.',
      'Designed and developed RESTful APIs and Web APIs using ASP.NET Core, enabling integration with frontend applications and third-party services.',
      'Implemented Clean Architecture, N-Tier Architecture, and Microservices Architecture while applying Repository Pattern, Unit of Work, Dependency Injection (DI), and SOLID Principles.',
      'Developed responsive user interfaces using Angular, TypeScript, HTML5, CSS3, and Bootstrap.',
      'Optimized database performance using SQL Server, MySQL, PostgreSQL, Entity Framework, and LINQ.',
      'Automated build and deployment pipelines using Git, Jenkins, GitHub Actions, and CI/CD.',
    ],
    tags: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'Entity Framework', 'Angular', 'SQL Server', 'Jenkins', 'GitHub Actions'],
  },
  {
    role: 'Junior Developer',
    company: 'Applied IT Systems & Services Ltd',
    location: 'Remote, UK',
    period: '05/2020 – 07/2022',
    bullets: [
      'Developed and maintained web applications using ASP.NET Core, ASP.NET MVC, C#, and Entity Framework, delivering scalable and high-performance solutions.',
      'Designed and developed RESTful APIs and Web APIs, enabling seamless integration with frontend applications and third-party services.',
      'Built responsive user interfaces using Angular, JavaScript, HTML5, CSS3, Bootstrap, and jQuery.',
      'Optimized database performance using SQL Server, MySQL, Entity Framework, and LINQ.',
      'Implemented Clean Architecture, Repository Pattern, Dependency Injection (DI), and SOLID Principles.',
      'Participated in application deployment, bug fixing, performance optimization, and testing.',
      'Collaborated with frontend, backend, and DevOps teams to analyze and implement new features.',
    ],
    tags: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'Entity Framework', 'Angular', 'jQuery', 'SQL Server', 'MySQL'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce',
    category: 'dotnet',
    title: 'Digital E-Commerce Platform',
    subtitle: 'Microservices Architecture',
    summary: 'A scalable ASP.NET Core e-commerce platform using Microservices and Clean Architecture.',
    highlights: [
      'Developed a scalable ASP.NET Core e-commerce platform using Microservices and Clean Architecture.',
      'Built REST APIs, implemented JWT/OAuth2 authentication, and integrated Stripe for payments and refunds.',
      'Applied Repository Pattern, Unit of Work, and DI, with deployment using Docker and Microsoft Azure.',
    ],
    tech: ['C#', 'ASP.NET Core', 'Microservices', 'REST APIs', 'Entity Framework', 'JWT', 'OAuth2', 'Stripe', 'Docker', 'Azure'],
    links: [{ label: 'GitHub Profile', url: PROFILE.github, icon: 'github' }],
    diagram: 'ecommerce',
    wide: true,
  },
  {
    id: 'rag-receipts',
    category: 'ai',
    title: 'RAG-Based Intelligent Receipt Question Answering System',
    summary: 'A RAG pipeline with OCR for extracting and querying information from unstructured receipt documents.',
    highlights: [
      'Developed a RAG pipeline with OCR for extracting and querying information from unstructured receipt documents.',
      'Implemented semantic search and vector retrieval to retrieve relevant information from natural-language queries.',
      'Integrated LLMs with retrieved context to generate accurate, context-aware answers.',
    ],
    tech: ['Python', 'RAG', 'LLMs', 'Sentence Transformers', 'ChromaDB', 'NLP', 'OCR', 'Streamlit', 'Ollama'],
    links: [{ label: 'GitHub Profile', url: PROFILE.github, icon: 'github' }],
    diagram: 'rag',
    wide: true,
  },
  {
    id: 'restaurant-agent',
    category: 'ai',
    title: 'Restaurant AI Agent',
    summary:
      'An AI agent that handles customer conversations, orders, and reservation requests using AI-driven natural-language interactions.',
    features: [
      {
        icon: 'message',
        title: 'AI Customer Interaction',
        text: 'Handles customer conversations, orders, and reservation requests using AI-driven natural-language interactions.',
      },
      { icon: 'cart', title: 'Smart Ordering', text: 'Manages menus, deals, add-ons, and upselling.' },
      {
        icon: 'calendar',
        title: 'Reservation Management',
        text: 'Checks opening hours, capacity, party size, and availability.',
      },
      {
        icon: 'clock',
        title: 'Automated No-Show Handling',
        text: 'Tracks check-ins and automatically cancels no-shows after two hours.',
      },
      {
        icon: 'table',
        title: 'Google Sheets Integration',
        text: 'Stores and manages orders and reservations automatically.',
      },
    ],
    tech: ['Python', 'Flask', 'LLM/AI', 'RAG', 'Google Sheets API', 'APScheduler', 'JSON'],
    links: [{ label: 'GitHub Profile', url: PROFILE.github, icon: 'github' }],
    wide: true,
  },
  {
    id: 'ecosphere',
    category: 'live',
    title: 'EcoSphere AI',
    subtitle: 'Official Website (UK)',
    summary:
      'Designed, developed, tested, and deployed the official website for a UK-based AI company using Angular. Built responsive and reusable UI components and integrated routing, reactive forms, and REST APIs. Managed production deployment on Microsoft Azure.',
    tech: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap 5', 'REST APIs', 'Microsoft Azure'],
    links: [{ label: 'Visit Live Site', url: 'https://www.ecosphereai.uk/', icon: 'external', primary: true }],
    domain: 'ecosphereai.uk',
    image: 'images/projects/ecosphere-ai.png',
    imageAlt: 'Screenshot of the EcoSphere AI homepage (ecosphereai.uk)',
  },
  {
    id: 'kaswa',
    category: 'live',
    title: 'Kaswa Towing',
    subtitle: 'Official Website (USA)',
    summary:
      'Designed, developed, tested, and deployed a responsive and mobile-friendly Angular website. Managed production deployment on Microsoft Azure while ensuring cross-browser compatibility and a smooth user experience.',
    tech: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap 5', 'REST APIs', 'Microsoft Azure'],
    links: [{ label: 'Visit Live Site', url: 'https://www.kaswatowing.com/', icon: 'external', primary: true }],
    domain: 'kaswatowing.com',
    image: 'images/projects/kaswa-towing.png',
    imageAlt: 'Screenshot of the Kaswa Towing homepage (kaswatowing.com)',
  },
];

export const PROJECT_FILTERS: { key: 'all' | ProjectCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'dotnet', label: '.NET' },
  { key: 'ai', label: 'AI & Python' },
  { key: 'live', label: 'Live Websites' },
];

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  dotnet: '.NET',
  ai: 'AI · Python',
  live: 'Live Website',
};

export const EDUCATION: Education[] = [
  {
    degree: 'Master’s',
    field: 'Computer Science Engineering',
    school: 'GISMA University of Applied Sciences',
    location: 'Berlin, Germany',
    period: '03/2025 – 10/2026',
    status: 'Completed',
    note: 'Focus on Artificial Intelligence, Machine Learning, Deep Learning, and Information Retrieval.',
  },
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer System Engineering',
    school: 'Mehran University of Engineering & Technology',
    location: 'Jamshoro, Sindh, Pakistan',
    period: '01/2015 – 02/2018',
  },
];

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
