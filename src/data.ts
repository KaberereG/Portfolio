import { Skill, TimelineItem, Project } from './types';
import login from './public/images/login.png';

export const SKILLS: Skill[] = [
  {
    id: 'react',
    number: '01',
    name: 'React',
    category: 'Frontend',
    masteryLevel: 90,
    experienceYears: 5,
    description: 'Specializing in advanced architecture, performance optimization, custom hook engines, and full-stack integration with server runtimes.',
    highlights: [
      'Built reusable and maintainable component libraries.',
      'Used React Context and custom hooks for state management.',
      'Optimized application performance through component refactoring and memoization.',
      'Integrated REST APIs with robust loading and error handling.',
    ]
  },
  {
    id: 'typescript',
    number: '02',
    name: 'Typescript',
    category: 'Logic',
    masteryLevel: 85,
    experienceYears: 3,
    description: 'Extensive experience building large-scale TypeScript applications with a strong focus on type safety, maintainability, and scalable architecture across frontend projects.',
    highlights: [
      'Built strongly typed React applications.',
      'Created reusable interfaces, utility types, and generic components.',
      'Reduced runtime bugs through static type checking.',
      'Refactored JavaScript applications to TypeScript.',
      'Improved maintainability with clear type definitions.'
    ]
  },
  {
    id: 'javascript',
    number: '03',
    name: 'JavaScript',
    category: 'Frontend',
    masteryLevel: 80,
    experienceYears: 4,
    description: 'Strong foundation in modern JavaScript (ES6+) with professional experience building interactive web applications and implementing complex business logic.',
    highlights: [
      'Used modern ES6+ features extensively.',
      'Built dynamic user interfaces.',
      'Worked with asynchronous programming using Promises and async/await.',
      'Consumed REST APIs.',
      'Developed reusable utility functions.'
    ]
  },
    
  {
    id: 'python',
    number: '04',
    name: 'Python',
    category: 'Django',
    masteryLevel: 92,
    experienceYears: 5,
    description: 'Structuring robust backend APIs, secure authentication matrices, database migrations, and background task celery queues.',
    highlights: [
      'Developed REST endpoints.',
      'Built authentication systems.',
      'Implemented subscription management.',
      'Optimized database queries.',
      'Integrated third-party services.'
    ]
  },
  {
    id: 'fastapi',
    number: '05',
    name: 'Fast API',
    category: 'Backend',
    masteryLevel: 94,
    experienceYears: 4,
    description: 'Experience building modern, high-performance APIs with FastAPI while improving backend architecture and API documentation.',
    highlights: [
      'Developed RESTful APIs.',
      'Built automatic API documentation.',
      'Improved backend maintainability.',
      'Integrated backend services.',
      'Implemented asynchronous endpoints.'
    ]
  },
  {
    id: 'aws',
    number: '06',
    name: 'AWS',
    category: 'Infrastructure',
    masteryLevel: 80,
    experienceYears: 4,
    description: 'Experience deploying, optimizing, and maintaining cloud infrastructure for scalable backend services and data processing systems.',
    highlights: [
      'Managed EC2 infrastructure.',
      'Optimized cloud costs.',
      'Built fault-tolerant processing systems.',
      'Implemented AWS SQS workflows.',
      'Improved application reliability.'
    ]
  },
  {
    id: 'postgresql',
    number: '07',
    name: 'PostgreSQL',
    category: 'Database',
    masteryLevel: 91,
    experienceYears: 6,
    description: 'Professional experience designing and working with relational databases, optimizing queries, and supporting large production systems.',
    highlights: [
      'Designed relational data models.',
      'Optimized SQL queries.',
      'Built efficient database relationships.',
      'Worked with migrations.',
      'Improved query performance.'
    ]
  },
  {
    id: 'firebase',
    number: '08',
    name: 'Firebase',
    category: 'Realtime',
    masteryLevel: 83,
    experienceYears: 5,
    description: 'Structuring Firestore security frameworks, Cloud Messaging alerts, OAuth integrations, and reactive synchronization listeners.',
    highlights: [
      'Created real-time sync systems for multi-user document collaboration.',
      'Implemented custom Auth triggers with Google Cloud Functions.',
      'Designed offline cache behaviors supporting zero-connectivity operations.'
    ]
  },
  {
    id: 'docker',
    number: '09',
    name: 'Docker',
    category: 'DevOps',
    masteryLevel: 90,
    experienceYears: 5,
    description: 'Containerizing monolithic and microservice application stacks, optimizing multi-stage builds, and orchestrating compose rigs.',
    highlights: [
      'Simplified deployments.',
      'Standardized development environments, eliminating the "works on my machine" issues.',
      'Containerized backend applications.'
    ]
  },
  {
    id: 'tailwind',
    number: '10',
    name: 'Tailwind',
    category: 'Styling',
    masteryLevel: 98,
    experienceYears: 2,
    description: 'Professional experience building responsive, modern user interfaces using Tailwind CSS with a focus on reusable styling and maintainable design systems.',
    highlights: [
      'Developed responsive layouts.',
      'Built reusable UI components.',
      'Customized Tailwind configuration.',
      'Maintained consistent styling across applications.'
    ]
  },
  {
    id: 'bootstrap',
    number: '11',
    name: 'Bootstrap',
    category: 'Styling',
    masteryLevel: 98,
    experienceYears: 2,
    description: 'Professional experience building responsive, modern user interfaces using Bootstrap with a focus on reusable styling and maintainable design systems.',
    highlights: [
      'Built responsive layouts.',
      'Customized Bootstrap components.',
      'Integrated with React.',
      'Maintained cross-browser compatibility.'
    ]
  },
  {
    id: 'shadcn-ui',
    number: '12',
    name: 'Shadcn UI',
    category: 'Styling',
    masteryLevel: 98,
    experienceYears: 2,
    description: 'Built modern, accessible, reusable UI components using shadcn/ui integrated with React and Tailwind CSS.',
    highlights: [
      'Created reusable components.',
      'Customized component behavior.',
      'Improved UI consistency.',
      'Implemented accessible interfaces.'
    ]
  },
  
];

