import React, { useState } from 'react';
import { StarIcon } from './Icons';

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
          description: 'Ai can be used to find studies for literature review internally or externally. Use AI to parse important information so that the studies can be compared.',
          tool: 'An internal AI tool if available for internal studies. Use Gemini or ChatGPT prompts for external studies.',
          reliability: 'Somewhat effective. This can be a good starting point. There would be no way to trust that the list of studies presented by the AI is complete.',
          rating: 2,
          impactRating: 3,
        },
        {
          title: 'Analyse different sources',
          description: 'Once a group of studies has been selected, AI can be used to compare and contrast the different sources, making a literature map. The focus here is to take small steps that can be easy to verify.',
          tool: 'Gemini or ChatGPT prompts may work. Something like NotebookLM may work but I’ve found that more specialised tools can be “locked down” to make them less effective. ( for example they may not be able to generate graphics)',
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
          reliability: 'Effective, but the researcher would still need to verify the output to ensure it is thorough and doesn\'t contain errors.',
          rating: 4,
          impactRating: 4,
        },
        {
          title: 'Test the data collection instrument.',
          description: 'AI can be used to test a data collection instrument by using it to simulate an actual participant.',
          tool: 'Gemini or ChatGPT prompts',
          reliability: 'Very effective',
          rating: 5,
          impactRating: 4,
        },
        {
          title: 'Interview Assistant',
          description: 'Give the AI the moderator guide and study plan, and ask AI to monitor an interview and suggest prompts.',
          tool: 'AI Studio with Gemini',
          reliability: 'Mildly Effective. (you don’t have to test it live, you can test it with a recording). There is a world where this can be a good use case, where the AI knows about internal documents and external knowledge about a particular topic being discussed. We’re not there yet.',
          rating: 2,
          impactRating: 2,
        },
        {
            title: 'Real time prototyping',
            description: 'Use AI to modify existing screens as per participant feedback in co creation sessions',
            tool: 'AI Studio with Gemini',
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
          reliability: 'Mildly Effective. The last time I used it, the LLM “forgot” parts of the interview transcript. Might get better in the future.',
          rating: 2,
          impactRating: 2,
        },
        {
          title: 'Finding quotes from within interview transcripts',
          description: 'The way I’ve used this is - I use Sheets to code the data I collect in interviews. Then,when compiling a report, I need to illustrate my points with quotes. I use AI to help me find quotes related to specific codes.',
          tool: 'Gemini or ChatGPT prompts, Gemini within Google Sheets is particularly effective at this,',
          reliability: 'Effective. Once qualitative data has been coded, AI can be used to find the corresponding quotes for a code. In Sheets this can be done very fast if the values are adjacent to each other.',
          rating: 4,
          impactRating: 3,
        },
        {
          title: 'Coding Open ended Survey Responses with an existing codebook',
          description: 'Using AI to take a set of open ended text responses and code them as per a pre defined codebook',
          tool: 'Gemini or ChatGPT prompts. Context windows are very large now, so data and the codebook can be given to these LLMs as part of a prompt.',
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
            reliability: 'Very effective. Ai is good at following guidelines around styling and language.',
            rating: 5,
            impactRating: 3,
        },
        {
          title: 'Turning a report into an “audio podcast”',
          description: 'Ai can be used to turn a presentation deck into an engaging audio podcast',
          tool: 'NotebookLM',
          reliability: 'Very effective. High quality content.',
          rating: 5,
          impactRating: 2,
        },
        {
          title: 'Generating visualisations',
          description: 'AI can be used to generate interesting visualisations for data.',
          tool: 'AI Studio + Gemini: I made an app to convert data into a variety of graphs.',
          reliability: 'Very effective - AI Studio can make apps which don’t need an LLM to function.',
          rating: 5,
          impactRating: 3,
        },
      ],
    },
];

const IdeaCard: React.FC<{
  idea: typeof labsData[0]['ideas'][0];
  isOpen: boolean;
  onToggle: () => void;
}> = ({ idea, isOpen, onToggle }) => {
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
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="border-t border-slate-200 p-6 pt-4">
                    {idea.description && <p className="text-slate-600 font-light mb-4 text-sm leading-relaxed">{idea.description}</p>}
                    
                    <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
                        {idea.tool && (
                            <div>
                                <h4 className="text-slate-400 uppercase tracking-widest mb-1">Tool</h4>
                                <p className="text-slate-800">{idea.tool}</p>
                            </div>
                        )}
                        {idea.reliability && (
                            <div>
                                <h4 className="text-slate-400 uppercase tracking-widest mb-1">Reliability</h4>
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

    return (
        <div className="bg-white">
            <Section id="hero" className="items-start pt-40 relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-gradient-to-br from-purple-400 to-pink-300 opacity-30 mix-blend-multiply rotate-12" />
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
                                        isOpen={!!openCards[idea.title]}
                                        onToggle={() => handleToggleCard(idea.title)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Labs;