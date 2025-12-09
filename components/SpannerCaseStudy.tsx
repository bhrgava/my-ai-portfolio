

import React from 'react';
import ProblemVisualizer from './ProblemVisualizer';
import UserJourney from './UserJourney';
import { AlertIcon, CheckCircleIcon, ChevronDownIcon, SearchIcon, LinkIcon } from './Icons';

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
           {subtitle && <span className="text-red-600 font-mono text-xs uppercase tracking-widest mb-3 block font-bold">{subtitle}</span>}
           {title && <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">{title}</h2>}
        </div>
      )}
      {children}
    </div>
  </section>
);

const SpannerCaseStudy: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
    {/* HERO */}
    <Section id="hero" className="items-start pt-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-gradient-to-br from-red-400 to-pink-300 opacity-30 mix-blend-multiply rotate-12" />
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-full bg-gradient-to-tl from-red-500 to-rose-400 opacity-20 mix-blend-multiply -rotate-12" />
        </div>

        <div className="relative z-10">
        <div className="inline-block mb-6 px-3 py-1 border-2 border-slate-900 bg-white text-slate-900 text-xs font-mono uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(220,38,38,1)]">
            Foundational Research
        </div>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
            SPANNER<br/>HOTSPOTS
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-light leading-relaxed mb-12 bg-white/80 backdrop-blur-sm p-4 border-l-4 border-red-600">
            Revealing the invisible mechanics of database latency.
        </p>
        <button 
            onClick={() => scrollTo('problem')}
            className="group flex items-center gap-2 text-slate-900 hover:text-red-600 transition-colors"
        >
            <span className="text-xs font-bold uppercase tracking-widest border-b-2 border-transparent group-hover:border-red-600">Start Investigation</span>
            <ChevronDownIcon className="w-4 h-4" />
        </button>
        </div>
    </Section>

    {/* PROBLEM */}
    <Section id="problem" title="The Problem" subtitle="01 / Context">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 flex flex-col">
            
            {/* Concept Definition - High Level */}
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">1. The Distributed Premise</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg font-light">
                    Imagine a standard database as a single cashier at a grocery store. If the line gets too long, the only solution is to make the cashier work faster (add more CPU). 
                </p>
                <p className="text-slate-600 leading-relaxed text-lg font-light">
                    <strong>Spanner</strong> is different. It is a "distributed" database. It's like opening 1,000 checkout lanes simultaneously. To make this work, the system automatically splits the customers (data) evenly across all 1,000 lanes. Ideally, every lane is busy, but moving fast.
                </p>
            </div>

            {/* The Anomaly */}
            <div className="mt-12">
            <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">2. The Anomaly: Hotspotting</h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg font-light">
                "Hotspotting" is when this logic breaks. Imagine if, due to a misunderstanding, all 1,000 customers tried to squeeze into <strong>Checkout Lane #1</strong> at the same time, while lanes 2 through 1,000 stood empty.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg font-light">
                Lane #1 collapses under the load. The store grinds to a halt. To the manager (our user), it just looks like "the store is slow," but the root cause is an invisible imbalance in traffic distribution.
            </p>
            </div>
            <p className="font-mono text-[10px] text-red-400 uppercase mt-auto pt-12 tracking-widest">
                Fig 1.1: Theory of Operations
            </p>
        </div>
        <div className="lg:col-span-8">
            <div className="p-8 bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(220,38,38,1)]">
                <ProblemVisualizer />
            </div>
        </div>
        </div>
    </Section>

    {/* CATALYST */}
    <Section id="catalyst" title="The Catalyst" subtitle="02 / Signals">
        <div className="max-w-4xl mx-auto">
            <div className="p-8 border-2 border-slate-900 transition-all duration-200 bg-white shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(220,38,38,1)] hover:shadow-[2px_2px_0px_0px_rgba(236,72,153,1),4px_4px_0px_0px_rgba(220,38,38,1)] hover:-translate-x-1 hover:-translate-y-1">
                <AlertIcon className="w-8 h-8 text-slate-900 group-hover:text-red-600 mb-6" />
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Ticket Surge</h4>
                <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
                A sharp increase in "Unresolved Latency" support tickets. Customers knew something was wrong but couldn't prove it with existing charts.
                </p>
                
                <div className="pt-6 border-t border-slate-100">
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                        Real-world Instance
                    </p>
                    <a 
                        href="https://stackoverflow.com/questions/77396105/hotspots-in-specific-ranges-in-a-table-in-my-cloud-spanner-instance"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-slate-900 font-medium hover:text-red-600 transition-colors"
                    >
                        <span className="border-b border-slate-200 group-hover/link:border-red-600 transition-colors">
                            StackOverflow: "Hotspots in specific ranges..."
                        </span>
                        <LinkIcon className="w-3 h-3 text-slate-400 group-hover/link:text-red-600" />
                    </a>
                </div>
            </div>
        </div>
    </Section>

    {/* OUTCOME */}
    <Section id="outcome" title="The Findings" subtitle="03 / Analysis">
        <div className="grid lg:grid-cols-2 gap-16">
        <div>
            <p className="text-2xl text-slate-900 leading-relaxed mb-12 font-light tracking-tight">
            We mapped the troubleshooting journey and found a <span className="font-bold bg-red-100 px-1 text-red-900">critical breakage</span> in the investigation phase.
            </p>
            <div className="bg-white p-8 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(220,38,38,1)]">
                <UserJourney />
            </div>
        </div>
        <div className="flex flex-col justify-center">
            <div className="bg-white p-12 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(220,38,38,1)]">
                <span className="text-red-600 font-mono text-xs uppercase tracking-widest mb-4 block">Strategic Impact</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Engineering Pivot</h3>
                <p className="text-slate-700 leading-relaxed mb-6 text-lg font-light">
                    The team understood where to focus their efforts. They now understood that the first thing to do was to prioritise detection, and they built those metrics into the Spanner dashboard.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg font-light">
                    Future plans would involve continuing to build metrics to support the user journey specified in the research report.
                </p>
            </div>
        </div>
        </div>
    </Section>

    {/* RESULT */}
    <Section id="result" title="The Result" subtitle="04 / Launch">
        <div className="max-w-4xl">
            <p className="text-2xl text-slate-800 leading-relaxed mb-8 font-light tracking-tight">
                The research resulted in a new page called <span className="font-bold text-slate-900">"Hotspot Insights"</span>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light">
                This feature allows users to determine whether hotspots need their intervention and to identify problematic hot splits, directly addressing the visibility gaps identified in our user journey audit.
            </p>
            <a 
                href="https://docs.cloud.google.com/spanner/docs/find-hotspots-in-database" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all group shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(220,38,38,1)] hover:shadow-[2px_2px_0px_0px_rgba(236,72,153,1),4px_4px_0px_0px_rgba(220,38,38,1)] hover:-translate-x-1 hover:-translate-y-1"
            >
                <span>View Documentation</span>
                <LinkIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    </Section>
    </div>
  );
};

export default SpannerCaseStudy;