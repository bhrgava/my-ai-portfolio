import React, { useState, useEffect } from 'react';
import { MailIcon, LinkedinIcon, LinkIcon, ArrowRightIcon, BriefcaseIcon } from './Icons';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const ParallaxBackground: React.FC = () => {
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        setOffset(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            {/* Shape 1 */}
            <div 
                className="absolute top-[5%] left-[-25%] w-1/2 h-1/2 bg-gradient-to-br from-blue-400 to-sky-300 rounded-full opacity-40 mix-blend-multiply"
                style={{ transform: `translateY(${offset * 0.3}px)` }}
            />
            {/* Shape 2 */}
            <div 
                className="absolute bottom-[-15%] right-[-25%] w-1/2 h-1/2 bg-gradient-to-tl from-pink-400 to-rose-300 rounded-full opacity-40 mix-blend-multiply"
                style={{ transform: `translateY(${offset * -0.2}px)` }}
            />
            {/* Shape 3 */}
            <div 
                className="absolute top-[60%] left-[20%] w-1/3 h-1/3 bg-gradient-to-tr from-cyan-200 to-blue-300 opacity-30 mix-blend-multiply"
                style={{ transform: `translateY(${offset * 0.1}px) rotate(30deg)` }}
            />
        </div>
    );
};


const ExperienceItem: React.FC<{
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
}> = ({ role, company, period, description, tags }) => (
    <div className="relative pl-10 pb-12 group">
        {/* Timeline Dot & Line */}
        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-slate-200 border-2 border-white group-hover:bg-blue-600 transition-colors" />
        <div className="absolute left-[5px] top-1.5 bottom-0 w-px bg-slate-200" />
        
        <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1 mb-1">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">{role}</h3>
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">{period}</span>
        </div>
        <div className={`font-bold text-xs uppercase tracking-widest mb-4 text-blue-600`}>{company}</div>
        <p className="text-slate-600 leading-relaxed max-w-3xl font-light mb-6">{description}</p>
        
        {tags && (
            <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-200 uppercase px-2 py-1 rounded-sm">
                {tag}
                </span>
            ))}
            </div>
        )}
    </div>
);

