import { useEffect, useState } from 'react';
import { ArrowDown, Download, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/Julimarco7?t=rSM93bwUgyJYHVsdc1M93A&s=09', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/_muenii7?igsh=MW04aWlyeTV2cGh5dQ==', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/juliet-mulwa-2b312b369/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/juliet-03', label: 'GitHub' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
         

          {/* Text Content */}
          <div className="space-y-6 mb-12">
            <p className="text-xl md:text-2xl font-light opacity-90">Hello!</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I'm <span className="text-accent">Juliet Mulwa</span>
            </h1>
            <p className="text-xl md:text-3xl font-light opacity-90">
              A Fullstack Developer
            </p>
            <p className="text-lg md:text-xl opacity-75 max-w-2xl mx-auto">
              Based in Nairobi, Kenya
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="btn-hero"
            >
              Hire Me
            </Button>
            <Button 
              onClick={() => scrollToSection('#projects')}
              className="btn-outline"
            >
              My Works
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-primary"
            >
              <a href="/cv/juliet-cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('#about')}
            className="animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;