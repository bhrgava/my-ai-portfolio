
import React from 'react';
import { MailIcon, LinkedinIcon, LinkIcon } from './Icons';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const ExperienceCard: React.FC<{
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
  accentColor: string;
}> = ({ role, company, period, description, tags, accentColor }) => (
  <div className={`relative pl-8 pb-16 border-l border-slate-200 last:pb-0 last:border-0 group`}>
    {/* Timeline Marker */}
    <div className={`absolute left-0 top-2 -translate-x-1/2 w-3 h-3 bg-white border-2 ${accentColor} group-hover:scale-125 transition-all`} />
    
    <div className="flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{role}</h3>
        <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-1 border border-slate-200 uppercase tracking-wider">{period}</span>
      </div>
      <div className={`font-bold text-xs uppercase tracking-widest mb-4 ${accentColor.replace('border-', 'text-')}`}>{company}</div>
      <p className="text-slate-600 leading-relaxed text-lg max-w-3xl font-light mb-6">{description}</p>
      
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono text-slate-500 uppercase border border-slate-200 px-2 py-1 hover:bg-slate-50 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      
      {/* Header / Title Card */}
      <div className="mb-32 border-b border-slate-900 pb-12 relative overflow-hidden">
        
        {/* Dan Flavin Installation: "The Spectrum" */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <div className="absolute top-0 right-0 h-full w-2 bg-white shadow-[0_0_20px_rgba(59,130,246,1),0_0_80px_rgba(59,130,246,0.8)]"></div>
            <div className="absolute top-0 right-[40px] h-full w-2 bg-white shadow-[0_0_20px_rgba(239,68,68,1),0_0_80px_rgba(239,68,68,0.8)]"></div>
            <div className="absolute top-0 right-[80px] h-full w-2 bg-white shadow-[0_0_20px_rgba(234,179,8,1),0_0_80px_rgba(234,179,8,0.8)]"></div>
        </div>

        <div className="relative z-10">
            <div className="inline-block mb-8 px-3 py-1 border border-slate-900 bg-white text-slate-900 text-xs font-mono uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                Personnel Dossier
            </div>
            <div className="relative w-full block">
                {/* Mitch Miller Style Animation Overlay */}
                <div className="absolute -top-12 left-0 w-full h-32 pointer-events-none overflow-hidden opacity-20 md:opacity-100">
                     {/* Animation logic placeholder */}
                </div>
                
                {/* Replaced Text H1 with SVG Image */}
                <div className="mb-6 bg-white/60 backdrop-blur-sm w-full">
                    <img 
                        src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 180'%3E%3Ctext x='0' y='70' font-family='sans-serif' font-weight='900' font-size='80' letter-spacing='-0.05em' fill='%230f172a'%3EARPIT%3C/text%3E%3Ctext x='0' y='155' font-family='sans-serif' font-weight='900' font-size='80' letter-spacing='-0.05em' fill='%23334155'%3EBHARGAVA%3C/text%3E%3C/svg%3E" 
                        alt="Profile Name" 
                        className="w-full max-w-5xl block" 
                    />
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-12">
                 <p className="text-2xl text-blue-600 font-bold tracking-tight bg-white/80 p-2 border-l-4 border-blue-600">UX Researcher</p>
                 <div className="flex items-center gap-4">
                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                     <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">Status: Active / Available</p>
                 </div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-32">
        
        {/* Summary */}
        <section>
             <h2 className="text-xs font-bold font-mono uppercase text-slate-400 mb-8 tracking-widest border-b border-slate-100 pb-2 w-fit">01 / Executive Summary</h2>
             <p className="text-2xl md:text-4xl leading-[1.1] text-slate-900 font-light tracking-tight max-w-4xl">
               Specialized in leading foundational and evaluative research to drive product strategy. I translate complex technical systems into human-centered design requirements.
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                <button onClick={() => onNavigate('spanner')} className="group text-left border border-slate-200 p-6 hover:border-red-600 transition-all bg-white hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] relative overflow-hidden">
                    <div className="relative z-10">
                        <span className="text-[10px] font-mono text-red-600 uppercase tracking-widest block mb-2">Case Study 01</span>
                        <span className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">Spanner Hotspots</span>
                        <div className="flex items-center gap-2 mt-4 text-slate-400 group-hover:text-red-600 text-[10px] font-mono uppercase tracking-widest">
                            <span>View Case</span>
                            <LinkIcon className="w-3 h-3" />
                        </div>
                    </div>
                </button>
                
                <button onClick={() => onNavigate('ai')} className="group text-left border border-slate-200 p-6 hover:border-cyan-600 transition-all bg-white hover:shadow-[4px_4px_0px_0px_rgba(8,145,178,1)] relative overflow-hidden">
                    <div className="relative z-10">
                        <span className="text-[10px] font-mono text-cyan-600 uppercase tracking-widest block mb-2">Case Study 02</span>
                        <span className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">AI Paradigms</span>
                        <div className="flex items-center gap-2 mt-4 text-slate-400 group-hover:text-cyan-600 text-[10px] font-mono uppercase tracking-widest">
                            <span>View Case</span>
                            <LinkIcon className="w-3 h-3" />
                        </div>
                    </div>
                </button>

                <button onClick={() => onNavigate('recommendations')} className="group text-left border border-slate-200 p-6 hover:border-green-600 transition-all bg-white hover:shadow-[4px_4px_0px_0px_rgba(34,197,94,1)] relative overflow-hidden">
                    <div className="relative z-10">
                        <span className="text-[10px] font-mono text-green-600 uppercase tracking-widest block mb-2">Case Study 03</span>
                        <span className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors">Dead Clicks</span>
                        <div className="flex items-center gap-2 mt-4 text-slate-400 group-hover:text-green-600 text-[10px] font-mono uppercase tracking-widest">
                            <span>View Case</span>
                            <LinkIcon className="w-3 h-3" />
                        </div>
                    </div>
                </button>

                <button onClick={() => onNavigate('tier1')} className="group text-left border border-slate-200 p-6 hover:border-amber-500 transition-all bg-white hover:shadow-[4px_4px_0px_0px_rgba(245,158,11,1)] relative overflow-hidden">
                    <div className="relative z-10">
                        <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest block mb-2">Case Study 04</span>
                        <span className="text-lg font-bold text-slate-900 group-hover:text-amber-500 transition-colors">Advanced Observability</span>
                        <div className="flex items-center gap-2 mt-4 text-slate-400 group-hover:text-amber-500 text-[10px] font-mono uppercase tracking-widest">
                            <span>View Case</span>
                            <LinkIcon className="w-3 h-3" />
                        </div>
                    </div>
                </button>
            </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xs font-bold font-mono uppercase text-slate-400 mb-16 tracking-widest border-b border-slate-100 pb-2 w-fit">02 / Operational History</h2>
          <div className="mt-4">
            <ExperienceCard 
              role="UX Researcher"
              company="Google"
              period="Mar 2022 - Present"
              description="Lead UXR for Cloud Databases & Observability. Driving strategy for AI-powered troubleshooting and critical workload management."
              tags={['Enterprise', 'Cloud', 'AI', 'Observability']}
              accentColor="border-red-500"
            />
            <ExperienceCard 
              role="UX Researcher"
              company="Google Geo (Contract)"
              period="May 2019 - May 2021"
              description="Evaluative studies for Google Maps & Search. Created continuous feedback loops guiding leadership prioritization."
              tags={['Maps', 'Search', 'Consumer']}
              accentColor="border-blue-500"
            />
            <ExperienceCard 
              role="Principal Researcher"
              company="Curiosity Research"
              period="July 2018 - May 2019"
              description="Founded a self-funded research firm focusing on experimental projects for Indian SMEs."
              tags={['Entrepreneurship', 'Qualitative']}
              accentColor="border-yellow-500"
            />
          </div>
          
          <div className="mt-12 pl-8">
             <a 
               href="https://docs.google.com/document/d/1kHvC8FlJpJPiUcuIue-TDt2zG2Mfnsw8z3eFXf4cwp8/edit?tab=t.0"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors group border-b border-slate-300 pb-1 hover:border-blue-600"
             >
               <span>View Full Resume</span>
               <LinkIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </section>

        {/* Contact - Hard Card Style */}
        <section className="bg-white border border-slate-900 p-12 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] transition-all">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Establish Comms</h2>
                    <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Open Frequency Channel</p>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <a href="mailto:arpit_bhargava@outlook.com" className="flex items-center gap-3 px-6 py-4 border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all group bg-slate-50 hover:bg-white">
                        <MailIcon className="w-5 h-5" />
                        <span className="font-mono text-sm font-bold group-hover:underline underline-offset-4">arpit_bhargava@outlook.com</span>
                    </a>
                    <a href="https://linkedin.com/in/bhargavaa" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all group bg-slate-50 hover:bg-white">
                        <LinkedinIcon className="w-5 h-5" />
                        <span className="font-mono text-sm font-bold group-hover:underline underline-offset-4">linkedin.com/in/bhargavaa</span>
                    </a>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default About;
