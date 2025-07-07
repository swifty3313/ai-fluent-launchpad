
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h2 className="text-xl font-bold">
            <span className="text-brand-orange">Full Send</span> 
            <span className="text-brand-navy">AI</span>
          </h2>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/#about" className="text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors">
            About
          </a>
          <a href="/#courses" className="text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors">
            Courses
          </a>
          <a href="/#services" className="text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors">
            Services
          </a>
          <a href="/#testimonials" className="text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors">
            What's Possible
          </a>
          <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white">
            <a href="/#courses">Get Started</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-brand-navy hover:text-brand-orange"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[62px] left-0 right-0 bg-white border-b shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#courses" 
              className="text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </a>
            <a 
              href="#services" 
              className="text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              What's Possible
            </a>
            <Button 
              asChild 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="/#courses">Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
