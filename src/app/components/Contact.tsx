"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });
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

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   toast("Message Sent! Thank you for your message. I'll get back to you soon!");
  //   setFormData({ name: '', email: '', message: '' });
  // };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 min-h-screen w-full bg-[#0f172a] relative"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
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
                Contact{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Us
                </span>
              </span>
            </motion.h2>
          </motion.div>

          <div>
            {/* Contact Info */}
            <div>
              <div>
                <h3 className="text-2xl font-bold text-light-text mb-6">
                  Let s work together
                </h3>
                <p className="text-light-text/80 text-lg leading-relaxed mb-8">
                  I m always interested in new opportunities and exciting
                  projects. Whether you have a question or just want to say hi,
                  feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-cyan/20 rounded-lg flex items-center justify-center">
                    <span className="text-accent-cyan text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-light-text font-medium">Email</h4>
                    <p className="text-light-text/80">pongsak.pp04@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-cyan/20 rounded-lg flex items-center justify-center">
                    <span className="text-accent-cyan text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="text-light-text font-medium">Phone</h4>
                    <p className="text-light-text/80">+66 984793379</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-cyan/20 rounded-lg flex items-center justify-center">
                    <span className="text-accent-cyan text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-light-text font-medium">Location</h4>
                    <p className="text-light-text/80">Hat Yai, Songkhla</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div className="bg-medium-bg p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-light-text font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-accent-cyan/30 rounded-lg text-light-text placeholder-light-text/50 focus:border-accent-cyan focus:outline-none transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-light-text font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-accent-cyan/30 rounded-lg text-light-text placeholder-light-text/50 focus:border-accent-cyan focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-light-text font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-bg border border-accent-cyan/30 rounded-lg text-light-text placeholder-light-text/50 focus:border-accent-cyan focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-accent-cyan text-white font-medium rounded-lg hover:bg-accent-cyan/90 transition-all duration-300 hover-lift"
                >
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
