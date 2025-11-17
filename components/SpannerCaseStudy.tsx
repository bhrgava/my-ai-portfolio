import React from 'react';
import ProblemVisualizer from './ProblemVisualizer';
import UserJourney from './UserJourney';
import { AlertIcon, CheckCircleIcon, ChevronDownIcon, SearchIcon } from './Icons';

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
           {subtitle && <span className="text-red-600 font-mono text-xs uppercase tracking-widest mb-2 block font-bold">{subtitle}</span>}
           {title && <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">{title}</h2>}
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
        {/* Dan Flavin Installation: "The Red Heat" */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            {/* The Stable Blue Line (Horizontal) */}
            <div className="absolute top-[40%] left-[-10%] w-[120%] h-2 bg-white shadow-[0_0_20px_rgba(59,130,246,0.8),0_0_60px_rgba(59,130,246,0.6),0_0_100px_rgba(59,130,246,0.4)] rotate-1"></div>
            
            {/* The Hotspot Intersections (Vertical Red) */}
            <div className="absolute top-0 left-[65%] h-full w-2 bg-white shadow-[0_0_20px_rgba(220,38,38,1),0_0_60px_rgba(220,38,38,0.8),0_0_120px_rgba(220,38,38,0.5)]"></div>
            <div className="absolute top-0 left-[68%] h-full w-2 bg-white shadow-[0_0_20px_rgba(220,38,38,1),0_0_60px_rgba(220,38,38,0.8),0_0_120px_rgba(220,38,38,0.5)] opacity-70"></div>
        </div>

        <div className="relative z-10 mix-blend-multiply">
          <div className="inline-block mb-6 px-3 py-1 border border-slate-900 bg-white text-slate-900 text-xs font-mono uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]">
            Foundational Research
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
            SPANNER<br/>HOTSPOTS
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-light leading-relaxed mb-12 bg-white/50 backdrop-blur-sm p-4 border-l-4 border-red-600">
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
                <p className="text-slate-600 leading-relaxed mb-6">
                    Imagine a standard database as a single cashier at a grocery store. If the line gets too long, the only solution is to make the cashier work faster (add more CPU). 
                </p>
                <p className="text-slate-600 leading-relaxed">
                    <strong>Spanner</strong> is different. It is a "distributed" database. It's like opening 1,000 checkout lanes simultaneously. To make this work, the system automatically splits the customers (data) evenly across all 1,000 lanes. Ideally, every lane is busy, but moving fast.
                </p>
            </div>

             {/* The Anomaly */}
            <div className="mt-12">
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">2. The Anomaly: Hotspotting</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                "Hotspotting" is when this logic breaks. Imagine if, due to a misunderstanding, all 1,000 customers tried to squeeze into <strong>Checkout Lane #1</strong> at the same time, while lanes 2 through 1,000 stood empty.
              </p>
              <p className="text-slate-600 leading-relaxed">
                 Lane #1 collapses under the load. The store grinds to a halt. To the manager (our user), it just looks like "the store is slow," but the root cause is an invisible imbalance in traffic distribution.
              </p>
            </div>
            <p className="font-mono text-xs text-red-400 uppercase mt-auto pt-12">
                Fig 1.1: Theory of Operations
            </p>
          </div>
          <div className="lg:col-span-8">
            <ProblemVisualizer />
          </div>
        </div>
      </Section>

      {/* CATALYST */}
      <Section id="catalyst" title="The Catalyst" subtitle="02 / Signals">
        <div className="grid md:grid-cols-2 gap-8">
             <div className="p-8 border border-slate-200 hover:border-red-600 transition-colors group bg-white shadow-[8px_8px_0px_0px_rgba(220,38,38,0.1)] hover:shadow-[8px_8px_0px_0px_rgba(220,38,38,1)]">
                <AlertIcon className="w-8 h-8 text-slate-900 group-hover:text-red-600 mb-6" />
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Ticket Surge</h4>
                <p className="text-slate-600">
                  A sharp increase in "Unresolved Latency" support tickets. Customers knew something was wrong but couldn't prove it with existing charts.
                </p>
             </div>
             <div className="p-8 border border-slate-200 hover:border-red-600 transition-colors group bg-white shadow-[8px_8px_0px_0px_rgba(220,38,38,0.1)] hover:shadow-[8px_8px_0px_0px_rgba(220,38,38,1)]">
                <SearchIcon className="w-8 h-8 text-slate-900 group-hover:text-red-600 mb-6" />
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Invisible Contention</h4>
                <p className="text-slate-600">
                  While global averages looked healthy (green), specific shards were red-lining. The signal was diluted by the scale of the system.
                </p>
             </div>
        </div>
      </Section>

      {/* OUTCOME */}
      <Section id="outcome" title="The Findings" subtitle="03 / Analysis">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-slate-800 leading-relaxed mb-12 font-light">
              We mapped the troubleshooting journey and found a <span className="font-bold bg-red-100 px-1 text-red-900">critical breakage</span> in the investigation phase.
            </p>
            <UserJourney />
          </div>
          <div className="flex flex-col justify-center">
             <div className="bg-slate-50 p-8 border border-slate-200 shadow-[8px_8px_0px_0px_rgba(220,38,38,1)]">
                <span className="text-red-600 font-mono text-xs uppercase tracking-widest mb-4 block">Strategic Impact</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Engineering Pivot</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <CheckCircleIcon className="w-6 h-6 text-red-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900">Prioritized "Key Visualizer"</h4>
                      <p className="text-sm text-slate-600 mt-1">Moved from "nice to have" to P0 roadmap item.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircleIcon className="w-6 h-6 text-red-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900">Defined Core Metrics</h4>
                      <p className="text-sm text-slate-600 mt-1">Established standard for "Heatmap" visualization of row access.</p>
                    </div>
                  </li>
                </ul>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SpannerCaseStudy;