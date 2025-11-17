import React from 'react';
import { AlertIcon, ChartBarIcon, SearchIcon, XCircleIcon } from './Icons';

const Step: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  status?: 'problem' | 'blocked';
  isLast?: boolean;
}> = ({ icon, title, description, status = 'problem', isLast = false }) => {
  
  const isProblem = status === 'problem';

  return (
    <div className={`relative flex gap-8 ${isLast ? '' : 'pb-12'}`}>
      {/* Connector Line */}
      {!isLast && (
        <div className={`absolute left-[22px] top-12 bottom-0 w-[1px] ${isProblem ? 'border-l border-red-400 border-dashed' : 'bg-slate-200'}`} />
      )}
      
      {/* Icon Bubble */}
      <div className={`relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center border bg-white
        ${isProblem 
          ? 'border-red-500 text-red-500' 
          : 'border-slate-200 text-slate-400'
        }`}>
        {icon}
      </div>

      {/* Content */}
      <div className="pt-2">
        <h4 className={`font-bold text-lg uppercase tracking-tight ${isProblem ? 'text-red-600' : 'text-slate-900'}`}>
            {title}
        </h4>
        <p className={`text-sm mt-2 leading-relaxed max-w-prose font-light ${isProblem ? 'text-slate-600' : 'text-slate-500'}`}>
            {description}
        </p>
      </div>
    </div>
  );
};

const UserJourney: React.FC = () => {
  return (
    <div className="bg-white p-8 border border-slate-200 shadow-[10px_10px_0px_0px_rgba(241,245,249,1)]">
      <div className="flex justify-between items-end mb-12 border-b border-slate-100 pb-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest font-mono">
            User Workflow Audit
          </h3>
          <span className="text-xs font-mono font-bold text-red-600 uppercase">
              Status: Critical_Failure
          </span>
      </div>
      
      <Step 
        icon={<AlertIcon className="w-6 h-6" />}
        title="Detection"
        description="Signal ambiguous. Cannot isolate node overload."
        status="problem"
      />
      
      <Step 
        icon={<ChartBarIcon className="w-6 h-6" />}
        title="Investigation"
        description="Metric vacuum. Internal distribution invisible."
        status="problem"
      />
      
      <Step 
        icon={<SearchIcon className="w-6 h-6" />}
        title="Root Cause"
        description="Guesswork. Hot key identification impossible."
        status="problem"
      />
      
      <Step 
        icon={<XCircleIcon className="w-6 h-6" />}
        title="Resolution"
        description="Blocked. Action requires data that does not exist."
        status="blocked"
        isLast={true}
      />
    </div>
  );
};

export default UserJourney;