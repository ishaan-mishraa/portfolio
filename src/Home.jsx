import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Rocket, Download, ExternalLink, Terminal, Server, Globe, Code, Database, Package, GitBranch, Zap, Briefcase, GraduationCap, Building, Calendar } from 'lucide-react';
import Skills from './Skills';
import ExpandButton from './ExpandButton';
import SpaceNavigator from './SpaceNavigator';
import TimelineSection from './TimelineSection';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [visibleExperience, setVisibleExperience] = useState([]);
  const [visibleEducation, setVisibleEducation] = useState([]);
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const projects = [
    {
      id: 1,
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
      icon: <Database className="w-8 h-8" />,
      color: "from-amber-400 to-orange-600",
      category: "Database App"
    },
    {
      id: 2,
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
      icon: <Terminal className="w-8 h-8" />,
      color: "from-green-400 to-emerald-600",
      category: "CLI Tool"
    },
    {
      id: 3,
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
      icon: <Server className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-600",
      category: "Backend API"
    },
    {
      id: 4,
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
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-400 to-pink-600",
      category: "Full-Stack"
    }
  ];

  const experiences = [
    {
      id: 1,
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
      icon: <Building className="w-8 h-8" />,
      color: "from-red-400 to-red-600"
    },
    {
      id: 2,
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
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-green-400 to-green-600"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "B.Tech - Computer Science Engineering",
      institution: "Kalinga Institute of Industrial Technology",
      location: "Bhubaneswar, India",
      duration: "Aug 2022 – Aug 2026",
      // grade: "CGPA: 9.35",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-blue-400 to-purple-600"
    },
    {
      id: 2,
      degree: "High School, PCM",
      institution: "Vivekanand Mission Vidyapeeth",
      location: "Madhubani, Bihar, India",
      duration: "Aug 2019 – Jul 2021",
      grade: "",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-600"
    },
    {
      id: 3,
      degree: "Secondary School",
      institution: "Delhi Public School",
      location: "Biratnagar, Nepal",
      duration: "Jul 2019",
      grade: "",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-indigo-400 to-purple-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Stagger project card animations
    const projectTimer = setInterval(() => {
      setVisibleProjects(prev => {
        if (prev.length < projects.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 300);

    // Stagger experience card animations
    const experienceTimer = setTimeout(() => {
      const expTimer = setInterval(() => {
        setVisibleExperience(prev => {
          if (prev.length < experiences.length) {
            return [...prev, prev.length];
          }
          return prev;
        });
      }, 200);
      setTimeout(() => clearInterval(expTimer), experiences.length * 200);
    }, 1000);

    // Stagger education card animations
    const educationTimer = setTimeout(() => {
      const eduTimer = setInterval(() => {
        setVisibleEducation(prev => {
          if (prev.length < education.length) {
            return [...prev, prev.length];
          }
          return prev;
        });
      }, 200);
      setTimeout(() => clearInterval(eduTimer), education.length * 200);
    }, 1500);

    return () => {
      clearInterval(projectTimer);
      clearTimeout(experienceTimer);
      clearTimeout(educationTimer);
    };
  }, []);

  const getTechIcon = (tech) => {
    const icons = {
      'Node.js': <Zap className="w-4 h-4" />,
      'React': <Code className="w-4 h-4" />,
      'TypeScript': <Code className="w-4 h-4" />,
      'PostgreSQL': <Database className="w-4 h-4" />,
      'Docker': <Package className="w-4 h-4" />,
      'NestJS': <Server className="w-4 h-4" />,
      'Puppeteer': <Terminal className="w-4 h-4" />,
      'GitHub Actions': <GitBranch className="w-4 h-4" />,
      'Vercel': <Globe className="w-4 h-4" />,
      'Render': <Server className="w-4 h-4" />
    };
    return icons[tech] || <Code className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Space Navigator - Mini Game */}
      <SpaceNavigator />

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`floating mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <Rocket className="w-32 h-32 text-cyan-400" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>

          <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'} mb-6`}>
            <TypeAnimation
              sequence={[
                'Hello, Universe!',
                1000,
                'I\'m Ishaan!',
                1000,
              ]}
              wrapper="h1"
              cursor={true}
              repeat={0}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold glow-text mb-4"
              style={{ fontFamily: 'Zen Dots, cursive' }}
            />
          </div>

          <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'} mb-8`}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4" style={{ fontFamily: 'Michroma, monospace' }}>
              Computer Science Student
            </h2>
            <div className="flex items-center justify-center space-x-2 text-cyan-400 text-lg">
              <Rocket className="w-5 h-5" />
              <span style={{ fontFamily: 'Orbitron, monospace' }}>KIIT University, Bhubaneshwar, India</span>
            </div>
          </div>

          <div className={`${isVisible ? 'fade-in' : 'opacity-0'} max-w-3xl mx-auto mb-12`}>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed" style={{ fontFamily: 'Orbitron, monospace' }}>
              Exploring the vast cosmos of web development and competitive programming. 
              Currently navigating through the stellar world of <span className="text-cyan-400">Data Structures & Algorithms</span> 
              while crafting digital experiences that transcend ordinary boundaries.
            </p>
          </div>

          <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'} flex flex-col sm:flex-row gap-4 justify-center items-center mb-12`}>
            <a
              href="https://drive.google.com/uc?export=download&id=1V1ghArc0dQvUj0DF1DAYypKFIMZQCM2_"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-border px-8 py-4 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center space-x-2 hover-glow no-underline"
            >
              <Download className="w-5 h-5" />
              <span style={{ fontFamily: 'Orbitron, monospace' }}>Download CV</span>
            </a>
            <a
              href="#works"
              className="glass-morph px-8 py-4 rounded-full text-white hover:text-cyan-400 transition-all duration-300 flex items-center space-x-2 hover-glow no-underline"
            >
              <ExternalLink className="w-5 h-5" />
              <span style={{ fontFamily: 'Orbitron, monospace' }}>View Projects</span>
            </a>
          </div>

          <div className="flex justify-center">
            <ExpandButton />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
<TimelineSection 
  id="experience"
  title="Mission Logs" 
  subtitle="Professional expeditions across the technology sector"
  items={experiences}
  type="experience"
/>

{/* Education Section */}
<TimelineSection 
  id="education"
  title="Academy Records" 
  subtitle="Educational journey through the cosmos of knowledge"
  items={education}
  type="education"
/>

      {/* Works Section */}
      <section id="works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold glow-text mb-6" style={{ fontFamily: 'Zen Dots, cursive' }}>
              Project Archive {date}-{month}-{year}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Orbitron, monospace' }}>
              Strategic projects deployed across the digital frontier
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`glass-morph rounded-2xl p-6 hover-glow transition-all duration-500 ${
                  visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                  <span className="text-xs text-cyan-400 px-3 py-1 bg-cyan-400/10 rounded-full border border-cyan-400/20" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Zen Dots, cursive' }}>
                  {project.title}
                </h3>
                <h4 className="text-sm text-cyan-400 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {project.subtitle}
                </h4>

                {/* Project Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h5 className="text-sm font-bold text-cyan-400 mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
                    Key Features:
                  </h5>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start" style={{ fontFamily: 'Orbitron, monospace' }}>
                        <span className="text-cyan-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-sm font-bold text-cyan-400 mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
                    Tech Stack:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-1 text-xs bg-gray-800/50 text-gray-300 px-2 py-1 rounded-full border border-gray-700"
                        style={{ fontFamily: 'Orbitron, monospace' }}
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