const CaseStudyCard: React.FC<{
    onClick: () => void;
    caseNumber: string;
    title: string;
    description: string;
    client: string;
}> = ({ onClick, caseNumber, title, description, client }) => (
    <button 
        onClick={onClick} 
        className="group text-left bg-white rounded-lg transition-all duration-200 relative p-8 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(37,99,235,1)] hover:shadow-[2px_2px_0px_0px_rgba(236,72,153,1),4px_4px_0px_0px_rgba(37,99,235,1)] hover:-translate-x-1 hover:-translate-y-1 border-2 border-slate-900"
    >
        <div>
            <div className="flex justify-between items-center mb-2">
                <span className={`text-[10px] font-mono text-blue-600 uppercase tracking-widest block font-bold`}>Case Study {caseNumber}</span>
                <span className="text-[10px] font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded-sm">{client}</span>
            </div>
            <span className="text-2xl font-bold text-slate-900">{title}</span>
            <p className="text-slate-500 mt-3 font-light leading-snug">{description}</p>
        </div>
        <div className="flex items-center gap-2 mt-6 text-blue-600 text-xs font-mono uppercase tracking-widest font-bold">
            <span>View Case</span>
            <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
    </button>
);

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <>
      <ParallaxBackground />
      <div className="pt-24 pb-20 px-6 relative z-10">
        
        {/* Header / Title Card */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center py-20">
          <div className="relative z-10">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-blue-600 leading-none">
                  Arpit Bhargava
              </h1>
              <p className="mt-6 text-2xl md:text-3xl font-light text-slate-600 tracking-tight max-w-3xl mx-auto">
                  A UX Researcher specializing in the translation of complex technical systems into human-centered product strategies.
              </p>
              <p className="mt-8 text-lg font-light text-slate-500 max-w-3xl mx-auto leading-relaxed">
                  Experienced UX Researcher with 9+ years in high-impact roles, most recently 4 years at Google Cloud (GCP). Specialized in leading foundational and evaluative research to drive product strategy and improve user experiences in enterprise and consumer settings. Proven ability to deliver actionable insights that led to major feature launches.
              </p>
              <div className="mt-12 flex items-center justify-center gap-2">
                  <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">Available for new opportunities</p>
              </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-32">
          {/* Summary */}
          <section>
              <h2 className="text-sm font-bold font-mono uppercase text-slate-400 mb-12 tracking-widest text-center">Selected Works</h2>
              
              <div className="grid grid-cols-1 gap-16">
                  {/* Featured Case Study */}
                  <button 
                      onClick={() => onNavigate('ai')}
                      className="group text-left bg-white rounded-lg transition-all duration-200 relative p-12 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(37,99,235,1)] hover:shadow-[2px_2px_0px_0px_rgba(236,72,153,1),4px_4px_0px_0px_rgba(37,99,235,1)] hover:-translate-x-1 hover:-translate-y-1 border-2 border-slate-900 block w-full"
                  >
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                          <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest block font-bold">Featured Case Study</span>
                                <span className="text-[10px] font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded-sm">Google Cloud</span>
                              </div>
                              <span className="text-4xl font-bold text-slate-900">AI Troubleshooting</span>
                              <p className="text-slate-500 mt-4 font-light leading-relaxed">Defining interaction models for AI in high-stakes contexts. This foundational research guided the design of AI assisted troubleshooting by validating a structured, non-chat interface to build user trust and accelerate time-to-market.</p>
                              <div className="flex items-center gap-2 mt-8 text-blue-600 text-xs font-mono uppercase tracking-widest font-bold">
                                  <span>View Case</span>
                                  <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                              </div>
                          </div>
                          <div className="hidden md:flex items-center justify-center">
                               <div className="w-full max-w-xs aspect-square border-2 border-cyan-600 bg-cyan-50 relative flex items-center justify-center overflow-hidden shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(8,145,178,1)]">
                                  <div className="absolute inset-0 p-2 space-y-2 opacity-20">
                                      <div className="w-full h-2 bg-slate-900"></div><div className="w-full h-2 bg-slate-900"></div>
                                  </div>
                                  <div className="w-3/4 h-2/3 bg-white border-2 border-cyan-600 z-10 p-3 flex flex-col shadow-lg">
                                      <div className="w-1/2 h-3 bg-slate-900 mb-1"></div>
                                      <div className="w-full h-10 bg-slate-100 border border-slate-200"></div>
                                      <div className="mt-auto w-full h-6 bg-cyan-600"></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </button>

                  {/* Other Case Studies */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <CaseStudyCard
                          onClick={() => onNavigate('spanner')}
                          caseNumber="01"
                          title="Spanner Hotspots"
                          description="Revealing the invisible mechanics of database latency."
                          client="Google Cloud"
                      />
                      <CaseStudyCard
                          onClick={() => onNavigate('recommendations')}
                          caseNumber="03"
                          title="Dead Clicks"
                          description="Diagnosing the failure of high-value proactive features."
                          client="Google Cloud"
                      />
                      <CaseStudyCard
                          onClick={() => onNavigate('tier1')}
                          caseNumber="04"
                          title="Advanced Observability"
                          description="Reframing the customer definition from 'Who' to 'What'."
                          client="Google Cloud"
                      />
                  </div>
              </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-sm font-bold font-mono uppercase text-slate-400 mb-12 tracking-widest text-center">Operational History</h2>
            <div>
              <ExperienceItem 
                role="UX Research Lead"
                company="Google Cloud"
                period="Mar 2022 - Present"
                description="Lead UXR for Cloud Databases Observability. Driving strategy for AI-powered troubleshooting and critical workload management."
                tags={['Enterprise', 'Cloud', 'AI', 'Observability']}
              />
              <ExperienceItem 
                role="UX Researcher"
                company="Google Geo (Contract)"
                period="May 2019 - May 2021"
                description="Evaluative studies for Google Maps & Search. Created continuous feedback loops guiding leadership prioritization."
                tags={['Maps', 'Search', 'Consumer']}
              />
              <ExperienceItem 
                role="Principal Researcher"
                company="Curiosity Research"
                period="July 2018 - May 2019"
                description="Founded a self-funded research firm focusing on experimental projects for Indian SMEs."
                tags={['Entrepreneurship', 'Qualitative']}
              />
            </div>
            
            <div className="mt-12 text-center">
               <a 
                 href="https://docs.google.com/document/d/1kHvC8FlJpJPiUcuIue-TDt2zG2Mfnsw8z3eFXf4cwp8/edit?tab=t.0"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors group"
               >
                 <span className="border-b border-slate-300 group-hover:border-slate-900">View Full Resume</span>
                 <LinkIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-white border-2 border-slate-900 rounded-lg p-12 text-center shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(37,99,235,1)]">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Let's Connect</h2>
              <p className="text-slate-600 font-light max-w-xl mx-auto mb-10">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a href="mailto:arpit_bhargava@outlook.com" className="group flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/10">
                      <MailIcon className="w-5 h-5" />
                      <span>Email Me</span>
                  </a>
                  <a href="https://linkedin.com/in/bhargavaa" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 px-6 py-3 bg-white text-slate-700 rounded-lg font-bold border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-colors">
                      <LinkedinIcon className="w-5 h-5" />
                      <span>LinkedIn</span>
                  </a>
              </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;