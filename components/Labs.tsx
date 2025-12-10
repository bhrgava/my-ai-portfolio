import React, { useState } from 'react';
import { StarIcon, RobotIcon, LayoutIcon, CheckCircleIcon, LinkIcon } from './Icons';

const Section: React.FC<{
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ id, title, subtitle, children, className = "" }) => (
  <section id={id} className={`flex flex-col justify-center py-24 px-6 relative ${className}`}>
    <div className="max-w-5xl mx-auto w-full z-10">
      {(title || subtitle) && (
        <div className="mb-16">
           {subtitle && <span className="text-purple-600 font-mono text-xs uppercase tracking-widest mb-3 block font-bold">{subtitle}</span>}
           {title && <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">{title}</h2>}
        </div>
      )}
      {children}
    </div>
  </section>
);

const labsData = [
    {
      stage: 'Reviewing the literature',
      ideas: [
        {
          title: 'Find related studies',
          description: 'Ai can be used to find studies for literature review internally or externally.',
          tool: 'An internal AI tool if available for internal studies. Use Gemini or ChatGPT prompts for external studies.',
          type: 'Bot',
          reliability: 'Somewhat effective. This can be a good starting point. There would be no way to trust that the list of studies presented by the AI is complete.',
          rating: 2,
          impactRating: 3,
        },
        {
          title: 'Analyse different sources',
          description: 'Once a group of studies has been selected, AI can be used to compare and contrast the different sources, making a literature map. The focus here is to take small steps that can be easy to verify.',
          tool: 'Gemini or ChatGPT prompts may work. Something like NotebookLM may work but I’vefound that more specialised tools can be “locked down” to make them less effective. ( for example they may not be able to generate graphics)',
          type: 'Bot',
          reliability: 'Somewhat Effective. AI has become pretty accurate at this task. But this a step that takes “understanding” the material into account, and AI cannot be depended on to do this independently in depth.',
          rating: 3,
          impactRating: 3,
        },
      ],
    },
    {
      stage: 'Collecting data',
      ideas: [
        {
          title: 'Generate script or other instruments from study plan.',
          description: 'Once the details of a study have been fixed - method, research goal, key questions - AI can be used to turn the study plan into a script or other instruments.',
          tool: 'Gemini or ChatGPT prompts',
          type: 'Bot',
          reliability: 'Effective, but the researcher would still need to verify the output to ensure it is thorough and doesn\'t contain errors.',
          rating: 4,
          impactRating: 4,
        },
        {
          title: 'Test the data collection instrument.',
          description: 'AI can be used to test a data collection instrument by using it to simulate an actual participant.',
          tool: 'Gemini or ChatGPT prompts',
          type: 'Bot',
          reliability: 'Very effective',
          rating: 5,
          impactRating: 4,
        },
        {
          title: 'Interview Assistant',
          description: 'Give the AI the moderator guide and study plan, and ask AI to monitor an interview and suggest prompts.',
          tool: 'AI Studio with Gemini',
          type: 'App',
          reliability: 'Mildly Effective. (you don’t have to test it live, you can test it with a recording). There is a world where this can be a good use case, where the AI knows about internal documents and external knowledge about a particular topic being discussed. We’re not there yet.',
          rating: 2,
          impactRating: 2,
        },
        {
            title: 'Real time prototyping',
            description: 'Use AI to modify existing screens as per participant feedback in co creation sessions',
            tool: 'AI Studio with Gemini',
            type: 'App',
            reliability: 'Effective. Even better, Studio can convert an image of an interface into a full blown prototype for capturing even more detail. The only issue here would be managing the time taken to generate a good interface.',
            rating: 4,
            impactRating: 4,
        },
      ],
    },
    {
      stage: 'Analysing Data',
      ideas: [
        {
          title: 'Cleaning interview transcripts from note taking tools',
          description: 'Say you use a 3rd party tool to create transcripts for interviews. These will be messy, containing time stamps and filler words. The contents of these interviews will also need to be manually put next to the questions they were answered for. AI can help clean transcripts.',
          tool: 'AI Studio with Gemini - A mini app can be created in AI studio that takes interview transcripts as input and gives out a table of the research questions in one column, and interview responses in other columns. Can also probably be achieved with prompts on Gemini or ChatGPT.',
          type: 'App',
          reliability: 'Mildly Effective. The last time I used it, the LLM “forgot” parts of the interview transcript. Might get better in the future.',
          rating: 2,
          impactRating: 2,
        },
        {
          title: 'Finding quotes from within interview transcripts',
          description: 'The way I’ve used this is - I use Sheets to code the data I collect in interviews. Then,when compiling a report, I need to illustrate my points with quotes. I use AI to help me find quotes related to specific codes.',
          tool: 'Gemini or ChatGPT prompts, Gemini within Google Sheets is particularly effective at this,',
          type: 'Bot',
          reliability: 'Effective. Once qualitative data has been coded, AI can be used to find the corresponding quotes for a code. In Sheets this can be done very fast if the values are adjacent to each other.',
          rating: 4,
          impactRating: 3,
        },
        {
          title: 'Coding Open ended Survey Responses with an existing codebook',
          description: 'Using AI to take a set of open ended text responses and code them as per a pre defined codebook',
          tool: 'Gemini or ChatGPT prompts. Context windows are very large now, so data and the codebook can be given to these LLMs as part of a prompt.',
          type: 'Bot',
          reliability: 'Effective. An accuracy rate of 60-70% can be expected, which saves a significant amount of time. Complications arise if each sentence in the response has a different code or if multiple codes might be applicable to the same response.',
          rating: 4,
          impactRating: 4,
        },
      ],
    },
    {
      stage: 'Reporting and evaluating the research',
      ideas: [
        {
            title: 'Styling the report',
            description: 'The report must be written manually, but once written AI would be very useful in styling it - not just visually but to align with various style guidelines.',
            tool: 'Gemini or ChatGPT prompts',
            type: 'Bot',
            reliability: 'Very effective. Ai is good at following guidelines around styling and language.',
            rating: 5,
            impactRating: 3,
        },
        {
          title: 'Turning a report into an “audio podcast”',
          description: 'Ai can be used to turn a presentation deck into an engaging audio podcast',
          tool: 'NotebookLM',
          type: 'Bot',
          reliability: 'Very effective. High quality content.',
          rating: 5,
          impactRating: 2,
        },
        {
          title: 'Generating visualisations',
          description: 'AI can be used to generate interesting visualisations for data.',
          tool: 'AI Studio + Gemini: I made an app to convert data into a variety of graphs.',
          type: 'App',
          reliability: 'Very effective - AI Studio can make apps which don’t need an LLM to function.',
          rating: 5,
          impactRating: 3,
        },
      ],
    },
];

// --- Generative Art Helpers ---

// A simple seeded pseudo-random number generator to ensure graphics are consistent for each card.
function sfc32(a: number, b: number, c: number, d: number) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}

