
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200&h=1800" 
          alt="Abstract Law" 
          className="w-full h-full object-cover rounded-bl-[100px]"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-stone-100 px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-stone-800 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">The Point of Origin for Justice</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-8 text-stone-900">
            Precision in <span className="italic">Advocacy</span>,<br />
            Clarity in <span className="underline decoration-stone-200 underline-offset-8">Counsel</span>.
          </h1>
          <p className="text-lg md:text-xl text-stone-500 mb-10 max-w-xl leading-relaxed">
            Nyayabindu represents the pinnacle of legal consultancy in India. We distill complex legal frameworks into actionable insights for corporate and individual clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#consultancy" 
              onClick={(e) => handleNavClick(e, '#consultancy')}
              className="w-full sm:w-auto bg-stone-900 text-white px-10 py-4 rounded-full font-medium text-lg flex items-center justify-center space-x-2 hover:bg-stone-800 transition-all transform hover:-translate-y-1"
            >
              <span>Schedule Consultation</span>
              <ChevronRight size={20} />
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, '#services')}
              className="w-full sm:w-auto text-stone-600 hover:text-stone-900 font-medium text-lg flex items-center justify-center group"
            >
              <span>Explore Services</span>
              <div className="w-0 group-hover:w-4 transition-all duration-300 h-[1px] bg-stone-900 ml-2"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Stats/Badge */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-8 flex items-center space-x-8 bg-white/50 backdrop-blur px-8 py-6 rounded-2xl border border-stone-100 hidden md:flex">
        <div className="text-center">
          <p className="text-3xl font-serif font-bold text-stone-900">15+</p>
          <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Years Experience</p>
        </div>
        <div className="w-[1px] h-10 bg-stone-200"></div>
        <div className="text-center">
          <p className="text-3xl font-serif font-bold text-stone-900">2.5k</p>
          <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Cases Won</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
