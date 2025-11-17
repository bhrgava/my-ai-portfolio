
import React, { useState } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About', color: 'text-blue-600', bg: 'bg-blue-600' },
    { id: 'spanner', label: 'Spanner Hotspots', color: 'text-red-600', bg: 'bg-red-600' },
    { id: 'ai', label: 'AI Troubleshooting', color: 'text-cyan-600', bg: 'bg-cyan-600' },
    { id: 'recommendations', label: 'Dead Clicks', color: 'text-green-500', bg: 'bg-green-500' },
    { id: 'tier1', label: 'Advanced Observability', color: 'text-amber-500', bg: 'bg-amber-500' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      {/* Spectrum Bar */}
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <div className="flex-1 bg-blue-600" />
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-cyan-600" />
        <div className="flex-1 bg-green-500" />
        <div className="flex-1 bg-amber-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => handleNav('about')}
        >
          <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
            Arpit Bhargava
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-xs font-bold uppercase tracking-widest transition-all relative py-2 group
                ${activePage === item.id ? item.color : 'text-slate-400 hover:text-slate-900'}
              `}
            >
              {item.label}
              {/* Color Line */}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] ${item.bg} transform transition-transform duration-300 origin-left ${activePage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-left text-lg font-bold uppercase p-4 border-b border-slate-50 last:border-0 transition-colors ${
                activePage === item.id
                  ? `${item.color} pl-6 border-l-4 ${item.bg.replace('bg-', 'border-')}`
                  : 'hover:bg-slate-50 text-slate-600'
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
