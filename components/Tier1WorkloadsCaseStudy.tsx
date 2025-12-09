



import React from 'react';
import { TargetIcon, UsersIcon, BriefcaseIcon } from './Icons';

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
             {subtitle && <span className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-3 block font-bold">{subtitle}</span>}
             {title && <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
);

const Tier1WorkloadsCaseStudy: React.FC = () => {
    return (
        <div className="bg-white">
            {/* HERO */}
            <Section id="hero" className="items-start pt-40 relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-gradient-to-br from-amber-400 to-pink-300 opacity-30 mix-blend-multiply rotate-12" />
                    <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-full bg-gradient-to-tl from-amber-500 to-rose-400 opacity-20 mix-blend-multiply -rotate-12" />
                </div>

                <div className="relative z-10">
                    <div className="inline-block mb-6 px-3 py-1 border-2 border-slate-900 bg-white text-slate-900 text-xs font-mono uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(245,158,11,1)]">
                        Strategy Definition
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                        ADVANCED<br/>OBSERVABILITY
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-light leading-relaxed mb-12 bg-white/80 backdrop-blur-sm p-4 border-l-4 border-amber-500">
                        Reframing the customer definition from "Who" to "What".
                    </p>
                </div>
            </Section>

            {/* PROBLEM */}
            <Section id="problem" title="Strategic Ambiguity" subtitle="01 / The Problem">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">The Usability Paradox</h3>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg font-light">
                            The Databases Observability team had spent significant cycles optimizing for "Ease of Use"—simplifying charts, decluttering interfaces, and streamlining navigation to help generalist developers.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light">
                            The product team faced strategic ambiguity regarding product direction for meeting the needs of customers with business critical workloads - a segment that typically did not yet use our products. The product team debated whether to define these users based on organizational size, specific roles (e.g., DBAs), or other criteria.
                        </p>
                    </div>
                    <div className="md:col-span-6 flex flex-col justify-center gap-4">
                        {/* Visual: The Confusion Matrix */}
                        <div className="border-2 border-dashed border-slate-300 p-8 relative bg-slate-50/50">
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-[10px] font-mono text-slate-400 uppercase tracking-wider">Definition Conflict</span>
                            <div className="flex justify-center gap-8 opacity-50">
                                <div className="text-center">
                                    <UsersIcon className="w-12 h-12 mx-auto mb-2 text-slate-400" />
                                    <span className="font-mono text-xs uppercase tracking-widest">Role?</span>
                                </div>
                                <div className="w-[1px] bg-slate-300 h-16"></div>
                                <div className="text-center">
                                    <BriefcaseIcon className="w-12 h-12 mx-auto mb-2 text-slate-400" />
                                    <span className="font-mono text-xs uppercase tracking-widest">Size?</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl font-black text-slate-200">?</span>
                            </div>
                        </div>
                        <p className="text-[10px] font-mono text-slate-400 text-center mt-4 uppercase tracking-widest">
                            Fig 1.1: The Segmentation Deadlock
                        </p>
                    </div>
                </div>
            </Section>

            {/* CATALYST & ACTION */}
            <Section id="catalyst" title="The Investigation" subtitle="02 / Action">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">The Catalyst</h3>
                        <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light">
                            Persistent internal debate necessitated a formal, research-driven definition of the high-value, high-need customer segment to align feature development.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">My Action</h3>
                        <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light">
                            Conducted a series of expert interviews with internal Google leaders to produce a definitive report on the needs of this type of customer.
                        </p>
                    </div>
                </div>
            </Section>

            {/* OUTCOME */}
            <Section id="outcome" title="The Pivot" subtitle="03 / Outcome">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Reframing the Core</h3>
                        <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light">
                            The research reframed the core segmentation criteria, showing that <span className="font-bold text-amber-600 bg-amber-50 px-1">workload criticality</span> - not user role or company size - was the defining factor that drove advanced troubleshooting needs.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-lg font-light">
                            The report simultaneously identified specific feature deficiencies for supporting these critical workloads.
                        </p>
                    </div>
                    
                    {/* Visualizer */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-6 border border-slate-200 text-slate-400 bg-slate-50">
                            <div className="flex items-center gap-4">
                                <UsersIcon className="w-5 h-5"/>
                                <span className="line-through decoration-slate-400 font-mono text-sm">Job Title</span>
                            </div>
                            <span className="font-mono text-[10px] font-bold border border-slate-300 px-2 py-1 uppercase tracking-wider">DEPRECATED</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-6 border border-slate-200 text-slate-400 bg-slate-50">
                            <div className="flex items-center gap-4">
                                <BriefcaseIcon className="w-5 h-5"/>
                                <span className="line-through decoration-slate-400 font-mono text-sm">Company Size</span>
                            </div>
                            <span className="font-mono text-[10px] font-bold border border-slate-300 px-2 py-1 uppercase tracking-wider">DEPRECATED</span>
                        </div>
                        
                        <div className="relative flex items-center justify-between p-8 bg-white border-2 border-amber-500 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(245,158,11,1)] transition-transform hover:shadow-[2px_2px_0px_0px_rgba(236,72,153,1),4px_4px_0px_0px_rgba(245,158,11,1)] hover:-translate-x-1 hover:-translate-y-1">
                            <div className="flex items-center gap-4">
                                <TargetIcon className="w-8 h-8 text-amber-500"/>
                                <div>
                                    <span className="block font-bold uppercase tracking-wider text-slate-900">Workload Criticality</span>
                                    <span className="text-xs text-slate-500 font-mono mt-1">Tier 1 vs Tier 2</span>
                                </div>
                            </div>
                            <span className="font-mono text-[10px] font-bold bg-amber-500 text-white px-3 py-1 uppercase tracking-widest">PRIMARY_KEY</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* IMPACT */}
            <Section id="impact" title="The Impact" subtitle="04 / Resolution">
                <div className="bg-white border-2 border-slate-900 p-12 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(245,158,11,1)] text-slate-900">
                    <h3 className="text-2xl font-bold mb-6 text-amber-600 tracking-tight">Strategic Focus Established</h3>
                    <p className="text-slate-600 leading-relaxed max-w-3xl mb-8 text-lg font-light">
                        The findings immediately established the product team's strategic focus and directly initiated the development of new features designed specifically to remediate the gaps identified for critical workloads.
                    </p>
                    <div className="w-full h-[1px] bg-slate-200 mb-8"></div>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <span className="block text-[10px] font-mono text-slate-400 uppercase mb-2 tracking-widest">Status</span>
                            <span className="text-lg font-bold text-slate-900">In Development</span>
                        </div>
                        <div>
                            <span className="block text-[10px] font-mono text-slate-400 uppercase mb-2 tracking-widest">Target</span>
                            <span className="text-lg font-bold text-slate-900">Tier 1 Remediation</span>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Tier1WorkloadsCaseStudy;