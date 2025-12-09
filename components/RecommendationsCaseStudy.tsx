



import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

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
             {subtitle && <span className="text-green-600 font-mono text-xs uppercase tracking-widest mb-3 block font-bold">{subtitle}</span>}
             {title && <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
);

const AdoptionChart: React.FC = () => {
    const data = [
      { name: 'Generated', value: 12500, label: 'System Output' },
      { name: 'Viewed', value: 1100, label: 'User Attention' },
    ];
  
    return (
      <div className="bg-white border-2 border-slate-900 p-6 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(34,197,94,1)] h-96 flex flex-col">
        <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-2">
             <h3 className="font-mono text-xs font-bold uppercase text-slate-900 tracking-widest">Funnel Drop-off</h3>
             <span className="font-mono text-xs text-red-500 font-bold uppercase bg-red-50 px-2 py-1">91% Loss</span>
        </div>
        <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontFamily: 'JetBrains Mono', fontSize: 12, fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontFamily: 'JetBrains Mono', fontSize: 10, fill: '#94a3b8'}} />
                <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#0f172a', color: '#f8fafc', fontFamily: 'JetBrains Mono', fontSize: '12px' }}
                />
                <Bar dataKey="value" radius={[0, 0, 0, 0]} barSize={60}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#cbd5e1' : '#22c55e'} />
                ))}
                </Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>
        <p className="text-[10px] font-mono text-slate-400 text-center mt-4 uppercase tracking-widest">
            Figure 2.1: The Engagement Gap
        </p>
      </div>
    );
};

const PixelFace: React.FC = () => (
  <svg viewBox="0 0 12 12" className="w-full h-full" shapeRendering="crispEdges">
    {/* Background */}
    <rect width="12" height="12" fill="#94a3b8" />
    {/* Face Base */}
    <rect x="3" y="2" width="6" height="8" fill="#ffedd5" />
    {/* Hair */}
    <rect x="3" y="1" width="6" height="2" fill="#1e293b" />
    <rect x="2" y="2" width="1" height="3" fill="#1e293b" />
    <rect x="9" y="2" width="1" height="3" fill="#1e293b" />
    {/* Eyes */}
    <rect x="4" y="4" width="1" height="1" fill="#000" />
    <rect x="7" y="4" width="1" height="1" fill="#000" />
    {/* Beard */}
    <rect x="3" y="6" width="6" height="4" fill="#713f12" />
    <rect x="4" y="8" width="4" height="1" fill="#502b0a" />
  </svg>
);

const VideoCallSimulation: React.FC = () => {
    return (
      <div className="w-full border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(34,197,94,1)] bg-slate-900">
        {/* Window Header */}
        <div className="bg-slate-100 px-4 py-2 flex justify-between items-center border-b-2 border-slate-900">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-slate-300 border border-slate-400" />
            <div className="w-3 h-3 bg-slate-300 border border-slate-400" />
            <div className="w-3 h-3 bg-slate-300 border border-slate-400" />
          </div>
          <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">EVIDENCE_LOG: USR_SESSION_04</span>
        </div>
  
        {/* Video Area */}
        <div className="relative bg-slate-800 aspect-video overflow-hidden flex flex-col group">
           {/* Mock Screen Share Header */}
           <div className="bg-white border-b border-slate-200 p-2 flex items-center gap-4 text-[10px] font-mono text-slate-500">
              <span className="font-bold text-slate-900">Cloud Console</span>
              <span>/</span>
              <span>Instances</span>
           </div>
  
           {/* Mock Content (Database List) */}
           <div className="p-4 space-y-3 flex-1 bg-slate-50">
              {[1, 2, 3].map((i) => (
                  <div key={i} className={`flex items-center justify-between p-3 border bg-white transition-colors duration-1000 ${i === 2 ? 'border-green-500 bg-green-50/30' : 'border-slate-200'}`}>
                      <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                          <div className="space-y-1">
                            <div className="w-24 h-2 bg-slate-200 rounded-sm" />
                            <div className="w-16 h-1 bg-slate-100 rounded-sm" />
                          </div>
                      </div>
                      <div className="w-12 h-2 bg-slate-100 rounded-sm" />
                  </div>
              ))}
           </div>
  
           {/* Cursor Animation */}
           <div className="absolute top-[45%] left-[60%] w-0 h-0 
                border-l-[12px] border-l-slate-900 
                border-t-[18px] border-t-transparent 
                border-r-[6px] border-r-transparent 
                -rotate-12 drop-shadow-md animate-bounce z-10" 
           />
  
           {/* PIP (Participant Face) */}
           <div className="absolute bottom-4 right-4 w-16 h-16 bg-slate-800 border-2 border-green-500 shadow-lg overflow-hidden z-20">
              <PixelFace />
              {/* Name Tag */}
              <div className="absolute bottom-0 left-0 w-full bg-green-500 text-slate-900 text-[8px] font-bold text-center font-mono">
                  PARTICIPANT
              </div>
           </div>
           
           {/* Controls Overlay */}
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-slate-900/90 backdrop-blur-sm rounded-sm border border-slate-700">
               <div className="w-6 h-6 bg-slate-700 flex items-center justify-center hover:bg-slate-600 cursor-pointer" >
                    <div className="w-2 h-3 border-b-2 border-white rounded-b-lg" />
               </div>
               <div className="w-6 h-6 bg-red-500 flex items-center justify-center hover:bg-red-600 cursor-pointer" >
                    <div className="w-2 h-2 bg-white rounded-[1px]" />
               </div>
           </div>
        </div>
      </div>
    )
  }

