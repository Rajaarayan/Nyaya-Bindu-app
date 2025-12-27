
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ConsultancyForm from './components/ConsultancyForm';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <ConsultancyForm />
        <AIConsultant />
      </main>
      <Footer />
    </div>
  );
};

export default App;
