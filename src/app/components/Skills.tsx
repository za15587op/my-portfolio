// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion, Variants } from "framer-motion";
// import { FaReact, FaPython, FaProjectDiagram } from "react-icons/fa";
// import {
//   SiNextdotjs,
//   SiAngular,
//   SiHtml5,
//   SiCss3,
//   SiTailwindcss,
//   SiBootstrap,
//   SiTypescript,
//   SiDotnet,
//   SiMysql,
//   SiPostgresql,
//   SiFigma,
// } from "react-icons/si";

// const iconMap: Record<string, React.ReactNode> = {
//   React: <FaReact className="text-cyan-400" size={32} />,
//   Nextjs: <SiNextdotjs className="text-white dark:text-gray-200" size={32} />,
//   Angular: <SiAngular className="text-red-500" size={32} />,
//   HTML: <SiHtml5 className="text-orange-500" size={32} />,
//   CSS: <SiCss3 className="text-blue-500" size={32} />,
//   Tailwind: <SiTailwindcss className="text-cyan-400" size={32} />,
//   Bootstrap: <SiBootstrap className="text-purple-500" size={32} />,
//   TypeScript: <SiTypescript className="text-blue-400" size={32} />,
//   "C# .NET": <SiDotnet className="text-violet-400" size={32} />,
//   Python: <FaPython className="text-yellow-400" size={32} />,
//   MySQL: <SiMysql className="text-yellow-300" size={32} />,
//   PostgreSQL: <SiPostgresql className="text-blue-300" size={32} />,
//   Figma: <SiFigma className="text-pink-400" size={32} />,
//   "Draw.io": <FaProjectDiagram className="text-orange-400" size={32} />,
// };

// const Skills = () => {
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

//   const skills = [
//     { name: "Nextjs", category: "Frontend" },
//     { name: "Angular", category: "Frontend" },
//     { name: "HTML", category: "Frontend" },
//     { name: "CSS", category: "Frontend" },
//     { name: "Tailwind", category: "Frontend" },
//     { name: "Bootstrap", category: "Frontend" },
//     { name: "TypeScript", category: "Frontend" },
//     { name: "C# .NET", category: "Backend" },
//     { name: "Python", category: "Backend" },
//     { name: "MySQL", category: "Database" },
//     { name: "PostgreSQL", category: "Database" },
//     { name: "Figma", category: "Design" },
//     { name: "Draw.io", category: "Design" },
//   ];

//   const categories = ["Frontend", "Backend", "Database", "Design"];

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };
//   const itemVariants: Variants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       id="skills"
//       ref={sectionRef}
//       className="py-20 bg-background relative overflow-hidden"
//     >
//       {/* Background animation elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"
//           animate={{ y: [0, 20, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-10 right-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-xl"
//           animate={{ y: [0, -20, 0] }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 2,
//           }}
//         />
//       </div>
//       <motion.div
//         className="container mx-auto px-6 relative z-10"
//         variants={containerVariants}
//         initial="hidden"
//         animate={isVisible ? "visible" : "hidden"}
//       >
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16 tracking-tight"
//           variants={itemVariants}
//         >
//           My
//           <span className="ml-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-extrabold drop-shadow-lg">
//             Skills
//           </span>
//         </motion.h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {categories.map((category, categoryIndex) => (
//             <motion.div
//               key={category}
//               className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-cyan-200 dark:border-cyan-800 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
//               variants={itemVariants}
//               style={{ animationDelay: `${categoryIndex * 0.2}s` }}
//             >
//               <h3 className="text-lg font-semibold text-cyan-500 mb-8 text-center tracking-wide uppercase">
//                 {category}
//               </h3>
//               <div className="flex flex-wrap justify-center gap-6">
//                 {skills
//                   .filter((skill) => skill.category === category)
//                   .map((skill, skillIndex) => (
//                     <motion.div
//                       key={skill.name}
//                       className="flex flex-col items-center mb-2"
//                       variants={itemVariants}
//                       style={{
//                         animationDelay: `${
//                           categoryIndex * 0.2 + skillIndex * 0.1
//                         }s`,
//                       }}
//                     >
//                       <div className="relative group">
//                         <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/80 dark:bg-gray-800/80 border-2 border-cyan-200 dark:border-cyan-700 group-hover:border-purple-400 shadow-lg transition-all duration-300">
//                           {iconMap[skill.name] || (
//                             <FaReact className="text-gray-400" size={32} />
//                           )}
//                         </div>
//                         <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-2 px-2 py-1 rounded bg-gray-900/90 text-xs text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 whitespace-nowrap">
//                           {skill.name}
//                         </span>
//                       </div>
//                     </motion.div>
//                   ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;



