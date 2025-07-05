"use client"
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Hi, I am{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, rgb(var(--primary)), rgb(var(--secondary)))"
              }}
            >
              Pongsak Piriyayanyong
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Full Stack Developer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-8 py-3 font-medium rounded-lg hover:from-secondary hover:to-primary transition-all duration-300 hover-lift shadow-lg">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-background hover:border-transparent transition-all duration-300">
              Download CV
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            title='Scroll Down'
            onClick={scrollToAbout}
            className="animate-bounce text-primary/60 hover:text-secondary transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