// Creates a seed from a string (the idea's title).
function getSeed(str: string): [number, number, number, number] {
    let h1 = 1779033703, h2 = 3144134277,
        h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1, k);
        h2 = h3 ^ Math.imul(h2, k);
        h3 = h4 ^ Math.imul(h3, k);
        h4 = h1 ^ Math.imul(h4, k);
    }
    return [h1>>>0, h2>>>0, h3>>>0, h4>>>0];
}

const IdeaHeaderGraphic: React.FC<{ idea: typeof labsData[0]['ideas'][0]; stage: string; isOpen: boolean }> = ({ idea, stage, isOpen }) => {
    const seed = getSeed(idea.title);
    const rand = sfc32(seed[0], seed[1], seed[2], seed[3]);
    
    const width = 400;
    const height = 120;
    
    const accentColors = ['#3b82f6', '#f59e0b', '#ec4899', '#ef4444', '#22c55e'];
    const colors = {
        c1: accentColors[Math.floor(rand() * accentColors.length)],
        c2: accentColors[Math.floor(rand() * accentColors.length)],
        dark: '#0f172a',
        light: '#f1f5f9',
    };

    const elements = [];
    const isApp = idea.type === 'App';
    
    // Content-derived metrics
    const titleWords = idea.title.split(' ').length;
    const titleLengthFactor = Math.min(idea.title.length / 40, 1); // Normalize
    const reliabilityFactor = idea.rating / 5; // 0 to 1

    // Generate elements based on the research stage
    switch (stage) {
        case 'Reviewing the literature':
            // Layered rectangles (papers) driven by word count, lines (text) driven by title length.
            for (let i = 0; i < titleWords; i++) {
                const w = rand() * 100 + (30 * idea.impactRating);
                const h = rand() * 60 + (10 * idea.impactRating);
                elements.push(
                    <rect
                        key={`lit-r-${i}`}
                        x={rand() * (width - w)}
                        y={rand() * (height - h)}
                        width={w}
                        height={h}
                        fill={i % 2 === 0 ? colors.c1 : colors.c2}
                        opacity={0.1 + rand() * 0.2}
                        style={{
                            animation: isOpen ? `fade-scale-in 0.6s ${i * 0.05}s ease-out forwards` : 'none',
                            transformOrigin: 'center center'
                        }}
                    />
                );
            }
            for (let i = 0; i < idea.title.length / 3; i++) {
                const y = rand() * height;
                const xOffset = (1 - reliabilityFactor) * (rand() - 0.5) * 50; // Jitter based on reliability
                elements.push(
                    <line 
                        key={`lit-l-${i}`}
                        x1={xOffset} y1={y}
                        x2={width + xOffset} y2={y}
                        stroke={colors.dark}
                        strokeWidth={0.5 + rand()}
                        opacity={0.3}
                        strokeDasharray="500"
                        style={{
                            animation: isOpen ? `draw-in 0.8s ${0.2 + i * 0.02}s ease-out forwards` : 'none',
                        }}
                    />
                )
             }
            break;
        
        case 'Collecting data':
            // Circles (primary ideas), lines (connections), squares (data points).
            const isGenerate = idea.title.toLowerCase().includes('generate');
            for (let i = 0; i < idea.impactRating; i++) {
                elements.push(
                    <circle 
                        key={`data-c-${i}`}
                        cx={rand() * width}
                        cy={rand() * height}
                        r={rand() * 15 + 10}
                        fill={isGenerate ? colors.c1 : 'none'}
                        stroke={colors.c1}
                        strokeWidth={2}
                        fillOpacity={0.2}
                        style={{
                            animation: isOpen ? `fade-scale-in 0.5s ${i * 0.08}s ease-out forwards` : 'none',
                            transformOrigin: 'center center'
                        }}
                    />
                );
            }
            for (let i = 0; i < idea.rating + titleWords; i++) {
                 const x1 = rand() * width;
                 const y1 = rand() * height;
                 const length = 40 + rand() * 50;
                 const angle = (rand() - 0.5) * Math.PI * (1 - reliabilityFactor);
                 const x2 = x1 + Math.cos(angle) * length;
                 const y2 = y1 + Math.sin(angle) * length;
                 elements.push(
                    <line 
                        key={`data-l-${i}`}
                        x1={x1} y1={y1}
                        x2={x2} y2={y2}
                        stroke={colors.dark}
                        strokeWidth={0.5 + rand()}
                        opacity={0.6}
                        strokeDasharray="500"
                        style={{
                            animation: isOpen ? `draw-in 1s ${0.3 + i * 0.05}s ease-out forwards` : 'none',
                        }}
                    />
                 );
            }
            // Add small data points based on title length
            for (let i = 0; i < idea.title.length; i++) {
                elements.push(<rect key={`data-p-${i}`} x={rand()*width} y={rand()*height} width="2" height="2" fill={colors.c2} opacity={0.5} style={{ animation: isOpen ? `fade-scale-in 0.4s ${0.5 + i * 0.01}s ease-out forwards` : 'none'}}/>)
            }
            break;

        case 'Analysing Data':
            // Grid size based on title length, point clusters based on ratings.
            const gridSize = 15 + (1 - titleLengthFactor) * 40;
            for (let x = 0; x < width + gridSize; x += gridSize) {
                elements.push(<line key={`grid-v-${x}`} x1={x} y1={0} x2={x-gridSize} y2={height} stroke={colors.light} strokeWidth={1} style={{ animation: isOpen ? `draw-in 1.5s ease-out forwards` : 'none' }} strokeDasharray="500"/>);
            }
            const numClusters = titleWords > 4 ? 3 : 2;
            for (let i = 0; i < numClusters; i++) {
                const clusterX = rand() * width;
                const clusterY = rand() * height;
                for(let j = 0; j < idea.impactRating * 5; j++) {
                     const deviation = (1 - reliabilityFactor) * 50;
                     elements.push(
                        <circle 
                            key={`ana-c-${i}-${j}`}
                            cx={clusterX + (rand() - 0.5) * deviation}
                            cy={clusterY + (rand() - 0.5) * deviation}
                            r={2 + rand() * 3}
                            fill={i % 2 === 0 ? colors.c1 : colors.c2}
                            style={{
                                animation: isOpen ? `fade-scale-in 0.5s ${0.2 + (i*j) * 0.01}s ease-out forwards` : 'none',
                                transformOrigin: 'center center'
                            }}
                        />
                    );
                }
            }
            break;

        case 'Reporting and evaluating the research':
            // Primary shape determined by first letter of title. Ordered background lines.
            const firstCharCode = idea.title.charCodeAt(0);
            const mainShapeType = firstCharCode % 3; // 0 for rect, 1 for circle, 2 for triangle

            const size = 30 + idea.impactRating * 10;
            const x = width / 2 - size / 2 + (rand() - 0.5) * 100;
            const y = height / 2 - size / 2;
            const distortion = (1 - reliabilityFactor) * 10;

            if (mainShapeType === 0) {
                 elements.push(<rect key="rep-main" x={x} y={y} width={size} height={size} fill={colors.c1} opacity={0.9} style={{ animation: isOpen ? `fade-scale-in 0.7s 0.1s ease-out forwards` : 'none', transformOrigin: 'center center' }}/>)
            } else if (mainShapeType === 1) {
                 elements.push(<circle key="rep-main" cx={x + size/2} cy={y + size/2} r={size/2} fill={colors.c1} opacity={0.9} style={{ animation: isOpen ? `fade-scale-in 0.7s 0.1s ease-out forwards` : 'none', transformOrigin: 'center center' }}/>)
            } else {
                 const path = `M${x} ${y+size} L${x+size/2 + (rand()-0.5)*distortion} ${y} L${x+size} ${y+size} Z`;
                 elements.push(<path key="rep-main" d={path} fill={colors.c1} opacity={0.9} style={{ animation: isOpen ? `fade-scale-in 0.7s 0.1s ease-out forwards` : 'none', transformOrigin: 'center center' }}/>)
            }

            for (let i = 0; i < 5 + titleLengthFactor * 20; i++) {
                const startX = (width / (5 + titleLengthFactor * 20 + 1)) * (i + 1);
                elements.push(
                     <line 
                        key={`rep-l-${i}`}
                        x1={startX} y1={0}
                        x2={startX} y2={height}
                        stroke={colors.dark}
                        strokeWidth={0.5}
                        opacity={0.15}
                        strokeDasharray="500"
                        style={{
                            animation: isOpen ? `draw-in 1s ${0.3 + i * 0.02}s ease-out forwards` : 'none',
                        }}
                    />
                );
            }
            break;
    }

    return (
        <div className="border-y border-slate-200 bg-slate-50 overflow-hidden relative" aria-hidden="true">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" preserveAspectRatio="xMidYMid slice">
                <rect key="bg" width={width} height={height} fill="#f8fafc" />
                {elements}
            </svg>
            <div className="absolute top-3 right-3 p-2 bg-white/60 backdrop-blur-sm rounded-md border border-slate-900/10 shadow">
                {isApp 
                    ? <LayoutIcon className="w-6 h-6 text-slate-600" title="App" /> 
                    : <RobotIcon className="w-6 h-6 text-slate-600" title="Bot" />
                }
            </div>
        </div>
    );
};


