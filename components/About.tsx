
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden">
              <img 
                src="https://picsum.photos/seed/legal-about/1000/1250" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Experience Card */}
            <div className="absolute -bottom-10 -right-10 bg-stone-900 text-white p-10 rounded-[40px] hidden md:block border-8 border-white">
              <p className="text-5xl font-serif font-bold mb-1">20+</p>
              <p className="text-xs uppercase tracking-widest font-bold opacity-60">Legal Experts</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-stone-400 mb-4">Who we are</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-8 leading-tight">
              Nyayabindu: The <span className="italic">Origin</span> of Strategic Justice.
            </h3>
            <div className="space-y-6 text-lg text-stone-500 leading-relaxed">
              <p>
                Founded on the principles of integrity and intellectual depth, Nyayabindu has emerged as a boutique law consultancy catering to India's most complex legal challenges.
              </p>
              <p>
                The name 'Nyayabindu' (Point of Justice) reflects our philosophy: every case has a focal point of truth that, once identified, dictates the path to victory. We don't just litigate; we architect outcomes.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-stone-900 font-bold mb-2">Our Vision</h4>
                  <p className="text-sm">To redefine the consultancy experience through technology and deep legal expertise.</p>
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold mb-2">Our Values</h4>
                  <p className="text-sm">Absolute transparency, rigorous research, and unwavering dedication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
