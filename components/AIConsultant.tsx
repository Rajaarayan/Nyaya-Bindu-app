
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Namaste! I am Nyaya-AI. How can I assist you with your legal queries today? (e.g., 'What are RERA norms?' or 'Basics of filing a PIL')" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await geminiService.getLegalInsight(input);
    const aiMessage: ChatMessage = { role: 'model', text: response };
    
    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-24 bg-stone-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-stone-800/30 rounded-full blur-3xl -z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-stone-800 px-4 py-2 rounded-full mb-6 text-stone-300">
            <Sparkles size={16} className="text-yellow-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Powered by Gemini</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">Nyaya-AI Assistant</h2>
          <p className="text-stone-400 max-w-lg mx-auto">Get instant preliminary insights on Indian Law. Ask about procedures, rights, or firm services.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 flex flex-col h-[500px] shadow-2xl overflow-hidden">
          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-stone-100 text-stone-900' : 'bg-stone-800 text-stone-200'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`px-5 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-stone-100 text-stone-900' : 'bg-stone-800/80 text-stone-200'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2 bg-stone-800/50 px-5 py-3 rounded-2xl">
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about Indian Law..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 pr-16 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 p-3 bg-stone-100 text-stone-900 rounded-xl hover:bg-white transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-stone-500 mt-3 text-center uppercase tracking-widest font-bold">
              Disclaimer: Preliminary AI insights. Consult a lawyer for binding advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
