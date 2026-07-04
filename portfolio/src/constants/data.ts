export const personal = {
  name: "Tsion Asrat",
  taglineParts: [
    "Software Engineering Student",
    "Full-Stack Web Developer",
    "Management Student",
  ],
  shortDescription:
    "I design scalable software systems and build modern web applications — bringing together technical depth and business thinking to turn ideas into products that matter.",
  email: "tsionasratkiya@gmail.com",
  phone: "+251982628450",
  location: "Dire Dawa, Ethiopia",
  github: "https://github.com/Tsion-se",
  linkedin: "https://linkedin.com/in/tsion-asrat",
  telegram: "https://t.me/Kiyu1y",
  resumeUrl: "/resume.pdf",
  about: [
    "I am a passionate Software Engineering student at Dire Dawa University, dedicated to designing scalable software systems and solving real-world problems through technology.",
    "Alongside my engineering studies, I am also pursuing a Bachelor of Management (Extension Program) because I believe great software is built by people who understand both technology and business.",
    "I enjoy building modern web applications, continuously improving my technical skills, and turning ideas into meaningful digital solutions.",
    "I value clean architecture, elegant UI, maintainable code, lifelong learning, and disciplined growth. Every project I build is another opportunity to become a better engineer.",
  ],
  personality: [
    "Analytical Thinker",
    "Curious Learner",
    "Detail-Oriented",
    "Professional",
    "Calm",
    "Disciplined",
    "Goal-Driven",
    "Strong Work Ethic",
    "Creative Problem Solver",
    "Continuous Learner",
    "Business-Minded",
    "Team Player",
  ],
  careerGoal:
    "My mission is to become an exceptional Software Engineer capable of designing scalable, efficient, secure, and impactful software solutions — combining technical expertise with business knowledge to build products that improve people's lives.",
};

export const education = [
  {
    id: "edu-se",
    school: "Dire Dawa University",
    program: "BSc Software Engineering (Regular)",
    focus: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Software Design",
      "Operating Systems",
      "Computer Networks",
      "Full Stack Development",
      "Software Engineering Principles",
    ],
  },
  {
    id: "edu-mgmt",
    school: "Dire Dawa University",
    program: "Bachelor of Management (Extension Program)",
    focus: [
      "Business Management",
      "Leadership",
      "Strategic Management",
      "Marketing",
      "Entrepreneurship",
      "Organizational Behavior",
      "Project Management",
    ],
  },
];

export const skillGroups = [
  { id: "programming", title: "Programming", skills: ["C++", "Java", "JavaScript", "TypeScript"] },
  { id: "frontend", title: "Frontend", skills: ["HTML5", "CSS3", "React", "Tailwind CSS", "Vite"] },
  { id: "backend", title: "Backend", skills: ["Node.js", "Express.js"] },
  { id: "database", title: "Database", skills: ["MySQL", "SQL", "Firebase", "Supabase"] },
  { id: "tools", title: "Tools", skills: ["Git", "GitHub", "VS Code", "Figma"] },
  {
    id: "engineering",
    title: "Engineering",
    skills: [
      "Object-Oriented Programming",
      "Data Structures",
      "Software Design",
      "REST APIs",
      "Responsive Design",
      "UI/UX Principles",
      "Problem Solving",
    ],
  },
];

export const technologies = [
  "React", "TypeScript", "JavaScript", "Node.js", "Tailwind CSS", "Vite",
  "MySQL", "Firebase", "Git", "GitHub", "Figma", "Express.js",
];

export const projects = [
  {
    id: "siltawi",
    title: "Siltawi Digital Marketing Website",
    description:
      "A modern, responsive company profile website built for Siltawi Digital Marketing — a creative agency based in Ethiopia. Designed for clarity and speed, with a full services, portfolio, and testimonials flow.",
    features: [
      "Responsive Design",
      "Modern UI",
      "SEO Optimized",
      "Smooth Animations",
      "Services Section",
      "Portfolio Section",
      "Testimonials",
      "Contact Section",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
    github: "https://github.com/Tsion-se/siltawi-digital-marketing-website",
    live: "https://siltawi-digital-marketing-website.vercel.app/",
  },
  {
    id: "wow-burger",
    title: "Wow Burger",
    description:
      "A responsive restaurant digital menu and admin dashboard — letting an owner manage categories and menu items with a clean, mobile-first interface backed by a local JSON data layer.",
    features: [
      "Category Management",
      "Menu Management",
      "Local Storage",
      "JSON Database",
      "Mobile-First Design",
      "Responsive UI",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "JSON", "Local Storage"],
    github: "https://github.com/Tsion-se/wow-burger",
    live: "https://wow-burger-ten.vercel.app/",
  },
];

export const journey = [
  {
    id: "j1",
    title: "Started the Software Engineering Path",
    description:
      "Began BSc Software Engineering at Dire Dawa University, building a foundation in data structures, algorithms, and core computer science principles.",
  },
  {
    id: "j2",
    title: "Learned Frontend Fundamentals",
    description:
      "Picked up HTML, CSS, and JavaScript, then moved into React — learning to turn static designs into interactive, component-driven interfaces.",
  },
  {
    id: "j3",
    title: "Built First Full Projects",
    description:
      "Shipped the Siltawi Digital Marketing website and the Wow Burger digital menu — applying React, TypeScript, and Tailwind CSS to real, deployed products.",
  },
  {
    id: "j4",
    title: "Added Business Thinking",
    description:
      "Enrolled in the Bachelor of Management program to understand strategy, leadership, and how great products connect to real business outcomes.",
  },
  {
    id: "j5",
    title: "Continuous Improvement",
    description:
      "Currently deepening backend and database skills, exploring open-source, and refining a personal engineering standard for clean, maintainable code.",
  },
];

export const certifications = [
  { id: "c1", title: "Responsive Web Design", issuer: "In Progress", status: "planned" as const },
  { id: "c2", title: "JavaScript", issuer: "In Progress", status: "planned" as const },
  { id: "c3", title: "React", issuer: "In Progress", status: "planned" as const },
  { id: "c4", title: "SQL", issuer: "In Progress", status: "planned" as const },
  { id: "c5", title: "Git & GitHub", issuer: "In Progress", status: "planned" as const },
];

export const statistics = [
  { id: "s1", value: 2, suffix: "+", label: "University Programs" },
  { id: "s2", value: 20, suffix: "+", label: "Technologies Learned" },
  { id: "s3", value: 2, suffix: "+", label: "Major Projects" },
  { id: "s4", value: 100, suffix: "%", label: "Commitment" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