"use client";
import React, {  useRef, useState } from "react";
import { motion, useInView } from "framer-motion";


import {
  SiNextdotjs,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";
import { FaProjectDiagram, FaPython, FaReact } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  React: <FaReact className="text-cyan-400" size={32} />,
  Nextjs: <SiNextdotjs className="text-white dark:text-gray-200" size={32} />,
  Angular: <SiAngular className="text-red-500" size={32} />,
  HTML: <SiHtml5 className="text-orange-500" size={32} />,
  CSS: <SiCss3 className="text-blue-500" size={32} />,
  Tailwind: <SiTailwindcss className="text-cyan-400" size={32} />,
  Bootstrap: <SiBootstrap className="text-purple-500" size={32} />,
  TypeScript: <SiTypescript className="text-blue-400" size={32} />,
  "C# .NET": <SiDotnet className="text-violet-400" size={32} />,
  Python: <FaPython className="text-yellow-400" size={32} />,
  MySQL: <SiMysql className="text-yellow-300" size={32} />,
  PostgreSQL: <SiPostgresql className="text-blue-300" size={32} />,
  Figma: <SiFigma className="text-pink-400" size={32} />,
  "Draw.io": <FaProjectDiagram className="text-orange-400" size={32} />,
};

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  console.log(hoveredSkill);

  const skills = [
    { name: "React", category: "Frontend" },
    { name: "Nextjs", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Tailwind", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "C# .NET", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Figma", category: "Design" },
    { name: "Draw.io", category: "Design" },
  ];

  const categories = [
    { name: "Frontend", icon: "🎨", gradient: "from-cyan-400 to-blue-500" },
    { name: "Backend", icon: "⚡", gradient: "from-purple-500 to-indigo-600" },
    { name: "Database", icon: "🗄️", gradient: "from-green-400 to-emerald-500" },
    { name: "Design", icon: "✨", gradient: "from-pink-400 to-rose-500" }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
              My
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Skills
            </span>
          </motion.h2>
          {/* <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Passionate about creating amazing digital experiences with cutting-edge technologies
          </motion.p> */}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category.name);
            
            return (
              <motion.div
                key={category.name}
                className="group relative"
                initial={{ opacity: 0, y: 100, rotateX: -15 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0 
                } : { 
                  opacity: 0, 
                  y: 100, 
                  rotateX: -15 
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: categoryIndex * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  z: 50
                }}
                style={{ perspective: 1000 }}
              >
                {/* Card */}
                <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-xl border border-white/20 dark:border-gray-700/20 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 dark:hover:shadow-purple-500/20">
                  
                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Floating Orb */}
                  <motion.div
                    className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${category.gradient} rounded-full opacity-20 blur-xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: categoryIndex * 0.5
                    }}
                  />

                  {/* Category Header */}
                  <div className="relative z-10 mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {category.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {category.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {categorySkills.length} skills
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="relative z-10 space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="group/skill relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 
                        }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          
                          {/* Skill Icon */}
                          <motion.div
                            className="relative flex-shrink-0"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-600">
                              {iconMap[skill.name]}
                            </div>
                          </motion.div>

                          {/* Skill Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                              {skill.name}
                            </h4>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="inline-flex items-center gap-8 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20">
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                {skills.length}+
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                4
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;