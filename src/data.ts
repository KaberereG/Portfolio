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
    experienceYears: 4,
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
    technologies: ['Kotlin', 'React', 'Javascript', 'Nodejs', 'MySQL', 'Android', 'Firebase', 'Jira', 'Agile Processes'
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
    technologies: ['Java', 'Android SDK', 'Room', 'Retrofit', 'OkHttp', 'Rest APIs', 'Material Design', 'Android Architecture Components', 'MVVM']
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
    images: ['/images/overblick.png', '/images/login.png'],
    summary:
      "Contributed to the development of Treebula's core platform by building and enhancing critical customer-facing features including subscription management, recurring payments, login authentication, pricing engines, reporting dashboards, and CRM integrations. Refactored application architecture, optimized backend performance, and delivered maintainable full-stack solutions.",
    fullDescription:
      "Treebula is Sweden's premier forestry SaaS platform connecting forest owners, timber buyers, and industry advisors with real-time mapping, valuation, and timber market data. Grace did major full-stack initiatives across the platform—implementing automated recurring billing pipelines, high-density analytics dashboards, real-time map spatial queries, and multi-tenant authentication systems.",
    imageType: 'treebula',
    mockupType: 'dashboard',
    externalUrl: 'https://treebula.se',
    metrics: [
      { label: 'Codebase Impact', value: '1,000+', description: 'Commits across large-scale frontend and backend modernization' },
      { label: 'Features Shipped', value: '30+', description: 'Major systems delivered: payments, auth, CMS, auctions, GDPR' },
      { label: 'Platform Migration', value: 'Django → FastAPI', description: 'Async migration of core map & property services' },
      { label: 'Container Consolidation', value: '2 → 1', description: 'Simplified Docker deployment architecture' },
    ],
    keyContributions: [
      {
        title: 'Subscription & Recurring Payment Engine',
        description:
          'Built Treebula Plus yearly auto-renewal system integrating Klarna/Kustom recurring billing — token lifecycle management, scheduled renewal charges, cancellation flows, and race-condition-safe expiry handling, backed by a rewritten React checkout architecture.',
        impact:
          'Replaced manual re-checkout with hands-off annual renewals, synced billing/CRM data via automated HubSpot deal creation, and eliminated a class of pricing and duplicate-billing bugs across checkout flows.',
        tags: ['Payments', 'Subscriptions', 'Klarna/Kustom', 'React', 'Django', 'HubSpot API'],
      },
      {
        title: 'Digital Forest Report (DFR) Platform & Access Management',
        description:
          'Contributed to major DFR/Plus platform releases and built ongoing maintenance systems: automated daily expiry updates for DFR access, weekly email subscription management (backend + frontend settings), and pricing consistency fixes tied to live subscription state.',
        impact:
          'Kept Plus/DFR access accurate as subscriptions changed, gave forest owners control over their communication preferences, and eliminated stale cached pricing in the portal — improving trust in displayed prices.',
        tags: ['Django', 'React', 'Subscriptions', 'Automation', 'DFR/Plus'],
      },
      {
        title: 'Map Service & Property Generation Pipeline',
        description:
          'Led migration to direct map-service integration for forest-property generation (FastAPI), moving property generation polling and worker logic out of Django to run entirely within the map service. Replaced intermediate loading patterns with a queue-based generation flow, fixed worker status polling for SBP regeneration, and hardened upstream data handling against malformed JSON responses.',
        impact:
          'Eliminated "stuck loading" states during property generation, reduced redundant map API traffic through border-fetch optimizations, and prevented downstream crashes from malformed upstream data — with a simpler, single-service architecture for generation and polling.',
        tags: ['Python', 'FastAPI', 'QGIS', 'Async', 'Queue Processing', 'API Optimization'],
      },
      {
        title: 'Authentication & Account Security (BankID)',
        description:
          'Delivered BankID-based login for Swedish identity verification — magic-link authentication, verification codes, QR-code login, personal-number validation, and mobile/SMS login paths. Added brute-force protection on magic-link/verify-code flows with attempt limits and IP+email tracking.',
        impact:
          'Enabled modern, compliant Swedish identity-based login, reducing password friction and login-endpoint abuse. Redesigned login UX (layout, imagery converted to WebP) improved first impressions and page-load speed.',
        tags: ['BankID', 'Authentication', 'Security', 'React', 'Django'],
      },
      {
        title: 'Account Management, GDPR & CRM Integration',
        description:
          'Built self-service user settings with subscription details and HubSpot API integration, cancellation/end-subscription flows, and GDPR-compliant data-deletion workflows. Extended HubSpot integration with a custom Bid object, subscription sync, and tier-based CRM automation (CO2 deals for Plus users).',
        impact:
          'Reduced support load for account/subscription questions, gave users a clear offboarding path, and gave sales/support teams accurate subscription status without manual lookups.',
        tags: ['Django', 'React', 'HubSpot API', 'GDPR', 'BankID'],
      },

      {
        title: 'Frontend Platform & Design System Modernization',
        description:
          'Led large-scale frontend modernization (1,000+ commits) of the component library: Puck CMS editor fixes, standardized UI components (Popover, file-upload), and Figma-aligned navbar/mobile layouts. Fixed analytics event tracking (duplicate page views, funnel attribution) and shipped performance work — WebP migration, conditional Leaflet loading, and legacy code removal.',
        impact:
          'Delivered a consistent UI across marketing and product surfaces, faster page loads, more accurate product/marketing analytics, and lower long-term maintenance burden.',
        tags: ['React', 'Design System', 'Performance', 'Analytics', 'Puck CMS'],
      },
      {
        title: 'Multi-Market CMS & Forest Data Platform',
        description:
          'Built a dynamic CMS navigation system (models, middleware, CRUD endpoints) enabling deploy-free site changes via Puck CMS, plus multi-domain support for a Norway market expansion. Delivered SBP/forest-plan tooling (settings panel, area corrections, prop-borders API) and child-account permissions for family/organizational ownership, alongside production hardening (uWSGI migration, error logging).',
        impact:
          'Gave content teams independent control over navigation, laid the foundation for multi-country expansion, improved forest-inventory accuracy, and made the platform more production-ready and easier to diagnose in incidents.',
        tags: ['Django', 'Puck CMS', 'Multi-tenant', 'GIS', 'Infrastructure'],
      },
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
      'REST APIs',
      'Puck CMS',
      'HubSpot API',
      'BankID',
      'QGIS'
    ],
    screenshots: [
      {
        id: 'tb-1',
        title: 'Login page',
        caption: 'Login page with BankID, magic-link, and verification-code authentication flows.',
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
    problem: 'Django→FastAPI migration risked breaking existing synchronous ORM-dependent code paths mid-transition.',
        solution: 'Used asyncio.to_thread to offload sync-heavy GIS/raster operations into async endpoints, and leveraged FastAPI\'s lifespan context to initialize Django alongside FastAPI — enabling incremental migration without a full rewrite.',
      },
     {
  problem: 'Race conditions between DFR (Digital Forest Report) expiry jobs and renewal charges risked users losing access despite active subscriptions, or being billed after cancellation.',
  solution: 'Fixed timing/ordering logic between expiry jobs and renewal scheduling, backed by end-to-end tests to catch issues before they reached production.',
},
{
  problem: 'Two separate Docker containers created deployment complexity and process-management overhead.',
  solution: 'Consolidated into a single container using a custom entrypoint script with coordinated process supervision, simplifying deployment while preserving each service\'s independent lifecycle.',
},
{
    problem: 'Magic-link and verify-code login flows were vulnerable to brute-force abuse and SMS/email spam.',
    solution: 'Added attempt limits with IP+email tracking and lockout after repeated failures, closing the abuse vector without degrading legitimate login UX.',
  },
  {
    problem: 'Property generation showed "stuck loading" states because polling and worker status logic were split across Django and the map service.',
    solution: 'Migrated property-generation polling and workers to run entirely within the map service (FastAPI), replacing intermediate loading patterns with a queue-based generation flow.',
  },
  {
    problem: 'Displayed prices in the forest-owner portal sometimes reflected outdated cached values instead of current subscription state.',
    solution: 'Fixed pricing logic to read from live subscription state across checkout and property flows, aligning FetchPropertyData, forest-land pricing, and multi-property discounts.',
  },
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
    images: ['/images/shaba.jpeg', '/images/shaba-dashboard.png'],
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
        title: 'Order processing & Mpesa payment',
        description:
          'Allowed internal operators to create direct order dispatches to the artisans, and verify payments by M-pesa to the artisan accounts.',
        impact: 'Eliminated calling artisans for order confirmations or payment verifications.',
        tags: [ 'Webhooks', 'Financial Auth']
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
      'Node.js / Express',
      'MongoDB',
      'Firebase Cloud Messaging',
    ],
    screenshots: [
      {
        id: 'ts-1',
        title: 'Central Management & Dispatch Hub',
        caption: 'Web dashboard for tracking total fulfillment, revenue streams, and inventory counts.',
        type: 'web'
      },
      {
        id: 'ts-2',
        title: 'Mobile Navigation & Operational Drawer (Kiswahili)',
        caption: 'Factory operator interface displaying Nyumbani, Malipo, Maagizo, Ukaguzi wa uzalishaji, and Mafunzo.',
        type: 'mobile'
      },
      {
        id: 'ts-3',
        title: 'Production Audit & Quality Control (Ukaguzi)',
        caption: 'Batch quality assessment tool with camera capture and instant pass/fail validation.',
        type: 'mobile'
      },
      
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
