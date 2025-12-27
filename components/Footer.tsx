
import React from 'react';
import { Gavel, Linkedin, Twitter, Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-stone-50 pt-20 pb-10 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Gavel className="text-stone-900 w-8 h-8" />
              <span className="text-2xl font-serif font-bold tracking-tight text-stone-900">NYAYABINDU</span>
            </div>
            <p className="text-stone-500 mb-8 leading-relaxed">
              Defining the next generation of legal advocacy and strategic consultancy in India.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-stone-900 transition-colors">Corporate Advisory</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-stone-900 transition-colors">IPR Protection</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-stone-900 transition-colors">Real Estate Diligence</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-stone-900 transition-colors">Criminal Defense</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-stone-900 transition-colors">About Us</a></li>
              <li><a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="hover:text-stone-900 transition-colors">Client Voices</a></li>
              <li><a href="#consultancy" onClick={(e) => handleNavClick(e, '#consultancy')} className="hover:text-stone-900 transition-colors">Book Consultation</a></li>
              <li><a href="#ai-assistant" onClick={(e) => handleNavClick(e, '#ai-assistant')} className="hover:text-stone-900 transition-colors">AI Legal Assistant</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-stone-400 mt-0.5" />
                <span>Level 12, One Horizon Center, DLF Phase 5, Gurugram, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-stone-400" />
                <span>+91 124 555 0192</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-stone-400" />
                <span>connect@nyayabindu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-400 text-xs font-medium tracking-widest uppercase">
          <p>&copy; 2024 Nyayabindu Consultancy. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#consultancy" onClick={(e) => handleNavClick(e, '#consultancy')} className="hover:text-stone-900 transition-colors">Privacy Policy</a>
            <a href="#consultancy" onClick={(e) => handleNavClick(e, '#consultancy')} className="hover:text-stone-900 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
