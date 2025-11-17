import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { time: '10:00', latency: 20, ops: 1200 },
  { time: '10:05', latency: 22, ops: 1350 },
  { time: '10:10', latency: 21, ops: 1250 },
  { time: '10:15', latency: 25, ops: 1400 },
  { time: '10:20', latency: 180, ops: 4500 }, // SPIKE
  { time: '10:25', latency: 450, ops: 4800 },
  { time: '10:30', latency: 420, ops: 4700 },
  { time: '10:35', latency: 380, ops: 4600 },
  { time: '10:40', latency: 25, ops: 1300 }, // RESOLVED (Simulated)
  { time: '10:45', latency: 22, ops: 1200 },
];

const CatalystDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
      {/* Chart 1: Latency */}
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-200 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                p99 Latency (ms)
            </h3>
            <span className="text-xs bg-rose-500/10 text-rose-400 px-2 py-1 rounded border border-rose-500/20">Critical Alert</span>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}
                itemStyle={{ color: '#f43f5e' }}
              />
              <Area type="monotone" dataKey="latency" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#colorLatency)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-400 mt-2">Customer reports "slowness" starting around 10:20 AM.</p>
      </div>

      {/* Chart 2: Throughput */}
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-200 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Total Operations / Sec
            </h3>
            <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">Live</span>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}
              />
              <Line type="monotone" dataKey="ops" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-400 mt-2">High throughput correlates with latency spikes, suggesting capacity limits on specific shards.</p>
      </div>
    </div>
  );
};

export default CatalystDashboard;
