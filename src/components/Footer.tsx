import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            Juliet Mulwa<span className="text-accent">.</span>
          </div>
          
          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-sm opacity-90">
            <span>© { 2025 } Made with</span>
            <Heart className="w-4 h-4 text-accent fill-current" />
            <span> by Juliet</span>
          </div>
          
          {/* Additional Note */}
          <p className="text-xs opacity-75 max-w-md mx-auto">
            Crafting digital experiences with passion and precision. 
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;