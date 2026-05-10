// src/config/portfolio.config.js

export const portfolioData = {
  personal: {
    name: "Ishaan",
    role: "Computer Science Graduate & Incoming SWE @ TCS",
    tagline: "Exploring the vast cosmos of web development.",
    bio: "Currently navigating through the stellar world of Modern Tech while crafting digital experiences that transcend ordinary boundaries. I specialize in scalable backend architectures and AI/ML integrations.",
    resumeUrl: "https://drive.google.com/uc?export=download&id=1V1ghArc0dQvUj0DF1DAYypKFIMZQCM2_",
    contact: {
      publicEmail: "hello@ishaanm.dev",
      forwardingEmail: "ishaancodes01@gmail.com"
    }
  },
  
skills: [
    // --- Core Languages ---
    { name: 'C++', level: 85, color: 'from-blue-400 to-blue-600', icon: 'cpu' },
    { name: 'Python', level: 85, color: 'from-yellow-400 to-yellow-600', icon: 'terminal' }, // Added from AI focus
    { name: 'Java', level: 80, color: 'from-red-500 to-orange-500', icon: 'code' }, // Added from TCS/LeetCode profile
    { name: 'TypeScript', level: 80, color: 'from-blue-500 to-cyan-500', icon: 'code' }, // Added from Bookstore API

    // --- AI & Machine Learning (Crucial for your profile) ---
    { name: 'Deep Learning', level: 75, color: 'from-purple-500 to-indigo-600', icon: 'brain' }, // Added from user summary
    { name: 'Vision Transformers', level: 70, color: 'from-pink-500 to-rose-600', icon: 'eye' }, // Added from user summary
    { name: 'Gemini AI', level: 85, color: 'from-blue-300 to-blue-500', icon: 'zap' }, // Added from Project Ouroboros

    // --- Web & Backend ---
    { name: 'React.js', level: 85, color: 'from-cyan-400 to-blue-600', icon: 'gauge' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600', icon: 'zap' },
    { name: 'PostgreSQL', level: 75, color: 'from-purple-400 to-purple-600', icon: 'database' },
    { name: 'NestJS', level: 70, color: 'from-red-500 to-red-700', icon: 'server' }, // Added from Bookstore API
    { name: 'Supabase', level: 80, color: 'from-emerald-400 to-emerald-600', icon: 'database' }, // Added from Project Ouroboros

    // --- Tools & DevOps ---
    { name: 'Docker', level: 75, color: 'from-blue-400 to-blue-500', icon: 'package' }, // Added from Bookstore API
    { name: 'Linux CLI', level: 80, color: 'from-gray-400 to-gray-600', icon: 'terminal' },
    { name: 'Three.js', level: 70, color: 'from-white to-gray-400', icon: 'box' }, // Added from DRDO internship
  ],
  projects: [
    {
      id: "gate-tracker",
      title: "Gate Tracker",
      subtitle: "GATE Exam Preparation Manager",
      description: "Comprehensive database application for tracking and managing GATE preparation progress with goal setting and performance analytics.",
      technologies: ["Node.js", "Express", "MySQL", "React", "Chart.js", "Bootstrap"],
      features: [
        "Subject, topic, and subtopic organization system",
        "Progress tracking with completion status",
        "Goal setting with deadline management",
        "Performance visualization with interactive charts",
        "Data export/import for backup and portability"
      ],
      icon: "database",
      color: "from-amber-400 to-orange-600",
      category: "Database App"
    },
    {
      id: "manga-scraper",
      title: "Manga Scraper CLI",
      subtitle: "Command-Line Manga Aggregator",
      description: "Advanced CLI tool for scraping manga from multiple sources and generating PDF collections with interactive UX.",
      technologies: ["Node.js", "Puppeteer", "PDF-Lib", "Inquirer", "Axios", "CLI-Progress"],
      features: [
        "Multi-source manga scraping (Manhuaga.com, Manhuafast.net)",
        "PDF bundling with custom formatting",
        "Interactive CLI with progress visualization", 
        "Modular adapter-based architecture"
      ],
      icon: "terminal",
      color: "from-green-400 to-emerald-600",
      category: "CLI Tool"
    },
    {
      id: "bookstore-api",
      title: "Bookstore API",
      subtitle: "Enterprise-Grade REST API",
      description: "Scalable bookstore management system with comprehensive CRUD operations, authentication, and containerized deployment.",
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT", "Swagger", "Docker"],
      features: [
        "Modular NestJS architecture with TypeScript",
        "Advanced filtering and search capabilities",
        "JWT-based authentication system",
        "Auto-generated Swagger documentation",
        "Docker containerization for deployment"
      ],
      icon: "server",
      color: "from-blue-400 to-indigo-600",
      category: "Backend API"
    },
    {
      id: "mangaplumo",
      title: "MangaPlumo",
      subtitle: "Full-Stack Manga Platform",
      description: "Complete manga downloading platform with advanced scraping, image processing, and modern React frontend.",
      technologies: ["Node.js", "React", "Puppeteer", "Sharp", "Docker", "GitHub Actions", "Vercel", "Render"],
      features: [
        "Express API with Puppeteer scraping adapters",
        "Sharp-powered image processing pipeline",
        "Vite + React + Tailwind modern frontend",
        "Automated CI/CD with GitHub Actions",
        "Multi-platform deployment (Vercel + Render)"
      ],
      icon: "globe",
      color: "from-purple-400 to-pink-600",
      category: "Full-Stack"
    }
  ],

  experience: [
    {
      id: "drdo-intern",
      role: "Project Intern",
      company: "ADRDE, DRDO, Govt. of India",
      location: "Agra, India",
      duration: "May 2024 – Jun 2024",
      type: "On-Site",
      achievements: [
        "Developed an intranet plotting application using React, parsing six file formats for 2D and 3D visualizations with customization",
        "Created 3D simulations in Three.js enabling object tracking",
        "Enhanced UX with interactive, customizable visualizations"
      ],
      color: "from-red-400 to-red-600"
    },
    {
      id: "enactus-tech",
      role: "Technical Team Member",
      company: "Enactus KIIT (Student Society)",
      location: "Bhubaneswar, India",
      duration: "Mar 2023 – Jan 2025",
      type: "R&D",
      achievements: [
        "Ideated and executed technical projects for social entrepreneurship",
        "Built web apps for Enactus initiatives and participated in National Expositions 2023 & 2024",
        "Won 2024 Early Stage Category at Enactus Nationals"
      ],
      color: "from-green-400 to-green-600"
    }
  ],

  education: [
    {
      id: "kiit-btech",
      degree: "B.Tech - Computer Science Engineering",
      institution: "Kalinga Institute of Industrial Technology",
      location: "Bhubaneswar, India",
      duration: "Sept 2022 – May 2026",
      grade: "CGPA: 9.37", 
      color: "from-blue-400 to-purple-600"
    },
    {
      id: "high-school",
      degree: "High School, PCM",
      institution: "Vivekanand Mission Vidyapeeth",
      location: "Madhubani, Bihar, India",
      duration: "Aug 2019 – Jul 2021",
      grade: "",
      color: "from-cyan-400 to-blue-600"
    },
    {
      id: "secondary",
      degree: "Secondary School",
      institution: "Delhi Public School",
      location: "Biratnagar, Nepal",
      duration: "Jul 2019",
      grade: "",
      color: "from-indigo-400 to-purple-600"
    }
  ]
};