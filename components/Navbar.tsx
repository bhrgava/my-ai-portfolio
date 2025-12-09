import React, { useState } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'spanner', label: 'Spanner Hotspots' },
    { id: 'ai', label: 'AI Troubleshooting' },
    { id: 'recommendations', label: 'Dead Clicks' },
    { id: 'tier1', label: 'Adv. Observability' },
    { id: 'time', label: 'Time Sensitivity'}
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
      {/* Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-pink-500" />

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => handleNav('about')}
        >
          {/* SVG Logo for light theme */}
          <img 
            src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 24'%3E%3Ctext x='0' y='20' font-family='sans-serif' font-weight='800' font-size='18' letter-spacing='-0.02em' fill='%230f172a' text-transform='uppercase'%3EARPIT BHARGAVA%3C/text%3E%3C/svg%3E" 
            alt="Logo" 
            className="h-5" 
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-xs font-bold uppercase tracking-widest transition-colors relative py-2 group
                ${activePage === item.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}
              `}
            >
              {item.label}
              {/* Underline */}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 origin-left ${activePage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-left text-lg font-bold uppercase p-4 border-b border-slate-100 last:border-0 transition-colors ${
                activePage === item.id
                  ? `text-blue-600 pl-6 border-l-4 border-blue-600`
                  : 'hover:bg-slate-50 text-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;