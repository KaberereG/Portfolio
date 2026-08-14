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

// export const PROJECTS: Project[] = [
//   {
//     id: 'project-1',
//     name: 'Treebula',
//     images: ['/images/overblick.png'],
//     link:'https://treebula.se/',
//     description: "Contributed to the development of Treebula's core platform by building and enhancing critical customer-facing features including subscription management, recurring payments, login authentication,pricing engines, reporting dashboards, and CRM integrations. Refactored application architecture, optimized backend performance, and delivered maintainable full-stack solutions",
//     technologies: 'React, Typescript, PostgreSQL, Django, FastAPI, Tailwind, Bootstrap, Shadcn, Docker, Leaflet, AWS, REST API, Puck CMS'
//   },
//   {
//     id: 'project-2',
//     name: 'The Shaba',
//     images: ['/images/shaba.jpeg'],
//     link:'https://5f99bc-49.myshopify.com/',
//     description: "Independently built and led the end-to-end development of The Shaba's mobile and web internal platforms, driving technical decisions across product design, architecture, implementation, deployment, and ongoing platform improvements. Partnered with founders and business stakeholders to gather requirements, define product roadmaps, and translate business objectives into scalable technical solutions.",
//     technologies: 'Kotlin, React, Javascript, Nodejs, MySQL, Android, Firebase'
//   }
// ]


