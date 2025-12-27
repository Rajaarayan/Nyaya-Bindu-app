
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { FORMSPREE_URL } from '../constants';

const ConsultancyForm: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SUBMITTING');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <section id="consultancy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-stone-400 mb-3">Book Your Session</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-8 leading-tight">
              Let's discuss your <span className="italic">Legal Future</span>.
            </h3>
            <p className="text-lg text-stone-500 mb-10 leading-relaxed">
              Every drop of counsel matters. Fill out the details below, and our specialized partners will get in touch with you within 24 hours.
            </p>
            
            <div className="space-y-6">
              {[
                "Complimentary 15-minute Initial Scan",
                "Direct access to Senior Partners",
                "Strict Client Confidentiality (Attorney-Client Privilege)"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-stone-700 font-medium">
                  <CheckCircle className="text-stone-900 w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-50 p-8 md:p-12 rounded-[40px] border border-stone-100 shadow-sm relative overflow-hidden">
            {status === 'SUCCESS' ? (
              <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h4 className="text-2xl font-serif font-bold mb-4">Request Received</h4>
                <p className="text-stone-500">One of our associates will call you shortly. Stay tuned.</p>
                <button 
                  onClick={() => setStatus('IDLE')}
                  className="mt-8 text-stone-900 font-bold underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full bg-white border border-stone-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all"
                      placeholder="e.g. Advait Sharma"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full bg-white border border-stone-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all"
                      placeholder="advait@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Legal Area</label>
                  <select 
                    name="legal_area" 
                    className="w-full bg-white border border-stone-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all appearance-none"
                  >
                    <option>Corporate Litigation</option>
                    <option>Real Estate Dispute</option>
                    <option>Family & Matrimonial</option>
                    <option>Criminal Defense</option>
                    <option>IPR Registration</option>
                    <option>Other Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Case Description</label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    required 
                    className="w-full bg-white border border-stone-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Briefly tell us about your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'SUBMITTING'}
                  className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-stone-800 transition-all disabled:opacity-50"
                >
                  {status === 'SUBMITTING' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
                {status === 'ERROR' && <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyForm;
