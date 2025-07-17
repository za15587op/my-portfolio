"use client";
import { useEffect, useRef, useState } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20  duration-500 overflow-hidden min-h-screen w-full bg-[#0f172a] relative"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Me
              </span>
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed transition-colors duration-500"
              variants={itemVariants}
            >
              My name is New. I graduated from the Faculty of Science and
              Digital Innovation, majoring in Computer Science. In my third
              year, my friends and I took on a web development project for a
              professor. During my fourth year, I interned at SoftsCare 1999 as
              a Software Developer Trainee. These experiences sparked my passion
              for programming and inspired me to pursue a career as a Full-Stack
              Developer.
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
                <span className="text-gray-700 dark:text-gray-200 text-sm transition-colors duration-500">
                  Completed Projects
                </span>
              </motion.div>
              <motion.div
                className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-md px-6 py-4 rounded-xl border border-purple-400/30 dark:border-cyan-400/30 hover:border-cyan-400/60 dark:hover:border-purple-400/60 shadow-lg transition-all duration-300 flex flex-col items-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="text-purple-500 dark:text-cyan-400 flex items-center gap-2 mb-2 transition-colors duration-500">
                  <FaLaptopCode />
                  <span className="font-medium text-2xl"> &lt; 1</span>
                </span>
                <span className="text-gray-700 dark:text-gray-200 text-sm transition-colors duration-500">
                  Internship Experience
                </span>
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
              <img
                src="/my-portfolio.jpg"
                alt="prt"
                className="object-cover w-full h-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-cyan-400/10 pointer-events-none rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

<div className="min-h-screen w-full bg-[#0f172a] relative">
  {/* Blue Radial Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
    }}
  />
  {/* Your Content/Components */}
</div>;
