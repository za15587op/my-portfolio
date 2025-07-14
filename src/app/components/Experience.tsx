"use client";
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const experiences = [
    {
      title: 'Software Developer Trainee',
      company: ' SOFT SQUARE 1999 CO., LTD.',
      location: '51/597 Soft Square Building, Mueng Ake Village Moo 7, Lakhok , Muengpathumthani, Pathumthani 12000',
      period: 'November 2024 - February 2025',
      description: 'Received training in technical skills and knowledge, designed UX/UI for assigned projects, developed and improved system features according to customer requirements, and fixed bugs for customers.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular' ,'C# .NET', 'Python', 'Nextjs', 'SQL', 'PostgreSQL', 'Git'],
      image: '/image1.jpg'
    },
    {
      title: ' Database Administrator',
      company: 'Thaksin University, Patthalung Campus',
      location: '222 Village No. 2, Ban Phrao Subdistrict, Pa Phayom District, Phatthalung Province 93210.',
      period: ' April 2023 - June 2023',
      description: 'Designed and developed database structures for a digital platform analyzing data of people affected by unrest incidents in Pattani Province, and analyzed data for use in in-depth analysis.',
      technologies: ['Angular' ,'C# .NET' ,'PostgreSQL' ,'Docker' ,'DigitalOcean' ,'Git'],
      image: '/RADAP.png'
    },
    {
      title: 'Software Developer Trainee',
      company: 'SOFT SQUARE 1999 CO., LTD.',
      location: '51/597 Soft Square Building, Mueng Ake Village Moo 7, Lakhok , Muengpathumthani, Pathumthani 12000',
      period: 'July 2023 - October 2023',
      description: 'Received training in technical skills, soft skills, and knowledge, enhanced programming fundamentals and software engineering skills, and developed assigned projects.',
      technologies: ['HTML', 'CSS', 'TypeScript', 'Angular' ,'C# .NET', 'PostgreSQL', 'Git'],
      image: '/image2.jpg'
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative overflow-hidden min-h-screen w-full bg-[#0f172a]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-40 bottom-40 w-1 z-0">
        <div 
          className="w-full h-full bg-gray-900 dark:bg-amber-50 relative"
        >
          <div 
            className="absolute inset-0 bg-gray-900 dark:bg-amber-50 opacity-20 rounded-full animate-pulse"
          />
        </div>
      </div>

      <div 
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 relative">
          My{' '}
          <span 
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Experience
          </span>
        </h2>

        <div className="relative">
          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {/* Enhanced timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div 
                    className="relative w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg "
                  >
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full "
                    />
                  </div>
                </div>

                {/* Enhanced content card */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 dark:border-cyan-400/20 hover:border-cyan-400/40 dark:hover:border-purple-400/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 group"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-4 mb-4">
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="text-cyan-400 text-lg">✓</span> {exp.title}
                        </h3>
                        <div className="flex flex-col gap-1 mb-3 text-gray-700 dark:text-slate-300 text-sm">
                          <span className="flex items-center gap-2">
                            <span className="text-purple-400">🏢</span> {exp.company}
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="text-cyan-400">📍</span> {exp.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="text-pink-400">📅</span> {exp.period}
                          </span>
                        </div>
                      </div>
                      <div className={`w-20 h-20 rounded-lg overflow-hidden border-2 border-purple-500/30 dark:border-cyan-400/30 group-hover:border-cyan-400/60 dark:group-hover:border-purple-400/60 transition-all duration-500 ${index % 2 === 0 ? 'md:order-1' : ''}`}>
                        <img
                          src={exp.image}
                          alt={exp.company}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <p className="text-gray-800 dark:text-slate-200 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-cyan-700 dark:text-cyan-300 text-sm rounded-full border border-cyan-400/20 dark:border-purple-400/20 hover:border-purple-400/40 dark:hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;