export const JOURNEY: TimelineItem[] = [
  {
    id: 'role-1',
    period: 'April 2022 — Present',
    title: 'Senior Software Engineer',
    company: 'Native Coders',
    description: 'Developed and maintained full-stack web applications using Django, FastAPI, React, and TypeScript. Led initiatives to optimize cloud infrastructure and improve subscription management.',
    details: [
      'Contributed to the development of Treebula’s interactive map dashboard using React, TypeScript, Tailwind and Leaflet.',
      'Built and maintained subscription plans using Klarna/Kustom. This enabled hands off subscription renewals instead of manual re-checkout each year which directly supports recurring revenue retention.',
      'Led a cloud infrastructure optimization initiative by analyzing workload execution patterns across multiple Python-based backend services and consolidating three large AWS EC2 instances into a single shared environment. Refactored processing schedules to run at non-overlapping times, reducing infrastructure costs while maintaining application performance.'
    ],
    technologies: ['Django', 'FastAPI', 'Python', 'React', 'Typescript', 'Tailwind', 'Bootstrap', 'Shadcn', 'Docker', 'Leaflet', 'AWS', 'REST API', 'Puck CMS', 'PostgreSQL', 'Git', 'Jira']
  },
  {
    id: 'role-2',
    period: 'September 2021 — September 2024',
    title: 'Full Stack Developer',
    company: 'The Shaba - Part time',
    description: 'Developed the mobile and web platforms for a high-traffic e-commerce marketplace, implementing real-time dashboards.',
    details: [
      'Led the end-to-end development of Shaba mobile and web platforms, driving technical decisions across product design, architecture, implementation, deployment, and ongoing platform improvements.',
      'Partnered with founders and business stakeholders to gather requirements, define product roadmaps, and translate business objectives into scalable technical solutions.',
      'Designed and implemented core platform functionality across Android, web, backend services, and database layers, enabling artisans to manage profiles, market products, engage with customers, and process orders efficiently.'
    ],
    technologies: [ 'Kotlin', 'React', 'Javascript', 'Nodejs', 'MySQL', 'Android', 'Firebase', 'Jira', 'Agile Processes'
]
  },
  {
    id: 'role-3',
    period: 'June 2019 — March 2021',
    title: 'Android Developer',
    company: 'Masterclass Solutions',
    description: 'Focused on native mobile excellence using Kotlin and Java. Built several high-impact consumer apps with offline-first capabilities.',
    details: [
      'Developed and maintained a native Android app (Java, MVVM architecture) for the Competition Authority of Kenya (CAK), enabling citizens to submit complaints, track cases, and interact digitally with regulatory authorities.',
      'Took the lead on API integration strategy for the mobile team: designed and built reusable Java libraries on top of Retrofit/OkHttp for all backend communication, cutting duplicate networking code and speeding up feature delivery across the Masterclass client projects.',
      'Worked closely with backend engineers and stakeholders to define, review, and design REST APIs contracts, ensuring scalability, backward compatibility, and seamless integration between mobile and backend platforms.'
    ],
    technologies: [ 'Java', 'Android SDK', 'Room', 'Retrofit', 'OkHttp', 'Rest APIs', 'Material Design', 'Android Architecture Components', 'MVVM']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    name: 'Treebula',
    images: ['/images/overblick.png'],
    link:'https://treebula.se/',
    description: "Contributed to the development of Treebula's core platform by building and enhancing critical customer-facing features including subscription management, recurring payments, login authentication,pricing engines, reporting dashboards, and CRM integrations. Refactored application architecture, optimized backend performance, and delivered maintainable full-stack solutions",
    technologies: 'React, Typescript, PostgreSQL, Django, FastAPI, Tailwind, Bootstrap, Shadcn, Docker, Leaflet, AWS, REST API, Puck CMS'
  },
  {
    id: 'project-2',
    name: 'The Shaba',
    images: ['/images/shaba.jpeg'],
    link:'https://5f99bc-49.myshopify.com/',
    description: "Independently built and led the end-to-end development of The Shaba's mobile and web internal platforms, driving technical decisions across product design, architecture, implementation, deployment, and ongoing platform improvements. Partnered with founders and business stakeholders to gather requirements, define product roadmaps, and translate business objectives into scalable technical solutions.",
    technologies: 'Kotlin, React, Javascript, Nodejs, MySQL, Android, Firebase'
  }
]