const WorkflowJourney: React.FC = () => {
    const steps = [
        { id: '01', status: 'error', label: 'Identification' },
        { id: '02', status: 'error', label: 'Interpretation' },
        { id: '03', status: 'error', label: 'Action' },
        { id: '04', status: 'error', label: 'Verification' },
    ];

    return (
        <div className="border-2 border-slate-900 bg-white p-8 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(34,197,94,1)]">
            <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4">
                <h3 className="font-mono text-xs font-bold uppercase text-slate-900 tracking-widest">Remediation Journey</h3>
                <span className="font-mono text-[10px] text-slate-500">Workflow Audit</span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between gap-4 relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -z-10 hidden md:block" />

                {steps.map((step) => (
                    <div key={step.id} className="flex-1 flex flex-col items-center gap-4 bg-white p-4 border border-transparent relative group">
                        
                        {/* Status Node */}
                        <div className={`w-12 h-12 flex items-center justify-center border-2 font-mono font-bold z-10 transition-all duration-300 ${
                            step.status === 'error' 
                            ? 'bg-red-50 border-red-500 text-red-500 shadow-[4px_4px_0px_0px_rgba(239,68,68,0.4)]' 
                            : 'bg-white border-slate-900 text-slate-900'
                        }`}>
                            {step.id}
                        </div>

                        {/* Label */}
                        <div className="text-center">
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${step.status === 'error' ? 'text-red-600' : 'text-slate-500'}`}>
                                STEP_{step.id}
                            </span>
                            <p className={`text-sm font-bold mt-1 ${step.status === 'error' ? 'text-slate-900' : 'text-slate-400'}`}>
                                {step.label}
                            </p>
                        </div>
                        
                        {/* Error Marker */}
                        {step.status === 'error' && (
                            <div className="absolute -top-2 -right-2">
                                <div className="w-4 h-4 bg-red-500 animate-pulse rounded-full" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            <div className="mt-8 p-4 bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-500 flex gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white border border-slate-900" />
                    <span>Standard Flow</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500" />
                    <span>High Friction / Blockers</span>
                </div>
            </div>
        </div>
    );
};

const RecommendationsCaseStudy: React.FC = () => {
    return (
        <div className="bg-white">
            <Section id="hero" className="items-start pt-40 relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-gradient-to-br from-green-400 to-pink-300 opacity-30 mix-blend-multiply rotate-12" />
                    <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-full bg-gradient-to-tl from-green-500 to-rose-400 opacity-20 mix-blend-multiply -rotate-12" />
                </div>

                <div className="relative z-10">
                    <div className="inline-block mb-6 px-3 py-1 border-2 border-slate-900 bg-white text-slate-900 text-xs font-mono uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(34,197,94,1)]">
                        Affordance Audit
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                        DEAD<br/>CLICKS
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-light leading-relaxed mb-12 bg-white/80 backdrop-blur-sm p-4 border-l-4 border-green-500">
                        Diagnosing the failure to launch of high-value proactive features.
                    </p>
                </div>
            </Section>

            <Section id="problem" title="The Disconnect" subtitle="01 / Context">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-7 flex flex-col gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">The Domain</h3>
                            <p className="text-slate-600 leading-relaxed text-lg font-light">
                                This project lies in the domain of recommendations for managed databases. While Managed Databases take care of some things for users (like patching), there are many actions that users still need to take (like scaling).
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-4 text-lg font-light">
                                The user of a managed database might not be familiar with it, and hence the database provides "recommendations" on various topics like security, performance, and so on.
                            </p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-6 py-2 bg-green-50/50">
                            <h4 className="font-bold text-green-700 mb-2 text-xs uppercase tracking-widest">The Project</h4>
                            <p className="text-slate-800 leading-relaxed italic text-lg">
                                "The 'recommendations' feature - designed to proactively surface contextual issues and suggest fixes - was suffering from critically low adoption despite its strong intended value."
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-5 flex items-center justify-center bg-slate-50 border-2 border-slate-900 p-8 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(34,197,94,1)]">
                        <div className="w-full max-w-sm bg-white border border-slate-300 shadow-sm p-6 relative">
                            <div className="flex justify-between items-start mb-6">
                                <span className="font-mono text-[10px] text-slate-400 uppercase">ID: REC-2024</span>
                                <span className="bg-amber-100 text-amber-700 border border-amber-200 text-[10px] font-bold px-2 py-1 uppercase tracking-wide rounded-sm">
                                    High Severity
                                </span>
                            </div>
                            <div className="mb-8">
                                <h4 className="text-slate-900 font-bold text-lg mb-2 tracking-tight">Increase Storage Capacity</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    You are almost out of storage on Instance A. Current usage is at 94%.
                                </p>
                            </div>
                            <div className="border-t border-slate-100 pt-4 flex gap-8">
                                <div>
                                    <span className="block text-[8px] font-mono text-slate-400 uppercase mb-1">Category</span>
                                    <span className="text-xs font-bold text-slate-700">Provisioning</span>
                                </div>
                                <div>
                                    <span className="block text-[8px] font-mono text-slate-400 uppercase mb-1">Impact</span>
                                    <span className="text-xs font-bold text-slate-700">Availability</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="catalyst" title="The Data Gap" subtitle="02 / Catalyst">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Massive Underuse</h3>
                        <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light">
                            Analytics confirmed the feature's failure to launch. We observed a stark contrast: the system was successfully generating thousands of valid recommendations, but user interaction (views and clicks) was effectively non-existent.
                        </p>
                        <div className="p-4 bg-red-50 border border-red-200 text-red-800 font-mono text-xs">
                            ALERT: 10x discrepancy between GENERATED vs VIEWED events.
                        </div>
                    </div>
                    <AdoptionChart />
                </div>
            </Section>

            <Section id="action" title="The Investigation" subtitle="03 / Methodology">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-3xl">
                        <p className="text-xl text-slate-800 leading-relaxed mb-12 font-light tracking-tight">
                            I conducted qualitative research, asking a wide range of users to show me their screens and talk about how they used (or didn't use) recommendations.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-lg font-light">
                            Observing the "Wild" habitat of the user revealed behaviors that telemetry missed. Users would navigate to their instance lists, hover over indicators, but fail to engage with the intended remediation paths.
                        </p>
                    </div>
                    <div className="relative">
                        <VideoCallSimulation />
                        <p className="text-[10px] font-mono text-slate-400 text-center mt-4 uppercase tracking-widest">
                            Fig 3.1: Remote Observation Session
                        </p>
                    </div>
                </div>
            </Section>

            <Section id="outcome" title="The Findings" subtitle="04 / Evidence">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">False Affordances</h3>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg font-light">
                            The research validated the feature's core utility but identified significant UX hurdles. The primary issue was presentation.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                            The way issues were being presented to users made it not obvious that they could be clicked. This lack of visual cues acted as a barrier to entry.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-lg font-light">
                            Furthermore, the study mapped the entire remediation journey once an issue was identified. While we won't detail the specific operational steps here, the analysis revealed critical friction points downstream where users were blocked or forced into manual workarounds.
                        </p>
                    </div>
                    <div className="lg:col-span-7">
                        <WorkflowJourney />
                    </div>
                </div>
            </Section>

            <Section id="impact" title="The Impact" subtitle="05 / Resolution">
                <div className="bg-green-50 border-2 border-green-900 p-12 shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(34,197,94,1)]">
                    <h3 className="text-3xl font-bold mb-6 text-green-800 tracking-tight">Comprehensive findings to make recommendations more effective</h3>
                    <p className="text-slate-700 text-lg font-light leading-relaxed max-w-3xl mb-8">
                        These findings were absorbed by the team over time. It started with small changes to how issues were stylised to indicate interactivity, and ended with larger changes to the content of recommendations to ensure they were contextually relevant to the user's workflow.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <span className="font-mono text-[10px] bg-white border border-green-300 px-3 py-1 text-green-700 uppercase font-bold tracking-wide">UI Overhaul</span>
                        <span className="font-mono text-[10px] bg-white border border-green-300 px-3 py-1 text-green-700 uppercase font-bold tracking-wide">Content Strategy</span>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default RecommendationsCaseStudy;