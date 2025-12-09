

import React from 'react';
import { CheckCircleIcon, UsersIcon, TargetIcon, XCircleIcon, LinkIcon } from './Icons';

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


const AICaseStudy: React.FC = () => {
    return (
        <div className="bg-white">
            <Section id="hero" className="items-start pt-40 relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-gradient-to-br from-cyan-400 to-pink-300 opacity-30 mix-blend-multiply rotate-12" />
                    <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-full bg-gradient-to-tl from-cyan-500 to-rose-400 opacity-20 mix-blend-multiply -rotate-12" />
                </div>

                <div className="relative z-10">
                    <div className="inline-block mb-6 px-3 py-1 border-2 border-slate-900 bg-white text-slate-900 text-xs font-mono uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(8,145,178,1)]">
                        Strategic Definition
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                        AI-DRIVEN<br/>TROUBLESHOOTING
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mb-12 bg-white/80 backdrop-blur-sm p-4 border-l-4 border-cyan-500 font-light leading-relaxed">
                        Defining the interaction model for AI in a high-stakes enterprise context.
                    </p>
                </div>
            </Section>

            <Section id="problem" title="The Strategic Problem" subtitle="01 / The Challenge">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-6 flex flex-col gap-8">
                        <div>
                            <p className="text-slate-600 leading-relaxed text-lg font-light">
                                The product team faced a crucial, high-stakes strategic decision: How should we leverage AI to simplify complex database troubleshooting for enterprise users? While we knew the core user pain points, the optimal interaction model and interface to deliver the solution and build user trust remained <span className="font-bold text-cyan-700 bg-cyan-50 px-1">completely ambiguous.</span>
                            </p>
                        </div>
                        <div className="border-l-4 border-cyan-500 pl-6 py-2 bg-cyan-50/50">
                            <h4 className="font-bold text-cyan-700 mb-2 text-xs uppercase tracking-widest">Proactive Research</h4>
                            <p className="text-slate-800 leading-relaxed italic text-lg">
                                "This research was initiated proactively to prepare the organization for an inevitable future strategic question, focusing on the ideal interface to manage user trust in AI."
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-6 flex items-center justify-center">
                        <div className="flex gap-6 w-full max-w-lg">
                            <div className="flex-1 flex flex-col gap-2">
                                <div className="w-full aspect-square border-2 border-slate-900 bg-slate-50 relative flex overflow-hidden shadow-[4px_4px_0px_0px_rgba(236,72,153,0.2),8px_8px_0px_0px_rgba(8,145,178,0.2)]">
                                    <div className="w-2/3 h-full p-2 space-y-2">
                                        <div className="w-full h-2 bg-slate-300"></div><div className="w-3/4 h-2 bg-slate-300"></div>
                                    </div>
                                    <div className="w-1/3 h-full border-l-2 border-slate-900 bg-white flex flex-col justify-end p-2 gap-2">
                                        <div className="w-full h-auto p-1 border border-slate-900 bg-slate-100 rounded-sm text-[6px] font-mono">How can I help?</div>
                                        <div className="w-3/4 h-auto p-1 bg-cyan-600 text-white rounded-sm self-end text-[6px] font-mono">Fix latency.</div>
                                    </div>
                                </div>
                                <span className="font-mono text-[10px] text-center text-slate-900 font-bold uppercase tracking-wider">Hypothesis A: Chatbot</span>
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <div className="w-full aspect-square border-2 border-cyan-600 bg-cyan-50 relative flex items-center justify-center overflow-hidden shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(8,145,178,1)]">
                                    <div className="absolute inset-0 p-2 space-y-2 opacity-20">
                                        <div className="w-full h-2 bg-slate-900"></div><div className="w-full h-2 bg-slate-900"></div>
                                    </div>
                                    <div className="w-3/4 h-2/3 bg-white border-2 border-cyan-600 z-10 p-3 flex flex-col shadow-lg">
                                        <div className="w-1/2 h-3 bg-slate-900 mb-1"></div>
                                        <div className="w-full h-10 bg-slate-100 border border-slate-200"></div>
                                        <div className="mt-auto w-full h-6 bg-cyan-600"></div>
                                    </div>
                                </div>
                                <span className="font-mono text-[10px] text-center text-cyan-600 font-bold uppercase tracking-wider">Hypothesis B: The Tool</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="methodology" title="Methodology" subtitle="02 / Designing for Confidence">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-8">
                        <p className="text-slate-600 leading-relaxed text-lg font-light mb-8">
                            Given the need to define a novel interface rather than just measure preferences, the research moved beyond descriptive studies.
                        </p>
                        <ul className="space-y-6 text-lg font-light text-slate-600">
                            <li className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <strong className="text-slate-900 sm:w-48 flex-shrink-0">Specific Research Question:</strong>
                                <span className="italic">"Given that the AI is technically capable, what is the ideal interaction interface that maximizes user value, confidence, and trust?"</span>
                            </li>
                            <li className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <strong className="text-slate-900 sm:w-48 flex-shrink-0">Method Chosen:</strong>
                                <span>Comparative Concept Testing using a within-subjects, qualitative design.</span>
                            </li>
                            <li className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <strong className="text-slate-900 sm:w-48 flex-shrink-0">Justification:</strong>
                                <span>Asking users what they want is unreliable. By testing embodied concepts (prototypes), we could observe how users actually responded to the nature of the proposed solution (e.g., control vs. autonomy, transparency vs. simplicity).</span>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-4">
                        <div className="bg-slate-50 border-2 border-slate-900 p-8 h-full shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(8,145,178,1)]">
                            <h4 className="font-mono text-xs uppercase tracking-widest mb-4">Sampling Strategy (n=40)</h4>
                            <div className="space-y-6">
                                <div className="flex-1">
                                    <UsersIcon className="w-6 h-6 text-cyan-600 mb-2"/>
                                    <h5 className="font-bold text-slate-900">Generalists</h5>
                                    <p className="text-sm text-slate-600">Expected to benefit most from AI assistance.</p>
                                </div>
                                <div className="flex-1">
                                    <UsersIcon className="w-6 h-6 text-slate-500 mb-2"/>
                                    <h5 className="font-bold text-slate-900">Specialists</h5>
                                    <p className="text-sm text-slate-600">Experts who influence enterprise adoption; served as "negative sampling" to validate utility beyond novices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            
            <Section id="analysis" title="Analysis & Execution" subtitle="03 / Ensuring Rigor">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-slate-600 leading-relaxed text-lg font-light mb-6">
                            The complexity was ensuring the small qualitative sample provided highly reliable, high-confidence findings suitable for driving a strategic product decision.
                        </p>
                        <ul className="space-y-4 text-slate-600 text-lg font-light">
                            <li className="flex gap-4">
                                <strong className="text-slate-800 w-32 flex-shrink-0">Rigor Applied:</strong>
                                <span>I implemented a highly structured analysis involving Counterbalancing (to eliminate order bias when testing multiple concepts) and Triangulation.</span>
                            </li>
                            <li className="flex gap-4">
                                <strong className="text-slate-800 w-32 flex-shrink-0">Triangulation:</strong>
                                <span>Confidence was only established by synthesizing three data sources: Quantitative Helpfulness Scores (step and flow level), Qualitative Think-Aloud feedback, and Direct Comparative Feedback between concepts. This ensured that subjective opinions were always tied to specific, measurable pain points.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white border-2 border-slate-900 p-8 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(8,145,178,1)]">
                        <h4 className="font-mono text-xs uppercase tracking-widest mb-6">Triangulation for High Confidence</h4>
                        <div className="space-y-4">
                            <div className="p-4 border border-slate-200 bg-slate-50 text-center text-sm font-semibold text-slate-700">Quantitative Helpfulness Scores</div>
                            <div className="p-4 border border-slate-200 bg-slate-50 text-center text-sm font-semibold text-slate-700">Qualitative Think-Aloud Feedback</div>
                            <div className="p-4 border border-slate-200 bg-slate-50 text-center text-sm font-semibold text-slate-700">Direct Comparative Feedback</div>
                        </div>
                        <div className="text-center my-4 font-black text-slate-300 text-3xl">&darr;</div>
                        <div className="p-6 bg-cyan-600 text-white text-center">
                            <span className="font-bold text-lg">High-Confidence Findings</span>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="impact" title="The Impact" subtitle="04 / The Outcome">
                <p className="text-slate-600 leading-relaxed text-lg font-light max-w-3xl mb-12">
                    The findings were disseminated through a multi-layered deck and a series of presentations to adjacent teams. This "internal salesmanship" generated organizational consensus and moved the organization from receiving findings to making decisions.
                </p>
                <div className="bg-white border-2 border-slate-900 text-slate-900 p-12 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(8,145,178,1)]">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-cyan-600">Tactical Impact</h3>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex gap-3">
                                    <XCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                                    <span><span className="font-bold text-slate-800">Rejected chat interface,</span> providing immediate confidence to proceed with a guided, non-chat-based solution.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                                    <span><span className="font-bold text-slate-800">Bypassed dependency</span> on a central AI Chatbot team, significantly accelerating time-to-market.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-cyan-600">Strategic Impact</h3>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex gap-3">
                                    <TargetIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                                    <span>Provided the organization a <span className="font-bold text-slate-800">critical head start</span> in addressing domain-specific challenges of AI for troubleshooting.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                                    <span><span className="font-bold text-slate-800">Established a long-term roadmap</span> grounded in validated user needs rather than mere technical capacity.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="stakeholders" title="Stakeholder Alignment" subtitle="05 / Driving Adoption">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg font-light">
                            The project required engaging a large, cross-functional group (multiple Product Managers, Design Leads, Engineering Managers) whose alignment was critical for adoption.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg font-light">
                            Post-launch, feature usage was low. Stakeholders were focused on their own areas, missing the systemic failure in the user acquisition funnel.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-lg font-light">
                            I collaborated with a quantitative researcher to proactively model this funnel, which did not previously exist. By making the systemic breakdown visible and data-backed, I applied necessary pressure on stakeholders to prioritize fixing the funnel, demonstrating accountability for the feature’s success beyond the research phase.
                        </p>
                    </div>
                    <div className="bg-white border-2 border-slate-900 p-8 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(8,145,178,1)]">
                        <h4 className="font-mono text-xs uppercase tracking-widest mb-6">User Acquisition Funnel</h4>
                        <div className="space-y-2">
                            <div className="h-12 bg-slate-200 w-full flex items-center justify-center text-[10px] font-mono uppercase tracking-wider text-slate-500">Awareness</div>
                            <div className="h-10 bg-slate-200 w-[80%] mx-auto flex items-center justify-center text-[10px] font-mono uppercase tracking-wider text-slate-500">Consideration</div>
                            <div className="h-8 bg-cyan-500 w-[30%] mx-auto flex items-center justify-center text-[10px] font-mono uppercase tracking-wider text-white relative">
                                <span className="z-10">Enabled</span>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                                    <div className="w-px h-8 bg-red-400 border border-dashed" />
                                    <span className="text-red-600 bg-red-50 text-xs px-1 font-bold">Weak Point</span>
                                </div>
                            </div>
                            <div className="h-6 bg-cyan-500 w-[10%] mx-auto flex items-center justify-center text-[10px] font-mono uppercase tracking-wider text-white mt-12">Usage</div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="result" title="The Result" subtitle="06 / Launch & Validation">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="text-slate-600 leading-relaxed text-lg font-light">
                                The insights from this research directly informed the design of Gemini in Databases. The final product successfully integrates the structured, modal-based approach validated by our testing.
                            </p>
                        </div>
                        <a 
                            href="https://cloud.google.com/blog/products/databases/inside-ai-assisted-troubleshooting-for-databases" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-600 text-white font-bold uppercase tracking-widest hover:bg-cyan-700 transition-all group shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(8,145,178,1)] hover:shadow-[2px_2px_0px_0px_rgba(236,72,153,1),4px_4px_0px_0px_rgba(8,145,178,1)] hover:-translate-x-1 hover:-translate-y-1 self-start"
                        >
                            <span>View Launch Article</span>
                            <LinkIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                    <div className="bg-white border-2 border-slate-900 p-8 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(8,145,178,1)]">
                        <h4 className="font-mono text-xs uppercase tracking-widest mb-4">Feature Summary: Gemini in Databases</h4>
                        <p className="text-slate-600 leading-relaxed text-sm font-light">
                            The launched feature provides AI-assisted troubleshooting directly within the database interface. It offers a guided experience with tools like an Index Advisor and Query Recommender to help developers identify performance bottlenecks, optimize queries, and manage fleets more efficiently, embodying the principles of a structured, non-chat interface.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default AICaseStudy;