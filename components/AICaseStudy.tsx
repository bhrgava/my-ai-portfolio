
import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, LinkIcon } from './Icons';

const Section: React.FC<{
    id: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
  }> = ({ id, title, subtitle, children, className = "" }) => (
    <section id={id} className={`min-h-screen flex flex-col justify-center py-24 px-6 border-b border-slate-100 relative ${className}`}>
      <div className="max-w-5xl mx-auto w-full z-10">
        {(title || subtitle) && (
          <div className="mb-16">
             {subtitle && <span className="text-cyan-600 font-mono text-xs uppercase tracking-widest mb-3 block font-bold">{subtitle}</span>}
             {title && <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );

const AIConceptVisualizer: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const totalSteps = 4; 

    // Concepts data
    const concepts = [
        {
            id: 1,
            name: "Concept A: Chat",
            steps: ["Step 1", "Step 2", "Step 3", "Result"],
            scoreLabel: "?"
        },
        {
            id: 2,
            name: "Concept B: Direct",
            steps: ["Result"],
            scoreLabel: "?"
        },
        {
            id: 3,
            name: "Concept C: Modal",
            steps: ["Context", "Analysis", "Fix"],
            scoreLabel: "?"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % (totalSteps + 2));
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white border border-slate-900 p-8 w-full shadow-[8px_8px_0px_0px_rgba(8,145,178,1)]">
            <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest">Comparative Evaluation</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {concepts.map((concept) => (
                    <div key={concept.id} className="flex flex-col">
                         <div className="text-[10px] font-bold uppercase mb-4 text-slate-400 tracking-widest">{concept.name}</div>
                         
                         {/* Wireframe Box */}
                         <div className={`flex-1 border-2 p-4 min-h-[200px] relative flex flex-col gap-2 ${concept.name.includes('Modal') ? 'border-cyan-600 bg-cyan-50' : 'border-slate-200 bg-slate-50'}`}>
                            
                            {/* Steps Animation */}
                            {concept.steps.map((step, idx) => (
                                <div 
                                    key={idx}
                                    className={`h-8 border border-slate-300 bg-white flex items-center px-2 text-xs font-mono transition-all duration-300 ${
                                        activeStep > idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                    }`}
                                >
                                    {step}
                                </div>
                            ))}

                            {/* Score */}
                            <div className={`mt-auto pt-4 border-t border-slate-200 flex justify-between items-end transition-opacity duration-500 ${activeStep >= totalSteps ? 'opacity-100' : 'opacity-0'}`}>
                                <span className="text-[10px] font-mono uppercase">Total Helpfulness Score</span>
                                <span className={`text-xl font-bold text-slate-900`}>
                                    {concept.scoreLabel}
                                </span>
                            </div>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const AICaseStudy: React.FC = () => {
    return (
        <div className="bg-white">
            <Section id="hero" className="items-start pt-40 relative overflow-hidden">
                 {/* Dan Flavin Installation: "The Binary Choice" */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
                    {/* Cyan Beam (Chat) */}
                    <div className="absolute top-0 right-0 h-full w-4 bg-white shadow-[0_0_20px_rgba(6,182,212,1),0_0_80px_rgba(6,182,212,0.8),0_0_150px_rgba(6,182,212,0.6)] -skew-x-12 origin-top"></div>
                    
                    {/* Magenta Beam (Modal) */}
                    <div className="absolute top-0 right-[10%] h-full w-4 bg-white shadow-[0_0_20px_rgba(236,72,153,1),0_0_80px_rgba(236,72,153,0.8),0_0_150px_rgba(236,72,153,0.6)] -skew-x-12 origin-top mix-blend-screen"></div>

                    {/* Intersection Glow */}
                    <div className="absolute top-[30%] right-[5%] w-64 h-64 bg-white blur-[80px] opacity-50 animate-pulse"></div>
                </div>

                <div className="relative z-10">
                    <div className="inline-block mb-6 px-3 py-1 border border-slate-900 bg-white text-slate-900 text-xs font-mono uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(8,145,178,1)]">
                        Evaluative Research
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                        AI<br/>PARADIGMS
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mb-12 bg-white/80 backdrop-blur-sm p-4 border-l-4 border-cyan-500 font-light leading-relaxed">
                        Chatbot or Tool? Defining the interaction model for AI in observability.
                    </p>
                </div>
            </Section>

            <Section id="problem" title="The Context" subtitle="01 / Background">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Text Content - Spans 6 cols now for better balance */}
                    <div className="lg:col-span-6 flex flex-col gap-12">
                        
                        {/* 1. The Operational Reality (Combined) */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">1. The Operational Reality</h3>
                            <p className="text-slate-600 leading-relaxed mb-4 text-lg font-light">
                                Managed databases are the silent infrastructure powering modern applications. When they experience latency or outages, the impact is immediate and financial.
                            </p>
                            <p className="text-slate-600 leading-relaxed text-lg font-light">
                                "Troubleshooting" in this context is not a casual exploration—it is a high-pressure, time-critical race to identify root causes and restore service.
                            </p>
                        </div>

                         {/* 2. The Hypothesis */}
                         <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">2. The AI Hypothesis</h3>
                            <p className="text-slate-600 leading-relaxed text-lg font-light">
                                In 2024, the product team faced a crucial strategic decision: how to leverage AI to simplify database troubleshooting. While key user pain points were known, the optimal interface (e.g., chat vs. modal) and interaction style remained undefined.
                            </p>
                        </div>
                    </div>

                    {/* Visuals - Spans 6 cols */}
                    <div className="lg:col-span-6 flex flex-col justify-center items-center gap-8 pt-8 lg:pt-0">
                         {/* Sizing Wrapper */}
                         <div className="flex gap-6 w-full max-w-lg">
                             {/* Wireframe 1: Side Panel Chat */}
                             <div className="flex-1 flex flex-col gap-2">
                                 <div className="w-full aspect-square border-2 border-slate-900 bg-slate-50 relative flex overflow-hidden shadow-[4px_4px_0px_0px_rgba(8,145,178,0.2)]">
                                     {/* Main Content Area */}
                                     <div className="w-2/3 h-full p-2 space-y-2">
                                         <div className="w-full h-2 bg-slate-300"></div>
                                         <div className="w-3/4 h-2 bg-slate-300"></div>
                                         <div className="w-1/2 h-2 bg-slate-300"></div>
                                         <div className="w-full h-2 bg-slate-300 mt-4"></div>
                                         <div className="w-2/3 h-2 bg-slate-300"></div>
                                     </div>
                                     {/* Side Panel */}
                                     <div className="w-1/3 h-full border-l-2 border-slate-900 bg-white flex flex-col justify-end p-2 gap-2">
                                         <div className="w-full h-auto p-1 border border-slate-900 bg-slate-100 rounded-sm text-[6px] text-slate-500 font-mono">
                                            How can I help?
                                         </div>
                                         <div className="w-3/4 h-auto p-1 bg-cyan-600 text-white rounded-sm self-end text-[6px] font-mono">
                                            Fix latency.
                                         </div>
                                     </div>
                                 </div>
                                 <span className="font-mono text-[10px] text-center text-slate-900 font-bold uppercase tracking-wider">Hypothesis A: The Chatbot</span>
                             </div>

                             {/* Wireframe 2: Modal */}
                             <div className="flex-1 flex flex-col gap-2">
                                 <div className="w-full aspect-square border-2 border-cyan-600 bg-cyan-50 relative flex items-center justify-center overflow-hidden shadow-[4px_4px_0px_0px_rgba(8,145,178,1)]">
                                     {/* Background (Dimmed) */}
                                     <div className="absolute inset-0 p-2 space-y-2 opacity-20">
                                         <div className="w-full h-2 bg-slate-900"></div>
                                         <div className="w-full h-2 bg-slate-900"></div>
                                         <div className="w-full h-2 bg-slate-900"></div>
                                         <div className="w-full h-2 bg-slate-900"></div>
                                     </div>
                                     {/* Modal */}
                                     <div className="w-3/4 h-2/3 bg-white border-2 border-cyan-600 z-10 p-3 flex flex-col gap-3 shadow-lg">
                                         <div className="w-1/2 h-3 bg-slate-900 mb-1"></div>
                                         <div className="w-full h-10 bg-slate-100 border border-slate-200 flex items-center justify-center text-[8px] font-mono text-slate-400">DIAGNOSTIC_DATA</div>
                                         <div className="mt-auto w-full h-6 bg-cyan-600 flex items-center justify-center text-white text-[8px] font-bold tracking-widest uppercase">Apply Fix</div>
                                     </div>
                                 </div>
                                 <span className="font-mono text-[10px] text-center text-cyan-600 font-bold uppercase tracking-wider">Hypothesis B: The Tool</span>
                             </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="experiment" title="The Experiment" subtitle="02 / Testing">
                <div className="max-w-3xl mb-16">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">Methodology</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg font-light">
                        I designed and executed evaluative research testing three distinct AI troubleshooting concepts—differing across chat vs. modal, conversational vs. direct, and visual vs. text-only paradigms.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-12 text-lg font-light">
                        The team mocked up each concept using the same underlying data. Participants then tested all three, allowing me to collect observational data and user-reported helpfulness scores at both the flow and step-by-step levels.
                    </p>
                </div>
                <AIConceptVisualizer />
            </Section>

            <Section id="outcome" title="The Verdict" subtitle="03 / Conclusion">
                 <div className="bg-slate-900 text-white p-12 shadow-[8px_8px_0px_0px_rgba(8,145,178,1)]">
                     <h3 className="text-3xl font-bold mb-6 text-cyan-400">Structure more than Conversation</h3>
                     <p className="text-slate-300 text-lg font-light leading-relaxed max-w-3xl mb-8">
                         The research proved that in high-stress scenarios, users reject "Chatty" AI. They prefer **Structured Modals** that present the Root Cause, The Fix, and The Evidence in a verifiable format.
                     </p>
                     <p className="text-slate-400 text-lg font-light leading-relaxed max-w-3xl mb-8">
                        The final report established key principles governing how users perceive and expect AI tools to function. This research was instrumental in shaping the feature's entire direction, providing the team with a validated concept and design principles for the future development of the AI-powered troubleshooting experience.
                     </p>
                     <div className="flex items-center gap-4">
                         <CheckCircleIcon className="w-6 h-6 text-cyan-400" />
                         <span className="font-mono text-sm uppercase tracking-widest text-cyan-400">Direction Validated</span>
                     </div>
                 </div>
            </Section>

            <Section id="launch" title="The Result" subtitle="04 / Realization">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-2xl text-slate-800 leading-relaxed mb-8 font-light tracking-tight">
                            The insights from this research directly informed the design of <span className="font-bold">Gemini in Databases</span>. The final product successfully integrates the structured, modal-based approach validated by our testing.
                        </p>
                        <a 
                            href="https://cloud.google.com/blog/products/databases/inside-ai-assisted-troubleshooting-for-databases" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-600 text-white font-bold uppercase tracking-widest hover:bg-cyan-700 transition-all group shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                        >
                            <span>Read Launch Announcement</span>
                            <LinkIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                    <div className="bg-slate-50 p-8 border border-slate-200 shadow-[8px_8px_0px_0px_rgba(8,145,178,0.2)]">
                         <h4 className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">From the Blog</h4>
                         <blockquote className="text-slate-900 font-serif text-xl italic leading-relaxed mb-6">
                            "We designed the experience to meet users where they are... providing context-aware suggestions that help DBAs move from detection to resolution in seconds."
                         </blockquote>
                         <div className="text-xs font-bold uppercase text-cyan-600 tracking-widest">Google Cloud Blog</div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default AICaseStudy;
