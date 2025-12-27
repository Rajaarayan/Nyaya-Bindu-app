
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS, ICON_MAP } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 text-[20rem] font-serif select-none">“</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-stone-400 mb-3">Client Trust</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900">Voices of Success</h3>
          </div>
          <div className="hidden md:flex space-x-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s}>{ICON_MAP.Star}</div>
            ))}
            <span className="ml-2 text-xs font-bold text-stone-400 uppercase tracking-widest">Global Top-Rated</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-stone-50 p-8 rounded-[40px] border border-stone-100 flex flex-col justify-between"
            >
              <div>
                <Quote size={32} className="text-stone-200 mb-6" />
                <p className="text-lg text-stone-700 italic leading-relaxed mb-8">
                  "{t.content}"
                </p>
              </div>
              
              <div className="flex items-center space-x-4 border-t border-stone-200 pt-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover bg-stone-200"
                />
                <div>
                  <h4 className="font-bold text-stone-900 leading-none mb-1">{t.name}</h4>
                  <p className="text-xs text-stone-400 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
