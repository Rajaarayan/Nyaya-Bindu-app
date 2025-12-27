
import React, { useState, useEffect } from 'react';
import { Menu, X, Gavel } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group"
          >
            <Gavel className="text-stone-800 w-8 h-8 transition-transform group-hover:rotate-[-10deg]" />
            <span className="text-2xl font-serif font-bold tracking-tight text-stone-900">NYAYABINDU</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#consultancy"
              onClick={(e) => handleNavClick(e, '#consultancy')}
              className="bg-stone-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} bg-white border-b shadow-xl`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-2 text-base font-medium text-stone-600 hover:bg-stone-50 rounded-md"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#consultancy"
            onClick={(e) => handleNavClick(e, '#consultancy')}
            className="block w-full text-center bg-stone-900 text-white px-3 py-3 rounded-md font-medium"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
