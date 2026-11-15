export type ProjectCategory = 'Full-Stack' | 'Desktop & Systems' | 'Frontend';
export type DeviceType = 'browser' | 'mobile' | 'desktop';

export interface ArchitectureLayer {
  layer: string;
  tech: string;
  responsibility: string;
}

export interface UIScreenBreakdown {
  id: string;
  title: string;
  subtitle: string;
  uxRationale: string;
  keyElements: string[];
  image?: string;
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  summary: string;
  highlights: string[];
  tech: string[];
  category: ProjectCategory;
  deviceType: DeviceType;
  heroImage?: string;
  github: string;
  demo?: string;
  caseStudy: {
    role: string;
    timeline: string;
    team: string;
    status: string;
    problem: string;
    solution: string;
    targetUsers: string;
    architecture: ArchitectureLayer[];
    technicalDecisions: string[];
    uiBreakdown: UIScreenBreakdown[];
    challenges: ChallengeSolution[];
    outcomes: string[];
  };
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: 'securelaw',
    title: 'SecureLaw',
    eyebrow: 'PRIME SPRINT • LEGAL-TECH • FULL-STACK',
    headline: 'Engineering a secure legal case & document workflow platform',
    summary:
      'Full-stack legal-tech platform built with a separated Angular frontend and Spring Boot REST backend for structured case tracking, role-guarded access, and encrypted document handling.',
    highlights: [
      'Stateless JWT authentication with strict role-based route & API guards',
      'Decoupled Angular TypeScript client paired with Spring Boot microservices',
      'Structured PostgreSQL schema for legal cases, client records, and audit trails',
    ],
    tech: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'JWT'],
    category: 'Full-Stack',
    deviceType: 'browser',
    github:
      'https://github.com/iCET-Computer-Engineering-Technology/PrimeSprint-T1-SecureLaw-Frontend',
    demo: 'https://securelaw.vercel.app/',
    caseStudy: {
      role: 'Full-Stack Developer',
      timeline: 'PrimeSprint Team Sprint',
      team: 'Team Sprint (Frontend + Backend)',
      status: 'Live on Vercel',
      problem:
        'Legal practitioners and clients often juggle fragmented emails, physical folders, and unsecured file shares when managing active cases—leading to missed deadlines and document version confusion.',
      solution:
        'Designed and built a unified web portal with clear role separation, structured case timelines, and JWT-protected REST endpoints so lawyers and clients can track case progress and documents in one place.',
      targetUsers: 'Law firms, legal assistants, and clients tracking active case documentation.',
      architecture: [
        {
          layer: 'Client SPA',
          tech: 'Angular + TypeScript',
          responsibility:
            'Reactive forms, route guards, HTTP interceptors for JWT attachment, and modular feature views.',
        },
        {
          layer: 'API & Security',
          tech: 'Java + Spring Boot + JWT',
          responsibility:
            'RESTful controllers, DTO validation, Spring Security filter chain, and stateless token verification.',
        },
        {
          layer: 'Persistence',
          tech: 'PostgreSQL',
          responsibility:
            'Relational storage for users, roles, legal case entities, and document metadata.',
        },
      ],
      technicalDecisions: [
        'Separated frontend and backend repositories to allow independent deployment on Vercel and cloud JVM hosting.',
        'Used Angular HTTP Interceptors to automatically attach Bearer tokens and handle 401 token expiry gracefully.',
        'Enforced DTO-level validation on Spring Boot endpoints to prevent malformed payloads from reaching the database.',
      ],
      uiBreakdown: [
        {
          id: 'dashboard',
          title: 'Case Command Dashboard',
          subtitle: 'High-clarity overview of active matters & deadlines',
          uxRationale:
            'Legal workflows are information-dense. We used a clean card-and-table hierarchy so practitioners can scan case status, priority, and next hearing dates within seconds.',
          keyElements: [
            'Status filter pills (Active, Pending Review, Closed)',
            'Quick-search case index with client metadata',
            'Role-aware action bar',
          ],
        },
        {
          id: 'vault',
          title: 'Document & Evidence Vault',
          subtitle: 'Structured file organization per case ID',
          uxRationale:
            'Grouped uploads by legal category rather than flat lists to eliminate version confusion and speed up document retrieval during hearings.',
          keyElements: [
            'Categorized document timeline',
            'Access-level indicators per role',
            'Instant preview & metadata tags',
          ],
        },
        {
          id: 'auth',
          title: 'JWT Role-Guarded Portal',
          subtitle: 'Secure onboarding & session lifecycle',
          uxRationale:
            'Clear inline validation and explicit role context prevent unauthorized navigation before requests even hit protected APIs.',
          keyElements: [
            'Angular CanActivate route guards',
            'JWT token refresh & expiry handling',
            'Role-tailored navigation shell',
          ],
        },
      ],
      challenges: [
        {
          challenge: 'Keeping frontend route access synchronized with backend Spring Security roles.',
          solution:
            'Standardized role claims inside the JWT payload and mirrored them in Angular route guards plus a centralized auth service.',
        },
        {
          challenge: 'Coordinating API contracts across separate frontend and backend sprint teams.',
          solution:
            'Defined explicit request/response DTO shapes early so UI development could proceed in parallel without blocking.',
        },
      ],
      outcomes: [
        'Delivered a live, deployed full-stack legal-tech MVP within the sprint timeline.',
        'Established clean separation of concerns between Angular UI state and Spring Boot business logic.',
      ],
    },
  },
  {
    slug: 'skill-duel',
    title: 'Skill Duel',
    eyebrow: 'REAL-TIME 1V1 ARENA • PYTHON 3.12 • DJANGO 4.X',
    headline: '1v1 Coding & Math challenge arena with auto-scoring & rank progression',
    summary:
      'A full-stack 1v1 challenge platform where users battle each other on Coding and Math questions in real time—featuring 5 auto-generated MCQs from the OpenTrivia Database API, instant auto-scoring, rank progression (Bronze → Silver → Gold → Platinum → Legend), Duel Inbox, and full answer breakdowns.',
    highlights: [
      '1v1 duel engine with 5 auto-generated Coding & Math MCQs and instant auto-scoring',
      'Global leaderboard with rank progression (Bronze → Silver → Gold → Platinum → Legend)',
      'Duel Inbox, public player profiles with win-rate history, and post-duel answer breakdown',
    ],
    tech: ['Python 3.12', 'Django 4.x', 'PostgreSQL', 'Railway', 'OpenTrivia DB API'],
    category: 'Full-Stack',
    deviceType: 'browser',
    heroImage: '/projects/skill-duel/live-duel.png',
    github: 'https://github.com/shanuka-upendra/Skill-Duel-Django',
    demo: 'https://skill-duel-django-production.up.railway.app/',
    caseStudy: {
      role: 'Solo Full-Stack Engineer',
      timeline: 'Personal Flagship Project',
      team: 'Solo',
      status: 'Live on Railway',
      problem:
        'Standard solo quiz apps lack competitive stakes and structured progression—learners answer static questions without head-to-head pressure, rank tiers, or a way to review missed answers against an opponent.',
      solution:
        'Built a full-stack 1v1 Coding and Math battle platform with Django 4.x and PostgreSQL where players challenge any registered user, complete 5 OpenTrivia DB MCQs, get auto-scored, climb 5 rank tiers, and inspect a question-by-question answer breakdown.',
      targetUsers:
        'Developers, students, and competitive learners testing Coding and Math fundamentals in quick 1v1 duels.',
      architecture: [
        {
          layer: 'Application & UI',
          tech: 'Python 3.12 + Django 4.x MVT',
          responsibility:
            'Server-rendered dark arena UI, authentication, Duel Inbox state management, public profiles, and Django Admin content panel.',
        },
        {
          layer: 'Duel & Scoring Engine',
          tech: 'Django Views + OpenTrivia DB API',
          responsibility:
            'Generates 5 Coding or Math MCQs per duel, locks identical question sets for both players, auto-scores submissions, and declares the winner.',
        },
        {
          layer: 'Database & Hosting',
          tech: 'PostgreSQL + Railway',
          responsibility:
            'Persists user stats, rank tiers (Bronze → Legend), duel histories, and global leaderboard standings in production.',
        },
      ],
      technicalDecisions: [
        'Fetched and normalized 5 MCQs from OpenTrivia DB at duel creation so both opponents compete on the exact same Coding or Math question set.',
        'Implemented an auto-refreshing waiting room (5s polling) and Duel Inbox separating incoming, active, and sent challenges.',
        'Added a Django Admin panel for moderating players, duels, and question records alongside production PostgreSQL on Railway.',
      ],
      uiBreakdown: [
        {
          id: 'live-duel',
          title: 'Live 1v1 Duel Arena',
          subtitle: 'Focused 5-question Coding & Math battle view',
          uxRationale:
            'Displays the match header (player vs. opponent, category badge, Question X of 5) and 4 clean option cards with a high-contrast gradient Submit button so players stay locked in.',
          keyElements: [
            'Head-to-head player banner & category pill (Coding / Math)',
            '4-option MCQ selector (A, B, C, D)',
            'Auto-refresh waiting screen when one player finishes first',
          ],
          image: '/projects/skill-duel/live-duel.png',
        },
        {
          id: 'home-dashboard',
          title: 'Player Home & Stats Hub',
          subtitle: 'Instant snapshot of wins, losses, rank & recent duels',
          uxRationale:
            'Greets returning players with their current rank tier, win rate, and a single "Start a duel" CTA above their recent match feed.',
          keyElements: [
            'Win / Loss / Rank / Win-Rate pill summary',
            'Primary "Start a duel" CTA',
            'Recent Duels activity list with category & status',
          ],
          image: '/projects/skill-duel/home-dashboard.png',
        },
        {
          id: 'challenge-setup',
          title: 'Challenge Creation Flow',
          subtitle: 'Pick any registered opponent and battle category',
          uxRationale:
            'Two-step card lets players select an opponent from the dropdown and choose between Coding (Python, Logic, DSA) or Math & Logic before sending.',
          keyElements: [
            'Registered player dropdown selector',
            'Coding vs. Math & Logic category cards',
            'One-click "Send challenge" trigger',
          ],
          image: '/projects/skill-duel/challenge-setup.jpg',
        },
        {
          id: 'duel-inbox',
          title: 'Duel Inbox',
          subtitle: 'Manage incoming, active, and sent challenges',
          uxRationale:
            'Separating Incoming Challenges, Active Duels, and Sent Challenges prevents missed matches and makes asynchronous play effortless.',
          keyElements: [
            'Incoming Challenges queue',
            'Active Duels — Finish These section',
            'Sent Challenges with Pending status badges',
          ],
          image: '/projects/skill-duel/duel-inbox.png',
        },
        {
          id: 'winner-breakdown',
          title: 'Winner Screen & Answer Breakdown',
          subtitle: 'Instant score comparison & question-by-question review',
          uxRationale:
            'Immediately celebrates the winner (+1 win · Rank updated) with a 3/5 vs 2/5 score card, then lets players expand the full green/red answer breakdown.',
          keyElements: [
            'Winner trophy banner & score comparison cards',
            'Per-question Correct / Wrong badges',
            'Highlighted user choice vs. correct answer',
          ],
          image: '/projects/skill-duel/answer-breakdown.png',
        },
        {
          id: 'leaderboard-profile',
          title: 'Global Leaderboard & Public Profile',
          subtitle: 'Bronze → Legend rank progression & full match history',
          uxRationale:
            'Highlights the current user on the global table and links to public player profiles showing Wins, Losses, Win Rate, and full duel history.',
          keyElements: [
            'Rank badges (Bronze, Silver, Gold, Platinum, Legend)',
            'Win / Loss / Win % columns',
            'Public profile KPI cards & duel history',
          ],
          image: '/projects/skill-duel/leaderboard.png',
        },
      ],
      challenges: [
        {
          challenge: 'Handling asynchronous completion when one player finishes all 5 questions before their opponent.',
          solution:
            'Built a dedicated "You finished! Waiting for your opponent..." state with 5-second auto-refresh and atomic winner evaluation once both players submit.',
        },
        {
          challenge: 'Normalizing OpenTrivia DB payloads and HTML-encoded characters for Coding and Math questions.',
          solution:
            'Added a Python ingestion helper to unescape HTML entities and persist clean 4-option MCQ records per duel.',
        },
      ],
      outcomes: [
        'Deployed a live, production-ready 1v1 Coding & Math platform on Railway backed by PostgreSQL.',
        'Delivered complete user journeys from registration and Duel Inbox to rank progression and answer review.',
      ],
    },
  },
  {
    slug: 'folio',
    title: 'Folio',
    eyebrow: 'SYIGEN • PUBLISHING PLATFORM • NEXT.JS',
    headline: 'Multi-role creator publishing & monetization platform',
    summary:
      'Modern blogging and creator publishing platform built with the team at SYIGEN, featuring five granular role-based access levels, Stripe monetization, and a fast reading experience.',
    highlights: [
      'Five-tier RBAC permission system spanning Normal Users through Super Admins',
      'Supabase + PostgreSQL backend paired with Next.js App Router & Tailwind CSS',
      'Integrated Stripe checkout & creator monetization workflows',
    ],
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Vercel'],
    category: 'Full-Stack',
    deviceType: 'browser',
    github: 'https://github.com/SYIGEN-TRAINING/blog-next',
    caseStudy: {
      role: 'Full-Stack Team Member',
      timeline: 'SYIGEN Training Cohort',
      team: 'SYIGEN Engineering Team',
      status: 'Completed Team Build',
      problem:
        'Many open-source blog starters only support a single author and lack real-world editorial governance, moderation tiers, or creator monetization.',
      solution:
        'Collaborated with the SYIGEN team to build a production-style publishing platform with 5 distinct access levels, Supabase auth/storage, and Stripe payment integration.',
      targetUsers: 'Independent writers, editorial teams, moderators, and paid subscribers.',
      architecture: [
        {
          layer: 'Frontend & SSR',
          tech: 'Next.js + Tailwind CSS',
          responsibility:
            'SEO-friendly article rendering, creator studio UI, and responsive reader layouts.',
        },
        {
          layer: 'Auth & Data',
          tech: 'Supabase + PostgreSQL',
          responsibility:
            'User authentication, row-level security policies, and structured article/comment tables.',
        },
        {
          layer: 'Payments',
          tech: 'Stripe',
          responsibility:
            'Subscription & creator payout checkout flows with webhook-verified status.',
        },
      ],
      technicalDecisions: [
        'Designed a 5-role permission matrix so moderation, publishing, and billing capabilities stay strictly scoped.',
        'Used Next.js server/client boundaries to keep SEO-critical blog posts fast while keeping editor dashboards interactive.',
        'Leveraged Supabase PostgreSQL for unified auth + relational content storage.',
      ],
      uiBreakdown: [
        {
          id: 'reader',
          title: 'Distraction-Free Editorial Reader',
          subtitle: 'Typography-first reading experience',
          uxRationale:
            'Long-form reading demands comfortable line lengths, clear hierarchy, and zero visual noise around the article body.',
          keyElements: [
            'Optimal measure reading column',
            'Author card & read-time indicator',
            'Gated premium content preview banner',
          ],
        },
        {
          id: 'rbac',
          title: '5-Role Governance & Admin Console',
          subtitle: 'Tailored permissions from Reader to Admin',
          uxRationale:
            'Instead of exposing one cluttered admin panel, navigation and actions adapt dynamically to each of the 5 role tiers.',
          keyElements: [
            'Role badge & permission matrix',
            'Content moderation queue',
            'User role elevation controls',
          ],
        },
        {
          id: 'monetization',
          title: 'Creator Monetization & Stripe Flow',
          subtitle: 'Seamless upgrade path for readers',
          uxRationale:
            'Inline paywall prompts feel native to the article rather than jarring popups, preserving reader trust.',
          keyElements: [
            'Tiered membership cards',
            'Stripe checkout handoff',
            'Creator earnings summary',
          ],
        },
      ],
      challenges: [
        {
          challenge: 'Enforcing 5 different permission levels consistently across UI and database.',
          solution:
            'Centralized role-checking helpers in Next.js middleware/components and backed them with Supabase database policies.',
        },
      ],
      outcomes: [
        'Delivered a multi-role publishing platform with real payment integration as part of the SYIGEN team.',
        'Gained hands-on experience with Next.js + Supabase + Stripe in a collaborative Git workflow.',
      ],
    },
  },
  {
    slug: 'phonecare-pos',
    title: 'Phonecare POS',
    eyebrow: 'SYIGEN • DESKTOP APP • TAURI + RUST',
    headline: 'Offline-capable desktop POS & repair shop management system',
    summary:
      'Cross-platform desktop point-of-sale application built with the SYIGEN team for a mobile phone retail and repair business, covering authentication, dashboards, inventory, and user management.',
    highlights: [
      'Lightweight native desktop binary powered by Tauri + Rust + React TypeScript',
      'Local-first SQLite persistence for reliable offline retail & repair operations',
      'Role-based staff authentication, analytics dashboard, and user management',
    ],
    tech: ['React', 'TypeScript', 'Rust', 'Tauri', 'SQLite'],
    category: 'Desktop & Systems',
    deviceType: 'desktop',
    github: 'https://github.com/SYIGEN-TRAINING/pos-team-b',
    caseStudy: {
      role: 'Frontend & Desktop App Developer',
      timeline: 'SYIGEN Training Cohort',
      team: 'POS Team B (SYIGEN)',
      status: 'Completed Team Build',
      problem:
        'Local mobile phone retail and repair shops need fast, reliable billing and repair-ticket tracking that does not stall when internet connectivity drops.',
      solution:
        'Built a native desktop POS using Tauri (Rust backend) and React TypeScript with local SQLite storage—combining web UI speed with native desktop reliability.',
      targetUsers: 'Phone shop cashiers, repair technicians, and store managers.',
      architecture: [
        {
          layer: 'Desktop UI',
          tech: 'React + TypeScript',
          responsibility:
            'POS checkout interface, staff login, management dashboards, and user administration.',
        },
        {
          layer: 'Native Bridge',
          tech: 'Tauri + Rust',
          responsibility:
            'Secure IPC commands between React and native OS capabilities with minimal memory footprint.',
        },
        {
          layer: 'Local Storage',
          tech: 'SQLite',
          responsibility:
            'Zero-latency local relational database for sales, repair jobs, and staff accounts.',
        },
      ],
      technicalDecisions: [
        'Chose Tauri + Rust over Electron to keep installer size and RAM usage low on shop counter PCs.',
        'Used SQLite so checkout and repair lookups remain instantaneous even offline.',
        'Contributed to project scaffolding, authentication flow, dashboards, and user management modules.',
      ],
      uiBreakdown: [
        {
          id: 'pos-desk',
          title: 'POS Checkout & Repair Queue',
          subtitle: 'High-speed counter workflow',
          uxRationale:
            'Cashiers need keyboard-friendly, high-contrast controls with clear item totals and repair ticket statuses at a glance.',
          keyElements: [
            'Split catalog & live invoice panel',
            'Repair ticket status tags (Diagnosing, Ready, Delivered)',
            'Offline-ready SQLite sync indicator',
          ],
        },
        {
          id: 'dashboard',
          title: 'Store Operations Dashboard',
          subtitle: 'Daily sales, active repairs & staff activity',
          uxRationale:
            'Managers see daily revenue, pending repairs, and low-stock alerts immediately after sign-in.',
          keyElements: [
            'Daily revenue & ticket KPI cards',
            'Staff role & user management table',
            'Quick-action shortcuts',
          ],
        },
      ],
      challenges: [
        {
          challenge: 'Bridging TypeScript frontend state cleanly with Rust Tauri commands.',
          solution:
            'Typed all Tauri IPC payloads on the TypeScript side so database queries and auth responses stayed predictable across the team.',
        },
      ],
      outcomes: [
        'Shipped a full desktop POS application with native performance and local SQLite persistence.',
        'Strengthened cross-stack collaboration across React, TypeScript, and Rust.',
      ],
    },
  },
  {
    slug: 'defence-system',
    title: 'Defence System',
    eyebrow: 'SYSTEMS DESIGN • JAVA • OBSERVER PATTERN',
    headline: 'Multi-unit tactical command simulation using the Observer Pattern',
    summary:
      'Java-based Defense Management System simulation demonstrating coordinated multi-unit command and real-time event broadcasting across Tank, Helicopter, and Submarine units.',
    highlights: [
      'Pure GoF Observer Pattern architecture for decoupled command-to-unit broadcasts',
      'Real-time synchronized state across Main Controller, Tank, Helicopter & Submarine',
      'Interactive Java Swing tactical GUI with strength-level & area-clear controls',
    ],
    tech: ['Java', 'OOP', 'Java Swing', 'Observer Pattern'],
    category: 'Desktop & Systems',
    deviceType: 'desktop',
    github: 'https://github.com/shanuka-upendra/DefenceSystem-SMD',
    caseStudy: {
      role: 'Solo Java Developer',
      timeline: 'Academic Systems Showcase',
      team: 'Solo',
      status: 'Completed Showcase',
      problem:
        'Tightly coupling a central command controller to multiple independent unit windows makes adding new unit types or broadcasting global alerts brittle and hard to maintain.',
      solution:
        'Implemented a clean Observer Design Pattern in Java where the Main Controller acts as the Subject and each defense unit (Tank, Helicopter, Submarine) subscribes as an independent Observer.',
      targetUsers: 'Software engineering showcase for OOP & behavioral design patterns.',
      architecture: [
        {
          layer: 'Subject / Observable',
          tech: 'MainController + Observable Interface',
          responsibility:
            'Maintains registered unit observers and broadcasts area status, slider strength levels, and tactical messages.',
        },
        {
          layer: 'Unit Observers',
          tech: 'Tank, Helicopter, Submarine (Java Swing)',
          responsibility:
            'React independently to strength thresholds (unlocking capabilities) and incoming command broadcasts.',
        },
      ],
      technicalDecisions: [
        'Modeled unit capabilities via an `Observer` interface so new defense units can be plugged in without modifying the controller.',
        'Built separate synchronized Swing frames to visually demonstrate real-time multi-window event propagation.',
      ],
      uiBreakdown: [
        {
          id: 'command',
          title: 'Main Command Controller',
          subtitle: 'Centralized broadcast & strength-level HUD',
          uxRationale:
            'One control panel drives global area-clear toggles, position/strength sliders, and unit-specific or broadcast messaging.',
          keyElements: [
            'Area Clear global toggle',
            'Strength level slider (0–100)',
            'Broadcast & private unit message console',
          ],
        },
        {
          id: 'units',
          title: 'Synchronized Unit Terminals',
          subtitle: 'Tank, Helicopter & Submarine independent windows',
          uxRationale:
            'Each unit terminal dynamically enables/disables its tactical buttons based on the controller’s strength threshold.',
          keyElements: [
            'Threshold-gated action buttons (Shoot, Missile, Sonar)',
            'Live incoming command log',
            'Unit fuel/ammo/oxygen telemetry',
          ],
        },
      ],
      challenges: [
        {
          challenge: 'Keeping multiple Swing windows responsive and synchronized without circular updates.',
          solution:
            'Enforced unidirectional event flow from the Observable controller to unit observers, with clean UI state guards.',
        },
      ],
      outcomes: [
        'Cleanly demonstrated OOP encapsulation, polymorphism, and the Observer Pattern in a visual simulation.',
      ],
    },
  },
  {
    slug: 'portfolio-v2',
    title: 'Portfolio Website',
    eyebrow: 'PERSONAL BRAND • REACT 19 • TAILWIND V4',
    headline: 'Glassmorphic developer portfolio with interactive case study docs',
    summary:
      'Modern developer portfolio engineered with dark-emerald glassmorphism, custom particle backdrops, Framer Motion micro-animations, and an interactive case-study documentation reader.',
    highlights: [
      'React 19 + TypeScript + Tailwind CSS v4 with custom glassmorphic design tokens',
      'Personalfolio-inspired editorial case study showcase & device mockup frames',
      'Shareable URL-synced Case Study Docs modal with zero page-reload friction',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    category: 'Frontend',
    deviceType: 'browser',
    github: 'https://github.com/shanuka-upendra/SMD-Portfolio',
    caseStudy: {
      role: 'Designer & Frontend Engineer',
      timeline: 'Ongoing Iteration',
      team: 'Solo',
      status: 'Active',
      problem:
        'Standard developer portfolios list project cards with two-line descriptions that fail to communicate architectural thinking or UI craft.',
      solution:
        'Redesigned the project showcase around wide editorial cards with custom coded UI previews and a full case-study documentation reader.',
      targetUsers: 'Recruiters, engineering leads, and potential collaborators.',
      architecture: [
        {
          layer: 'UI & Motion',
          tech: 'React 19 + Framer Motion',
          responsibility:
            'Scroll-triggered reveals, interactive device frames, and accessible modal transitions.',
        },
        {
          layer: 'Styling System',
          tech: 'Tailwind CSS v4',
          responsibility:
            'Custom glass-card surfaces, emerald radial spotlights, and responsive grid/flex layouts.',
        },
      ],
      technicalDecisions: [
        'Synced active case studies with `?project=<slug>` query parameters so links can be shared directly without adding router bloat.',
        'Built coded device mockups so every project card looks crisp at any resolution.',
      ],
      uiBreakdown: [
        {
          id: 'showcase',
          title: 'Editorial Case Study Cards',
          subtitle: '2-column layout inspired by Personalfolio',
          uxRationale:
            'Pairing concise impact bullets with a right-aligned device preview lets visitors grasp both the product UI and engineering scope immediately.',
          keyElements: [
            'Eyebrow metadata & serif/display headline',
            'Checkmark engineering highlights',
            'High-contrast View Case Study pill CTA',
          ],
        },
      ],
      challenges: [
        {
          challenge: 'Balancing rich visual animations with fast initial load and clean readability.',
          solution:
            'Used lightweight CSS glassmorphism, GPU-composited Framer Motion transforms, and lazy-interactive modal rendering.',
        },
      ],
      outcomes: [
        'Transformed a static project grid into an interactive, story-driven engineering portfolio.',
      ],
    },
  },
];

