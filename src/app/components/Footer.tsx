"use client"
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medium-bg py-8 border-t border-accent-cyan/20 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-light-text/80 mb-4 md:mb-0">
            © {currentYear} Pongsak Piriyayanyong. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-light-text/80 hover:text-accent-cyan transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-light-text/80 hover:text-accent-cyan transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-light-text/80 hover:text-accent-cyan transition-colors duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;