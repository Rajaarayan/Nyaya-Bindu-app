
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, ICON_MAP } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-stone-400 mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900">Comprehensive Legal Support</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-stone-100 hover:border-stone-200 hover:shadow-2xl hover:shadow-stone-200/40 transition-all group relative overflow-hidden flex flex-col min-h-[400px]"
            >
              {/* Animated Background Highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-bl-[100px] -mr-10 -mt-10 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:m-0 transition-all duration-500 -z-0"></div>

              <div className="relative z-10 flex-1">
                <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-800 mb-8 group-hover:bg-stone-900 group-hover:text-white transition-all duration-300">
                  {ICON_MAP[service.icon]}
                </div>
                
                <h4 className="text-2xl font-serif font-semibold mb-4 text-stone-900">{service.title}</h4>
                
                <div className="relative overflow-hidden">
                  <p className="text-stone-500 leading-relaxed mb-6 group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-300">
                    {service.description}
                  </p>
                  
                  {/* Detailed List shown on Hover */}
                  <div className="absolute top-0 left-0 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <ul className="space-y-2">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center space-x-2 text-stone-700 text-sm font-medium">
                          <Check size={14} className="text-stone-900" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8">
                <a 
                  href="#consultancy" 
                  onClick={(e) => handleNavClick(e, '#consultancy')}
                  className="text-stone-900 font-bold text-sm uppercase tracking-widest flex items-center group-hover:gap-2 transition-all"
                >
                  Learn More
                  <div className="h-[2px] w-0 group-hover:w-6 bg-stone-900 transition-all duration-300 ml-0 group-hover:ml-2"></div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
