
import React from 'react';
import { ClockIcon } from './Icons';

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
             {subtitle && <span className="text-purple-600 font-mono text-xs uppercase tracking-widest mb-2 block font-bold">{subtitle}</span>}
             {title && <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
);

const WaitEventsCaseStudy: React.FC = () => {
    return (
        <div className="bg-white">
             {/* HERO */}
             <Section id="hero" className="items-start pt-40 relative overflow-hidden">
                {/* Dan Flavin Installation: "The Speed of Light" */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
                    {/* Racing Yellow Lines */}
                    <div className="absolute top-[30%] left-[-10%] w-[80%] h-2 bg-white shadow-[0_0_20px_rgba(147,51,234,1),0_0_60px_rgba(147,51,234,0.8)] skew-x-12"></div>
                    <div className="absolute top-[35%] left-[-10%] w-[70%] h-2 bg-white shadow-[0_0_20px_rgba(147,51,234,1),0_0_60px_rgba(147,51,234,0.8)] skew-x-12"></div>
                    
                    {/* Ultraviolet Fade */}
                    <div className="absolute bottom-0 right-0 w-[50%] h-full bg-gradient-to-l from-purple-500/20 to-transparent blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    <div className="inline-block mb-6 px-3 py-1 border border-slate-900 bg-white text-slate-900 text-xs font-mono uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(147,51,234,1)]">
                        Feature Evaluation
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                        TIME<br/>SENSITIVITY
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-light leading-relaxed mb-12 bg-white/80 backdrop-blur-sm p-4 border-l-4 border-purple-500">
                        Aligning feature availability with the speed of an incident.
                    </p>
                </div>
            </Section>

            {/* AUDIT */}
            <Section id="audit" title="The Gap" subtitle="01 / Analysis">
                <div className="border border-slate-900 bg-white p-12 relative shadow-[8px_8px_0px_0px_rgba(147,51,234,1)]">
                     {/* Background Grid */}
                     <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] -z-10 opacity-50" />

                     <h3 className="text-sm font-bold font-mono uppercase mb-12 text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-4">
                         <ClockIcon className="w-4 h-4 text-purple-600"/>
                         Workflow Audit Log
                     </h3>

                     <div className="space-y-16 relative">
                         {/* Vertical Line */}
                         <div className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-slate-200" />

                         <div className="relative pl-12 group">
                             <div className="absolute left-[9px] top-2 w-3 h-3 rounded-full bg-white border-2 border-slate-900 z-10 group-hover:scale-125 transition-transform" />
                             <h4 className="font-bold text-slate-900 text-xl uppercase tracking-tight">The Expectation</h4>
                             <p className="text-slate-600 mt-2 max-w-xl leading-relaxed">
                                 "I see a spike. I need to see what queries are running <span className="font-bold text-purple-600 bg-purple-50 px-1">right now</span>."
                             </p>
                         </div>

                         <div className="relative pl-12 group">
                             <div className="absolute left-[9px] top-2 w-3 h-3 rounded-full bg-white border-2 border-red-500 z-10 group-hover:scale-125 transition-transform" />
                             <h4 className="font-bold text-red-600 text-xl uppercase tracking-tight">The Reality (v1)</h4>
                             <p className="text-slate-600 mt-2 max-w-xl leading-relaxed">
                                 Features were buried in sub-menus. By the time the user clicked through, the transient spike had passed. <span className="bg-red-50 text-red-600 px-1 font-bold">Data Lost.</span>
                             </p>
                         </div>

                         <div className="relative pl-12 group">
                             <div className="absolute left-[9px] top-2 w-3 h-3 rounded-full bg-purple-600 z-10 group-hover:scale-125 transition-transform shadow-lg shadow-purple-200" />
                             <h4 className="font-bold text-purple-600 text-xl uppercase tracking-tight">The Fix (v2)</h4>
                             <p className="text-slate-600 mt-2 max-w-xl leading-relaxed">
                                 Integrated real-time "Active Queries" directly into the main latency dashboard. Zero clicks to insight.
                             </p>
                         </div>
                     </div>
                </div>
             </Section>
        </div>
    );
};

export default WaitEventsCaseStudy;