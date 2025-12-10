import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import SpannerCaseStudy from './components/SpannerCaseStudy';
import AICaseStudy from './components/AICaseStudy';
import RecommendationsCaseStudy from './components/RecommendationsCaseStudy';
import Tier1WorkloadsCaseStudy from './components/Tier1WorkloadsCaseStudy';
import Labs from './components/Labs';
import PasswordProtect from './components/PasswordProtect';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('about');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);
  
  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  const pageComponents: { [key: string]: React.ReactNode } = {
    'spanner': <SpannerCaseStudy />,
    'ai': <AICaseStudy />,
    'recommendations': <RecommendationsCaseStudy />,
    'tier1': <Tier1WorkloadsCaseStudy />,
    'labs': <Labs />,
  };

  const isProtectedPage = activePage !== 'about' && activePage !== 'labs' && pageComponents[activePage];

  const renderContent = () => {
    if (isProtectedPage && !isAuthenticated) {
      return <PasswordProtect correctPassword="Unlock123" onSuccess={handleAuthentication} />;
    }
    if (activePage === 'about') {
        return <About onNavigate={setActivePage} />;
    }
    return pageComponents[activePage];
  }

  return (
    <div className="min-h-screen selection:bg-blue-600/10 selection:text-blue-600 relative bg-white">
      
      <Navbar activePage={activePage} onNavigate={setActivePage} />

      <main>
        {renderContent()}
      </main>

      <footer className="py-8 border-t border-slate-200 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            Research Portfolio
          </span>
          <img 
            src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 20'%3E%3Ctext x='0' y='15' font-family='monospace' font-size='10' letter-spacing='0.1em' fill='%2394a3b8' text-transform='uppercase'%3EARPIT BHARGAVA%3C/text%3E%3C/svg%3E" 
            alt="Signature" 
            className="h-3 opacity-80" 
          />
        </div>
      </footer>
    </div>
  );
};

export default App;