const IdeaCard: React.FC<{
  idea: typeof labsData[0]['ideas'][0];
  stage: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ idea, stage, isOpen, onToggle }) => {
    // Some data points from the user are incomplete, we will filter them out.
    if (!idea.title || (!idea.description && !idea.reliability)) return null;

    return (
        <div 
            className="border-2 border-slate-900 bg-white rounded-lg transition-all duration-300 ease-in-out cursor-pointer shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(147,51,234,1)] hover:shadow-[2px_2px_0px_0px_rgba(236,72,153,1),4px_4px_0px_0px_rgba(147,51,234,1)] hover:-translate-x-1 hover:-translate-y-1"
            onClick={onToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
            aria-expanded={isOpen}
        >
            <div className="p-6 flex justify-between items-start gap-4">
                <h3 className="font-bold text-slate-900 text-lg tracking-tight pr-4">{idea.title}</h3>
                <div className="flex flex-col gap-2 flex-shrink-0 text-right">
                    {idea.impactRating > 0 && (
                         <div className="flex items-center gap-2" aria-label={`Impact: ${idea.impactRating} out of 5 stars`}>
                            <span className="text-[10px] font-mono text-slate-500 uppercase">Impact</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon 
                                        key={i}
                                        className={`w-3 h-3 ${i < idea.impactRating ? 'text-blue-400' : 'text-slate-300'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    {idea.rating > 0 && (
                        <div className="flex items-center gap-2" aria-label={`Reliability: ${idea.rating} out of 5 stars`}>
                            <span className="text-[10px] font-mono text-slate-500 uppercase">Reliability</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon 
                                        key={i}
                                        className={`w-3 h-3 ${i < idea.rating ? 'text-amber-400' : 'text-slate-300'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <IdeaHeaderGraphic idea={idea} stage={stage} isOpen={isOpen} />
                <div className="p-6 pt-4">
                    {idea.description && <p className="text-slate-600 font-light mb-4 text-base leading-relaxed">{idea.description}</p>}
                    
                    <div className="grid sm:grid-cols-2 gap-4 text-sm font-mono">
                        {idea.tool && (
                            <div>
                                <h4 className="text-slate-400 uppercase tracking-widest mb-1">Tool</h4>
                                <p className="text-slate-800">{idea.tool}</p>
                            </div>
                        )}
                        {idea.reliability && (
                            <div>
                                <h4 className="text-slate-400 uppercase tracking-widest mb-1">Impact and Reliability</h4>
                                <p className="text-slate-800">{idea.reliability}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


const Labs: React.FC = () => {
    const [openCards, setOpenCards] = useState<Record<string, boolean>>({});

    const handleToggleCard = (title: string) => {
        setOpenCards(prev => ({
            ...prev,
            [title]: !prev[title]
        }));
    };

    const safetyQuestions = [
        "Is your data being retained? If yes, for how long?",
        "Is your data being used to train the model?",
        "Is your data visible to employees of the company that makes the LLM?",
        "Is it possible that your chats can turn up in Google searches? (yes this really happened once)"
    ];

    const careReasons = [
        "those unaware of the feature were more likely to be uncomfortable about it being enabled by default",
        "even those who were aware of the feature didn’t know how to check what data was being stored.",
        "increased awareness about sharing data with an LLM led to more concerns about what was being stored."
    ];

    const references = [
        { href: "https://lnkd.in/gdwHAF4S", text: "A Survey on Privacy Risks and Protection in Large Language Models" },
        { href: "https://lnkd.in/giF2rXPB", text: "Analysis of the Content of ChatGPT's Memory" },
        { href: "https://lnkd.in/gYHefZnj", text: "Data stored by Gemini" },
        { href: "https://lnkd.in/gfUeFxV9", text: "Data stored by Copilot" },
    ];


    return (
        <div className="bg-white">
            <Section id="hero" className="items-start pt-40 !min-h-screen">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-1/4 -left-14 w-1/2 h-full bg-gradient-to-br from-purple-400 to-pink-300 opacity-30 mix-blend-multiply rotate-12" />
                    <div className="absolute -bottom-1/s4 -right-1/4 w-1/2 h-full bg-gradient-to-tl from-purple-500 to-rose-400 opacity-20 mix-blend-multiply -rotate-12" />
                </div>

                <div className="relative z-10">
                    <div className="inline-block mb-6 px-3 py-1 border-2 border-slate-900 bg-white text-slate-900 text-xs font-mono uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(147,51,234,1)]">
                        Experimental
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                        AI LABS
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-light leading-relaxed mb-12 bg-white/80 backdrop-blur-sm p-4 border-l-4 border-purple-500">
                        A collection of experiments using AI at various stages of a research study.
                    </p>
                </div>
            </Section>
            
            <div className="py-24 px-6 space-y-24">
                {labsData.map(section => (
                    <div key={section.stage} id={section.stage.toLowerCase().replace(/\s/g, '-')}>
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 pb-4 border-b border-slate-200">
                                {section.stage}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                                {section.ideas.map(idea => (
                                    <IdeaCard 
                                        key={idea.title} 
                                        idea={idea} 
                                        stage={section.stage}
                                        isOpen={!!openCards[idea.title]}
                                        onToggle={() => handleToggleCard(idea.title)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Content Sections */}
            <Section id="additional-content" className="border-t border-slate-200 !min-h-0">
                <div className="space-y-24">
                    
                    {/* --- Using AI Tool Safely --- */}
                    <div className="border-2 border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(147,51,234,1)] p-8 md:p-12">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Using AI Tool Safely</h2>
                        <p className="text-slate-600 font-light leading-relaxed max-w-3xl mb-10">If you use AI tools, see how long it takes you to answer the following:</p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {safetyQuestions.map((q, i) => (
                                <div key={i} className="bg-slate-50 border border-slate-200 p-6">
                                    <span className="font-mono text-xs text-purple-600">Q{i+1}</span>
                                    <p className="mt-2 font-medium text-slate-800">{q}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-16 grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-4">Why should you care?</h3>
                                <p className="text-slate-600 font-light leading-relaxed mb-6">When researchers surveyed ChatGPT users about its memory feature, they found that:</p>
                                <ul className="space-y-4">
                                    {careReasons.map((reason, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                                            <p className="text-slate-600 font-light">{reason}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-4">What can you do?</h3>
                                <p className="text-slate-600 font-light leading-relaxed">In an enterprise setting, safety usually means a combination of an AI policy + a secure environment.</p>
                                <p className="mt-4 text-slate-600 font-light leading-relaxed">For consumer LLMs, if you worry about privacy one immediate action to take is to turn off data retention. For example, in the Gemini app, chat history is <span className="font-bold text-slate-800 bg-slate-200 px-1">ON by default</span>. Toggling this to OFF will stop the app from using data for model training. The best advice is to <span className="font-bold text-slate-800 bg-purple-100 px-1">not use them at work for confidential information</span>.</p>
                            </div>
                        </div>

                        <div className="mt-16 border-t border-slate-200 pt-8">
                            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">References</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {references.map(ref => (
                                    <a href={ref.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-3 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors">
                                        <LinkIcon className="w-4 h-4 text-slate-400 group-hover:text-purple-600 transition-colors" />
                                        <span className="text-sm text-slate-700 group-hover:text-slate-900">{ref.text}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- Prompting LLMs --- */}
                    <div className="border-2 border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(236,72,153,1),8px_8px_0px_0px_rgba(147,51,234,1)] p-8 md:p-12">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Prompting LLMs</h2>
                        <p className="text-slate-600 font-light leading-relaxed max-w-3xl mb-10">Natural Language Prompts are how we speak to LLMs - this post talks about some learnings as a UXR on how to prompt LLMs effectively.</p>
                        
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-4">Structured Prompts</h3>
                                <p className="text-slate-600 font-light leading-relaxed">Are you prompting LLMs mainly through single sentences? This can be useful for non critical tasks, but for anything where more control is needed, a structured approach results in better results. This involves giving more context - tell the AI who you are, what you want it to be, and specific instructions for what to do.</p>
                                <div className="mt-6 p-6 bg-slate-50 border-l-4 border-purple-500">
                                    <p className="font-mono text-sm text-slate-800">One article suggests remembering this as <span className="font-bold">CRAFT</span>: Context, Request, Actions, Framing constraints, and Template for output.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-4">Prompts as Algorithm</h3>
                                <p className="text-slate-600 font-light leading-relaxed">Is your primary mode of using LLMs by having conversations? This can be useful for one-off requests, but a more useful approach is to treat the prompt as an algorithm:</p>
                                <ol className="mt-6 space-y-3 list-decimal list-inside font-mono text-sm text-slate-700">
                                    <li>Write a structured prompt & run it.</li>
                                    <li>Result not what you want?</li>
                                    <li>Make changes to the original prompt.</li>
                                    <li>Refresh chat & run the whole prompt again.</li>
                                    <li>Repeat until correct.</li>
                                    <li>Save the prompt in a recipe book.</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>

        </div>
    );
};

export default Labs;