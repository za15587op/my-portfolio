"use client";
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with React and Node.js featuring real-time inventory management.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop&crop=center',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop&crop=center',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with AI-driven insights and predictive analytics.',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=center',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Social Media Platform',
      description: 'A social networking platform with real-time messaging and content sharing capabilities.',
      technologies: ['React', 'Node.js', 'Redis', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop&crop=center',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'A real-time cryptocurrency tracking application with portfolio management features.',
      technologies: ['React', 'Chart.js', 'WebSocket', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop&crop=center',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Learning Management System',
      description: 'An comprehensive LMS with video streaming, progress tracking, and interactive assessments.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop&crop=center',
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 min-h-screen w-full bg-[#0f172a] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-light-text mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-dark-bg rounded-xl overflow-hidden hover-lift group transition-all duration-300 ${
                  isVisible ? 'animate-fadeInUp' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-light-text mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-light-text/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-medium-bg text-accent-cyan text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      className="flex-1 py-2 px-4 bg-accent-cyan text-white text-center rounded-lg hover:bg-accent-cyan/90 transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      className="flex-1 py-2 px-4 border border-accent-cyan text-accent-cyan text-center rounded-lg hover:bg-accent-cyan hover:text-white transition-all duration-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
