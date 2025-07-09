import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn', 
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      href: 'mailto:efrenosio15@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500'
    }
  ];

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6 animate-fade-in">
            <div className="group">
              <h3 className="text-2xl font-bold transition-all duration-300 group-hover:scale-105">
                Efren P. Osio Jr.
              </h3>
              <div className="w-16 h-1 bg-white/60 mt-2 transition-all duration-500 group-hover:w-24 group-hover:bg-white" />
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed max-w-md transition-colors duration-300 hover:text-primary-foreground">
              Full Stack & WordPress Developer passionate about creating 
              exceptional digital experiences with modern technologies.
            </p>
            
            {/* Social Links with animations */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group relative p-2 rounded-full bg-white/10 text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-scale-in">
            <h4 className="text-lg font-semibold relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white/60 transition-all duration-300 hover:w-full" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={link.label} className="transform transition-all duration-300 hover:translate-x-2">
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 relative group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Theme Toggle */}
          <div className="space-y-4 animate-fade-in">
            <h4 className="text-lg font-semibold relative">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white/60 transition-all duration-300 hover:w-full" />
            </h4>
            
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2 transition-all duration-300 hover:translate-x-1 hover:text-primary-foreground">
                <span>📧</span>
                <a href="mailto:efrenosio15@gmail.com" className="hover:underline">
                  efrenosio15@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 transition-all duration-300 hover:translate-x-1 hover:text-primary-foreground">
                <span>📱</span>
                <a href="tel:09513188173" className="hover:underline">
                  09513188173
                </a>
              </div>
              <div className="flex items-center space-x-2 transition-all duration-300 hover:translate-x-1 hover:text-primary-foreground">
                <span>📍</span>
                <span>Zambales, Philippines</span>
              </div>
            </div>

            {/* Theme Toggle Section */}
            <div className="pt-4 border-t border-white/20">
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary-foreground/80">Theme</span>
                <div className="transform transition-all duration-300 hover:scale-110">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with enhanced animations */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm transition-colors duration-300 hover:text-primary-foreground">
              © {currentYear} Efren P. Osio Jr. All rights reserved.
            </p>
            <p className="text-primary-foreground/80 text-sm flex items-center transition-colors duration-300 hover:text-primary-foreground group">
              Made with 
              <Heart className="h-4 w-4 text-red-400 mx-1 transition-all duration-300 group-hover:scale-125 group-hover:text-red-300" /> 
              using React & Tailwind CSS
            </p>
          </div>

          {/* Scroll to top button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => scrollToSection('#home')}
              className="group flex items-center space-x-2 text-primary-foreground/60 hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-sm">Back to top</span>
              <span className="transform transition-transform duration-300 group-hover:-translate-y-1">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;