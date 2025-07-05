"use client"
import { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';


const About = () => {
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-20  duration-500 overflow-hidden">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 relative inline-block">
            About
            <span className="ml-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-extrabold drop-shadow-lg">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.p 
              className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed transition-colors duration-500"
              variants={itemVariants}
            >
              ผมชื่อนิว จบจากคณะวิทยาศาสตร์และนวัตกรรมดิจิทัล สาขาวิทยาการคอมพิวเตอร์ ในปี 3 ผมและเพื่อนได้มีการรับงานพัฒนาเว็บไซต์จากอาจารย์  และในปี 4 ผมได้ไปฝึกงานที่บริษัทซอฟสแคร์ 1999 ในตำแหน่ง Software Developer Trainee ทำให้ผมมีความสนใจในการเขียนโปรแกรม และอยากเป็น Full- Stack Developer
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
              variants={containerVariants}
            >
              <motion.div 
                className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-md px-6 py-4 rounded-xl border border-cyan-400/30 dark:border-purple-400/30 hover:border-purple-400/60 dark:hover:border-cyan-400/60 shadow-lg transition-all duration-300 flex flex-col items-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="text-cyan-500 dark:text-purple-400 flex items-center gap-2 mb-2 transition-colors duration-500">
                  <FaLaptopCode />
                  <span className="font-medium text-2xl">3</span>
                </span>
                <span className="text-gray-700 dark:text-gray-200 text-sm transition-colors duration-500">โปรเจคที่เสร็จแล้ว</span>
              </motion.div>
              <motion.div 
                className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-md px-6 py-4 rounded-xl border border-purple-400/30 dark:border-cyan-400/30 hover:border-cyan-400/60 dark:hover:border-purple-400/60 shadow-lg transition-all duration-300 flex flex-col items-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="text-purple-500 dark:text-cyan-400 flex items-center gap-2 mb-2 transition-colors duration-500">
                  <FaLaptopCode />
                  <span className="font-medium text-2xl">1</span>
                </span>
                <span className="text-gray-700 dark:text-gray-200 text-sm transition-colors duration-500">ปีประสบการณ์ฝึกงาน</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="w-72 h-72 md:w-96 md:h-96 rounded-2xl flex items-center justify-center backdrop-blur-3xl relative overflow-hidden shadow-2xl border-4 border-cyan-400/30 dark:border-purple-400/30 transition-colors duration-500"
              whileHover={{ scale: 1.03 }}
            >   
              <img src="/my-portfolio.jpg" alt="prt" className="object-cover w-full h-full rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-cyan-400/10 pointer-events-none rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
