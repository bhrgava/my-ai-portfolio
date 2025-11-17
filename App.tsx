
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import SpannerCaseStudy from './components/SpannerCaseStudy';
import AICaseStudy from './components/AICaseStudy';
import RecommendationsCaseStudy from './components/RecommendationsCaseStudy';
import Tier1WorkloadsCaseStudy from './components/Tier1WorkloadsCaseStudy';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('about');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen text-slate-800 selection:bg-blue-100 selection:text-blue-900 relative">
      
      {/* "Modern Humanist" Background System */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-100 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000" />
      </div>

      <Navbar activePage={activePage} onNavigate={setActivePage} />

      <main>
        {activePage === 'about' && <About onNavigate={setActivePage} />}
        {activePage === 'spanner' && <SpannerCaseStudy />}
        {activePage === 'ai' && <AICaseStudy />}
        {activePage === 'recommendations' && <RecommendationsCaseStudy />}
        {activePage === 'tier1' && <Tier1WorkloadsCaseStudy />}
      </main>

      <footer className="py-12 border-t border-slate-200 bg-slate-50/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            Research Portfolio
          </span>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            Arpit Bhargava
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;
