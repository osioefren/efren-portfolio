import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:efrenosio15@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                Efren P. Osio Jr.
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 mb-4">
              Full Stack & WordPress Developer
            </h2>
            
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating exceptional digital experiences with modern technologies. 
              Specializing in Laravel, React, WordPress, and everything in between.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="text-lg px-8 py-3"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="professional"
              size="lg"
              className="text-lg px-8 py-3 bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="mt-8 animate-fade-in">
            <p className="text-white/60 text-sm">
              📍 Based in Zambales, Philippines
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="text-white/60 hover:text-white transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;