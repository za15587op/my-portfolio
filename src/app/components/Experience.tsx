// "use client";
// import { useEffect, useRef, useState } from 'react';
// import { motion, Variants } from 'framer-motion';
// import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

// const Experience = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const experiences = [
//     {
//       title: 'Senior Full Stack Developer',
//       company: 'TechCorp Solutions',
//       location: 'San Francisco, CA',
//       period: '2021 - Present',
//       description: 'Led development of enterprise web applications using React, Node.js, and AWS. Managed a team of 5 developers and improved system performance by 40%.',
//       technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'TypeScript'],
//       image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center'
//     },
//     {
//       title: 'Full Stack Developer',
//       company: 'StartupX',
//       location: 'Remote',
//       period: '2019 - 2021',
//       description: 'Built scalable web applications from scratch. Implemented CI/CD pipelines and microservices architecture. Increased user engagement by 60%.',
//       technologies: ['React', 'Python', 'Docker', 'MongoDB', 'Redis'],
//       image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center'
//     },
//     {
//       title: 'Frontend Developer',
//       company: 'Digital Agency Pro',
//       location: 'New York, NY',
//       period: '2018 - 2019',
//       description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to create pixel-perfect implementations.',
//       technologies: ['JavaScript', 'HTML/CSS', 'Vue.js', 'Sass', 'Webpack'],
//       image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center'
//     },
//     {
//       title: 'Junior Web Developer',
//       company: 'WebDev Inc',
//       location: 'Boston, MA',
//       period: '2016 - 2018',
//       description: 'Started my professional journey building WordPress sites and learning modern web development practices. Contributed to multiple client projects.',
//       technologies: ['WordPress', 'PHP', 'jQuery', 'Bootstrap', 'MySQL'],
//       image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&crop=center'
//     }
//   ];

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   };

//   const itemVariants: Variants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: 'easeOut' }
//     }
//   };

//   return (
//     <section id="experience" ref={sectionRef} className="py-20 bg-medium-bg relative overflow-hidden">
//       {/* Background floating circles */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div className="absolute top-20 left-1/4 w-32 h-32 bg-accent-purple/10 rounded-full blur-xl" animate={{ y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
//         <motion.div className="absolute bottom-20 right-1/4 w-40 h-40 bg-accent-cyan/10 rounded-full blur-xl" animate={{ y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
//       </div>

//       <motion.div
//         className="container mx-auto px-6 relative z-10"
//         variants={containerVariants}
//         initial="hidden"
//         animate={isVisible ? "visible" : "hidden"}
//       >
//         <motion.h2 className="text-4xl md:text-5xl font-bold text-center text-light-text mb-16" variants={itemVariants}>
//           My <span className="text-gradient">Experience</span>
//         </motion.h2>

//         <div className="relative">
//           {/* Timeline vertical line */}
//           <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-accent-cyan/30 z-0"></div>

//           <div className="space-y-24">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={exp.title}
//                 className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
//                 variants={itemVariants}
//               >
//                 {/* Timeline dot with line */}
//                 <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
//                   <div className="relative w-4 h-4 bg-accent-cyan rounded-full border-4 border-medium-bg animate-pulse-glow shadow-lg">
//                     {/* connector line */}
//                     {index !== experiences.length - 1 && (
//                       <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-24 bg-accent-cyan/30"></div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Content card */}
//                 <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
//                   <motion.div
//                     className="bg-dark-bg p-6 rounded-xl hover-lift border border-accent-cyan/20 hover:border-accent-purple/40 transition-all duration-300 shadow-lg"
//                     whileHover={{ scale: 1.03, y: -4 }}
//                   >
//                     <div className="flex flex-col md:flex-row items-start gap-4 mb-4">
//                       <div className={`flex-1 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
//                         <h3 className="text-xl font-bold text-light-text mb-2 flex items-center gap-2">
//                           <FaCheckCircle className="text-accent-cyan" /> {exp.title}
//                         </h3>
//                         <div className="flex flex-col gap-1 mb-3 text-light-text/80 text-sm">
//                           <span className="flex items-center gap-2"><FaBuilding /> {exp.company}</span>
//                           <span className="flex items-center gap-2"><FaMapMarkerAlt /> {exp.location}</span>
//                           <span className="flex items-center gap-2"><FaCalendarAlt /> {exp.period}</span>
//                         </div>
//                       </div>
//                       <div className={`w-20 h-20 rounded-lg overflow-hidden border-2 border-accent-cyan/30 hover:border-accent-purple/60 transition-all duration-300 ${index % 2 === 0 ? 'md:order-1' : ''}`}>
//                         <img
//                           src={exp.image}
//                           alt={exp.company}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </div>
//                     <p className="text-light-text/90 mb-4 leading-relaxed">{exp.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {exp.technologies.map((tech) => (
//                         <span key={tech} className="px-3 py-1 bg-medium-bg text-accent-cyan text-sm rounded-full border border-accent-cyan/20">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </div>
//                 <div className="flex-1 hidden md:block"></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Experience;




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
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2021 - Present',
      description: 'Led development of enterprise web applications using React, Node.js, and AWS. Managed a team of 5 developers and improved system performance by 40%.',
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupX',
      location: 'Remote',
      period: '2019 - 2021',
      description: 'Built scalable web applications from scratch. Implemented CI/CD pipelines and microservices architecture. Increased user engagement by 60%.',
      technologies: ['React', 'Python', 'Docker', 'MongoDB', 'Redis'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2018 - 2019',
      description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to create pixel-perfect implementations.',
      technologies: ['JavaScript', 'HTML/CSS', 'Vue.js', 'Sass', 'Webpack'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Junior Web Developer',
      company: 'WebDev Inc',
      location: 'Boston, MA',
      period: '2016 - 2018',
      description: 'Started my professional journey building WordPress sites and learning modern web development practices. Contributed to multiple client projects.',
      technologies: ['WordPress', 'PHP', 'jQuery', 'Bootstrap', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&crop=center'
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative overflow-hidden min-h-screen">
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