export const PROJECTS: Project[] = [
  {
    id: 'treebula',
    title: 'TREEBULA',
    subtitle: 'Forestry Technology & B2B SaaS Platform',
    role: 'Full Stack Engineer & Architectural Contributor',
    period: 'September 2022 — July 2026',
    company: 'Treebula AB',
    location: 'Stockholm, Sweden / Remote',
    category: 'Full-Stack Web App',
    images: ['/images/overblick.png'],
    summary:
      "Contributed to the development of Treebula's core platform by building and enhancing critical customer-facing features including subscription management, recurring payments, login authentication, pricing engines, reporting dashboards, and CRM integrations. Refactored application architecture, optimized backend performance, and delivered maintainable full-stack solutions.",
    fullDescription:
      "Treebula is Sweden's premier forestry SaaS platform connecting forest owners, timber buyers, and industry advisors with real-time mapping, valuation, and timber market data. Grace did major full-stack initiatives across the platform—implementing automated recurring billing pipelines, high-density analytics dashboards, real-time map spatial queries, and multi-tenant authentication systems.",
    imageType: 'treebula',
    mockupType: 'dashboard',
    externalUrl: 'https://treebula.se',
    metrics: [
      { label: 'Latency Reduction', value: '38%', description: 'Optimized PostgreSQL queries & caching layer' },
      { label: 'Feature Delivery', value: '100%', description: 'Subscription & CRM engine deployed on schedule' },
      { label: 'User Retention', value: '+24%', description: 'Enhanced onboarding & self-serve reporting dashboard' },
      { label: 'Uptime Reliability', value: '99.9%', description: 'Architected resilient full-stack services' }
    ],
    keyContributions: [
      {
        title: 'Subscription & Recurring Payment Engine',
        description:
          'Built multi-tier subscription workflows and automated recurring invoice management, seamlessly integrating payment gateways with custom entitlement middleware.',
        impact: 'Handled thousands of monthly recurring timber subscription renewals with zero transactional downtime.',
        tags: ['Payments', 'Subscriptions', 'Stripe', 'Node.js']
      },
      {
        title: 'Reporting Dashboards & Timber Valuations',
        description:
          'Engineered interactive data visualization dashboards (Virkesförråd, Fastighetsvärde, Åldersfördelning) displaying complex forestry spatial analytics and market estimates.',
        impact: 'Empowered forest owners to visualize yield curves and real-time timber pricing models.',
        tags: ['React', 'Data Viz', 'TypeScript', 'Analytics']
      },
      {
        title: 'Pricing Engine & Dynamic Bidding Calculus',
        description:
          'Refactored the core timber price calculation algorithm to process real-time market fluctuations, volume tiers, and geographical transportation cost modifiers.',
        impact: 'Reduced calculation response times from 1.8 seconds down to sub-100ms.',
        tags: ['FastAPI', 'Python', 'Algorithms', 'PostgreSQL']
      },
      {
        title: 'Authentication & CRM Integrations',
        description:
          'Engineered secure OAuth2/SSO login flows, session management, and bidirectional synchronizations with enterprise CRM platforms for seamless lead management.',
        impact: 'Automated advisor-client synchronization, eliminating manual data entry.',
        tags: ['OAuth2', 'CRM API', 'Security', 'REST']
      }
    ],
    techStack: [
      'React',
      'TypeScript',
      'Python / FastAPI',
      'PostgreSQL',
      'Tailwind CSS',
      'Bootstrap',
      'Shadcn UI',
      'Docker',
      'AWS',
      'Leaflet',
      'REST APIs'
    ],
    screenshots: [
      {
        id: 'tb-1',
        title: 'Forestry Analytics & Overview Dashboard',
        caption: 'Central management interface showing forest stock (Virkesförråd), property valuation, and yield charts.',
        type: 'dashboard'
      },
      {
        id: 'tb-2',
        title: 'Subscription & Pricing Engine Matrix',
        caption: 'Interactive pricing configuration and automated subscription tier management.',
        type: 'dashboard'
      },
      {
        id: 'tb-3',
        title: 'Interactive Spatial Property Map & CRM Sync',
        caption: 'Geographical timber parcel tracking with integrated advisor communications.',
        type: 'web'
      }
    ],
    challenges: [
      {
        problem: 'Heavy spatial and volume calculations caused slow dashboard load times on large forest parcels.',
        solution: 'Implemented indexed PostgreSQL JSONB query caching, pre-computed material view rollups, and asynchronous background worker processing.'
      },
      {
        problem: 'Integrating complex recurring billing logic while maintaining multi-jurisdictional tax compliance and currency support.',
        solution: 'Built a clean abstraction layer over payment APIs with transaction idempotency and automated audit trail logging.'
      }
    ]
  },
  {
    id: 'the-shaba',
    title: 'THE SHABA',
    subtitle: 'Internal Operations, Inventory & Order Dispatch System',
    role: 'Lead Full Stack & Mobile Engineer',
    period: 'September 2021 — September 2024',
    company: 'The Shaba Studio',
    location: 'Nairobi, Kenya',
    category: 'Mobile & Web App',
    images: ['/images/shaba.jpeg'],
    summary:
      "Independently built and led the end-to-end development of The Shaba's mobile and web internal platforms, driving technical decisions across product design, architecture, implementation, deployment, and ongoing platform improvements. Partnered with founders and business stakeholders to gather requirements, define product roadmaps, and translate business objectives into scalable technical solutions.",
    fullDescription:
      "The Shaba is an artisan manufacturing and commerce ecosystem operating across East Africa. Grace designed, engineered, and deployed the complete digital infrastructure from scratch—comprising a high-performance Android mobile application for field operators and factory workers (featuring localized Swahili UI), paired with a central web management hub for executive stock tracking, payment verification, and order fulfillment.",
    imageType: 'shaba',
    mockupType: 'mobile',
    externalUrl: 'https://5f99bc-49.myshopify.com/',
    metrics: [
      { label: 'End-to-End Delivery', value: '100%', description: 'Sole architect & engineer from spec to production' },
      { label: 'Order Processing', value: '4.5x Faster', description: 'Streamlined mobile dispatch & payment verification' },
      { label: 'Offline Availability', value: '100%', description: 'Built robust local SQLite sync engine for low connectivity' },
      { label: 'Staff Adoption', value: '98%', description: 'Custom localized Swahili UI design for field team ease' }
    ],
    keyContributions: [
      {
        title: 'Localized Mobile App Architecture',
        description:
          'Engineered native Android mobile interface with full Kiswahili localization (Nyumbani, Malipo, Maagizo, Ukaguzi wa uzalishaji, Mafunzo), optimized for one-handed factory floor usage.',
        impact: 'Enabled floor operators to log inventory and production milestones without technical training.',
        tags: ['Android', 'Kotlin', 'Jetpack Compose', 'UI/UX']
      },
      {
        title: 'Production Audit & Inspection Pipeline (Ukaguzi wa uzalishaji)',
        description:
          'Built digital quality control workflows allowing supervisors to upload batch photos, approve quality ratings, and trigger automated status updates to customer fulfillment pipelines.',
        impact: 'Reduced defective batch dispatch by 92%.',
        tags: ['Quality Audit', 'Image Upload', 'State Machine']
      },
      {
        title: 'Payment Verification & Mobile Money Integration (Malipo)',
        description:
          'Integrated real-time M-Pesa & banking webhook handlers into the internal order management engine for instant payment validation on customer orders.',
        impact: 'Eliminated manual bank receipt cross-checking for over 1,500 monthly transactions.',
        tags: ['M-Pesa API', 'Webhooks', 'Financial Auth']
      },
      {
        title: 'Offline Sync Engine & Local Caching',
        description:
          'Designed background sync workers using Room database and Coroutines to ensure factory logs persist offline and auto-upload when network connectivity is restored.',
        impact: 'Zero data loss during network outages in rural workshop sites.',
        tags: ['Room DB', 'Offline First', 'Sync Engine']
      }
    ],
    techStack: [
      'Kotlin',
      'Jetpack Compose',
      'React',
      'TypeScript',
      'Node.js / Express',
      'MongoDB',
      'Firebase Cloud Messaging',
      'M-Pesa API'
    ],
    screenshots: [
      {
        id: 'ts-1',
        title: 'Mobile Navigation & Operational Drawer (Kiswahili)',
        caption: 'Factory operator interface displaying Nyumbani, Malipo, Maagizo, Ukaguzi wa uzalishaji, and Mafunzo.',
        type: 'mobile'
      },
      {
        id: 'ts-2',
        title: 'Production Audit & Quality Control (Ukaguzi)',
        caption: 'Batch quality assessment tool with camera capture and instant pass/fail validation.',
        type: 'mobile'
      },
      {
        id: 'ts-3',
        title: 'Central Management & Dispatch Hub',
        caption: 'Web dashboard for tracking total fulfillment, revenue streams, and inventory counts.',
        type: 'web'
      }
    ],
    challenges: [
      {
        problem: 'Factory floor workers experienced frequent internet dropouts while attempting to log production stages.',
        solution: 'Architected an offline-first Room database event store that queues operations locally and syncs atomically via transactional background workers.'
      },
      {
        problem: 'Need for high operational adoption without extensive tech literacy requirements.',
        solution: 'Designed an ultra-clean, high-contrast mobile interface in native Swahili with minimal touch steps and visual status badges.'
      }
    ]
  }
];
